import type { LivedExperienceSnippet } from "@/components/LivedExperienceBlock";

/**
 * Lived experience snippet library.
 *
 * Sources: Symon Smith — BDA Contact Magazine (Sep 2024) and
 * Royal Signals Institute Journal (Winter 2023). Quotes are condensed for
 * web use while preserving the meaning and tone of the original material.
 *
 * Each snippet is reusable across pages. Use the `placements` and `purpose`
 * fields to choose the right snippet for the right page.
 */
export const livedExperienceSnippets: LivedExperienceSnippet[] = [
  {
    id: "not-a-barrier",
    quote:
      "Dyslexia should not be a barrier to a career in the military. You serve if you meet the standards — full stop.",
    context:
      "Direct response to one of the most common questions asked by people considering joining.",
    attribution: "Symon Smith",
    source: "BDA Contact Magazine, 2024",
    tag: "Joining",
    placements: [
      "/insights/can-you-join-army-with-dyslexia-uk",
      "/insights/is-dyslexia-a-barrier-in-the-military-uk",
      "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk",
    ],
    purpose: "Reassurance",
  },
  {
    id: "one-in-five",
    quote:
      "Up to one in five people are dyslexic. That’s nearly a whole squadron in a regiment thinking differently.",
    context:
      "Reframes dyslexia as common and present at scale across the Army — not an exception.",
    attribution: "Symon Smith",
    source: "Royal Signals Institute Journal, Winter 2023",
    tag: "Serving",
    placements: ["/insights", "/why-it-matters", "/about"],
    purpose: "Normalisation",
  },
  {
    id: "army-attracts-dyslexics",
    quote:
      "The Army has always attracted people who didn’t enjoy school. Many of them are undiagnosed dyslexics.",
    context:
      "Explains why dyslexia rates inside the military are higher than in the general population.",
    attribution: "Symon Smith",
    source: "BDA Contact Magazine, 2024",
    tag: "Joining",
    placements: ["/insights/can-you-join-army-with-dyslexia-uk", "/why-it-matters"],
    purpose: "Normalisation",
  },
  {
    id: "strengths-match",
    quote:
      "Leadership, communication, problem-solving — the strengths the Army actively trains for are the same strengths dyslexic people often bring naturally.",
    context:
      "Counters the assumption that dyslexia is a weakness by tying dyslexic strengths to soft skills the military develops.",
    attribution: "Symon Smith",
    source: "BDA Contact Magazine, 2024",
    tag: "Serving",
    placements: ["/why-it-matters", "/achieve", "/partner"],
    purpose: "Confidence",
  },
  {
    id: "judge-fish-tree",
    quote:
      "If you assess dyslexics on the things they find hardest, they’ll never show their true ability.",
    context:
      "On the gap between dyslexic strengths and the way the military traditionally measures performance.",
    attribution: "Symon Smith",
    source: "Royal Signals Institute Journal, Winter 2023",
    tag: "Serving",
    placements: ["/why-it-matters", "/insights/neurodiversity-in-the-mod-uk"],
    purpose: "Confidence",
  },
  {
    id: "five-times-harder",
    quote:
      "For some tasks, my brain works five times harder than a neurotypical brain. That’s not laziness — that’s wiring.",
    context:
      "Honest account of the cognitive load dyslexic personnel carry on routine written work.",
    attribution: "Symon Smith",
    source: "Royal Signals Institute Journal, Winter 2023",
    tag: "Serving",
    placements: ["/why-it-matters", "/community"],
    purpose: "Normalisation",
  },
  {
    id: "support-disappeared",
    quote:
      "When I left education and joined the Army, all that support disappeared. It was timed assessments, handwritten essays, no extra time.",
    context:
      "On the abrupt drop-off in dyslexia support between school, university and military training.",
    attribution: "Symon Smith",
    source: "Founder, Dyslexia in Defence",
    tag: "Serving",
    placements: ["/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk", "/community"],
    purpose: "Reassurance",
  },
  {
    id: "tick-the-box",
    quote:
      "I didn’t want to be ‘that guy’, so I just got on with it and ticked the box. A lot of dyslexic personnel do the same.",
    context:
      "On the cultural pressure that stops people asking for the support they’re entitled to.",
    attribution: "Symon Smith",
    source: "Founder, Dyslexia in Defence",
    tag: "Serving",
    placements: ["/community", "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk"],
    purpose: "Normalisation",
  },
  {
    id: "ask-how-to-help",
    quote:
      "If you do one thing after reading this — reach out. Ask that person what would actually help them.",
    context:
      "A direct ask to colleagues and line managers, not to dyslexic personnel themselves.",
    attribution: "Symon Smith",
    source: "Royal Signals Institute Journal, Winter 2023",
    tag: "Serving",
    placements: ["/partner", "/community"],
    purpose: "Confidence",
  },
  {
    id: "coping-mechanisms",
    quote:
      "I was lucky to have coping mechanisms from an early diagnosis. The 80% who leave school undiagnosed don’t get that head start.",
    context:
      "On the gap between those who were supported through school and those who weren’t.",
    attribution: "Symon Smith",
    source: "Royal Signals Institute Journal, Winter 2023",
    tag: "Serving",
    placements: ["/community", "/resources"],
    purpose: "Reassurance",
  },
  {
    id: "thrive-not-survive",
    quote:
      "The aim is simple — change the narrative, normalise the conversation, and let dyslexic people thrive across the Armed Forces.",
    context:
      "Founder’s framing of why the network exists and what it’s ultimately for.",
    attribution: "Symon Smith",
    source: "BDA Contact Magazine, 2024",
    tag: "Serving",
    placements: ["/about", "/", "/why-it-matters"],
    purpose: "Confidence",
  },
  {
    id: "soft-skills-vital",
    quote:
      "Dyslexics bring loads of soft skills — most of them vital for Defence. An assessment of someone’s written word doesn’t reflect their worth.",
    context:
      "Closing argument from the founder’s lived experience write-up.",
    attribution: "Symon Smith",
    source: "Founder, Dyslexia in Defence",
    tag: "Veteran",
    placements: ["/why-it-matters", "/partner", "/achieve"],
    purpose: "Confidence",
  },
];

/** Helper: get snippets by tag. */
export const getSnippetsByTag = (tag: LivedExperienceSnippet["tag"]) =>
  livedExperienceSnippets.filter((s) => s.tag === tag);

/** Helper: get snippets relevant to a given route. */
export const getSnippetsForRoute = (route: string) =>
  livedExperienceSnippets.filter((s) => s.placements?.includes(route));
