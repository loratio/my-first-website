"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Smile, ArrowRight } from "lucide-react";

export default function BeforeAftersPage() {
  const cases = [
    {
      treatment: "Invisalign",
      duration: "14 months",
      issue: "Crowding & Spacing",
      description: "This patient had moderate crowding on the upper arch and spacing on the lower. Invisalign achieved beautiful alignment.",
    },
    {
      treatment: "Metal Braces",
      duration: "18 months",
      issue: "Severe Crowding",
      description: "A complex case requiring extraction and comprehensive treatment with traditional braces for optimal results.",
    },
    {
      treatment: "Clear Braces",
      duration: "16 months",
      issue: "Overbite Correction",
      description: "Clear braces were used to correct a significant overbite while maintaining aesthetic appearance during treatment.",
    },
    {
      treatment: "Invisalign",
      duration: "10 months",
      issue: "Mild Crowding",
      description: "A shorter treatment for mild crowding, achieving a perfectly aligned smile with Invisalign Lite.",
    },
    {
      treatment: "Metal Braces",
      duration: "20 months",
      issue: "Underbite & Crossbite",
      description: "Comprehensive treatment to correct both underbite and crossbite issues in this challenging case.",
    },
    {
      treatment: "Angel Aligner",
      duration: "12 months",
      issue: "Spacing Issues",
      description: "Angel Aligner was the perfect affordable solution to close gaps and create a harmonious smile.",
    },
  ];

  return (
    <>
      <PageHero
        title="Before & Afters"
        subtitle="See the incredible transformations our patients have achieved. Each smile journey is unique, and we're proud to showcase these amazing results."
        breadcrumbs={[
          { label: "Success Stories", href: "/success-stories" },
          { label: "Before & Afters", href: "/success-stories/before-afters" },
        ]}
      />

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">TRANSFORMATIONS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Real Results, Real Patients
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl overflow-hidden"
              >
                {/* Placeholder for before/after images */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-gradient-to-br from-[#1a4d3e]/20 to-[#1a4d3e]/30 flex items-center justify-center">
                      <div className="text-center">
                        <Smile className="h-12 w-12 mx-auto text-[#1a4d3e]/40" />
                        <p className="text-xs text-[#1a4d3e]/60 mt-2">Before</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#c9707d]/20 to-[#c9707d]/30 flex items-center justify-center">
                      <div className="text-center">
                        <Smile className="h-12 w-12 mx-auto text-[#c9707d]/60" />
                        <p className="text-xs text-[#c9707d]/80 mt-2">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="h-4 w-4 text-[#1a4d3e]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#1a4d3e] text-white text-xs px-3 py-1 rounded-full">
                      {caseStudy.treatment}
                    </span>
                    <span className="text-[#1a4d3e]/60 text-sm">{caseStudy.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                    {caseStudy.issue}
                  </h3>
                  <p className="text-[#1a4d3e]/70 text-sm font-light">{caseStudy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-[#f5eeeb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1a4d3e]/70 font-light">
            <strong className="text-[#1a4d3e]">Please note:</strong> Every patient is unique, and results may vary. These cases represent a range of treatments and outcomes. Your orthodontist will discuss realistic expectations during your consultation.
          </p>
        </div>
      </section>

      <CTABanner
        title="Want Results Like These?"
        subtitle="Book a free consultation and start your smile transformation journey today."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
