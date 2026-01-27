"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Calendar, Smile, ChevronRight, CheckCircle, Phone } from "lucide-react";

export default function BookConsultationPage() {
  const consultationTypes = [
    {
      title: "Initial Consultation",
      description: "A comprehensive assessment of your orthodontic needs with our specialist. We'll discuss your goals, examine your teeth, and recommend the best treatment options.",
      duration: "45 minutes",
      price: "Free",
      href: "/book-consultation/initial-consultation",
      icon: Calendar,
      featured: false,
    },
    {
      title: "Free Invisalign Assessment",
      description: "Specifically for patients interested in Invisalign. Includes a scan to show you a preview of your potential results using Invisalign's SmileView technology.",
      duration: "30 minutes",
      price: "Free",
      href: "/book-consultation/free-invisalign-assessment",
      icon: Smile,
      featured: true,
    },
  ];

  const whatToExpect = [
    "Discussion of your concerns and goals",
    "Comprehensive examination of your teeth and bite",
    "Digital X-rays if needed (at no extra charge)",
    "Explanation of treatment options",
    "Personalized treatment plan",
    "Clear cost breakdown and payment options",
  ];

  return (
    <>
      <PageHero
        title="Book a Consultation"
        subtitle="Take the first step toward your dream smile. Choose the consultation type that's right for you and book online or by phone."
        breadcrumbs={[{ label: "Book Consultation", href: "/book-consultation" }]}
      />

      {/* Consultation Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">CHOOSE YOUR CONSULTATION</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              How Can We Help You?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={type.href}
                  className={`block rounded-2xl p-8 h-full transition-all hover:shadow-xl ${
                    type.featured
                      ? "bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] text-white"
                      : "bg-[#f5eeeb]"
                  }`}
                >
                  {type.featured && (
                    <span className="inline-block bg-[#c9707d] text-white text-xs px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <type.icon className={`h-10 w-10 mb-4 ${type.featured ? "text-white" : "text-[#1a4d3e]"}`} />
                  <h3 className={`text-2xl font-semibold mb-3 font-[family-name:var(--font-cormorant)] ${type.featured ? "text-white" : "text-[#1a4d3e]"}`}>
                    {type.title}
                  </h3>
                  <p className={`mb-6 font-light ${type.featured ? "text-white/80" : "text-[#1a4d3e]/70"}`}>
                    {type.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${type.featured ? "text-white/60" : "text-[#1a4d3e]/60"}`}>
                        {type.duration}
                      </p>
                      <p className={`text-xl font-semibold ${type.featured ? "text-[#c9707d]" : "text-[#c9707d]"}`}>
                        {type.price}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1 font-medium ${type.featured ? "text-[#c9707d]" : "text-[#c9707d]"}`}>
                      Book Now
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHAT TO EXPECT</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Your First Visit
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Your consultation is an opportunity for us to understand your goals and for you to learn about your options. There's absolutely no obligation to proceed with treatment.
              </p>
              <div className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{item}</span>
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
                <Smile className="h-40 w-40 text-white/90" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">PREFER TO CALL?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
              Book by Phone
            </h2>
            <p className="text-[#1a4d3e]/70 mb-8 font-light text-lg">
              Our friendly team is ready to help you schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:01865248816"
                className="inline-flex items-center gap-2 bg-[#1a4d3e] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2d6a4f] transition-colors"
              >
                <Phone className="h-5 w-5" />
                Oxford: 01865 248816
              </a>
              <a
                href="tel:01702476789"
                className="inline-flex items-center gap-2 bg-[#c9707d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b85c69] transition-colors"
              >
                <Phone className="h-5 w-5" />
                Leigh-on-Sea: 01702 476789
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
