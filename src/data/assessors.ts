// Add future approved assessors as new entries here; the section renders from this list.
export interface AssessmentRoute {
  label: string;
  provider: string;
  href: string;
}

export const assessmentRoutes: AssessmentRoute[] = [
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
