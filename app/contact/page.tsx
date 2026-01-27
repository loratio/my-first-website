"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function ContactPage() {
  const locations = [
    {
      name: "Oxford",
      address: "123 High Street, Oxford, OX1 4AB",
      phone: "01865 248816",
      email: "oxford@loraortho.com",
      hours: "Mon-Fri: 9am-6pm, Sat: 9am-1pm",
      href: "/contact/oxford",
    },
    {
      name: "Leigh-on-Sea",
      address: "45 Broadway, Leigh-on-Sea, SS9 1PE",
      phone: "01702 476789",
      email: "leigh@loraortho.com",
      hours: "Mon-Fri: 9am-6pm, Sat: 9am-1pm",
      href: "/contact/leigh-on-sea",
    },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our friendly team at either of our two locations."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                  {location.name}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-[#c9707d] flex-shrink-0 mt-1" />
                    <p className="text-[#1a4d3e]/70">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="text-[#1a4d3e]/70 hover:text-[#1a4d3e]">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-[#1a4d3e]/70 hover:text-[#1a4d3e]">
                      {location.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-[#c9707d] flex-shrink-0 mt-1" />
                    <p className="text-[#1a4d3e]/70">{location.hours}</p>
                  </div>
                </div>
                <Link
                  href={location.href}
                  className="inline-flex items-center gap-1 text-[#c9707d] font-medium mt-6 hover:text-[#b85c69] transition-colors"
                >
                  View Details & Directions
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Send Us a Message
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a4d3e] mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-[#fdfbf9]"
                    placeholder="07123 456789"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a4d3e] mb-2">
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
                <label htmlFor="location" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                  Preferred Location
                </label>
                <select
                  id="location"
                  className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-[#fdfbf9]"
                >
                  <option value="">Select a location</option>
                  <option value="oxford">Oxford</option>
                  <option value="leigh-on-sea">Leigh-on-Sea</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all resize-none bg-[#fdfbf9]"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c9707d] text-white py-4 rounded-xl font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/25"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <CTABanner
        title="Ready to Book an Appointment?"
        subtitle="Skip the form and book your consultation directly."
        buttonText="Book Consultation"
        buttonHref="/book-consultation"
      />
    </>
  );
}
