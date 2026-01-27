"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Smartphone, Camera, MessageCircle, Clock } from "lucide-react";

export default function DentalMonitoringPage() {
  const benefits = [
    "Track progress from the comfort of home",
    "Weekly scans take just seconds",
    "AI-powered analysis",
    "Direct communication with your orthodontist",
    "Fewer in-office visits required",
    "Peace of mind throughout treatment",
  ];

  const howItWorks = [
    {
      icon: Smartphone,
      title: "Download the App",
      description: "Get the Dental Monitoring app on your smartphone.",
    },
    {
      icon: Camera,
      title: "Scan Weekly",
      description: "Take quick scans of your teeth using the special ScanBox.",
    },
    {
      icon: MessageCircle,
      title: "Get Feedback",
      description: "Receive personalized updates and guidance from your orthodontist.",
    },
  ];

  return (
    <>
      <PageHero
        title="Dental Monitoring"
        subtitle="Track your orthodontic treatment progress from home with our advanced AI-powered monitoring technology."
        breadcrumbs={[
          { label: "Treatments", href: "/treatments" },
          { label: "Clear Aligners", href: "/treatments/clear-aligners" },
          { label: "Dental Monitoring", href: "/treatments/clear-aligners/dental-monitoring" },
        ]}
        showCTA
        ctaText="Learn More"
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
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">REMOTE MONITORING</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                What is Dental Monitoring?
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Dental Monitoring is a revolutionary technology that allows us to track your treatment progress remotely. Using AI-powered analysis, we can monitor your teeth movement and ensure your treatment is on track.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Simply scan your teeth weekly using the app and special ScanBox. Our team reviews your progress and provides personalized feedback, all without you needing to visit the practice.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{benefit}</span>
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
                <Smartphone className="h-40 w-40 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-[#1a4d3e]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Save Time</p>
                    <p className="text-xs text-[#1a4d3e]/60">Fewer in-person visits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Simple & Effective
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#c9707d] rounded-full flex items-center justify-center mx-auto mb-5">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {step.title}
                </h3>
                <p className="text-[#1a4d3e]/70 font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Learn More?"
        subtitle="Ask us about Dental Monitoring at your next consultation."
        buttonText="Book Consultation"
      />
    </>
  );
}
