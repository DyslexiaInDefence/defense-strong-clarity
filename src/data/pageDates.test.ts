import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { EVIDENCE_DATA_AS_AT, PAGE_DATES, formatPageDate, getPageDate } from "./pageDates";
import { pageHead } from "../lib/seo";

function routeFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? routeFiles(path) : [path];
  });
}

const OCT_26_PAGES = [
  "/currently-serving/army-education-centres",
  "/insights/can-you-join-navy-with-dyslexia-uk",
  "/insights/can-you-join-raf-with-dyslexia-uk",
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk",
  "/insights/neurodiversity-in-the-mod-uk",
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk",
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk",
];

const NOV_13_PAGES = [
  "/about/faq",
  "/insights",
  "/insights/can-you-join-army-with-dyslexia-uk",
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk",
  "/insights/is-dyslexia-a-barrier-in-the-military-uk",
];

describe("Page date rules", () => {
  it("maps every page to its honest content date", () => {
    expect(Object.keys(PAGE_DATES)).toHaveLength(40);
    for (const [path, date] of Object.entries(PAGE_DATES)) {
      if (path.startsWith("/governance")) continue;
      if (path === "/about/why-we-are-here") continue;
      if (path === "/contact") continue;
      if (path === "/lived-experiences/liz-oliver-british-army-veteran") continue;
      if (path === "/currently-serving/standard-learning-credits") continue;
      if (OCT_26_PAGES.includes(path)) continue;
      if (NOV_13_PAGES.includes(path)) continue;
      expect(date, path).toBe("2026-10-24");
    }
    for (const path of OCT_26_PAGES) expect(PAGE_DATES[path], path).toBe("2026-10-26");
    for (const path of NOV_13_PAGES) expect(PAGE_DATES[path], path).toBe("2026-11-13");
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

  it("dates the SLC content update to 30 October 2026", () => {
    expect(getPageDate("/currently-serving/standard-learning-credits")).toBe("2026-10-30");
    expect(formatPageDate(getPageDate("/currently-serving/standard-learning-credits") ?? "")).toBe("30 October 2026");
  });

  it("dates Liz Oliver's story to 6 November 2026", () => {
    expect(getPageDate("/lived-experiences/liz-oliver-british-army-veteran")).toBe("2026-11-06");
  });

  it("dates Why We Are Here to its first content publication on 25 October 2026", () => {
    expect(getPageDate("/about/why-we-are-here")).toBe("2026-10-25");
    expect(formatPageDate(getPageDate("/about/why-we-are-here") ?? "")).toBe("25 October 2026");
    const head = pageHead("/about/why-we-are-here");
    expect(JSON.parse(head.scripts?.[0]?.children ?? "{}").dateModified).toBe("2026-10-25");
  });

  it("covers every content route except the homepage, newsletters and evidence", () => {
    for (const path of routeFiles("src/routes")) {
      const text = readFileSync(path, "utf8");
      if (!text.includes("component:") || path.endsWith("__root.tsx")) continue;
      const route = text.match(/createFileRoute\("([^"]+)"\)/)?.[1]?.replace(/\/$/, "");
      if (!route || route === "/evidence" || route === "/support/start-here" || route === "/support/thinking-of-joining" || route === "/support/leaving-or-left-service" || route === "/support/supporting-someone" || route === "/support/guidance" || route === "/support/downloads-and-tools" || route === "/support/faq" || route === "/support/how-you-think-and-learn" || route === "/insights/understanding-dyslexia" || route === "/get-involved" || route === "/insights/army-guide-preview" || route === "/review-preview" || route.startsWith("/newsletters/")) continue;
      expect(getPageDate(route), route).toBeDefined();
    }
  });

  it("excludes homepage, newsletters, redirects and unknown paths", () => {
    for (const path of ["/", "/newsletters/october-2026", "/why-it-matters", "/privacy", "/achieve", "/ask", "/structure", "/currently-serving", "/insights/serving-with-dyslexia-in-the-army-uk", "/not-a-page", "/evidence"]) {
      expect(getPageDate(path), path).toBeUndefined();
    }
  });

  it("excludes Supporting someone from public dates and structured data", () => {
    expect(getPageDate("/support/supporting-someone")).toBeUndefined();
    expect(pageHead("/support/supporting-someone")).not.toHaveProperty("scripts");
  });

  it("excludes Guidance from public dates and structured data", () => {
    expect(getPageDate("/support/guidance")).toBeUndefined();
    expect(pageHead("/support/guidance")).not.toHaveProperty("scripts");
  });

  it("excludes the staged FAQ from public dates and structured data", () => {
    expect(getPageDate("/support/faq")).toBeUndefined();
    expect(pageHead("/support/faq")).not.toHaveProperty("scripts");
  });

  it("excludes Understanding how you think and learn from public dates and structured data", () => {
    expect(getPageDate("/support/how-you-think-and-learn")).toBeUndefined();
    expect(pageHead("/support/how-you-think-and-learn")).not.toHaveProperty("scripts");
  });

  it("excludes the Army guide skeleton from public dates and structured data", () => {
    expect(getPageDate("/insights/army-guide-preview")).toBeUndefined();
    expect(pageHead("/insights/army-guide-preview")).not.toHaveProperty("scripts");
  });

  it("excludes the Redesign review page from public dates and structured data", () => {
    expect(getPageDate("/review-preview")).toBeUndefined();
    expect(pageHead("/review-preview")).not.toHaveProperty("scripts");
  });

  it("retires the old preview addresses with no dates or structured data", () => {
    for (const path of ["/support/insights-preview", "/support/understanding-dyslexia-preview", "/support/serving-now-preview", "/support/slc-preview", "/about-preview", "/get-involved-preview", "/partner-preview", "/lived-experiences-preview"]) {
      expect(getPageDate(path), path).toBeUndefined();
      expect(pageHead(path), path).not.toHaveProperty("scripts");
    }
  });

  it("keeps the two new final addresses out of public dates and structured data for now", () => {
    for (const path of ["/insights/understanding-dyslexia", "/get-involved"]) {
      expect(getPageDate(path), path).toBeUndefined();
      expect(pageHead(path), path).not.toHaveProperty("scripts");
    }
  });

  it("uses October 2026 for the evidence reporting period", () => {
    expect(EVIDENCE_DATA_AS_AT).toEqual({ iso: "2026-10", label: "October 2026" });
  });

  it("shares mapped dates with Article, FAQPage and WebPage metadata", () => {
    for (const path of Object.keys(PAGE_DATES)) {
      const head = pageHead(path);
      for (const script of "scripts" in head ? head.scripts ?? [] : []) {
        const schema = JSON.parse(script.children);
        expect(schema.dateModified, path).toBe(getPageDate(path));
      }
    }
    for (const [path, type] of [["/about", "WebPage"], ["/about/faq", "FAQPage"], ["/insights", "FAQPage"], ["/insights/can-you-join-army-with-dyslexia-uk", "Article"], ["/lived-experiences/major-lena-beardsell", "Article"]] as const) {
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