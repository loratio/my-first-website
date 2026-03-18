"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader2, AlertCircle, Plus, X, ChevronRight, ChevronDown, RefreshCw, ArrowUp, ArrowDown } from "lucide-react";
import { WizardData } from "../WizardContainer";
import { TextInput } from "../ui/FormField";

interface SitemapEditorProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

export interface SitemapNode {
  id: string;
  title: string;
  path: string;
  status: "keep" | "remove" | "add";
  children: SitemapNode[];
  collapsed?: boolean;
}

function generateId(): string {
  return `page-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

/**
 * Apply treatment changes to the sitemap.
 * Parses lines like "No longer offering Invisalign" or "Now offering Spark Aligners"
 * and marks pages for removal or adds new ones.
 */
function applyTreatmentChanges(pages: SitemapNode[], changesText: string): SitemapNode[] {
  if (!changesText) return pages;

  const lines = changesText.split("\n").map((l) => l.trim()).filter(Boolean);
  const removals: string[] = [];
  const additions: string[] = [];

  for (const line of lines) {
    const lower = line.toLowerCase();
    // Removal keywords
    const isRemoval = lower.includes("no longer") || lower.includes("removing") || lower.includes("stopped") || lower.includes("not offering") || lower.includes("dropped") || lower.includes("discontinued");
    // Addition keywords
    const isAddition = lower.includes("now offering") || lower.includes("now doing") || lower.includes("adding") || lower.includes("added") || lower.includes("new service") || lower.includes("started offering") || lower.includes("started doing") || lower.includes("introducing") || lower.includes("launched") || lower.includes("offer") || lower.includes("new treatment");

    if (isRemoval) {
      const name = line
        .replace(/^.*?(no longer offering|no longer doing|no longer|removing|stopped offering|stopped doing|stopped|not offering|dropped|discontinued)\s*/i, "")
        .replace(/[.,;]+$/, "")
        .trim();
      if (name) {
        const items = name.split(/\s*(?:,|\band\b|&)\s*/i).map((s) => s.trim()).filter(Boolean);
        for (const item of items) removals.push(item.toLowerCase());
      }
    } else if (isAddition) {
      const name = line
        .replace(/^.*?(now offering|now doing|adding|added|new service:?|new treatment:?|started offering|started doing|introducing|launched|now offer)\s*/i, "")
        .replace(/[.,;]+$/, "")
        .trim();
      if (name) {
        // Split on commas first, then handle "and"/"&" within each part
        const parts = name.split(/\s*,\s*/).flatMap((part) =>
          part.split(/\s+(?:and|&)\s+/i)
        ).map((s) => s.trim()).filter(Boolean);

        // If items share a common trailing word (e.g. "Spark" and "Angel aligners" → "Spark Aligners", "Angel Aligners")
        if (parts.length > 1) {
          const lastPart = parts[parts.length - 1];
          const lastWords = lastPart.split(/\s+/);
          if (lastWords.length > 1) {
            const suffix = lastWords.slice(1).join(" ");
            for (const part of parts) {
              // If part is a single word and last part has a suffix, append suffix
              if (!part.includes(" ") && part !== lastPart) {
                additions.push(`${part} ${suffix}`);
              } else {
                additions.push(part);
              }
            }
          } else {
            for (const part of parts) additions.push(part);
          }
        } else {
          for (const part of parts) additions.push(part);
        }
      }
    }
  }

  // Mark matching pages for removal
  function stripSymbols(s: string): string {
    return s.replace(/[®™©]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function markRemovals(nodes: SitemapNode[]): SitemapNode[] {
    return nodes.map((node) => {
      const titleClean = stripSymbols(node.title);
      const pathLower = node.path.toLowerCase();
      const shouldRemove = removals.some(
        (r) => titleClean.includes(r) || pathLower.includes(r.replace(/\s+/g, "-"))
      );
      return {
        ...node,
        status: shouldRemove ? "remove" as const : node.status,
        children: markRemovals(node.children),
      };
    });
  }

  const updated = markRemovals(pages);

  // Add new treatment pages under a "Treatments" parent if one exists, otherwise under root
  if (additions.length > 0) {
    const treatmentsNode = findTreatmentsParent(updated);
    for (const name of additions) {
      const newPage: SitemapNode = {
        id: generateId(),
        title: name,
        path: `/treatments/${name.toLowerCase().replace(/\s+/g, "-")}`,
        status: "add",
        children: [],
      };
      if (treatmentsNode) {
        // Insert at the right position based on treatment priority
        const insertIdx = getTreatmentInsertIndex(treatmentsNode.children, name);
        treatmentsNode.children.splice(insertIdx, 0, newPage);
      } else if (updated[0]) {
        updated[0].children.push(newPage);
      }
    }
  }

  return updated;
}

/** Treatment ordering priority — lower number = higher up in the list */
function getTreatmentPriority(name: string): number {
  const lower = name.toLowerCase();
  // Aligners — top tier (premium hero products)
  if (lower.includes("invisalign")) return 0;
  if (lower.includes("angel")) return 1;
  if (lower.includes("spark")) return 2;
  if (lower.includes("aligner") || lower.includes("clear aligner")) return 3;
  // Braces — second tier
  if (lower.includes("ceramic") || (lower.includes("clear") && lower.includes("brace"))) return 10;
  if (lower.includes("lingual")) return 11;
  if (lower.includes("lightforce")) return 12;
  if (lower.includes("metal") && lower.includes("brace")) return 13;
  if (lower.includes("brace")) return 14;
  // Age-based treatments — third tier
  if (lower.includes("adult")) return 20;
  if (lower.includes("teen")) return 21;
  if (lower.includes("child") || lower.includes("kid") || lower.includes("early")) return 22;
  // Other services — bottom
  if (lower.includes("nhs")) return 28;
  if (lower.includes("expander")) return 29;
  if (lower.includes("retainer")) return 30;
  if (lower.includes("whitening")) return 31;
  if (lower.includes("mouthguard")) return 32;
  if (lower.includes("orthognathic") || lower.includes("jaw")) return 33;
  if (lower.includes("hygiene")) return 34;
  // Everything else
  return 25;
}

/** Find the right insertion index so new treatments slot in at the correct priority position */
function getTreatmentInsertIndex(children: SitemapNode[], newName: string): number {
  const newPriority = getTreatmentPriority(newName);

  // Find the first existing child whose priority is higher (worse) than the new one
  for (let i = 0; i < children.length; i++) {
    const childPriority = getTreatmentPriority(children[i].title);
    if (childPriority > newPriority) return i;
  }

  // If nothing has lower priority, append at end
  return children.length;
}

// ---------------------------------------------------------------------------
// New build: generate sitemap from treatment selections + best practice
// ---------------------------------------------------------------------------

/** Map treatment checkbox values to page titles */
const TREATMENT_PAGE_NAMES: Record<string, string> = {
  invisalign: "Invisalign®",
  "angel-aligner": "Angel Aligner",
  "spark-aligners": "Spark Aligners",
  "other-aligners": "", // handled via otherAlignerBrands
  "metal-braces": "Metal braces",
  "ceramic-braces": "Ceramic braces",
  "lingual-braces": "Lingual braces",
  "lightforce-braces": "LightForce braces",
  "treatment-children": "Treatment for children",
  "treatment-teens": "Treatment for teens",
  "treatment-adults": "Treatment for adults",
  expanders: "Expanders",
  retainers: "Retainers",
  whitening: "Teeth whitening",
  mouthguards: "Mouthguards",
  orthognathic: "Orthognathic surgery",
  "nhs-treatment": "NHS treatment",
  other: "", // handled via treatmentsOther
};

function buildNewBuildTreatmentNodes(data: {
  treatments: string[];
  otherAlignerBrands?: string;
  treatmentsOther?: string;
}): SitemapNode[] {
  const nodes: SitemapNode[] = [];

  for (const treatment of data.treatments) {
    const title = TREATMENT_PAGE_NAMES[treatment];
    if (title) {
      nodes.push({
        id: generateId(),
        title,
        path: `/treatments/${title.toLowerCase().replace(/[®™]/g, "").replace(/\s+/g, "-")}`,
        status: "keep",
        children: [],
      });
    }
  }

  // Add aligner brands if "other-aligners" selected
  if (data.treatments.includes("other-aligners") && data.otherAlignerBrands) {
    const brands = data.otherAlignerBrands.split(/\s*,\s*/).map((b) => b.trim()).filter(Boolean);
    for (const brand of brands) {
      nodes.push({
        id: generateId(),
        title: brand,
        path: `/treatments/${brand.toLowerCase().replace(/\s+/g, "-")}`,
        status: "keep",
        children: [],
      });
    }
  }

  // Add other treatments
  if (data.treatments.includes("other") && data.treatmentsOther) {
    const others = data.treatmentsOther.split(/\n/).map((t) => t.trim()).filter(Boolean);
    for (const t of others) {
      nodes.push({
        id: generateId(),
        title: t,
        path: `/treatments/${t.toLowerCase().replace(/\s+/g, "-")}`,
        status: "keep",
        children: [],
      });
    }
  }

  return nodes;
}

/** Check if text indicates a free consultation */
function isFreeConsultation(text: string): boolean {
  const lower = (text || "").toLowerCase();
  return (
    lower.includes("free") ||
    lower.includes("complimentary") ||
    lower.includes("no fee") ||
    lower.includes("no charge") ||
    lower.includes("no cost") ||
    lower.includes("at no cost") ||
    lower.includes("without charge") ||
    lower.includes("£0") ||
    lower.includes("zero cost")
  );
}

/** Build booking page(s) based on consultation details */
function buildBookingPages(data: {
  consultationFree?: string;
  consultationProcess?: string;
  virtualConsultations?: string;
  virtualConsultationFree?: string;
}): SitemapNode {
  // Use explicit field first, fall back to parsing text
  const inHouseFree = data.consultationFree === "yes" || (!data.consultationFree && isFreeConsultation(data.consultationProcess || ""));
  const offersVirtual = data.virtualConsultations === "yes";
  const virtualFree = data.virtualConsultationFree === "yes";

  // No virtual — single booking page
  if (!offersVirtual) {
    const title = inHouseFree ? "Book a free consultation" : "Book a consultation";
    const path = inHouseFree ? "/book-a-free-consultation" : "/book-a-consultation";
    return { id: generateId(), title, path, status: "keep", children: [] };
  }

  // Both in-house and virtual offered — build sub-pages
  if (inHouseFree && virtualFree) {
    // Both free
    return {
      id: generateId(),
      title: "Book a free consultation",
      path: "/book-a-free-consultation",
      status: "keep",
      children: [
        { id: generateId(), title: "Free in-person consultation", path: "/book-a-free-consultation/in-person", status: "keep", children: [] },
        { id: generateId(), title: "Free virtual consultation", path: "/book-a-free-consultation/virtual", status: "keep", children: [] },
      ],
    };
  } else if (inHouseFree && !virtualFree) {
    // In-house free, virtual paid
    return {
      id: generateId(),
      title: "Book a consultation",
      path: "/book-a-consultation",
      status: "keep",
      children: [
        { id: generateId(), title: "Free in-person consultation", path: "/book-a-consultation/free-in-person-consultation", status: "keep", children: [] },
        { id: generateId(), title: "Virtual consultation", path: "/book-a-consultation/virtual-consultation", status: "keep", children: [] },
      ],
    };
  } else if (!inHouseFree && virtualFree) {
    // In-house paid, virtual free
    return {
      id: generateId(),
      title: "Book a consultation",
      path: "/book-a-consultation",
      status: "keep",
      children: [
        { id: generateId(), title: "Specialist consultation", path: "/book-a-consultation/specialist-consultation", status: "keep", children: [] },
        { id: generateId(), title: "Free virtual consultation", path: "/book-a-consultation/free-virtual-consultation", status: "keep", children: [] },
      ],
    };
  } else {
    // Both paid
    return {
      id: generateId(),
      title: "Book a consultation",
      path: "/book-a-consultation",
      status: "keep",
      children: [
        { id: generateId(), title: "In-person consultation", path: "/book-a-consultation/in-person", status: "keep", children: [] },
        { id: generateId(), title: "Virtual consultation", path: "/book-a-consultation/virtual", status: "keep", children: [] },
      ],
    };
  }
}

/** Generate a complete best-practice sitemap for a new build */
function generateNewBuildSitemap(data: {
  treatments: string[];
  otherAlignerBrands?: string;
  treatmentsOther?: string;
  practiceName?: string;
  consultationFree?: string;
  consultationProcess?: string;
  virtualConsultations?: string;
  virtualConsultationFree?: string;
}): SitemapNode[] {
  const treatmentChildren = buildNewBuildTreatmentNodes(data);
  const bookingNode = buildBookingPages(data);

  const home: SitemapNode = {
    id: "home",
    title: "Home",
    path: "/",
    status: "keep",
    children: [
      {
        id: generateId(),
        title: "Treatments",
        path: "/treatments",
        status: "keep",
        children: treatmentChildren,
      },
      {
        id: generateId(),
        title: "Costs & finance",
        path: "/costs",
        status: "keep",
        children: [],
      },
      {
        id: generateId(),
        title: "Results",
        path: "/results",
        status: "keep",
        children: [
          { id: generateId(), title: "Before & afters", path: "/results/before-and-afters", status: "keep", children: [] },
          { id: generateId(), title: "Testimonials", path: "/results/testimonials", status: "keep", children: [] },
        ],
      },
      {
        id: generateId(),
        title: "About us",
        path: "/about-us",
        status: "keep",
        children: [
          { id: generateId(), title: "Meet the team", path: "/about-us/meet-the-team", status: "keep", children: [] },
        ],
      },
      {
        id: generateId(),
        title: "Patient information",
        path: "/patient-information",
        status: "keep",
        children: [
          { id: generateId(), title: "FAQs", path: "/patient-information/faqs", status: "keep", children: [] },
        ],
      },
      {
        id: generateId(),
        title: "Blog",
        path: "/blog",
        status: "keep",
        children: [],
      },
      {
        id: generateId(),
        title: "Contact",
        path: "/contact",
        status: "keep",
        children: [],
      },
      bookingNode,
    ],
  };

  return [home];
}

/**
 * Merge a scraped sitemap with new build treatment selections.
 * Adds any selected treatments not already on the site,
 * and ensures standard pages exist.
 */
function mergeWithNewBuildSelections(
  scrapedPages: SitemapNode[],
  data: {
    treatments: string[];
    otherAlignerBrands?: string;
    treatmentsOther?: string;
  }
): SitemapNode[] {
  const treatmentsNode = findTreatmentsParent(scrapedPages);
  if (!treatmentsNode) return scrapedPages;

  // Get all existing treatment paths/titles
  function collectTitles(nodes: SitemapNode[]): string[] {
    const titles: string[] = [];
    for (const n of nodes) {
      titles.push(n.title.toLowerCase().replace(/[®™]/g, "").trim());
      titles.push(...collectTitles(n.children));
    }
    return titles;
  }

  const existingTitles = collectTitles(treatmentsNode.children);

  // Build treatment nodes from selections
  const newTreatments = buildNewBuildTreatmentNodes(data);

  // Add any that don't already exist
  for (const treatment of newTreatments) {
    const titleClean = treatment.title.toLowerCase().replace(/[®™]/g, "").trim();
    const alreadyExists = existingTitles.some((t) => t.includes(titleClean) || titleClean.includes(t));
    if (!alreadyExists) {
      const insertIdx = getTreatmentInsertIndex(treatmentsNode.children, treatment.title);
      treatmentsNode.children.splice(insertIdx, 0, { ...treatment, status: "add" });
    }
  }

  return scrapedPages;
}

// ---------------------------------------------------------------------------
// Best-practice sitemap restructuring (new builds with existing site)
// ---------------------------------------------------------------------------

/** Classifies a page into a best-practice section */
type SectionType =
  | "treatments" | "costs" | "results" | "about" | "patient-info"
  | "blog" | "contact" | "booking" | "referrals" | "skip" | "other";

function classifyPage(node: SitemapNode): SectionType {
  const lower = node.title.toLowerCase();
  const pathLower = node.path.toLowerCase();
  const combined = lower + " " + pathLower;

  // Pages to skip entirely (old age-based pages that get replaced by Treatment For)
  if (combined.match(/\/(adults?[- ]children|children[- ]adults?)/) ||
      (combined.includes("adults") && combined.includes("children") && !combined.includes("treatment"))) return "skip";

  // Skip utility forms
  if (combined.includes("medical history") || combined.includes("consent form") ||
      combined.includes("registration form")) return "patient-info";

  // Treatments — be specific to avoid false positives
  if (pathLower.startsWith("/treatment") || combined.includes("invisalign") || combined.includes("brace") ||
      combined.includes("aligner") || combined.includes("retainer") || combined.includes("expander") ||
      combined.includes("whitening") || combined.includes("mouthguard") || combined.includes("orthognathic") ||
      combined.includes("jaw surgery") || combined.includes("orthodontic") && !combined.includes("faq") ||
      combined.includes("severe case") || combined.includes("after care") || combined.includes("aftercare")) return "treatments";

  // Cases / Smile gallery → results
  if (combined.includes("case") && (combined.includes("/case") || pathLower.startsWith("/case"))) return "results";

  // Costs / Finance / Prices
  if (combined.includes("cost") || combined.includes("price") || combined.includes("pricing") ||
      combined.includes("finance") || combined.includes("payment") || combined.includes("fee")) return "costs";

  // Results / Gallery (but NOT practice gallery — that's about)
  if (combined.includes("practice gallery") || combined.includes("practice photo") ||
      combined.includes("practice tour")) return "about";
  if (combined.includes("result") || combined.includes("smile gallery") || combined.includes("before") ||
      combined.includes("after") || combined.includes("testimonial") || combined.includes("review") ||
      combined.includes("success stor")) return "results";

  // About
  if (combined.includes("about") || combined.includes("team") || combined.includes("staff") ||
      combined.includes("our practice") || combined.includes("our story") || combined.includes("video tour") ||
      combined.includes("join our") || combined.includes("career") || combined.includes("gallery") ||
      combined.includes("meet our") || combined.includes("meet the")) return "about";

  // Patient information
  if (combined.includes("patient info") || combined.includes("faq") || combined.includes("patient voice") ||
      combined.includes("patient resource") || combined.includes("first visit") ||
      combined.includes("what to expect") || combined.includes("medical history") ||
      combined.includes("new patient")) return "patient-info";

  // Blog
  if (combined.includes("blog") || combined.includes("news") || combined.includes("article")) return "blog";

  // Contact
  if (combined.includes("contact") || combined.includes("find us") || combined.includes("location") ||
      combined.includes("get in touch") || combined.includes("where we are")) return "contact";

  // Booking
  if (combined.includes("book") || combined.includes("consultation") || combined.includes("appointment")) return "booking";

  // Referrals
  if (combined.includes("referral") || combined.includes("refer")) return "referrals";

  return "other";
}

/** Best-practice nav order */
const SECTION_ORDER: SectionType[] = [
  "referrals", "treatments", "costs", "results", "about", "patient-info", "blog", "contact", "booking",
];

/**
 * Apply best-practice restructuring to a scraped sitemap for new builds.
 * - Uses treatment SELECTIONS as source of truth (ignores scraped treatment pages)
 * - Reorders top-level pages to best-practice nav order
 * - Nests pages under correct parents (team → about, cases → results, etc.)
 * - Adds missing standard sections
 */
function applyBestPracticeSitemap(
  pages: SitemapNode[],
  bookingNode: SitemapNode,
  treatmentData?: {
    treatments: string[];
    otherAlignerBrands?: string;
    treatmentsOther?: string;
  }
): SitemapNode[] {
  const home = pages[0];
  if (!home || home.path !== "/") return pages;

  // Flatten all pages (top-level + children that need reclassifying)
  function flattenAll(nodes: SitemapNode[]): SitemapNode[] {
    const result: SitemapNode[] = [];
    for (const node of nodes) {
      result.push(node);
      if (node.children.length > 0) {
        result.push(...flattenAll(node.children));
      }
    }
    return result;
  }

  const allPages = flattenAll(home.children);

  // Classify every page
  const classified = new Map<SectionType, SitemapNode[]>();
  for (const section of SECTION_ORDER) classified.set(section, []);
  classified.set("skip", []);
  classified.set("other", []);

  for (const page of allPages) {
    // Reset children — we'll rebuild the tree structure
    const type = classifyPage({ ...page, children: [] });
    classified.get(type)!.push({ ...page, children: [] });
  }

  // --- Build structured sections ---

  // 1. TREATMENTS — use selections as source of truth, not scraped pages
  let treatmentsNode: SitemapNode;
  if (treatmentData && treatmentData.treatments.length > 0) {
    // Build treatments entirely from their selections
    const treatmentChildren = buildNewBuildTreatmentNodes(treatmentData);
    treatmentsNode = { id: generateId(), title: "Treatments", path: "/treatments", status: "keep", children: treatmentChildren };
  } else {
    // Fallback: use scraped treatments
    treatmentsNode = classified.get("treatments")!.find(
      (n) => n.path === "/treatments" || n.title.toLowerCase() === "treatments"
    ) || { id: generateId(), title: "Treatments", path: "/treatments", status: "keep", children: [] };
    const treatmentChildren = classified.get("treatments")!.filter((n) => n !== treatmentsNode);
    for (const child of treatmentChildren) {
      const alreadyChild = treatmentsNode.children.some(
        (c) => c.title.toLowerCase() === child.title.toLowerCase()
      );
      if (!alreadyChild) {
        treatmentsNode.children.push(child);
      }
    }
  }

  // 2. COSTS — find or create, nest payment/finance sub-pages
  const costPages = classified.get("costs")!;
  let costsNode = costPages.find(
    (n) => n.path.match(/^\/(costs?|pricing|prices|fees)$/)
  );
  const costChildren = costPages.filter((n) => n !== costsNode);
  if (!costsNode) {
    costsNode = { id: generateId(), title: "Costs & finance", path: "/costs", status: "keep", children: [] };
  }
  for (const child of costChildren) {
    const alreadyChild = costsNode.children.some(
      (c) => c.title.toLowerCase() === child.title.toLowerCase()
    );
    if (!alreadyChild) {
      costsNode.children.push({
        ...child,
        path: `${costsNode.path}/${child.path.split("/").pop()}`,
      });
    }
  }

  // 3. RESULTS — find or create, absorb Cases pages, nest before/afters, testimonials
  const resultPages = classified.get("results")!;
  let resultsNode = resultPages.find(
    (n) => n.path.match(/^\/(results?|smile-gallery|gallery)$/)
  );
  // Filter out parent "cases"/"results" nodes — we only want children
  const resultChildren = resultPages.filter((n) => {
    if (n === resultsNode) return false;
    // Skip the "Cases" parent itself — we just want its children
    if (n.path.match(/^\/cases?\/?$/) && n.title.toLowerCase() === "cases") return false;
    return true;
  });
  if (!resultsNode) {
    resultsNode = { id: generateId(), title: "Results", path: "/results", status: "keep", children: [] };
  }
  // Clear old children (we'll rebuild)
  resultsNode.children = [];
  for (const child of resultChildren) {
    const alreadyChild = resultsNode.children.some(
      (c) => c.title.toLowerCase() === child.title.toLowerCase()
    );
    if (!alreadyChild) {
      resultsNode.children.push({
        ...child,
        path: `${resultsNode.path}/${child.path.split("/").pop()}`,
        children: [],
      });
    }
  }
  // Add default sub-pages if missing
  const hasBeforeAfters = resultsNode.children.some((c) => c.title.toLowerCase().includes("before"));
  const hasTestimonials = resultsNode.children.some((c) => c.title.toLowerCase().includes("testimonial") || c.title.toLowerCase().includes("review"));
  if (!hasBeforeAfters) {
    resultsNode.children.push({ id: generateId(), title: "Before & afters", path: "/results/before-and-afters", status: "keep", children: [] });
  }
  if (!hasTestimonials) {
    resultsNode.children.push({ id: generateId(), title: "Testimonials", path: "/results/testimonials", status: "keep", children: [] });
  }

  // 4. ABOUT — find or create, nest team/tour/gallery/careers
  const aboutPages = classified.get("about")!;
  let aboutNode = aboutPages.find(
    (n) => n.path.match(/^\/(about|about-us|our-practice)$/)
  );
  const aboutChildren = aboutPages.filter((n) => n !== aboutNode);
  if (!aboutNode) {
    aboutNode = { id: generateId(), title: "About us", path: "/about-us", status: "keep", children: [] };
  }
  aboutNode.children = [];
  for (const child of aboutChildren) {
    const alreadyChild = aboutNode.children.some(
      (c) => c.title.toLowerCase() === child.title.toLowerCase()
    );
    if (!alreadyChild) {
      aboutNode.children.push({
        ...child,
        path: `${aboutNode.path}/${child.path.split("/").pop()}`,
        children: [],
      });
    }
  }
  // Ensure "meet the team" exists
  const hasTeam = aboutNode.children.some((c) => {
    const l = c.title.toLowerCase();
    return l.includes("team") || l.includes("staff") || l.includes("meet");
  });
  if (!hasTeam) {
    aboutNode.children.unshift({ id: generateId(), title: "Meet the team", path: "/about-us/meet-the-team", status: "keep", children: [] });
  }

  // 5. PATIENT INFO — find or create, nest FAQs etc.
  const patientPages = classified.get("patient-info")!;
  let patientNode = patientPages.find(
    (n) => n.path.match(/^\/(patient-info|patient-information|patients)$/)
  );
  const patientChildren = patientPages.filter((n) => n !== patientNode);
  if (patientPages.length > 0 || patientChildren.length > 0) {
    if (!patientNode) {
      patientNode = { id: generateId(), title: "Patient information", path: "/patient-information", status: "keep", children: [] };
    }
    for (const child of patientChildren) {
      const alreadyChild = patientNode.children.some(
        (c) => c.title.toLowerCase() === child.title.toLowerCase()
      );
      if (!alreadyChild) {
        patientNode.children.push({
          ...child,
          path: `${patientNode.path}/${child.path.split("/").pop()}`,
        });
      }
    }
  }

  // 6. BLOG
  const blogPages = classified.get("blog")!;
  let blogNode = blogPages[0];
  if (!blogNode) {
    blogNode = { id: generateId(), title: "Blog", path: "/blog", status: "keep", children: [] };
  }

  // 7. CONTACT
  const contactPages = classified.get("contact")!;
  let contactNode = contactPages.find(
    (n) => n.path.match(/^\/(contact|contact-us|find-us|location)$/)
  );
  const contactChildren = contactPages.filter((n) => n !== contactNode);
  if (!contactNode) {
    contactNode = { id: generateId(), title: "Contact", path: "/contact", status: "keep", children: [] };
  }
  for (const child of contactChildren) {
    const alreadyChild = contactNode.children.some(
      (c) => c.title.toLowerCase() === child.title.toLowerCase()
    );
    if (!alreadyChild) {
      contactNode.children.push({
        ...child,
        path: `${contactNode.path}/${child.path.split("/").pop()}`,
      });
    }
  }

  // 8. REFERRALS — always top level
  const referralPages = classified.get("referrals")!;
  let referralsNode = referralPages[0];
  if (!referralsNode) {
    referralsNode = { id: generateId(), title: "Dentist referrals", path: "/dentist-referrals", status: "keep", children: [] };
  }

  // 9. BOOKING — use the smart booking node
  // (already built with free/virtual logic)

  // 10. OTHER — anything unclassified stays as top-level
  const otherPages = classified.get("other")!;

  // --- Assemble in best-practice order ---
  const newChildren: SitemapNode[] = [
    referralsNode,
    treatmentsNode,
    costsNode,
    resultsNode,
    aboutNode,
  ];

  if (patientNode) newChildren.push(patientNode);
  newChildren.push(blogNode);

  // Add any unclassified pages before contact
  for (const page of otherPages) {
    newChildren.push(page);
  }

  newChildren.push(contactNode);
  newChildren.push(bookingNode);

  home.children = newChildren;
  return [home];
}

function findTreatmentsParent(nodes: SitemapNode[]): SitemapNode | null {
  for (const node of nodes) {
    if (node.title.toLowerCase().includes("treatment") || node.path.toLowerCase().includes("treatment")) {
      return node;
    }
    const found = findTreatmentsParent(node.children);
    if (found) return found;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Mega menu restructuring
// ---------------------------------------------------------------------------

type TreatmentCategory = "aligner" | "braces" | "age" | "other";

function categorizeTreatment(node: SitemapNode): TreatmentCategory {
  const lower = node.title.toLowerCase();
  const pathLower = node.path.toLowerCase();
  const combined = lower + " " + pathLower;

  // Aligners
  if (combined.includes("invisalign") || combined.includes("aligner") || combined.includes("spark") || combined.includes("angel")) return "aligner";
  // Monitoring / dental tech that goes with aligners
  if (combined.includes("dental monitoring")) return "aligner";
  // Braces
  if (combined.includes("brace") || combined.includes("ceramic") || combined.includes("lingual") || combined.includes("lightforce")) return "braces";
  // Age-based
  if (combined.includes("adult") || combined.includes("teen") || combined.includes("child") || combined.includes("kid") || combined.includes("early treatment") || combined.includes("early intervention")) return "age";
  // Everything else (retainers, whitening, mouthguards, orthognathic, NHS, expanders, etc.)
  return "other";
}

/** Check if a node is already a grouping parent (clear-aligners, braces, treatment-for, other-services) */
function isGroupingParent(node: SitemapNode): boolean {
  const pathLower = node.path.toLowerCase();
  return (
    pathLower.endsWith("/clear-aligners") ||
    pathLower.endsWith("/braces") ||
    pathLower.endsWith("/treatment-for") ||
    pathLower.endsWith("/other-services")
  );
}

/**
 * Restructure a flat treatments list into a mega menu when there are
 * multiple items in the same category.
 *
 * Only restructures direct children of the treatments node that are NOT
 * already nested under a grouping parent.
 */
function restructureTreatments(pages: SitemapNode[]): SitemapNode[] {
  const treatmentsNode = findTreatmentsParent(pages);
  if (!treatmentsNode) return pages;

  // Check if mega menu grouping parents already exist
  const existingGroups = {
    aligner: treatmentsNode.children.find((c) => c.path.toLowerCase().endsWith("/clear-aligners")),
    braces: treatmentsNode.children.find((c) => c.path.toLowerCase().endsWith("/braces") && c.children.length > 0),
    age: treatmentsNode.children.find((c) => c.path.toLowerCase().endsWith("/treatment-for")),
    other: treatmentsNode.children.find((c) => c.path.toLowerCase().endsWith("/other-services")),
  };

  // If mega menu already exists, just make sure any new additions land in the right group
  const hasExistingMegaMenu = Object.values(existingGroups).some(Boolean);
  if (hasExistingMegaMenu) {
    // Move any miscategorized flat children into the right group
    const toRemove: SitemapNode[] = [];
    for (const child of treatmentsNode.children) {
      if (isGroupingParent(child)) continue; // Skip group parents themselves
      const cat = categorizeTreatment(child);
      const targetGroup = existingGroups[cat];
      if (targetGroup) {
        targetGroup.children.push({
          ...child,
          path: `${targetGroup.path}/${child.path.split("/").pop()}`,
        });
        toRemove.push(child);
      }
    }
    if (toRemove.length > 0) {
      treatmentsNode.children = treatmentsNode.children.filter((c) => !toRemove.includes(c));
    }
    return pages;
  }

  // No mega menu yet — categorize all direct children
  const aligners: SitemapNode[] = [];
  const braces: SitemapNode[] = [];
  const ageBased: SitemapNode[] = [];
  const other: SitemapNode[] = [];

  for (const child of treatmentsNode.children) {
    const cat = categorizeTreatment(child);
    if (cat === "aligner") aligners.push(child);
    else if (cat === "braces") braces.push(child);
    else if (cat === "age") ageBased.push(child);
    else other.push(child);
  }

  // Only restructure if we have 2+ aligners OR 2+ braces (the trigger for mega menu)
  const needsMegaMenu = aligners.length >= 2 || braces.length >= 2;
  if (!needsMegaMenu) return pages;

  const newChildren: SitemapNode[] = [];
  const basePath = treatmentsNode.path;

  /** Nest items under a group. Flatten any existing children —
   *  in a mega menu each treatment is a single page, not a section with sub-pages. */
  function nestUnderGroup(
    groupTitle: string,
    groupSlug: string,
    items: SitemapNode[]
  ): SitemapNode {
    // Deduplicate: if a parent and its children are both in the list,
    // keep only the parent and strip its children
    const parentPaths = new Set(items.filter((i) => i.children.length > 0).map((i) => i.path));
    const deduped = items.filter((item) => {
      const parentSegments = item.path.split("/").slice(0, -1).join("/");
      return !parentPaths.has(parentSegments);
    });

    return {
      id: generateId(),
      title: groupTitle,
      path: `${basePath}/${groupSlug}`,
      status: "keep",
      children: deduped.map((item) => ({
        ...item,
        path: item.path.includes(`/${groupSlug}/`)
          ? item.path
          : `${basePath}/${groupSlug}/${item.path.split("/").pop()}`,
        // Strip children — mega menu items are flat
        children: [],
      })),
    };
  }

  // Clear aligners group
  if (aligners.length >= 2) {
    newChildren.push(nestUnderGroup("Clear aligners", "clear-aligners", aligners));
  } else {
    newChildren.push(...aligners);
  }

  // Braces group
  if (braces.length >= 2) {
    newChildren.push(nestUnderGroup("Braces", "braces", braces));
  } else {
    newChildren.push(...braces);
  }

  // Treatment for group
  if (ageBased.length >= 2) {
    newChildren.push(nestUnderGroup("Treatment for", "treatment-for", ageBased));
  } else {
    newChildren.push(...ageBased);
  }

  // Other services group
  if (other.length >= 2) {
    newChildren.push(nestUnderGroup("Other services", "other-services", other));
  } else {
    newChildren.push(...other);
  }

  treatmentsNode.children = newChildren;
  return pages;
}

/** Convert API response to our SitemapNode format */
function apiToNodes(apiPages: { id: string; title: string; path: string; children: unknown[] }[]): SitemapNode[] {
  return apiPages.map((p) => ({
    id: p.id,
    title: p.title,
    path: p.path,
    status: "keep" as const,
    children: apiToNodes(p.children as { id: string; title: string; path: string; children: unknown[] }[]),
  }));
}

function countPages(nodes: SitemapNode[]): { keep: number; remove: number; add: number } {
  let keep = 0, remove = 0, add = 0;
  for (const node of nodes) {
    if (node.status === "keep") keep++;
    else if (node.status === "remove") remove++;
    else if (node.status === "add") add++;
    const child = countPages(node.children);
    keep += child.keep;
    remove += child.remove;
    add += child.add;
  }
  return { keep, remove, add };
}

// ---------------------------------------------------------------------------
// Tree node component
// ---------------------------------------------------------------------------

function TreeNode({
  node,
  depth,
  isFirst,
  isLast,
  onToggleStatus,
  onRemove,
  onToggleCollapse,
  onMoveUp,
  onMoveDown,
}: {
  node: SitemapNode;
  depth: number;
  isFirst: boolean;
  isLast: boolean;
  onToggleStatus: (id: string) => void;
  onRemove: (id: string) => void;
  onToggleCollapse: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}) {
  const hasChildren = node.children.length > 0;
  const isCollapsed = node.collapsed;
  const isHome = node.path === "/";

  const statusStyles = {
    keep: "border-secondary bg-white text-primary",
    remove: "border-red-200 bg-red-50 text-red-400 line-through",
    add: "border-green-200 bg-green-50 text-green-700",
  };

  const statusBadge = {
    keep: null,
    remove: <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">removing</span>,
    add: <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">new</span>,
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 ${statusStyles[node.status]} transition-all`}
        style={{ marginLeft: depth * 24 }}
      >
        {/* Move up/down */}
        {!isHome && (
          <div className="flex flex-col flex-shrink-0">
            <button
              onClick={() => onMoveUp(node.id)}
              disabled={isFirst}
              className={`${isFirst ? "text-gray-200" : "text-text-muted hover:text-primary"} transition-colors`}
            >
              <ArrowUp className="w-3 h-3" />
            </button>
            <button
              onClick={() => onMoveDown(node.id)}
              disabled={isLast}
              className={`${isLast ? "text-gray-200" : "text-text-muted hover:text-primary"} transition-colors`}
            >
              <ArrowDown className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Collapse toggle */}
        {hasChildren ? (
          <button
            onClick={() => onToggleCollapse(node.id)}
            className="text-text-muted hover:text-primary transition-colors flex-shrink-0"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        ) : (
          <div className="w-4 flex-shrink-0" />
        )}

        {/* Page title */}
        <span className="flex-1 text-sm font-medium">{node.title}</span>
        <span className="text-xs text-text-muted hidden sm:block">{node.path}</span>

        {/* Status badge */}
        {statusBadge[node.status]}

        {/* Toggle keep/remove */}
        {node.status !== "add" && !isHome && (
          <button
            onClick={() => onToggleStatus(node.id)}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              node.status === "keep"
                ? "text-red-500 hover:bg-red-50"
                : "text-green-600 hover:bg-green-50"
            }`}
          >
            {node.status === "keep" ? "Remove" : "Keep"}
          </button>
        )}

        {/* Delete (only for added pages) */}
        {node.status === "add" && (
          <button
            onClick={() => onRemove(node.id)}
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Children */}
      {hasChildren && !isCollapsed && (
        <div className="mt-1.5 space-y-1.5">
          {node.children.map((child, idx) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              isFirst={idx === 0}
              isLast={idx === node.children.length - 1}
              onToggleStatus={onToggleStatus}
              onRemove={onRemove}
              onToggleCollapse={onToggleCollapse}
              onMoveUp={onMoveUp}
              onMoveDown={onMoveDown}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function SitemapEditor({ data, updateData }: SitemapEditorProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<SitemapNode[]>(() => data.sitemapPages || []);
  const [addingPage, setAddingPage] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState("");
  const [newPageParent, setNewPageParent] = useState("/");

  // Sync pages to wizard data
  useEffect(() => {
    updateData({ sitemapPages: pages, sitemapApproved: false });
  }, [pages, updateData]);

  const isNewBuild = data.isNewMember === "yes";

  const fetchSitemap = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let nodes: SitemapNode[];

      // Try to scrape existing site if URL provided
      if (data.practiceUrl) {
        const res = await fetch("/api/fetch-sitemap", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: data.practiceUrl }),
        });

        const json = await res.json();

        if (json.success) {
          nodes = apiToNodes(json.pages);

          if (isNewBuild) {
            // New build: merge scraped sitemap with treatment selections
            nodes = mergeWithNewBuildSelections(nodes, {
              treatments: data.treatments || [],
              otherAlignerBrands: data.otherAlignerBrands,
              treatmentsOther: data.treatmentsOther,
            });

            // Apply best-practice restructuring (reorder, nest, fill gaps)
            const bookingNode = buildBookingPages({
              consultationFree: data.consultationFree,
              consultationProcess: data.consultationProcess,
              virtualConsultations: data.virtualConsultations,
              virtualConsultationFree: data.virtualConsultationFree,
            });
            nodes = applyBestPracticeSitemap(nodes, bookingNode, {
              treatments: data.treatments || [],
              otherAlignerBrands: data.otherAlignerBrands,
              treatmentsOther: data.treatmentsOther,
            });
          } else {
            // Refresh: apply treatment change text
            if (data.treatmentsChanged === "yes" && data.treatmentsChangedDetails) {
              nodes = applyTreatmentChanges(nodes, data.treatmentsChangedDetails);
            }
          }
        } else if (isNewBuild) {
          // Couldn't scrape but it's a new build — generate from scratch
          nodes = generateNewBuildSitemap({
            treatments: data.treatments || [],
            otherAlignerBrands: data.otherAlignerBrands,
            treatmentsOther: data.treatmentsOther,
            practiceName: data.practiceName,
            consultationFree: data.consultationFree,
            consultationProcess: data.consultationProcess,
            virtualConsultations: data.virtualConsultations,
            virtualConsultationFree: data.virtualConsultationFree,
          });
        } else {
          setError(json.error || "Failed to fetch sitemap.");
          return;
        }
      } else if (isNewBuild) {
        // No URL at all — generate fresh sitemap from selections
        nodes = generateNewBuildSitemap({
          treatments: data.treatments || [],
          otherAlignerBrands: data.otherAlignerBrands,
          treatmentsOther: data.treatmentsOther,
          practiceName: data.practiceName,
        });
      } else {
        setError("No practice URL provided — please go back and add one in the Contacts step.");
        return;
      }

      // Update booking page based on consultation process + virtual consultation data
      {
        const bookingReplacement = buildBookingPages({
          consultationFree: data.consultationFree,
          consultationProcess: data.consultationProcess,
          virtualConsultations: data.virtualConsultations,
          virtualConsultationFree: data.virtualConsultationFree,
        });
        function replaceBookingNode(items: SitemapNode[]): SitemapNode[] {
          return items.map((n) => {
            const lower = n.title.toLowerCase();
            if (lower.includes("book") && (lower.includes("consult") || lower.includes("appointment"))) {
              return { ...bookingReplacement, id: n.id };
            }
            return { ...n, children: replaceBookingNode(n.children) };
          });
        }
        nodes = replaceBookingNode(nodes);
      }

      // Restructure treatments into mega menu if enough items in each category
      nodes = restructureTreatments(nodes);

      setPages(nodes);
    } catch {
      setError("Something went wrong building the sitemap. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [data.practiceUrl, data.isNewMember, data.treatments, data.otherAlignerBrands, data.treatmentsOther, data.treatmentsChanged, data.treatmentsChangedDetails, data.practiceName, data.consultationProcess, data.virtualConsultations, data.virtualConsultationFree, isNewBuild]);

  // Auto-fetch on mount if no pages loaded yet
  useEffect(() => {
    if (pages.length === 0 && (data.practiceUrl || isNewBuild)) {
      fetchSitemap();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Tree mutation helpers ---

  function toggleStatus(id: string) {
    setPages((prev) => toggleNodeStatus(prev, id));
  }

  function toggleNodeStatus(nodes: SitemapNode[], id: string): SitemapNode[] {
    return nodes.map((n) => {
      if (n.id === id) {
        return { ...n, status: n.status === "keep" ? "remove" as const : "keep" as const };
      }
      return { ...n, children: toggleNodeStatus(n.children, id) };
    });
  }

  function removeNode(id: string) {
    setPages((prev) => filterNode(prev, id));
  }

  function filterNode(nodes: SitemapNode[], id: string): SitemapNode[] {
    return nodes
      .filter((n) => n.id !== id)
      .map((n) => ({ ...n, children: filterNode(n.children, id) }));
  }

  function moveNodeUp(id: string) {
    setPages((prev) => swapNode(prev, id, -1));
  }

  function moveNodeDown(id: string) {
    setPages((prev) => swapNode(prev, id, 1));
  }

  function swapNode(nodes: SitemapNode[], id: string, direction: -1 | 1): SitemapNode[] {
    // Check if the node is a direct child at this level
    const idx = nodes.findIndex((n) => n.id === id);
    if (idx !== -1) {
      const targetIdx = idx + direction;
      if (targetIdx < 0 || targetIdx >= nodes.length) return nodes;
      const newNodes = [...nodes];
      [newNodes[idx], newNodes[targetIdx]] = [newNodes[targetIdx], newNodes[idx]];
      return newNodes;
    }
    // Otherwise recurse into children
    return nodes.map((n) => ({
      ...n,
      children: swapNode(n.children, id, direction),
    }));
  }

  function toggleCollapse(id: string) {
    setPages((prev) => toggleCollapseNode(prev, id));
  }

  function toggleCollapseNode(nodes: SitemapNode[], id: string): SitemapNode[] {
    return nodes.map((n) => {
      if (n.id === id) return { ...n, collapsed: !n.collapsed };
      return { ...n, children: toggleCollapseNode(n.children, id) };
    });
  }

  function addPage() {
    if (!newPageTitle.trim()) return;

    const slug = newPageTitle.trim().toLowerCase().replace(/\s+/g, "-");
    const parentPath = newPageParent === "/" ? "" : newPageParent;
    const newPage: SitemapNode = {
      id: generateId(),
      title: newPageTitle.trim(),
      path: `${parentPath}/${slug}`,
      status: "add",
      children: [],
    };

    if (newPageParent === "/") {
      // Add as top-level child of homepage
      setPages((prev) => {
        if (prev[0]) {
          return [{ ...prev[0], children: [...prev[0].children, newPage] }];
        }
        return [...prev, newPage];
      });
    } else {
      setPages((prev) => addToParent(prev, newPageParent, newPage));
    }

    setNewPageTitle("");
    setAddingPage(false);
  }

  function addToParent(nodes: SitemapNode[], parentPath: string, newPage: SitemapNode): SitemapNode[] {
    return nodes.map((n) => {
      if (n.path === parentPath) {
        return { ...n, children: [...n.children, newPage], collapsed: false };
      }
      return { ...n, children: addToParent(n.children, parentPath, newPage) };
    });
  }

  // Collect all paths for the parent dropdown
  function collectPaths(nodes: SitemapNode[], result: { path: string; title: string; depth: number }[] = [], depth = 0) {
    for (const n of nodes) {
      if (n.status !== "remove") {
        result.push({ path: n.path, title: n.title, depth });
        collectPaths(n.children, result, depth + 1);
      }
    }
    return result;
  }

  const allPaths = collectPaths(pages);
  const counts = countPages(pages);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Sitemap
        </h2>
        <p className="text-text-muted">
          {isNewBuild
            ? "We\u2019ve built a sitemap based on your treatment selections and best practice. If you provided a website URL, we\u2019ve also pulled in your existing pages. We may have restructured treatments into a clearer navigation structure."
            : "We\u2019ve pulled your current site structure and flagged any changes or additions based on your updates in the previous step. We may have also restructured parts of the sitemap to follow best practice (e.g. grouping treatments into a clearer navigation structure)."
          }
          {" "}Review the pages below — you can add, remove or rearrange anything before approving.
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-primary mr-3" />
          <span className="text-text-muted">Fetching your sitemap...</span>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-red-700">{error}</p>
              <button
                onClick={fetchSitemap}
                className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Try again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sitemap tree */}
      {!loading && pages.length > 0 && (
        <>
          {/* Summary counts */}
          <div className="flex gap-4 mb-6 text-sm">
            <span className="text-primary">{counts.keep} keeping</span>
            {counts.remove > 0 && <span className="text-red-500">{counts.remove} removing</span>}
            {counts.add > 0 && <span className="text-green-600">{counts.add} adding</span>}
          </div>

          <div className="space-y-1.5">
            {pages.map((page, idx) => (
              <TreeNode
                key={page.id}
                node={page}
                depth={0}
                isFirst={idx === 0}
                isLast={idx === pages.length - 1}
                onToggleStatus={toggleStatus}
                onRemove={removeNode}
                onToggleCollapse={toggleCollapse}
                onMoveUp={moveNodeUp}
                onMoveDown={moveNodeDown}
              />
            ))}
          </div>

          {/* Add page */}
          <div className="mt-6">
            {addingPage ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-4 bg-secondary/10 rounded-xl space-y-3"
              >
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Page name</label>
                  <TextInput
                    value={newPageTitle}
                    onChange={setNewPageTitle}
                    placeholder="e.g. Spark Aligners"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Add under</label>
                  <select
                    value={newPageParent}
                    onChange={(e) => setNewPageParent(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white text-sm"
                  >
                    {allPaths.map((p) => (
                      <option key={p.path} value={p.path}>
                        {"—".repeat(p.depth)} {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={addPage}
                    disabled={!newPageTitle.trim()}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors disabled:opacity-40"
                  >
                    Add page
                  </button>
                  <button
                    onClick={() => { setAddingPage(false); setNewPageTitle(""); }}
                    className="px-4 py-2 text-text-muted hover:text-primary text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            ) : (
              <button
                onClick={() => setAddingPage(true)}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <Plus className="w-4 h-4" /> Add a page
              </button>
            )}
          </div>

          {/* Re-fetch */}
          <button
            onClick={fetchSitemap}
            className="mt-4 flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Re-scan website
          </button>

          {/* Approval */}
          <div className="mt-8 p-5 bg-secondary/20 rounded-xl border border-secondary/40">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.sitemapApproved || false}
                onChange={(e) => updateData({ sitemapApproved: e.target.checked })}
                className="mt-0.5 w-5 h-5 rounded border-secondary text-primary focus:ring-primary/20 accent-primary cursor-pointer"
              />
              <span className="text-sm text-primary">
                I&apos;m happy with the proposed sitemap for my {isNewBuild ? "new" : "refreshed"} website.
              </span>
            </label>
          </div>
        </>
      )}

      {/* No URL provided and not a new build */}
      {!loading && !error && pages.length === 0 && !data.practiceUrl && !isNewBuild && (
        <div className="rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center px-4 py-8 text-sm text-text-muted">
          No practice URL provided — go back to the Contacts step and add your website address.
        </div>
      )}
    </div>
  );
}
