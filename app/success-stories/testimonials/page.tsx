"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Star, Quote } from "lucide-react";

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

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      treatment: "Invisalign",
      location: "Oxford",
      text: "I was nervous about getting braces as an adult, but Invisalign was the perfect solution. Dr. Lora made the whole process so easy and the results exceeded my expectations. I can't stop smiling!",
      rating: 5,
    },
    {
      name: "James Thompson",
      treatment: "Metal Braces",
      location: "Leigh-on-Sea",
      text: "My two children have both had treatment at Lora Ortho. The staff are incredibly patient and make every visit a positive experience. We couldn't recommend them highly enough.",
      rating: 5,
    },
    {
      name: "Emily Richardson",
      treatment: "Clear Braces",
      location: "Oxford",
      text: "Professional, caring, and the results speak for themselves. The clear braces were barely noticeable during my treatment, which was important for my job in customer service.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      treatment: "Invisalign",
      location: "Oxford",
      text: "As someone who travels frequently for work, the flexibility of Invisalign was perfect for me. The Dental Monitoring app meant I didn't need to come in as often, and my treatment stayed on track.",
      rating: 5,
    },
    {
      name: "Sophie Williams",
      treatment: "Angel Aligner",
      location: "Leigh-on-Sea",
      text: "I didn't think I could afford orthodontic treatment, but Angel Aligner was within my budget and the results are amazing. Thank you Lora Ortho for making my dream smile a reality!",
      rating: 5,
    },
    {
      name: "David Brown",
      treatment: "Metal Braces",
      location: "Oxford",
      text: "I had a complex case that required traditional braces. The team was fantastic throughout my 2-year treatment. Now I have the straight teeth I always wanted.",
      rating: 5,
    },
    {
      name: "Rebecca Taylor",
      treatment: "Invisalign",
      location: "Leigh-on-Sea",
      text: "I've recommended Lora Ortho to all my friends and family. The clinic is modern, the staff are lovely, and Dr. Lora is simply the best orthodontist I've ever met.",
      rating: 5,
    },
    {
      name: "Thomas Anderson",
      treatment: "Clear Braces",
      location: "Oxford",
      text: "The payment plan made treatment affordable, and the results were worth every penny. My only regret is not doing this sooner!",
      rating: 5,
    },
  ];

  return (
    <>
      <PageHero
        title="Patient Testimonials"
        subtitle="Don't just take our word for it. Read what our patients have to say about their experience at Lora Ortho."
        breadcrumbs={[
          { label: "Success Stories", href: "/success-stories" },
          { label: "Testimonials", href: "/success-stories/testimonials" },
        ]}
      />

      {/* Overall Rating */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-center"
          >
            <div>
              <p className="text-6xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">4.9</p>
              <div className="flex justify-center text-[#c9707d] my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <p className="text-[#1a4d3e]/60 font-light">Based on 200+ reviews</p>
            </div>
            <div className="hidden md:block h-16 w-px bg-[#1a4d3e]/20" />
            <div className="text-left">
              <p className="text-[#1a4d3e]/70 font-light max-w-md">
                We're proud to have helped thousands of patients achieve their dream smiles. Here's what some of them have to say.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-[#c9707d]/20" />
                <div className="flex text-[#c9707d] mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#1a4d3e]/80 mb-6 font-light leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)] text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#1a4d3e]/60">
                      {testimonial.treatment} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Join Our Happy Patients"
        subtitle="Start your smile journey today and become our next success story."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
