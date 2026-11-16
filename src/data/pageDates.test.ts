import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { EVIDENCE_DATA_AS_AT, PAGE_DATES, formatPageDate, getPageDate } from "./pageDates";
import { PUBLIC_PAGES, pageHead } from "../lib/seo";

function routeFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? routeFiles(path) : [path];
  });
}

// Switch-over step 4: every redesigned page went public on 14 November 2026.
const NOV_14_PAGES = [
  "/about",
  "/partner",
  "/lived-experiences",
  "/get-involved",
  "/insights/understanding-dyslexia",
  "/currently-serving/standard-learning-credits",
  "/support/start-here",
  "/support/thinking-of-joining",
  "/support/leaving-or-left-service",
  "/support/supporting-someone",
  "/support/guidance",
  "/support/downloads-and-tools",
  "/support/faq",
  "/support/how-you-think-and-learn",
];

// Homepage Prompt A: Insights and Serving now content changed again on 16 November 2026.
const PROMPT_A_PAGES = ["/insights", "/support/currently-serving"];

// Prompt B (16 November 2026): the guide articles, Army Education Centres, Community and Join gained the
// shared page headers and the articles lost the "Still unsure" box.
const PROMPT_B_PAGES = [
  "/insights/can-you-join-army-with-dyslexia-uk",
  "/insights/can-you-join-navy-with-dyslexia-uk",
  "/insights/can-you-join-raf-with-dyslexia-uk",
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk",
  "/insights/is-dyslexia-a-barrier-in-the-military-uk",
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk",
  "/insights/neurodiversity-in-the-mod-uk",
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk",
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk",
  "/currently-serving/army-education-centres",
  "/community",
  "/join",
];

const NOV_16_PAGES = [...PROMPT_A_PAGES, ...PROMPT_B_PAGES];

describe("Page date rules", () => {
  it("maps every page to its honest content date", () => {
    expect(Object.keys(PAGE_DATES)).toHaveLength(46);
    for (const [path, date] of Object.entries(PAGE_DATES)) {
      if (path.startsWith("/governance")) continue;
      if (path === "/contact") continue;
      if (path === "/lived-experiences/liz-oliver-british-army-veteran") continue;
      if (NOV_14_PAGES.includes(path)) continue;
      if (NOV_16_PAGES.includes(path)) continue;
      expect(date, path).toBe("2026-10-24");
    }
    for (const path of NOV_14_PAGES) expect(PAGE_DATES[path], path).toBe("2026-11-14");
    for (const path of NOV_16_PAGES) expect(PAGE_DATES[path], path).toBe("2026-11-16");
    expect(PAGE_DATES["/governance"]).toBe("2026-08-08");
    expect(PAGE_DATES["/governance/founder"]).toBe("2026-08-08");
    expect(PAGE_DATES["/governance/sponsorship"]).toBe("2026-03-01");
    expect(PAGE_DATES["/governance/transparency"]).toBe("2026-03-01");
    expect(PAGE_DATES["/governance/code-of-conduct"]).toBe("2026-03-01");
    expect(PAGE_DATES["/governance/safeguarding"]).toBe("2026-11-02");
    expect(PAGE_DATES["/governance/privacy"]).toBe("2026-11-02");
    expect(PAGE_DATES["/contact"]).toBe("2026-10-25");
    expect(formatPageDate("2026-10-24")).toBe("24 October 2026");
  });

  it("dates the redesigned SLC page to its public launch on 14 November 2026", () => {
    expect(getPageDate("/currently-serving/standard-learning-credits")).toBe("2026-11-14");
    expect(formatPageDate(getPageDate("/currently-serving/standard-learning-credits") ?? "")).toBe("14 November 2026");
  });

  it("dates Liz Oliver's story to 6 November 2026", () => {
    expect(getPageDate("/lived-experiences/liz-oliver-british-army-veteran")).toBe("2026-11-06");
  });

  it("gives the five redirecting addresses retired in step 5 no date, search entry or structured data", () => {
    for (const path of ["/support", "/about/faq", "/about/what-we-do", "/about/why-we-are-here", "/resources"]) {
      expect(getPageDate(path), path).toBeUndefined();
      expect(PAGE_DATES, path).not.toHaveProperty(path);
      expect(PUBLIC_PAGES, path).not.toHaveProperty(path);
      expect(pageHead(path), path).not.toHaveProperty("scripts");
    }
  });

  it("covers every content route except the homepage, newsletters and evidence", () => {
    for (const path of routeFiles("src/routes")) {
      const text = readFileSync(path, "utf8");
      if (!text.includes("component:") || path.endsWith("__root.tsx")) continue;
      const route = text.match(/createFileRoute\("([^"]+)"\)/)?.[1]?.replace(/\/$/, "");
      if (!route || route === "/evidence" || route === "/insights/army-guide-preview" || route.startsWith("/newsletters/")) continue;
      expect(getPageDate(route), route).toBeDefined();
    }
  });

  it("excludes homepage, newsletters, redirects and unknown paths", () => {
    for (const path of ["/", "/newsletters/october-2026", "/why-it-matters", "/privacy", "/achieve", "/ask", "/structure", "/currently-serving", "/insights/serving-with-dyslexia-in-the-army-uk", "/not-a-page", "/evidence"]) {
      expect(getPageDate(path), path).toBeUndefined();
    }
  });

  it("dates every page made public in step 4 and gives it WebPage and BreadcrumbList data only", () => {
    for (const path of [...NOV_14_PAGES, ...PROMPT_A_PAGES]) {
      expect(getPageDate(path), path).toBe(PROMPT_A_PAGES.includes(path) ? "2026-11-16" : "2026-11-14");
      const head = pageHead(path);
      const types = ("scripts" in head ? head.scripts ?? [] : []).map(script => JSON.parse(script.children)["@type"]);
      expect(types, path).toEqual(["WebPage", "BreadcrumbList"]);
    }
  });

  it("excludes the Army guide skeleton from public dates and structured data", () => {
    expect(getPageDate("/insights/army-guide-preview")).toBeUndefined();
    expect(pageHead("/insights/army-guide-preview")).not.toHaveProperty("scripts");
  });

  it("gives the removed Redesign review address no date or structured data", () => {
    expect(getPageDate("/review-preview")).toBeUndefined();
    expect(pageHead("/review-preview")).not.toHaveProperty("scripts");
  });

  it("retires the old preview addresses with no dates or structured data", () => {
    for (const path of ["/support/insights-preview", "/support/understanding-dyslexia-preview", "/support/serving-now-preview", "/support/slc-preview", "/about-preview", "/get-involved-preview", "/partner-preview", "/lived-experiences-preview"]) {
      expect(getPageDate(path), path).toBeUndefined();
      expect(pageHead(path), path).not.toHaveProperty("scripts");
    }
  });

  it("uses October 2026 for the evidence reporting period", () => {
    expect(EVIDENCE_DATA_AS_AT).toEqual({ iso: "2026-10", label: "October 2026" });
  });

  it("shares mapped dates with Article and WebPage metadata", () => {
    for (const path of Object.keys(PAGE_DATES)) {
      const head = pageHead(path);
      for (const script of "scripts" in head ? head.scripts ?? [] : []) {
        const schema = JSON.parse(script.children);
        // A page trail carries no date of its own.
        if (schema["@type"] === "BreadcrumbList") continue;
        expect(schema.dateModified, path).toBe(getPageDate(path));
      }
    }
    for (const [path, type] of [["/about", "WebPage"], ["/insights", "WebPage"], ["/insights/can-you-join-army-with-dyslexia-uk", "Article"], ["/lived-experiences/major-lena-beardsell", "Article"]] as const) {
      const head = pageHead(path);
      const script = "scripts" in head ? head.scripts?.[0] : undefined;
      expect(script).toBeDefined();
      expect(JSON.parse(script?.children ?? "{}")["@type"]).toBe(type);
    }
  });

  it("matches every mapped sitemap URL to its content date", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    for (const match of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const block = match[1];
      if (!block) throw new Error("Missing sitemap URL block");
      const path = block.match(/<loc>https:\/\/dyslexiaindefence.com([^<]*)<\/loc>/)?.[1];
      if (!path || !getPageDate(path)) continue;
      expect(block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1], path).toBe(getPageDate(path));
    }
  });
});