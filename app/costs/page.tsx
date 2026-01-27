"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, PoundSterling, CreditCard, Calendar } from "lucide-react";

export default function CostsPage() {
  const treatments = [
    {
      name: "Invisalign",
      startingFrom: "3,500",
      description: "Clear aligner treatment for a virtually invisible smile transformation.",
    },
    {
      name: "Angel Aligner",
      startingFrom: "2,500",
      description: "Affordable clear aligners with excellent results.",
    },
    {
      name: "Metal Braces",
      startingFrom: "2,800",
      description: "Traditional braces for effective and reliable treatment.",
    },
    {
      name: "Clear Braces",
      startingFrom: "3,200",
      description: "Ceramic braces for a more discreet appearance.",
    },
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Interest-Free Finance",
      description: "Spread the cost with 0% APR finance options available on treatments over £1,000.",
    },
    {
      icon: Calendar,
      title: "Monthly Payments",
      description: "Flexible monthly payment plans to suit your budget.",
    },
    {
      icon: PoundSterling,
      title: "Pay in Full",
      description: "Receive a discount when you pay for your treatment in full upfront.",
    },
  ];

  const included = [
    "Free initial consultation",
    "All appointments during treatment",
    "Your aligners or braces",
    "Retainers after treatment",
    "Dental Monitoring (where applicable)",
    "Emergency appointments",
    "Whitening (on selected packages)",
  ];

  return (
    <>
      <PageHero
        title="Treatment Costs"
        subtitle="We believe everyone deserves a beautiful smile. That's why we offer competitive pricing and flexible payment options to make orthodontic treatment accessible."
        breadcrumbs={[{ label: "Costs", href: "/costs" }]}
      />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Treatment Prices
            </h2>
            <p className="mt-4 text-lg text-[#1a4d3e]/70 max-w-2xl mx-auto font-light">
              Prices vary based on the complexity of your case. We'll provide a detailed quote at your consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {treatment.name}
                </h3>
                <p className="text-[#1a4d3e]/70 text-sm mb-4 font-light">{treatment.description}</p>
                <p className="text-sm text-[#1a4d3e]/60 mb-1">Starting from</p>
                <p className="text-3xl font-semibold text-[#c9707d] font-[family-name:var(--font-cormorant)]">
                  £{treatment.startingFrom}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">VALUE</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                What's Included
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Our treatment packages include everything you need for a successful orthodontic journey. No hidden costs, no surprises.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {included.map((item, index) => (
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
                <PoundSterling className="h-40 w-40 text-white/90" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">FLEXIBLE FINANCE</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Payment Options
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#1a4d3e] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {option.title}
                </h3>
                <p className="text-[#1a4d3e]/70 font-light">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Your Personalized Quote"
        subtitle="Book a free consultation and we'll provide a detailed treatment plan and cost estimate."
        buttonText="Free Consultation"
      />
    </>
  );
}
