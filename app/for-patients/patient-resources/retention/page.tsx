"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, AlertCircle, Lock } from "lucide-react";

export default function RetentionPage() {
  const retainerTypes = [
    {
      title: "Fixed Retainers",
      description: "A thin wire bonded to the back of your front teeth, invisible from the front.",
      pros: ["Always working", "No compliance needed", "Invisible"],
      cons: ["Needs careful cleaning", "Can break if eating hard foods"],
    },
    {
      title: "Removable Retainers",
      description: "Clear plastic trays similar to Invisalign that you wear at night.",
      pros: ["Easy to clean", "Can be removed for eating", "Comfortable"],
      cons: ["Must remember to wear them", "Can be lost"],
    },
  ];

  const careInstructions = [
    "Clean your retainer every day with a soft brush",
    "Rinse with cold water - hot water can warp plastic",
    "Store in the case when not wearing",
    "Keep away from pets - they love to chew them!",
    "Bring your retainer to check-up appointments",
    "Replace when it becomes worn or damaged",
  ];

  const wearSchedule = [
    { period: "First 3 months", schedule: "22 hours per day" },
    { period: "3-6 months", schedule: "Every night (12+ hours)" },
    { period: "6-12 months", schedule: "Every night" },
    { period: "After 1 year", schedule: "A few nights per week (minimum)" },
  ];

  return (
    <>
      <PageHero
        title="Retention"
        subtitle="Your retainer is essential for keeping your teeth in their new positions. Without proper retention, teeth will naturally shift back toward their original positions."
        breadcrumbs={[
          { label: "For Patients", href: "/for-patients" },
          { label: "Patient Resources", href: "/for-patients/patient-resources" },
          { label: "Retention", href: "/for-patients/patient-resources/retention" },
        ]}
      />

      {/* Why Retention Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WHY IT MATTERS</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Protect Your Investment
              </h2>
              <p className="text-[#1a4d3e]/70 mb-6 leading-relaxed font-light text-lg">
                After months or years of orthodontic treatment, retention is the final (and lifelong) phase. Your teeth have memory and will try to move back to their original positions if not held in place.
              </p>
              <p className="text-[#1a4d3e]/70 mb-8 leading-relaxed font-light text-lg">
                Wearing your retainer as directed is the only way to maintain your beautiful new smile for life. Think of it as protecting your investment in your smile!
              </p>
              <div className="bg-[#c9707d]/10 rounded-xl p-5 border border-[#c9707d]/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-[#c9707d] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1a4d3e]">Important</p>
                    <p className="text-sm text-[#1a4d3e]/70">
                      If you stop wearing your retainer, your teeth will move. Most patients need to wear retainers for life to maintain their results.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a4d3e] to-[#2d6a4f] flex items-center justify-center shadow-2xl">
                <Lock className="h-40 w-40 text-white/90" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retainer Types */}
      <section className="py-20 bg-[#f5eeeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9707d] font-medium mb-3 tracking-wide">TYPES</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a4d3e] font-[family-name:var(--font-cormorant)]">
              Retainer Options
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {retainerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-[#1a4d3e] mb-3 font-[family-name:var(--font-cormorant)]">
                  {type.title}
                </h3>
                <p className="text-[#1a4d3e]/70 mb-6 font-light">{type.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-[#1a4d3e] mb-2">Pros</p>
                    {type.pros.map((pro, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#1a4d3e]/70">
                        <CheckCircle className="h-4 w-4 text-[#1a4d3e]" />
                        {pro}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-[#1a4d3e] mb-2">Cons</p>
                    {type.cons.map((con, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#1a4d3e]/70">
                        <AlertCircle className="h-4 w-4 text-[#c9707d]" />
                        {con}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wear Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">WEAR SCHEDULE</p>
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                How Often Should I Wear It?
              </h2>
              <div className="space-y-4">
                {wearSchedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-[#f5eeeb] rounded-lg p-4">
                    <span className="text-[#1a4d3e] font-medium">{item.period}</span>
                    <span className="text-[#1a4d3e]/70">{item.schedule}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[#c9707d] font-medium mb-3 tracking-wide">CARE</p>
              <h2 className="text-2xl font-semibold text-[#1a4d3e] mb-6 font-[family-name:var(--font-cormorant)]">
                Caring for Your Retainer
              </h2>
              <div className="space-y-3">
                {careInstructions.map((instruction, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c9707d] flex-shrink-0" />
                    <span className="text-[#1a4d3e]/80">{instruction}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Replacement Retainer?"
        subtitle="If your retainer is lost, broken, or worn out, contact us for a replacement."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
