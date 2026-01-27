"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Check, X, Minus, ChevronRight } from "lucide-react";

export default function CompareTreatmentsPage() {
  const treatments = [
    {
      name: "Invisalign",
      visibility: "Nearly invisible",
      removable: true,
      comfort: "Very comfortable",
      diet: "No restrictions",
      cleaning: "Easy - remove to brush",
      appointments: "Fewer visits",
      suitability: "Mild to moderate cases",
      price: "£££",
    },
    {
      name: "Angel Aligner",
      visibility: "Nearly invisible",
      removable: true,
      comfort: "Very comfortable",
      diet: "No restrictions",
      cleaning: "Easy - remove to brush",
      appointments: "Fewer visits",
      suitability: "Mild to moderate cases",
      price: "££",
    },
    {
      name: "Clear Braces",
      visibility: "Discreet",
      removable: false,
      comfort: "Comfortable",
      diet: "Some restrictions",
      cleaning: "More careful brushing",
      appointments: "Regular visits",
      suitability: "Most cases",
      price: "£££",
    },
    {
      name: "Metal Braces",
      visibility: "Visible",
      removable: false,
      comfort: "Comfortable",
      diet: "Some restrictions",
      cleaning: "More careful brushing",
      appointments: "Regular visits",
      suitability: "All cases",
      price: "££",
    },
  ];

  const features = [
    { key: "visibility", label: "Visibility" },
    { key: "removable", label: "Removable" },
    { key: "comfort", label: "Comfort" },
    { key: "diet", label: "Diet" },
    { key: "cleaning", label: "Cleaning" },
    { key: "appointments", label: "Appointments" },
    { key: "suitability", label: "Suitability" },
    { key: "price", label: "Price Range" },
  ];

  return (
    <>
      <PageHero
        title="Compare Treatments"
        subtitle="Not sure which treatment is right for you? Compare the key features of our treatment options to help you make an informed decision."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
          { label: "Compare Treatments", href: "/for-patients/about-orthodontics/compare-treatments" },
        ]}
      />

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-[#f5eeeb] rounded-tl-xl">Feature</th>
                  {treatments.map((treatment, index) => (
                    <th
                      key={index}
                      className={`p-4 bg-[#f5eeeb] text-[#1a4d3e] font-[family-name:var(--font-cormorant)] text-lg ${
                        index === treatments.length - 1 ? "rounded-tr-xl" : ""
                      }`}
                    >
                      {treatment.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fIndex) => (
                  <tr key={fIndex} className={fIndex % 2 === 0 ? "bg-white" : "bg-[#f5eeeb]/50"}>
                    <td className="p-4 font-medium text-[#1a4d3e]">{feature.label}</td>
                    {treatments.map((treatment, tIndex) => {
                      const value = treatment[feature.key as keyof typeof treatment];
                      return (
                        <td key={tIndex} className="p-4 text-center text-[#1a4d3e]/70">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-5 w-5 text-[#1a4d3e] mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-[#c9707d] mx-auto" />
                            )
                          ) : (
                            value
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">SUMMARY</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Which Treatment is Right for You?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Choose Clear Aligners If...",
                points: [
                  "Appearance during treatment is important",
                  "You want to remove your appliance to eat",
                  "You have mild to moderate alignment issues",
                  "You can commit to wearing aligners 22 hours a day",
                ],
              },
              {
                title: "Choose Braces If...",
                points: [
                  "You have complex orthodontic issues",
                  "You prefer a fixed appliance you can't lose",
                  "You want a more affordable option",
                  "You're looking for proven, reliable results",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-4 font-[family-name:var(--font-cormorant)]">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#c9707d] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1a4d3e]/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#1a4d3e]/70 mb-6">
              Still not sure? Our orthodontist will recommend the best treatment for your specific needs.
            </p>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-[#c9707d] font-medium hover:text-[#b85c69] transition-colors"
            >
              View All Treatments
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Get Personalized Advice"
        subtitle="Book a consultation and we'll recommend the best treatment option for your unique needs."
        buttonText="Book Consultation"
      />
    </>
  );
}
