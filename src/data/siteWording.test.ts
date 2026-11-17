import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PUBLIC_PAGES } from "../lib/seo";

// Switch-over step 6: the banned wording checks run on every public page, source file and data file,
// not only on the pages that were hidden during the redesign.

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

const read = (path: string) => readFileSync(path, "utf8");

// Every live source and data file, plus the public text files. Old pages kept only for rollback are not served.
const SITE_FILES = [
  ...files("src").filter(path => /\.(tsx?|json)$/.test(path) && !path.includes(".test.") && !path.startsWith("src/pages/_old/") && !path.endsWith("routeTree.gen.ts")),
  ...files("public").filter(path => /\.(txt|xml|html)$/.test(path)),
];

const hits = (phrase: RegExp) =>
  SITE_FILES.flatMap(path => read(path).split("\n").flatMap((line, i) => (phrase.test(line) ? [`${path}:${i + 1}`] : [])));

// "Reasonable adjustments" is the Equality Act 2010 duty on civilian employers. It is allowed only where a page
// explains that civilian duty, never for Service support. The first two files were on the live site before the
// switch-over. Prompt D: the Evidence page's "Why we are here" section carries the old page's level 2 sentence
// word for word, once, explaining the civilian Equality Act duty.
const REASONABLE_ADJUSTMENTS_CIVILIAN_CONTEXT: Record<string, number> = {
  "src/pages/insights/JSP822vsEqualityActPage.tsx": 5,
  "src/components/whyhere/SupportGraphics.tsx": 1,
  "src/components/whyhere/WhyWeAreHereSection.tsx": 1,
};

// The redesigned pages and the data files they render.
const SWITCH_OVER_FILES = [
  "src/pages/AboutHubPage.tsx",
  "src/pages/PartnerHubPage.tsx",
  "src/pages/LivedExperiencesHubPage.tsx",
  "src/pages/GetInvolvedHubPage.tsx",
  "src/pages/support/InsightsLandingPage.tsx",
  "src/pages/support/UnderstandingDyslexiaPage.tsx",
  "src/pages/support/ServingNowPage.tsx",
  "src/pages/support/SlcPage.tsx",
  "src/pages/support/StartHerePage.tsx",
  "src/pages/support/ThinkingOfJoiningPage.tsx",
  "src/pages/support/LeavingOrLeftServicePage.tsx",
  "src/pages/support/SupportingSomeonePage.tsx",
  "src/pages/support/GuidancePage.tsx",
  "src/pages/support/DownloadsAndToolsPage.tsx",
  "src/pages/support/FaqPage.tsx",
  "src/pages/support/HowYouThinkAndLearnPage.tsx",
  "src/pages/support/slcContent.ts",
  "src/pages/support/faqLibrary.ts",
  "src/pages/support/guidanceLibrary.ts",
  "src/pages/support/downloadsLibrary.ts",
  "src/data/pageBreadcrumbs.ts",
  "src/components/SupportTabs.tsx",
  "src/pages/support/SupportBeyondUsPage.tsx",
  "src/data/supportOrganisations.ts",
  "src/components/PartnerLogoCarousel.tsx",
];

const SWITCH_OVER_PATHS = [
  "/about", "/partner", "/lived-experiences", "/get-involved", "/insights", "/insights/understanding-dyslexia",
  "/support/currently-serving", "/currently-serving/standard-learning-credits", "/support/start-here",
  "/support/thinking-of-joining", "/support/leaving-or-left-service", "/support/supporting-someone",
  "/support/guidance", "/support/downloads-and-tools", "/support/faq", "/support/how-you-think-and-learn",
  "/support/support-beyond-us",
];

// Documented exception: these lines carry em dashes because they were copied word for word from pages that
// were live before the switch-over (the old Partner and Why It Matters pages). Do not add new lines here.
const EM_DASH_COPIED_LIVE_WORDING: Record<string, { old: string; lines: string[] }> = {
  "src/pages/PartnerHubPage.tsx": {
    old: "src/pages/_old/PartnerPage.tsx",
    lines: [
      "These individuals bring capabilities shaped by demanding operational environments — strengths that are directly transferable to complex organisational settings:",
      "Of those transitioning each year, an estimated <strong>1,500–2,000</strong> may be dyslexic. Many will have developed these capabilities precisely because of how they think — yet without <strong>appropriate recognition</strong> or <strong>support</strong>, their potential often remains underutilised.",
      "For organisations, this presents an opportunity to access high-calibre talent by ensuring recruitment, onboarding, and workplace practices are designed to recognise neurodiverse strengths — not inadvertently screen them out.",
      "This is not simply a workforce or inclusion issue — it is a capability and performance consideration for organisations operating in complex environments.",
    ],
  },
  "src/pages/support/UnderstandingDyslexiaPage.tsx": {
    old: "src/pages/_old/WhyItMattersPage.tsx",
    lines: [
      "For many years, people with dyslexia have been assessed, judged, and filtered based primarily on the <strong>lowest points</strong> of that profile. Recruitment processes, exams, training systems, and workplace assessments frequently focus on areas where dyslexic individuals may struggle — such as processing speed, written accuracy, or certain forms of working memory.",
      "Research on neurodiverse UK military veterans points to the same pattern — recruitment and workplace systems are often designed around neurotypical expectations, which can quietly disadvantage people who think differently <AllenCitation />.",
      "— Albert Einstein",
      "The goal is not to ignore the lower points. Those areas simply require practical support — and in many cases that support is straightforward: clear written instructions, assistive technology, flexible communication formats, or adjusted workflows.",
      "When organisations recognise both sides of the spiky profile — supporting the weaker areas while enabling the stronger ones — they unlock individuals who can contribute enormous value.",
    ],
  },
};

describe("Site-wide banned wording", () => {
  it("scans every live source, data and public text file", () => {
    expect(SITE_FILES.length).toBeGreaterThan(100);
    for (const path of ["src/lib/seo.ts", "src/data/faqCategories.ts", "src/pages/support/slcContent.ts", "src/pages/support/faqLibrary.ts", "public/llms.txt", "src/pages/insights/ArmyDyslexiaPage.tsx"]) {
      expect(SITE_FILES, path).toContain(path);
    }
  });

  it("never says 'legally required to declare'", () => {
    expect(hits(/legally required to declare/i)).toEqual([]);
  });

  it("never says 'dyslexia is not a barrier' without the JSP 822 Vol 7 condition", () => {
    // The approved form is the conditional JSP 822 Vol 7 para 2.1.4 wording ("not in themselves a bar ... if the required standards are met").
    expect(hits(/dyslexia (is not|isn['’]t) a barrier/i)).toEqual([]);
  });

  it("allows Sue Thain's quote, which does not contain 'a barrier'", () => {
    const quote = "Dyslexia is not a bar to joining the Army.";
    expect(read("src/pages/support/SlcPage.tsx")).toContain(`<p>${quote}</p>`);
    expect(/dyslexia (is not|isn['’]t) a barrier/i.test(quote)).toBe(false);
  });

  it("never says 'You are not screened for dyslexia'", () => {
    expect(hits(/you are not screened for dyslexia/i)).toEqual([]);
  });

  it("uses 'reasonable adjustments' only where a page explains the civilian Equality Act duty", () => {
    const found: Record<string, number> = {};
    for (const hit of hits(/reasonable adjustment/i)) {
      const path = hit.replace(/:\d+$/, "");
      found[path] = (found[path] ?? 0) + 1;
    }
    expect(found).toEqual(REASONABLE_ADJUSTMENTS_CIVILIAN_CONTEXT);
    for (const path of Object.keys(REASONABLE_ADJUSTMENTS_CIVILIAN_CONTEXT)) expect(read(path), path).toContain("Equality Act");
  });

  it("adds no em dash in wording written during the switch-over", () => {
    for (const path of SWITCH_OVER_FILES) {
      const allowed = EM_DASH_COPIED_LIVE_WORDING[path]?.lines ?? [];
      const dashed = read(path).split("\n").map(line => line.trim()).filter(line => line.includes("\u2014"));
      expect(dashed, path).toEqual(allowed);
    }
    for (const path of SWITCH_OVER_PATHS) {
      expect(PUBLIC_PAGES[path]?.title, path).not.toContain("\u2014");
      expect(PUBLIC_PAGES[path]?.description, path).not.toContain("\u2014");
      const entry = read("public/llms.txt").split("\n").find(line => line.includes(`](${path})`));
      expect(entry, path).toBeDefined();
      expect(entry, path).not.toContain("\u2014");
    }
  });

  it("limits the em dash exception to wording that was live before the switch-over", () => {
    for (const { old, lines } of Object.values(EM_DASH_COPIED_LIVE_WORDING)) {
      // The old pages are deleted after Publish 2; until then each excepted line must appear in them word for word.
      if (!existsSync(old)) continue;
      for (const line of lines) expect(read(old), line).toContain(line);
    }
  });
});
