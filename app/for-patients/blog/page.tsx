"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Tips for a Successful Invisalign Journey",
      excerpt: "Getting the most out of your Invisalign treatment starts with understanding how to wear and care for your aligners properly.",
      category: "Tips & Advice",
      date: "15 Jan 2026",
      readTime: "5 min read",
    },
    {
      title: "What to Expect at Your First Orthodontic Appointment",
      excerpt: "Nervous about your first visit? Here's everything you need to know about what happens during your initial consultation.",
      category: "Getting Started",
      date: "10 Jan 2026",
      readTime: "4 min read",
    },
    {
      title: "Foods to Avoid with Braces",
      excerpt: "Protect your braces and your smile by knowing which foods to avoid and which are safe to enjoy during treatment.",
      category: "Patient Care",
      date: "5 Jan 2026",
      readTime: "3 min read",
    },
    {
      title: "The Importance of Retention After Orthodontic Treatment",
      excerpt: "Your treatment doesn't end when your braces come off. Learn why retainers are essential for maintaining your beautiful new smile.",
      category: "Aftercare",
      date: "1 Jan 2026",
      readTime: "4 min read",
    },
    {
      title: "Braces vs Invisalign: Which is Right for You?",
      excerpt: "Comparing the two most popular orthodontic treatments to help you make an informed decision about your smile journey.",
      category: "Treatment Options",
      date: "28 Dec 2025",
      readTime: "6 min read",
    },
    {
      title: "When Should My Child See an Orthodontist?",
      excerpt: "Early orthodontic evaluation can help identify potential issues before they become more serious. Here's when to book that first appointment.",
      category: "Children's Orthodontics",
      date: "20 Dec 2025",
      readTime: "4 min read",
    },
  ];

  const categories = [
    "All Posts",
    "Tips & Advice",
    "Getting Started",
    "Patient Care",
    "Treatment Options",
    "Children's Orthodontics",
  ];

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Stay up to date with the latest orthodontic news, tips, and advice from our expert team."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Blog", href: "/for-patients/blog" },
        ]}
      />

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    variants={fadeInUp}
                    className="bg-[#f5eeeb] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 text-sm text-[#1a4d3e]/60 mb-4">
                      <span className="bg-[#1a4d3e] text-white px-3 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                      {post.title}
                    </h2>
                    <p className="text-[#1a4d3e]/70 mb-4 font-light">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[#c9707d] font-medium cursor-pointer hover:text-[#b85c69] transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.article>
                ))}
              </motion.div>

              {/* Pagination Placeholder */}
              <div className="flex justify-center mt-12 gap-2">
                <span className="w-10 h-10 bg-[#1a4d3e] text-white rounded-full flex items-center justify-center">1</span>
                <span className="w-10 h-10 bg-[#f5eeeb] text-[#1a4d3e] rounded-full flex items-center justify-center hover:bg-[#1a4d3e] hover:text-white cursor-pointer transition-colors">2</span>
                <span className="w-10 h-10 bg-[#f5eeeb] text-[#1a4d3e] rounded-full flex items-center justify-center hover:bg-[#1a4d3e] hover:text-white cursor-pointer transition-colors">3</span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-[#f5eeeb] rounded-2xl p-6 sticky top-32">
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-4 font-[family-name:var(--font-cormorant)]">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        index === 0
                          ? "bg-[#1a4d3e] text-white"
                          : "text-[#1a4d3e]/70 hover:bg-[#1a4d3e]/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[#1a4d3e]/10">
                  <h3 className="text-xl font-semibold text-[#1a4d3e] mb-4 font-[family-name:var(--font-cormorant)]">
                    Need Help?
                  </h3>
                  <p className="text-[#1a4d3e]/70 text-sm mb-4 font-light">
                    Have a question that's not covered in our blog? Get in touch with our friendly team.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#c9707d] font-medium hover:text-[#b85c69] transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Smile Journey?"
        subtitle="Book a free consultation and take the first step toward your dream smile."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
