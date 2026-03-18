"use client";

import { useEffect, useMemo, useRef } from "react";
import { Reorder } from "framer-motion";
import { GripVertical, Lock } from "lucide-react";
import { WizardData } from "../WizardContainer";

interface HomepageWireframeProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

interface WireframeSection {
  id: string;
  label: string;
  layout: "full" | "cards";
  cards?: { id: string; label: string }[];
}

const SECTION_LABELS: Record<string, string> = {
  "why-choose-us": "Why choose us / USPs",
  invisalign: "Invisalign®",
  "clear-aligners": "Clear aligners",
  braces: "Braces",
  "kids-teens": "Kids & teens",
  "adult-treatment": "Adult treatment",
  finance: "Finance / cost",
  team: "Meet the team",
  technology: "Technology",
  "before-afters": "Before & afters",
  reviews: "Reviews / social proof",
};

// Treatment-type priorities that get grouped together
const TREATMENT_IDS = new Set(["invisalign", "clear-aligners", "braces", "kids-teens", "adult-treatment"]);

/**
 * Build wireframe sections from homepage priorities using best-practice ordering:
 *
 * 1. Why choose us (if selected)
 * 2. Treatments zone — smart grouping:
 *    - Invisalign® is always standalone (premium spotlight)
 *    - Braces is standalone UNLESS paired with clear aligners
 *    - Clear aligners + braces → horizontal pair
 *    - Kids/teens + adult treatment → horizontal pair
 *    - If all four non-Invisalign treatments selected → one cards row
 * 3. Finance / cost
 * 4. Before & afters
 * 5. Technology
 * 6. Meet the team
 * 7. Reviews / social proof
 * 8. Any custom "other" section
 */
function buildSections(priorities: string[], otherLabel?: string): WireframeSection[] {
  const selected = new Set(priorities);
  const sections: WireframeSection[] = [];

  // 1. Why choose us — always first if selected
  if (selected.has("why-choose-us")) {
    sections.push({ id: "why-choose-us", label: SECTION_LABELS["why-choose-us"], layout: "full" });
  }

  // 2. Treatments zone
  const hasTreatments = [...TREATMENT_IDS].filter((id) => selected.has(id));

  if (hasTreatments.length > 0) {
    // Invisalign is always its own spotlight section
    const hasInvisalign = selected.has("invisalign");
    if (hasInvisalign) {
      sections.push({ id: "invisalign", label: "Invisalign®", layout: "full" });
    }

    // Remaining treatment items (excluding Invisalign)
    const remaining = hasTreatments.filter((id) => id !== "invisalign");

    if (remaining.length >= 3) {
      // 3-4 items → one cards row
      sections.push({
        id: "treatments-group",
        label: "Treatments",
        layout: "cards",
        cards: remaining.map((id) => ({ id, label: SECTION_LABELS[id] || id })),
      });
    } else if (remaining.length === 2) {
      // Check for natural pairs
      const hasAlignersAndBraces = selected.has("clear-aligners") && selected.has("braces");
      const hasKidsAndAdults = selected.has("kids-teens") && selected.has("adult-treatment");

      if (hasAlignersAndBraces && hasKidsAndAdults) {
        // Both pairs — shouldn't happen with only 2 remaining, but safety
        sections.push({
          id: "treatments-group",
          label: "Treatments",
          layout: "cards",
          cards: remaining.map((id) => ({ id, label: SECTION_LABELS[id] || id })),
        });
      } else if (hasAlignersAndBraces) {
        sections.push({
          id: "clear-aligners+braces",
          label: "Clear aligners & braces",
          layout: "cards",
          cards: [
            { id: "clear-aligners", label: "Clear aligners" },
            { id: "braces", label: "Braces" },
          ],
        });
      } else if (hasKidsAndAdults) {
        sections.push({
          id: "kids-teens+adult-treatment",
          label: "Kids & teens / Adult treatment",
          layout: "cards",
          cards: [
            { id: "kids-teens", label: "Kids & teens" },
            { id: "adult-treatment", label: "Adult treatment" },
          ],
        });
      } else {
        // Two unrelated treatments → pair them anyway as treatment cards
        sections.push({
          id: "treatments-group",
          label: "Treatments",
          layout: "cards",
          cards: remaining.map((id) => ({ id, label: SECTION_LABELS[id] || id })),
        });
      }
    } else if (remaining.length === 1) {
      // Single treatment → standalone
      const id = remaining[0];
      sections.push({ id, label: SECTION_LABELS[id] || id, layout: "full" });
    }
  }

  // 3-7. Core sections in best-practice order
  const coreOrder = ["finance", "before-afters", "technology", "team", "reviews"];
  for (const id of coreOrder) {
    if (selected.has(id)) {
      sections.push({ id, label: SECTION_LABELS[id] || id, layout: "full" });
    }
  }

  // 8. Custom "other" section
  if (selected.has("other") && otherLabel) {
    sections.push({ id: "other", label: otherLabel, layout: "full" });
  }

  return sections;
}

function FixedBlock({ label, variant }: { label: string; variant: "hero" | "cta" | "footer" }) {
  const styles = {
    hero: "bg-primary/10 border-primary/20 min-h-[80px]",
    cta: "bg-green-50 border-green-200 min-h-[60px]",
    footer: "bg-gray-100 border-gray-200 min-h-[50px]",
  };

  return (
    <div className={`rounded-lg border-2 border-dashed ${styles[variant]} flex items-center justify-center px-4 py-3`}>
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Lock className="w-3.5 h-3.5" />
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: WireframeSection }) {
  if (section.layout === "cards" && section.cards) {
    const cols = section.cards.length >= 4 ? "grid-cols-4" : section.cards.length === 3 ? "grid-cols-3" : "grid-cols-2";
    return (
      <div className="flex items-center gap-3">
        <div className="cursor-grab active:cursor-grabbing text-text-muted hover:text-primary transition-colors flex-shrink-0">
          <GripVertical className="w-5 h-5" />
        </div>
        <div className="flex-1 rounded-lg border-2 border-primary/20 bg-primary/5 p-3">
          <p className="text-xs text-text-muted mb-2 text-center">{section.label}</p>
          <div className={`grid ${cols} gap-2`}>
            {section.cards.map((card) => (
              <div
                key={card.id}
                className="rounded-md bg-white border border-primary/15 flex items-center justify-center px-2 py-4 text-xs font-medium text-primary text-center"
              >
                {card.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="cursor-grab active:cursor-grabbing text-text-muted hover:text-primary transition-colors flex-shrink-0">
        <GripVertical className="w-5 h-5" />
      </div>
      <div className="flex-1 rounded-lg border-2 border-primary/20 bg-primary/5 flex items-center justify-center px-4 py-5 text-sm font-medium text-primary">
        {section.label}
      </div>
    </div>
  );
}

export default function HomepageWireframe({ data, updateData }: HomepageWireframeProps) {
  const prevPrioritiesRef = useRef<string>("");

  const autoSections = useMemo(
    () => buildSections(data.homepagePriorities || [], data.homepagePrioritiesOther || "Other"),
    [data.homepagePriorities, data.homepagePrioritiesOther]
  );

  // Rebuild wireframe when priorities actually change
  useEffect(() => {
    const key = (data.homepagePriorities || []).sort().join(",");
    if (key !== prevPrioritiesRef.current) {
      prevPrioritiesRef.current = key;
      updateData({ homepageWireframe: autoSections.map((s) => s.id) });
    }
  }, [autoSections, data.homepagePriorities, updateData]);

  const sectionMap = useMemo(() => {
    const map = new Map<string, WireframeSection>();
    for (const s of autoSections) map.set(s.id, s);
    return map;
  }, [autoSections]);

  const orderedSections = (data.homepageWireframe || [])
    .map((id) => sectionMap.get(id))
    .filter((s): s is WireframeSection => !!s);

  const handleReorder = (newOrder: WireframeSection[]) => {
    updateData({ homepageWireframe: newOrder.map((s) => s.id) });
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Homepage layout
        </h2>
        <p className="text-text-muted">
          Based on your priorities, here&apos;s a suggested homepage structure.
          Drag the sections to reorder — the hero, consultation CTA and location footer are locked in place.
        </p>
      </div>

      <div className="space-y-3 max-w-2xl mx-auto">
        {/* Fixed: Hero */}
        <FixedBlock label="Homepage hero" variant="hero" />

        {/* Draggable sections */}
        {orderedSections.length > 0 ? (
          <Reorder.Group
            axis="y"
            values={orderedSections}
            onReorder={handleReorder}
            className="space-y-3"
          >
            {orderedSections.map((section) => (
              <Reorder.Item
                key={section.id}
                value={section}
                whileDrag={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                className="list-none"
              >
                <SectionBlock section={section} />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center px-4 py-8 text-sm text-text-muted">
            No homepage priorities selected — go back and choose some to build your wireframe.
          </div>
        )}

        {/* Fixed: CTA */}
        <FixedBlock label="Consultation CTA" variant="cta" />

        {/* Fixed: Location footer */}
        <FixedBlock label="Location footer" variant="footer" />
      </div>

      <p className="mt-6 text-sm text-text-muted text-center italic">
        We may make small adjustments to this layout during the design phase to improve flow and user experience.
      </p>

      {/* Approval checkbox */}
      <div className="mt-8 p-5 bg-secondary/20 rounded-xl border border-secondary/40">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.wireframeApproved || false}
            onChange={(e) => updateData({ wireframeApproved: e.target.checked })}
            className="mt-0.5 w-5 h-5 rounded border-secondary text-primary focus:ring-primary/20 accent-primary cursor-pointer"
          />
          <span className="text-sm text-primary">
            I&apos;m happy with the homepage sections and layout for my new website.
          </span>
        </label>
      </div>
    </div>
  );
}
