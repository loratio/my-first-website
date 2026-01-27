"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";

export default function OxfordPage() {
  const hours = [
    { day: "Monday", time: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
    { day: "Thursday", time: "9:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <>
      <PageHero
        title="Oxford Practice"
        subtitle="Our flagship practice in the heart of Oxford, offering comprehensive orthodontic care in a modern, comfortable setting."
        breadcrumbs={[
          { label: "Contact", href: "/contact" },
          { label: "Oxford", href: "/contact/oxford" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Contact Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1a4d3e]">Address</p>
                    <p className="text-[#1a4d3e]/70">123 High Street</p>
                    <p className="text-[#1a4d3e]/70">Oxford, OX1 4AB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1a4d3e]">Phone</p>
                    <a href="tel:01865248816" className="text-[#1a4d3e]/70 hover:text-[#c9707d] transition-colors">
                      01865 248816
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a4d3e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#1a4d3e]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1a4d3e]">Email</p>
                    <a href="mailto:oxford@loraortho.com" className="text-[#1a4d3e]/70 hover:text-[#c9707d] transition-colors">
                      oxford@loraortho.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mt-12 mb-6 font-[family-name:var(--font-cormorant)]">
                Opening Hours
              </h2>
              <div className="space-y-2">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-[#1a4d3e]/10 last:border-0">
                    <span className="text-[#1a4d3e]">{item.day}</span>
                    <span className="text-[#1a4d3e]/70">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map & Directions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Map Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1a4d3e]/10 to-[#1a4d3e]/20 rounded-2xl flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto text-[#1a4d3e]/40 mb-3" />
                  <p className="text-[#1a4d3e]/60">Map will be displayed here</p>
                </div>
              </div>

              {/* Getting Here */}
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Getting Here
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#f5eeeb] rounded-xl p-4">
                  <Car className="h-6 w-6 text-[#c9707d] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#1a4d3e]">By Car</p>
                    <p className="text-[#1a4d3e]/70 text-sm">
                      Parking available at Westgate Shopping Centre (5 min walk) or street parking on nearby roads.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#f5eeeb] rounded-xl p-4">
                  <Train className="h-6 w-6 text-[#c9707d] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#1a4d3e]">By Public Transport</p>
                    <p className="text-[#1a4d3e]/70 text-sm">
                      10 minute walk from Oxford train station. Multiple bus routes stop nearby on High Street.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Book at Our Oxford Practice"
        subtitle="Schedule your consultation at our convenient Oxford location."
        buttonText="Book Consultation"
        buttonHref="/book-consultation"
      />
    </>
  );
}
