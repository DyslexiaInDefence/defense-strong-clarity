// BDA assessment routes shown on the Standard Learning Credits page. Independent assessors with their own forms live in that page's SLC_COST_OPTIONS.
export interface AssessmentRoute {
  label: string;
  provider: string;
  description?: string;
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
