// Only change a page's date when its content genuinely changes. Do not bump on deploys or cosmetic changes.
export const PAGE_DATES: Readonly<Record<string, string>> = {
  "/about": "2026-10-24",
  "/about/our-story": "2026-10-24",
  "/about/why-we-are-here": "2026-10-25",
  "/about/what-we-do": "2026-10-24",
  "/about/faq": "2026-10-26",
  "/about/what-we-want-to-achieve": "2026-10-24",
  "/support": "2026-10-24",
  "/support/currently-serving": "2026-10-24",
  "/currently-serving/standard-learning-credits": "2026-10-26",
  "/currently-serving/army-education-centres": "2026-10-26",
  "/insights": "2026-10-26",
  "/insights/can-you-join-army-with-dyslexia-uk": "2026-10-24",
  "/insights/can-you-join-navy-with-dyslexia-uk": "2026-10-26",
  "/insights/can-you-join-raf-with-dyslexia-uk": "2026-10-26",
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk": "2026-10-26",
  "/insights/is-dyslexia-a-barrier-in-the-military-uk": "2026-10-26",
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk": "2026-10-26",
  "/insights/neurodiversity-in-the-mod-uk": "2026-10-26",
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk": "2026-10-26",
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": "2026-10-26",
  "/lived-experiences": "2026-10-24",
  "/lived-experiences/lisa-hodge-civil-servant": "2026-10-24",
  "/lived-experiences/staff-sergeant-kirk-davis-british-army": "2026-10-24",
  "/lived-experiences/symon-smith-british-army-veteran": "2026-10-24",
  "/lived-experiences/major-lena-beardsell": "2026-10-24",
  // Governance pages: dates must match each page's actual content revision.
  "/governance": "2026-08-08",
  "/governance/founder": "2026-08-08",
  "/governance/sponsorship": "2026-03-01",
  "/governance/transparency": "2026-03-01",
  "/governance/code-of-conduct": "2026-03-01",
  "/governance/safeguarding": "2026-11-02",
  "/governance/privacy": "2026-11-02",
  "/partner": "2026-10-24",
  "/join": "2026-10-24",
  "/contact": "2026-10-25",
  "/community": "2026-10-24",
  "/resources": "2026-10-24",
  "/accessibility": "2026-10-24",
  "/armed-forces-covenant": "2026-10-24",
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