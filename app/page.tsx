"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  Smile,
  Shield,
  Award,
  Heart,
  ChevronRight,
} from "lucide-react";

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

export default function Home() {
  const services = [
    {
      title: "Invisalign",
      description:
        "Clear, removable aligners that straighten your teeth discreetly and comfortably.",
      icon: Smile,
      href: "/treatments/clear-aligners/invisalign",
    },
    {
      title: "Metal Braces",
      description:
        "Time-tested braces that deliver reliable, precise results for all ages.",
      icon: Shield,
      href: "/treatments/braces/metal-braces",
    },
    {
      title: "Clear Braces",
      description:
        "Tooth-colored brackets that blend naturally with your smile during treatment.",
      icon: Award,
      href: "/treatments/braces/clear-braces",
    },
    {
      title: "Angel Aligner",
      description:
        "Premium clear aligners offering excellent results at a more affordable price.",
      icon: Heart,
      href: "/treatments/clear-aligners/angel-aligner",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Dr. Lora and her team made my Invisalign journey so easy. I love my new smile!",
      rating: 5,
    },
    {
      name: "James T.",
      text: "My kids actually look forward to their orthodontist appointments. The staff is wonderful!",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "Professional, caring, and the results speak for themselves. Highly recommend!",
      rating: 5,
    },
  ];

  const benefits = [
    "Free initial consultation",
    "Flexible payment plans",
    "State-of-the-art technology",
    "Family-friendly environment",
    "Evening & weekend hours",
    "Emergency care available",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-gradient-to-br from-[#f5eeeb] via-[#fdfbf9] to-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a4d3e] leading-tight font-[family-name:var(--font-cormorant)]">
                Creating{" "}
                <span className="text-[#c9707d] italic">Beautiful Smiles</span>{" "}
                That Last a Lifetime
              </h1>
              <p className="mt-6 text-lg text-[#1a4d3e]/70 leading-relaxed font-light">
                At Lora Ortho, we combine advanced orthodontic techniques with
                personalized care to give you the confident smile you deserve.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#c9707d] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/25"
                >
                  Schedule Consultation
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1a4d3e] text-[#1a4d3e] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#1a4d3e] hover:text-white transition-colors"
                >
                  Our Treatments
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">15+</p>
                  <p className="text-sm text-[#1a4d3e]/60 font-light">Years Experience</p>
                </div>
                <div className="h-12 w-px bg-[#1a4d3e]/20" />
                <div>
                  <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">5000+</p>
                  <p className="text-sm text-[#1a4d3e]/60 font-light">Happy Patients</p>
                </div>
                <div className="h-12 w-px bg-[#1a4d3e]/20" />
                <div>
                  <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">4.9</p>
                  <p className="text-sm text-[#1a4d3e]/60 font-light">Star Rating</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] flex items-center justify-center shadow-2xl">
                <Smile className="h-48 w-48 text-white/90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#1a4d3e]/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c9707d] to-[#d4919e] border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a4d3e]">Join 5000+ patients</p>
                    <div className="flex text-[#c9707d]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#c9707d] font-medium mb-3 tracking-wide"
            >
              OUR TREATMENTS
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]"
            >
              Comprehensive Orthodontic Care
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl mx-auto font-light"
            >
              We offer a full range of orthodontic treatments tailored to your
              unique needs and lifestyle.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-[#f5eeeb] to-[#fdfbf9] rounded-2xl p-7 hover:shadow-xl transition-all border border-[#1a4d3e]/5"
              >
                <div className="w-14 h-14 bg-[#1a4d3e] rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {service.title}
                </h3>
                <p className="text-[#1a4d3e]/70 font-light mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-[#c9707d] font-medium hover:text-[#b85c69] transition-colors"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-[#1a4d3e] font-medium hover:text-[#c9707d] transition-colors"
            >
              View All Treatments
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#2d6a4f] to-[#1a4d3e] flex items-center justify-center shadow-2xl">
                <Award className="h-32 w-32 text-white/90" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Your Trusted Partner in Orthodontic Excellence
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                At Lora Ortho, we believe everyone deserves a smile they can be
                proud of. With over 15 years of experience, our team is
                dedicated to providing exceptional orthodontic care in a warm,
                welcoming environment.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                We use the latest technology and techniques to ensure efficient,
                comfortable treatment. From your first consultation to your
                final retainer, we&apos;re with you every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-[#c9707d] font-medium hover:text-[#b85c69] transition-colors"
                >
                  Learn More About Us
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#c9707d] font-medium mb-3 tracking-wide"
            >
              TESTIMONIALS
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]"
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
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#f5eeeb] rounded-2xl p-8 border border-[#1a4d3e]/5"
              >
                <div className="flex text-[#c9707d] mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-[#1a4d3e]/80 mb-5 italic text-lg font-light leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)] text-lg">{testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/success-stories/testimonials"
              className="inline-flex items-center gap-2 text-[#1a4d3e] font-medium hover:text-[#c9707d] transition-colors"
            >
              Read More Testimonials
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a4d3e] to-[#2d6a4f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-5 font-[family-name:var(--font-cormorant)]">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light">
              Schedule your free consultation today and take the first step
              toward the confident smile you&apos;ve always wanted.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-[#c9707d] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/30"
            >
              Book Your Free Consultation
              <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">LOCATIONS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Two Convenient Locations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Oxford",
                address: "123 High Street, Oxford, OX1 4AB",
                phone: "01865 248816",
                href: "/contact/oxford",
              },
              {
                name: "Leigh-on-Sea",
                address: "45 Broadway, Leigh-on-Sea, SS9 1PE",
                phone: "01702 476789",
                href: "/contact/leigh-on-sea",
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={location.href}
                  className="block bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                    {location.name}
                  </h3>
                  <p className="text-[#1a4d3e]/70 mb-2">{location.address}</p>
                  <p className="text-[#c9707d] font-medium">{location.phone}</p>
                  <span className="inline-flex items-center gap-1 text-[#1a4d3e] font-medium mt-4">
                    Get Directions
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
