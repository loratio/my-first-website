"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, X } from "lucide-react";
import { WizardData } from "../WizardContainer";

interface ColorExplorationProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

interface Palette {
  id: string;
  name: string;
  colors: string[];
}

const KEEP_BRAND_ID = "keep-brand";

const palettes: Palette[] = [
  // Colour wheel — core hues
  { id: "reds", name: "Reds", colors: ["#7f1d1d", "#dc2626", "#ef4444", "#fca5a5", "#fef2f2"] },
  { id: "oranges", name: "Oranges", colors: ["#7c2d12", "#ea580c", "#f97316", "#fdba74", "#fff7ed"] },
  { id: "yellows", name: "Yellows", colors: ["#713f12", "#ca8a04", "#eab308", "#fde047", "#fefce8"] },
  { id: "greens", name: "Greens", colors: ["#14532d", "#16a34a", "#4ade80", "#bbf7d0", "#f0fdf4"] },
  { id: "teals", name: "Teals", colors: ["#134e4a", "#0d9488", "#2dd4bf", "#99f6e4", "#f0fdfa"] },
  { id: "blues", name: "Blues", colors: ["#0f1b3d", "#2563eb", "#3b82f6", "#93c5fd", "#dbeafe"] },
  { id: "purples", name: "Purples", colors: ["#3b0764", "#7c3aed", "#a78bfa", "#c4b5fd", "#ede9fe"] },
  { id: "pinks", name: "Pinks", colors: ["#831843", "#ec4899", "#f472b6", "#fbcfe8", "#fdf2f8"] },
  // Style variations
  { id: "monochrome", name: "Monochrome", colors: ["#111827", "#4b5563", "#9ca3af", "#d1d5db", "#f9fafb"] },
  { id: "luxe", name: "Luxe", colors: ["#0a0a0a", "#1c1917", "#c9b99a", "#e7dfd0", "#f5f5f0"] },
  { id: "earthy", name: "Earthy", colors: ["#422006", "#78716c", "#a16207", "#bfa57a", "#f5f0e8"] },
  { id: "bold", name: "Bold", colors: ["#1e3a5f", "#dc2626", "#f59e0b", "#10b981", "#8b5cf6"] },
  { id: "pastels", name: "Pastels", colors: ["#fecaca", "#fde68a", "#bbf7d0", "#bfdbfe", "#ddd6fe"] },
  { id: "muted", name: "Muted", colors: ["#44403c", "#78716c", "#a8a29e", "#d6d3d1", "#f5f5f4"] },
];

export default function ColorExploration({ data, updateData }: ColorExplorationProps) {
  const [customColor, setCustomColor] = useState("#192845");
  const selected = data.selectedPalettes || [];
  const keepBrand = selected.includes(KEEP_BRAND_ID);

  const toggleKeepBrand = () => {
    if (keepBrand) {
      updateData({ selectedPalettes: selected.filter((p) => p !== KEEP_BRAND_ID) });
    } else {
      updateData({ selectedPalettes: [KEEP_BRAND_ID] });
    }
  };

  const togglePalette = (paletteId: string) => {
    // Remove keep-brand if they start picking palettes
    const withoutKeep = selected.filter((p) => p !== KEEP_BRAND_ID);

    if (withoutKeep.includes(paletteId)) {
      updateData({ selectedPalettes: withoutKeep.filter((p) => p !== paletteId) });
    } else if (withoutKeep.length < 3) {
      updateData({ selectedPalettes: [...withoutKeep, paletteId] });
    }
  };

  const addCustomColor = () => {
    if (customColor && !(data.customColors || []).includes(customColor)) {
      updateData({ customColors: [...(data.customColors || []), customColor] });
    }
  };

  const removeCustomColor = (color: string) => {
    updateData({ customColors: (data.customColors || []).filter((c) => c !== color) });
  };

  const palettesSelected = selected.filter((p) => p !== KEEP_BRAND_ID).length;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Colour direction
        </h2>
        <p className="text-text-muted">
          Pick up to 3 palettes that feel right for your brand, or let us know if you&apos;d like to keep your existing colours.
        </p>
      </div>

      {/* Keep brand colours option */}
      <motion.button
        type="button"
        onClick={toggleKeepBrand}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className={`w-full mb-6 p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
          keepBrand
            ? "border-primary bg-primary/5 ring-2 ring-primary/20"
            : "border-secondary hover:border-primary/30"
        }`}
      >
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          keepBrand ? "border-primary bg-primary" : "border-gray-300"
        }`}>
          {keepBrand && <Check className="w-3 h-3 text-white" />}
        </div>
        <div>
          <span className="font-medium text-primary">Keep our existing brand colours</span>
          <p className="text-sm text-text-muted mt-0.5">We&apos;re happy with our current colour scheme and want to carry it forward.</p>
        </div>
      </motion.button>

      {/* Palette grid */}
      <div className={`transition-opacity ${keepBrand ? "opacity-30 pointer-events-none" : ""}`}>
        <p className="text-sm text-text-muted mb-3">
          Or explore new directions — select up to 3 ({palettesSelected}/3 selected)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {palettes.map((palette) => {
            const isSelected = selected.includes(palette.id);
            const isDisabled = !isSelected && palettesSelected >= 3;
            return (
              <motion.button
                key={palette.id}
                type="button"
                onClick={() => !isDisabled && togglePalette(palette.id)}
                whileHover={isDisabled ? {} : { scale: 1.02 }}
                whileTap={isDisabled ? {} : { scale: 0.98 }}
                className={`rounded-xl overflow-hidden border-2 transition-all text-left ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/20"
                    : isDisabled
                    ? "border-gray-100 opacity-40 cursor-not-allowed"
                    : "border-secondary hover:border-primary/30"
                }`}
              >
                {/* Colour swatches */}
                <div className="flex h-10">
                  {palette.colors.map((color, i) => (
                    <div
                      key={i}
                      className="flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                {/* Name */}
                <div className="px-3 py-2 bg-white flex items-center justify-between">
                  <span className={`text-xs font-medium ${isSelected ? "text-primary" : "text-text-muted"}`}>
                    {palette.name}
                  </span>
                  {isSelected && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Custom colours */}
        <div className="p-5 bg-secondary/10 rounded-xl">
          <h3 className="font-semibold text-primary mb-3">Add specific colours</h3>
          <div className="flex gap-3 mb-4">
            <div className="flex items-center gap-2 flex-1">
              <input
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-12 h-12 rounded-lg cursor-pointer border-2 border-secondary"
              />
              <input
                type="text"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                placeholder="#000000"
                className="flex-1 px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none uppercase"
              />
            </div>
            <button
              type="button"
              onClick={addCustomColor}
              className="px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>

          {(data.customColors || []).length > 0 && (
            <div className="flex flex-wrap gap-2">
              {(data.customColors || []).map((color) => (
                <div
                  key={color}
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-secondary"
                >
                  <div
                    className="w-6 h-6 rounded border border-secondary"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-primary uppercase">{color}</span>
                  <button
                    type="button"
                    onClick={() => removeCustomColor(color)}
                    className="text-text-muted hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
