import { UserPlus, Shield, LogOut } from "lucide-react";
import type { AudienceIntent } from "@/components/AudienceRouter";

export type FaqCategory = {
  id: AudienceIntent;
  title: string;
  blurb: string;
  icon: typeof UserPlus;
  items: Array<{ question: string; answer: string; link: string }>;
};

export const intentCategories: FaqCategory[] = [
  {
    id: "joining",
    title: "Thinking of joining",
    blurb: "Eligibility, recruitment and what to expect before you sign up.",
    icon: UserPlus,
    items: [
      {
        question: "Can you join the Army with dyslexia (UK)?",
        answer: "Yes. Dyslexia is not a barrier to joining the British Army. You aren't screened for it during recruitment, and dyslexic personnel serve at every rank.",
        link: "/insights/can-you-join-army-with-dyslexia-uk",
      },
      {
        question: "Can you join the RAF with dyslexia (UK)?",
        answer: "Yes. The RAF welcomes dyslexic applicants across all branches, including engineering, logistics and aircrew. Reasonable adjustments are available throughout your career.",
        link: "/insights/can-you-join-raf-with-dyslexia-uk",
      },
      {
        question: "Can you join the Royal Navy with dyslexia (UK)?",
        answer: "Yes. Dyslexia does not prevent you from joining the Royal Navy. Dyslexic sailors, Royal Marines and officers serve at every rank.",
        link: "/insights/can-you-join-navy-with-dyslexia-uk",
      },
      {
        question: "Do I need to declare dyslexia when joining the military (UK)?",
        answer: "You're not legally required to declare. But declaring early unlocks reasonable adjustments during selection and training — and is almost always the better choice.",
        link: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk",
      },
      {
        question: "Is dyslexia a barrier in the military (UK)?",
        answer: "No. Dyslexic personnel serve at every rank across all three services. If you're considering joining, this is the reassurance most people are looking for.",
        link: "/insights/is-dyslexia-a-barrier-in-the-military-uk",
      },
    ],
  },
  {
    id: "serving",
    title: "Currently serving",
    blurb: "Support, adjustments, policy and what happens day-to-day in service.",
    icon: Shield,
    items: [
      {
        question: "What support is available for dyslexia in the military (UK)?",
        answer: "Defence Dyslexia Network (2,000+ members), 240+ volunteer ambassadors, service education and learning support provision, internal forums, and workplace adjustments — across all three services.",
        link: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk",
      },
      {
        question: "What happens if dyslexia is identified during service?",
        answer: "You can self-refer through your chain of command and your service’s education or learning support provision. Assessment leads to adjustments — extra time on courses, assistive tech and study support. It does not end careers.",
        link: "/insights/what-happens-if-dyslexia-is-identified-during-service-uk",
      },
      {
        question: "Neurodiversity in the MOD (UK)",
        answer: "The MOD recognises neurodiversity as a workforce strength — BDA Bronze recognition, growing networks across military and civil service roles.",
        link: "/insights/neurodiversity-in-the-mod-uk",
      },
    ],
  },
  {
    id: "veteran",
    title: "Leaving service / veteran",
    blurb: "Transition, recognition of in-service assessments and what comes next.",
    icon: LogOut,
    items: [
      {
        question: "JSP 822 vs the Equality Act — what changes when you leave?",
        answer: "Leaving the military shifts your dyslexia rights from JSP 822 (policy-based, internal) to the Equality Act 2010 (legally enforceable in civilian employment). Know the difference before you transition.",
        link: "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk",
      },
    ],
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: intentCategories
    .filter((c) => c.id !== "veteran")
    .flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
};