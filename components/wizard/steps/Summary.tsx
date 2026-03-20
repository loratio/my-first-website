"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, ExternalLink, ChevronDown, ChevronRight, Lock } from "lucide-react";
import { WizardData } from "../WizardContainer";

interface SummaryProps {
  data: WizardData;
  goToStep: (step: number) => void;
  updateData: (updates: Partial<WizardData>) => void;
}

function SectionCard({
  title,
  step,
  goToStep,
  children,
}: {
  title: string;
  step: number;
  goToStep: (step: number) => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: step * 0.02 }}
      className="bg-secondary/20 rounded-xl p-5"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-primary">{title}</h3>
        <button
          onClick={() => goToStep(step)}
          className="flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors"
        >
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
      </div>
      {children}
    </motion.div>
  );
}

function DataRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="py-1.5">
      <span className="text-sm text-text-muted">{label}: </span>
      <span className="text-sm font-medium text-primary">
        {value || <span className="text-text-muted italic font-normal">Not provided</span>}
      </span>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  if (!items || items.length === 0) {
    return <span className="text-sm text-text-muted italic">None selected</span>;
  }
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <span key={item} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
          {item.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
      ))}
    </div>
  );
}

const styleNames: Record<string, string> = {
  minimal: "Minimal", bold: "Bold", elegant: "Elegant", playful: "Playful",
  corporate: "Corporate", creative: "Creative", modern: "Modern", classic: "Classic",
};

const personaNames: Record<string, string> = {
  "friendly-expert": "The friendly expert",
  "premium-specialist": "The premium specialist",
  "family-practice": "The family practice",
  "modern-innovator": "The modern innovator",
  "clinical-professional": "The clinical professional",
};

const paletteNames: Record<string, string> = {
  "keep-brand": "Keep existing brand colours",
  reds: "Reds", oranges: "Oranges", yellows: "Yellows", greens: "Greens",
  teals: "Teals", blues: "Blues", purples: "Purples", pinks: "Pinks",
  monochrome: "Monochrome", luxe: "Luxe", earthy: "Earthy",
  bold: "Bold", pastels: "Pastels", muted: "Muted",
};

const paletteColors: Record<string, string[]> = {
  reds: ["#7f1d1d", "#dc2626", "#ef4444", "#fca5a5", "#fef2f2"],
  oranges: ["#7c2d12", "#ea580c", "#f97316", "#fdba74", "#fff7ed"],
  yellows: ["#713f12", "#ca8a04", "#eab308", "#fde047", "#fefce8"],
  greens: ["#14532d", "#16a34a", "#4ade80", "#bbf7d0", "#f0fdf4"],
  teals: ["#134e4a", "#0d9488", "#2dd4bf", "#99f6e4", "#f0fdfa"],
  blues: ["#0f1b3d", "#2563eb", "#3b82f6", "#93c5fd", "#dbeafe"],
  purples: ["#3b0764", "#7c3aed", "#a78bfa", "#c4b5fd", "#ede9fe"],
  pinks: ["#831843", "#ec4899", "#f472b6", "#fbcfe8", "#fdf2f8"],
  monochrome: ["#111827", "#4b5563", "#9ca3af", "#d1d5db", "#f9fafb"],
  luxe: ["#0a0a0a", "#1c1917", "#c9b99a", "#e7dfd0", "#f5f5f0"],
  earthy: ["#422006", "#78716c", "#a16207", "#bfa57a", "#f5f0e8"],
  bold: ["#1e3a5f", "#dc2626", "#f59e0b", "#10b981", "#8b5cf6"],
  pastels: ["#fecaca", "#fde68a", "#bbf7d0", "#bfdbfe", "#ddd6fe"],
  muted: ["#44403c", "#78716c", "#a8a29e", "#d6d3d1", "#f5f5f4"],
};

const regionNames: Record<string, string> = {
  UK: "United Kingdom", IE: "Ireland", AU: "Australia",
  NZ: "New Zealand", CA: "Canada", US: "United States",
};

const contentStyleNames: Record<string, string> = {
  "short-simple": "Short & simple",
  "warm-conversational": "Warm & conversational",
  "detailed-informative": "Detailed & informative",
  "premium-polished": "Premium & polished",
};

// ---------------------------------------------------------------------------
// Wireframe preview
// ---------------------------------------------------------------------------

function WireframePreview({ wireframe }: { wireframe: string[] }) {
  const [open, setOpen] = useState(false);

  if (wireframe.length === 0) {
    return <p className="text-text-muted text-sm italic">No layout configured</p>;
  }

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-light transition-colors"
      >
        {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        {open ? "Hide preview" : "Show preview"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2 max-w-sm">
              <div className="rounded-lg border-2 border-dashed border-primary/20 bg-primary/5 flex items-center justify-center px-3 py-2">
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Lock className="w-3 h-3" />
                  Homepage hero
                </div>
              </div>
              {wireframe.map((id, i) => (
                <div key={id} className="rounded-lg border-2 border-primary/20 bg-primary/5 flex items-center justify-center px-3 py-2.5">
                  <span className="text-xs font-medium text-primary">
                    {id.includes("+") ? id.split("+").join(" / ") : id.replace(/-/g, " ")}
                  </span>
                </div>
              ))}
              <div className="rounded-lg border-2 border-dashed border-green-200 bg-green-50 flex items-center justify-center px-3 py-2">
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Lock className="w-3 h-3" />
                  Consultation CTA
                </div>
              </div>
              <div className="rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center px-3 py-2">
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Lock className="w-3 h-3" />
                  Location footer
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sitemap preview
// ---------------------------------------------------------------------------

interface SitemapNode {
  id: string;
  title: string;
  path: string;
  status: "keep" | "remove" | "add";
  children: SitemapNode[];
}

function SitemapTreeNode({ node, depth }: { node: SitemapNode; depth: number }) {
  const statusStyles = {
    keep: "text-primary",
    remove: "text-red-400 line-through",
    add: "text-green-600",
  };
  const badge = {
    keep: null,
    remove: <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full ml-1.5">removing</span>,
    add: <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full ml-1.5">new</span>,
  };

  return (
    <div>
      <div className="flex items-center py-1" style={{ paddingLeft: depth * 16 }}>
        <span className={`text-xs font-medium ${statusStyles[node.status]}`}>{node.title}</span>
        {badge[node.status]}
      </div>
      {node.children?.map((child) => (
        <SitemapTreeNode key={child.id} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

function SitemapPreview({ pages }: { pages: SitemapNode[] }) {
  const [open, setOpen] = useState(false);
  const pageCount = pages[0]?.children?.length || 0;

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-light transition-colors"
      >
        {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        {open ? "Hide sitemap" : `Show sitemap (${pageCount} pages)`}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 p-3 bg-white/50 rounded-lg border border-secondary/30 max-h-80 overflow-y-auto">
              {pages.map((page) => (
                <SitemapTreeNode key={page.id} node={page} depth={0} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export default function Summary({ data, goToStep, updateData }: SummaryProps) {
  const isNewBuild = data.isNewMember === "yes";

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Review your responses
        </h2>
        <p className="text-text-muted">
          Please review your answers below. Click &quot;Edit&quot; on any section to make changes.
        </p>
      </div>

      <div className="space-y-6">
        {/* Step 1: Member type */}
        <SectionCard title="Member status" step={1} goToStep={goToStep}>
          <DataRow
            label="Type"
            value={isNewBuild ? "New website build" : data.isNewMember === "no" ? "Website refresh" : null}
          />
        </SectionCard>

        {/* Step 2: Contacts */}
        <SectionCard title="Contacts" step={2} goToStep={goToStep}>
          <DataRow label="Region" value={regionNames[data.practiceRegion] || data.practiceRegion} />
          <DataRow label="Practice name" value={data.practiceName} />
          <DataRow label="Practice URL" value={data.practiceUrl} />
          <DataRow label="Primary contact" value={data.primaryContact} />
          <DataRow label="Email" value={data.primaryEmail} />
          {data.primaryPhone && <DataRow label="Phone" value={data.primaryPhone} />}
        </SectionCard>

        {/* Step 3: Locations (new builds only) */}
        {isNewBuild && (
          <SectionCard title="Locations & enquiries" step={3} goToStep={goToStep}>
            <DataRow label="Number of locations" value={data.locationCount.toString()} />
            {data.locations.map((location, index) => (
              <div key={index} className="mt-3 p-3 bg-white/50 rounded-lg">
                <p className="text-sm font-medium text-primary mb-2">Location {index + 1}</p>
                {location.name && <DataRow label="Name" value={location.name} />}
                {location.address && <DataRow label="Address" value={location.address} />}
                {location.phone && <DataRow label="Phone" value={location.phone} />}
                {location.openingHours && <DataRow label="Opening hours" value={location.openingHours} />}
              </div>
            ))}
            {data.enquiryEmails && <DataRow label="Enquiry emails" value={data.enquiryEmails} />}
          </SectionCard>
        )}

        {/* Step 4: Goals & homepage */}
        <SectionCard title="Goals & homepage priorities" step={4} goToStep={goToStep}>
          <DataRow
            label="Primary goal"
            value={data.primaryGoal === "other" ? data.primaryGoalOther : data.primaryGoal?.replace(/-/g, " ")}
          />
          <div className="py-1.5">
            <span className="text-sm text-text-muted">Top actions:</span>
            <TagList items={data.topActions} />
          </div>
          {data.topActions?.includes("other") && data.topActionsOther && (
            <DataRow label="Other action" value={data.topActionsOther} />
          )}
          <div className="py-1.5">
            <span className="text-sm text-text-muted">Homepage priorities:</span>
            <TagList items={data.homepagePriorities} />
          </div>
          {data.homepagePriorities?.includes("other") && data.homepagePrioritiesOther && (
            <DataRow label="Other priorities" value={data.homepagePrioritiesOther} />
          )}
        </SectionCard>

        {/* Step 5: Homepage layout */}
        <SectionCard title="Homepage layout" step={5} goToStep={goToStep}>
          <DataRow label="Approved" value={data.wireframeApproved ? "Yes" : "Not yet"} />
          <WireframePreview wireframe={data.homepageWireframe || []} />
        </SectionCard>

        {/* Step 6: Treatments & consultation */}
        <SectionCard title="Treatments & consultation" step={6} goToStep={goToStep}>
          {!isNewBuild ? (
            <>
              <DataRow
                label="Treatments changed"
                value={data.treatmentsChanged === "yes" ? "Yes" : data.treatmentsChanged === "no" ? "No — everything is the same" : null}
              />
              {data.treatmentsChanged === "yes" && data.treatmentsChangedDetails && (
                <DataRow label="What&apos;s changed" value={data.treatmentsChangedDetails} />
              )}
            </>
          ) : (
            <>
              <div className="py-1.5">
                <span className="text-sm text-text-muted">Treatments/services:</span>
                <TagList items={data.treatments} />
              </div>
              {data.treatments?.includes("other") && data.treatmentsOther && (
                <DataRow label="Other treatments" value={data.treatmentsOther} />
              )}
              <DataRow label="Consultation process" value={data.consultationProcess} />
              <DataRow label="Consultation free" value={data.consultationFree === "yes" ? "Yes" : data.consultationFree === "no" ? "No" : null} />
              <DataRow label="Virtual consultations" value={data.virtualConsultations === "yes" ? "Yes" : data.virtualConsultations === "no" ? "No" : null} />
              {data.virtualConsultations === "yes" && (
                <>
                  {data.virtualConsultationDetails && <DataRow label="Virtual consultation process" value={data.virtualConsultationDetails} />}
                  <DataRow label="Virtual consultation free" value={data.virtualConsultationFree === "yes" ? "Yes" : data.virtualConsultationFree === "no" ? "No" : null} />
                </>
              )}
              {data.keyUSPs && <DataRow label="Key USPs" value={data.keyUSPs} />}
              {data.paymentOverview && <DataRow label="Payment/finance" value={data.paymentOverview} />}
            </>
          )}
        </SectionCard>

        {/* Step 7: Sitemap */}
        {(data.sitemapPages?.length || 0) > 0 && (
          <SectionCard title="Sitemap" step={7} goToStep={goToStep}>
            <DataRow label="Approved" value={data.sitemapApproved ? "Yes" : "Not yet"} />
            <SitemapPreview pages={data.sitemapPages || []} />
          </SectionCard>
        )}

        {/* Step 8: Audience */}
        <SectionCard title="Audience, areas & competitors" step={8} goToStep={goToStep}>
          <DataRow label="Typical patient" value={data.typicalPatient} />
          {data.desiredPatients && <DataRow label="Want to attract more" value={data.desiredPatients} />}
          <DataRow label="Top areas" value={data.topAreas} />
          {data.competitors && <DataRow label="Competitors" value={data.competitors} />}
        </SectionCard>

        {/* Step 9: Brand & design preferences */}
        <SectionCard title="Brand & design preferences" step={9} goToStep={goToStep}>
          {!isNewBuild && data.logoUpdated && (
            <DataRow label="Logo updated" value={data.logoUpdated === "yes" ? "Yes" : "No"} />
          )}
          {(data.logoFiles?.length || 0) > 0 && (
            <div className="py-1.5">
              <span className="text-sm text-text-muted">Logo files: </span>
              <span className="text-sm font-medium text-primary">{data.logoFiles.join(", ")}</span>
            </div>
          )}
          <DataRow
            label="Brand guidelines"
            value={data.hasBrandGuidelines === "yes" ? "Yes" : data.hasBrandGuidelines === "no" ? "No" : data.hasBrandGuidelines === "not-sure" ? "Not sure" : null}
          />
          {(data.brandGuidelinesFiles?.length || 0) > 0 && (
            <div className="py-1.5">
              <span className="text-sm text-text-muted">Guidelines files: </span>
              <span className="text-sm font-medium text-primary">{data.brandGuidelinesFiles.join(", ")}</span>
            </div>
          )}
          <DataRow
            label="Colour scheme preference"
            value={
              data.colourSchemePreference === "keep" ? "Keep current colours"
                : data.colourSchemePreference === "open" ? "Open to new direction"
                : data.colourSchemePreference === "partial" ? "Keep some, open to changes"
                : null
            }
          />
          {data.aestheticKeywords && <DataRow label="Aesthetic keywords" value={data.aestheticKeywords} />}
          {data.firstImpression && <DataRow label="First impression" value={data.firstImpression} />}
          {data.designLikes && <DataRow label="Happy with on current site" value={data.designLikes} />}
          {data.designDislikes && <DataRow label="Not happy with" value={data.designDislikes} />}
          {data.designInspiration && <DataRow label="Inspiration websites" value={data.designInspiration} />}
          {data.designAvoid && <DataRow label="Wants to avoid" value={data.designAvoid} />}
        </SectionCard>

        {/* Step 10: Design styles */}
        <SectionCard title="Design styles" step={10} goToStep={goToStep}>
          {(data.selectedStyles?.length || 0) > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.selectedStyles.map((style) => (
                <span key={style} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {styleNames[style] || style}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-text-muted text-sm italic">No styles selected</p>
          )}
        </SectionCard>

        {/* Step 11: Brand persona */}
        <SectionCard title="Brand persona" step={11} goToStep={goToStep}>
          {data.designChoices?.personas ? (
            <div className="flex flex-wrap gap-2">
              {data.designChoices.personas.split(",").filter(Boolean).map((id: string) => (
                <span key={id} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {personaNames[id] || id.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-text-muted text-sm italic">No persona selected</p>
          )}
        </SectionCard>

        {/* Step 12: Colours */}
        <SectionCard title="Colour direction" step={12} goToStep={goToStep}>
          {(data.selectedPalettes?.length || 0) > 0 || (data.customColors?.length || 0) > 0 ? (
            <div className="space-y-3">
              {data.selectedPalettes?.includes("keep-brand") && (
                <p className="text-sm font-medium text-primary">Keeping existing brand colours</p>
              )}
              {data.selectedPalettes?.filter((id) => id !== "keep-brand").map((paletteId) => (
                <div key={paletteId} className="flex items-center gap-3">
                  <div className="flex">
                    {paletteColors[paletteId]?.map((color, i) => (
                      <div key={i} className="w-6 h-6 first:rounded-l last:rounded-r" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <span className="text-sm text-primary">{paletteNames[paletteId] || paletteId}</span>
                </div>
              ))}
              {(data.customColors?.length || 0) > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {data.customColors.map((color, i) => (
                      <div key={i} className="w-6 h-6 rounded border border-secondary" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <span className="text-sm text-primary">Custom colours</span>
                </div>
              )}
            </div>
          ) : (
            <p className="text-text-muted text-sm italic">No palettes selected</p>
          )}
        </SectionCard>

        {/* Step 13: Content style & tone */}
        <SectionCard title="Content style & tone of voice" step={13} goToStep={goToStep}>
          <DataRow label="Content style" value={contentStyleNames[data.contentStyleChoice] || null} />
          <div className="py-1.5">
            <span className="text-sm text-text-muted">Tone of voice:</span>
            <TagList items={data.toneOfVoice} />
          </div>
          {data.wordsToAvoid && <DataRow label="Words/topics to avoid" value={data.wordsToAvoid} />}
        </SectionCard>

        {/* Step 14: Assets */}
        <SectionCard title="Assets & imagery" step={14} goToStep={goToStep}>
          <DataRow
            label="Assets available"
            value={
              data.hasAssets === "yes" ? "Yes — ready to share"
                : data.hasAssets === "some" ? "Some available"
                : data.hasAssets === "no" ? "Not right now"
                : null
            }
          />
          {data.assetsFolderUrl && (
            <div className="py-1.5">
              <span className="text-sm text-text-muted">Assets folder: </span>
              <a
                href={data.assetsFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                Open in Google Drive
              </a>
            </div>
          )}
          <DataRow
            label="Testimonials"
            value={data.hasTestimonials === "yes" ? "Yes" : data.hasTestimonials === "no" ? "No" : null}
          />
          {data.hasTestimonials === "yes" && data.testimonialsGuidance && (
            <DataRow label="Testimonials guidance" value={data.testimonialsGuidance} />
          )}
        </SectionCard>
      </div>

      <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/20">
        <p className="text-sm text-primary mb-3">
          <strong>Ready to submit?</strong> This will form the basis of your design concept brief
          and content brief for our team. Once submitted, our designers will use your responses
          to begin shaping your website.
        </p>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.summaryConfirmed || false}
            onChange={(e) => updateData({ summaryConfirmed: e.target.checked })}
            className="mt-0.5 w-5 h-5 rounded border-secondary text-primary focus:ring-primary/20 accent-primary cursor-pointer"
          />
          <span className="text-sm text-primary">
            I confirm that I&apos;m happy with everything above and am ready to proceed.
          </span>
        </label>
      </div>
    </div>
  );
}
