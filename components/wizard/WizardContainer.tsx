"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepIndicator from "./StepIndicator";
import StepNavigation from "./StepNavigation";

// Step Components
import GateQuestion from "./steps/GateQuestion";
import ContactsSignOff from "./steps/ContactsSignOff";
import LocationsEnquiries from "./steps/LocationsEnquiries";
import GoalsHomepage from "./steps/GoalsHomepage";
import HomepageWireframe from "./steps/HomepageWireframe";
import TreatmentsConsultation from "./steps/TreatmentsConsultation";
import SitemapEditor from "./steps/SitemapEditor";
import type { SitemapNode } from "./steps/SitemapEditor";
import AudienceCompetitors from "./steps/AudienceCompetitors";
import DesignPreferences from "./steps/DesignPreferences";
import StyleSelection from "./steps/StyleSelection";
import BrandAttributes from "./steps/BrandAttributes";
import ColorExploration from "./steps/ColorExploration";
import BrandDesign from "./steps/BrandDesign";
import AssetsContent from "./steps/AssetsContent";
import NewMemberSections from "./steps/NewMemberSections";
import ExistingMemberSections from "./steps/ExistingMemberSections";
import Summary from "./steps/Summary";

export interface LocationData {
  name: string;
  address: string;
  phone: string;
  openingHours: string;
}

export interface WizardData {
  // Q1: Gate Question
  isNewMember: "yes" | "no" | "";

  // CORE-1: Contacts & Sign-Off
  practiceRegion: string;
  practiceName: string;
  practiceUrl: string;
  primaryContact: string;
  primaryEmail: string;
  primaryPhone: string;
  decisionMaker: string;
  otherApprovers: string;
  readyToProceed: "yes" | "no" | "";
  notReadyReason: string;
  goLiveWindow: string;

  // CORE-2: Locations & Enquiries
  locationCount: number;
  locations: LocationData[];
  enquiryEmails: string;
  acceptsReferrals: "yes" | "no" | "";
  referralHandling: string;

  // CORE-3: Goals & Homepage
  primaryGoal: string;
  primaryGoalOther: string;
  topActions: string[];
  topActionsOther: string;
  homepagePriorities: string[];
  homepagePrioritiesOther: string;

  // CORE-4: Treatments & Consultation
  treatments: string[];
  otherAlignerBrands: string;
  treatmentsOther: string;
  treatmentsChanged: string;
  treatmentsChangedDetails: string;
  consultationProcess: string;
  consultationFree: string;
  virtualConsultations: string;
  virtualConsultationDetails: string;
  virtualConsultationFree: string;
  keyUSPs: string;
  paymentOverview: string;

  // CORE-5: Audience & Competitors
  typicalPatient: string;
  desiredPatients: string;
  topAreas: string;
  competitors: string;

  // Homepage wireframe
  homepageWireframe: string[];
  wireframeApproved: boolean;

  // Summary confirmation
  summaryConfirmed: boolean;

  // Sitemap (refresh flow)
  sitemapPages: SitemapNode[];
  sitemapApproved: boolean;

  // Design preferences
  colourSchemePreference: string;
  designLikes: string;
  designDislikes: string;
  designInspiration: string;
  designAvoid: string;

  // Design Styles (restored)
  selectedStyles: string[];

  // Design direction choices
  designChoices: Record<string, string>;

  // Color Exploration (restored)
  selectedPalettes: string[];
  customColors: string[];

  // CORE-6: Brand & Design
  logoUpdated: string;
  logoFiles: string[];
  aestheticKeywords: string;
  firstImpression: string;
  contentStyle: number;
  contentStyleChoice: string;
  toneOfVoice: string[];
  wordsToAvoid: string;

  // CORE-7: Assets & Content
  hasAssets: string;
  assetsFolderId: string;
  assetsFolderUrl: string;
  provideStaffImagery: string;
  providePatientImagery: string;
  providePracticePhotos: string;
  hasTestimonials: "yes" | "no" | "";
  testimonialsGuidance: string;

  // NEW MEMBER: Starting Point
  hasExistingWebsite: string;
  currentWebsiteLikes: string;
  currentWebsiteAvoid: string;
  carryOverPages: string;

  // NEW MEMBER: Brand Materials
  hasBrandGuidelines: string;
  brandGuidelinesFiles: string[];

  // EXISTING MEMBER: What's Changed
  whatHasChanged: string[];
  changedDetails: string;

  // EXISTING MEMBER: Site Feedback
  currentSiteLikes: string;
  currentSiteDislikes: string;
  pagesRewriteRemoveAdd: string;

  // EXISTING MEMBER: Visual Direction
  visualDirection: string;
}

export const initialData: WizardData = {
  isNewMember: "",
  practiceRegion: "",
  practiceName: "",
  practiceUrl: "",
  primaryContact: "",
  primaryEmail: "",
  primaryPhone: "",
  decisionMaker: "",
  otherApprovers: "",
  readyToProceed: "",
  notReadyReason: "",
  goLiveWindow: "",
  locationCount: 1,
  locations: [{ name: "", address: "", phone: "", openingHours: "" }],
  enquiryEmails: "",
  acceptsReferrals: "",
  referralHandling: "",
  primaryGoal: "",
  primaryGoalOther: "",
  topActions: [],
  topActionsOther: "",
  homepagePriorities: [],
  homepagePrioritiesOther: "",
  treatments: [],
  otherAlignerBrands: "",
  treatmentsOther: "",
  treatmentsChanged: "",
  treatmentsChangedDetails: "",
  consultationProcess: "",
  consultationFree: "",
  virtualConsultations: "",
  virtualConsultationDetails: "",
  virtualConsultationFree: "",
  keyUSPs: "",
  paymentOverview: "",
  typicalPatient: "",
  desiredPatients: "",
  topAreas: "",
  competitors: "",
  homepageWireframe: [],
  wireframeApproved: false,
  summaryConfirmed: false,
  colourSchemePreference: "",
  designLikes: "",
  designDislikes: "",
  designInspiration: "",
  designAvoid: "",
  sitemapPages: [],
  sitemapApproved: false,
  selectedStyles: [],
  designChoices: {},
  selectedPalettes: [],
  customColors: [],
  logoUpdated: "",
  logoFiles: [],
  aestheticKeywords: "",
  firstImpression: "",
  contentStyle: 5,
  contentStyleChoice: "",
  toneOfVoice: [],
  wordsToAvoid: "",
  hasAssets: "",
  assetsFolderId: "",
  assetsFolderUrl: "",
  provideStaffImagery: "",
  providePatientImagery: "",
  providePracticePhotos: "",
  hasTestimonials: "",
  testimonialsGuidance: "",
  hasExistingWebsite: "",
  currentWebsiteLikes: "",
  currentWebsiteAvoid: "",
  carryOverPages: "",
  hasBrandGuidelines: "",
  brandGuidelinesFiles: [],
  whatHasChanged: [],
  changedDetails: "",
  currentSiteLikes: "",
  currentSiteDislikes: "",
  pagesRewriteRemoveAdd: "",
  visualDirection: "",
};

const STORAGE_KEY = "tio-kickoff-data";

// All steps - 15 total, but some are skipped depending on member type:
// - Existing members skip step 3 (Locations - new only)
const allSteps = [
  { id: 1, title: "Get started", icon: "Play" },
  { id: 2, title: "Contacts", icon: "Users" },
  { id: 3, title: "Locations", icon: "MapPin" },
  { id: 4, title: "Goals", icon: "Target" },
  { id: 5, title: "Layout", icon: "Monitor" },
  { id: 6, title: "Treatments", icon: "Heart" },
  { id: 7, title: "Sitemap", icon: "FileText" },
  { id: 8, title: "Audience", icon: "Eye" },
  { id: 9, title: "Design", icon: "Paintbrush" },
  { id: 10, title: "Design styles", icon: "Layout" },
  { id: 11, title: "Brand attributes", icon: "Sliders" },
  { id: 12, title: "Colours", icon: "Palette" },
  { id: 13, title: "Brand & tone", icon: "Type" },
  { id: 14, title: "Assets", icon: "Image" },
  { id: 15, title: "Review", icon: "ClipboardCheck" },
];

const TOTAL_STEPS = 15;

// ---------------------------------------------------------------------------
// Step validation
// ---------------------------------------------------------------------------

function validateStep(step: number, data: WizardData): string[] {
  const errors: string[] = [];
  const isNewBuild = data.isNewMember === "yes";

  switch (step) {
    case 1: // Gate question
      if (!data.isNewMember) errors.push("Please select whether this is a new build or refresh");
      break;

    case 2: // Contacts
      if (!data.practiceRegion) errors.push("Region is required");
      if (!data.practiceName.trim()) errors.push("Practice name is required");
      if (!data.practiceUrl.trim()) errors.push("Practice URL is required");
      if (!data.primaryContact.trim()) errors.push("Primary contact is required");
      if (!data.primaryEmail.trim()) errors.push("Primary contact email is required");
      break;

    case 3: // Locations (new builds only)
      if (isNewBuild) {
        if (!data.locationCount || data.locationCount < 1) errors.push("Number of locations is required");
        for (let i = 0; i < data.locations.length; i++) {
          const loc = data.locations[i];
          if (!loc.name.trim()) errors.push(`Location ${i + 1}: name is required`);
          if (!loc.address.trim()) errors.push(`Location ${i + 1}: address is required`);
          if (!loc.phone.trim()) errors.push(`Location ${i + 1}: phone number is required`);
          if (!loc.openingHours.trim()) errors.push(`Location ${i + 1}: opening hours are required`);
        }
        if (!data.enquiryEmails.trim()) errors.push("Enquiry email address(es) required");
      }
      break;

    case 4: // Goals & homepage
      if (!data.primaryGoal) errors.push("Primary goal is required");
      if (data.primaryGoal === "other" && !data.primaryGoalOther.trim()) errors.push("Please specify your primary goal");
      if (!data.topActions || data.topActions.length === 0) errors.push("Please select at least 1 top action");
      if (!data.homepagePriorities || data.homepagePriorities.length === 0) errors.push("Please select at least 1 homepage priority");
      break;

    case 5: // Homepage wireframe
      if (!data.wireframeApproved) errors.push("Please confirm you're happy with the homepage layout");
      break;

    case 6: // Treatments
      if (isNewBuild) {
        if (!data.treatments || data.treatments.length === 0) errors.push("Please select at least 1 treatment");
        if (data.treatments?.includes("other") && !data.treatmentsOther.trim()) errors.push("Please list your other treatments");
        if (!data.consultationProcess.trim()) errors.push("Consultation process is required");
        if (!data.consultationFree) errors.push("Please indicate if the consultation is free");
        if (!data.virtualConsultations) errors.push("Please indicate if you offer virtual consultations");
        if (data.virtualConsultations === "yes") {
          if (!data.virtualConsultationDetails?.trim()) errors.push("Virtual consultation details are required");
          if (!data.virtualConsultationFree) errors.push("Please indicate if the virtual consultation is free");
        }
        if (!data.keyUSPs.trim()) errors.push("Key USPs are required");
        if (!data.paymentOverview.trim()) errors.push("Payment/finance overview is required");
      } else {
        if (!data.treatmentsChanged) errors.push("Please indicate if treatments have changed");
        if (data.treatmentsChanged === "yes" && !data.treatmentsChangedDetails?.trim()) errors.push("Please describe what's changed");
      }
      break;

    case 7: // Sitemap
      if (!data.sitemapApproved) errors.push("Please confirm you're happy with the sitemap");
      break;

    case 8: // Audience
      if (!data.typicalPatient.trim()) errors.push("Typical patient description is required");
      if (!data.topAreas.trim()) errors.push("Top areas are required");
      break;

    case 9: // Brand & design preferences
      if (!isNewBuild && !data.logoUpdated) errors.push("Please indicate if your logo has been updated");
      if (!data.hasBrandGuidelines) errors.push("Please indicate if you have brand guidelines");
      if (!data.colourSchemePreference) errors.push("Colour scheme preference is required");
      if (!data.aestheticKeywords?.trim()) errors.push("Aesthetic keywords are required");
      if (!data.firstImpression?.trim()) errors.push("First impression is required");
      break;

    case 10: // Design styles
      if (!data.selectedStyles || data.selectedStyles.length === 0) errors.push("Please select at least 1 design style");
      break;

    case 11: // Brand persona
      if (!data.designChoices?.personas || data.designChoices.personas.split(",").filter(Boolean).length === 0) {
        errors.push("Please select at least 1 brand persona");
      }
      break;

    case 12: // Colours
      if ((!data.selectedPalettes || data.selectedPalettes.length === 0) && (!data.customColors || data.customColors.length === 0)) {
        errors.push("Please select at least 1 colour palette or add custom colours");
      }
      break;

    case 13: // Content style & tone
      if (!data.contentStyleChoice) errors.push("Please select a content writing style");
      if (!data.toneOfVoice || data.toneOfVoice.length === 0) errors.push("Please select at least 1 tone of voice");
      break;

    case 14: // Assets
      if (!data.hasAssets) errors.push("Please indicate if you have assets to share");
      if (!data.hasTestimonials) errors.push("Please indicate if you have testimonials");
      if (data.hasTestimonials === "yes" && !data.testimonialsGuidance.trim()) errors.push("Please provide testimonial guidance");
      break;

    case 15: // Summary
      if (!data.summaryConfirmed) errors.push("Please confirm you're happy to proceed");
      break;
  }

  return errors;
}

export default function WizardContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
      } catch {
        // Invalid data, use initial
      }
    }
  }, []);

  // Save to localStorage on data change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = useCallback((updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  }, []);

  // Check if step should be skipped based on member type
  const shouldSkipStep = (step: number) => {
    // Existing members skip step 3 (Locations & Enquiries)
    if (data.isNewMember === "no" && step === 3) return true;
    return false;
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= TOTAL_STEPS && !shouldSkipStep(step)) {
      setValidationErrors([]);
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    const errors = validateStep(currentStep, data);
    if (errors.length > 0) {
      setValidationErrors(errors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setValidationErrors([]);
    if (currentStep < TOTAL_STEPS) {
      let nextStep = currentStep + 1;
      while (nextStep <= TOTAL_STEPS && shouldSkipStep(nextStep)) {
        nextStep++;
      }
      if (nextStep <= TOTAL_STEPS) setCurrentStep(nextStep);
    }
  };

  const handlePrevious = () => {
    setValidationErrors([]);
    if (currentStep > 1) {
      let prevStep = currentStep - 1;
      while (prevStep >= 1 && shouldSkipStep(prevStep)) {
        prevStep--;
      }
      if (prevStep >= 1) setCurrentStep(prevStep);
    }
  };

  const handleSubmit = () => {
    const errors = validateStep(currentStep, data);
    if (errors.length > 0) {
      setValidationErrors(errors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setValidationErrors([]);
    console.log("Submitting kick-off form data:", data);
    setIsSubmitted(true);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleReset = () => {
    setData(initialData);
    setCurrentStep(1);
    setIsSubmitted(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Thanks — we&apos;ve received your responses!
          </h2>
          <p className="text-text-muted mb-8">
            We&apos;ll review everything ahead of your kick-off call and come prepared
            with recommendations and next steps.
          </p>
          <button
            onClick={handleReset}
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light transition-colors font-medium"
          >
            Start another form
          </button>
        </motion.div>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <GateQuestion data={data} updateData={updateData} />;
      case 2:
        return <ContactsSignOff data={data} updateData={updateData} />;
      case 3:
        return <LocationsEnquiries data={data} updateData={updateData} />;
      case 4:
        return <GoalsHomepage data={data} updateData={updateData} />;
      case 5:
        return <HomepageWireframe data={data} updateData={updateData} />;
      case 6:
        return <TreatmentsConsultation data={data} updateData={updateData} />;
      case 7:
        return <SitemapEditor data={data} updateData={updateData} />;
      case 8:
        return <AudienceCompetitors data={data} updateData={updateData} />;
      case 9:
        return <DesignPreferences data={data} updateData={updateData} />;
      case 10:
        return <StyleSelection data={data} updateData={updateData} />;
      case 11:
        return <BrandAttributes data={data} updateData={updateData} />;
      case 12:
        return <ColorExploration data={data} updateData={updateData} />;
      case 13:
        return <BrandDesign data={data} updateData={updateData} />;
      case 14:
        return <AssetsContent data={data} updateData={updateData} />;
      case 15:
        return <Summary data={data} goToStep={goToStep} updateData={updateData} />;
      default:
        return null;
    }
  };

  // Update steps based on member type
  const steps = allSteps
    .filter((step) => !shouldSkipStep(step.id))
    .map((step) => {
      return step;
    });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={goToStep}
        />

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-secondary/30">
          {/* Validation errors */}
          {validationErrors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
            >
              <p className="text-sm font-medium text-red-800 mb-2">Please complete the following before continuing:</p>
              <ul className="space-y-1">
                {validationErrors.map((error, i) => (
                  <li key={i} className="text-sm text-red-600 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    {error}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <StepNavigation
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
