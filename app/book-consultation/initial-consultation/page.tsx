"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { CheckCircle, Clock, Calendar } from "lucide-react";

export default function InitialConsultationPage() {
  const included = [
    "Full orthodontic examination",
    "Digital X-rays if needed",
    "Discussion of treatment options",
    "Personalized treatment plan",
    "Clear cost breakdown",
    "Flexible payment options explained",
    "No obligation to proceed",
  ];

  return (
    <>
      <PageHero
        title="Initial Consultation"
        subtitle="Your first step toward a beautiful smile. Our comprehensive consultation gives you all the information you need to make an informed decision."
        breadcrumbs={[
          { label: "Book Consultation", href: "/book-consultation" },
          { label: "Initial Consultation", href: "/book-consultation/initial-consultation" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-[#1a4d3e]/10 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-[#1a4d3e]" />
                  <span className="text-[#1a4d3e]">45 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-[#c9707d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#c9707d] font-semibold">FREE</span>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                What's Included
              </h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#f5eeeb] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  What to Bring
                </h3>
                <ul className="text-[#1a4d3e]/70 space-y-2 font-light">
                  <li>• Photo ID (if your first visit)</li>
                  <li>• List of any medications you take</li>
                  <li>• Referral letter (if applicable)</li>
                  <li>• Any questions you'd like to ask</li>
                </ul>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#f5eeeb] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-8 w-8 text-[#1a4d3e]" />
                  <h2 className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                    Book Your Consultation
                  </h2>
                </div>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-white"
                        placeholder="07123 456789"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                      Preferred Location
                    </label>
                    <select
                      id="location"
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a location</option>
                      <option value="oxford">Oxford</option>
                      <option value="leigh-on-sea">Leigh-on-Sea</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1a4d3e] mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-5 py-3.5 border border-[#1a4d3e]/20 rounded-xl focus:ring-2 focus:ring-[#c9707d] focus:border-transparent outline-none transition-all resize-none bg-white"
                      placeholder="Tell us about your orthodontic goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c9707d] text-white py-4 rounded-xl font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/25"
                  >
                    Request Appointment
                  </button>
                  <p className="text-xs text-[#1a4d3e]/60 text-center">
                    We'll contact you within 24 hours to confirm your appointment time.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
