"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { Phone, AlertTriangle } from "lucide-react";

export default function EmergencyCarePage() {
  const bracesEmergencies = [
    {
      issue: "Loose Bracket",
      description: "The bracket is still attached to the wire but is loose on the tooth.",
      solution: "Leave it in place if possible. Use orthodontic wax to hold it. Call us to schedule a repair appointment.",
    },
    {
      issue: "Broken Bracket",
      description: "The bracket has completely come off the tooth.",
      solution: "Keep the bracket safe and bring it to your next appointment. If the wire is poking, use wax to cover it.",
    },
    {
      issue: "Poking Wire",
      description: "A wire is sticking out and irritating your cheek or gums.",
      solution: "Use a pencil eraser to push the wire flat against the tooth. Cover with wax. If it can't be moved, use nail clippers to carefully trim it.",
    },
    {
      issue: "Wire Out of Bracket",
      description: "The wire has slipped out of the tube or bracket.",
      solution: "Try to gently reinsert it using tweezers. If unsuccessful, cover the end with wax and call us.",
    },
    {
      issue: "Soreness",
      description: "General discomfort after adjustment or from braces rubbing.",
      solution: "Rinse with warm salt water. Use over-the-counter pain relief. Apply wax to any areas causing irritation.",
    },
  ];

  const alignerEmergencies = [
    {
      issue: "Lost Aligner",
      description: "You've lost your current set of aligners.",
      solution: "Move to your previous set temporarily and call us. We can advise whether to move to the next set or order replacements.",
    },
    {
      issue: "Cracked/Broken Aligner",
      description: "Your aligner is cracked or has broken.",
      solution: "If it's a minor crack, continue wearing it. For major damage, move to previous or next set and contact us.",
    },
    {
      issue: "Aligner Doesn't Fit",
      description: "Your new aligner won't seat properly on your teeth.",
      solution: "Use chewies for 10-15 minutes. If still not fitting, go back to the previous aligner and call us.",
    },
    {
      issue: "Attachment Came Off",
      description: "One of the tooth-colored buttons has fallen off.",
      solution: "This isn't urgent but should be reattached at your next convenient appointment. Continue wearing your aligners.",
    },
  ];

  return (
    <>
      <PageHero
        title="Emergency Care"
        subtitle="Most orthodontic issues can be managed at home until you can see us. Here's how to handle common problems with your braces or aligners."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
          { label: "Emergency Care", href: "/for-patients/patient-resources/emergency-care" },
        ]}
      />

      {/* Emergency Contact */}
      <section className="py-12 bg-[#c9707d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center md:text-left"
          >
            <AlertTriangle className="h-12 w-12" />
            <div>
              <h2 className="text-2xl font-semibold font-[family-name:var(--font-cormorant)]">
                True Dental Emergency?
              </h2>
              <p className="text-white/80">
                For severe pain, trauma, or swelling, please call us immediately or visit A&E.
              </p>
            </div>
            <a
              href="tel:01865248816"
              className="flex items-center gap-2 bg-white text-[#1a4d3e] px-6 py-3 rounded-full font-medium hover:bg-[#f5eeeb] transition-colors"
            >
              <Phone className="h-5 w-5" />
              01865 248816
            </a>
          </motion.div>
        </div>
      </section>

      {/* Braces Emergencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">BRACES</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Common Braces Issues
            </h2>
          </motion.div>

          <div className="space-y-6">
            {bracesEmergencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5eeeb] rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {item.issue}
                </h3>
                <p className="text-[#1a4d3e]/70 mb-3 font-light">{item.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-[#1a4d3e]">What to do:</strong>{" "}
                    <span className="text-[#1a4d3e]/70">{item.solution}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aligner Emergencies */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">ALIGNERS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Common Aligner Issues
            </h2>
          </motion.div>

          <div className="space-y-6">
            {alignerEmergencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-[#1a4d3e] mb-2 font-[family-name:var(--font-cormorant)]">
                  {item.issue}
                </h3>
                <p className="text-[#1a4d3e]/70 mb-3 font-light">{item.description}</p>
                <div className="bg-[#f5eeeb] rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-[#1a4d3e]">What to do:</strong>{" "}
                    <span className="text-[#1a4d3e]/70">{item.solution}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Help?"
        subtitle="If you're unsure about an issue, don't hesitate to call us. We're here to help."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
