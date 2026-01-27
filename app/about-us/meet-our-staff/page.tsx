"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { User } from "lucide-react";

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

export default function MeetOurStaffPage() {
  const staff = [
    {
      name: "Emma Johnson",
      role: "Practice Manager",
      description: "Emma ensures everything runs smoothly at Lora Ortho. She's been with us for 10 years and is always happy to help with any questions.",
    },
    {
      name: "Sophie Williams",
      role: "Treatment Coordinator",
      description: "Sophie will guide you through your treatment options and help you understand your payment plans and scheduling.",
    },
    {
      name: "James Taylor",
      role: "Orthodontic Therapist",
      description: "James works alongside Dr. Smith, assisting with adjustments and providing expert care during your appointments.",
    },
    {
      name: "Olivia Brown",
      role: "Dental Nurse",
      description: "Olivia's calm and caring nature puts patients at ease. She assists during procedures and ensures your comfort.",
    },
    {
      name: "Charlotte Davis",
      role: "Receptionist (Oxford)",
      description: "Charlotte is often the first friendly face you'll see at our Oxford practice. She handles bookings and welcomes patients.",
    },
    {
      name: "Lucy Miller",
      role: "Receptionist (Leigh-on-Sea)",
      description: "Lucy manages our Leigh-on-Sea front desk with warmth and efficiency, making every patient feel welcome.",
    },
  ];

  return (
    <>
      <PageHero
        title="Meet Our Staff"
        subtitle="Our dedicated team is committed to making your orthodontic experience positive and comfortable from start to finish."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Meet Our Staff", href: "/about-us/meet-our-staff" },
        ]}
      />

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {staff.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#f5eeeb] rounded-2xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] rounded-full flex items-center justify-center mx-auto mb-5">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-1 font-[family-name:var(--font-cormorant)]">
                  {member.name}
                </h3>
                <p className="text-[#c9707d] text-sm mb-4">{member.role}</p>
                <p className="text-[#1a4d3e]/70 text-sm font-light">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">OUR TEAM VALUES</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
              What Makes Our Team Special
            </h2>
            <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
              Our team is united by a shared commitment to patient care. We believe that a visit to the orthodontist should be a positive experience, and we work hard to ensure you feel comfortable, informed, and supported throughout your treatment journey.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Friendly", "Professional", "Caring", "Dedicated"].map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-5 text-center">
                  <p className="text-[#1a4d3e] font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Come Meet Us"
        subtitle="Book a consultation and experience our welcoming, patient-focused approach firsthand."
        buttonText="Book Consultation"
      />
    </>
  );
}
