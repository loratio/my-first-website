"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Paintbrush, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "About your practice",
    description: "Share your key contacts, locations, and how you'd like to handle enquiries.",
  },
  {
    icon: Target,
    title: "Goals & audience",
    description: "Tell us what you want the site to achieve, who you're trying to reach, and what sets you apart.",
  },
  {
    icon: Paintbrush,
    title: "Look & feel",
    description: "Pick design styles, fine-tune your brand personality, explore colour palettes, and set the tone of voice.",
  },
  {
    icon: ClipboardCheck,
    title: "Review & submit",
    description: "Check everything over, make any tweaks, and send it straight to us.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-secondary/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-primary/60 mb-4">TIO Website Launchpad</p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Shape your website
              <span className="block mt-2 bg-gradient-to-r from-primary to-primary-light bg-clip-text">in minutes, not meetings.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed">
              Work through our interactive, guided process and we&apos;ll turn your ideas into a clear, build-ready plan.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/brief"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors shadow-lg shadow-primary/25"
              >
                Start your brief
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How it works
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We&apos;ll walk you through a few short sections to capture everything we need to get started on your website.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-secondary/50"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s get your new website started.
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Start your brief and we&apos;ll take care of the rest.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/brief"
                className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-light transition-colors"
              >
                Begin the experience
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
