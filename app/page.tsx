"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Menu,
  X,
  Smile,
  Shield,
  Award,
  Heart,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Traditional Braces",
      description:
        "Time-tested metal braces that deliver reliable, precise results for all ages.",
      icon: Shield,
    },
    {
      title: "Invisalign",
      description:
        "Clear, removable aligners that straighten your teeth discreetly and comfortably.",
      icon: Smile,
    },
    {
      title: "Ceramic Braces",
      description:
        "Tooth-colored brackets that blend naturally with your smile during treatment.",
      icon: Award,
    },
    {
      title: "Retainers",
      description:
        "Custom-fitted retainers to maintain your beautiful new smile for years to come.",
      icon: Heart,
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
    <div className="min-h-screen bg-[#fdfbf9]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf9]/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Smile className="h-9 w-9 text-[#1a4d3e]" />
              <span className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                Lora Ortho
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-[#1a4d3e]/80 hover:text-[#1a4d3e] transition-colors font-light"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#1a4d3e]/80 hover:text-[#1a4d3e] transition-colors font-light"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-[#1a4d3e]/80 hover:text-[#1a4d3e] transition-colors font-light"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-[#1a4d3e]/80 hover:text-[#1a4d3e] transition-colors font-light"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="bg-[#c9707d] text-white px-6 py-2.5 rounded-full hover:bg-[#b85c69] transition-colors font-medium"
              >
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#1a4d3e]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-[#fdfbf9] border-t border-[#1a4d3e]/10"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#services"
                className="block text-[#1a4d3e]/80 hover:text-[#1a4d3e]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-[#1a4d3e]/80 hover:text-[#1a4d3e]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block text-[#1a4d3e]/80 hover:text-[#1a4d3e]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-[#1a4d3e]/80 hover:text-[#1a4d3e]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="block bg-[#c9707d] text-white px-5 py-2 rounded-full text-center hover:bg-[#b85c69]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#f5eeeb] via-[#fdfbf9] to-[#e8f5e9]">
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
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#c9707d] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/25"
                >
                  Schedule Consultation
                  <ChevronRight className="h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1a4d3e] text-[#1a4d3e] px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#1a4d3e] hover:text-white transition-colors"
                >
                  Our Services
                </a>
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
      <section id="services" className="py-24 bg-white">
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
              OUR SERVICES
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
                <p className="text-[#1a4d3e]/70 font-light">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#f5eeeb]">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#c9707d] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/30"
            >
              Book Your Free Consultation
              <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">CONTACT US</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Get in Touch
              </h2>
              <p className="text-[#1a4d3e]/70 mb-10 font-light text-lg">
                Have questions or ready to schedule your appointment? We&apos;re
                here to help!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a4d3e] mb-1">Location</p>
                    <p className="text-[#1a4d3e]/70 font-light">
                      123 Smile Street, Suite 100
                      <br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a4d3e] mb-1">Phone</p>
                    <p className="text-[#1a4d3e]/70 font-light">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a4d3e] mb-1">Email</p>
                    <p className="text-[#1a4d3e]/70 font-light">hello@loraortho.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a4d3e] mb-1">Hours</p>
                    <p className="text-[#1a4d3e]/70 font-light">
                      Mon - Fri: 8:00 AM - 6:00 PM
                      <br />
                      Sat: 9:00 AM - 2:00 PM
                    </p>
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
              <form className="bg-white rounded-3xl p-10 shadow-sm border border-[#1a4d3e]/5">
                <h3 className="text-2xl font-semibold text-[#1a4d3e] mb-8 font-[family-name:var(--font-cormorant)]">
                  Request an Appointment
                </h3>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1a4d3e] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-[#fdfbf9]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1a4d3e] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-[#fdfbf9]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#1a4d3e] mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-[#fdfbf9]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#1a4d3e] mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-[#fdfbf9]"
                    >
                      <option value="">Select a service</option>
                      <option value="braces">Traditional Braces</option>
                      <option value="invisalign">Invisalign</option>
                      <option value="ceramic">Ceramic Braces</option>
                      <option value="retainers">Retainers</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1a4d3e] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all resize-none bg-[#fdfbf9]"
                      placeholder="Tell us about your smile goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c9707d] text-white py-4 rounded-xl font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/25"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d3e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Smile className="h-9 w-9 text-[#c9707d]" />
                <span className="text-2xl font-semibold font-[family-name:var(--font-cormorant)]">Lora Ortho</span>
              </div>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Creating beautiful smiles and confident patients since 2009.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-5 font-[family-name:var(--font-cormorant)] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-white/60 text-sm font-light">
                <li>
                  <a href="#services" className="hover:text-[#c9707d] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#c9707d] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#c9707d] transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#c9707d] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 font-[family-name:var(--font-cormorant)] text-lg">Services</h4>
              <ul className="space-y-3 text-white/60 text-sm font-light">
                <li>Traditional Braces</li>
                <li>Invisalign</li>
                <li>Ceramic Braces</li>
                <li>Retainers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 font-[family-name:var(--font-cormorant)] text-lg">Contact</h4>
              <ul className="space-y-3 text-white/60 text-sm font-light">
                <li>123 Smile Street, Suite 100</li>
                <li>Los Angeles, CA 90001</li>
                <li>(555) 123-4567</li>
                <li>hello@loraortho.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Lora Ortho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
