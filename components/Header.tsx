"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Smile, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Treatments",
    children: [
      { label: "All Treatments", href: "/treatments", description: "View all our treatment options" },
      { label: "Clear Aligners", href: "/treatments/clear-aligners", description: "Invisalign & Angel Aligner" },
      { label: "Invisalign", href: "/treatments/clear-aligners/invisalign" },
      { label: "Angel Aligner", href: "/treatments/clear-aligners/angel-aligner" },
      { label: "Dental Monitoring", href: "/treatments/clear-aligners/dental-monitoring" },
      { label: "Braces", href: "/treatments/braces", description: "Traditional & clear braces" },
      { label: "Metal Braces", href: "/treatments/braces/metal-braces" },
      { label: "Clear Braces", href: "/treatments/braces/clear-braces" },
    ],
  },
  {
    label: "Costs",
    href: "/costs",
  },
  {
    label: "Success Stories",
    children: [
      { label: "All Success Stories", href: "/success-stories" },
      { label: "Before & Afters", href: "/success-stories/before-afters" },
      { label: "Testimonials", href: "/success-stories/testimonials" },
    ],
  },
  {
    label: "For Patients",
    children: [
      { label: "Patient Overview", href: "/for-patients", description: "Resources for patients" },
      { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
      { label: "What is an Orthodontist?", href: "/for-patients/about-orthodontics/what-is-an-orthodontist" },
      { label: "Orthodontic Problems", href: "/for-patients/about-orthodontics/orthodontic-problems" },
      { label: "Early Treatment", href: "/for-patients/about-orthodontics/early-treatment" },
      { label: "Compare Treatments", href: "/for-patients/about-orthodontics/compare-treatments" },
      { label: "Benefits & Risks", href: "/for-patients/about-orthodontics/benefits-risks" },
      { label: "Patient Resources", href: "/for-patients/patient-resources" },
      { label: "Getting Started - Invisalign", href: "/for-patients/patient-resources/getting-started-invisalign" },
      { label: "Getting Started - Braces", href: "/for-patients/patient-resources/getting-started-braces" },
      { label: "What to Eat", href: "/for-patients/patient-resources/what-to-eat" },
      { label: "Emergency Care", href: "/for-patients/patient-resources/emergency-care" },
      { label: "Retention", href: "/for-patients/patient-resources/retention" },
      { label: "Refer a Friend", href: "/for-patients/patient-resources/refer-a-friend" },
      { label: "Blog", href: "/for-patients/blog" },
    ],
  },
  {
    label: "About Us",
    children: [
      { label: "About Overview", href: "/about-us" },
      { label: "Meet Our Doctor", href: "/about-us/meet-our-doctor" },
      { label: "Meet Our Staff", href: "/about-us/meet-our-staff" },
      { label: "Why Choose Us", href: "/about-us/why-choose-us" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Contact Overview", href: "/contact" },
      { label: "Oxford", href: "/contact/oxford" },
      { label: "Leigh-on-Sea", href: "/contact/leigh-on-sea" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf9]/95 backdrop-blur-sm shadow-sm">
      {/* Top bar with phone */}
      <div className="hidden md:block bg-[#1a4d3e] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:01865248816" className="flex items-center gap-2 hover:text-[#c9707d] transition-colors">
              <Phone className="h-4 w-4" />
              <span>01865 248816</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/for-patients/patient-resources/refer-a-friend" className="hover:text-[#c9707d] transition-colors">
              Referrals
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3">
              <Smile className="h-9 w-9 text-[#1a4d3e]" />
              <span className="text-2xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
                Lora Ortho
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#1a4d3e]/80 hover:text-[#1a4d3e] transition-colors font-light py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-[#1a4d3e]/80 hover:text-[#1a4d3e] transition-colors font-light py-2">
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-[#1a4d3e]/10 py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[#1a4d3e]/80 hover:text-[#1a4d3e] hover:bg-[#f5eeeb] transition-colors"
                        >
                          <span className="font-medium">{child.label}</span>
                          {child.description && (
                            <span className="block text-xs text-[#1a4d3e]/60 mt-0.5">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              href="/book-consultation"
              className="bg-[#c9707d] text-white px-6 py-2.5 rounded-full hover:bg-[#b85c69] transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:01865248816" className="text-[#1a4d3e]">
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="p-2 text-[#1a4d3e]"
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
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#fdfbf9] border-t border-[#1a4d3e]/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-3 text-[#1a4d3e]/80 hover:text-[#1a4d3e]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 text-[#1a4d3e]/80 hover:text-[#1a4d3e]"
                        onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openAccordion === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openAccordion === item.label && item.children && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l-2 border-[#c9707d]/30 ml-2 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block py-2 text-sm text-[#1a4d3e]/70 hover:text-[#1a4d3e]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <Link
                href="/book-consultation"
                className="block bg-[#c9707d] text-white px-5 py-3 rounded-full text-center hover:bg-[#b85c69] mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
