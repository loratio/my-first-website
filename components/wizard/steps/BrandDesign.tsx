"use client";

import { WizardData } from "../WizardContainer";
import FormField, { TextArea, Slider, CheckboxGroupWithMax } from "../ui/FormField";

interface BrandDesignProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

const toneOptions = [
  { value: "warm-reassuring", label: "Warm & reassuring" },
  { value: "professional-expert", label: "Professional & expert-led" },
  { value: "modern-friendly", label: "Modern & friendly" },
  { value: "calm-premium", label: "Calm & premium" },
  { value: "straight-talking", label: "Straight-talking & practical" },
  { value: "family-focused", label: "Family-focused" },
  { value: "motivating-upbeat", label: "Motivating & upbeat" },
  { value: "lightly-witty", label: "Lightly witty (subtle)" },
];

export default function BrandDesign({ data, updateData }: BrandDesignProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Content style &amp; tone of voice
        </h2>
        <p className="text-text-muted">
          Help us understand how your website should sound.
        </p>
      </div>

      <div className="space-y-6">
        <FormField label="Content reading style preference" required>
          <Slider
            value={data.contentStyle}
            onChange={(value) => updateData({ contentStyle: value })}
            min={1}
            max={10}
            leftLabel="Simplistic & succinct"
            rightLabel="Technical & descriptive"
          />
        </FormField>

        <FormField label="Tone of voice" required helperText="Select up to 3 that best describe how your website should sound">
          <CheckboxGroupWithMax
            options={toneOptions}
            selected={data.toneOfVoice}
            onChange={(value) => updateData({ toneOfVoice: value })}
            maxSelections={3}
          />
        </FormField>

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
