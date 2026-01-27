"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

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

export default function OrthodonticProblemsPage() {
  const problems = [
    {
      title: "Crowding",
      description: "When there isn't enough space in your jaw for all your teeth, they can overlap or twist. Crowding can make cleaning difficult and increase the risk of decay.",
    },
    {
      title: "Spacing",
      description: "Gaps between teeth can occur due to missing teeth, small teeth, or a large jaw. While some gaps are purely aesthetic, others can affect your bite and speech.",
    },
    {
      title: "Overbite",
      description: "When the upper front teeth overlap the lower front teeth excessively. A deep overbite can cause wear on teeth and jaw pain.",
    },
    {
      title: "Underbite",
      description: "When the lower teeth protrude past the upper front teeth. This can cause difficulty chewing and speaking, and may lead to jaw problems.",
    },
    {
      title: "Crossbite",
      description: "When some upper teeth sit inside the lower teeth. This can cause uneven wear, gum disease, and bone loss if left untreated.",
    },
    {
      title: "Open Bite",
      description: "When the upper and lower teeth don't meet when biting down. This can affect chewing, speech, and cause TMJ issues.",
    },
    {
      title: "Protruding Teeth",
      description: "Front teeth that stick out are more vulnerable to damage and can affect the appearance of your smile.",
    },
    {
      title: "Misaligned Midline",
      description: "When the center of your upper and lower teeth don't align. This can affect your bite and facial symmetry.",
    },
  ];

  return (
    <>
      <PageHero
        title="Orthodontic Problems"
        subtitle="Learn about the common dental and bite issues that orthodontic treatment can correct. Most people have some form of malocclusion (bad bite) that could benefit from treatment."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "About Orthodontics", href: "/for-patients/about-orthodontics" },
          { label: "Orthodontic Problems", href: "/for-patients/about-orthodontics/orthodontic-problems" },
        ]}
      />

      {/* Problems Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#f5eeeb] rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {problem.title}
                </h3>
                <p className="text-[#1a4d3e]/70 text-sm font-light">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Treat */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHY TREAT?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
              The Importance of Treatment
            </h2>
            <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
              Left untreated, orthodontic problems can lead to a range of issues including tooth decay, gum disease, difficulty chewing, speech problems, and jaw pain. Early intervention can often simplify treatment and produce better results.
            </p>
            <p className="text-[#1a4d3e]/70 leading-relaxed font-light text-lg">
              Beyond the health benefits, orthodontic treatment can dramatically improve your confidence and quality of life. A beautiful smile is something you'll enjoy every day.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Concerned About Your Bite?"
        subtitle="Book a consultation and we'll assess your orthodontic needs and discuss the best treatment options."
        buttonText="Book Consultation"
      />
    </>
  );
}
