import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { SUPPORT_ORGANISATIONS, SUPPORT_SECTIONS, organisationsFor } from "../data/supportOrganisations";
import { PAGE_BREADCRUMBS } from "../data/pageBreadcrumbs";
import { getPageDate } from "../data/pageDates";
import { PUBLIC_PAGES, pageHead } from "../lib/seo";

// Prompt C (16 November 2026): shared support organisations, homepage logo grid and the Support beyond us page.
const read = (path: string) => readFileSync(path, "utf8");
const PATH = "/support/support-beyond-us";
const BASE = "https://dyslexiaindefence.com";
const byName = (name: string) => SUPPORT_ORGANISATIONS.find(item => item.name === name);

describe("Shared support organisations", () => {
  it("holds the nine organisations from the old carousel with their logos, links and alt text unchanged", () => {
    expect(SUPPORT_ORGANISATIONS.map(item => item.name)).toEqual([
      "Forces Transition Group", "FANDF", "The Education People", "Veterans Operating Base", "Embers Woodcraft",
      "ReferKent", "Head Up", "NeuroDiverse Community", "Team Talk",
    ]);
    expect(byName("Forces Transition Group")?.href).toBe("https://ftgjobfairs.com");
    expect(byName("Forces Transition Group")?.logo.src).toBe("/images/partners/FTG-colour-Logo.png");
    expect(byName("Veterans Operating Base")?.alt).toBe("Veterans Operating Base (VOB) logo");
    expect(byName("Veterans Operating Base")?.href).toBe("https://vob.org.uk/");
    expect(byName("Veterans Operating Base")?.logo.src).toMatch(/vob-lockup\.jpg$/);
    expect(byName("Veterans Operating Base")?.mobileLogo?.src).toMatch(/vob-mark\.png$/);
    expect(byName("Team Talk")?.href).toBe("https://linktr.ee/t3amtalk");
    expect(byName("Team Talk")?.alt).toBe("Team Talk logo, opens in new tab");
    for (const item of SUPPORT_ORGANISATIONS) {
      expect(item.alt, item.name).toMatch(/logo/);
      expect(item.href, item.name).toMatch(/^https:\/\//);
      expect(item.logo.width / item.logo.height, item.name).toBeGreaterThan(0);
    }
  });

  it("tidies the Team Talk text: no em dash and a closing full stop", () => {
    const text = byName("Team Talk")?.tagline ?? "";
    expect(text).not.toContain("\u2014");
    expect(text.endsWith(".")).toBe(true);
    expect(text).toContain("the freedom to connect, without judgement, expectation or pressure. No agenda. No pressure. Just connections.");
  });

  it("lists exactly the agreed organisations in each section, in order", () => {
    expect(SUPPORT_SECTIONS.map(section => [section.heading, section.organisations])).toEqual([
      ["Mental health and wellbeing", ["Head Up", "Team Talk", "Veterans Operating Base", "Embers Woodcraft"]],
      ["Localised support", ["ReferKent", "The Education People", "Veterans Operating Base", "Embers Woodcraft", "NeuroDiverse Community"]],
      ["Neurodiversity", ["NeuroDiverse Community", "FANDF"]],
      ["Transition and employment", ["Forces Transition Group", "The Education People"]],
    ]);
    for (const section of SUPPORT_SECTIONS) expect(organisationsFor(section).map(item => item.name), section.heading).toEqual(section.organisations);
  });

  it("shows each overlap organisation in every one of its sections", () => {
    const sectionsFor = (name: string) => SUPPORT_SECTIONS.filter(section => section.organisations.includes(name)).map(section => section.heading);
    expect(sectionsFor("Embers Woodcraft")).toEqual(["Mental health and wellbeing", "Localised support"]);
    expect(sectionsFor("NeuroDiverse Community")).toEqual(["Localised support", "Neurodiversity"]);
    expect(sectionsFor("The Education People")).toEqual(["Localised support", "Transition and employment"]);
    expect(sectionsFor("Veterans Operating Base")).toEqual(["Mental health and wellbeing", "Localised support"]);
    for (const item of SUPPORT_ORGANISATIONS) expect(sectionsFor(item.name).length, item.name).toBeGreaterThan(0);
  });

  it("adds no em dash to the new files", () => {
    for (const path of ["src/data/supportOrganisations.ts", "src/components/PartnerLogoCarousel.tsx", "src/components/SupportOrganisationLogo.tsx", "src/pages/support/SupportBeyondUsPage.tsx"]) {
      expect(read(path), path).not.toContain("\u2014");
    }
  });
});

describe("Homepage Support Beyond Us grid", () => {
  const home = () => read("src/pages/HomePage.tsx");
  const section = () => home().slice(home().indexOf("{/* Support Beyond Us"), home().indexOf("{/* Mission */}"));

  it("shows all nine logos once, as links, with no organisation paragraphs and no carousel", () => {
    const grid = section();
    expect(grid).toContain(">\n            Support Beyond Us\n          </h2>");
    expect(grid.match(/SUPPORT_ORGANISATIONS\.map\(/g)).toHaveLength(1);
    expect(grid).toContain('<a\n                  href={organisation.href}\n                  target="_blank"\n                  rel="noopener noreferrer"');
    expect(grid).toContain("<SupportOrganisationLogo organisation={organisation} />");
    for (const gone of ["tagline", "PartnerLogoCarousel"]) expect(grid, gone).not.toContain(gone);
    expect(home()).not.toContain("PartnerLogoCarousel");
    expect(new Set(SUPPORT_ORGANISATIONS.map(item => item.name)).size).toBe(9);
  });

  it("adds a Find out more button to the Support beyond us page", () => {
    expect(section()).toContain('<Link to="/support/support-beyond-us">Find out more<ArrowRight');
  });

  it("loads every logo eagerly at its own size with its alt text", () => {
    const logo = read("src/components/SupportOrganisationLogo.tsx");
    expect(logo).toContain('loading="eager"');
    expect(logo).not.toContain('loading="lazy"');
    expect(logo).toContain("alt={organisation.alt}");
    expect(logo).toContain("width={small.width}");
    expect(logo).toContain("object-contain");
  });
});

describe("Support beyond us page", () => {
  const page = () => read("src/pages/support/SupportBeyondUsPage.tsx");

  it("has the Get support breadcrumb and SupportTabs with no tab marked and no sixth tab", () => {
    expect(page()).toContain('<PageTrail crumbs={trailFor("/support/support-beyond-us")} label="Get support breadcrumb" />');
    expect(page()).toContain("<SupportTabs />");
    expect(PAGE_BREADCRUMBS[PATH]).toEqual([{ name: "Home", path: "/" }, { name: "Get support", path: "/support/start-here" }, { name: "Support beyond us" }]);
    const tabs = read("src/components/SupportTabs.tsx");
    expect(tabs.match(/\{ label: "/g)).toHaveLength(5);
    expect(tabs).not.toContain("support-beyond-us");
  });

  it("has the H1, the short intro and one carousel per section in order", () => {
    expect(page()).toContain('<h1 className="mb-4 text-3xl font-bold sm:text-4xl">Support beyond us</h1>');
    expect(page()).toContain("Other organisations that support dyslexic and neurodivergent people across Defence and beyond.");
    expect(page()).toContain("SUPPORT_SECTIONS.map(section =>");
    expect(page()).toContain("<PartnerLogoCarousel organisations={organisationsFor(section)} label={`${section.heading} organisations`} />");
    expect(read("src/routes/support/support-beyond-us.tsx")).toContain('createFileRoute("/support/support-beyond-us")');
  });

  it("uses a carousel with no autoplay, hidden controls when everything fits, inert hidden slides and reduced motion", () => {
    const carousel = read("src/components/PartnerLogoCarousel.tsx");
    for (const gone of ["setInterval", "setTimeout", "requestAnimationFrame", 'loading="lazy"']) expect(carousel, gone).not.toContain(gone);
    expect(carousel).toContain("const showControls = maxIndex > 0;");
    expect(carousel).toContain("const maxIndex = Math.max(0, total - visibleCount);");
    expect(carousel).toContain("inert={showControls && !isVisible(index)}");
    expect(carousel).toContain('role="region" aria-roledescription="carousel" aria-label={label}');
    expect(carousel).toContain("motion-reduce:transition-none");
    expect(carousel).toContain("{organisation.tagline}");
  });

  it("is public: sitemap, page date, llms.txt and seo entries exist and match", () => {
    expect(getPageDate(PATH)).toBe("2026-11-16");
    const sitemap = read("public/sitemap.xml");
    expect(sitemap).toMatch(/<loc>https:\/\/dyslexiaindefence\.com\/support\/support-beyond-us<\/loc>\s*<lastmod>2026-11-16<\/lastmod>/);
    expect(sitemap.match(/<url>/g)).toHaveLength(46);
    const llms = read("public/llms.txt").split("\n").find(line => line.includes(`](${PATH})`));
    expect(llms).toBe("- [Support beyond us](/support/support-beyond-us): Other organisations offering mental health and wellbeing, local, neurodiversity, and transition and employment support.");
    const entry = PUBLIC_PAGES[PATH];
    expect(entry?.indexable).toBe(true);
    expect(entry?.title).toBe("Support beyond us: other organisations | Dyslexia in Defence");
    expect(entry?.description.length).toBeLessThanOrEqual(160);
    for (const text of [entry?.title ?? "", entry?.description ?? "", llms ?? ""]) expect(text).not.toMatch(/[\u2014\u2013]/);
    const head = pageHead(PATH);
    expect(head.meta).not.toContainEqual({ name: "robots", content: "noindex, nofollow" });
    const scripts = (head.scripts ?? []).map(script => JSON.parse(script.children));
    expect(scripts.map(schema => schema["@type"])).toEqual(["WebPage", "BreadcrumbList"]);
    expect(scripts[0]?.dateModified).toBe("2026-11-16");
    expect(scripts[1]?.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Get support", item: `${BASE}/support/start-here` },
      { "@type": "ListItem", position: 3, name: "Support beyond us" },
    ]);
  });

  it("is linked from Start here as a link line under Or look by type", () => {
    const start = read("src/pages/support/StartHerePage.tsx");
    const byType = start.slice(start.indexOf('aria-labelledby="look-by-type"'), start.indexOf('aria-labelledby="not-ready"'));
    expect(byType).toContain('<Link to="/support/support-beyond-us" className={textLink}>Support beyond us<ArrowRight');
  });
});
