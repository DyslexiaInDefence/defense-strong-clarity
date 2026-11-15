import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PUBLIC_PAGES, pageHead } from "../lib/seo";
import { PAGE_DATES, getPageDate } from "./pageDates";
import { PAGE_BREADCRUMBS } from "./pageBreadcrumbs";

// Switch-over step 4: the redesigned pages made public, with their route files.
const PUBLIC_REDESIGN: Record<string, string> = {
  "/about": "src/routes/about/index.tsx",
  "/partner": "src/routes/partner.tsx",
  "/lived-experiences": "src/routes/lived-experiences/index.tsx",
  "/get-involved": "src/routes/get-involved.tsx",
  "/insights": "src/routes/insights/index.tsx",
  "/insights/understanding-dyslexia": "src/routes/insights/understanding-dyslexia.tsx",
  "/support/currently-serving": "src/routes/support/currently-serving.tsx",
  "/currently-serving/standard-learning-credits": "src/routes/currently-serving/standard-learning-credits.tsx",
  "/support/start-here": "src/routes/support/start-here.tsx",
  "/support/thinking-of-joining": "src/routes/support/thinking-of-joining.tsx",
  "/support/leaving-or-left-service": "src/routes/support/leaving-or-left-service.tsx",
  "/support/supporting-someone": "src/routes/support/supporting-someone.tsx",
  "/support/guidance": "src/routes/support/guidance.tsx",
  "/support/downloads-and-tools": "src/routes/support/downloads-and-tools.tsx",
  "/support/faq": "src/routes/support/faq.tsx",
  "/support/how-you-think-and-learn": "src/routes/support/how-you-think-and-learn.tsx",
};
const PATHS = Object.keys(PUBLIC_REDESIGN);
const BASE = "https://dyslexiaindefence.com";
// The five redirecting addresses switch-over step 5 removed from the sitemap, page dates and seo.ts.
const RETIRED_REDIRECTS = ["/support", "/about/faq", "/about/what-we-do", "/about/why-we-are-here", "/resources"];

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

const read = (path: string) => readFileSync(path, "utf8");
const meta = (path: string) => pageHead(path).meta as Array<Record<string, string>>;
const metaValue = (path: string, key: string) => meta(path).find(tag => tag["name"] === key || tag["property"] === key)?.["content"];
const pageSource = (routeFile: string) => {
  const target = read(routeFile).match(/import \w+ from "@\/pages\/([^"]+)"/)?.[1];
  if (!target) throw new Error(`No page import in ${routeFile}`);
  return read(`src/pages/${target}.tsx`);
};
const sitemapEntries = () =>
  [...read("public/sitemap.xml").matchAll(/<url>\s*<loc>https:\/\/dyslexiaindefence\.com([^<]*)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(m => ({ path: m[1] === "/" ? "/" : (m[1] ?? "").replace(/\/$/, ""), lastmod: m[2] }));
const routes = () => {
  const map = new Map<string, string>();
  for (const path of files("src/routes")) {
    const route = read(path).match(/createFileRoute\("([^"]+)"\)/)?.[1];
    if (route) map.set(route === "/" ? "/" : route.replace(/\/$/, ""), read(path));
  }
  return map;
};
const isRedirect = (source: string) => /throw redirect\(/.test(source);
const nextStepsSkip = () => JSON.parse(read("src/components/Layout.tsx").match(/const NEXT_STEPS_SKIP = new Set<string>\((\[[^\]]*\])\)/)?.[1] ?? "[]") as string[];

describe("Switch-over step 4: redesigned pages are public", () => {
  it("has no noindex tag on any of the 16 pages", () => {
    expect(PATHS).toHaveLength(16);
    for (const [path, routeFile] of Object.entries(PUBLIC_REDESIGN)) {
      expect(read(routeFile), path).not.toContain("noindex");
      expect(read(routeFile), path).toContain(`head: () => pageHead("${path}"),`);
      expect(meta(path).some(tag => tag["name"] === "robots"), path).toBe(false);
      expect(PUBLIC_PAGES[path]?.indexable, path).toBe(true);
    }
  });

  it("has no Work in progress banner or banner switch on any of the 16 pages", () => {
    for (const [path, routeFile] of Object.entries(PUBLIC_REDESIGN)) {
      const page = pageSource(routeFile);
      expect(page, path).not.toContain("SHOW_WIP_BANNER");
      expect(page, path).not.toContain("Work in progress");
    }
  });

  it("keeps the two agreed placeholders", () => {
    expect(read("src/pages/support/ServingNowPage.tsx")).toContain("Guidance to come.");
    expect(read("src/pages/support/HowYouThinkAndLearnPage.tsx")).toContain("Content to come.");
  });

  it("gives each page a unique title under 60 characters ending | Dyslexia in Defence", () => {
    const allTitles = Object.values(PUBLIC_PAGES).map(page => page.title);
    for (const path of PATHS) {
      const title = metaValue(path, "title") ?? meta(path).find(tag => "title" in tag)?.["title"];
      expect(title, path).toBe(PUBLIC_PAGES[path]?.title);
      expect(title!.length, path).toBeLessThan(60);
      expect(title, path).toMatch(/ \| Dyslexia in Defence$/);
      expect(allTitles.filter(other => other === title), path).toHaveLength(1);
    }
  });

  it("gives each page a unique 120 to 160 character description without em dashes", () => {
    const allDescriptions = Object.values(PUBLIC_PAGES).map(page => page.description);
    for (const path of PATHS) {
      const description = metaValue(path, "description") ?? "";
      expect(description.length, path).toBeGreaterThanOrEqual(120);
      expect(description.length, path).toBeLessThanOrEqual(160);
      expect(description, path).not.toMatch(/[—–]/);
      expect(allDescriptions.filter(other => other === description), path).toHaveLength(1);
    }
  });

  it("gives each page a canonical, og:url and matching Open Graph and Twitter tags for its own address", () => {
    for (const path of PATHS) {
      const head = pageHead(path);
      const title = PUBLIC_PAGES[path]?.title;
      const description = PUBLIC_PAGES[path]?.description;
      expect(head.links, path).toEqual([{ rel: "canonical", href: `${BASE}${path}` }]);
      expect(metaValue(path, "og:url"), path).toBe(`${BASE}${path}`);
      expect(metaValue(path, "og:title"), path).toBe(title);
      expect(metaValue(path, "twitter:title"), path).toBe(title);
      expect(metaValue(path, "og:description"), path).toBe(description);
      expect(metaValue(path, "twitter:description"), path).toBe(description);
    }
  });

  it("dates each page 14 November 2026, matching its sitemap entry", () => {
    const entries = sitemapEntries();
    for (const path of PATHS) {
      expect(getPageDate(path), path).toBe("2026-11-14");
      const matches = entries.filter(entry => entry.path === path);
      expect(matches, path).toHaveLength(1);
      expect(matches[0]?.lastmod, path).toBe(getPageDate(path));
    }
  });

  it("lists only real, non-redirect pages in the sitemap, with no redirect allowed by name", () => {
    const known = routes();
    for (const { path } of sitemapEntries()) {
      const source = known.get(path);
      expect(source, path).toBeDefined();
      expect(isRedirect(source ?? ""), path).toBe(false);
      expect(source, path).toContain("component:");
    }
  });

  it("adds BreadcrumbList data matching each page's visible page trail", () => {
    for (const [path, routeFile] of Object.entries(PUBLIC_REDESIGN)) {
      const nav = pageSource(routeFile).match(/<nav aria-label="[^"]*breadcrumb"[\s\S]*?<\/nav>/)?.[0] ?? "";
      const visible = [
        ...[...nav.matchAll(/<Link to="([^"]+)">([^<]+)<\/Link>/g)].map(m => ({ name: m[2], path: m[1] })),
        ...[...nav.matchAll(/<span aria-current="page">([^<]+)<\/span>/g)].map(m => ({ name: m[1] })),
      ];
      expect(visible.length, path).toBeGreaterThan(1);
      expect(PAGE_BREADCRUMBS[path], path).toEqual(visible);
      const scripts = pageHead(path).scripts ?? [];
      const list = scripts.map(script => JSON.parse(script.children)).find(schema => schema["@type"] === "BreadcrumbList");
      expect(list?.itemListElement, path).toEqual(visible.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        ...("path" in crumb && crumb.path ? { item: `${BASE}${crumb.path === "/" ? "" : crumb.path}` } : {}),
      })));
    }
  });

  it("carries no FAQ structured data on any of the 16 pages, including the FAQ and Insights", () => {
    for (const path of PATHS) {
      for (const script of pageHead(path).scripts ?? []) {
        expect(script.children, path).not.toContain("FAQPage");
        expect(["WebPage", "BreadcrumbList"], path).toContain(JSON.parse(script.children)["@type"]);
      }
    }
  });

  it("shows What to do next only on About us, Lived experiences and Understanding Dyslexia", () => {
    const skip = nextStepsSkip();
    for (const path of ["/about", "/lived-experiences", "/insights/understanding-dyslexia"]) expect(skip, path).not.toContain(path);
    for (const path of PATHS.filter(p => !["/about", "/lived-experiences", "/insights/understanding-dyslexia"].includes(p))) expect(skip, path).toContain(path);
    // Understanding Dyslexia does not use the insight article layout, so the shared block is not suppressed there.
    expect(read("src/components/Layout.tsx")).toContain('pathname !== "/insights/understanding-dyslexia"');
  });
});

describe("Army guide skeleton stays hidden after step 4", () => {
  it("keeps /insights/army-guide-preview noindex, bannered, undated and out of the sitemap", () => {
    const route = read("src/routes/insights/army-guide-preview.tsx");
    expect(route).toContain('{ name: "robots", content: "noindex, nofollow" }');
    expect(read("src/pages/insights/ArmyGuidePreviewPage.tsx")).toContain("const SHOW_WIP_BANNER = true;");
    expect(read("public/sitemap.xml")).not.toContain("army-guide-preview");
    expect(getPageDate("/insights/army-guide-preview")).toBeUndefined();
    expect(PAGE_BREADCRUMBS["/insights/army-guide-preview"]).toBeUndefined();
  });
});

describe("Switch-over step 5: sitemap, robots and discovery files", () => {
  const llms = () => read("public/llms.txt");
  const robots = () => read("public/robots.txt");
  const llmsLinks = () => [...llms().matchAll(/\]\((\/[^)]*)\)/g)].map(m => (m[1] === "/" ? "/" : (m[1] ?? "").replace(/\/$/, "")));

  it("lists no redirecting address in the sitemap", () => {
    const known = routes();
    const listed = sitemapEntries().map(entry => entry.path);
    for (const path of [...RETIRED_REDIRECTS, "/why-it-matters", "/insights/serving-with-dyslexia-in-the-army-uk", "/insights/army-guide-preview"]) {
      expect(listed, path).not.toContain(path);
    }
    for (const path of listed) expect(isRedirect(known.get(path) ?? ""), path).toBe(false);
    // Every redirect route in the project is absent from the sitemap.
    for (const [path, source] of known) if (isRedirect(source)) expect(listed, path).not.toContain(path);
  });

  it("has no sitemap URL missing from the routes", () => {
    const known = routes();
    for (const { path } of sitemapEntries()) {
      expect(known.has(path), path).toBe(true);
      expect(known.get(path), path).toContain("component:");
    }
  });

  it("lists every page made public in step 4 in the sitemap with its page date", () => {
    const entries = sitemapEntries();
    for (const path of PATHS) {
      expect(entries.find(entry => entry.path === path)?.lastmod, path).toBe(PAGE_DATES[path]);
    }
  });

  it("puts every public dated page in the sitemap with the same date, and dates every sitemap page except the homepage", () => {
    const entries = sitemapEntries();
    for (const [path, date] of Object.entries(PAGE_DATES)) {
      if (!PUBLIC_PAGES[path]?.indexable) continue;
      const matches = entries.filter(entry => entry.path === path);
      expect(matches, path).toHaveLength(1);
      expect(matches[0]?.lastmod, path).toBe(date);
    }
    for (const { path, lastmod } of entries) {
      if (path === "/") continue;
      expect(PAGE_DATES[path], path).toBe(lastmod);
    }
  });

  it("removes the five retired redirects from page dates and seo.ts, and leaves no redirect in either", () => {
    const known = routes();
    for (const path of RETIRED_REDIRECTS) {
      expect(PAGE_DATES, path).not.toHaveProperty(path);
      expect(PUBLIC_PAGES, path).not.toHaveProperty(path);
      // The redirect route files themselves stay.
      expect(isRedirect(known.get(path) ?? ""), path).toBe(true);
    }
    for (const path of [...Object.keys(PAGE_DATES), ...Object.keys(PUBLIC_PAGES)]) {
      expect(known.has(path), path).toBe(true);
      expect(isRedirect(known.get(path) ?? ""), path).toBe(false);
    }
  });

  it("gives llms.txt no What We Do, Why we are here, Resources, old FAQ or Get support hub entry, and no -preview address", () => {
    const text = llms();
    expect(text).not.toMatch(/\[What We Do\]/i);
    expect(text).not.toMatch(/\[Why We Are Here\]/i);
    for (const path of [...RETIRED_REDIRECTS, "/why-it-matters"]) expect(llmsLinks(), path).not.toContain(path);
    expect(text).not.toContain("-preview");
    expect(text).not.toContain("army-guide-preview");
  });

  it("lists every page made public in step 4 in llms.txt, and links only to real non-redirect pages", () => {
    const known = routes();
    for (const path of PATHS) expect(llmsLinks(), path).toContain(path);
    for (const path of llmsLinks()) {
      expect(known.has(path), path).toBe(true);
      expect(isRedirect(known.get(path) ?? ""), path).toBe(false);
    }
  });

  it("names no -preview address in robots.txt, blocks no newly public page and keeps its existing rules", () => {
    const text = robots();
    expect(text).not.toContain("-preview");
    const disallowed = [...text.matchAll(/^Disallow:\s*(\S+)/gm)].map(m => m[1] ?? "");
    for (const path of PATHS) {
      for (const rule of disallowed) expect(path.startsWith(rule), `${path} blocked by ${rule}`).toBe(false);
    }
    for (const rule of ["Disallow: /community", "Disallow: /accessibility", "Disallow: /governance/code-of-conduct", "Disallow: /governance/safeguarding", "Disallow: /governance/privacy", "Disallow: /your-voice.html", "Sitemap: https://dyslexiaindefence.com/sitemap.xml"]) {
      expect(text, rule).toContain(rule);
    }
  });

  it("keeps every -preview address and old preview wording out of the sitemap, llms.txt, robots.txt and seo.ts", () => {
    for (const path of ["public/sitemap.xml", "public/llms.txt", "public/robots.txt", "src/lib/seo.ts"]) {
      expect(read(path), path).not.toMatch(/preview/i);
    }
  });
});

describe("Switch-over step 5: Get involved links go to the Get involved hub", () => {
  it("points the homepage, What to do next, Our story, Partner and Lived experiences Get involved links at /get-involved", () => {
    expect(read("src/pages/HomePage.tsx")).toContain('{ heading: "Get involved", text: "Share your experience, join the community, and help change how Defence supports dyslexic people.", to: "/get-involved", id: "homepage-start-involved" }');
    expect(read("src/components/NextSteps.tsx")).toMatch(/title: "Get involved",[\s\S]*?to: "\/get-involved",/);
    expect(read("src/components/NextSteps.tsx")).not.toContain('"/join"');
    expect(read("src/pages/about/OurStoryPage.tsx")).toMatch(/<Link to="\/get-involved">\s*<Button[^>]*>\s*Get Involved/);
    expect(read("src/pages/PartnerHubPage.tsx")).toContain('{ title: "Get involved", to: "/get-involved" }');
    expect(read("src/pages/LivedExperiencesHubPage.tsx")).toContain('<Link to="/get-involved">Get involved</Link>');
    expect(PAGE_BREADCRUMBS["/lived-experiences"]?.[1]).toEqual({ name: "Get involved", path: "/get-involved" });
  });

  it("leaves no Get involved label linking to /join, and keeps the Join the Network menu button on /join", () => {
    for (const path of files("src").filter(p => /\.tsx?$/.test(p) && !p.includes("_old") && !p.includes(".test."))) {
      const text = read(path);
      expect(text, path).not.toMatch(/to="\/join">\s*(<Button[^>]*>\s*)?Get involved/i);
      expect(text, path).not.toMatch(/(title|heading|name): "Get involved",[^}]*?(to|path): "\/join"/i);
    }
    const navbar = read("src/components/Navbar.tsx");
    expect(navbar).toContain('<NavLink to="/join">Join the Network</NavLink>');
  });
});
