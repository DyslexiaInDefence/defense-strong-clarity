import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// Homepage Prompt A (16 November 2026): homepage trims, Insights card and Serving now link.
const read = (path: string) => readFileSync(path, "utf8");
const home = () => read("src/pages/HomePage.tsx");
const hero = () => home().slice(home().indexOf('aria-label="Hero"'), home().indexOf('aria-labelledby="homepage-start-heading"'));

describe("Homepage Prompt A", () => {
  it("removes the three hero buttons and their wrappers", () => {
    const text = hero();
    expect(text).toContain("Empowering dyslexic talent across Defence, before and after service.");
    for (const gone of ["Join the Network", "About Us", "Get Support", "<Button", "<Link", "Primary CTAs", "Secondary pathways"]) expect(text, gone).not.toContain(gone);
  });

  it("removes the Still serving block from the one in ten band", () => {
    expect(home()).not.toContain("Still serving?");
    expect(home()).not.toContain("See support for currently serving");
    expect(home()).not.toContain('to="/support/currently-serving"');
  });

  it("uses the exact Get support and Get involved card texts, keeping headings and labels", () => {
    expect(home()).toContain('{ heading: "Get support", text: "Real support for dyslexic people.", to: "/support/start-here", id: "homepage-start-support" }');
    expect(home()).toContain('{ heading: "Get involved", text: "Help change how Defence supports dyslexic talent.", to: "/get-involved", id: "homepage-start-involved" }');
    expect(home()).toContain("{item.heading}\n                    </span>");
  });

  it("ends the Lived Experiences sentence at the defence community", () => {
    expect(home()).toContain("Read lived experiences from people across the defence community.\n");
    expect(home()).not.toContain("support, understanding and belonging");
  });

  it("keeps What We Do and removes the Pathways cards and Learn, Ask, Commit line", () => {
    expect(home()).toContain(">What We Do</h2>");
    for (const gone of ['aria-label="Pathways"', "Learn who we are, why this matters", "Find guidance, ask the community", "by choosing to", "LifeBuoy", "Info,"]) expect(home(), gone).not.toContain(gone);
  });

  it("keeps the Support Beyond Us section (a logo grid since Prompt C)", () => {
    expect(home()).toContain("Support Beyond Us");
    expect(home()).toContain("SUPPORT_ORGANISATIONS.map(");
  });

  it("gives the Insights Understanding dyslexia card its new header, text and button, same link", () => {
    const page = read("src/pages/support/InsightsLandingPage.tsx");
    expect(page).toContain(`{ title: "Understanding dyslexia", description: "What a 'spiky' profile tells you about dyslexia", label: "Read about dyslexia", to: "/insights/understanding-dyslexia" }`);
    for (const gone of ["What we do and why we're here", "Read what we do"]) expect(page, gone).not.toContain(gone);
  });

  it("links Serving now to the military support article as a link line under Where to begin", () => {
    const page = read("src/pages/support/ServingNowPage.tsx");
    const begin = page.slice(page.indexOf('aria-labelledby="where-to-begin"'), page.indexOf('aria-labelledby="ddn-heading"'));
    expect(begin).toContain('<Link to="/support/guidance?for=serving" className={textLink}>See all guidance for serving personnel');
    expect(begin).toContain('<Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className={textLink}>What support is available for dyslexia in the military?<ArrowRight');
    expect(page.match(/what-support-is-available-for-dyslexia-in-the-military-uk/g)).toHaveLength(1);
  });
});
