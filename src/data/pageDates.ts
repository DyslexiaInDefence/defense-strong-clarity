// Only change a page's date when its content genuinely changes. Do not bump on deploys or cosmetic changes.
// The redesigned pages went public on 14 November 2026 (switch-over step 4).
// Insights and Serving now changed again on 16 November 2026, as did the guide articles, Army Education
// Centres, Community and Join when they gained the shared page headers.
// Redirecting addresses are not pages and have no date (switch-over step 5).
export const PAGE_DATES: Readonly<Record<string, string>> = {
  "/about": "2026-11-14",
  "/about/our-story": "2026-10-24",
  "/about/what-we-want-to-achieve": "2026-10-24",
  "/support/currently-serving": "2026-11-16",
  "/currently-serving/standard-learning-credits": "2026-11-14",
  "/currently-serving/army-education-centres": "2026-11-16",
  "/insights": "2026-11-17",
  "/insights/can-you-join-army-with-dyslexia-uk": "2026-11-16",
  "/insights/can-you-join-navy-with-dyslexia-uk": "2026-11-16",
  "/insights/can-you-join-raf-with-dyslexia-uk": "2026-11-16",
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk": "2026-11-16",
  "/insights/is-dyslexia-a-barrier-in-the-military-uk": "2026-11-16",
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk": "2026-11-16",
  "/insights/neurodiversity-in-the-mod-uk": "2026-11-16",
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk": "2026-11-16",
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": "2026-11-16",
  "/lived-experiences": "2026-11-14",
  "/lived-experiences/lisa-hodge-civil-servant": "2026-10-24",
  "/lived-experiences/staff-sergeant-kirk-davis-british-army": "2026-10-24",
  "/lived-experiences/symon-smith-british-army-veteran": "2026-10-24",
  "/lived-experiences/major-lena-beardsell": "2026-10-24",
  "/lived-experiences/liz-oliver-british-army-veteran": "2026-11-06",
  // Governance pages: dates must match each page's actual content revision.
  "/governance": "2026-08-08",
  "/governance/founder": "2026-08-08",
  "/governance/sponsorship": "2026-03-01",
  "/governance/transparency": "2026-03-01",
  "/governance/code-of-conduct": "2026-03-01",
  "/governance/safeguarding": "2026-11-02",
  "/governance/privacy": "2026-11-02",
  "/partner": "2026-11-14",
  "/join": "2026-11-16",
  "/contact": "2026-10-25",
  "/community": "2026-11-16",
  "/evidence": "2026-11-17",
  "/accessibility": "2026-10-24",
  "/armed-forces-covenant": "2026-10-24",
  "/support/how-you-think-and-learn": "2026-11-14",
  "/support/faq": "2026-11-14",
  "/support/support-beyond-us": "2026-11-16",
  "/support/downloads-and-tools": "2026-11-14",
  "/support/guidance": "2026-11-14",
  "/support/supporting-someone": "2026-11-14",
  "/support/leaving-or-left-service": "2026-11-14",
  "/support/thinking-of-joining": "2026-11-14",
  "/support/start-here": "2026-11-14",
  "/insights/understanding-dyslexia": "2026-11-14",
  "/get-involved": "2026-11-14",
};

// Only change this when the underlying figures are refreshed.
export const EVIDENCE_DATA_AS_AT = { iso: "2026-10", label: "October 2026" } as const;

export function getPageDate(pathname: string): string | undefined {
  return PAGE_DATES[pathname.replace(/\/$/, "")];
}

export function formatPageDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}