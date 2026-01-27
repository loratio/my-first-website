"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, AlertCircle, Sparkles } from "lucide-react";

export default function GettingStartedBracesPage() {
  const firstWeek = [
    "Some discomfort is normal - it means your braces are working!",
    "Use orthodontic wax on any areas causing irritation",
    "Stick to soft foods for the first few days",
    "Take over-the-counter pain relief if needed",
    "Rinse with warm salt water to soothe your gums",
  ];

  const brushingSteps = [
    "Brush after every meal and before bed",
    "Use a soft-bristled brush at a 45-degree angle",
    "Brush above and below the brackets",
    "Use interdental brushes to clean between brackets",
    "Floss daily using a floss threader or water flosser",
    "Use fluoride mouthwash for extra protection",
  ];

  const tips = [
    "Attend all scheduled appointments",
    "Call us if a bracket comes loose",
    "Wear your rubber bands as instructed",
    "Avoid sticky, hard, and chewy foods",
    "Protect your braces during sports",
    "Keep wax handy for emergencies",
  ];

  return (
    <>
      <PageHero
        title="Getting Started with Braces"
        subtitle="Congratulations on starting your journey to a beautiful smile! Here's everything you need to know about life with braces."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
          { label: "Getting Started - Braces", href: "/for-patients/patient-resources/getting-started-braces" },
        ]}
      />

      {/* First Week */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">THE FIRST WEEK</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                What to Expect
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Your first few days with braces may feel strange as your mouth adjusts. Here's what you can expect and how to manage:
              </p>
              <div className="space-y-4">
                {firstWeek.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1a4d3e]/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5eeeb] rounded-2xl p-8"
            >
              <Sparkles className="h-12 w-12 text-[#1a4d3e] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                Remember
              </h3>
              <p className="text-[#1a4d3e]/70 font-light">
                The initial discomfort is temporary and usually improves within a week. Each adjustment appointment may cause some tenderness for a day or two, but this is normal and means your treatment is progressing!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cleaning */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">ORAL HYGIENE</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              How to Clean Your Braces
            </h2>
            <p className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl mx-auto font-light">
              Keeping your teeth and braces clean is essential for a healthy smile during treatment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brushingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-[#c9707d] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-[#1a4d3e]/80">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">TIPS</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                Top Tips for Success
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#f5eeeb] rounded-xl p-4"
                >
                  <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                  <span className="text-[#1a4d3e]/80">{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Questions About Your Braces?"
        subtitle="Our team is always here to help. Get in touch anytime."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
