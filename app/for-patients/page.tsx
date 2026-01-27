"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { BookOpen, Wrench, FileText, ChevronRight } from "lucide-react";

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

export default function ForPatientsPage() {
  const sections = [
    {
      title: "About Orthodontics",
      description: "Learn about orthodontic treatment, what an orthodontist does, and the conditions we can treat.",
      href: "/for-patients/about-orthodontics",
      icon: BookOpen,
      links: [
        { label: "What is an Orthodontist?", href: "/for-patients/about-orthodontics/what-is-an-orthodontist" },
        { label: "Orthodontic Problems", href: "/for-patients/about-orthodontics/orthodontic-problems" },
        { label: "Early Treatment", href: "/for-patients/about-orthodontics/early-treatment" },
        { label: "Compare Treatments", href: "/for-patients/about-orthodontics/compare-treatments" },
        { label: "Benefits & Risks", href: "/for-patients/about-orthodontics/benefits-risks" },
      ],
    },
    {
      title: "Patient Resources",
      description: "Everything you need to know about your treatment, from getting started to maintaining your results.",
      href: "/for-patients/patient-resources",
      icon: Wrench,
      links: [
        { label: "Getting Started - Invisalign", href: "/for-patients/patient-resources/getting-started-invisalign" },
        { label: "Getting Started - Braces", href: "/for-patients/patient-resources/getting-started-braces" },
        { label: "What to Eat", href: "/for-patients/patient-resources/what-to-eat" },
        { label: "Emergency Care", href: "/for-patients/patient-resources/emergency-care" },
        { label: "Retention", href: "/for-patients/patient-resources/retention" },
        { label: "Refer a Friend", href: "/for-patients/patient-resources/refer-a-friend" },
      ],
    },
    {
      title: "Blog",
      description: "Stay up to date with the latest news, tips, and advice from our orthodontic experts.",
      href: "/for-patients/blog",
      icon: FileText,
      links: [],
    },
  ];

  return (
    <>
      <PageHero
        title="For Patients"
        subtitle="We're here to support you throughout your orthodontic journey. Find helpful information, resources, and answers to your questions."
        breadcrumbs={[{ label: "For Patients", href: "/for-patients" }]}
      />

      {/* Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#f5eeeb] rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-[#1a4d3e] rounded-xl flex items-center justify-center mb-5">
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                      {section.title}
                    </h2>
                    <p className="text-[#1a4d3e]/70 mb-4 font-light">{section.description}</p>
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-1 text-[#c9707d] font-medium hover:text-[#b85c69] transition-colors"
                    >
                      View All
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  {section.links.length > 0 && (
                    <div className="md:w-2/3">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {section.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow flex items-center justify-between group"
                          >
                            <span className="text-[#1a4d3e]">{link.label}</span>
                            <ChevronRight className="h-4 w-4 text-[#1a4d3e]/40 group-hover:text-[#c9707d] transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Have Questions?"
        subtitle="Our friendly team is here to help. Get in touch or book a consultation."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
