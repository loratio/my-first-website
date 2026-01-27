"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { ChevronRight, Smile, Shield, Utensils, AlertCircle, Lock, Gift } from "lucide-react";

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

export default function PatientResourcesPage() {
  const resources = [
    {
      title: "Getting Started - Invisalign",
      description: "Everything you need to know about starting your Invisalign treatment journey.",
      href: "/for-patients/patient-resources/getting-started-invisalign",
      icon: Smile,
    },
    {
      title: "Getting Started - Braces",
      description: "A complete guide to beginning your treatment with fixed braces.",
      href: "/for-patients/patient-resources/getting-started-braces",
      icon: Shield,
    },
    {
      title: "What to Eat",
      description: "Food guidelines and tips for eating with braces or aligners.",
      href: "/for-patients/patient-resources/what-to-eat",
      icon: Utensils,
    },
    {
      title: "Emergency Care",
      description: "What to do if you have a problem with your braces or aligners.",
      href: "/for-patients/patient-resources/emergency-care",
      icon: AlertCircle,
    },
    {
      title: "Retention",
      description: "Why retainers are important and how to care for them.",
      href: "/for-patients/patient-resources/retention",
      icon: Lock,
    },
    {
      title: "Refer a Friend",
      description: "Share the gift of a beautiful smile and earn rewards.",
      href: "/for-patients/patient-resources/refer-a-friend",
      icon: Gift,
    },
  ];

  return (
    <>
      <PageHero
        title="Patient Resources"
        subtitle="Everything you need to know about your orthodontic treatment, from getting started to maintaining your beautiful new smile."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
        ]}
      />

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {resources.map((resource, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link
                  href={resource.href}
                  className="block bg-[#f5eeeb] rounded-2xl p-7 hover:shadow-xl transition-all group h-full"
                >
                  <div className="w-14 h-14 bg-[#1a4d3e] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c9707d] transition-colors">
                    <resource.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                    {resource.title}
                  </h3>
                  <p className="text-[#1a4d3e]/70 mb-4 font-light">{resource.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#c9707d] font-medium">
                    Read More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Need More Help?"
        subtitle="Our team is always here to answer your questions. Get in touch anytime."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
