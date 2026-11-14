import { createElement } from "react";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

// Render links as plain anchors so the menu and footer can be checked without a router.
vi.mock("@/lib/router-compat", () => {
  const anchor = ({ to, children, className, end: _end, ...rest }: { to: string; children?: unknown; className?: unknown; end?: boolean }) =>
    createElement("a", { href: to, className: typeof className === "function" ? className({ isActive: false }) : className, ...rest }, children as never);
  return { Link: anchor, NavLink: anchor, useLocation: () => ({ pathname: "/", search: "" }) };
});
vi.mock("@/contexts/AccessibilityContext", () => ({
  useAccessibility: () => ({ darkMode: false, largeText: false, reduceMotion: false, dyslexicFont: false, toggleDarkMode() {}, toggleLargeText() {}, toggleReduceMotion() {}, toggleDyslexicFont() {} }),
}));

const NavbarModule = await import("./Navbar");
const FooterModule = await import("./Footer");
const { default: Navbar, NAV_LINKS } = NavbarModule;
const { default: Footer, FOOTER_COLUMNS } = FooterModule;
const { SHARE_MAILTO } = await import("./ShareLivedExperienceBanner");

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

// Route address -> route file text, for every route file.
const ROUTES = new Map(
  files("src/routes")
    .filter(path => path.endsWith(".tsx") && !path.endsWith("__root.tsx"))
    .map(path => {
      const route = path.replace(/^src\/routes/, "").replace(/\.tsx$/, "").replace(/\/index$/, "");
      return [route === "" ? "/" : route, readFileSync(path, "utf8")] as const;
    }),
);

const anchors = (html: string) => [...html.matchAll(/<a [^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/g)].map(m => ({ href: (m[1] ?? "").replace(/&amp;/g, "&"), label: m[2] ?? "" }));

const AGREED_NAV = [
  { label: "About Us", to: "/about", children: [
    { label: "Our Story", to: "/about/our-story" },
    { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
    { label: "Partner With Us", to: "/partner" },
    { label: "Governance", to: "/governance" },
    { label: "Accessibility", to: "/accessibility" },
    { label: "Contact Us", to: "/contact" },
  ] },
  { label: "Get Support", to: "/support/start-here", children: [
    { label: "Start here", to: "/support/start-here" },
    { label: "Serving now (including civil service)", to: "/support/currently-serving" },
    { label: "Guidance", to: "/support/guidance" },
    { label: "Insights", to: "/insights" },
    { label: "Downloads and Tools", to: "/support/downloads-and-tools" },
    { label: "FAQ", to: "/support/faq" },
  ] },
  { label: "Get Involved", to: "/get-involved", children: [
    { label: "Peer Community", to: "/community" },
    { label: "Lived Experiences", to: "/lived-experiences" },
  ] },
];

const AGREED_FOOTER = [
  { heading: { label: "About Us", to: "/about" }, links: [
    { label: "Our Story", to: "/about/our-story" },
    { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
    { label: "Partner With Us", to: "/partner" },
    { label: "FAQ", to: "/support/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Governance", to: "/governance" },
    { label: "Armed Forces Covenant", to: "/armed-forces-covenant" },
    { label: "Accessibility", to: "/accessibility" },
  ] },
  { heading: { label: "Get Support", to: "/support/start-here" }, links: [
    { label: "Start here", to: "/support/start-here" },
    { label: "Serving now (including civil service)", to: "/support/currently-serving" },
    { label: "Guidance", to: "/support/guidance" },
    { label: "Insights", to: "/insights" },
    { label: "Downloads and Tools", to: "/support/downloads-and-tools" },
  ] },
  { heading: { label: "Get Involved", to: "/get-involved" }, links: [
    { label: "Join the Network", to: "/join" },
    { label: "Peer Community", to: "/community" },
    { label: "Lived Experiences", to: "/lived-experiences" },
    { label: "Share your story", href: SHARE_MAILTO },
  ] },
];

const navbarHtml = () => renderToStaticMarkup(createElement(Navbar));
const footerHtml = () => renderToStaticMarkup(createElement(Footer));
const desktopMenu = (html: string) => (html.split('class="hidden items-center gap-5 xl:flex"')[1] ?? "").split('class="hidden items-center gap-2 xl:flex"')[0] ?? "";

// Every internal address the menu and footer can reach, including the Join button and the legal links.
const allDestinations = [
  ...NAV_LINKS.flatMap(item => [item.to, ...(item.children ?? []).map(child => child.to)]),
  ...FOOTER_COLUMNS.flatMap(column => [column.heading.to, ...column.links.map(link => ("to" in link ? link.to : link.href))]),
  ...anchors(navbarHtml()).map(a => a.href),
  ...anchors(footerHtml()).map(a => a.href),
].filter(to => to.startsWith("/"));

describe("New main menu is always on", () => {
  it("has no switch-over flags or old link lists left", () => {
    for (const name of ["USE_NEW_NAV", "CURRENT_NAV_LINKS", "NEW_NAV_LINKS", "navLinks", "mapNavForReview"]) expect(name in NavbarModule, name).toBe(false);
    const source = readFileSync("src/components/Navbar.tsx", "utf8");
    for (const banned of ["USE_NEW_NAV", "CURRENT_NAV_LINKS", "NEW_NAV_LINKS", "reviewMode", "useShowNewChrome", "useReviewMode", "hostname", "nav=old"]) expect(source.includes(banned), banned).toBe(false);
  });

  it("has exactly About Us, Get Support and Get Involved with the agreed children", () => {
    expect(NAV_LINKS).toEqual(AGREED_NAV);
  });

  it("renders the three sections and the Join the Network button to /join, with no host or review condition", () => {
    const html = navbarHtml();
    expect(anchors(desktopMenu(html))).toEqual(AGREED_NAV.map(item => ({ href: item.to, label: item.label })));
    const actions = html.split('class="hidden items-center gap-2 xl:flex"')[1] ?? "";
    expect(anchors(actions)).toEqual([{ href: "/join", label: "Join the Network" }]);
  });

  it("has no duplicate destinations across the dropdowns", () => {
    const children = NAV_LINKS.flatMap(item => (item.children ?? []).map(child => child.to));
    expect(new Set(children).size).toBe(children.length);
  });

  it("leaves Join the Network, Resources, What We Do and the About Us FAQ out of the dropdowns", () => {
    const all = NAV_LINKS.flatMap(item => [item, ...(item.children ?? [])]);
    for (const banned of ["Join the Network", "Resources", "What We Do"]) {
      expect(all.some(link => link.label === banned), banned).toBe(false);
    }
    expect(all.some(link => link.to === "/join" || link.to === "/resources" || link.to === "/about/what-we-do")).toBe(false);
    const about = NAV_LINKS.find(item => item.label === "About Us")!;
    expect(about.children!.some(child => child.label === "FAQ" || child.to.includes("faq"))).toBe(false);
  });
});

describe("New footer is always on", () => {
  it("has no switch-over flags or old link lists left", () => {
    for (const name of ["USE_NEW_FOOTER", "CURRENT_FOOTER_COLUMNS", "NEW_FOOTER_COLUMNS", "footerColumns", "mapFooterForReview"]) expect(name in FooterModule, name).toBe(false);
    const source = readFileSync("src/components/Footer.tsx", "utf8");
    for (const banned of ["USE_NEW_FOOTER", "CURRENT_FOOTER_COLUMNS", "NEW_FOOTER_COLUMNS", "reviewMode", "useShowNewChrome", "useReviewMode", "hostname", "nav=old"]) expect(source.includes(banned), banned).toBe(false);
  });

  it("has the agreed three link columns and renders them in a six-column layout", () => {
    expect(FOOTER_COLUMNS).toEqual(AGREED_FOOTER);
    const html = footerHtml();
    const headings = [...html.matchAll(/<h3[^>]*><a [^>]*href="([^"]*)"[^>]*>([^<]*)<\/a><\/h3>/g)].map(m => ({ href: m[1], label: m[2] }));
    expect(headings).toEqual(AGREED_FOOTER.map(column => ({ href: column.heading.to, label: column.heading.label })));
    const lists = [...html.matchAll(/<ul class="text-sm">(.*?)<\/ul>/g)].map(m => anchors(m[1] ?? ""));
    expect(lists).toEqual(AGREED_FOOTER.map(column => column.links.map(link => ({ href: "to" in link ? link.to : link.href, label: link.label }))));
    expect(html).toContain("lg:grid-cols-6");
    expect(html).not.toContain("lg:grid-cols-5");
  });

  it("uses the same Get Support addresses as the menu, with no second Get Support link", () => {
    const menu = NAV_LINKS.find(item => item.label === "Get Support")!.children!;
    const footer = FOOTER_COLUMNS.find(column => column.heading.label === "Get Support")!.links;
    for (const link of footer) {
      expect(menu.find(child => child.label === link.label)?.to, link.label).toBe("to" in link ? link.to : undefined);
    }
    expect(footer.some(link => link.label === "Get Support" || ("to" in link && link.to === "/support"))).toBe(false);
    expect(FOOTER_COLUMNS[0]!.links.some(link => link.label === "What We Do")).toBe(false);
  });
});

describe("Menu and footer destinations", () => {
  it("only point at real pages, never at a redirect", () => {
    for (const to of new Set(allDestinations)) {
      const route = ROUTES.get(to);
      expect(route, `${to} has a route file`).toBeDefined();
      expect(route!.includes("component:"), `${to} serves a page`).toBe(true);
      expect(route!.includes("redirect("), `${to} is not a redirect`).toBe(false);
    }
  });

  it("never link to a preview address", () => {
    for (const to of allDestinations) expect(to.includes("-preview"), to).toBe(false);
  });
});

// Decision 15: every link and button in the menu and footer is at least 44px tall.
const TALL = /\b(min-h-11|h-11)\b/;

describe("Menu and footer tap targets", () => {
  it("gives every rendered footer link and button a 44px minimum height", () => {
    const tags = [...footerHtml().matchAll(/<(a|button)\b[^>]*>/g)].map(m => m[0]);
    expect(tags.length).toBeGreaterThan(20);
    for (const tag of tags) {
      // The Covenant logo link is taller than 44px because of its 56px image.
      if (tag.includes('aria-label="Read our Armed Forces Covenant pledge"')) continue;
      expect(tag, tag).toMatch(TALL);
    }
  });

  it("gives every rendered desktop menu link and button a 44px minimum height", () => {
    const tags = [...navbarHtml().matchAll(/<(a|button)\b[^>]*>/g)].map(m => m[0]);
    expect(tags.length).toBeGreaterThan(8);
    for (const tag of tags) expect(tag, tag).toMatch(TALL);
  });

  it("gives every menu link and button in the source, including dropdowns and the mobile menu, a 44px minimum height", () => {
    const source = readFileSync("src/components/Navbar.tsx", "utf8");
    const starts = [...source.matchAll(/<(NavLink|Link|button|a)\b/g)];
    expect(starts.length).toBeGreaterThanOrEqual(18);
    for (const match of starts) {
      const index = match.index ?? 0;
      const tag = source.slice(index, source.indexOf("<", index + 1));
      // The Join the Network links take their 44px height (h-11) from the wrapping <Button size="lg">.
      const before = source.slice(Math.max(0, index - 200), index);
      if (/<Button asChild[^>]*size="lg">\s*$/.test(before)) continue;
      expect(tag, tag.slice(0, 120)).toMatch(TALL);
    }
    expect(readFileSync("src/components/ui/button.tsx", "utf8")).toContain('lg: "h-11');
  });
});

describe("Review aids are removed", () => {
  const REMOVED = ["src/lib/reviewMode.ts", "src/lib/reviewMode.test.ts", "src/components/ReviewModeBar.tsx", "src/routes/review-preview.tsx", "src/pages/ReviewPreviewPage.tsx"];

  it("deletes the review helper, review bar and review page", () => {
    for (const path of REMOVED) expect(existsSync(path), path).toBe(false);
  });

  it("leaves no import or use of the review code anywhere", () => {
    const tests = new Set(["src/components/navFooter.test.ts", "src/pages/support/startHere.test.ts", "src/data/pageDates.test.ts"]);
    for (const path of files("src")) {
      if (tests.has(path) || path === "src/routeTree.gen.ts" || !/\.(tsx?|css)$/.test(path)) continue;
      const text = readFileSync(path, "utf8");
      for (const banned of ["reviewMode", "ReviewModeBar", "useShowNewChrome", "useReviewMode", "wantsOldNav", "nav=old", "NAV_OLD_", "ReviewPreviewPage", "/review-preview"]) {
        expect(text.includes(banned), `${path}: ${banned}`).toBe(false);
      }
    }
  });

  it("keeps /review-preview out of the sitemap, llms.txt, robots.txt, seo.ts and Layout", () => {
    for (const path of ["public/sitemap.xml", "public/llms.txt", "public/robots.txt", "src/lib/seo.ts", "src/components/Layout.tsx"]) {
      expect(readFileSync(path, "utf8").includes("review-preview"), path).toBe(false);
    }
    expect(ROUTES.has("/review-preview")).toBe(false);
  });
});
