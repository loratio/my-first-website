"use client";

import { motion } from "framer-motion";
import {
  Check,
  Play,
  Users,
  MapPin,
  Target,
  Monitor,
  Heart,
  Eye,
  Paintbrush,
  LayoutGrid,
  SlidersHorizontal,
  Palette,
  Type,
  Image,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Play,
  Users,
  MapPin,
  Target,
  Monitor,
  Heart,
  Eye,
  Paintbrush,
  Layout: LayoutGrid,
  Sliders: SlidersHorizontal,
  Palette,
  Type,
  Image,
  FileText,
  ClipboardCheck,
};

interface Step {
  id: number;
  title: string;
  icon: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export default function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="relative">
      {/* Progress bar background */}
      <div className="absolute top-5 left-[4%] right-[4%] h-0.5 bg-gray-200" />

      {/* Active progress bar */}
      <motion.div
        className="absolute top-5 left-[4%] h-0.5 bg-primary"
        style={{ width: `calc(${((currentStep - 1) / (steps.length - 1)) * 92}%)` }}
        initial={false}
        animate={{ width: `calc(${((currentStep - 1) / (steps.length - 1)) * 92}%)` }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex justify-between relative">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isClickable = step.id <= currentStep;
          const Icon = iconMap[step.icon];

          return (
            <button
              key={step.id}
              onClick={() => isClickable && onStepClick(step.id)}
              disabled={!isClickable}
              className={`flex flex-col items-center group ${
                isClickable ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              title={step.title}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.15 : 1,
                  backgroundColor: isCompleted
                    ? "#192845"
                    : isCurrent
                    ? "#192845"
                    : "#bce1eb",
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors ${
                  isCompleted || isCurrent ? "text-white" : "text-[#192845]/40"
                } ${isClickable && !isCurrent ? "group-hover:ring-4 group-hover:ring-primary/20" : ""}`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : Icon ? (
                  <Icon className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </motion.div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
