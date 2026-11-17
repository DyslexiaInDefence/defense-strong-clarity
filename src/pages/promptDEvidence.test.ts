import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { PUBLIC_PAGES, pageHead } from "../lib/seo";
import { PAGE_BREADCRUMBS } from "../data/pageBreadcrumbs";
import { PAGE_DATES, getPageDate } from "../data/pageDates";
import { doingWellFigures } from "../components/evidence/DoingWellSection";
import { WHY_HERE_SOURCES } from "../components/whyhere/WhyWeAreHereSection";
import { policyPdf } from "../components/whyhere/figures";
import { KEY_TAKEAWAYS } from "./support/InsightsLandingPage";

const read = (path: string) => readFileSync(path, "utf8");
const BASE = "https://dyslexiaindefence.com";
const sitemap = () => read("public/sitemap.xml");
const sitemapLastmod = (path: string) => sitemap().match(new RegExp(`<loc>${BASE}${path}</loc>\\s*<lastmod>([^<]+)</lastmod>`))?.[1];
const scripts = (path: string) => ((pageHead(path) as { scripts?: Array<{ children: string }> }).scripts ?? []).map(s => JSON.parse(s.children));
const metaValue = (path: string, key: string) => (pageHead(path).meta as Array<Record<string, string>>).find(tag => tag["name"] === key || tag["property"] === key)?.["content"];
const section = () => read("src/components/whyhere/WhyWeAreHereSection.tsx");
const home = () => read("src/pages/HomePage.tsx");
const oldPage = () => read("src/pages/_old/WhyWeAreHerePage.tsx");

describe("Evidence is public", () => {
  it("builds its head through pageHead with no noindex", () => {
    expect(read("src/routes/evidence.tsx")).toContain('head: () => pageHead("/evidence"),');
    expect(PUBLIC_PAGES["/evidence"]?.indexable).toBe(true);
    expect(metaValue("/evidence", "robots")).toBeUndefined();
    expect(pageHead("/evidence").links).toEqual([{ rel: "canonical", href: `${BASE}/evidence` }]);
    expect(metaValue("/evidence", "og:url")).toBe(`${BASE}/evidence`);
    expect(PUBLIC_PAGES["/evidence"]?.title).toBe("The data behind the story: dyslexia evidence | Dyslexia in Defence");
  });

  it("dates Evidence 17 November 2026 in pageDates, the sitemap and its WebPage data", () => {
    expect(getPageDate("/evidence")).toBe("2026-11-17");
    expect(sitemapLastmod("/evidence")).toBe("2026-11-17");
    const [webPage, trail] = scripts("/evidence");
    expect(webPage["@type"]).toBe("WebPage");
    expect(webPage.dateModified).toBe("2026-11-17");
    expect(trail["@type"]).toBe("BreadcrumbList");
    expect(trail.itemListElement.map((item: { name: string }) => item.name)).toEqual(PAGE_BREADCRUMBS["/evidence"]?.map(crumb => crumb.name));
  });

  it("shows a Last updated line and keeps the October 2026 reporting month", () => {
    const lastUpdated = read("src/components/LastUpdated.tsx");
    expect(lastUpdated).toContain("Last updated: <time dateTime={date}>{formatPageDate(date)}</time>");
    expect(lastUpdated).toContain("Figures as at <time dateTime={EVIDENCE_DATA_AS_AT.iso}>{EVIDENCE_DATA_AS_AT.label}</time>");
  });

  it("is listed in llms.txt", () => {
    expect(read("public/llms.txt")).toMatch(/^- \[The data behind the story\]\(\/evidence\): /m);
  });
});

describe("The homepage carries the Why we are here argument (Prompt E)", () => {
  it("renders the shared section once, after the one in ten band and before Real stories", () => {
    const page = home();
    expect(page).toContain('import WhyWeAreHereSection from "@/components/whyhere/WhyWeAreHereSection";');
    expect(page.match(/<WhyWeAreHereSection \/>/g)).toHaveLength(1);
    const oneInTen = page.indexOf(">Supporting the 10% to enable their 100%</h2>");
    const why = page.indexOf("<WhyWeAreHereSection />");
    const stories = page.indexOf(">Real stories from across Defence</h2>");
    expect(oneInTen).toBeGreaterThan(-1);
    expect(why).toBeGreaterThan(oneInTen);
    expect(stories).toBeGreaterThan(why);
    // The section markup lives only in the shared component.
    expect(page).not.toContain("Defence has long attracted dyslexic people");
  });

  it("keeps What We Do, the Support Beyond Us grid and Learn more about us after Real stories", () => {
    const page = home();
    const why = page.indexOf("<WhyWeAreHereSection />");
    for (const piece of ['id="support-beyond-us-heading"', ">What We Do</h2>", ">Learn more about us</Link>"]) expect(page.indexOf(piece), piece).toBeGreaterThan(why);
  });

  it("is no longer on Evidence, which stays public, dated and in the sitemap", () => {
    const page = read("src/pages/EvidencePage.tsx");
    expect(page).not.toContain("WhyWeAreHereSection");
    expect(page).not.toContain("LevelCard");
    expect(PUBLIC_PAGES["/evidence"]?.indexable).toBe(true);
    expect(getPageDate("/evidence")).toBe("2026-11-17");
    expect(sitemapLastmod("/evidence")).toBe("2026-11-17");
  });

  it("sets the homepage sitemap date to 17 November 2026 and keeps the homepage out of pageDates", () => {
    expect(sitemapLastmod("/")).toBe("2026-11-17");
    expect(getPageDate("/")).toBeUndefined();
    expect(PAGE_DATES).not.toHaveProperty("/");
  });

  it("uses h2 for the section and h3 for the levels, closing line and sources", () => {
    const text = section();
    expect(text).toContain('<h2 id="why-we-are-here-heading"');
    expect(text).toContain(">Why we are here</h2>");
    expect(text).toContain(">More dyslexic people, less guaranteed support</p>");
    expect(text).toContain("How Defence ended up with a higher share of dyslexic people than most workplaces, and a weaker legal safety net around them.");
    expect(text.match(/headingLevel=\{3\}/g)).toHaveLength(3);
    expect(text).toContain(">That gap is why Dyslexia in Defence exists.</h3>");
    expect(text).toContain(">Sources</h3>");
    expect(read("src/components/whyhere/LevelCard.tsx")).toContain('headingLevel = 2');
  });

  it("keeps the three level cards word for word from the old page", () => {
    const text = section();
    for (const piece of [
      'label="Who joins" title="Defence has long attracted dyslexic people"',
      "<p>NHS (around 10% of the population). Contact Magazine, British Dyslexia Association, September 2024 (Defence figure may be closer to 1 in 5, including many undiagnosed).</p>",
      "<p>The Services offer practical, hands on careers that suit many dyslexic strengths, and many people who did not thrive in the classroom chose to join. The likely result is a workforce with more dyslexic people than a typical employer.</p>",
      'label="The rules" title="The legal duty to adapt does not apply in the same way"',
      'to="/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk">See how JSP 822 and the Equality Act compare</Link>',
      "<p>Under the Equality Act 2010, civilian employers must make reasonable adjustments for disabled people. The Armed Forces are exempt from the disability discrimination provisions of the Act in relation to service. Support is instead set by Ministry of Defence policy, JSP 822, and is provided where feasible.</p>",
      'label="The result" title="More dyslexic people, less guaranteed support"',
      "<p>A bigger share of the workforce, with a lower guarantee of adjustments. Whether someone is supported depends on policy, their unit and whether they feel able to ask.</p><p>Where learning needs are discussed at the start, 82% of people rated a course fully or mostly accessible. Where they were not, 25% did.</p>",
    ]) {
      expect(text, piece).toContain(piece);
      expect(oldPage(), piece).toContain(piece);
    }
  });

  it("links Level 3 to the full evidence as the old page did, and ends with the closing line and sources, no buttons", () => {
    const text = section();
    const level3 = 'below={<Link className="inline-flex min-h-11 items-center text-primary underline underline-offset-4" to="/evidence">See the full evidence</Link>}';
    expect(text).toContain(level3);
    expect(oldPage()).toContain(level3);
    expect(text).not.toContain("Button");
    for (const gone of ["Understanding dyslexia", "Get involved", '"/insights/understanding-dyslexia"', '"/get-involved"', '"/about/what-we-do"', '"/join"', '"/why-it-matters"']) expect(text, gone).not.toContain(gone);
    const internal = [...text.matchAll(/ to="([^"]+)"/g)].map(m => m[1]);
    expect(internal).toEqual(["/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk", "/evidence"]);
    expect(text.indexOf(">Sources</h3>")).toBeGreaterThan(text.indexOf(">That gap is why Dyslexia in Defence exists.</h3>"));
  });

  it("matches the homepage band style rather than the Evidence banner", () => {
    const text = section();
    expect(text).toContain('className="whyhere-page border-t border-border bg-muted py-14 md:py-16"');
    for (const gone of ["DotField", "JumpNavigation", "bg-brand-navy", "evidence-hero"]) expect(text, gone).not.toContain(gone);
  });

  it("lists the old page's four sources with the same links, opening in a new tab", () => {
    expect(WHY_HERE_SOURCES).toEqual([
      { label: "NHS: Dyslexia", url: "https://www.nhs.uk/conditions/dyslexia/" },
      { label: "British Dyslexia Association: Contact Magazine, September 2024", url: undefined },
      { label: "JSP 822 Volume 7: Specific Learning Differences (PDF)", url: policyPdf },
      { label: "Equality Act 2010", url: "https://www.legislation.gov.uk/ukpga/2010/15/contents" },
    ]);
    expect(section()).toContain('target="_blank" rel="noopener noreferrer"');
    expect(section()).toContain("(opens in a new tab)");
  });

  it("agrees with the 82% and 25% figures already on the Evidence page", () => {
    expect(doingWellFigures.discussedPercent).toBe(82);
    expect(doingWellFigures.notDiscussedPercent).toBe(25);
    expect(read("src/components/evidence/DoingWellSection.tsx")).toContain("<strong>82%</strong> rated a course fully or mostly accessible when learning needs were discussed at the start. Where they weren't, <strong>25%</strong> did.");
  });

  it("leaves the old page and the /about/why-we-are-here redirect in place", () => {
    expect(oldPage()).toContain("See the full evidence");
    expect(read("src/routes/about/why-we-are-here.tsx")).toMatch(/throw redirect\(/);
  });

  it("adds no em dash in the new wording", () => {
    for (const path of ["src/components/whyhere/WhyWeAreHereSection.tsx", "src/routes/evidence.tsx", "src/components/LastUpdated.tsx"]) expect(read(path), path).not.toContain("\u2014");
    expect(PUBLIC_PAGES["/evidence"]?.title).not.toContain("\u2014");
    expect(PUBLIC_PAGES["/evidence"]?.description).not.toContain("\u2014");
  });
});

describe("Insights Key takeaways", () => {
  it("has the four takeaways with colons in place of em dashes", () => {
    expect(KEY_TAKEAWAYS.map(item => item.lead + item.rest)).toEqual([
      "Dyslexia is present across the entire defence community: military, civil service and industry.",
      "Support is improving, but awareness remains inconsistent across organisations and ranks.",
      "Lived experience matters as much as policy: peer support drives real change.",
      "Neurodiversity can be a leadership strength: different thinking is an operational advantage.",
    ]);
    expect(KEY_TAKEAWAYS.map(item => item.lead)).toEqual(["Dyslexia is present", "Support is improving", "Lived experience matters", "Neurodiversity can be a leadership strength"]);
    expect(read("src/pages/support/InsightsLandingPage.tsx")).toContain("<strong>{item.lead}</strong>{item.rest}");
  });

  it("sits below the two cards and above Looking for guides, without the old Real Stories block", () => {
    const page = read("src/pages/support/InsightsLandingPage.tsx");
    const cards = page.indexOf("cards.map(");
    const takeaways = page.indexOf('<h2 id="key-takeaways"');
    const guides = page.indexOf('<h2 id="looking-for-guides"');
    expect(cards).toBeGreaterThan(-1);
    expect(takeaways).toBeGreaterThan(cards);
    expect(guides).toBeGreaterThan(takeaways);
    expect(page).toContain(">Key takeaways</h2>");
    expect(page).not.toContain("Real Stories");
  });

  it("dates Insights 17 November 2026 in pageDates and the sitemap", () => {
    expect(getPageDate("/insights")).toBe("2026-11-17");
    expect(sitemapLastmod("/insights")).toBe("2026-11-17");
  });
});

describe("Sitemap conflict and count", () => {
  it("removes /community from the sitemap only", () => {
    expect(sitemap()).not.toContain(`<loc>${BASE}/community</loc>`);
    expect(read("public/robots.txt")).toContain("Disallow: /community");
    expect(PUBLIC_PAGES["/community"]?.indexable).toBe(false);
    expect(metaValue("/community", "robots")).toBe("noindex, nofollow");
    // Its page date stays, so the visible Last updated line is unchanged.
    expect(PAGE_DATES["/community"]).toBe("2026-11-16");
  });

  it("still lists 46 addresses", () => {
    expect(sitemap().match(/<url>/g)).toHaveLength(46);
  });
});
