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
import { ARMY_GUIDE_HEADINGS } from "../insights/ArmyGuidePreviewPage";
import { CRUMB_TARGETS } from "../../components/Breadcrumbs";
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
    // ArmyGuidePreviewPage likewise only imports ../support/start-here.css; its links are pinned by the Army guide skeleton tests.
    // Navbar and Footer only hold this address in the switched-off NEW_* lists, pinned off by navFooter.test.ts.
    // src/routes/support/index.tsx is the permanent /support redirect to this page.
    // Switch-over step 2: the homepage Get support links and the /resources redirect now point straight here.
    const allowed = new Set([...REVIEW_AIDS, "src/routes/support/index.tsx", "src/routes/resources.tsx", "src/pages/HomePage.tsx", "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/AboutHubPage.tsx", "src/pages/GetInvolvedHubPage.tsx", "src/pages/PartnerHubPage.tsx", "src/pages/LivedExperiencesHubPage.tsx", "src/pages/insights/ArmyGuidePreviewPage.tsx", "src/pages/support/SlcPage.tsx", "src/pages/support/ServingNowPage.tsx", "src/components/Layout.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/routes/support/start-here.tsx", "src/pages/support/StartHerePage.tsx", "src/routes/support/thinking-of-joining.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/routes/support/leaving-or-left-service.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/routes/support/supporting-someone.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/routes/support/guidance.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/pages/support/FaqPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
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
    // The live SLC page (SlcPage) takes its forms from slcContent.ts.
    const slcPage = readFileSync("src/pages/support/slcContent.ts", "utf8");
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
    // Navbar and Footer hold this address in the NEW_* lists and, since switch-over step 2, in place of /about/faq in the current lists.
    // Switch-over step 2: the /about/faq redirect and the route pages' "Read the full answer" links point straight here.
    const allowed = new Set([...REVIEW_AIDS, "src/routes/about/faq.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/support/SlcPage.tsx", "src/pages/support/ServingNowPage.tsx", "src/components/Layout.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/pages/support/HowYouThinkAndLearnPage.tsx", "src/routes/support/faq.tsx", "src/pages/support/FaqPage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
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

  it("retires the Understanding Dyslexia preview address and keeps the final address out of discovery content", () => {
    // Only the tests may still name the old preview address.
    const tests = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (tests.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("understanding-dyslexia-preview"), path).toBe(false);
    }
    // Switch-over step 2: links to What We Do and the /about/what-we-do and /why-it-matters redirects now point straight here.
    const allowed = new Set([...REVIEW_AIDS, "src/components/Layout.tsx", "src/routes/insights/understanding-dyslexia.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/components/Navbar.tsx", "src/components/Footer.tsx", "src/components/navFooter.test.ts", "src/pages/about/OurStoryPage.tsx", "src/pages/support/InsightsLandingPage.tsx", "src/routes/about/what-we-do.tsx", "src/routes/why-it-matters.tsx", "src/routeTree.gen.ts", ...tests]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/insights/understanding-dyslexia"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("understanding-dyslexia")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("understanding-dyslexia")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("understanding-dyslexia")).toBe(false);
    expect(getPageDate("/insights/understanding-dyslexia")).toBeUndefined();
  });

  it("serves Understanding Dyslexia at /insights/understanding-dyslexia, still hidden, bannered, skipped and without structured data", () => {
    const route = readFileSync("src/routes/insights/understanding-dyslexia.tsx", "utf8");
    const page = readFileSync("src/pages/support/UnderstandingDyslexiaPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/insights/understanding-dyslexia")');
    expect(route).toContain("component: UnderstandingDyslexiaPage");
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/insights/understanding-dyslexia"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("copies the old Why It Matters body word for word, changing only the h1", () => {
    // The old body is kept for rollback in src/pages/_old since switch-over step 2.
    const live = readFileSync("src/pages/_old/WhyItMattersPage.tsx", "utf8");
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

  it("gives Understanding Dyslexia a Home > Insights breadcrumb pointing at /insights", () => {
    const page = readFileSync("src/pages/support/UnderstandingDyslexiaPage.tsx", "utf8");
    expect(page).toContain('<Link to="/insights">Insights</Link>');
    expect(page).toContain('<span aria-current="page">Understanding Dyslexia</span>');
    expect(page).toContain("support-staged-page");
  });

  it("retires What We Do and Why It Matters into src/pages/_old, both addresses redirecting to Understanding Dyslexia", () => {
    expect(readFileSync("src/pages/_old/WhatWeDoPage.tsx", "utf8")).toContain('import WhyItMattersPage from "./WhyItMattersPage";');
    expect(readFileSync("src/routes/why-it-matters.tsx", "utf8")).toContain('throw redirect({ to: "/insights/understanding-dyslexia", statusCode: 301 });');
    expect(readFileSync("src/routes/about/what-we-do.tsx", "utf8")).toContain('throw redirect({ to: "/insights/understanding-dyslexia", statusCode: 301 });');
    expect(readFileSync("src/pages/_old/WhyItMattersPage.tsx", "utf8")).toContain("Why Dyslexia Awareness Matters in Defence</h1>");
  });

  it("points Supporting someone card 1 at Understanding Dyslexia, leaving profile cards on how you think and learn", () => {
    const supporting = readFileSync("src/pages/support/SupportingSomeonePage.tsx", "utf8");
    expect(supporting).toContain('title: "Understanding how dyslexia works",\n    description: "What dyslexia is, how it shows up day to day, and what helps. An explanation, not a label.",\n    links: [{ label: "Read the guidance", to: "/insights/understanding-dyslexia"');
    expect(supporting).not.toContain("/support/how-you-think-and-learn");
    for (const name of ["ThinkingOfJoiningPage.tsx", "LeavingOrLeftServicePage.tsx", "StartHerePage.tsx"]) {
      expect(readFileSync(`src/pages/support/${name}`, "utf8"), name).toContain("/support/how-you-think-and-learn");
    }
  });

  it("retires the Insights preview address everywhere except the tests", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/insights-preview"), path).toBe(false);
    }
  });

  it("serves the new Insights page at /insights, still hidden, bannered and without structured data", () => {
    const route = readFileSync("src/routes/insights/index.tsx", "utf8");
    const page = readFileSync("src/pages/support/InsightsLandingPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/insights/")');
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/insights"');
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

  it("retires the Serving now preview address everywhere except the tests", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/serving-now-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/serving-now-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("serving-now-preview")).toBe(false);
    expect(getPageDate("/support/serving-now-preview")).toBeUndefined();
  });

  it("serves Serving now at /support/currently-serving, still hidden, bannered and in the serving accent", () => {
    const route = readFileSync("src/routes/support/currently-serving.tsx", "utf8");
    const page = readFileSync("src/pages/support/ServingNowPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/currently-serving")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-route-serving");
    expect(readFileSync("src/styles.css", "utf8")).toMatch(/--route-serving:\s*#B93030;/);
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/support/currently-serving"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("keeps Serving now to existing wording and the staged FAQ", () => {
    const page = readFileSync("src/pages/support/ServingNowPage.tsx", "utf8");
    const text = (page + readFileSync("src/routes/support/currently-serving.tsx", "utf8")).toLowerCase();
    for (const phrase of ["legally required to declare", "dyslexia is not a barrier", "reasonable adjustments", "serve at every rank"]) expect(text.includes(phrase), phrase).toBe(false);
    expect(page).not.toContain("\u2014");
    expect(page).not.toMatch(/£\s?\d/);
    expect(page).not.toContain("faqCategories");
    expect(page).not.toContain("/about/faq");
    expect(page).not.toContain("1.2 MB");
    expect(filterFaqs(FAQ_ITEMS, "serving").length).toBeGreaterThan(0);
    // Defence Dyslexia Network, SLC and video content matches the old page kept for rollback.
    const live = readFileSync("src/pages/_old/CurrentlyServingPage.tsx", "utf8");
    for (const snippet of ["2000+", "250", "3 services", "Other resources will be added as soon as possible.", "https://modgovuk.sharepoint.com/sites/dddefencedyslexianetwork/SitePages/Home.aspx", "https://jive.defencegateway.mod.uk/groups/dyslexia-network", "https://link.militaryapp.org/rlc/Jb2gM", "Requires serving military status to join", "We have a pre filled application template to help.", "https://www.youtube.com/embed/ET8ddLATf5E"]) {
      expect(live, snippet).toContain(snippet);
      expect(page, snippet).toContain(snippet);
    }
    expect(page.match(/target="_blank"/g)?.length).toBe(page.match(/rel="noopener noreferrer"/g)?.length);
  });

  it("routes /support/currently-serving to the new Serving now page, not the old one", () => {
    const live = readFileSync("src/routes/support/currently-serving.tsx", "utf8");
    expect(live).toContain('createFileRoute("/support/currently-serving")');
    expect(live).toContain('import ServingNowPage from "@/pages/support/ServingNowPage"');
    expect(live).toContain("component: ServingNowPage");
    expect(live).not.toContain("CurrentlyServingPage");
  });

  it("routes /insights to the new Insights page, with no dynamic /insights/$ route to conflict with articles", () => {
    const live = readFileSync("src/routes/insights/index.tsx", "utf8");
    expect(live).toContain('import InsightsLandingPage from "@/pages/support/InsightsLandingPage"');
    expect(live).toContain("component: InsightsLandingPage");
    expect(live).not.toContain("InsightsPage\"");
    expect(files("src/routes").some(path => /insights[\\/]\$|insights\.\$/.test(path))).toBe(false);
    expect(readFileSync("src/components/SupportTabs.tsx", "utf8")).toContain('{ label: "Insights", to: "/insights" }');
  });

  it("retires the SLC preview address everywhere except the tests", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/slc-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("slc-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("slc-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("slc-preview")).toBe(false);
    expect(getPageDate("/support/slc-preview")).toBeUndefined();
  });

  it("serves the new SLC page at /currently-serving/standard-learning-credits, still hidden, bannered and in the serving accent", () => {
    const route = readFileSync("src/routes/currently-serving/standard-learning-credits.tsx", "utf8");
    const page = readFileSync("src/pages/support/SlcPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/currently-serving/standard-learning-credits")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-route-serving");
    expect(page).toContain('activePath="/support/start-here"');
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/currently-serving/standard-learning-credits"');
    for (const text of [route, page]) {
      expect(text).not.toContain("ld+json");
      expect(text).not.toContain("FAQPage");
    }
  });

  it("keeps the SLC page to existing wording and rules", () => {
    const page = readFileSync("src/pages/support/SlcPage.tsx", "utf8");
    const content = readFileSync("src/pages/support/slcContent.ts", "utf8");
    const text = (page + content + readFileSync("src/routes/currently-serving/standard-learning-credits.tsx", "utf8")).toLowerCase();
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

  it("keeps the shared SLC content identical to the old SLC page kept for rollback", () => {
    const live = readFileSync("src/pages/_old/StandardLearningCreditsPage.tsx", "utf8");
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

  it("routes /currently-serving/standard-learning-credits to the new SLC page, as its only address", () => {
    const live = readFileSync("src/routes/currently-serving/standard-learning-credits.tsx", "utf8");
    expect(live).toContain('createFileRoute("/currently-serving/standard-learning-credits")');
    expect(live).toContain('import SlcPage from "@/pages/support/SlcPage"');
    expect(live).toContain("component: SlcPage");
    expect(live).not.toContain("StandardLearningCreditsPage");
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    expect(routeText.match(/component: SlcPage\b/g)).toHaveLength(1);
  });

  it("retires the About us preview address everywhere except the tests", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/about-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("about-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("about-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("about-preview")).toBe(false);
    expect(getPageDate("/about-preview")).toBeUndefined();
  });

  it("serves About us at /about, still hidden, bannered and outside Get support", () => {
    const route = readFileSync("src/routes/about/index.tsx", "utf8");
    const page = readFileSync("src/pages/AboutHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/about/")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/about"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("links the About us preview only to existing pages, without What we do or FAQ", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const links = [...ABOUT_CARDS, ...GOVERNANCE_CARDS, ...MORE_LINKS].map(item => item.to);
    expect(links).toEqual(["/about/our-story", "/about/what-we-want-to-achieve", "/partner", "/governance", "/accessibility", "/contact", "/support/start-here", "/insights", "/lived-experiences", "/join"]);
    for (const to of links) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    const page = readFileSync("src/pages/AboutHubPage.tsx", "utf8");
    for (const banned of ["/about/what-we-do", "/about/why-we-are-here", "/why-it-matters", "/insights/understanding-dyslexia", "/about/faq", "/support/faq", "What we do and why"]) expect(page, banned).not.toContain(banned);
    // Only the shared stylesheet import may mention a Get support sub-path.
    // Since switch-over step 2 the Get support link goes straight to Start here.
    expect(page.replace('import "./support/start-here.css";', "").replace('{ title: "Get support", to: "/support/start-here" }', "")).not.toMatch(/\/support\/[a-z]/);
  });

  it("copies the live About intro exactly and adds no banned wording", () => {
    const live = readFileSync("src/pages/_old/AboutPage.tsx", "utf8");
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

  it("routes /about to the new About us page, not the old one", () => {
    const live = readFileSync("src/routes/about/index.tsx", "utf8");
    expect(live).toContain('createFileRoute("/about/")');
    expect(live).toContain('import AboutHubPage from "@/pages/AboutHubPage"');
    expect(live).toContain("component: AboutHubPage");
    expect(live).not.toContain('"@/pages/AboutPage"');
  });

  it("retires the Get involved preview address and keeps /get-involved out of discovery content", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/get-involved-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("get-involved")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("get-involved")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("get-involved")).toBe(false);
    expect(getPageDate("/get-involved")).toBeUndefined();
  });

  it("serves Get involved at /get-involved, still hidden, bannered and outside Get support", () => {
    const route = readFileSync("src/routes/get-involved.tsx", "utf8");
    const page = readFileSync("src/pages/GetInvolvedHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/get-involved")');
    expect(route).toContain("component: GetInvolvedHubPage");
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/get-involved"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("links the Get involved preview only to existing pages and the shared story email", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const internal = [...WAYS_TO_TAKE_PART.flatMap(card => ("to" in card ? [card.to] : [])), ...INVOLVED_MORE_LINKS.map(item => item.to)];
    expect(internal).toEqual(["/community", "/lived-experiences", "/about", "/support/start-here", "/partner", "/insights"]);
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
    // Since switch-over step 2 the Get support link goes straight to Start here.
    expect(page.replace('import "./support/start-here.css";', "").replace('{ title: "Get support", to: "/support/start-here" }', "")).not.toMatch(/\/support\/[a-z]/);
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

  it("keeps the live menu and footer Get Involved on /join while /get-involved serves the new hub", () => {
    // The live lists are the CURRENT_* ones while the switch-over flags are off (pinned by navFooter.test.ts).
    expect(readFileSync("src/components/Navbar.tsx", "utf8")).toMatch(/CURRENT_NAV_LINKS[\s\S]*?label: "Get Involved",\s*to: "\/join"/);
    expect(readFileSync("src/components/Footer.tsx", "utf8")).toMatch(/CURRENT_FOOTER_COLUMNS[\s\S]*?\{ label: "Get Involved", to: "\/join" \}/);
    expect(files("src/routes").filter(path => /get-involved/.test(path))).toEqual(["src/routes/get-involved.tsx"]);
  });

  it("retires the Partner preview address everywhere except the tests", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/partner-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("partner-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("partner-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("partner-preview")).toBe(false);
    expect(getPageDate("/partner-preview")).toBeUndefined();
    // The licensed Covenant mark stays hidden beside the sponsorship packages, now at /partner only.
    expect(readFileSync("src/components/CovenantPledgeBand.tsx", "utf8")).toMatch(/LOGO_EXCLUDED_ROUTES = new Set\(\[\s*"\/partner",/);
  });

  it("serves Partner with us at /partner, still hidden, bannered and outside Get support", () => {
    const route = readFileSync("src/routes/partner.tsx", "utf8");
    const page = readFileSync("src/pages/PartnerHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/partner")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/partner"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("links the Partner preview only to existing pages", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const page = readFileSync("src/pages/PartnerHubPage.tsx", "utf8");
    expect(PARTNER_MORE_LINKS.map(item => [item.title, item.to])).toEqual([["About us", "/about"], ["Get support", "/support/start-here"], ["Get involved", "/join"], ["Insights", "/insights"]]);
    const internal = [...page.matchAll(/to="([^"]+)"/g)].map(match => match[1]);
    expect(internal).toEqual(["/", "/about", "/join", "/armed-forces-covenant", "/join", "/contact"]);
    for (const to of [...internal, ...PARTNER_MORE_LINKS.map(item => item.to)]) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    // Since switch-over step 2 the Get support link goes straight to Start here.
    expect(page.replace('import "./support/start-here.css";', "").replace('{ title: "Get support", to: "/support/start-here" }', "")).not.toMatch(/\/support\/[a-z]/);
    expect(page).not.toContain("Find out more");
    // No partners page exists, so the "Our partners" card is left out.
    expect(page).not.toContain("Our partners");
  });

  it("carries every live Partner page sentence, figure and list item across unchanged", () => {
    const text = (path: string) => readFileSync(path, "utf8").replace(/<span className="sr-only">[^<]*<\/span>/g, "").replace(/\{" "\}/g, " ").replace(/&nbsp;/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").replace(/ ([.,:?])/g, "$1");
    const live = text("src/pages/_old/PartnerPage.tsx");
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
    expect(readFileSync("src/pages/_old/PartnerPage.tsx", "utf8")).toContain(madeBy);
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

  it("routes /partner to the new Partner with us page, not the old one", () => {
    const live = readFileSync("src/routes/partner.tsx", "utf8");
    expect(live).toContain('createFileRoute("/partner")');
    expect(live).toContain('import PartnerHubPage from "@/pages/PartnerHubPage"');
    expect(live).toContain("component: PartnerHubPage");
    expect(live).not.toContain('"@/pages/PartnerPage"');
  });

  it("retires the Lived experiences preview address everywhere except the tests", () => {
    const allowed = new Set(["src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html|md|json)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/lived-experiences-preview"), path).toBe(false);
    }
    expect(readFileSync("public/sitemap.xml", "utf8").includes("lived-experiences-preview")).toBe(false);
    expect(readFileSync("public/llms.txt", "utf8").includes("lived-experiences-preview")).toBe(false);
    expect(readFileSync("src/lib/seo.ts", "utf8").includes("lived-experiences-preview")).toBe(false);
    expect(getPageDate("/lived-experiences-preview")).toBeUndefined();
  });

  it("serves Lived experiences at /lived-experiences, still hidden, bannered and without the navy share banner", () => {
    const route = readFileSync("src/routes/lived-experiences/index.tsx", "utf8");
    const page = readFileSync("src/pages/LivedExperiencesHubPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/lived-experiences/")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-staged-page");
    expect(page).not.toMatch(/support-route-(joining|serving|leaving|supporting)/);
    expect(page).not.toContain("SupportTabs");
    expect(page).not.toContain("support-identity-strip");
    expect(page).not.toContain("<ShareLivedExperienceBanner");
    expect(page).toContain("href={SHARE_MAILTO}");
    expect(readFileSync("src/components/Layout.tsx", "utf8")).toContain('"/lived-experiences"');
    for (const text of [route, page]) expect(text).not.toContain("ld+json");
  });

  it("uses the old page's intro, the supplied wording and only existing pages on Lived experiences", () => {
    const intro = "Everyone's journey is different. These stories share personal experiences from across the defence community. They are not official guidance. They are individual perspectives intended to help others feel understood, informed and less alone.";
    const page = readFileSync("src/pages/LivedExperiencesHubPage.tsx", "utf8");
    expect(readFileSync("src/pages/_old/LivedExperiencesPage.tsx", "utf8")).toContain(intro);
    for (const text of [intro, "Browse stories", "Read their story", "Your story helps others feel less alone and helps us show what real support looks like.", "When you email us, you choose whether we share your story with your name, anonymously, or not at all.", "Stories are personal views. They are not the view of the MOD or of the internal Defence Dyslexia Network.", "More from Dyslexia in Defence"]) expect(page, text).toContain(text);
    expect(page).not.toContain("\u2014");
    expect(page).toContain('<Link to="/join">Get involved</Link>');
    expect(LIVED_MORE_LINKS.map(item => [item.title, item.to])).toEqual([["Join the Network", "/join"], ["Community", "/community"], ["Get support", "/support/start-here"], ["Insights", "/insights"]]);
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const to of ["/", "/join", "/community", "/support/start-here", "/insights"]) {
      expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    }
    // Since switch-over step 2 the Get support link goes straight to Start here.
    expect(page.replace('import "./support/start-here.css";', "").replace('{ title: "Get support", to: "/support/start-here" }', "")).not.toMatch(/\/support\/[a-z]/);
  });

  it("routes /lived-experiences to the new index, leaving every story address unchanged", () => {
    const live = readFileSync("src/routes/lived-experiences/index.tsx", "utf8");
    expect(live).toContain('createFileRoute("/lived-experiences/")');
    expect(live).toContain('import LivedExperiencesHubPage from "@/pages/LivedExperiencesHubPage"');
    expect(live).toContain("component: LivedExperiencesHubPage");
    expect(live).not.toContain('"@/pages/LivedExperiencesPage"');
    const stories = files("src/routes/lived-experiences").map(path => path.replace("src/routes/lived-experiences/", "")).sort();
    expect(stories).toEqual(["index.tsx", "lisa-hodge-civil-servant.tsx", "liz-oliver-british-army-veteran.tsx", "major-lena-beardsell.tsx", "staff-sergeant-kirk-davis-british-army.tsx", "symon-smith-british-army-veteran.tsx"]);
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
      ["Get support", "Serving now", "/support/currently-serving", "/support/currently-serving"],
      ["Get support", "Leaving or left service", "/support/leaving-or-left-service", "New page"],
      ["Get support", "Supporting someone", "/support/supporting-someone", "New page"],
      ["Get support", "Guidance", "/support/guidance", "New page"],
      ["Get support", "Downloads and tools", "/support/downloads-and-tools", "New page"],
      ["Get support", "FAQ", "/support/faq", "New page"],
      ["Get support", "Understanding how you think and learn", "/support/how-you-think-and-learn", "New page"],
      ["Get support", "Understanding Dyslexia", "/insights/understanding-dyslexia", "the What We Do text"],
      ["Get support", "Insights", "/insights", "/insights"],
      ["Get support", "Standard Learning Credits", "/currently-serving/standard-learning-credits", "/currently-serving/standard-learning-credits"],
      ["Get support", "Serving with dyslexia in the Army (skeleton)", "/insights/army-guide-preview", "New page"],
      ["About and involvement", "About Us", "/about", "/about"],
      ["About and involvement", "Get Involved", "/get-involved", "New page"],
      ["About and involvement", "Partner with us", "/partner", "/partner"],
      ["About and involvement", "Lived experiences", "/lived-experiences", "/lived-experiences"],
    ]);
    expect(REVIEW_GROUPS[1]!.entries.find(entry => entry.name === "Get Involved")!.finalAddress).toBe("/get-involved");
    expect(REVIEW_GROUPS[0]!.entries.find(entry => entry.name === "Understanding Dyslexia")!.finalAddress).toBe("/insights/understanding-dyslexia");
    for (const [, , to] of rows) expect(routeText.includes(`createFileRoute("${to}")`) || routeText.includes(`createFileRoute("${to}/")`), to).toBe(true);
    // Every entry now opens its final address, apart from the Army guide skeleton.
    for (const entry of REVIEW_GROUPS.flatMap(group => group.entries)) {
      if (entry.to === "/insights/army-guide-preview") continue;
      expect(entry.to, entry.name).toBe(entry.finalAddress);
    }
  });
});

const RECRUITMENT_SCREENING = "Dyslexia screening is not a requirement of recruitment.";
const DECLARE_ANSWER = "Dyslexia screening is not a requirement of recruitment. Practice differs by Service once training starts. Ask your recruiter what the application asks, so you know what to expect. Declaring can help others understand how you work best, but what support follows varies by service. Once you are serving, there is no requirement to tell your chain of command if it does not affect your training or work. If it does, or you need Defence involvement, you are advised to tell them at the first opportunity.";
// Old pages kept for rollback in src/pages/_old and ArmyEducationCentresPage stay out.
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

  it("gives the Army guide a Home > Insights breadcrumb pointing at /insights", () => {
    const page = readFileSync(PAGE, "utf8");
    expect(page).toContain('<Link to="/insights">Insights</Link>');
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

describe("Switch-over step 1: final addresses", () => {
  const PREVIEW_ADDRESSES = ["/support/insights-preview", "/support/understanding-dyslexia-preview", "/support/serving-now-preview", "/support/slc-preview", "/about-preview", "/partner-preview", "/lived-experiences-preview", "/get-involved-preview"];
  // Step 2 retired ResourcesPage, AboutFaqPage (was about/FaqPage), WhyWeAreHerePage, WhatWeDoPage and the WhyItMattersPage body it rendered.
  const OLD_PAGES = ["InsightsPage", "AboutPage", "PartnerPage", "LivedExperiencesPage", "SupportPage", "CurrentlyServingPage", "StandardLearningCreditsPage", "ResourcesPage", "AboutFaqPage", "WhyWeAreHerePage", "WhatWeDoPage", "WhyItMattersPage"];
  const routeText = () => files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");

  it("has no route left for any old preview address, so each returns the not-found page", () => {
    const text = routeText();
    for (const address of PREVIEW_ADDRESSES) {
      expect(text.includes(`createFileRoute("${address}")`), address).toBe(false);
      expect(text.includes(`"${address}"`), address).toBe(false);
    }
  });

  it("keeps the review page and the Army guide skeleton at their hidden addresses", () => {
    const text = routeText();
    expect(text).toContain('createFileRoute("/review-preview")');
    expect(text).toContain('createFileRoute("/insights/army-guide-preview")');
  });

  it("permanently redirects /support to Start here at server level", () => {
    const route = readFileSync("src/routes/support/index.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/")');
    expect(route).toContain('throw redirect({ to: "/support/start-here", statusCode: 301 });');
    expect(route).not.toContain("component:");
  });

  it("keeps the old pages in src/pages/_old, marked for removal and imported by nothing", () => {
    for (const name of OLD_PAGES) {
      const source = readFileSync(`src/pages/_old/${name}.tsx`, "utf8");
      expect(source.startsWith("// OLD: remove one week after Publish 2"), name).toBe(true);
    }
    expect(readdirSync("src/pages/_old").sort()).toEqual(OLD_PAGES.map(name => `${name}.tsx`).sort());
    for (const path of files("src")) {
      // Tests only read old files as text, and may quote their import lines.
      if (path.startsWith("src/pages/_old/") || /\.test\.tsx?$/.test(path) || !/\.tsx?$/.test(path)) continue;
      const source = readFileSync(path, "utf8");
      expect(/from\s+["'][^"']*pages\/_old/.test(source), path).toBe(false);
      for (const name of OLD_PAGES) expect(new RegExp(`from\\s+["'][^"']*/${name}["']`).test(source), `${path} imports ${name}`).toBe(false);
    }
  });

  it("keeps the existing sitemap and page dates for moved pages that already had them", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    const dates = { "/about": "2026-10-24", "/partner": "2026-10-24", "/lived-experiences": "2026-10-24", "/insights": "2026-11-13", "/support/currently-serving": "2026-10-24", "/currently-serving/standard-learning-credits": "2026-10-30" } as const;
    for (const [path, date] of Object.entries(dates)) {
      expect(getPageDate(path), path).toBe(date);
      expect(sitemap, path).toContain(`<loc>https://dyslexiaindefence.com${path}</loc>`);
    }
  });

  it("keeps every moved page noindex, with no structured data", () => {
    for (const path of ["src/routes/insights/index.tsx", "src/routes/insights/understanding-dyslexia.tsx", "src/routes/support/currently-serving.tsx", "src/routes/currently-serving/standard-learning-credits.tsx", "src/routes/about/index.tsx", "src/routes/partner.tsx", "src/routes/lived-experiences/index.tsx", "src/routes/get-involved.tsx"]) {
      const route = readFileSync(path, "utf8");
      expect(route, path).toContain('{ name: "robots", content: "noindex, nofollow" }');
      expect(route, path).not.toContain("...pageHead");
      expect(route, path).not.toContain("scripts");
      expect(route, path).not.toContain("ld+json");
    }
  });
});

describe("Switch-over step 2: redirects and link repoints", () => {
  const routeFiles = () => files("src/routes").filter(path => path.endsWith(".tsx"));
  const routeFor = (address: string) => routeFiles().find(path => {
    const text = readFileSync(path, "utf8");
    return text.includes(`createFileRoute("${address}")`) || text.includes(`createFileRoute("${address}/")`);
  });
  const REDIRECTS = [
    ["/resources", "/support/start-here"],
    ["/about/faq", "/support/faq"],
    ["/about/why-we-are-here", "/about"],
    ["/about/what-we-do", "/insights/understanding-dyslexia"],
    ["/why-it-matters", "/insights/understanding-dyslexia"],
    ["/support", "/support/start-here"],
  ] as const;
  const RETIRED = ["/about/faq", "/resources", "/about/why-we-are-here", "/about/what-we-do", "/why-it-matters", "/support"];
  const REDIRECT_FILES = new Set(["src/routes/resources.tsx", "src/routes/about/faq.tsx", "src/routes/about/why-we-are-here.tsx", "src/routes/about/what-we-do.tsx", "src/routes/why-it-matters.tsx", "src/routes/support/index.tsx"]);

  for (const [from, to] of REDIRECTS) {
    it(`permanently redirects ${from} to ${to}, a real page`, () => {
      const source = routeFor(from);
      expect(source, from).toBeDefined();
      const route = readFileSync(source!, "utf8");
      expect(route).toContain(`throw redirect({ to: "${to}", statusCode: 301 });`);
      expect(route).not.toContain("component:");
      const destination = routeFor(to);
      expect(destination, to).toBeDefined();
      const target = readFileSync(destination!, "utf8");
      expect(target, to).toContain("component:");
      expect(target, to).not.toContain("throw redirect(");
    });
  }

  it("has no redirect chains or loops anywhere", () => {
    const redirects = routeFiles().flatMap(path => {
      const text = readFileSync(path, "utf8");
      const match = text.match(/throw redirect\(\{ to: "([^"]+)"/);
      return match ? [match[1]!] : [];
    });
    expect(redirects.length).toBeGreaterThanOrEqual(REDIRECTS.length);
    for (const to of redirects) {
      const destination = routeFor(to);
      expect(destination, to).toBeDefined();
      expect(readFileSync(destination!, "utf8").includes("throw redirect("), `${to} is itself a redirect`).toBe(false);
    }
  });

  it("has no internal link in src pointing at a retired address", () => {
    const pattern = new RegExp(`\\b(?:to|href|target)\\s*[=:]\\s*\\{?\\s*["'\`](?:https://(?:www\\.)?dyslexiaindefence\\.com)?(${RETIRED.map(a => a.replace(/\//g, "\\/")).join("|")})\\/?(?=["'\`#?])`, "g");
    expect('<Link to="/about/faq">').toMatch(pattern);
    expect('{ title: "Get support", to: "/support" }').toMatch(pattern);
    expect('<Link to="/support/faq">').not.toMatch(pattern);
    for (const path of files("src")) {
      if (REDIRECT_FILES.has(path) || path.startsWith("src/pages/_old/") || path === "src/routeTree.gen.ts" || /\.test\.tsx?$/.test(path) || !/\.tsx?$/.test(path)) continue;
      const found = [...readFileSync(path, "utf8").matchAll(pattern)].map(m => m[0]);
      expect(found, path).toEqual([]);
    }
  });

  it("points every route page's full-answer and all-FAQs links at the Get support FAQ", () => {
    for (const name of ["ThinkingOfJoiningPage.tsx", "SupportingSomeonePage.tsx", "LeavingOrLeftServicePage.tsx"]) {
      const page = readFileSync(`src/pages/support/${name}`, "utf8");
      expect(page, name).toContain('<Link to="/support/faq" className={textLink} aria-label={`Read the full answer: ${item.q}`}>Read the full answer');
      expect(page, name).toContain('<Link to="/support/faq" className={textLink}>See all FAQs');
    }
  });

  it("sends every Get support breadcrumb straight to Start here", () => {
    for (const name of ["StartHerePage.tsx", "ThinkingOfJoiningPage.tsx", "LeavingOrLeftServicePage.tsx", "SupportingSomeonePage.tsx", "GuidancePage.tsx", "DownloadsAndToolsPage.tsx", "FaqPage.tsx", "HowYouThinkAndLearnPage.tsx", "InsightsLandingPage.tsx", "ServingNowPage.tsx", "SlcPage.tsx"]) {
      expect(readFileSync(`src/pages/support/${name}`, "utf8"), name).toContain('<Link to="/support/start-here">Get support</Link>');
    }
  });

  it("keeps the new About page free of What We Do and Why we are here links", () => {
    const page = readFileSync("src/pages/AboutHubPage.tsx", "utf8");
    for (const banned of ["/about/what-we-do", "/about/why-we-are-here", "/why-it-matters"]) expect(page, banned).not.toContain(banned);
    expect(readFileSync("src/routes/about/index.tsx", "utf8")).toContain("AboutHubPage");
  });
  it("sends automatic page-trail steps for redirected addresses straight to the final page", () => {
    expect(CRUMB_TARGETS).toEqual({ "/support": "/support/start-here", "/currently-serving": "/support/currently-serving" });
    for (const [from, to] of Object.entries(CRUMB_TARGETS)) {
      expect(readFileSync(routeFor(from)!, "utf8"), from).toContain(`throw redirect({ to: "${to}", statusCode: 301 });`);
    }
  });
});
