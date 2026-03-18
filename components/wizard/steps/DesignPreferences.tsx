"use client";

import { WizardData } from "../WizardContainer";
import FormField, { TextInput, TextArea, RadioGroup, FileUpload } from "../ui/FormField";

interface DesignPreferencesProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

export default function DesignPreferences({ data, updateData }: DesignPreferencesProps) {
  const isRefresh = data.isNewMember === "no";

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Brand &amp; design preferences
        </h2>
        <p className="text-text-muted">
          {isRefresh
            ? "Before we explore styles, let\u2019s understand your brand assets and what\u2019s working on your current site."
            : "Before we explore styles, let\u2019s capture your brand assets and understand what you\u2019re looking for."}
        </p>
      </div>

      <div className="space-y-6">
        {/* Logo / branding */}
        {isRefresh ? (
          <>
            <FormField label="Have you recently updated your logo or branding?" required>
              <RadioGroup
                options={[
                  { value: "yes", label: "Yes \u2014 we have a new logo or updated branding" },
                  { value: "no", label: "No \u2014 everything is the same" },
                ]}
                value={data.logoUpdated || ""}
                onChange={(value) => updateData({ logoUpdated: value })}
              />
            </FormField>

            {data.logoUpdated === "yes" && (
              <FormField label="Upload your updated logo files">
                <FileUpload
                  onChange={(files) => {
                    if (files) {
                      const fileNames = Array.from(files).map((f) => f.name);
                      updateData({ logoFiles: fileNames });
                    }
                  }}
                  accept=".png,.jpg,.svg,.eps,.pdf"
                  currentFiles={data.logoFiles}
                />
              </FormField>
            )}
          </>
        ) : (
          <FormField label="Upload your logo files (if available)">
            <FileUpload
              onChange={(files) => {
                if (files) {
                  const fileNames = Array.from(files).map((f) => f.name);
                  updateData({ logoFiles: fileNames });
                }
              }}
              accept=".png,.jpg,.svg,.eps,.pdf"
              currentFiles={data.logoFiles}
            />
          </FormField>
        )}

        {/* Brand guidelines */}
        <FormField label="Do you have brand guidelines (fonts, colours, usage rules)?" required>
          <RadioGroup
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "not-sure", label: "Not sure" },
            ]}
            value={data.hasBrandGuidelines || ""}
            onChange={(value) => updateData({ hasBrandGuidelines: value })}
          />
        </FormField>

        {data.hasBrandGuidelines === "yes" && (
          <FormField label="Upload brand guidelines or documents">
            <FileUpload
              onChange={(files) => {
                if (files) {
                  const fileNames = Array.from(files).map((f) => f.name);
                  updateData({ brandGuidelinesFiles: fileNames });
                }
              }}
              accept=".pdf,.png,.jpg,.svg,.doc,.docx"
              currentFiles={data.brandGuidelinesFiles}
            />
          </FormField>
        )}

        {/* Colour scheme preference */}
        {isRefresh ? (
          <FormField
            label="Do you want to keep the colour scheme on your current site, or are you happy for us to play around as required?"
            required
          >
            <RadioGroup
              options={[
                { value: "keep", label: "Keep the current colour scheme" },
                { value: "open", label: "Happy for you to play around with it" },
                { value: "partial", label: "Keep some elements but open to changes" },
              ]}
              value={data.colourSchemePreference || ""}
              onChange={(value) => updateData({ colourSchemePreference: value })}
            />
          </FormField>
        ) : (
          <FormField
            label="Do you want us to keep the colour scheme from your current website, or are you happy for us to explore new options?"
            required
          >
            <RadioGroup
              options={[
                { value: "keep", label: "Keep the current colour scheme" },
                { value: "open", label: "Happy for you to start fresh" },
                { value: "partial", label: "Keep some elements but open to changes" },
              ]}
              value={data.colourSchemePreference || ""}
              onChange={(value) => updateData({ colourSchemePreference: value })}
            />
          </FormField>
        )}

        {/* Aesthetic keywords */}
        <FormField
          label="Aesthetic keywords for your website"
          required
          helperText="3-8 words that describe the look and feel you're after"
        >
          <TextInput
            value={data.aestheticKeywords || ""}
            onChange={(value) => updateData({ aestheticKeywords: value })}
            placeholder="e.g. clean, modern, welcoming, professional, vibrant"
          />
        </FormField>

        {/* First impression */}
        <FormField
          label="When someone lands on your website, what should they immediately think/feel?"
          required
        >
          <TextArea
            value={data.firstImpression || ""}
            onChange={(value) => updateData({ firstImpression: value })}
            placeholder="e.g. 'This practice looks professional and trustworthy. They clearly know what they're doing, and I feel confident booking a consultation.'"
            rows={4}
          />
        </FormField>

        {/* Current website feedback */}
        <FormField
          label="What elements of your current website are you particularly happy with?"
          helperText="This can be anything from the look and feel, features, or content"
        >
          <TextArea
            value={data.designLikes || ""}
            onChange={(value) => updateData({ designLikes: value })}
            placeholder="e.g. We love the homepage layout, the treatment page designs work really well, the colour scheme feels professional..."
            rows={4}
          />
        </FormField>

        <FormField
          label="What elements of your current website are you NOT happy with?"
          helperText="Design, functionality, content, user experience — anything at all"
        >
          <TextArea
            value={data.designDislikes || ""}
            onChange={(value) => updateData({ designDislikes: value })}
            placeholder="e.g. The mobile experience feels clunky, the blog looks dated, the contact form is hard to find..."
            rows={4}
          />
        </FormField>

        {/* Inspiration & avoidance */}
        <FormField
          label="Are there any websites you've seen that you really like the look of?"
          helperText="Share URLs or describe what you liked about them"
        >
          <TextArea
            value={data.designInspiration || ""}
            onChange={(value) => updateData({ designInspiration: value })}
            placeholder="e.g. We love the look of www.example.com — the clean layout, bold imagery, and how easy it is to navigate..."
            rows={4}
          />
        </FormField>

        <FormField
          label="Is there anything you definitely want to avoid in terms of design?"
          helperText="Styles, colours, layouts, features you don't like"
        >
          <TextArea
            value={data.designAvoid || ""}
            onChange={(value) => updateData({ designAvoid: value })}
            placeholder="e.g. We don't want anything too clinical or cold — it needs to feel welcoming and approachable..."
            rows={4}
          />
        </FormField>
      </div>
    </div>
  );
}
