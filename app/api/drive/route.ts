import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ---------------------------------------------------------------------------
// Manual JWT auth — zero external dependencies
// ---------------------------------------------------------------------------

function base64url(data: string | Buffer): string {
  const buf = typeof data === "string" ? Buffer.from(data) : data;
  return buf.toString("base64url");
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const key = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/drive",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );

  const signature = crypto
    .createSign("RSA-SHA256")
    .update(`${header}.${payload}`)
    .sign(key);

  const jwt = `${header}.${payload}.${base64url(signature)}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const data = await res.json();
  return data.access_token;
}

// ---------------------------------------------------------------------------
// Drive REST helpers
// ---------------------------------------------------------------------------

const API = "https://www.googleapis.com/drive/v3";
const UPLOAD = "https://www.googleapis.com/upload/drive/v3";

async function driveFind(token: string, name: string, parentId: string) {
  const q = encodeURIComponent(
    `name = '${name.replace(/'/g, "\\'")}' and '${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
  );
  const res = await fetch(
    `${API}/files?q=${q}&fields=files(id,webViewLink)&supportsAllDrives=true&includeItemsFromAllDrives=true`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const data = await res.json();
  const f = data.files?.[0];
  return f ? { id: f.id as string, url: (f.webViewLink || `https://drive.google.com/drive/folders/${f.id}`) as string } : null;
}

async function driveMkdir(token: string, name: string, parentId: string) {
  const res = await fetch(`${API}/files?fields=id,webViewLink&supportsAllDrives=true`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ name, mimeType: "application/vnd.google-apps.folder", parents: [parentId] }),
  });
  const d = await res.json();
  return { id: d.id as string, url: (d.webViewLink || `https://drive.google.com/drive/folders/${d.id}`) as string };
}

async function driveShare(token: string, fileId: string) {
  await fetch(`${API}/files/${fileId}/permissions?supportsAllDrives=true`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ role: "writer", type: "anyone" }),
  });
}

async function findRegionFolder(token: string, region: string, parentId: string) {
  const names: Record<string, string[]> = {
    AU: ["AU", "Australia"], UK: ["UK", "United Kingdom"], IE: ["IE", "Ireland"],
    NZ: ["NZ", "New Zealand"], CA: ["CA", "Canada"], US: ["US", "USA", "United States"],
  };
  for (const n of names[region] || [region]) {
    const f = await driveFind(token, n, parentId);
    if (f) return f.id;
  }
  return null;
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const ct = request.headers.get("content-type") || "";

    if (ct.includes("application/json")) {
      const { practiceName, region } = await request.json();
      if (!practiceName) return NextResponse.json({ success: false, error: "Missing practiceName" }, { status: 400 });

      const parentId = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;
      if (!parentId) return NextResponse.json({ success: false, error: "Drive not configured" }, { status: 500 });

      const token = await getAccessToken();
      const year = new Date().getFullYear();

      let regionId = parentId;
      if (region) {
        const found = await findRegionFolder(token, region, parentId);
        if (found) regionId = found;
      }

      let practice = await driveFind(token, practiceName, regionId);
      if (!practice) practice = await driveMkdir(token, practiceName, regionId);

      const assetsName = `Website Assets ${year}`;
      let assets = await driveFind(token, assetsName, practice.id);
      if (!assets) {
        assets = await driveMkdir(token, assetsName, practice.id);
        await driveShare(token, assets.id);
      }

      return NextResponse.json({
        success: true,
        folderId: assets.id,
        folderUrl: assets.url,
        folderName: `${practiceName} / ${assetsName}`,
      });
    }

    if (ct.includes("multipart/form-data")) {
      const form = await request.formData();
      const file = form.get("file") as File | null;
      const folderId = form.get("folderId") as string | null;
      if (!file || !folderId) return NextResponse.json({ success: false, error: "Missing file or folderId" }, { status: 400 });

      const token = await getAccessToken();
      const buf = Buffer.from(await file.arrayBuffer());
      const boundary = "----UploadBoundary";
      const meta = JSON.stringify({ name: file.name, parents: [folderId] });
      const body = Buffer.concat([
        Buffer.from(`--${boundary}\r\nContent-Type: application/json\r\n\r\n${meta}\r\n--${boundary}\r\nContent-Type: ${file.type || "application/octet-stream"}\r\n\r\n`),
        buf,
        Buffer.from(`\r\n--${boundary}--`),
      ]);

      const res = await fetch(`${UPLOAD}/files?uploadType=multipart&fields=id,name,webViewLink&supportsAllDrives=true`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": `multipart/related; boundary=${boundary}` },
        body,
      });
      const d = await res.json();

      return NextResponse.json({ success: true, fileId: d.id, fileName: d.name, fileUrl: d.webViewLink });
    }

    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  } catch (err: unknown) {
    console.error("Drive API error:", err);
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
  }
}
