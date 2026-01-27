"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, AlertCircle, Baby } from "lucide-react";

export default function EarlyTreatmentPage() {
  const signs = [
    "Early or late loss of baby teeth",
    "Difficulty chewing or biting",
    "Mouth breathing",
    "Thumb or finger sucking after age 5",
    "Crowded, misplaced, or blocked teeth",
    "Jaws that shift or make sounds",
    "Biting the cheek or roof of mouth",
    "Teeth that don't meet normally",
  ];

  const benefits = [
    "Guide jaw growth for a better bite",
    "Create space for permanent teeth",
    "Reduce risk of trauma to protruding teeth",
    "Correct harmful habits early",
    "Improve appearance and self-esteem",
    "Simplify or reduce later treatment",
    "Improve the way lips meet",
    "Guide permanent teeth into better positions",
  ];

  return (
    <>
      <PageHero
        title="Early Treatment"
        subtitle="The British Orthodontic Society recommends children have an orthodontic evaluation by age 7. Early intervention can guide jaw growth and prevent more serious problems."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
          { label: "Early Treatment", href: "/for-patients/about-orthodontics/early-treatment" },
        ]}
      />

      {/* Why Age 7 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHY AGE 7?</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                The Right Time for Assessment
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                By age 7, most children have a mix of baby and adult teeth, which allows an orthodontist to identify potential problems with jaw growth and emerging teeth.
              </p>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Early detection doesn't always mean early treatment. Many children will simply be monitored until the right time for treatment. However, some problems benefit significantly from early intervention.
              </p>
              <p className="text-[#1a4d3e]/70 leading-relaxed font-light text-lg">
                Interceptive treatment (Phase 1) can take advantage of a child's growth to correct jaw discrepancies and create space for permanent teeth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#c9707d] to-[#d4919e] flex items-center justify-center shadow-2xl">
                <Baby className="h-40 w-40 text-white/90" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-[#c9707d]" />
                <h2 className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                  Signs to Watch For
                </h2>
              </div>
              <div className="space-y-3">
                {signs.map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <div className="w-2 h-2 bg-[#c9707d] rounded-full flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{sign}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-[#1a4d3e]" />
                <h2 className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                  Benefits of Early Treatment
                </h2>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <CheckCircle className="h-4 w-4 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Schedule Your Child's Assessment"
        subtitle="An early evaluation provides peace of mind and can help prevent problems before they develop."
        buttonText="Book Child's Assessment"
      />
    </>
  );
}
