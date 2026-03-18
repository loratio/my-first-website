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

  // Brand Attributes (restored)
  attributes: {
    geometric: number;
    abstract: number;
    classic: number;
    playful: number;
    simple: number;
  };

  // Color Exploration (restored)
  selectedPalettes: string[];
  customColors: string[];

  // CORE-6: Brand & Design
  logoUpdated: string;
  logoFiles: string[];
  aestheticKeywords: string;
  firstImpression: string;
  contentStyle: number;
  toneOfVoice: string[];
  wordsToAvoid: string;

  // CORE-7: Assets & Content
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
  colourSchemePreference: "",
  designLikes: "",
  designDislikes: "",
  designInspiration: "",
  designAvoid: "",
  sitemapPages: [],
  sitemapApproved: false,
  selectedStyles: [],
  attributes: {
    geometric: 50,
    abstract: 50,
    classic: 50,
    playful: 50,
    simple: 50,
  },
  selectedPalettes: [],
  customColors: [],
  logoUpdated: "",
  logoFiles: [],
  aestheticKeywords: "",
  firstImpression: "",
  contentStyle: 5,
  toneOfVoice: [],
  wordsToAvoid: "",
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
  { id: 15, title: "Your details", icon: "FileText" },
  { id: 16, title: "Review", icon: "ClipboardCheck" },
];

const TOTAL_STEPS = 16;

export default function WizardContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialData);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      let nextStep = currentStep + 1;
      while (nextStep <= TOTAL_STEPS && shouldSkipStep(nextStep)) {
        nextStep++;
      }
      if (nextStep <= TOTAL_STEPS) setCurrentStep(nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      let prevStep = currentStep - 1;
      while (prevStep >= 1 && shouldSkipStep(prevStep)) {
        prevStep--;
      }
      if (prevStep >= 1) setCurrentStep(prevStep);
    }
  };

  const handleSubmit = () => {
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
        return data.isNewMember === "yes"
          ? <NewMemberSections data={data} updateData={updateData} />
          : <ExistingMemberSections data={data} updateData={updateData} />;
      case 16:
        return <Summary data={data} goToStep={goToStep} />;
      default:
        return null;
    }
  };

  // Update steps based on member type
  const steps = allSteps
    .filter((step) => !shouldSkipStep(step.id))
    .map((step) => {
      if (step.id === 15) {
        return {
          ...step,
          title: data.isNewMember === "yes" ? "New member" : data.isNewMember === "no" ? "Existing member" : "Your details",
        };
      }
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
