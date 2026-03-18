"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  featured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`rounded-2xl p-7 transition-all border ${
        featured
          ? "bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] border-transparent text-white"
          : "bg-gradient-to-br from-[#f5eeeb] to-[#fdfbf9] border-[#1a4d3e]/5 hover:shadow-xl"
      }`}
    >
      {Icon && (
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
            featured ? "bg-white/20" : "bg-[#1a4d3e]"
          }`}
        >
          <Icon className={`h-7 w-7 ${featured ? "text-white" : "text-white"}`} />
        </div>
      )}
      <h3
        className={`text-xl font-semibold mb-3 font-[family-name:var(--font-cormorant)] ${
          featured ? "text-white" : "text-[#1a4d3e]"
        }`}
      >
        {title}
      </h3>
      <p className={`mb-5 font-light ${featured ? "text-white/80" : "text-[#1a4d3e]/70"}`}>
        {description}
      </p>
      <Link
        href={href}
        className={`inline-flex items-center gap-1 font-medium transition-colors ${
          featured ? "text-[#c9707d] hover:text-[#d4919e]" : "text-[#c9707d] hover:text-[#b85c69]"
        }`}
      >
        Learn more
        <ChevronRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
