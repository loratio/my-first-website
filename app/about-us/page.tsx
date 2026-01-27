"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { ChevronRight, User, Users, Award, CheckCircle } from "lucide-react";

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

export default function AboutUsPage() {
  const links = [
    {
      title: "Meet Our Doctor",
      description: "Learn about our specialist orthodontist and their qualifications.",
      href: "/about-us/meet-our-doctor",
      icon: User,
    },
    {
      title: "Meet Our Staff",
      description: "Get to know our friendly and professional team members.",
      href: "/about-us/meet-our-staff",
      icon: Users,
    },
    {
      title: "Why Choose Us",
      description: "Discover what sets Lora Ortho apart from other practices.",
      href: "/about-us/why-choose-us",
      icon: Award,
    },
  ];

  const values = [
    "Patient-centered care",
    "Excellence in treatment",
    "Continuous education",
    "Modern technology",
    "Transparent pricing",
    "Welcoming environment",
  ];

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Welcome to Lora Ortho. We're dedicated to creating beautiful smiles and confident patients through exceptional orthodontic care."
        breadcrumbs={[{ label: "About Us", href: "/about-us" }]}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">OUR STORY</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Creating Beautiful Smiles Since 2009
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                Lora Ortho was founded with a simple mission: to provide exceptional orthodontic care in a warm, welcoming environment. Over the years, we've helped thousands of patients achieve the smiles they've always dreamed of.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                We believe that everyone deserves a beautiful smile, and we work hard to make orthodontic treatment accessible, comfortable, and effective. From your first consultation to your final retainer check, we're with you every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80 text-sm">{value}</span>
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
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] flex items-center justify-center shadow-2xl">
                <Award className="h-32 w-32 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="text-center">
                  <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">15+</p>
                  <p className="text-sm text-[#1a4d3e]/60">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {links.map((link, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link
                  href={link.href}
                  className="block bg-white rounded-2xl p-7 hover:shadow-xl transition-all group h-full"
                >
                  <div className="w-14 h-14 bg-[#1a4d3e] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c9707d] transition-colors">
                    <link.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                    {link.title}
                  </h3>
                  <p className="text-[#1a4d3e]/70 mb-4 font-light">{link.description}</p>
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

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5000+", label: "Happy Patients" },
              { value: "15+", label: "Years Experience" },
              { value: "2", label: "Locations" },
              { value: "4.9", label: "Star Rating" },
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
        title="Meet Us in Person"
        subtitle="Book a consultation and experience the Lora Ortho difference for yourself."
        buttonText="Book Consultation"
      />
    </>
  );
}
