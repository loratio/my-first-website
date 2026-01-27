"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, XCircle, Utensils } from "lucide-react";

export default function WhatToEatPage() {
  const safeForBraces = [
    { food: "Soft fruits", examples: "Bananas, berries, grapes" },
    { food: "Cooked vegetables", examples: "Steamed carrots, mashed potatoes" },
    { food: "Soft breads", examples: "Tortillas, pancakes, muffins" },
    { food: "Dairy", examples: "Yogurt, soft cheese, milk" },
    { food: "Proteins", examples: "Eggs, tender meat, fish, tofu" },
    { food: "Grains", examples: "Pasta, rice, soft cereals" },
    { food: "Treats", examples: "Ice cream, milkshakes, soft cakes" },
  ];

  const avoidWithBraces = [
    { food: "Hard foods", examples: "Nuts, hard candy, ice, popcorn kernels" },
    { food: "Sticky foods", examples: "Caramel, toffee, taffy, gum" },
    { food: "Chewy foods", examples: "Bagels, hard rolls, licorice" },
    { food: "Crunchy foods", examples: "Chips, pretzels, hard crackers" },
    { food: "Biting into hard foods", examples: "Whole apples, corn on the cob, raw carrots" },
    { food: "Chewing objects", examples: "Pens, pencils, fingernails" },
  ];

  const invisalignTips = [
    "Remove aligners before eating anything",
    "Drink only water while wearing aligners",
    "Brush teeth before putting aligners back in",
    "No dietary restrictions - eat what you like!",
    "Avoid hot drinks that can warp aligners",
    "Rinse aligners after removal",
  ];

  return (
    <>
      <PageHero
        title="What to Eat"
        subtitle="Good nutrition is important during orthodontic treatment. Here's our guide to foods that are safe (and not so safe) to eat with braces and aligners."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
          { label: "What to Eat", href: "/for-patients/patient-resources/what-to-eat" },
        ]}
      />

      {/* Braces Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">FOR BRACES PATIENTS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Eating with Braces
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Safe Foods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#e8f5e9] rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-[#1a4d3e]" />
                <h3 className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                  Safe to Eat
                </h3>
              </div>
              <div className="space-y-4">
                {safeForBraces.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <p className="font-medium text-[#1a4d3e]">{item.food}</p>
                    <p className="text-sm text-[#1a4d3e]/60">{item.examples}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fce4ec] rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-8 w-8 text-[#c9707d]" />
                <h3 className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                  Foods to Avoid
                </h3>
              </div>
              <div className="space-y-4">
                {avoidWithBraces.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <p className="font-medium text-[#1a4d3e]">{item.food}</p>
                    <p className="text-sm text-[#1a4d3e]/60">{item.examples}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Invisalign Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">FOR INVISALIGN PATIENTS</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Eating with Aligners
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                One of the great benefits of Invisalign is that you can eat whatever you want! Simply remove your aligners before eating or drinking anything other than water.
              </p>
              <div className="space-y-4">
                {invisalignTips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{tip}</span>
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
                <Utensils className="h-40 w-40 text-white/90" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Questions About Diet During Treatment?"
        subtitle="Our team is happy to provide personalized advice for your situation."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
