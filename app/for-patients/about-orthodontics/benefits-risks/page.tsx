"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, AlertTriangle } from "lucide-react";

export default function BenefitsRisksPage() {
  const benefits = [
    {
      title: "Improved Oral Health",
      description: "Straight teeth are easier to clean, reducing the risk of decay and gum disease.",
    },
    {
      title: "Better Bite Function",
      description: "Correcting your bite helps with chewing, speaking, and reduces jaw strain.",
    },
    {
      title: "Enhanced Appearance",
      description: "A beautiful smile boosts confidence and makes a great first impression.",
    },
    {
      title: "Long-Term Health",
      description: "Properly aligned teeth distribute bite forces evenly, protecting against wear.",
    },
    {
      title: "Improved Self-Esteem",
      description: "Many patients report feeling more confident after orthodontic treatment.",
    },
    {
      title: "Prevention of Problems",
      description: "Early treatment can prevent more serious issues from developing later.",
    },
  ];

  const risks = [
    {
      title: "Tooth Decay",
      description: "If teeth aren't cleaned properly around braces, decay can occur. Good oral hygiene is essential.",
      mitigation: "Follow brushing instructions carefully and attend regular dental check-ups.",
    },
    {
      title: "Root Resorption",
      description: "In some cases, tooth roots may shorten slightly during treatment. This is usually minimal.",
      mitigation: "We monitor for this with regular X-rays and adjust treatment if needed.",
    },
    {
      title: "Gum Problems",
      description: "Poor cleaning can lead to gum inflammation (gingivitis) during treatment.",
      mitigation: "Maintain excellent oral hygiene and use recommended cleaning tools.",
    },
    {
      title: "Discomfort",
      description: "Some discomfort is normal after adjustments, typically lasting a few days.",
      mitigation: "Over-the-counter pain relief and wax for braces can help.",
    },
    {
      title: "Relapse",
      description: "Teeth may shift back toward their original position without proper retention.",
      mitigation: "Wear your retainers as instructed after treatment ends.",
    },
  ];

  return (
    <>
      <PageHero
        title="Benefits & Risks"
        subtitle="Like any medical treatment, orthodontics has benefits and potential risks. Understanding both helps you make an informed decision about your care."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
          { label: "Benefits & Risks", href: "/for-patients/about-orthodontics/benefits-risks" },
        ]}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">THE BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Why Get Orthodontic Treatment?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#1a4d3e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[#1a4d3e]/70 text-sm font-light">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">POTENTIAL RISKS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Understanding the Risks
            </h2>
            <p className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl mx-auto font-light">
              While serious complications are rare, it's important to be aware of potential risks and how to minimize them.
            </p>
          </motion.div>

          <div className="space-y-6">
            {risks.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-[#c9707d] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                      {risk.title}
                    </h3>
                    <p className="text-[#1a4d3e]/70 mb-3 font-light">{risk.description}</p>
                    <div className="bg-[#1a4d3e]/5 rounded-lg p-3">
                      <p className="text-sm text-[#1a4d3e]">
                        <strong>How we minimize this:</strong> {risk.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Questions?"
        subtitle="We're here to answer any questions about the benefits and risks of orthodontic treatment."
        buttonText="Book Consultation"
      />
    </>
  );
}
