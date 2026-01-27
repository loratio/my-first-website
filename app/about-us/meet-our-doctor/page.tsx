"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { GraduationCap, Award, Heart, CheckCircle } from "lucide-react";

export default function MeetOurDoctorPage() {
  const qualifications = [
    "BDS (Bachelor of Dental Surgery)",
    "MSc Orthodontics",
    "Specialist in Orthodontics (GDC)",
    "Member of the British Orthodontic Society",
    "Invisalign Diamond Provider",
    "Continuing professional development",
  ];

  const specializations = [
    "Invisalign and clear aligners",
    "Complex adult orthodontics",
    "Children's orthodontics",
    "Surgical orthodontics",
    "Lingual braces",
    "Accelerated treatment options",
  ];

  return (
    <>
      <PageHero
        title="Meet Our Doctor"
        subtitle="Get to know the specialist orthodontist behind Lora Ortho and their dedication to creating beautiful smiles."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Meet Our Doctor", href: "/about-us/meet-our-doctor" },
        ]}
      />

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] flex items-center justify-center shadow-2xl">
                <GraduationCap className="h-32 w-32 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#c9707d]" />
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Diamond Provider</p>
                    <p className="text-xs text-[#1a4d3e]/60">Top 1% Invisalign</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">SPECIALIST ORTHODONTIST</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                Dr. Lora Smith
              </h2>
              <p className="text-[#1a4d3e]/60 mb-6">BDS, MSc, Specialist in Orthodontics</p>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Dr. Lora Smith is a specialist orthodontist with over 15 years of experience helping patients achieve beautiful, healthy smiles. After completing her dental degree, she pursued specialist training in orthodontics and has since treated thousands of patients of all ages.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Dr. Smith is passionate about staying at the forefront of orthodontic technology and regularly attends international conferences and training courses. She is an Invisalign Diamond Provider, placing her in the top 1% of Invisalign providers worldwide.
              </p>
              <div className="bg-[#f5eeeb] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-[#c9707d] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#1a4d3e]">Personal Note</p>
                    <p className="text-sm text-[#1a4d3e]/70 italic">
                      "I believe everyone deserves a smile they can be proud of. My goal is to make orthodontic treatment a positive, life-changing experience for every patient."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications & Specializations */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Qualifications
              </h2>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{qual}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Specializations
              </h2>
              <div className="space-y-4">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-[#1a4d3e] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Book a Consultation with Dr. Smith"
        subtitle="Experience the expertise and care that has helped thousands of patients achieve their dream smiles."
        buttonText="Book Consultation"
      />
    </>
  );
}
