"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, ExternalLink, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { WizardData } from "../WizardContainer";
import FormField, { TextArea, RadioGroup } from "../ui/FormField";

interface AssetsContentProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

export default function AssetsContent({ data, updateData }: AssetsContentProps) {
  const [creatingFolder, setCreatingFolder] = useState(false);
  const [folderError, setFolderError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const folderId = data.assetsFolderId || "";
  const folderUrl = data.assetsFolderUrl || "";

  const createFolder = useCallback(async () => {
    if (!data.practiceName || folderId) return;

    setCreatingFolder(true);
    setFolderError(null);

    try {
      const res = await fetch("/api/drive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ practiceName: data.practiceName, region: data.practiceRegion }),
      });

      const json = await res.json();

      if (json.success) {
        updateData({
          assetsFolderId: json.folderId,
          assetsFolderUrl: json.folderUrl,
        });
      } else {
        setFolderError(json.error || "Failed to create folder");
      }
    } catch {
      setFolderError("Something went wrong creating your assets folder.");
    } finally {
      setCreatingFolder(false);
    }
  }, [data.practiceName, folderId, updateData]);

  useEffect(() => {
    if (data.practiceName && !folderId) {
      createFolder();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || !folderId) return;

    setUploading(true);
    const newFiles: string[] = [];

    for (const file of Array.from(files)) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folderId", folderId);

        const res = await fetch("/api/drive", {
          method: "POST",
          body: formData,
        });

        const json = await res.json();
        if (json.success) {
          newFiles.push(json.fileName);
        }
      } catch {
        // Skip failed uploads
      }
    }

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    setUploading(false);
  };

  const hasAssets = data.hasAssets || "";

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Assets &amp; imagery
        </h2>
        <p className="text-text-muted">
          Great imagery helps bring your website to life. Let us know what you have available.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          label="Do you have practice photos, staff imagery, or patient photos you'd like us to use?"
          required
        >
          <RadioGroup
            options={[
              {
                value: "yes",
                label: "Yes — we have assets ready to share",
                description: "Staff photos, practice images, patient photos, before & afters, etc.",
              },
              {
                value: "some",
                label: "We have some, but not everything",
                description: "We can work with what you have and source the rest.",
              },
              {
                value: "no",
                label: "Not right now",
                description: "That's fine — we can get started without them.",
              },
            ]}
            value={hasAssets}
            onChange={(value) => updateData({ hasAssets: value })}
          />
        </FormField>

        {/* Upload section — yes or some */}
        {(hasAssets === "yes" || hasAssets === "some") && (
          <div className="space-y-4">
            {creatingFolder && (
              <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <span className="text-sm text-text-muted">Creating your assets folder...</span>
              </div>
            )}

            {folderError && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-700">{folderError}</p>
                  <button onClick={createFolder} className="text-sm text-red-600 font-medium mt-1 hover:underline">Try again</button>
                </div>
              </div>
            )}

            {folderId && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 bg-green-50 border border-green-200 rounded-xl"
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Your assets folder is ready</p>
                    <p className="text-sm text-green-600 mt-0.5">
                      Upload files below, or drop them directly into your Google Drive folder anytime.
                    </p>
                    <a
                      href={folderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-green-700 font-medium mt-2 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open folder in Google Drive
                    </a>
                  </div>
                </div>

                <label className="flex flex-col items-center justify-center w-full py-6 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:border-green-400 transition-colors bg-white/50">
                  {uploading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin text-green-600" />
                      <span className="text-sm text-green-600">Uploading...</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-green-500 mb-2" />
                      <p className="text-sm text-green-700 font-medium">Click to upload files</p>
                      <p className="text-xs text-green-500 mt-0.5">Practice photos, team imagery, before &amp; afters, patient photos</p>
                    </>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(e) => handleFileUpload(e.target.files)}
                    disabled={uploading}
                  />
                </label>

                {uploadedFiles.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    <p className="text-xs text-green-600 font-medium">
                      {uploadedFiles.length} file{uploadedFiles.length !== 1 ? "s" : ""} uploaded:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {uploadedFiles.map((name, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-white rounded-full text-green-700 border border-green-200">
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}

        {/* Not right now */}
        {hasAssets === "no" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 bg-secondary/10 rounded-xl"
          >
            <p className="text-sm text-primary font-medium mb-1">No problem at all</p>
            <p className="text-sm text-text-muted mb-3">
              Assets aren&apos;t essential for the design stage, but professional imagery will make a real difference
              to how your website looks and feels when we move into the build. When you&apos;re ready, you can drop
              them straight into your dedicated assets folder.
            </p>
            {folderId ? (
              <a
                href={folderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open your assets folder
              </a>
            ) : creatingFolder ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm text-text-muted">Setting up your folder...</span>
              </div>
            ) : (
              <button onClick={createFolder} className="text-sm text-primary font-medium hover:underline">
                Create your assets folder
              </button>
            )}
          </motion.div>
        )}

        {/* Testimonials */}
        <div>
          <label className="block text-sm font-medium text-primary mb-3">
            Do you have any existing testimonials or reviews you&apos;d like us to feature?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <RadioGroup
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            value={data.hasTestimonials}
            onChange={(value) => updateData({ hasTestimonials: value as "yes" | "no" })}
            layout="horizontal"
          />
        </div>

        {data.hasTestimonials === "yes" && (
          <FormField
            label="Please paste links or provide guidance on which reviews/testimonials to feature"
            required
          >
            <TextArea
              value={data.testimonialsGuidance}
              onChange={(value) => updateData({ testimonialsGuidance: value })}
              placeholder="e.g. Link to Google reviews page, specific testimonials to highlight, or guidance on which patients to feature..."
              rows={4}
            />
          </FormField>
        )}
      </div>
    </div>
  );
}
