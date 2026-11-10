// Guidance library data and filter rules, kept separate so tests can check them.

export type GuideAudience = "everyone" | "joining" | "serving" | "leaving" | "supporting";
export type GuideFilter = "all" | Exclude<GuideAudience, "everyone">;

export type Guide = { title: string; description: string; to: string; audience: GuideAudience };

export const AUDIENCE_LABELS: Record<GuideAudience, string> = {
  everyone: "Everyone",
  joining: "Thinking of joining",
  serving: "Serving now",
  leaving: "Leaving or left service",
  supporting: "Supporting someone",
};

export const GUIDE_FILTERS: { value: GuideFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "joining", label: "Thinking of joining" },
  { value: "serving", label: "Serving now" },
  { value: "leaving", label: "Leaving or left service" },
  { value: "supporting", label: "Supporting someone" },
];

const SAME_AS_NAVY = "Specific learning difficulties are not in themselves a bar to recruitment or Service if the required standards are met.";

export const GUIDES: Guide[] = [
  { audience: "everyone", title: "Understanding how you think and learn", to: "/support/how-you-think-and-learn", description: "What dyslexia is, how it shows up for you, what screening and assessment can offer, and where to go next. An explanation, not a label." },
  { audience: "joining", title: "Can you join the Army with dyslexia?", to: "/insights/can-you-join-army-with-dyslexia-uk", description: "What dyslexia does and doesn't change when you apply, and what to expect." },
  { audience: "joining", title: "Can you join the Royal Navy with dyslexia?", to: "/insights/can-you-join-navy-with-dyslexia-uk", description: SAME_AS_NAVY },
  { audience: "joining", title: "Can you join the RAF with dyslexia?", to: "/insights/can-you-join-raf-with-dyslexia-uk", description: SAME_AS_NAVY },
  { audience: "joining", title: "Do I need to declare dyslexia when joining?", to: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk", description: "You are not screened for dyslexia during recruitment, so ask your recruiter what the application asks, and tell your chain of command if it could affect your training or work." },
  { audience: "joining", title: "Is dyslexia a barrier in the military?", to: "/insights/is-dyslexia-a-barrier-in-the-military-uk", description: "The straight answer, and the standards you will still need to meet." },
  { audience: "serving", title: "What support is available?", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk", description: "The Defence Dyslexia Network, volunteer ambassadors, and your service's education and learning support teams." },
  { audience: "serving", title: "What happens if dyslexia is identified during service?", to: "/insights/what-happens-if-dyslexia-is-identified-during-service-uk", description: "Who to ask about screening and assessment, and what follows." },
  { audience: "serving", title: "Neurodiversity in the MOD", to: "/insights/neurodiversity-in-the-mod-uk", description: "How Defence is thinking about neurodiversity across military and civil service roles." },
  { audience: "leaving", title: "JSP 822 and the Equality Act: what changes when you leave", to: "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk", description: "Support moves from Defence policy to employment law. Know the difference before you go." },
  { audience: "supporting", title: "Supporting someone in Service", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk", description: "An overview of peer networks, education staff and feasible support in Service, which can vary by service, unit and local leadership." },
];

const FILTER_VALUES = new Set<string>(GUIDE_FILTERS.map(f => f.value));

/** Unknown or missing ?for= values fall back to All. */
export function parseGuideFilter(value: unknown): GuideFilter {
  return typeof value === "string" && value !== "all" && FILTER_VALUES.has(value) ? (value as GuideFilter) : "all";
}

/** "Everyone" guides always show, whichever filter is selected. */
export function filterGuides(guides: Guide[], filter: GuideFilter): Guide[] {
  if (filter === "all") return guides;
  return guides.filter(g => g.audience === "everyone" || g.audience === filter);
}
