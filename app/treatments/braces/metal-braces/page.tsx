"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Shield, Clock, Award } from "lucide-react";

export default function MetalBracesPage() {
  const benefits = [
    "Most effective for complex cases",
    "Precise control over tooth movement",
    "Durable and long-lasting",
    "More affordable than other options",
    "Suitable for all ages",
    "Can correct any orthodontic issue",
  ];

  const whatToExpect = [
    {
      title: "Initial Appointment",
      description: "We'll fit your braces and give you all the information you need to care for them.",
    },
    {
      title: "Regular Adjustments",
      description: "Visit us every 4-8 weeks for adjustments to keep your treatment on track.",
    },
    {
      title: "Treatment Duration",
      description: "Most treatments take 12-24 months, depending on the complexity of your case.",
    },
    {
      title: "Aftercare",
      description: "Retainers will be provided to maintain your beautiful new smile.",
    },
  ];

  return (
    <>
      <PageHero
        title="Metal Braces"
        subtitle="Traditional metal braces are the most tried-and-tested orthodontic treatment. Modern metal braces are smaller, more comfortable, and more efficient than ever."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Braces", href: "/treatments/braces" },
          { label: "Metal Braces", href: "/treatments/braces/metal-braces" },
        ]}
        showCTA
        ctaText="Book Consultation"
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">ABOUT METAL BRACES</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                The Gold Standard
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Metal braces have been helping people achieve beautiful smiles for over a century. They consist of high-grade stainless steel brackets bonded to your teeth, connected by a thin archwire that guides teeth into their ideal positions.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Today's metal braces are significantly smaller and more comfortable than those of the past. Many patients, especially children and teens, enjoy personalizing their braces with colorful elastic bands.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1a4d3e]/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] flex items-center justify-center shadow-2xl">
                <Shield className="h-40 w-40 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#c9707d]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Time-Tested</p>
                    <p className="text-xs text-[#1a4d3e]/60">100+ years of success</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">YOUR JOURNEY</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              What to Expect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-[#c9707d] rounded-full flex items-center justify-center mb-4 text-white font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {item.title}
                </h3>
                <p className="text-[#1a4d3e]/70 text-sm font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in Metal Braces?"
        subtitle="Book a consultation to find out if metal braces are right for you."
        buttonText="Book Consultation"
      />
    </>
  );
}
