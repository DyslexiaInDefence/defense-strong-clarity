// FAQ library data for the staged /support/faq page, kept separate so tests can check it.
// Independent of src/data/faqCategories.ts, which feeds the live /about/faq page.
// Audience labels, filter buttons and ?for= parsing are shared with the Guidance library.
import type { GuideAudience, GuideFilter } from "./guidanceLibrary";

export type FaqItem = { question: string; answer: string; to: string; audience: GuideAudience };

const NOT_A_BAR = "Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met.";

export const FAQ_ITEMS: FaqItem[] = [
  { audience: "joining", question: "Can you join the Army with dyslexia?", answer: `${NOT_A_BAR} The guide explains what dyslexia does and doesn't change when you apply.`, to: "/insights/can-you-join-army-with-dyslexia-uk" },
  { audience: "joining", question: "Can you join the Royal Navy with dyslexia?", answer: `${NOT_A_BAR} The guide explains what to expect in the Royal Navy.`, to: "/insights/can-you-join-navy-with-dyslexia-uk" },
  { audience: "joining", question: "Can you join the RAF with dyslexia?", answer: `${NOT_A_BAR} The guide explains what to expect in the RAF.`, to: "/insights/can-you-join-raf-with-dyslexia-uk" },
  { audience: "joining", question: "Do I need to declare dyslexia when joining?", answer: "You are not screened for dyslexia during recruitment. Ask your recruiter what the application asks, and tell your chain of command if it could affect your training or work.", to: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" },
  { audience: "joining", question: "Is dyslexia a barrier in the military?", answer: `${NOT_A_BAR} You will still need to meet the standards for your role, with feasible support where it is available.`, to: "/insights/is-dyslexia-a-barrier-in-the-military-uk" },
  { audience: "serving", question: "What support is available for dyslexia in the military?", answer: "The Defence Dyslexia Network, volunteer ambassadors, and your service's education and learning support teams. Support can vary by service, unit and local leadership.", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk" },
  { audience: "serving", question: "What happens if dyslexia is identified during service?", answer: "You can ask your SpLD Advisor, through your chain of command and your service's education or learning support team, about screening and assessment. Support after that varies by service.", to: "/insights/what-happens-if-dyslexia-is-identified-during-service-uk" },
  { audience: "serving", question: "What is neurodiversity in the MOD?", answer: "The guide explains how Defence is approaching neurodiversity across military and civil service roles.", to: "/insights/neurodiversity-in-the-mod-uk" },
  { audience: "leaving", question: "What changes when I leave: JSP 822 or the Equality Act?", answer: "Your support moves from Defence policy (JSP 822) to the Equality Act 2010, which applies to civilian employment. Know the difference before you go.", to: "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk" },
  { audience: "supporting", question: "I manage or train someone with dyslexia. Where do I start?", answer: "Start by asking the person what helps them, and listen. Often the changes are small: clearer written instructions, information broken into smaller steps, or a little more time to process it. Under JSP 822, support in Service is based on what is feasible for the role.", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk" },
];

/** "Everyone" questions always show, whichever filter is selected. */
export function filterFaqs(items: FaqItem[], filter: GuideFilter): FaqItem[] {
  if (filter === "all") return items;
  return items.filter(item => item.audience === "everyone" || item.audience === filter);
}
