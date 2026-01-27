"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Sparkles, Eye } from "lucide-react";

export default function ClearBracesPage() {
  const benefits = [
    "Tooth-colored ceramic brackets",
    "Less visible than metal braces",
    "Effective for most orthodontic issues",
    "Same precise control as metal braces",
    "Comfortable and smooth",
    "Popular with adults and teens",
  ];

  const comparison = [
    { feature: "Visibility", clear: "Less visible", metal: "More visible" },
    { feature: "Durability", clear: "Very durable", metal: "Most durable" },
    { feature: "Staining", clear: "Possible with poor care", metal: "N/A" },
    { feature: "Cost", clear: "Higher", metal: "Lower" },
    { feature: "Effectiveness", clear: "Excellent", metal: "Excellent" },
  ];

  return (
    <>
      <PageHero
        title="Clear Braces"
        subtitle="Ceramic clear braces offer the effectiveness of traditional braces with a more aesthetic appearance. The tooth-colored brackets blend naturally with your teeth."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Braces", href: "/treatments/braces" },
          { label: "Clear Braces", href: "/treatments/braces/clear-braces" },
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
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">ABOUT CLEAR BRACES</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Discreet & Effective
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Clear braces use ceramic brackets that match the color of your teeth, making them far less noticeable than traditional metal braces. They work in exactly the same way as metal braces, providing excellent results.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                They're a popular choice for adults and older teens who want the reliability of fixed braces with a more subtle appearance. With proper care, clear braces can deliver beautiful results without drawing attention to your orthodontic treatment.
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#c9707d] to-[#d4919e] flex items-center justify-center shadow-2xl">
                <Sparkles className="h-40 w-40 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-[#1a4d3e]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Nearly Invisible</p>
                    <p className="text-xs text-[#1a4d3e]/60">Blends with your teeth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">COMPARISON</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Clear vs Metal Braces
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-[#1a4d3e] text-white p-4">
              <div className="font-medium">Feature</div>
              <div className="font-medium text-center">Clear Braces</div>
              <div className="font-medium text-center">Metal Braces</div>
            </div>
            {comparison.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? "bg-[#f5eeeb]" : "bg-white"}`}
              >
                <div className="text-[#1a4d3e] font-medium">{row.feature}</div>
                <div className="text-[#1a4d3e]/70 text-center">{row.clear}</div>
                <div className="text-[#1a4d3e]/70 text-center">{row.metal}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Interested in Clear Braces?"
        subtitle="Book a consultation to find out if clear braces are right for you."
        buttonText="Book Consultation"
      />
    </>
  );
}
