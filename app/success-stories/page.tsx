"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Camera, MessageSquare, ChevronRight, Star } from "lucide-react";

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

export default function SuccessStoriesPage() {
  const featuredTestimonials = [
    {
      name: "Sarah M.",
      treatment: "Invisalign",
      text: "Dr. Lora and her team made my Invisalign journey so easy. I love my new smile!",
      rating: 5,
    },
    {
      name: "James T.",
      treatment: "Metal Braces",
      text: "My kids actually look forward to their orthodontist appointments. The staff is wonderful!",
      rating: 5,
    },
    {
      name: "Emily R.",
      treatment: "Clear Braces",
      text: "Professional, caring, and the results speak for themselves. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <>
      <PageHero
        title="Success Stories"
        subtitle="See the amazing transformations our patients have achieved. From dramatic smile makeovers to subtle refinements, every smile tells a story."
        breadcrumbs={[{ label: "Success Stories", href: "/success-stories" }]}
      />

      {/* Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/success-stories/before-afters"
                className="block bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] rounded-2xl p-8 text-white hover:shadow-xl transition-shadow"
              >
                <Camera className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-cormorant)]">
                  Before & Afters
                </h3>
                <p className="text-white/80 mb-4 font-light">
                  Browse our gallery of smile transformations and see the incredible results our patients have achieved.
                </p>
                <span className="inline-flex items-center gap-1 text-[#c9707d] font-medium">
                  View Gallery
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/success-stories/testimonials"
                className="block bg-gradient-to-br from-[#c9707d] to-[#d4919e] rounded-2xl p-8 text-white hover:shadow-xl transition-shadow"
              >
                <MessageSquare className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-cormorant)]">
                  Testimonials
                </h3>
                <p className="text-white/80 mb-4 font-light">
                  Read what our patients have to say about their experience at Lora Ortho.
                </p>
                <span className="inline-flex items-center gap-1 text-white font-medium">
                  Read Reviews
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
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
              FEATURED REVIEWS
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]"
            >
              What Our Patients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-[#1a4d3e]/5"
              >
                <div className="flex text-[#c9707d] mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-[#1a4d3e]/80 mb-5 italic text-lg font-light leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)] text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#1a4d3e]/60">{testimonial.treatment}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Smile Journey?"
        subtitle="Join thousands of happy patients who have transformed their smiles with Lora Ortho."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
