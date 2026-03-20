"use client";

import { WizardData } from "../WizardContainer";
import StyleCard from "../ui/StyleCard";

interface StyleSelectionProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

/* Each preview is a mini "TIO Orthodontics" above-the-fold mockup in a different style */

const styles = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean lines, lots of white space, simple elegance",
    preview: (
      <div className="w-full h-full bg-white rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex justify-between items-center px-2.5 py-1.5 border-b border-gray-100">
          <span className="font-bold text-gray-900 tracking-tight">TIO Orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-gray-400">Treatments</span>
            <span className="text-gray-400">About</span>
            <span className="text-gray-400">Contact</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-3 gap-1">
          <span className="text-gray-900 font-light" style={{ fontSize: "7px" }}>Your perfect smile</span>
          <span className="text-gray-400">Expert orthodontic care in a calm, welcoming environment.</span>
          <div className="mt-1 px-3 py-1 bg-gray-900 text-white rounded-full" style={{ fontSize: "4px" }}>
            Book a consultation
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "bold",
    name: "Bold",
    description: "Strong colours, impactful typography, confident presence",
    preview: (
      <div className="w-full h-full bg-gray-950 rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex justify-between items-center px-2.5 py-1.5">
          <span className="font-extrabold text-white tracking-tight">TIO ORTHODONTICS</span>
          <div className="flex gap-2 items-center">
            <span className="text-white/50">Treatments</span>
            <span className="text-white/50">About</span>
            <span className="px-2 py-0.5 bg-yellow-400 text-gray-900 rounded-sm font-bold">Book now</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center px-2.5 gap-0.5">
          <span className="text-yellow-400 font-extrabold leading-tight" style={{ fontSize: "8px" }}>TRANSFORM</span>
          <span className="text-white font-extrabold leading-tight" style={{ fontSize: "8px" }}>YOUR SMILE</span>
          <span className="text-white/50 mt-0.5">Confidence starts here. World-class orthodontics.</span>
          <div className="mt-1 px-3 py-1 bg-yellow-400 text-gray-900 rounded font-bold inline-block self-start" style={{ fontSize: "4px" }}>
            Get started
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Sophisticated, refined, premium feel",
    preview: (
      <div className="w-full h-full bg-stone-50 rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex flex-col items-center py-1.5 border-b border-stone-200">
          <span className="font-light text-stone-800 tracking-widest" style={{ fontSize: "5px" }}>TIO ORTHODONTICS</span>
          <div className="flex gap-3 mt-0.5">
            <span className="text-stone-400">Treatments</span>
            <span className="text-stone-400">About</span>
            <span className="text-stone-400">Contact</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-3 gap-1">
          <div className="w-8 h-[0.5px] bg-amber-700/40" />
          <span className="text-stone-800 italic" style={{ fontSize: "7px" }}>A smile worth waiting for</span>
          <div className="w-8 h-[0.5px] bg-amber-700/40" />
          <span className="text-stone-400 text-center">Premium orthodontic care with a personal touch.</span>
          <div className="mt-1 px-3 py-1 border border-stone-700 text-stone-700 rounded-none" style={{ fontSize: "4px" }}>
            Book your consultation
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "playful",
    name: "Playful",
    description: "Fun, approachable, energetic vibes",
    preview: (
      <div className="w-full h-full bg-violet-50 rounded overflow-hidden flex flex-col relative" style={{ fontSize: "4.5px" }}>
        <div className="absolute top-3 right-2 w-5 h-5 bg-yellow-200/60 rounded-full" />
        <div className="absolute bottom-2 left-1 w-3 h-3 bg-pink-200/60 rounded-full" />
        <div className="flex justify-between items-center px-2.5 py-1.5 relative z-10">
          <span className="font-bold text-violet-700">tio orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-violet-400">Treatments</span>
            <span className="text-violet-400">About</span>
            <span className="px-2 py-0.5 bg-pink-400 text-white rounded-full font-bold">Book</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-3 gap-1 relative z-10">
          <span className="text-violet-800 font-bold text-center" style={{ fontSize: "7px" }}>Smile, you&apos;re in good hands!</span>
          <span className="text-violet-400 text-center">Friendly orthodontics for kids, teens &amp; adults.</span>
          <div className="mt-1 px-3 py-1 bg-gradient-to-r from-pink-400 to-violet-500 text-white rounded-full font-bold" style={{ fontSize: "4px" }}>
            Let&apos;s get started
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "Professional, trustworthy, established",
    preview: (
      <div className="w-full h-full bg-white rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex justify-between items-center px-2.5 py-1.5 bg-blue-900">
          <span className="font-bold text-white tracking-tight">TIO Orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-blue-200">Treatments</span>
            <span className="text-blue-200">About</span>
            <span className="text-blue-200">Contact</span>
            <span className="px-2 py-0.5 bg-blue-500 text-white rounded-sm">Book</span>
          </div>
        </div>
        <div className="flex-1 flex gap-1.5 p-2">
          <div className="flex-1 flex flex-col justify-center gap-0.5">
            <span className="text-blue-900 font-bold" style={{ fontSize: "6.5px" }}>Trusted orthodontic care</span>
            <span className="text-gray-500">Established specialists you can rely on for every stage of treatment.</span>
            <div className="mt-1 px-2 py-1 bg-blue-700 text-white rounded-sm inline-block self-start" style={{ fontSize: "4px" }}>
              Book a consultation
            </div>
          </div>
          <div className="w-14 bg-blue-100 rounded flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-blue-300 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "creative",
    name: "Creative",
    description: "Artistic, unique, expressive design",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-white to-rose-50 rounded overflow-hidden flex flex-col relative" style={{ fontSize: "4.5px" }}>
        <div className="absolute top-4 right-1 w-8 h-8 bg-indigo-200/30 rounded-full blur-[2px]" />
        <div className="absolute bottom-1 left-1 w-6 h-6 bg-rose-200/30 rounded-full blur-[2px]" />
        <div className="flex justify-between items-center px-2.5 py-1.5 relative z-10">
          <span className="font-bold text-indigo-700">tio</span>
          <div className="flex gap-2">
            <span className="text-indigo-400">Treatments</span>
            <span className="text-indigo-400">About</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-3 gap-1 relative z-10">
          <span className="text-indigo-900 font-bold text-center" style={{ fontSize: "7px" }}>Redefining the</span>
          <span className="bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-center font-bold" style={{ fontSize: "7px", color: "transparent", WebkitBackgroundClip: "text" }}>orthodontic experience</span>
          <span className="text-indigo-400 text-center">Where artistry meets dental science.</span>
          <div className="mt-1 px-3 py-1 bg-gradient-to-r from-indigo-500 to-rose-400 text-white rounded-full" style={{ fontSize: "4px" }}>
            Discover more
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "modern",
    name: "Modern",
    description: "Contemporary, cutting-edge, forward-thinking",
    preview: (
      <div className="w-full h-full bg-gray-50 rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex justify-between items-center px-2.5 py-1.5 bg-white">
          <span className="font-bold text-gray-900">tio orthodontics</span>
          <div className="flex gap-2 items-center">
            <span className="text-gray-400">Treatments</span>
            <span className="text-gray-400">About</span>
            <span className="px-2 py-0.5 bg-gray-900 text-white rounded-full">Book</span>
          </div>
        </div>
        <div className="flex-1 flex gap-1 p-1.5">
          <div className="flex-[3] bg-gray-900 rounded-xl flex flex-col justify-center px-2 gap-0.5">
            <span className="text-emerald-400 font-bold" style={{ fontSize: "7px" }}>Straighten.</span>
            <span className="text-white font-bold" style={{ fontSize: "7px" }}>Transform.</span>
            <span className="text-white/50">Next-level orthodontics.</span>
            <div className="mt-1 px-2 py-1 bg-emerald-400 text-gray-900 rounded-lg inline-block self-start font-bold" style={{ fontSize: "4px" }}>
              Get started
            </div>
          </div>
          <div className="flex-[2] bg-emerald-100 rounded-xl" />
        </div>
      </div>
    ),
  },
  {
    id: "classic",
    name: "Classic",
    description: "Timeless, traditional, enduring appeal",
    preview: (
      <div className="w-full h-full bg-amber-50/80 rounded overflow-hidden flex flex-col" style={{ fontSize: "4.5px" }}>
        <div className="flex flex-col items-center py-1.5 border-b border-amber-200/80">
          <span className="font-bold text-amber-900 tracking-wider" style={{ fontSize: "5px" }}>TIO ORTHODONTICS</span>
          <div className="flex gap-3 mt-0.5">
            <span className="text-amber-700/50">Treatments</span>
            <span className="text-amber-700/50">Results</span>
            <span className="text-amber-700/50">About</span>
            <span className="text-amber-700/50">Contact</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-3 gap-1">
          <div className="w-10 h-[0.5px] bg-amber-400" />
          <span className="text-amber-900 text-center" style={{ fontSize: "6.5px" }}>Orthodontic excellence</span>
          <span className="text-amber-900 text-center" style={{ fontSize: "6.5px" }}>since 1985</span>
          <div className="w-10 h-[0.5px] bg-amber-400" />
          <span className="text-amber-700/60 text-center">A tradition of beautiful smiles.</span>
          <div className="mt-1 px-3 py-1 border border-amber-800 text-amber-900" style={{ fontSize: "4px" }}>
            Arrange a visit
          </div>
        </div>
      </div>
    ),
  },
];

export default function StyleSelection({ data, updateData }: StyleSelectionProps) {
  const toggleStyle = (styleId: string) => {
    const current = data.selectedStyles || [];
    if (current.includes(styleId)) {
      updateData({ selectedStyles: current.filter((s) => s !== styleId) });
    } else {
      updateData({ selectedStyles: [...current, styleId] });
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Which styles catch your eye?
        </h2>
        <p className="text-text-muted">
          Select all the design styles that appeal to you. This helps us understand your visual preferences.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {styles.map((style) => (
          <StyleCard
            key={style.id}
            id={style.id}
            name={style.name}
            description={style.description}
            preview={style.preview}
            isSelected={(data.selectedStyles || []).includes(style.id)}
            onToggle={() => toggleStyle(style.id)}
          />
        ))}
      </div>

      {(data.selectedStyles || []).length > 0 && (
        <p className="mt-6 text-sm text-text-muted text-center">
          {(data.selectedStyles || []).length} style{(data.selectedStyles || []).length !== 1 ? "s" : ""} selected
        </p>
      )}
    </div>
  );
}
