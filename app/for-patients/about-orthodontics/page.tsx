"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { ChevronRight, User, AlertCircle, Baby, GitCompare, Scale } from "lucide-react";

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

export default function AboutOrthodonticsPage() {
  const topics = [
    {
      title: "What is an Orthodontist?",
      description: "Learn about the specialized training and expertise that sets orthodontists apart from general dentists.",
      href: "/for-patients/about-orthodontics/what-is-an-orthodontist",
      icon: User,
    },
    {
      title: "Orthodontic Problems",
      description: "Discover the common dental issues that orthodontic treatment can address, from crowding to bite problems.",
      href: "/for-patients/about-orthodontics/orthodontic-problems",
      icon: AlertCircle,
    },
    {
      title: "Early Treatment",
      description: "Find out why early orthodontic intervention can be beneficial for children and when to bring your child in.",
      href: "/for-patients/about-orthodontics/early-treatment",
      icon: Baby,
    },
    {
      title: "Compare Treatments",
      description: "See how different treatment options compare, including braces, clear aligners, and more.",
      href: "/for-patients/about-orthodontics/compare-treatments",
      icon: GitCompare,
    },
    {
      title: "Benefits & Risks",
      description: "Understand the benefits of orthodontic treatment and the potential risks to consider.",
      href: "/for-patients/about-orthodontics/benefits-risks",
      icon: Scale,
    },
  ];

  return (
    <>
      <PageHero
        title="About Orthodontics"
        subtitle="Everything you need to know about orthodontic treatment, from what an orthodontist does to the conditions we can treat."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
        ]}
      />

      {/* Topics Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {topics.map((topic, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link
                  href={topic.href}
                  className="block bg-[#f5eeeb] rounded-2xl p-7 hover:shadow-xl transition-all group h-full"
                >
                  <div className="w-14 h-14 bg-[#1a4d3e] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c9707d] transition-colors">
                    <topic.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                    {topic.title}
                  </h3>
                  <p className="text-[#1a4d3e]/70 mb-4 font-light">{topic.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#c9707d] font-medium">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Learn More?"
        subtitle="Book a consultation to discuss your orthodontic options with our expert team."
        buttonText="Book Consultation"
      />
    </>
  );
}
