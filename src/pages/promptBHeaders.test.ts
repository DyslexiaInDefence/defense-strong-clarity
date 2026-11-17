import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { INSIGHT_ARTICLE_TITLES, PAGE_BREADCRUMBS } from "../data/pageBreadcrumbs";
import { getPageDate } from "../data/pageDates";
import { pageHead } from "../lib/seo";

// Prompt B (16 November 2026): shared Get support and Get involved headers, and removal of the
// "Still unsure" box from the guide articles.

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
const read = (path: string) => readFileSync(path, "utf8");
const LIVE_SOURCE = files("src").filter(path => /\.tsx?$/.test(path) && !path.includes(".test.") && !path.startsWith("src/pages/_old/") && !path.endsWith("routeTree.gen.ts"));
const BASE = "https://dyslexiaindefence.com";

const HOME = { name: "Home", path: "/" };
const GET_SUPPORT = { name: "Get support", path: "/support/start-here" };
const GET_INVOLVED = { name: "Get involved", path: "/get-involved" };

const ARTICLES: Record<string, string> = {
  "/insights/can-you-join-army-with-dyslexia-uk": "src/pages/insights/ArmyDyslexiaPage.tsx",
  "/insights/can-you-join-navy-with-dyslexia-uk": "src/pages/insights/NavyDyslexiaPage.tsx",
  "/insights/can-you-join-raf-with-dyslexia-uk": "src/pages/insights/RAFDyslexiaPage.tsx",
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk": "src/pages/insights/DeclareDyslexiaMilitaryPage.tsx",
  "/insights/is-dyslexia-a-barrier-in-the-military-uk": "src/pages/insights/DyslexiaBarrierMilitaryPage.tsx",
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk": "src/pages/insights/JSP822vsEqualityActPage.tsx",
  "/insights/neurodiversity-in-the-mod-uk": "src/pages/insights/NeurodiversityMODPage.tsx",
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk": "src/pages/insights/DyslexiaIdentifiedDuringServicePage.tsx",
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": "src/pages/insights/SupportForDyslexiaMilitaryPage.tsx",
};

const breadcrumbData = (path: string) => {
  const scripts = pageHead(path).scripts ?? [];
  return scripts.map(script => JSON.parse(script.children)).find(schema => schema["@type"] === "BreadcrumbList");
};
const asListItems = (path: string) => (PAGE_BREADCRUMBS[path] ?? []).map((crumb, i) => ({
  "@type": "ListItem",
  position: i + 1,
  name: crumb.name,
  ...(crumb.path ? { item: `${BASE}${crumb.path === "/" ? "" : crumb.path}` } : {}),
}));

describe("Guide articles use the Get support header", () => {
  const layout = () => read("src/components/InsightLayout.tsx");

  it("draws the page trail from the article title and the tabs with Insights marked", () => {
    expect(layout()).toContain('<PageTrail crumbs={insightArticleTrail(title)} label="Get support breadcrumb" />');
    expect(layout()).toContain('<SupportTabs activePath="/insights" onTabPage={false} />');
    expect(layout()).toContain('<div className="support-staged-page text-foreground">');
    expect(layout()).toContain('<div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">');
    expect(read("src/pages/support/InsightsLandingPage.tsx")).toContain('<div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">');
  });

  it("gives all 9 articles the trail Home > Get support > Insights > the article's own H1", () => {
    expect(Object.keys(INSIGHT_ARTICLE_TITLES).sort()).toEqual(Object.keys(ARTICLES).sort());
    for (const [path, file] of Object.entries(ARTICLES)) {
      const page = read(file);
      const title = page.match(/<InsightLayout\s+title="([^"]+)"/)?.[1];
      expect(title, path).toBeDefined();
      expect(PAGE_BREADCRUMBS[path], path).toEqual([HOME, GET_SUPPORT, { name: "Insights", path: "/insights" }, { name: title }]);
    }
  });

  it("removes AudienceRouter, BackToPathway, preCtaLine and the Still unsure box", () => {
    for (const gone of ["AudienceRouter", "BackToPathway", "preCtaLine", "next-steps-heading", "intent"]) expect(layout(), gone).not.toContain(gone);
    for (const file of Object.values(ARTICLES)) {
      expect(read(file), file).not.toContain("preCtaLine");
      expect(read(file).match(/<InsightLayout[^>]*>/)?.[0], file).not.toContain("intent=");
    }
    for (const path of LIVE_SOURCE) {
      expect(read(path), path).not.toMatch(/AudienceRouter|BackToPathway|preCtaLine/);
    }
  });

  it("keeps Article data and adds BreadcrumbList data matching the visible trail", () => {
    for (const path of Object.keys(ARTICLES)) {
      const types = (pageHead(path).scripts ?? []).map(script => JSON.parse(script.children)["@type"]);
      expect(types, path).toEqual(["Article", "BreadcrumbList"]);
      expect(breadcrumbData(path)?.itemListElement, path).toEqual(asListItems(path));
    }
  });
});

describe("Army Education Centres and Evidence use the Get support header", () => {
  it("draws Home > Get support > Army Education Centres with the Guidance tab", () => {
    const page = read("src/pages/support/ArmyEducationCentresPage.tsx");
    expect(page).toContain('<PageTrail crumbs={trailFor("/currently-serving/army-education-centres")} label="Get support breadcrumb" />');
    expect(page).toContain('<SupportTabs activePath="/support/guidance" onTabPage={false} />');
    expect(page).toContain(">Army Education Centres</h1>");
    expect(PAGE_BREADCRUMBS["/currently-serving/army-education-centres"]).toEqual([HOME, GET_SUPPORT, { name: "Army Education Centres" }]);
    expect(breadcrumbData("/currently-serving/army-education-centres")?.itemListElement).toEqual(asListItems("/currently-serving/army-education-centres"));
  });

  it("draws Home > Get support > The data behind the story with the Insights tab", () => {
    const page = read("src/pages/EvidencePage.tsx");
    expect(page).toContain('<PageTrail crumbs={trailFor("/evidence")} label="Get support breadcrumb" />');
    expect(page).toContain('<SupportTabs activePath="/insights" onTabPage={false} />');
    expect(page).toContain(">The data behind the story</h1>");
    expect(PAGE_BREADCRUMBS["/evidence"]).toEqual([HOME, GET_SUPPORT, { name: "The data behind the story" }]);
    // Prompt D: Evidence is public through the shared pageHead, with BreadcrumbList data matching this trail.
    expect(read("src/routes/evidence.tsx")).toContain('head: () => pageHead("/evidence"),');
    expect(read("src/routes/evidence.tsx")).not.toContain("noindex");
    expect(breadcrumbData("/evidence")?.itemListElement).toEqual(asListItems("/evidence"));
  });
});

describe("Community and Join use the Get involved header", () => {
  for (const [path, file, name] of [["/community", "src/pages/CommunityPage.tsx", "Community"], ["/join", "src/pages/JoinPage.tsx", "Join"]] as const) {
    it(`draws Home > Get involved > ${name} with no tabs`, () => {
      const page = read(file);
      expect(page).toContain(`<PageTrail crumbs={trailFor("${path}")} label="Get involved breadcrumb" />`);
      expect(page).not.toContain("SupportTabs");
      expect(PAGE_BREADCRUMBS[path]).toEqual([HOME, GET_INVOLVED, { name }]);
    });
  }

  it("matches Join's BreadcrumbList data to its trail and keeps its WebPage data", () => {
    const types = (pageHead("/join").scripts ?? []).map(script => JSON.parse(script.children)["@type"]);
    expect(types).toEqual(["WebPage", "BreadcrumbList"]);
    expect(breadcrumbData("/join")?.itemListElement).toEqual(asListItems("/join"));
  });

  it("keeps Community noindex with no structured data, as before", () => {
    expect(pageHead("/community").scripts).toBeUndefined();
  });

  it("matches the Get involved hub trail style", () => {
    const trail = read("src/components/PageTrail.tsx");
    const hub = read("src/pages/GetInvolvedHubPage.tsx");
    for (const piece of ['<ol className="flex flex-wrap items-center gap-2 text-base">', '<Button asChild variant="link" className="min-h-11 h-auto px-0 text-base">', '"flex min-h-11 items-center gap-2"', '<span aria-current="page">']) {
      expect(trail, piece).toContain(piece);
    }
    expect(hub).toContain('<ol className="flex flex-wrap items-center gap-2 text-base">');
  });
});

describe("Trail and link integrity", () => {
  it("skips the automatic page trail on every page that draws its own", () => {
    expect(read("src/components/Layout.tsx")).toContain('const showBreadcrumbs = pathname !== "/" && !PAGE_BREADCRUMBS[pathname.replace(/\\/$/, "")];');
  });

  it("has no Still unsure box anywhere in src outside src/pages/_old", () => {
    const phrase = ["Still unsure", "what to do next?"].join(" ");
    const found = files("src").filter(path => !path.startsWith("src/pages/_old/") && read(path).includes(phrase));
    expect(found).toEqual([]);
  });

  it("has no link to /insights#joining or any other page anchor that does not exist", () => {
    const failures: string[] = [];
    for (const path of LIVE_SOURCE) {
      const text = read(path);
      if (/\/insights#/.test(text)) failures.push(`${path}: /insights#`);
      for (const match of text.matchAll(/\b(?:to|href|path)(?:=|:\s*)["'`](\/[^"'`\s#?]*)(?:\?[^"'`\s#]*)?#([^"'`\s]+)["'`]/g)) {
        const [, target = "", fragment = ""] = match;
        const route = files("src/routes").map(read).find(source => source.includes(`createFileRoute("${target}")`) || source.includes(`createFileRoute("${target}/")`));
        const component = route?.match(/import \w+ from "@\/(pages\/[^"]+)"/)?.[1];
        const pageSource = component ? read(`src/${component}.tsx`) : "";
        if (!pageSource.includes(`id="${fragment}"`)) failures.push(`${path}: ${target}#${fragment}`);
      }
    }
    expect(failures).toEqual([]);
  });

  it("dates every changed page 16 November 2026 and sets the homepage sitemap date without a page date", () => {
    for (const path of [...Object.keys(ARTICLES), "/currently-serving/army-education-centres", "/community", "/join"]) {
      expect(getPageDate(path), path).toBe("2026-11-16");
    }
    const sitemap = read("public/sitemap.xml");
    expect(sitemap).toMatch(/<loc>https:\/\/dyslexiaindefence\.com\/<\/loc>\s*<lastmod>2026-11-16<\/lastmod>/);
    expect(getPageDate("/")).toBeUndefined();
    expect(getPageDate("/evidence")).toBe("2026-11-17");
  });

  it("adds no em dash in the new header code", () => {
    for (const path of ["src/components/PageTrail.tsx", "src/components/InsightLayout.tsx", "src/data/pageBreadcrumbs.ts"]) {
      expect(read(path), path).not.toContain("\u2014");
    }
  });
});
