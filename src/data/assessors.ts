// Add future approved assessors as new entries here; the section renders from this list.
export interface AssessmentRoute {
  label: string;
  provider: string;
  description?: string;
  href: string;
}

export const assessmentRoutes: AssessmentRoute[] = [
  {
    label: "Dyslexia screening and diagnostic assessment (Adults)",
    provider: "Sarah Hickinbotham, Specialist Dyslexia Teacher Assessor",
    description:
      "Holds an Assessment Practising Certificate (APC). Screening (Level 1 and 2) and full diagnostic assessment, all delivered online. Armed Forces rate available.",
    href: "https://sway.cloud.microsoft/MkhqFDmYV5A3r3SF?ref=Link",
  },
  {
    label: "In Person Dyslexia Assessment Service (Self Funded)",
    provider: "British Dyslexia Association",
    href: "https://www.bdadyslexia.org.uk/services/assessments/diagnostic-assessments-2/start-you-application/in-person-dyslexia-assessment-service-self-funded",
  },
  {
    label: "Remote (Online) Dyslexia Assessment Service (Self Funded)",
    provider: "British Dyslexia Association",
    href: "https://www.bdadyslexia.org.uk/services/assessments/diagnostic-assessments-2/start-you-application/remote-dyslexia-assessment-service-self-funded",
  },
];
