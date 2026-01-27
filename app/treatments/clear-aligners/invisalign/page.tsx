"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Smile, Clock, Shield, Star } from "lucide-react";

export default function InvisalignPage() {
  const benefits = [
    "Virtually invisible clear aligners",
    "Removable for eating, drinking, and brushing",
    "No metal brackets or wires",
    "Smooth, comfortable plastic",
    "Fewer dental visits required",
    "See your results before you start with 3D planning",
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We'll assess your smile and discuss if Invisalign is right for you.",
    },
    {
      step: "2",
      title: "3D Scanning",
      description: "Digital impressions create your custom treatment plan.",
    },
    {
      step: "3",
      title: "Custom Aligners",
      description: "Receive your series of custom-made clear aligners.",
    },
    {
      step: "4",
      title: "Wear & Change",
      description: "Wear aligners 22 hours a day, changing every 1-2 weeks.",
    },
    {
      step: "5",
      title: "Beautiful Smile",
      description: "Complete treatment and enjoy your new smile!",
    },
  ];

  return (
    <>
      <PageHero
        title="Invisalign"
        subtitle="The world's most advanced clear aligner system. Straighten your teeth virtually invisibly with custom-made aligners designed just for you."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Clear Aligners", href: "/treatments/clear-aligners" },
          { label: "Invisalign", href: "/treatments/clear-aligners/invisalign" },
        ]}
        showCTA
        ctaText="Free Invisalign Assessment"
        ctaHref="/book-consultation/free-invisalign-assessment"
      />

      {/* What is Invisalign */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">ABOUT INVISALIGN</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                What is Invisalign?
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Invisalign is the world's leading clear aligner system, trusted by over 14 million people worldwide. Using advanced 3D computer imaging technology, we create a complete treatment plan from the initial position of your teeth to the final desired position.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Each set of custom aligners is worn for about 1-2 weeks, gently moving your teeth little by little until they reach their final position.
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] flex items-center justify-center shadow-2xl">
                <Smile className="h-40 w-40 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-[#1a4d3e]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Diamond Provider</p>
                    <p className="text-xs text-[#1a4d3e]/60">Top 1% of Invisalign providers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">THE PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Your Invisalign Journey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#c9707d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {item.title}
                </h3>
                <p className="text-[#1a4d3e]/70 text-sm font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "14M+", label: "Patients Worldwide" },
              { value: "25+", label: "Years of Innovation" },
              { value: "99%", label: "Patient Satisfaction" },
              { value: "6-18", label: "Months Average Treatment" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                  {stat.value}
                </p>
                <p className="text-[#1a4d3e]/60 font-light mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Your Invisalign Journey Today"
        subtitle="Book your free Invisalign assessment and see how clear aligners can transform your smile."
        buttonText="Free Assessment"
        buttonHref="/book-consultation/free-invisalign-assessment"
      />
    </>
  );
}
