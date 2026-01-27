"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { Smile, Sparkles, Smartphone, CheckCircle } from "lucide-react";

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

export default function ClearAlignersPage() {
  const treatments = [
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

  const benefits = [
    "Virtually invisible when worn",
    "Removable for eating and cleaning",
    "No dietary restrictions",
    "Fewer appointments needed",
    "Comfortable to wear",
    "Predictable results with 3D planning",
  ];

  return (
    <>
      <PageHero
        title="Clear Aligners"
        subtitle="Discover the freedom of straightening your teeth without traditional braces. Our clear aligner options offer discreet, comfortable, and effective treatment."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Clear Aligners", href: "/treatments/clear-aligners" },
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
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHY CLEAR ALIGNERS?</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                The Modern Way to Straighten Teeth
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Clear aligners have revolutionized orthodontic treatment, offering a nearly invisible way to achieve your dream smile. Made from smooth, BPA-free plastic, they're custom-made to fit your teeth perfectly.
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
                <Smile className="h-40 w-40 text-white/90" />
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
              Clear Aligner Treatments
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
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
        title="Ready for Your Clear Aligner Journey?"
        subtitle="Book a free Invisalign assessment to see if clear aligners are right for you."
        buttonText="Free Invisalign Assessment"
        buttonHref="/book-consultation/free-invisalign-assessment"
      />
    </>
  );
}
