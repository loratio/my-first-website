"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WizardData } from "../WizardContainer";
import FormField, { TextArea } from "../ui/FormField";

interface BrandDesignProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

interface ContentStyle {
  id: string;
  name: string;
  example: string;
}

const contentStyles: ContentStyle[] = [
  {
    id: "short-simple",
    name: "Short & simple",
    example: "Invisalign straightens teeth using clear, removable aligners. No metal brackets. No wires. Just a confident smile.",
  },
  {
    id: "warm-conversational",
    name: "Warm & conversational",
    example: "Thinking about Invisalign? It\u2019s one of the most popular ways to straighten your teeth \u2014 and the best bit? Most people won\u2019t even notice you\u2019re wearing them.",
  },
  {
    id: "detailed-informative",
    name: "Detailed & informative",
    example: "Invisalign uses a series of custom-made, removable clear aligners to gradually reposition your teeth. Each set is worn for around two weeks before moving to the next, with most treatment plans completing within 12\u201318 months.",
  },
  {
    id: "premium-polished",
    name: "Premium & polished",
    example: "Invisalign represents the gold standard in discreet orthodontics. Precision-engineered aligners, crafted from SmartTrack material, deliver predictable results with uncompromising aesthetics.",
  },
];

interface ToneOption {
  value: string;
  label: string;
  example: string;
}

const toneOptions: ToneOption[] = [
  {
    value: "warm-reassuring",
    label: "Warm & reassuring",
    example: "\u201CWe\u2019re here to look after you every step of the way.\u201D",
  },
  {
    value: "professional-expert",
    label: "Professional & expert-led",
    example: "\u201COur specialist team delivers evidence-based treatment plans.\u201D",
  },
  {
    value: "modern-friendly",
    label: "Modern & friendly",
    example: "\u201CHey, let\u2019s get your smile sorted \u2014 it\u2019s easier than you think.\u201D",
  },
  {
    value: "calm-premium",
    label: "Calm & premium",
    example: "\u201CA refined experience designed around your comfort.\u201D",
  },
  {
    value: "straight-talking",
    label: "Straight-talking & practical",
    example: "\u201CNo jargon, no fuss \u2014 just honest advice and clear pricing.\u201D",
  },
  {
    value: "family-focused",
    label: "Family-focused",
    example: "\u201CBringing smiles to kids, teens and parents since 2005.\u201D",
  },
  {
    value: "motivating-upbeat",
    label: "Motivating & upbeat",
    example: "\u201CYour dream smile is closer than you think \u2014 let\u2019s make it happen!\u201D",
  },
  {
    value: "lightly-witty",
    label: "Lightly witty",
    example: "\u201CStraighter teeth, zero drama. We keep things aligned in every sense.\u201D",
  },
];

export default function BrandDesign({ data, updateData }: BrandDesignProps) {
  const selectedStyle = data.contentStyleChoice || "";
  const selectedTones = data.toneOfVoice || [];

  const toggleTone = (value: string) => {
    if (selectedTones.includes(value)) {
      updateData({ toneOfVoice: selectedTones.filter((t) => t !== value) });
    } else if (selectedTones.length < 3) {
      updateData({ toneOfVoice: [...selectedTones, value] });
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Content style &amp; tone of voice
        </h2>
        <p className="text-text-muted">
          Help us understand how your website should sound. This directly shapes how we write your content.
        </p>
      </div>

      <div className="space-y-8">
        {/* Content style — pick the paragraph */}
        <div>
          <p className="text-sm font-medium text-primary mb-1">
            Which writing style feels most like your practice?
            <span className="text-red-500 ml-1">*</span>
          </p>
          <p className="text-sm text-text-muted mb-4">
            Each example describes the same treatment — pick the one that sounds most like you.
          </p>

          <div className="space-y-3">
            {contentStyles.map((style) => {
              const isSelected = selectedStyle === style.id;
              return (
                <motion.button
                  key={style.id}
                  type="button"
                  onClick={() => updateData({ contentStyleChoice: style.id })}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-secondary hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected ? "border-primary bg-primary" : "border-gray-300"
                    }`}>
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">{style.name}</span>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed italic">
                        &ldquo;{style.example}&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Tone of voice — with examples */}
        <div>
          <p className="text-sm font-medium text-primary mb-1">
            Tone of voice
            <span className="text-red-500 ml-1">*</span>
          </p>
          <p className="text-sm text-text-muted mb-4">
            Select up to 3 that best describe how your website should sound.
            ({selectedTones.length}/3 selected)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {toneOptions.map((option) => {
              const isSelected = selectedTones.includes(option.value);
              const isDisabled = !isSelected && selectedTones.length >= 3;
              return (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => !isDisabled && toggleTone(option.value)}
                  whileHover={isDisabled ? {} : { scale: 1.005 }}
                  whileTap={isDisabled ? {} : { scale: 0.995 }}
                  className={`text-left p-3.5 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : isDisabled
                      ? "border-gray-100 opacity-40 cursor-not-allowed"
                      : "border-secondary hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected ? "border-primary bg-primary" : "border-gray-300"
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${isSelected ? "text-primary" : "text-primary/70"}`}>
                        {option.label}
                      </span>
                      <p className="text-xs text-text-muted mt-0.5 italic">{option.example}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Words to avoid */}
        <FormField label="Any words/phrases/topics to avoid?">
          <TextArea
            value={data.wordsToAvoid}
            onChange={(value) => updateData({ wordsToAvoid: value })}
            placeholder="e.g. Avoid using 'cheap', 'discount', or overly clinical language. Don't mention competitor names..."
            rows={3}
          />
        </FormField>
      </div>
    </div>
  );
}
