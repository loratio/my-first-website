"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { Smile, Shield, Sparkles, Smartphone } from "lucide-react";

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

export default function TreatmentsPage() {
  const clearAligners = [
    {
      title: "Invisalign",
      description: "The world's leading clear aligner system for a virtually invisible treatment experience.",
      href: "/treatments/clear-aligners/invisalign",
      icon: Smile,
    },
    {
      title: "Angel Aligner",
      description: "Premium clear aligners offering excellent results at a more affordable price point.",
      href: "/treatments/clear-aligners/angel-aligner",
      icon: Sparkles,
    },
    {
      title: "Dental Monitoring",
      description: "Track your treatment progress from home with our advanced monitoring technology.",
      href: "/treatments/clear-aligners/dental-monitoring",
      icon: Smartphone,
    },
  ];

  const braces = [
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

  return (
    <>
      <PageHero
        title="Our Treatments"
        subtitle="We offer a comprehensive range of orthodontic treatments to suit every lifestyle and budget. From clear aligners to traditional braces, we'll find the perfect solution for your smile."
        breadcrumbs={[{ label: "Treatments", href: "/treatments" }]}
      />

      {/* Clear Aligners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p variants={fadeInUp} className="text-[#c9707d] font-medium mb-3 tracking-wide">
              CLEAR ALIGNERS
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]"
            >
              Invisible Treatment Options
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl font-light">
              Straighten your teeth discreetly with our range of clear aligner solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {clearAligners.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={service.icon}
                  featured={index === 0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Braces Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p variants={fadeInUp} className="text-[#c9707d] font-medium mb-3 tracking-wide">
              BRACES
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]"
            >
              Traditional & Modern Braces
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl font-light">
              Fixed braces remain one of the most effective ways to achieve a perfect smile.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-3xl"
          >
            {braces.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Treatment Is Right For You?"
        subtitle="Book a free consultation and we'll help you find the perfect treatment plan for your smile goals and lifestyle."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
