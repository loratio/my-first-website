import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SitemapPage {
  id: string;
  title: string;
  path: string;
  children: SitemapPage[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const BRAND_NAMES: Record<string, string> = {
  invisalign: "Invisalign",
  botox: "Botox",
  cerec: "CEREC",
  itero: "iTero",
  zoom: "Zoom",
  nhs: "NHS",
  faq: "FAQ",
  faqs: "FAQs",
  covid: "COVID",
  cbct: "CBCT",
};

/** Paths that should be collapsed — only show the parent, not individual posts/items */
const COLLAPSIBLE_SECTIONS = [
  "/blog",
  "/news",
  "/articles",
  "/posts",
  "/category",
  "/tag",
  "/author",
];

/** Pages that shouldn't appear in the sitemap tree (legal, utility, etc.) */
const EXCLUDED_SLUGS = [
  "privacy-policy",
  "privacy",
  "terms-and-conditions",
  "terms-of-service",
  "terms",
  "cookies-policy",
  "cookie-policy",
  "cookies",
  "complaints-policy",
  "complaints",
  "disclaimer",
  "gdpr",
  "accessibility",
  "sitemap",
];

/** Decode common HTML entities in link text */
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™")
    .replace(/&copy;/g, "©")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num)));
}

function normalizeUrl(raw: string): string {
  let url = raw.trim();
  url = url.replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  return url;
}

function slugToTitle(slug: string): string {
  if (!slug) return "Home";
  const lower = slug.toLowerCase();
  if (BRAND_NAMES[lower]) return BRAND_NAMES[lower];
  const words = slug.replace(/[-_]/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
}

function pathToId(path: string): string {
  if (path === "/") return "home";
  return path
    .replace(/^\//, "")
    .replace(/\/+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase();
}

async function fetchWithTimeout(url: string, timeoutMs = 10_000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SitemapFetcher/1.0; +https://example.com)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
    });
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Sitemap XML parsing
// ---------------------------------------------------------------------------

function extractUrlsFromSitemapXml(xml: string): string[] {
  const urls: string[] = [];
  const locRegex = /<loc>\s*(.*?)\s*<\/loc>/gi;
  let match: RegExpExecArray | null;
  while ((match = locRegex.exec(xml)) !== null) {
    const url = match[1].trim();
    if (url) urls.push(url);
  }
  return urls;
}

// ---------------------------------------------------------------------------
// HTML navigation extraction — preserves order as it appears on the page
// ---------------------------------------------------------------------------

interface NavLink {
  href: string;
  text: string;
}

function extractNavLinks(html: string, baseUrl: string): NavLink[] {
  const origin = new URL(baseUrl).origin;
  const links: NavLink[] = [];
  const seenPaths = new Set<string>();

  // Try to extract links from <nav> or <header> first for proper ordering.
  // We look for <a> tags with both href and visible text.
  const aTagRegex = /<a\s[^>]*?href=["']([^"'#]+?)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;

  while ((match = aTagRegex.exec(html)) !== null) {
    let href = match[1].trim();
    // Strip HTML tags from the link text, decode entities, clean up whitespace
    const text = decodeHtmlEntities(match[2].replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();

    if (!href || !text) continue;
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;

    // Resolve relative URLs
    if (href.startsWith("/")) {
      href = `${origin}${href}`;
    }

    try {
      const parsed = new URL(href);
      if (parsed.origin !== origin) continue;
      const path = parsed.pathname.replace(/\/+$/, "") || "/";

      // Deduplicate by path
      if (seenPaths.has(path)) continue;
      seenPaths.add(path);

      links.push({ href: parsed.href, text });
    } catch {
      // Skip invalid
    }
  }

  return links;
}

function extractAllLinksAsUrls(html: string, baseUrl: string): string[] {
  const origin = new URL(baseUrl).origin;
  const urls = new Set<string>();

  const hrefRegex = /<a\s[^>]*?href=["']([^"'#]+?)["'][^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = hrefRegex.exec(html)) !== null) {
    let href = match[1].trim();
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
    if (href.startsWith("/")) href = `${origin}${href}`;
    try {
      const parsed = new URL(href);
      if (parsed.origin === origin) urls.add(parsed.href);
    } catch {
      // skip
    }
  }

  return Array.from(urls);
}

// ---------------------------------------------------------------------------
// Path filtering — collapse blog posts, remove junk
// ---------------------------------------------------------------------------

function shouldCollapsePath(path: string): boolean {
  // Normalize: strip trailing slashes, lowercase
  const lower = path.replace(/\/+$/, "").toLowerCase();
  for (const section of COLLAPSIBLE_SECTIONS) {
    // If the path is a child of a collapsible section (e.g. /blog/my-post), skip it
    // but keep the parent itself (e.g. /blog)
    if (lower !== section && (lower.startsWith(section + "/") || lower.startsWith(section + "?"))) {
      return true;
    }
  }
  return false;
}

function isJunkPath(path: string): boolean {
  const lower = path.toLowerCase().replace(/\/+$/, "");
  const lastSegment = lower.split("/").filter(Boolean).pop() || "";

  // Excluded legal/utility pages
  if (EXCLUDED_SLUGS.includes(lastSegment)) return true;

  // Old/draft pages (ending in -old, -draft, -copy, -test, -backup)
  if (/-(?:old|draft|copy|test|backup|temp|archive)\d*$/.test(lastSegment)) return true;

  // URL encoding issues (spaces, weird chars)
  if (path.includes("%20") || path.includes("%09")) return true;

  // Skip common non-page paths
  return (
    lower.startsWith("/wp-content") ||
    lower.startsWith("/wp-admin") ||
    lower.startsWith("/wp-includes") ||
    lower.startsWith("/wp-json") ||
    lower.startsWith("/feed") ||
    lower.startsWith("/xmlrpc") ||
    lower.startsWith("/cdn-cgi") ||
    lower.startsWith("/.") ||
    lower.endsWith(".xml") ||
    lower.endsWith(".json") ||
    lower.endsWith(".css") ||
    lower.endsWith(".js") ||
    lower.endsWith(".png") ||
    lower.endsWith(".jpg") ||
    lower.endsWith(".pdf") ||
    lower.includes("/page/") ||
    lower.includes("/attachment/") ||
    lower.startsWith("/tag/") ||
    lower.startsWith("/category/") ||
    lower.startsWith("/author/")
  );
}

// ---------------------------------------------------------------------------
// Tree building — uses nav order as primary, sitemap for discovery
// ---------------------------------------------------------------------------

function buildTree(
  navLinks: NavLink[],
  sitemapUrls: string[],
  baseUrl: string
): SitemapPage[] {
  const origin = new URL(baseUrl).origin;

  // Collect all unique paths from both sources
  // Nav links come first (preserving their order), then sitemap fills gaps
  const orderedPaths: { path: string; title: string }[] = [];
  const seenPaths = new Set<string>();

  // 1. Nav links (in order they appear on the page)
  for (const link of navLinks) {
    try {
      const u = new URL(link.href);
      if (u.origin !== origin) continue;
      const p = u.pathname.replace(/\/+$/, "") || "/";
      if (seenPaths.has(p) || isJunkPath(p) || shouldCollapsePath(p)) continue;
      seenPaths.add(p);
      orderedPaths.push({ path: p, title: link.text || slugToTitle(p.split("/").pop() || "") });
    } catch {
      // skip
    }
  }

  // 2. Sitemap URLs (fill in pages not found in nav)
  for (const raw of sitemapUrls) {
    try {
      const u = new URL(raw);
      if (u.origin !== origin) continue;
      const p = u.pathname.replace(/\/+$/, "") || "/";
      if (seenPaths.has(p) || isJunkPath(p) || shouldCollapsePath(p)) continue;
      seenPaths.add(p);
      orderedPaths.push({ path: p, title: slugToTitle(p.split("/").pop() || "") });
    } catch {
      // skip
    }
  }

  // Move booking/consultation pages to the end of top-level nav
  const bookingKeywords = ["book", "consultation", "appointment", "contact", "enquir", "get-in-touch"];
  const isBookingPage = (p: { path: string; title: string }) => {
    const lower = p.path.toLowerCase() + " " + p.title.toLowerCase();
    // Only move top-level pages (not deeply nested ones)
    const depth = p.path.split("/").filter(Boolean).length;
    return depth <= 1 && bookingKeywords.some((kw) => lower.includes(kw));
  };

  const bookingPages = orderedPaths.filter(isBookingPage);
  const nonBookingPages = orderedPaths.filter((p) => !isBookingPage(p));

  // Sort booking pages: contact first, then booking/consultation
  bookingPages.sort((a, b) => {
    const aIsContact = a.path.toLowerCase().includes("contact") || a.title.toLowerCase().includes("contact");
    const bIsContact = b.path.toLowerCase().includes("contact") || b.title.toLowerCase().includes("contact");
    if (aIsContact && !bIsContact) return -1;
    if (!aIsContact && bIsContact) return 1;
    return 0;
  });

  orderedPaths.length = 0;
  orderedPaths.push(...nonBookingPages, ...bookingPages);

  // Deduplicate: if the same slug exists under different parents
  // (e.g. /invisalign and /treatments/invisalign), keep the deeper one
  const slugToPath = new Map<string, string>();
  const duplicatePaths = new Set<string>();

  for (const { path } of orderedPaths) {
    if (path === "/") continue;
    const slug = path.split("/").filter(Boolean).pop() || "";
    if (!slug) continue;
    const existing = slugToPath.get(slug);
    if (existing) {
      // Keep the one with more path segments (more structured)
      const existingDepth = existing.split("/").filter(Boolean).length;
      const currentDepth = path.split("/").filter(Boolean).length;
      if (currentDepth > existingDepth) {
        // Current is deeper — mark existing and its children as duplicates
        duplicatePaths.add(existing);
        for (const { path: p } of orderedPaths) {
          if (p.startsWith(existing + "/")) duplicatePaths.add(p);
        }
        slugToPath.set(slug, path);
      } else {
        // Existing is deeper — mark current and its children as duplicates
        duplicatePaths.add(path);
        for (const { path: p } of orderedPaths) {
          if (p.startsWith(path + "/")) duplicatePaths.add(p);
        }
      }
    } else {
      slugToPath.set(slug, path);
    }
  }

  // Remove duplicates
  const dedupedPaths = orderedPaths.filter(({ path }) => !duplicatePaths.has(path));

  // Ensure homepage is first
  const hasHome = dedupedPaths.some(({ path }) => path === "/");
  if (!hasHome) {
    dedupedPaths.unshift({ path: "/", title: "Home" });
  }

  // Ensure collapsible parent sections exist if we have child references
  const dedupedPathSet = new Set(dedupedPaths.map(({ path }) => path));
  for (const section of COLLAPSIBLE_SECTIONS) {
    const hasChildren = [...dedupedPathSet].some(
      (p) => p.toLowerCase().startsWith(section + "/")
    ) || dedupedPathSet.has(section);
    if (hasChildren && !dedupedPathSet.has(section)) {
      dedupedPathSet.add(section);
      dedupedPaths.push({ path: section, title: slugToTitle(section.replace("/", "")) });
    }
  }

  // Build lookup map preserving insertion order
  const nodeMap = new Map<string, SitemapPage>();
  for (const { path, title } of dedupedPaths) {
    nodeMap.set(path, {
      id: pathToId(path),
      title: decodeHtmlEntities(title),
      path,
      children: [],
    });
  }

  // Link children to parents
  const roots: SitemapPage[] = [];

  for (const { path } of dedupedPaths) {
    const node = nodeMap.get(path)!;
    if (path === "/") {
      roots.push(node);
      continue;
    }

    // Walk up to find closest parent
    const segments = path.replace(/^\//, "").split("/");
    let parentFound = false;
    for (let i = segments.length - 1; i >= 1; i--) {
      const parentPath = "/" + segments.slice(0, i).join("/");
      const parent = nodeMap.get(parentPath);
      if (parent) {
        parent.children.push(node);
        parentFound = true;
        break;
      }
    }
    if (!parentFound) {
      const home = nodeMap.get("/");
      if (home) {
        home.children.push(node);
      } else {
        roots.push(node);
      }
    }
  }

  return roots;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const rawUrl: unknown = body?.url;

    if (!rawUrl || typeof rawUrl !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing or invalid `url` in request body." },
        { status: 400 },
      );
    }

    const baseUrl = normalizeUrl(rawUrl);

    try {
      new URL(baseUrl);
    } catch {
      return NextResponse.json(
        { success: false, error: "The provided URL is not valid." },
        { status: 400 },
      );
    }

    let sitemapUrls: string[] = [];
    let navLinks: NavLink[] = [];
    let htmlLinks: string[] = [];

    // ------- Fetch homepage HTML (always, for nav order) -------
    let homepageHtml = "";
    try {
      const res = await fetchWithTimeout(baseUrl);
      if (res.ok) {
        homepageHtml = await res.text();
        navLinks = extractNavLinks(homepageHtml, baseUrl);
        htmlLinks = extractAllLinksAsUrls(homepageHtml, baseUrl);
      }
    } catch {
      // Homepage fetch failed
    }

    // ------- Fetch sitemap.xml for additional page discovery -------
    try {
      const sitemapUrl = `${baseUrl}/sitemap.xml`;
      const res = await fetchWithTimeout(sitemapUrl);
      if (res.ok) {
        const xml = await res.text();

        // Check if it's a sitemap index (contains links to other sitemaps)
        if (xml.includes("<sitemapindex")) {
          const subSitemapUrls = extractUrlsFromSitemapXml(xml);
          // Only fetch the first few sub-sitemaps to avoid blog/post sitemaps
          // Typically the first one is the pages sitemap
          for (const subUrl of subSitemapUrls.slice(0, 2)) {
            try {
              // Skip sitemaps that are clearly blog/post sitemaps
              const subLower = subUrl.toLowerCase();
              if (subLower.includes("post") || subLower.includes("blog") || subLower.includes("news")) continue;
              const subRes = await fetchWithTimeout(subUrl);
              if (subRes.ok) {
                const subXml = await subRes.text();
                sitemapUrls.push(...extractUrlsFromSitemapXml(subXml));
              }
            } catch {
              // Skip failed sub-sitemap
            }
          }
        } else {
          sitemapUrls = extractUrlsFromSitemapXml(xml);
        }
      }
    } catch {
      // Sitemap fetch failed
    }

    // If we got nothing from nav, fall back to HTML links
    if (navLinks.length === 0 && htmlLinks.length > 0) {
      navLinks = htmlLinks.map((url) => {
        try {
          const u = new URL(url);
          const slug = u.pathname.split("/").filter(Boolean).pop() || "";
          return { href: url, text: slugToTitle(slug) };
        } catch {
          return { href: url, text: "" };
        }
      }).filter((l) => l.text);
    }

    if (navLinks.length === 0 && sitemapUrls.length === 0) {
      return NextResponse.json(
        { success: false, error: "No pages could be discovered from this URL." },
        { status: 404 },
      );
    }

    const pages = buildTree(navLinks, sitemapUrls, baseUrl);

    return NextResponse.json({ success: true, pages });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
