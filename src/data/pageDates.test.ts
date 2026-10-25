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

describe("Page date rules", () => {
  it("maps every page to its honest content date", () => {
    expect(Object.keys(PAGE_DATES)).toHaveLength(39);
    for (const [path, date] of Object.entries(PAGE_DATES)) {
      if (path.startsWith("/governance")) continue;
      if (path === "/about/why-we-are-here") continue;
      expect(date, path).toBe("2026-10-24");
    }
    expect(PAGE_DATES["/governance"]).toBe("2026-08-08");
    expect(PAGE_DATES["/governance/founder"]).toBe("2026-08-08");
    expect(PAGE_DATES["/governance/sponsorship"]).toBe("2026-03-01");
    expect(PAGE_DATES["/governance/transparency"]).toBe("2026-03-01");
    expect(PAGE_DATES["/governance/code-of-conduct"]).toBe("2026-03-01");
    expect(PAGE_DATES["/governance/safeguarding"]).toBe("2026-11-02");
    expect(PAGE_DATES["/governance/privacy"]).toBe("2026-11-02");
    expect(formatPageDate("2026-10-24")).toBe("24 October 2026");
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
      if (!route || route === "/evidence" || route.startsWith("/newsletters/")) continue;
      expect(getPageDate(route), route).toBeDefined();
    }
  });

  it("excludes homepage, newsletters, redirects and unknown paths", () => {
    for (const path of ["/", "/newsletters/october-2026", "/why-it-matters", "/privacy", "/achieve", "/ask", "/structure", "/currently-serving", "/insights/serving-with-dyslexia-in-the-army-uk", "/not-a-page", "/evidence"]) {
      expect(getPageDate(path), path).toBeUndefined();
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