"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WizardData } from "../WizardContainer";

interface BrandAttributesProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

interface Persona {
  id: string;
  name: string;
  tagline: string;
  traits: string[];
  preview: React.ReactNode;
}

const personas: Persona[] = [
  {
    id: "friendly-expert",
    name: "The friendly expert",
    tagline: "Approachable, knowledgeable, and warm",
    traits: ["Warm colours", "Rounded shapes", "Lifestyle imagery", "Conversational tone"],
    preview: (
      <div className="w-full h-full bg-[#f0faf7] rounded-xl overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex justify-between items-center px-3 py-2 bg-white">
          <span className="font-bold text-[#1a6b5a]">TIO Orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-[#1a6b5a]/50">Treatments</span>
            <span className="text-[#1a6b5a]/50">About us</span>
            <span className="text-[#1a6b5a]/50">Costs</span>
            <span className="px-2.5 py-1 bg-[#1a6b5a] text-white rounded-full font-semibold" style={{ fontSize: "4px" }}>Book a free consultation</span>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col justify-center px-3 gap-1">
            <span className="font-bold text-[#1a6b5a] leading-tight" style={{ fontSize: "8px" }}>We make straightening teeth simple</span>
            <span className="text-[#1a6b5a]/50 leading-snug">Friendly, expert orthodontic care for the whole family. No jargon, no pressure.</span>
            <div className="flex gap-1.5 mt-1.5">
              <span className="px-2.5 py-1 bg-[#1a6b5a] text-white rounded-full font-semibold" style={{ fontSize: "4px" }}>Book your free consultation</span>
              <span className="px-2.5 py-1 border border-[#1a6b5a]/30 text-[#1a6b5a] rounded-full font-semibold" style={{ fontSize: "4px" }}>See our treatments</span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/personas/friendly-expert.jpg"
            alt=""
            className="w-[42%] object-cover rounded-l-3xl"
          />
        </div>
        <div className="flex gap-3 px-3 py-1.5 bg-white justify-center">
          <span className="text-[#1a6b5a]/40 font-semibold">★★★★★ 200+ reviews</span>
          <span className="text-[#1a6b5a]/40">•</span>
          <span className="text-[#1a6b5a]/40 font-semibold">Free consultations</span>
          <span className="text-[#1a6b5a]/40">•</span>
          <span className="text-[#1a6b5a]/40 font-semibold">0% finance available</span>
        </div>
      </div>
    ),
  },
  {
    id: "premium-specialist",
    name: "The premium specialist",
    tagline: "Refined, exclusive, and high-end",
    traits: ["Muted/dark tones", "Elegant typography", "Cinematic feel", "Sophisticated"],
    preview: (
      <div className="w-full h-full rounded overflow-hidden flex flex-col relative" style={{ fontSize: "4.5px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/personas/premium-specialist.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a1f]/75" />
        {/* Nav */}
        <div className="flex justify-between items-center px-3 py-2 border-b border-white/15 relative z-10">
          <span className="font-light text-[#c9b99a] tracking-[0.15em]" style={{ fontSize: "4.5px" }}>TIO ORTHODONTICS</span>
          <div className="flex gap-2.5 items-center">
            <span className="text-white/50 font-light">Treatments</span>
            <span className="text-white/50 font-light">About</span>
            <span className="text-white/50 font-light">Results</span>
            <span className="px-2.5 py-1 border border-[#c9b99a]/60 text-[#c9b99a]" style={{ fontSize: "4px" }}>Book a consultation</span>
          </div>
        </div>
        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 gap-1.5 relative z-10">
          <div className="w-10 h-[0.5px] bg-[#c9b99a]/50" />
          <span className="font-light text-white text-center italic leading-tight drop-shadow-md" style={{ fontSize: "8.5px" }}>The art of a beautiful smile</span>
          <div className="w-10 h-[0.5px] bg-[#c9b99a]/50" />
          <span className="text-white/60 text-center font-light">Award-winning specialist orthodontist. By appointment only.</span>
          <span className="mt-1.5 px-3 py-1 bg-[#c9b99a] text-[#1a1a1f] font-medium" style={{ fontSize: "4px" }}>Arrange a private consultation</span>
        </div>
      </div>
    ),
  },
  {
    id: "family-practice",
    name: "The family practice",
    tagline: "Welcoming, bright, and inclusive",
    traits: ["Bright colours", "Playful touches", "Friendly imagery", "Family-focused"],
    preview: (
      <div className="w-full h-full bg-[#f5f0ff] rounded-xl overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        {/* Nav */}
        <div className="flex justify-between items-center px-3 py-2 bg-white">
          <span className="font-extrabold text-[#6d28d9]">TIO Orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-[#6d28d9]/40">Treatments</span>
            <span className="text-[#6d28d9]/40">About us</span>
            <span className="text-[#6d28d9]/40">Costs</span>
            <span className="px-2.5 py-1 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white rounded-full font-bold" style={{ fontSize: "4px" }}>Book now</span>
          </div>
        </div>
        {/* Hero + Cards wrapper with shared background image */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/personas/family-practice-2.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#6d28d9]/25 via-[#6d28d9]/15 to-[#6d28d9]/35" />
          {/* Hero text */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-1 relative z-10">
            <span className="font-extrabold text-[#6d28d9] text-center leading-tight" style={{ fontSize: "8.5px" }}>Smiles for the whole family!</span>
            <span className="text-[#6d28d9]/50 text-center leading-snug">Fun, friendly orthodontics for kids, teens &amp; adults. We make every visit something to smile about.</span>
            <div className="flex gap-1.5 mt-1.5">
              <span className="px-2.5 py-1 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white rounded-full font-bold" style={{ fontSize: "4px" }}>Book a free consultation</span>
              <span className="px-2.5 py-1 border border-[#8b5cf6]/40 text-[#6d28d9] rounded-full font-bold" style={{ fontSize: "4px" }}>Meet the team</span>
            </div>
          </div>
          {/* Cards */}
          <div className="flex gap-1.5 px-3 pb-2 relative z-10">
            <div className="flex-1 bg-white/80 rounded-xl p-1.5 text-center shadow-sm">
              <div className="w-4 h-2 border-b-[1.5px] border-[#fbbf24] rounded-b-full mx-auto mb-0.5" />
              <span className="font-bold text-[#6d28d9]" style={{ fontSize: "3.5px" }}>Kids</span>
            </div>
            <div className="flex-1 bg-white/80 rounded-xl p-1.5 text-center shadow-sm">
              <div className="w-4 h-2 border-b-[1.5px] border-[#ec4899] rounded-b-full mx-auto mb-0.5" />
              <span className="font-bold text-[#6d28d9]" style={{ fontSize: "3.5px" }}>Teens</span>
            </div>
            <div className="flex-1 bg-white/80 rounded-xl p-1.5 text-center shadow-sm">
              <div className="w-4 h-2 border-b-[1.5px] border-[#818cf8] rounded-b-full mx-auto mb-0.5" />
              <span className="font-bold text-[#6d28d9]" style={{ fontSize: "3.5px" }}>Adults</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "modern-innovator",
    name: "The modern innovator",
    tagline: "Cutting-edge, bold, and forward-thinking",
    traits: ["Dark/contrasting tones", "Sharp layout", "Tech-forward feel", "Dynamic & bold"],
    preview: (
      <div className="w-full h-full bg-[#111] rounded-lg overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        {/* Nav */}
        <div className="flex justify-between items-center px-3 py-2">
          <span className="font-bold text-white">tio orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-white/40">Treatments</span>
            <span className="text-white/40">About</span>
            <span className="text-white/40">Results</span>
            <span className="px-2.5 py-1 bg-[#34d399] text-[#111] rounded-none font-bold" style={{ fontSize: "4px" }}>Book now</span>
          </div>
        </div>
        {/* Hero */}
        <div className="flex-1 flex px-3 pb-2 gap-2">
          <div className="flex-1 flex flex-col justify-center gap-0.5">
            <span className="text-[#34d399] font-extrabold leading-tight" style={{ fontSize: "9px" }}>Straighten.</span>
            <span className="text-white font-extrabold leading-tight" style={{ fontSize: "9px" }}>Transform.</span>
            <span className="text-white/40 mt-0.5 leading-snug">Next-level orthodontics powered by digital precision. Invisalign Diamond Provider.</span>
            <div className="flex gap-1.5 mt-1.5">
              <span className="px-2.5 py-1 bg-[#34d399] text-[#111] rounded-none font-bold" style={{ fontSize: "4px" }}>Get started</span>
              <span className="px-2.5 py-1 border border-white/20 text-white/60 rounded-none font-bold" style={{ fontSize: "4px" }}>See results</span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/personas/modern-innovator.jpg"
            alt=""
            className="w-[38%] object-cover rounded-xl"
          />
        </div>
      </div>
    ),
  },
  {
    id: "clinical-professional",
    name: "The clinical professional",
    tagline: "Trusted, established, and authoritative",
    traits: ["Blue/navy palette", "Structured layout", "Formal tone", "Trust signals"],
    preview: (
      <div className="w-full h-full bg-white rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        {/* Top bar */}
        <div className="flex justify-between items-center px-3 py-0.5 bg-[#0f1b3d] text-white/40" style={{ fontSize: "3.5px" }}>
          <span>Call us: 01234 567 890</span>
          <span>Mon-Fri 8am-6pm</span>
        </div>
        {/* Nav */}
        <div className="flex justify-between items-center px-3 py-1.5 bg-white border-b border-gray-200">
          <span className="font-bold text-[#0f1b3d]" style={{ fontSize: "5px" }}>TIO Orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-[#0f1b3d]/50">Treatments</span>
            <span className="text-[#0f1b3d]/50">About</span>
            <span className="text-[#0f1b3d]/50">Costs</span>
            <span className="text-[#0f1b3d]/50">Results</span>
            <span className="text-[#0f1b3d]/50">Contact</span>
            <span className="px-2.5 py-1 bg-[#2563eb] text-white rounded font-semibold" style={{ fontSize: "4px" }}>Book consultation</span>
          </div>
        </div>
        {/* Hero */}
        <div className="flex-1 flex gap-2 px-2.5 py-1.5 min-h-0">
          <div className="flex-1 bg-[#eef4ff] rounded-lg flex flex-col items-center justify-center px-3 py-2">
            <span className="font-semibold text-[#0f1b3d] tracking-wide text-center uppercase" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>TIO Orthodontics</span>
            <div className="w-8 h-[0.5px] bg-[#2563eb]/30 my-0.5" />
            <span className="font-bold text-[#0f1b3d] leading-tight text-center" style={{ fontSize: "6px" }}>Specialist orthodontic care you can trust</span>
            <span className="text-[#0f1b3d]/40 leading-snug text-center mt-0.5">Over 25 years of experience. GDC registered specialists.</span>
            <div className="flex gap-1.5 mt-1">
              <span className="px-2.5 py-1 bg-[#2563eb] text-white rounded font-semibold" style={{ fontSize: "4px" }}>Book a consultation</span>
              <span className="px-2.5 py-1 border border-[#2563eb]/30 text-[#0f1b3d] rounded font-semibold" style={{ fontSize: "4px" }}>Refer a patient</span>
            </div>
            <div className="mt-1 flex items-center gap-1 bg-white rounded px-2 py-0.5 shadow-sm border border-[#2563eb]/10">
              <span className="text-[#2563eb] font-bold" style={{ fontSize: "4px" }}>★★★★★</span>
              <span className="text-[#0f1b3d]/60 font-semibold" style={{ fontSize: "3.5px" }}>100+ 5* Google reviews</span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/personas/clinical-professional.png"
            alt=""
            className="w-[36%] object-cover object-top rounded-lg"
          />
        </div>
      </div>
    ),
  },
];

function PersonaCard({
  persona,
  isSelected,
  onToggle,
}: {
  persona: Persona;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`relative w-full text-left rounded-xl overflow-hidden border-2 transition-all ${
        isSelected
          ? "border-primary ring-2 ring-primary/20"
          : "border-secondary hover:border-primary/30"
      }`}
    >
      <div className="aspect-[16/9] p-1.5 bg-gradient-to-br from-secondary/20 to-secondary/5">
        {persona.preview}
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-primary mb-0.5">{persona.name}</h3>
        <p className="text-sm text-text-muted mb-2">{persona.tagline}</p>
        <div className="flex flex-wrap gap-1">
          {persona.traits.map((trait) => (
            <span key={trait} className="text-[10px] px-2 py-0.5 bg-secondary/30 text-primary/70 rounded-full">
              {trait}
            </span>
          ))}
        </div>
      </div>
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
        >
          <Check className="w-4 h-4 text-white" />
        </motion.div>
      )}
    </motion.button>
  );
}

export default function BrandAttributes({ data, updateData }: BrandAttributesProps) {
  const selectedPersonas: string[] = data.designChoices?.personas
    ? data.designChoices.personas.split(",").filter(Boolean)
    : [];

  const togglePersona = (id: string) => {
    let updated: string[];
    if (selectedPersonas.includes(id)) {
      updated = selectedPersonas.filter((p) => p !== id);
    } else if (selectedPersonas.length < 2) {
      updated = [...selectedPersonas, id];
    } else {
      updated = [selectedPersonas[1], id];
    }
    updateData({
      designChoices: {
        ...(data.designChoices || {}),
        personas: updated.join(","),
      },
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Which best describes your practice?
        </h2>
        <p className="text-text-muted">
          These aren&apos;t website designs — they represent different brand personalities. Pick up to 2 that feel closest to how you&apos;d like your practice to come across. Our designers will use this as a starting point for your website&apos;s look and feel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personas.map((persona) => (
          <PersonaCard
            key={persona.id}
            persona={persona}
            isSelected={selectedPersonas.includes(persona.id)}
            onToggle={() => togglePersona(persona.id)}
          />
        ))}
      </div>

      {selectedPersonas.length > 0 && (
        <p className="mt-6 text-sm text-text-muted text-center">
          {selectedPersonas.length} persona{selectedPersonas.length !== 1 ? "s" : ""} selected
        </p>
      )}
    </div>
  );
}
