"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  showCTA = false,
  ctaText = "Book Consultation",
  ctaHref = "/book-consultation",
}: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-[#f5eeeb] via-[#fdfbf9] to-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#1a4d3e]/60 mb-6"
          >
            <Link href="/" className="hover:text-[#1a4d3e] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-[#1a4d3e]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#1a4d3e] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a4d3e] leading-tight font-[family-name:var(--font-cormorant)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-[#1a4d3e]/70 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-[#c9707d] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#b85c69] transition-colors shadow-lg shadow-[#c9707d]/25"
              >
                {ctaText}
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
