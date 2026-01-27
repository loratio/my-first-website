"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Gift, Users, Heart, CheckCircle } from "lucide-react";

export default function ReferAFriendPage() {
  const benefits = [
    "You receive a £50 voucher when your friend starts treatment",
    "Your friend gets a £50 discount on their treatment",
    "No limit to how many friends you can refer",
    "Vouchers can be used at major retailers",
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Share Your Experience",
      description: "Tell your friend about your positive experience at Lora Ortho.",
    },
    {
      step: "2",
      title: "They Book a Consultation",
      description: "Your friend books their consultation and mentions your name.",
    },
    {
      step: "3",
      title: "They Start Treatment",
      description: "Once your friend begins their orthodontic treatment with us...",
    },
    {
      step: "4",
      title: "You Both Get Rewarded",
      description: "You receive your voucher and they get their discount!",
    },
  ];

  return (
    <>
      <PageHero
        title="Refer a Friend"
        subtitle="Love your smile? Share the gift of confidence with friends and family - and get rewarded for it!"
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
          { label: "Refer a Friend", href: "/for-patients/patient-resources/refer-a-friend" },
        ]}
      />

      {/* Hero Reward Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a4d3e] to-[#2d6a4f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Gift className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-[family-name:var(--font-cormorant)]">
              Give £50, Get £50
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              When you refer a friend who starts treatment, you'll both be rewarded with £50.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Simple Steps to Earn Rewards
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#c9707d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {item.title}
                </h3>
                <p className="text-[#1a4d3e]/70 text-sm font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">BENEFITS</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Why Refer?
              </h2>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                There's nothing better than sharing something good with the people you care about. Help your friends and family discover the confidence that comes with a beautiful smile.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-2xl p-6 text-center">
                <Users className="h-10 w-10 mx-auto text-[#1a4d3e] mb-3" />
                <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">500+</p>
                <p className="text-sm text-[#1a4d3e]/60">Happy Referrals</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <Gift className="h-10 w-10 mx-auto text-[#c9707d] mb-3" />
                <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">£25,000+</p>
                <p className="text-sm text-[#1a4d3e]/60">Rewards Given</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center col-span-2">
                <Heart className="h-10 w-10 mx-auto text-[#c9707d] mb-3" />
                <p className="text-3xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">100%</p>
                <p className="text-sm text-[#1a4d3e]/60">Satisfaction Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Refer a Friend?"
        subtitle="Simply have your friend mention your name when they book their consultation."
        buttonText="Book Their Consultation"
        buttonHref="/book-consultation"
      />
    </>
  );
}
