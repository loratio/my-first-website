"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Award, Users, Zap, Heart, Shield, Clock, Star, CheckCircle } from "lucide-react";

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

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Award,
      title: "Specialist Orthodontist",
      description: "Dr. Smith is a GDC-registered specialist orthodontist with additional years of training beyond dental school.",
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "We invest in cutting-edge equipment including 3D scanning, digital X-rays, and advanced treatment planning software.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our dedicated team has decades of combined experience in orthodontic care and patient support.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We take the time to understand your goals and create personalized treatment plans for every patient.",
    },
    {
      icon: Shield,
      title: "Diamond Provider",
      description: "As an Invisalign Diamond Provider, we're in the top 1% of Invisalign practitioners worldwide.",
    },
    {
      icon: Clock,
      title: "Convenient Appointments",
      description: "With two locations and flexible scheduling including evenings, we make treatment fit your lifestyle.",
    },
  ];

  const stats = [
    { value: "5000+", label: "Happy Patients" },
    { value: "15+", label: "Years Experience" },
    { value: "4.9", label: "Star Rating" },
    { value: "99%", label: "Recommend Us" },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The whole team made me feel so comfortable. I couldn't be happier with my results!",
    },
    {
      name: "James T.",
      text: "Professional, friendly, and the results speak for themselves. Highly recommend!",
    },
  ];

  return (
    <>
      <PageHero
        title="Why Choose Us"
        subtitle="Discover what makes Lora Ortho the trusted choice for orthodontic treatment in Oxford and Leigh-on-Sea."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Why Choose Us", href: "/about-us/why-choose-us" },
        ]}
      />

      {/* Reasons Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">THE LORA ORTHO DIFFERENCE</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Why Patients Trust Us
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#f5eeeb] rounded-2xl p-7"
              >
                <div className="w-14 h-14 bg-[#1a4d3e] rounded-xl flex items-center justify-center mb-5">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {reason.title}
                </h3>
                <p className="text-[#1a4d3e]/70 font-light">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-[#1a4d3e] to-[#2d6a4f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-semibold text-white font-[family-name:var(--font-cormorant)]">
                  {stat.value}
                </p>
                <p className="text-white/60 font-light mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Patients Say */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              What Our Patients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8"
              >
                <div className="flex text-[#c9707d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-[#1a4d3e]/80 mb-4 italic font-light text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Experience the Difference"
        subtitle="Book a free consultation and see why thousands of patients have trusted us with their smiles."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
