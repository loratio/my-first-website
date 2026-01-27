"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Sparkles, PoundSterling, Clock } from "lucide-react";

export default function AngelAlignerPage() {
  const benefits = [
    "Clear, virtually invisible aligners",
    "More affordable than traditional Invisalign",
    "Same high-quality results",
    "Removable for eating and cleaning",
    "Comfortable fit",
    "Predictable treatment outcomes",
  ];

  const comparison = [
    { feature: "Virtually Invisible", angel: true, traditional: false },
    { feature: "Removable", angel: true, traditional: false },
    { feature: "No Dietary Restrictions", angel: true, traditional: false },
    { feature: "Affordable Pricing", angel: true, traditional: true },
    { feature: "Effective Results", angel: true, traditional: true },
  ];

  return (
    <>
      <PageHero
        title="Angel Aligner"
        subtitle="Premium clear aligners at a more affordable price. Get the straight smile you've always wanted without breaking the bank."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Clear Aligners", href: "/treatments/clear-aligners" },
          { label: "Angel Aligner", href: "/treatments/clear-aligners/angel-aligner" },
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
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">AFFORDABLE EXCELLENCE</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                What is Angel Aligner?
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Angel Aligner is a premium clear aligner system that offers the same discreet, comfortable treatment experience as leading brands, but at a more accessible price point.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Using the latest in aligner technology, Angel Aligners are custom-made for your teeth and designed to gradually shift them into their ideal position.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{benefit}</span>
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#c9707d] to-[#d4919e] flex items-center justify-center shadow-2xl">
                <Sparkles className="h-40 w-40 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <PoundSterling className="h-8 w-8 text-[#1a4d3e]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Affordable Option</p>
                    <p className="text-xs text-[#1a4d3e]/60">Great value, great results</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHY CHOOSE ANGEL ALIGNER?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Quality Without Compromise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PoundSterling,
                title: "Affordable",
                description: "Premium clear aligner treatment at a fraction of the cost of other brands.",
              },
              {
                icon: Sparkles,
                title: "Effective",
                description: "Achieve the same beautiful results with our carefully planned treatment.",
              },
              {
                icon: Clock,
                title: "Convenient",
                description: "Fewer appointments needed, with remote monitoring options available.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d3e] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {item.title}
                </h3>
                <p className="text-[#1a4d3e]/70 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in Angel Aligner?"
        subtitle="Book a consultation to find out if Angel Aligner is the right choice for your smile."
        buttonText="Book Consultation"
      />
    </>
  );
}
