"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { Shield, Sparkles, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BracesPage() {
  const treatments = [
    {
      title: "Metal Braces",
      description: "Traditional metal braces that deliver reliable, precise results for all complexity levels.",
      href: "/treatments/braces/metal-braces",
      icon: Shield,
    },
    {
      title: "Clear Braces",
      description: "Ceramic brackets that blend with your teeth for a more discreet braces experience.",
      href: "/treatments/braces/clear-braces",
      icon: Sparkles,
    },
  ];

  const benefits = [
    "Effective for all types of orthodontic issues",
    "Precise control over tooth movement",
    "Suitable for children, teens, and adults",
    "Durable and reliable",
    "More affordable option",
    "Can treat complex cases",
  ];

  return (
    <>
      <PageHero
        title="Braces"
        subtitle="Fixed braces remain one of the most effective and versatile orthodontic treatments available. We offer both metal and clear options to suit your preferences."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Braces", href: "/treatments/braces" },
        ]}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHY BRACES?</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Proven & Effective Treatment
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Braces have been straightening smiles for over 100 years, and for good reason. They offer unparalleled precision and can treat even the most complex orthodontic cases. Modern braces are smaller, more comfortable, and more effective than ever before.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-[#c9707d] font-medium mb-3 tracking-wide">
              OUR OPTIONS
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]"
            >
              Choose Your Style
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl mx-auto font-light">
              Whether you prefer traditional metal or more discreet ceramic brackets, we have the right option for you.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {treatments.map((treatment, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard
                  title={treatment.title}
                  description={treatment.description}
                  href={treatment.href}
                  icon={treatment.icon}
                  featured={index === 0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Book a consultation to discuss which type of braces is right for you."
        buttonText="Book Consultation"
      />
    </>
  );
}
