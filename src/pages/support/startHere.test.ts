import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getPageDate } from "../../data/pageDates";
import { GUIDES, GUIDE_FILTERS, filterGuides, parseGuideFilter } from "./guidanceLibrary";
import { DOWNLOAD_ITEMS, filterDownloads, linkLabel } from "./downloadsLibrary";
import { FAQ_ITEMS, filterFaqs } from "./faqLibrary";
import { ABOUT_CARDS, GOVERNANCE_CARDS, MORE_LINKS } from "../AboutHubPage";
import { WAYS_TO_TAKE_PART, MORE_LINKS as INVOLVED_MORE_LINKS } from "../GetInvolvedHubPage";
import { MORE_LINKS as PARTNER_MORE_LINKS, PACKAGES } from "../PartnerHubPage";
import { MORE_LINKS as LIVED_MORE_LINKS } from "../LivedExperiencesHubPage";
import { REVIEW_GROUPS } from "../ReviewPreviewPage";
import { SHARE_MAILTO } from "../../components/ShareLivedExperienceBanner";
import { BDA_PSYCHOLOGIST_FEE, BDA_PSYCHOLOGIST_YOU_PAY, BDA_RATE_DATE, BDA_TEACHER_FEE, BDA_TEACHER_YOU_PAY, JSP822_VOL7_URL, JSP822_VOL9_URL, SARAH_BODY, SARAH_EMAIL, SARAH_MAILTO, SARAH_SUBJECT, SLC_COST_DATE, SLC_COST_OPTIONS, SLC_FULL_USUAL_PRICE, SLC_TEMPLATE_FORM } from "./slcContent";

// The review-only menu switch and the hidden Redesign review page list every staged address by design. Delete at switch-over.
const REVIEW_AIDS = ["src/lib/reviewMode.ts", "src/lib/reviewMode.test.ts", "src/pages/ReviewPreviewPage.tsx", "src/routes/review-preview.tsx"];

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

describe("Staged support page boundaries", () => {
  it("excludes Start here from all existing discovery content", () => {
    // Layout's exact-path opt-out is not an inbound link or discovery entry.
    // AboutHubPage, GetInvolvedHubPage, PartnerHubPage and LivedExperiencesHubPage only import the shared start-here.css styles; its links are pinned by the About us preview tests.
    // Navbar and Footer only hold this address in the switched-off NEW_* lists, pinned off by navFooter.test.ts.
    const allowed = new Set([...REVIEW_AIDS, "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/AboutHubPage.tsx", "src/pages/GetInvolvedHubPage.tsx", "src/pages/PartnerHubPage.tsx", "src/pages/LivedExperiencesHubPage.tsx", "src/pages/support/SlcPage.tsx", "src/pages/support/ServingNowPage.tsx", "src/components/Layout.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/routes/support/start-here.tsx", "src/pages/support/StartHerePage.tsx", "src/routes/support/thinking-of-joining.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/routes/support/leaving-or-left-service.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/routes/support/supporting-someone.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/routes/support/guidance.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/pages/support/FaqPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/start-here"), path).toBe(false);
    }
  });

  it("excludes Thinking of joining from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/thinking-of-joining.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/StartHerePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/thinking-of-joining"), path).toBe(false);
    }
  });

  it("excludes Leaving or left service from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/leaving-or-left-service.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/StartHerePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/leaving-or-left-service"), path).toBe(false);
    }
  });

  it("builds Leaving or left service as a noindex page", () => {
    const route = readFileSync("src/routes/support/leaving-or-left-service.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/leaving-or-left-service")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(getPageDate("/support/leaving-or-left-service")).toBeUndefined();
  });

  it("builds Thinking of joining as a noindex page", () => {
    const route = readFileSync("src/routes/support/thinking-of-joining.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/thinking-of-joining")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(getPageDate("/support/thinking-of-joining")).toBeUndefined();
  });

  it("excludes Supporting someone from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/supporting-someone.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/StartHerePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/supporting-someone"), path).toBe(false);
    }
  });

  it("keeps Supporting someone hidden with its staging banner and green accent", () => {
    const route = readFileSync("src/routes/support/supporting-someone.tsx", "utf8");
    const page = readFileSync("src/pages/support/SupportingSomeonePage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/supporting-someone")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-route-supporting");
    expect(getPageDate("/support/supporting-someone")).toBeUndefined();
  });

  it("excludes Guidance from all existing discovery content", () => {
    // Navbar and Footer only hold this address in the switched-off NEW_* lists, pinned off by navFooter.test.ts.
    const allowed = new Set([...REVIEW_AIDS, "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/support/SlcPage.tsx", "src/pages/support/ServingNowPage.tsx", "src/components/Layout.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/routes/support/guidance.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/pages/support/FaqPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/guidance"), path).toBe(false);
    }
  });

  it("keeps Guidance hidden with its staging banner", () => {
    const route = readFileSync("src/routes/support/guidance.tsx", "utf8");
    const page = readFileSync("src/pages/support/GuidancePage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/guidance")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/guidance")).toBe(false);
    expect(getPageDate("/support/guidance")).toBeUndefined();
  });

  it("links every guidance card to an existing route", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const guide of GUIDES) {
      expect(routeText.includes(`createFileRoute("${guide.to}")`), guide.to).toBe(true);
    }
  });

  it("shows Everyone guides under every guidance filter", () => {
    const everyone = GUIDES.filter(guide => guide.audience === "everyone");
    expect(everyone.length).toBeGreaterThan(0);
    for (const { value } of GUIDE_FILTERS) {
      const shown = filterGuides(GUIDES, value);
      for (const guide of everyone) expect(shown, value).toContain(guide);
    }
  });

  it("falls back to All for unknown ?for= values", () => {
    expect(parseGuideFilter("serving")).toBe("serving");
    expect(parseGuideFilter("veterans")).toBe("all");
    expect(parseGuideFilter(undefined)).toBe("all");
    expect(filterGuides(GUIDES, parseGuideFilter("veterans"))).toHaveLength(GUIDES.length);
  });

  it("excludes Downloads and tools from all existing discovery content", () => {
    // Navbar and Footer only hold this address in the switched-off NEW_* lists, pinned off by navFooter.test.ts.
    const allowed = new Set([...REVIEW_AIDS, "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/support/SlcPage.tsx", "src/pages/support/ServingNowPage.tsx", "src/components/Layout.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/routes/support/downloads-and-tools.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/FaqPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/downloads-and-tools"), path).toBe(false);
    }
  });

  it("keeps Downloads and tools hidden with its staging banner", () => {
    const route = readFileSync("src/routes/support/downloads-and-tools.tsx", "utf8");
    const page = readFileSync("src/pages/support/DownloadsAndToolsPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/downloads-and-tools")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/downloads-and-tools")).toBe(false);
    expect(getPageDate("/support/downloads-and-tools")).toBeUndefined();
  });

  it("links every download item to an existing route or stored file of the stated type", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const assets = files("src/assets").filter(path => path.endsWith(".asset.json")).map(path => JSON.parse(readFileSync(path, "utf8")) as { url: string; content_type: string });
    const mime = { PDF: "application/pdf", DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
    for (const item of DOWNLOAD_ITEMS) {
      if (item.link.kind === "page") {
        expect(routeText.includes(`createFileRoute("${item.link.to}")`), item.link.to).toBe(true);
        expect(linkLabel(item.link)).toBe("Open");
      } else {
        const link = item.link;
        const asset = assets.find(a => a.url === link.href);
        expect(asset, item.title).toBeDefined();
        expect(asset?.content_type).toBe(mime[link.fileType]);
        expect(link.contentType).toBe(mime[link.fileType]);
        expect(linkLabel(link)).toBe(link.fileType === "DOCX" ? "Download (Word)" : `Download (${link.fileType})`);
      }
    }
  });

  it("shows any Everyone download items under every filter", () => {
    const everyone = DOWNLOAD_ITEMS.filter(item => item.audience === "everyone");
    for (const { value } of GUIDE_FILTERS) {
      const shown = filterDownloads(DOWNLOAD_ITEMS, value);
      for (const item of everyone) expect(shown, value).toContain(item);
    }
  });

  it("lists the four SLC Word forms using the same stored files and filenames as the SLC page", () => {
    const slcPage = readFileSync("src/pages/support/StandardLearningCreditsPage.tsx", "utf8");
    const expected = [
      { asset: "slc-level1", filename: "SLC_Application_Sarah_Hickinbotham_Level1_Screening_V2.docx" },
      { asset: "slc-level2", filename: "SLC_Application_Sarah_Hickinbotham_Level2_Screening_V2.docx" },
      { asset: "slc-full", filename: "SLC_Application_Sarah_Hickinbotham_Full_Diagnostic_Assessment_V2.docx" },
      { asset: "slc-template", filename: "SLC_Application_Template_Dyslexia_Assessment.docx" },
    ];
    const wordItems = DOWNLOAD_ITEMS.filter(item => item.link.kind === "file" && item.link.fileType === "DOCX");
    expect(wordItems).toHaveLength(4);
    expected.forEach(({ asset, filename }, index) => {
      const stored = JSON.parse(readFileSync(`src/assets/${asset}.docx.asset.json`, "utf8")) as { url: string };
      const item = wordItems[index];
      if (!item) throw new Error(`missing Word item ${index}`);
      const link = item.link;
      if (link.kind !== "file") throw new Error("expected a file link");
      expect(link.href).toBe(stored.url);
      expect(stored.url.endsWith(".docx")).toBe(true);
      expect(link.filename).toBe(filename);
      expect(slcPage.includes(`"${filename}"`), filename).toBe(true);
      expect(slcPage).toContain(`@/assets/${asset}.docx.asset.json`);
      expect(item.group).toBe("assessment");
      expect(item.audience).toBe("serving");
      expect(link.ariaLabel).toMatch(/^Download the .+ \(Word, DOCX\)$/);
      expect(item.secondaryLink).toEqual({ label: "Read how the process works", to: "/currently-serving/standard-learning-credits" });
    });
    // No duplicated Word files in the project.
    expect(files("src").filter(path => path.endsWith(".docx"))).toHaveLength(0);
    expect(files("public").filter(path => path.endsWith(".docx"))).toHaveLength(0);
  });

  it("shows 7 download items under All and Serving now, and none under the other filters", () => {
    expect(filterDownloads(DOWNLOAD_ITEMS, "all")).toHaveLength(7);
    expect(filterDownloads(DOWNLOAD_ITEMS, "serving")).toHaveLength(7);
    for (const value of ["joining", "leaving", "supporting"] as const) {
      expect(filterDownloads(DOWNLOAD_ITEMS, value), value).toHaveLength(0);
    }
  });

  it("keeps prices off the Downloads and tools page", () => {
    const page = readFileSync("src/pages/support/DownloadsAndToolsPage.tsx", "utf8");
    const data = readFileSync("src/pages/support/downloadsLibrary.ts", "utf8");
    for (const text of [page, data]) expect(text).not.toMatch(/£\s?\d|\d+\s?(pounds|GBP)/i);
  });

  it("builds all four support library destinations", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const path of ["/support/guidance", "/support/downloads-and-tools", "/support/faq", "/insights/"]) {
      expect(routeText.includes(`createFileRoute("${path}")`), path).toBe(true);
    }
  });

  it("excludes the staged FAQ from all existing discovery content", () => {
    // Navbar and Footer only hold this address in the switched-off NEW_* lists, pinned off by navFooter.test.ts.
    const allowed = new Set([...REVIEW_AIDS, "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/support/SlcPage.tsx", "src/pages/support/ServingNowPage.tsx", "src/components/Layout.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/routes/support/faq.tsx", "src/pages/support/FaqPage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/faq"), path).toBe(false);
    }
  });

  it("keeps the staged FAQ hidden, bannered and free of FAQPage structured data", () => {
    const route = readFileSync("src/routes/support/faq.tsx", "utf8");
    const page = readFileSync("src/pages/support/FaqPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/faq")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    for (const text of [route, page]) {
      expect(text).not.toContain("ld+json");
      expect(text).not.toContain("FAQPage");
      expect(text).not.toContain("faqCategories");
    }
    expect(readFileSync("src/pages/support/faqLibrary.ts", "utf8")).not.toMatch(/from\s+["'][^"']*faqCategories/);
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/faq")).toBe(false);
    expect(getPageDate("/support/faq")).toBeUndefined();
  });

  it("links every FAQ answer to an existing route", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const item of FAQ_ITEMS) {
      expect(routeText.includes(`createFileRoute("${item.to}")`), item.to).toBe(true);
    }
  });

  it("shows the expected number of FAQ questions under each filter", () => {
    const expected = { all: 10, joining: 5, serving: 3, leaving: 1, supporting: 1 } as const;
    for (const { value } of GUIDE_FILTERS) {
      expect(filterFaqs(FAQ_ITEMS, value), value).toHaveLength(expected[value]);
    }
  });

  it("keeps banned phrases off the staged FAQ", () => {
    const text = [
      readFileSync("src/pages/support/FaqPage.tsx", "utf8"),
      readFileSync("src/pages/support/faqLibrary.ts", "utf8"),
      readFileSync("src/routes/support/faq.tsx", "utf8"),
    ].join("\n").toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments", "serve at every rank", "you are not required to"]) {
      expect(text.includes(phrase), phrase).toBe(false);
    }
  });

  it("excludes Understanding how you think and learn from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/how-you-think-and-learn.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/guidanceLibrary.ts", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/how-you-think-and-learn"), path).toBe(false);
    }
  });

  it("keeps Understanding how you think and learn hidden, bannered and without structured data", () => {
    const route = readFileSync("src/routes/support/how-you-think-and-learn.tsx", "utf8");
    const page = readFileSync("src/pages/support/HowYouThinkAndLearnPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/how-you-think-and-learn")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/how-you-think-and-learn")).toBe(false);
    expect(getPageDate("/support/how-you-think-and-learn")).toBeUndefined();
  });

  it("keeps banned phrases off Understanding how you think and learn", () => {
    const text = [
      readFileSync("src/pages/support/HowYouThinkAndLearnPage.tsx", "utf8"),
      readFileSync("src/routes/support/how-you-think-and-learn.tsx", "utf8"),
    ].join("\n").toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments"]) {
      expect(text.includes(phrase), phrase).toBe(false);
    }
  });

  it("no hidden support page links Understanding how you think and learn to /why-it-matters", () => {
    const hidden = ["StartHerePage.tsx", "ThinkingOfJoiningPage.tsx", "LeavingOrLeftServicePage.tsx", "SupportingSomeonePage.tsx", "GuidancePage.tsx", "DownloadsAndToolsPage.tsx", "FaqPage.tsx", "HowYouThinkAndLearnPage.tsx", "SlcPage.tsx", "guidanceLibrary.ts", "downloadsLibrary.ts", "faqLibrary.ts", "slcContent.ts"];
    for (const name of hidden) {
      expect(readFileSync(`src/pages/support/${name}`, "utf8").includes("/why-it-matters"), name).toBe(false);
    }
    const guide = GUIDES.find(item => item.title === "Understanding how you think and learn");
    expect(guide?.to).toBe("/support/how-you-think-and-learn");
    expect(guide?.audience).toBe("everyone");
  });

  it("excludes the Understanding Dyslexia preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/understanding-dyslexia-preview.tsx", "src/pages/support/UnderstandingDyslexiaPage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("understanding-dyslexia-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("understanding-dyslexia")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("understanding-dyslexia")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("understanding-dyslexia")).toBe(false);
    expect(getPageDate("/support/understanding-dyslexia-preview")).toBeUndefined();
  });

  it("keeps the Understanding Dyslexia preview hidden, bannered, skipped and without structured data", () => {
    const route = readFileSync("src/routes/support/understanding-dyslexia-preview.tsx", "utf8");
    const page = readFileSync("src/pages/support/UnderstandingDyslexiaPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/understanding-dyslexia-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/support/understanding-dyslexia-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("copies the live Why It Matters body word for word, changing only the h1", () => {
    const live = readFileSync("src/pages/WhyItMattersPage.tsx", "utf8");
    const page = readFileSync("src/pages/support/UnderstandingDyslexiaPage.tsx", "utf8");
    const words = (source: string) => {
      const start = source.indexOf("{/* Spiky Profile */}");
      const end = source.indexOf("</section>", source.indexOf("{/* Who we support */}")) + "</section>".length;
      expect(start, "body start").toBeGreaterThan(-1);
      return source.slice(start, end).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    };
    const data = (source: string) => source.slice(source.indexOf("const strengths"), source.indexOf("];", source.indexOf("const ecosystem")));
    expect(words(page)).toBe(words(live));
    expect(data(page)).toBe(data(live));
    expect(page).toContain(">Understanding Dyslexia</h1>");
    expect(page).not.toContain("Why Dyslexia Awareness Matters in Defence");
    for (const text of ["spikyProfileImg", "Genius Within – What is Neurodiversity", "<AllenCitation />", "This Isn't Theory. It's Real Experience.", "— Albert Einstein", "Dyslexic Strengths", "Who We Support"]) {
      expect(page, text).toContain(text);
    }
  });

  it("gives Understanding Dyslexia a Home > Insights breadcrumb pointing at the Insights preview", () => {
    const page = readFileSync("src/pages/support/UnderstandingDyslexiaPage.tsx", "utf8");
    expect(page).toContain('<Link to="/support/insights-preview">Insights</Link>');
    expect(page).toContain('<span aria-current="page">Understanding Dyslexia</span>');
    expect(page).toContain("support-staged-page");
  });

  it("leaves the live What We Do and Why It Matters addresses unchanged", () => {
    expect(readFileSync("src/pages/about/WhatWeDoPage.tsx", "utf8")).toContain('import WhyItMattersPage from "@/pages/WhyItMattersPage";');
    expect(readFileSync("src/routes/why-it-matters.tsx", "utf8")).toContain('throw redirect({ to: "/about/what-we-do", statusCode: 301 });');
    expect(readFileSync("src/pages/WhyItMattersPage.tsx", "utf8")).toContain("Why Dyslexia Awareness Matters in Defence</h1>");
  });

  it("points Supporting someone card 1 at Understanding Dyslexia, leaving profile cards on how you think and learn", () => {
    const supporting = readFileSync("src/pages/support/SupportingSomeonePage.tsx", "utf8");
    expect(supporting).toContain('title: "Understanding how dyslexia works",\n    description: "What dyslexia is, how it shows up day to day, and what helps. An explanation, not a label.",\n    links: [{ label: "Read the guidance", to: "/support/understanding-dyslexia-preview"');
    expect(supporting).not.toContain("/support/how-you-think-and-learn");
    for (const name of ["ThinkingOfJoiningPage.tsx", "LeavingOrLeftServicePage.tsx", "StartHerePage.tsx"]) {
      expect(readFileSync(`src/pages/support/${name}`, "utf8"), name).toContain("/support/how-you-think-and-learn");
    }
  });

  it("excludes the Insights preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/insights-preview.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/UnderstandingDyslexiaPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/insights-preview"), path).toBe(false);
    }
  });

  it("keeps the Insights preview hidden, bannered and without structured data", () => {
    const route = readFileSync("src/routes/support/insights-preview.tsx", "utf8");
    const page = readFileSync("src/pages/support/InsightsLandingPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/insights-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain('activePath="/insights"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/insights-preview")).toBe(false);
    expect(getPageDate("/support/insights-preview")).toBeUndefined();
    const text = (route + page).toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments"]) expect(text.includes(phrase), phrase).toBe(false);
  });

  it("excludes the Serving now preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/serving-now-preview.tsx", "src/pages/support/ServingNowPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/serving-now-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/serving-now-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("serving-now-preview")).toBe(false);
    expect(getPageDate("/support/serving-now-preview")).toBeUndefined();
  });

  it("keeps the Serving now preview hidden, bannered and in the serving accent", () => {
    const route = readFileSync("src/routes/support/serving-now-preview.tsx", "utf8");
    const page = readFileSync("src/pages/support/ServingNowPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/serving-now-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-route-serving");
    expect(readFileSync("src/styles.css", "utf8")).toMatch(/--route-serving:\s*#B93030;/);
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/support/serving-now-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("keeps the Serving now preview to existing wording and the staged FAQ", () => {
    const page = readFileSync("src/pages/support/ServingNowPage.tsx", "utf8");
    const text = (page + readFileSync("src/routes/support/serving-now-preview.tsx", "utf8")).toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments", "serve at every rank"]) expect(text.includes(phrase), phrase).toBe(false);
    expect(page).not.toContain("\u2014");
    expect(page).not.toMatch(/£\s?\d/);
    expect(page).not.toContain("faqCategories");
    expect(page).not.toContain("/about/faq");
    expect(page).not.toContain("1.2 MB");
    expect(filterFaqs(FAQ_ITEMS, "serving").length).toBeGreaterThan(0);
    // Defence Dyslexia Network, SLC and video content matches the live page.
    const live = readFileSync("src/pages/support/CurrentlyServingPage.tsx", "utf8");
    for (const snippet of ["2000+", "250", "3 services", "Other resources will be added as soon as possible.", "https://modgovuk.sharepoint.com/sites/dddefencedyslexianetwork/SitePages/Home.aspx", "https://jive.defencegateway.mod.uk/groups/dyslexia-network", "https://link.militaryapp.org/rlc/Jb2gM", "Requires serving military status to join", "We have a pre filled application template to help.", "https://www.youtube.com/embed/ET8ddLATf5E"]) {
      expect(live, snippet).toContain(snippet);
      expect(page, snippet).toContain(snippet);
    }
    expect(page.match(/target="_blank"/g)?.length).toBe(page.match(/rel="noopener noreferrer"/g)?.length);
  });

  it("leaves the live Currently serving route on the old page", () => {
    const live = readFileSync("src/routes/support/currently-serving.tsx", "utf8");
    expect(live).toContain('createFileRoute("/support/currently-serving")');
    expect(live).toContain("CurrentlyServingPage");
    expect(live).not.toContain("ServingNowPage");
  });

  it("leaves the live /insights route unchanged", () => {
    const live = readFileSync("src/routes/insights/index.tsx", "utf8");
    expect(live).toContain('import InsightsPage from "@/pages/InsightsPage"');
    expect(live).not.toContain("InsightsLandingPage");
    expect(readFileSync("src/components/SupportTabs.tsx", "utf8")).toContain('{ label: "Insights", to: "/insights" }');
  });

  it("excludes the SLC preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/support/slc-preview.tsx", "src/pages/support/SlcPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/slc-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("slc-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("slc-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("slc-preview")).toBe(false);
    expect(getPageDate("/support/slc-preview")).toBeUndefined();
  });

  it("keeps the SLC preview hidden, bannered and in the serving accent", () => {
    const route = readFileSync("src/routes/support/slc-preview.tsx", "utf8");
    const page = readFileSync("src/pages/support/SlcPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/slc-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-route-serving");
    expect(page).toContain('activePath="/support/start-here"');
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/support/slc-preview"');
    for (const text of [route, page]) {
      expect(text).not.toContain("ld+json");
      expect(text).not.toContain("FAQPage");
    }
  });

  it("keeps the SLC preview to existing wording and rules", () => {
    const page = readFileSync("src/pages/support/SlcPage.tsx", "utf8");
    const content = readFileSync("src/pages/support/slcContent.ts", "utf8");
    const text = (page + content + readFileSync("src/routes/support/slc-preview.tsx", "utf8")).toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments", "serve at every rank", "guaranteed"]) expect(text.includes(phrase), phrase).toBe(false);
    for (const t of [page, content]) expect(t).not.toContain("\u2014");
    expect(page).toContain("paras 2.1.9 and 2.3.1, sets out who is responsible for funding specialist assessment. Whether it is funded depends on your circumstances, so ask your education staff.");
    expect(page).toContain('const BDA_ANCHOR = "bda-heading"');
    expect(page).toContain("id={BDA_ANCHOR}");
    expect(page.match(/target="_blank"/g)?.length).toBe(page.match(/rel="noopener noreferrer"/g)?.length);
    // Forms and figures come only from the shared module.
    expect(page).not.toMatch(/@\/assets\/slc-/);
    expect(page).toContain('from "./slcContent"');
    expect(content).toContain("NOTE FOR FUTURE UPDATES");
  });

  it("keeps the shared SLC content identical to the live SLC page", () => {
    const live = readFileSync("src/pages/support/StandardLearningCreditsPage.tsx", "utf8");
    expect(SLC_COST_OPTIONS.map(o => [o.title, o.you, o.slc, o.total])).toEqual([
      ["Level 1 screening", "£10", "£40", "£50"],
      ["Level 2 screening", "£30", "£120", "£150"],
      ["Full diagnostic assessment", "£320", "£175", "£495"],
    ]);
    for (const o of SLC_COST_OPTIONS) {
      for (const snippet of [`name: "${o.name}"`, `detail: "${o.detail}"`, `total: "${o.total}"`, `slc: "${o.slc}"`, `you: "${o.you}"`, `"${o.form.filename}"`, `"${o.form.label}"`]) expect(live, snippet).toContain(snippet);
    }
    const assets = ["slc-level1", "slc-level2", "slc-full"].map(name => (JSON.parse(readFileSync(`src/assets/${name}.docx.asset.json`, "utf8")) as { url: string }).url);
    expect(SLC_COST_OPTIONS.map(o => o.form.url)).toEqual(assets);
    expect(SLC_TEMPLATE_FORM.url).toBe((JSON.parse(readFileSync("src/assets/slc-template.docx.asset.json", "utf8")) as { url: string }).url);
    expect(live).toContain(`download="${SLC_TEMPLATE_FORM.filename}"`);
    expect(live).toContain(`const SLC_COST_DATE = "${SLC_COST_DATE}"`);
    expect(live).toContain(`const JSP822_VOL7_URL = "${JSP822_VOL7_URL}"`);
    expect(live).toContain(`const JSP822_VOL9_URL = "${JSP822_VOL9_URL}"`);
    expect(live).toContain(`const SARAH_EMAIL = "${SARAH_EMAIL}"`);
    expect(live).toContain(`const SARAH_SUBJECT = "${SARAH_SUBJECT}"`);
    for (const line of SARAH_BODY.split("\r\n")) expect(live).toContain(JSON.stringify(line));
    expect(SARAH_MAILTO).toBe(`mailto:${SARAH_EMAIL}?subject=${encodeURIComponent(SARAH_SUBJECT)}&body=${encodeURIComponent(SARAH_BODY)}`);
    for (const figure of [BDA_TEACHER_FEE, BDA_PSYCHOLOGIST_FEE, BDA_TEACHER_YOU_PAY, BDA_PSYCHOLOGIST_YOU_PAY, BDA_RATE_DATE, SLC_FULL_USUAL_PRICE]) expect(live, figure).toContain(figure);
  });

  it("leaves the live SLC route on the old page", () => {
    const live = readFileSync("src/routes/currently-serving/standard-learning-credits.tsx", "utf8");
    expect(live).toContain('createFileRoute("/currently-serving/standard-learning-credits")');
    expect(live).toContain("StandardLearningCreditsPage");
    expect(live).not.toContain("SlcPage");
  });

  it("excludes the About us preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/about-preview.tsx", "src/pages/AboutHubPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/about-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("about-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("about-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("about-preview")).toBe(false);
    expect(getPageDate("/about-preview")).toBeUndefined();
  });

  it("keeps the About us preview hidden, bannered and outside Get support", () => {
    const route = readFileSync("src/routes/about-preview.tsx", "utf8");
    const page = readFileSync("src/pages/AboutHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/about-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/about-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("links the About us preview only to existing pages, without What we do or FAQ", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const links = [...ABOUT_CARDS, ...GOVERNANCE_CARDS, ...MORE_LINKS].map(item => item.to);
    expect(links).toEqual(["/about/our-story", "/about/what-we-want-to-achieve", "/partner", "/governance", "/accessibility", "/contact", "/support", "/insights", "/lived-experiences", "/join"]);
    for (const to of links) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    const page = readFileSync("src/pages/AboutHubPage.tsx", "utf8");
    for (const banned of ["/about/what-we-do", "/about/faq", "/support/faq", "What we do and why"]) expect(page, banned).not.toContain(banned);
    // Only the shared stylesheet import may mention a Get support sub-path.
    expect(page.replace('import "./support/start-here.css";', "")).not.toMatch(/\/support\/[a-z]/);
  });

  it("copies the live About intro exactly and adds no banned wording", () => {
    const live = readFileSync("src/pages/AboutPage.tsx", "utf8");
    const page = readFileSync("src/pages/AboutHubPage.tsx", "utf8");
    for (const sentence of [
      "Dyslexia in Defence is a registered Community Interest Company, created to support people with dyslexia and neurodiversity across the UK Defence community by improving understanding, sharing lived experience, and connecting people to the right support.",
      "We are an independent, volunteer led initiative. Not affiliated with or endorsed by the Ministry of Defence or any employer.",
      "Dyslexia in Defence CIC is registered in England and Wales. Company number: 17285330.",
    ]) {
      expect(live, sentence).toContain(sentence);
      expect(page, sentence).toContain(sentence);
    }
    expect(page).not.toContain("\u2014");
    const text = page.toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments", "serve at every rank"]) expect(text.includes(phrase), phrase).toBe(false);
  });

  it("leaves the live /about route on the old page", () => {
    const live = readFileSync("src/routes/about/index.tsx", "utf8");
    expect(live).toContain('createFileRoute("/about/")');
    expect(live).toContain("AboutPage");
    expect(live).not.toContain("AboutHubPage");
  });

  it("excludes the Get involved preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/get-involved-preview.tsx", "src/pages/GetInvolvedHubPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/get-involved-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("get-involved")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("get-involved")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("get-involved")).toBe(false);
    expect(getPageDate("/get-involved-preview")).toBeUndefined();
  });

  it("keeps the Get involved preview hidden, bannered and outside Get support", () => {
    const route = readFileSync("src/routes/get-involved-preview.tsx", "utf8");
    const page = readFileSync("src/pages/GetInvolvedHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/get-involved-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/get-involved-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("links the Get involved preview only to existing pages and the shared story email", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const internal = [...WAYS_TO_TAKE_PART.flatMap(card => ("to" in card ? [card.to] : [])), ...INVOLVED_MORE_LINKS.map(item => item.to)];
    expect(internal).toEqual(["/community", "/lived-experiences", "/about", "/support", "/partner", "/insights"]);
    for (const to of [...internal, "/join"]) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    const share = WAYS_TO_TAKE_PART.find(card => card.title === "Share your story");
    expect(share && "href" in share ? share.href : undefined).toBe(SHARE_MAILTO);
    const page = readFileSync("src/pages/GetInvolvedHubPage.tsx", "utf8");
    expect(page).toContain('<Link to="/join">');
    expect(page).not.toContain("JoinForm");
    expect(page).not.toContain("<form");
    expect(page).not.toContain('target="_blank"');
    expect(page.replace('import "./support/start-here.css";', "")).not.toMatch(/\/support\/[a-z]/);
  });

  it("uses only live Join wording on the Get involved preview, with no cost or consent claims", () => {
    const page = readFileSync("src/pages/GetInvolvedHubPage.tsx", "utf8");
    expect(readFileSync("src/pages/JoinPage.tsx", "utf8")).toContain("Open to anyone connected to the defence and security sector.");
    expect(readFileSync("src/components/JoinForm.tsx", "utf8")).toContain("Open to adults aged 18 and over.");
    expect(page).toContain("Open to anyone connected to the defence and security sector.");
    expect(page).toContain("Open to adults aged 18 and over.");
    expect(page).not.toContain("\u2014");
    const text = page.toLowerCase();
    for (const phrase of ["free", "£", "no cost", "consent", "legally required to declare", "dyslexia is not a barrier", "reasonable adjustments"]) expect(text.includes(phrase), phrase).toBe(false);
    // The live Share your story banner has no consent sentence, so none is added here.
    expect(readFileSync("src/components/ShareLivedExperienceBanner.tsx", "utf8").toLowerCase()).not.toContain("consent");
  });

  it("leaves the live Get involved destinations unchanged", () => {
    // The live lists are the CURRENT_* ones while the switch-over flags are off (pinned by navFooter.test.ts).
    expect(readFileSync("src/components/Navbar.tsx", "utf8")).toMatch(/CURRENT_NAV_LINKS[\s\S]*?label: "Get Involved",\s*to: "\/join"/);
    expect(readFileSync("src/components/Footer.tsx", "utf8")).toMatch(/CURRENT_FOOTER_COLUMNS[\s\S]*?\{ label: "Get Involved", to: "\/join" \}/);
    expect(files("src/routes").some(path => /get-involved\.tsx$|get-involved[\\/]/.test(path))).toBe(false);
  });

  it("excludes the Partner preview from all existing discovery content", () => {
    // CovenantPledgeBand lists the path only to hide the licensed Covenant mark beside sponsorship packages; it is not a link.
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/components/CovenantPledgeBand.tsx", "src/routes/partner-preview.tsx", "src/pages/PartnerHubPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/partner-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("partner-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("partner-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("partner-preview")).toBe(false);
    expect(getPageDate("/partner-preview")).toBeUndefined();
    expect(readFileSync("src/components/CovenantPledgeBand.tsx", "utf8")).toMatch(/LOGO_EXCLUDED_ROUTES = new Set\(\[[^\]]*"\/partner-preview"/);
  });

  it("keeps the Partner preview hidden, bannered and outside Get support", () => {
    const route = readFileSync("src/routes/partner-preview.tsx", "utf8");
    const page = readFileSync("src/pages/PartnerHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/partner-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/partner-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("links the Partner preview only to existing pages", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const page = readFileSync("src/pages/PartnerHubPage.tsx", "utf8");
    expect(PARTNER_MORE_LINKS.map(item => [item.title, item.to])).toEqual([["About us", "/about"], ["Get support", "/support"], ["Get involved", "/join"], ["Insights", "/insights"]]);
    const internal = [...page.matchAll(/to="([^"]+)"/g)].map(match => match[1]);
    expect(internal).toEqual(["/", "/about", "/join", "/armed-forces-covenant", "/join", "/contact"]);
    for (const to of [...internal, ...PARTNER_MORE_LINKS.map(item => item.to)]) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    expect(page.replace('import "./support/start-here.css";', "")).not.toMatch(/\/support\/[a-z]/);
    expect(page).not.toContain("Find out more");
    // No partners page exists, so the "Our partners" card is left out.
    expect(page).not.toContain("Our partners");
  });

  it("carries every live Partner page sentence, figure and list item across unchanged", () => {
    const text = (path: string) => readFileSync(path, "utf8").replace(/<span className="sr-only">[^<]*<\/span>/g, "").replace(/\{" "\}/g, " ").replace(/&nbsp;/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").replace(/ ([.,:?])/g, "$1");
    const live = text("src/pages/PartnerPage.tsx");
    const page = text("src/pages/PartnerHubPage.tsx");
    const liveWording = [
      "Supporting neurodiverse talent across the defence ecosystem while delivering measurable social value and organisational benefit.",
      "Research from Made By Dyslexia suggests dyslexic thinking may contribute up to £98.2 billion in value within the UK with significant untapped potential remaining.",
      "Register Interest",
      "Download Overview (Coming Soon)",
      "Why This Matters",
      "Each year, approximately 15,000–20,000 personnel leave the UK Armed Forces and transition into civilian roles. For organisations operating in defence and beyond, this represents a significant and recurring talent pipeline.",
      "These individuals bring capabilities shaped by demanding operational environments — strengths that are directly transferable to complex organisational settings:",
      "Problem solving in high-stakes environments",
      "Big picture thinking and strategic awareness",
      "Leadership across diverse and dynamic teams",
      "Adaptability under sustained pressure",
      "Of those transitioning each year, an estimated 1,500–2,000 may be dyslexic. Many will have developed these capabilities precisely because of how they think — yet without appropriate recognition or support, their potential often remains underutilised.",
      "For organisations, this presents an opportunity to access high-calibre talent by ensuring recruitment, onboarding, and workplace practices are designed to recognise neurodiverse strengths — not inadvertently screen them out.",
      "The cost of inaction is measurable:",
      "Untapped human capability",
      "Lost innovation potential",
      "Missed economic value",
      "This is not simply a workforce or inclusion issue — it is a capability and performance consideration for organisations operating in complex environments.",
      "Why Partner With Us",
      "Demonstrate tangible social value contribution",
      "Align with MOD Social Value Model (PPN 06/20)",
      "Support workforce capability and inclusion",
      "Contribute to an initiative that spans across defence",
      "Partners can reference their involvement within social value, ESG, and bid responses.",
      "What Dyslexia in Defence Provides",
      "Awareness and education sessions",
      "Insight into dyslexia within defence environments",
      "Access to lived experience and community insight",
      "Contribution to improving support systems across defence",
      "Education", "Awareness", "Capability Enhancement",
      "All partnership packages below are proposed concepts and are not yet formally implemented.",
      "Bronze", "Supporter", "Recognition as supporter", "Logo on website", "Inclusion in impact summary", "Social value reference rights",
      "Silver", "Engagement Partner", "Everything in Bronze", "Awareness session participation", "Access to insights and content", "Community engagement opportunity",
      "Gold", "Strategic Partner", "Everything in Silver", "Tailored education sessions", "Strategic collaboration", "Potential co-branded initiatives",
      "The Bigger Picture",
      "Supporting individuals before, during, and after service",
      "Complementary to existing initiatives (e.g. Defence Dyslexia Network)",
      "A wraparound support ecosystem for the defence community",
      "Get Involved",
      "Interested in partnering with Dyslexia in Defence? Register your interest or get in touch to explore how we can work together.",
      "Contact Us",
    ];
    for (const sentence of liveWording) {
      expect(live, sentence).toContain(sentence);
      expect(page, sentence).toContain(sentence);
    }
    const madeBy = "https://www.madebydyslexia.org/assets/downloads/Return_on_Dyslexic_Thinking.pdf";
    expect(readFileSync("src/pages/PartnerPage.tsx", "utf8")).toContain(madeBy);
    expect(readFileSync("src/pages/PartnerHubPage.tsx", "utf8")).toContain(madeBy);
    expect(readFileSync("src/pages/PartnerHubPage.tsx", "utf8")).toMatch(/disabled>\s*Download Overview \(Coming Soon\)/);
    expect(PACKAGES.map(pkg => `${pkg.tier} (${pkg.role})`)).toEqual(["Bronze (Supporter)", "Silver (Engagement Partner)", "Gold (Strategic Partner)"]);
    // Each package card shows the concept label and "Not yet on offer." once per card, rendered from one template.
    const raw = readFileSync("src/pages/PartnerHubPage.tsx", "utf8");
    expect(raw.match(/>Proposed concept</g)).toHaveLength(1);
    expect(raw.match(/>Not yet on offer\.</g)).toHaveLength(1);
    expect(raw.indexOf("All partnership packages below")).toBeLessThan(raw.indexOf("{PACKAGES.map"));
    // Em dashes may only appear inside copied live wording.
    let remainder = page;
    for (const sentence of liveWording) remainder = remainder.split(sentence).join("");
    expect(remainder).not.toContain("\u2014");
    const lower = page.toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments"]) expect(lower.includes(phrase), phrase).toBe(false);
  });

  it("leaves the live /partner route on the old page", () => {
    const live = readFileSync("src/routes/partner.tsx", "utf8");
    expect(live).toContain('createFileRoute("/partner")');
    expect(live).toContain('import PartnerPage from "@/pages/PartnerPage"');
    expect(live).toContain("component: PartnerPage");
    expect(live).not.toContain("PartnerHubPage");
  });

  it("excludes the Lived experiences preview from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/lived-experiences-preview.tsx", "src/pages/LivedExperiencesHubPage.tsx", "src/pages/LivedExperiencesHubPage.test.ts", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/lived-experiences-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("lived-experiences-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("lived-experiences-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("lived-experiences-preview")).toBe(false);
    expect(getPageDate("/lived-experiences-preview")).toBeUndefined();
  });

  it("keeps the Lived experiences preview hidden, bannered and without the navy share banner", () => {
    const route = readFileSync("src/routes/lived-experiences-preview.tsx", "utf8");
    const page = readFileSync("src/pages/LivedExperiencesHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/lived-experiences-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(page).not.toContain("<ShareLivedExperienceBanner");
    expect(page).toContain("href={SHARE_MAILTO}");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/lived-experiences-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("uses the live intro, the supplied wording and only existing pages on the Lived experiences preview", () => {
    const intro = "Everyone's journey is different. These stories share personal experiences from across the defence community. They are not official guidance. They are individual perspectives intended to help others feel understood, informed and less alone.";
    const page = readFileSync("src/pages/LivedExperiencesHubPage.tsx", "utf8");
    expect(readFileSync("src/pages/LivedExperiencesPage.tsx", "utf8")).toContain(intro);
    for (const text of [intro, "Browse stories", "Read their story", "Your story helps others feel less alone and helps us show what real support looks like.", "When you email us, you choose whether we share your story with your name, anonymously, or not at all.", "Stories are personal views. They are not the view of the MOD or of the internal Defence Dyslexia Network.", "More from Dyslexia in Defence"]) expect(page, text).toContain(text);
    expect(page).not.toContain("\u2014");
    expect(page).toContain('<Link to="/join">Get involved</Link>');
    expect(LIVED_MORE_LINKS.map(item => [item.title, item.to])).toEqual([["Join the Network", "/join"], ["Community", "/community"], ["Get support", "/support"], ["Insights", "/insights"]]);
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const to of ["/", "/join", "/community", "/support", "/insights"]) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    expect(page.replace('import "./support/start-here.css";', "")).not.toMatch(/\/support\/[a-z]/);
  });

  it("leaves the live /lived-experiences route on the old page", () => {
    const live = readFileSync("src/routes/lived-experiences/index.tsx", "utf8");
    expect(live).toContain('createFileRoute("/lived-experiences/")');
    expect(live).toContain('import LivedExperiencesPage from "@/pages/LivedExperiencesPage"');
    expect(live).toContain("component: LivedExperiencesPage");
    expect(live).not.toContain("LivedExperiencesHubPage");
  });

  it("does not assign a public content date to the hidden page", () => {
    expect(getPageDate("/support/start-here")).toBeUndefined();
  });
});

describe("Redesign review page", () => {
  it("excludes the Redesign review page from all existing discovery content", () => {
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/review-preview.tsx", "src/pages/ReviewPreviewPage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/review-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("review-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("review-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("review-preview")).toBe(false);
    expect(getPageDate("/review-preview")).toBeUndefined();
  });

  it("keeps the Redesign review page hidden, bannered and without structured data", () => {
    const route = readFileSync("src/routes/review-preview.tsx", "utf8");
    const page = readFileSync("src/pages/ReviewPreviewPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/review-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("Every redesigned page that is built but not live yet. Open them from here. This page will be deleted at switch-over.");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/review-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
    expect(page).not.toContain("\u2014");
  });

  it("lists every staged page with what it replaces, linking only to existing routes", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const rows = REVIEW_GROUPS.flatMap(group => group.entries.map(entry => [group.heading, entry.name, entry.to, entry.replaces ?? "New page"]));
    expect(rows).toEqual([
      ["Get support", "Start here", "/support/start-here", "New page"],
      ["Get support", "Thinking of joining", "/support/thinking-of-joining", "New page"],
      ["Get support", "Serving now", "/support/serving-now-preview", "/support/currently-serving"],
      ["Get support", "Leaving or left service", "/support/leaving-or-left-service", "New page"],
      ["Get support", "Supporting someone", "/support/supporting-someone", "New page"],
      ["Get support", "Guidance", "/support/guidance", "New page"],
      ["Get support", "Downloads and tools", "/support/downloads-and-tools", "New page"],
      ["Get support", "FAQ", "/support/faq", "New page"],
      ["Get support", "Understanding how you think and learn", "/support/how-you-think-and-learn", "New page"],
      ["Get support", "Understanding Dyslexia", "/support/understanding-dyslexia-preview", "the What We Do text"],
      ["Get support", "Insights", "/support/insights-preview", "/insights"],
      ["Get support", "Standard Learning Credits", "/support/slc-preview", "/currently-serving/standard-learning-credits"],
      ["Get support", "Serving with dyslexia in the Army (skeleton)", "/insights/army-guide-preview", "New page"],
      ["About and involvement", "About Us", "/about-preview", "/about"],
      ["About and involvement", "Get Involved", "/get-involved-preview", "New page"],
      ["About and involvement", "Partner with us", "/partner-preview", "/partner"],
      ["About and involvement", "Lived experiences", "/lived-experiences-preview", "/lived-experiences"],
    ]);
    expect(REVIEW_GROUPS[1]!.entries.find(entry => entry.name === "Get Involved")!.finalAddress).toBe("/get-involved");
    expect(REVIEW_GROUPS[0]!.entries.find(entry => entry.name === "Understanding Dyslexia")!.finalAddress).toBe("/insights/understanding-dyslexia");
    for (const [, , to] of rows) expect(routeText.includes(`createFileRoute("${to}")`), to).toBe(true);
  });
});

const RECRUITMENT_SCREENING = "Dyslexia screening is not a requirement of recruitment.";
const DECLARE_ANSWER = "Dyslexia screening is not a requirement of recruitment. Practice differs by Service once training starts. Ask your recruiter what the application asks, so you know what to expect. Declaring can help others understand how you work best, but what support follows varies by service. Once you are serving, there is no requirement to tell your chain of command if it does not affect your training or work. If it does, or you need Defence involvement, you are advised to tell them at the first opportunity.";
// Live pages stay out: CurrentlyServingPage, StandardLearningCreditsPage and ArmyEducationCentresPage.
const HIDDEN_NEW_PAGES = [
  ...["StartHerePage.tsx", "ThinkingOfJoiningPage.tsx", "LeavingOrLeftServicePage.tsx", "SupportingSomeonePage.tsx", "GuidancePage.tsx", "DownloadsAndToolsPage.tsx", "FaqPage.tsx", "HowYouThinkAndLearnPage.tsx", "UnderstandingDyslexiaPage.tsx", "InsightsLandingPage.tsx", "ServingNowPage.tsx", "SlcPage.tsx", "guidanceLibrary.ts", "downloadsLibrary.ts", "faqLibrary.ts", "slcContent.ts"].map(name => `src/pages/support/${name}`),
  "src/pages/AboutHubPage.tsx", "src/pages/GetInvolvedHubPage.tsx", "src/pages/PartnerHubPage.tsx", "src/pages/LivedExperiencesHubPage.tsx", "src/pages/ReviewPreviewPage.tsx",
  "src/pages/insights/ArmyGuidePreviewPage.tsx",
];

describe("Recruitment screening wording on hidden pages", () => {
  it("uses the approved declare wording on Thinking of joining", () => {
    const page = readFileSync("src/pages/support/ThinkingOfJoiningPage.tsx", "utf8");
    expect(page).toContain(`description: "${RECRUITMENT_SCREENING} Here is what to ask your recruiter and what declaring can do for you."`);
    expect(page).toContain(`q: "Do I need to declare dyslexia when joining?",\n    a: "${DECLARE_ANSWER}"`);
  });

  it("uses the same declare answer in the FAQ library and the new opening in the guidance library", () => {
    expect(FAQ_ITEMS.find(item => item.question === "Do I need to declare dyslexia when joining?")?.answer).toBe(DECLARE_ANSWER);
    expect(GUIDES.find(guide => guide.title === "Do I need to declare dyslexia when joining?")?.description.startsWith("Dyslexia screening is not a requirement of recruitment, so ")).toBe(true);
  });

  it("keeps 'You are not screened for dyslexia' off every hidden new page", () => {
    for (const path of HIDDEN_NEW_PAGES) {
      expect(readFileSync(path, "utf8").toLowerCase().includes("you are not screened for dyslexia"), path).toBe(false);
    }
  });
});

describe("Army guide skeleton (hidden)", () => {
  const ROUTE = "src/routes/insights/army-guide-preview.tsx";
  const PAGE = "src/pages/insights/ArmyGuidePreviewPage.tsx";

  it("keeps the Army guide skeleton hidden, bannered, skipped and without structured data", () => {
    const route = readFileSync(ROUTE, "utf8");
    const page = readFileSync(PAGE, "utf8");
    expect(route).toContain('createFileRoute("/insights/army-guide-preview")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/insights/army-guide-preview"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("excludes the Army guide skeleton from all existing discovery content", () => {
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", ROUTE, PAGE, "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("army-guide-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("army-guide-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("army-guide-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("army-guide-preview")).toBe(false);
    expect(getPageDate("/insights/army-guide-preview")).toBeUndefined();
  });

  it("has only the h1 and the eight agreed headings, each followed by 'Content to follow.'", () => {
    const page = readFileSync(PAGE, "utf8");
    expect(page).toContain(">Serving with dyslexia in the Army</h1>");
    expect(ARMY_GUIDE_HEADINGS).toEqual([
      "Joining the Army",
      "Basic training and trade training",
      "Declaring dyslexia and getting an assessment",
      "Standard Learning Credits and Army Education Centres",
      "Support once you are serving",
      "Working with your chain of command",
      "Stories from serving soldiers",
      "Where to go next",
    ]);
    expect(page.match(/<p className="text-base leading-relaxed">Content to follow\.<\/p>/g)).toHaveLength(1);
    expect(page.match(/<p[\s>]/g)).toHaveLength(2); // the banner line and the repeated "Content to follow." line
  });

  it("gives the Army guide a Home > Insights breadcrumb pointing at the Insights preview", () => {
    const page = readFileSync(PAGE, "utf8");
    expect(page).toContain('<Link to="/support/insights-preview">Insights</Link>');
    expect(page).toContain('<span aria-current="page">Serving with dyslexia in the Army</span>');
  });

  it("lists the skeleton on the review page with its final address and note", () => {
    const entry = REVIEW_GROUPS.flatMap(group => group.entries).find(item => item.to === "/insights/army-guide-preview");
    expect(entry?.name).toBe("Serving with dyslexia in the Army (skeleton)");
    expect(entry?.finalAddress).toBe("/insights/serving-with-dyslexia-in-the-army-uk");
    expect(entry?.note).toBe("Headings only. Not for Publish 2 until content is written.");
  });

  it("leaves the final address redirecting to Kirk Davis's story", () => {
    const redirectRoute = readFileSync("src/routes/insights/serving-with-dyslexia-in-the-army-uk.tsx", "utf8");
    expect(redirectRoute).toContain('createFileRoute("/insights/serving-with-dyslexia-in-the-army-uk")');
    expect(redirectRoute).toContain('throw redirect({ to: "/lived-experiences/staff-sergeant-kirk-davis-british-army", statusCode: 301 });');
  });
});

describe("Sue Thain quote on the hidden SLC page", () => {
  it("shows the quote in a blockquote with the approved credit, below the Army Education Centre line and above its button", () => {
    const page = readFileSync("src/pages/support/SlcPage.tsx", "utf8");
    const line = page.indexOf("Your local Army Education Centre can advise on learning credits.");
    const quote = page.indexOf("<blockquote");
    const button = page.indexOf("Find your Army Education Centre");
    expect(line).toBeGreaterThan(-1);
    expect(quote).toBeGreaterThan(line);
    expect(button).toBeGreaterThan(quote);
    expect(page).toContain("<p>Dyslexia is not a bar to joining the Army.</p>");
    expect(page).toContain("<figcaption className=\"mt-3 pl-5 text-base leading-relaxed\">Sue Thain, Army lead for management of Specific Learning Differences</figcaption>");
    expect(readFileSync("src/pages/insights/ArmyDyslexiaPage.tsx", "utf8")).toContain('attribution: "Sue Thain, Army lead for management of Specific Learning Differences"');
  });
});
