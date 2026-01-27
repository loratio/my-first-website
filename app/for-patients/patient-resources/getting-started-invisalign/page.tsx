"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Clock, Smartphone, Droplets } from "lucide-react";

export default function GettingStartedInvisalignPage() {
  const steps = [
    {
      title: "Wear Your Aligners",
      description: "Wear your aligners for 22 hours a day, only removing them to eat, drink (anything other than water), and brush your teeth.",
    },
    {
      title: "Change Regularly",
      description: "Change to your next set of aligners as directed, usually every 1-2 weeks.",
    },
    {
      title: "Keep Them Clean",
      description: "Rinse your aligners every time you remove them and clean them with a soft toothbrush daily.",
    },
    {
      title: "Store Safely",
      description: "Always store your aligners in their case when not wearing them to prevent loss or damage.",
    },
  ];

  const tips = [
    "Put aligners in after meals to maximize wear time",
    "Carry your case with you at all times",
    "Brush teeth before reinserting aligners",
    "Keep previous aligners as a backup",
    "Use chewies to seat aligners properly",
    "Set reminders to change aligners",
  ];

  return (
    <>
      <PageHero
        title="Getting Started with Invisalign"
        subtitle="Congratulations on starting your Invisalign journey! Here's everything you need to know to get the best results from your treatment."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
          { label: "Getting Started - Invisalign", href: "/for-patients/patient-resources/getting-started-invisalign" },
        ]}
      />

      {/* Key Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">THE BASICS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              How to Wear Your Aligners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#c9707d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {step.title}
                </h3>
                <p className="text-[#1a4d3e]/70 text-sm font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <Clock className="h-12 w-12 mx-auto text-[#1a4d3e] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                22 Hours a Day
              </h3>
              <p className="text-[#1a4d3e]/70 font-light">
                For best results, wear your aligners at least 22 hours every day. Less wear time can extend your treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <Smartphone className="h-12 w-12 mx-auto text-[#1a4d3e] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                Use the App
              </h3>
              <p className="text-[#1a4d3e]/70 font-light">
                Download the MyInvisalign app to track your progress, set reminders, and stay on track with your treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <Droplets className="h-12 w-12 mx-auto text-[#1a4d3e] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                Water Only
              </h3>
              <p className="text-[#1a4d3e]/70 font-light">
                Only drink water while wearing your aligners. Hot drinks and sugary/acidic drinks can damage them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">TIPS</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                Top Tips for Success
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-[#f5eeeb] rounded-xl p-4"
                >
                  <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                  <span className="text-[#1a4d3e]/80">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Questions About Your Treatment?"
        subtitle="Get in touch with our team - we're here to help you every step of the way."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
