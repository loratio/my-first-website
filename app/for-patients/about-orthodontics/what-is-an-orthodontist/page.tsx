"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, GraduationCap, Award, Stethoscope } from "lucide-react";

export default function WhatIsAnOrthodontistPage() {
  const differences = [
    {
      title: "Additional Training",
      description: "After completing dental school, orthodontists undergo 2-3 additional years of specialized training in orthodontics.",
    },
    {
      title: "Specialized Focus",
      description: "While dentists provide general dental care, orthodontists focus exclusively on straightening teeth and correcting bite issues.",
    },
    {
      title: "Expert Diagnosis",
      description: "Orthodontists are trained to identify and treat complex alignment issues that may not be apparent to general dentists.",
    },
  ];

  const qualifications = [
    "5-year undergraduate dental degree",
    "2-3 years of specialized orthodontic training",
    "Registration with the General Dental Council",
    "Membership of the British Orthodontic Society",
    "Ongoing professional development",
    "Years of clinical experience",
  ];

  return (
    <>
      <PageHero
        title="What is an Orthodontist?"
        subtitle="An orthodontist is a dental specialist who has completed additional training to focus specifically on straightening teeth and correcting bite problems."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
          { label: "What is an Orthodontist?", href: "/for-patients/about-orthodontics/what-is-an-orthodontist" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">SPECIALIST CARE</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                More Than Just a Dentist
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                While all orthodontists are dentists, not all dentists are orthodontists. After completing their dental degree, orthodontists spend an additional 2-3 years in a specialized residency program focused exclusively on orthodontic treatment.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                This additional training gives orthodontists the expertise to diagnose and treat complex alignment and bite issues, ensuring you receive the highest standard of care.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{qual}</span>
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
                <GraduationCap className="h-40 w-40 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#c9707d]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Specialist Registered</p>
                    <p className="text-xs text-[#1a4d3e]/60">GDC & BOS Member</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differences Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">THE DIFFERENCE</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Orthodontist vs Dentist
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d3e] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {item.title}
                </h3>
                <p className="text-[#1a4d3e]/70 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="See a Specialist"
        subtitle="Book a consultation with our specialist orthodontist and get expert care for your smile."
        buttonText="Book Consultation"
      />
    </>
  );
}
