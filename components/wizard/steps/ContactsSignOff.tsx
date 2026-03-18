"use client";

import { WizardData } from "../WizardContainer";
import FormField, { TextInput, TextArea } from "../ui/FormField";

interface ContactsSignOffProps {
  data: WizardData;
  updateData: (updates: Partial<WizardData>) => void;
}

export default function ContactsSignOff({ data, updateData }: ContactsSignOffProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Contacts &amp; sign-off
        </h2>
        <p className="text-text-muted">
          Tell us who we&apos;ll be working with and when you&apos;d like to get started.
        </p>
      </div>

      <div className="space-y-5">
        <FormField label="Practice name" required>
          <TextInput
            value={data.practiceName}
            onChange={(value) => updateData({ practiceName: value })}
            placeholder="e.g. Smile Orthodontics"
          />
        </FormField>

        <FormField label="Practice URL" required>
          <TextInput
            type="url"
            value={data.practiceUrl}
            onChange={(value) => updateData({ practiceUrl: value })}
            placeholder="e.g. https://www.smileorthodontics.co.uk"
          />
        </FormField>

        <FormField label="Primary contact (name + role)" required>
          <TextInput
            value={data.primaryContact}
            onChange={(value) => updateData({ primaryContact: value })}
            placeholder="e.g. Dr Sarah Mitchell, Practice Owner"
          />
        </FormField>

        <FormField label="Primary contact email" required>
          <TextInput
            type="email"
            value={data.primaryEmail}
            onChange={(value) => updateData({ primaryEmail: value })}
            placeholder="sarah@smileortho.com"
          />
        </FormField>

        <FormField label="Primary contact phone number">
          <TextInput
            type="tel"
            value={data.primaryPhone}
            onChange={(value) => updateData({ primaryPhone: value })}
            placeholder="+44 7123 456789"
          />
        </FormField>


      </div>
    </div>
  );
}
