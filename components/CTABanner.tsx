"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "primary" | "secondary";
}

export default function CTABanner({
  title = "Ready to transform your smile?",
  subtitle = "Schedule your free consultation today and take the first step toward the confident smile you've always wanted.",
  buttonText = "Book your free consultation",
  buttonHref = "/book-consultation",
  variant = "primary",
}: CTABannerProps) {
  const bgClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#1a4d3e] to-[#2d6a4f]"
      : "bg-gradient-to-r from-[#c9707d] to-[#d4919e]";

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-5 font-[family-name:var(--font-cormorant)]">
            {title}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
          <Link
            href={buttonHref}
            className={`inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-medium transition-colors shadow-lg ${
              variant === "primary"
                ? "bg-[#c9707d] text-white hover:bg-[#b85c69] shadow-[#c9707d]/30"
                : "bg-white text-[#1a4d3e] hover:bg-[#f5eeeb] shadow-white/30"
            }`}
          >
            {buttonText}
            <ChevronRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
