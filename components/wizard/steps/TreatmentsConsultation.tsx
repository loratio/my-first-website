"use client";

import { WizardData } from "../WizardContainer";
import FormField, { TextInput, TextArea, RadioGroup, CheckboxGroup } from "../ui/FormField";

interface TreatmentsConsultationProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

const treatmentOptions = [
  { value: "invisalign", label: "Invisalign®" },
  { value: "angel-aligner", label: "Angel Aligner" },
  { value: "spark-aligners", label: "Spark Aligners" },
  { value: "metal-braces", label: "Metal braces" },
  { value: "ceramic-braces", label: "Ceramic braces" },
  { value: "lingual-braces", label: "Lingual braces" },
  { value: "lightforce-braces", label: "LightForce braces" },
  { value: "treatment-children", label: "Treatment for children" },
  { value: "treatment-teens", label: "Treatment for teens" },
  { value: "treatment-adults", label: "Treatment for adults" },
  { value: "expanders", label: "Expanders" },
  { value: "retainers", label: "Retainers" },
  { value: "whitening", label: "Teeth whitening" },
  { value: "mouthguards", label: "Mouthguards" },
  { value: "orthognathic", label: "Orthognathic surgery" },
  { value: "nhs-treatment", label: "NHS treatment" },
  { value: "other", label: "Other" },
];

const virtualConsultOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export default function TreatmentsConsultation({ data, updateData }: TreatmentsConsultationProps) {
  const isRefresh = data.isNewMember === "no";

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Treatments &amp; consultation journey
        </h2>
        <p className="text-text-muted">
          {isRefresh
            ? "Let us know if anything has changed with your treatments or services."
            : "Tell us about the services you offer and how you work with patients."}
        </p>
      </div>

      <div className="space-y-6">
        {isRefresh ? (
          <>
            <FormField label="Have your treatments or services changed since your current site went live?" required>
              <RadioGroup
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No — everything is the same" },
                ]}
                value={data.treatmentsChanged || ""}
                onChange={(value) => updateData({ treatmentsChanged: value })}
              />
            </FormField>

            {data.treatmentsChanged === "yes" && (
              <FormField
                label="What&apos;s changed?"
                required
                helperText="List each change on a new line so we can update your site accurately"
              >
                <TextArea
                  value={data.treatmentsChangedDetails || ""}
                  onChange={(value) => updateData({ treatmentsChangedDetails: value })}
                  placeholder={"e.g.\nNo longer offering Invisalign\nNow offering Spark Aligners\nNo longer offering teeth whitening\nAdded early intervention for kids"}
                  rows={6}
                />
              </FormField>
            )}
          </>
        ) : (
          <>
            <FormField label="Which treatments/services should be included?" required helperText="Select all that apply">
              <CheckboxGroup
                options={treatmentOptions}
                selected={data.treatments}
                onChange={(value) => updateData({ treatments: value })}
              />
            </FormField>

            {data.treatments.includes("other") && (
              <FormField label="Please list any other treatments/services" required helperText="One per line so we can add each to your sitemap">
                <TextArea
                  value={data.treatmentsOther}
                  onChange={(value) => updateData({ treatmentsOther: value })}
                  placeholder={"e.g.\nDental monitoring\nLaser treatment\nOral hygiene"}
                  rows={4}
                />
              </FormField>
            )}

            <FormField
              label="Describe your initial consultation process"
              required
              helperText="What happens, who they see, how long it takes"
            >
              <TextArea
                value={data.consultationProcess}
                onChange={(value) => updateData({ consultationProcess: value })}
                placeholder="e.g. Patients are seen by our treatment coordinator for a 30-minute appointment. We take photos and scans, discuss options, and provide a personalised treatment plan..."
                rows={4}
              />
            </FormField>

            <FormField label="Is the initial consultation free?" required>
              <RadioGroup
                options={[
                  { value: "yes", label: "Yes — it's free" },
                  { value: "no", label: "No — there's a fee" },
                ]}
                value={data.consultationFree || ""}
                onChange={(value) => updateData({ consultationFree: value })}
              />
            </FormField>

            <FormField label="Do you offer virtual/remote consultations?" required>
              <RadioGroup
                options={virtualConsultOptions}
                value={data.virtualConsultations}
                onChange={(value) => updateData({ virtualConsultations: value })}
              />
            </FormField>

            {data.virtualConsultations === "yes" && (
              <>
                <FormField
                  label="How does the virtual consultation work?"
                  required
                  helperText="e.g. how do patients request one, is it via Zoom/video call, is it free, how is it booked?"
                >
                  <TextArea
                    value={data.virtualConsultationDetails || ""}
                    onChange={(value) => updateData({ virtualConsultationDetails: value })}
                    placeholder={"e.g. Patients request a virtual consultation via the website. We then call them to book a suitable time. The consultation is done via Zoom and is completely free."}
                    rows={4}
                  />
                </FormField>

                <FormField label="Is the virtual consultation free?" required>
                  <RadioGroup
                    options={[
                      { value: "yes", label: "Yes — it's free" },
                      { value: "no", label: "No — there's a fee" },
                    ]}
                    value={data.virtualConsultationFree || ""}
                    onChange={(value) => updateData({ virtualConsultationFree: value })}
                  />
                </FormField>
              </>
            )}

            <FormField
              label="What are your key USPs?"
              required
              helperText="What should we lean on most?"
            >
              <TextArea
                value={data.keyUSPs}
                onChange={(value) => updateData({ keyUSPs: value })}
                placeholder="e.g. Diamond Invisalign provider, specialist orthodontists only, in-house lab, flexible payment plans, evening appointments..."
                rows={4}
              />
            </FormField>

            <FormField
              label="Payment/finance overview (high-level only)"
              required
              helperText="E.g. 'low deposit options', 'interest-free plans', 'weekly/fortnightly payments', typical timeframes"
            >
              <TextArea
                value={data.paymentOverview}
                onChange={(value) => updateData({ paymentOverview: value })}
                placeholder="e.g. We offer 0% finance over 12 months, low deposits from £199, and monthly payments from £99. Patients can also spread payments over 24 months with a small interest charge..."
                rows={4}
              />
            </FormField>
          </>
        )}
      </div>
    </div>
  );
}
