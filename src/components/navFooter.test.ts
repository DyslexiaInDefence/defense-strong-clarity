import { createElement } from "react";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

// Render links as plain anchors so the menu and footer can be checked without a router.
vi.mock("@/lib/router-compat", () => {
  const anchor = ({ to, children, className, end: _end, ...rest }: { to: string; children?: unknown; className?: unknown; end?: boolean }) =>
    createElement("a", { href: to, className: typeof className === "function" ? className({ isActive: false }) : className, ...rest }, children as never);
  return { Link: anchor, NavLink: anchor, useLocation: () => ({ pathname: "/" }) };
});
vi.mock("@/contexts/AccessibilityContext", () => ({
  useAccessibility: () => ({ darkMode: false, largeText: false, reduceMotion: false, dyslexicFont: false, toggleDarkMode() {}, toggleLargeText() {}, toggleReduceMotion() {}, toggleDyslexicFont() {} }),
}));

const { default: Navbar, USE_NEW_NAV, CURRENT_NAV_LINKS, NEW_NAV_LINKS, navLinks } = await import("./Navbar");
const { default: Footer, USE_NEW_FOOTER, CURRENT_FOOTER_COLUMNS, NEW_FOOTER_COLUMNS, footerColumns } = await import("./Footer");
const { SHARE_MAILTO } = await import("./ShareLivedExperienceBanner");

// Destinations in the new menu and footer that only exist once the switch-over route swaps land.
const POST_SWITCHOVER_ROUTES = new Set(["/get-involved"]);

// Snapshot of the live menu and footer links before the new ones were staged. Any change here must be deliberate.
const LIVE_NAV_SNAPSHOT = [
  { label: "About Us", to: "/about", children: [
    { label: "Our Story", to: "/about/our-story" },
    { label: "Why We Are Here", to: "/about/why-we-are-here" },
    { label: "What We Do", to: "/about/what-we-do" },
    { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
    { label: "FAQ", to: "/about/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Governance", to: "/governance" },
    { label: "Accessibility", to: "/accessibility" },
  ] },
  { label: "Get Support", to: "/support", children: [
    { label: "Currently Serving", to: "/support/currently-serving" },
    { label: "› Standard Learning Credits", to: "/currently-serving/standard-learning-credits" },
    { label: "› Army Education Centres", to: "/currently-serving/army-education-centres" },
    { label: "Join the Network", to: "/join" },
    { label: "Guidance", to: "/insights" },
  ] },
  { label: "Get Involved", to: "/join", children: [
    { label: "Partner With Us", to: "/partner" },
    { label: "Lived Experiences", to: "/lived-experiences" },
    { label: "Peer Community", to: "/community" },
  ] },
];

const LIVE_FOOTER_SNAPSHOT = [
  { heading: { label: "About Us", to: "/about" }, links: [
    { label: "Our Story", to: "/about/our-story" },
    { label: "What We Do", to: "/about/what-we-do" },
    { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
    { label: "FAQ", to: "/about/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Governance", to: "/governance" },
    { label: "Armed Forces Covenant", to: "/armed-forces-covenant" },
    { label: "Accessibility", to: "/accessibility" },
  ] },
  { heading: { label: "Get Support", to: "/support" }, links: [
    { label: "Get Involved", to: "/join" },
    { label: "Join the Network", to: "/join" },
    { label: "Currently Serving", to: "/support/currently-serving" },
    { label: "Guidance", to: "/insights" },
    { label: "Lived Experiences", to: "/lived-experiences" },
    { label: "Peer Community", to: "/community" },
    { label: "Get Support", to: "/support" },
    { label: "Partner With Us", to: "/partner" },
  ] },
];

function routeFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? routeFiles(path) : [path];
  });
}

const EXISTING_ROUTES = new Set(
  routeFiles("src/routes")
    .filter(path => path.endsWith(".tsx") && !path.endsWith("__root.tsx"))
    .map(path => {
      const route = path.replace(/^src\/routes/, "").replace(/\.tsx$/, "").replace(/\/index$/, "");
      return route === "" ? "/" : route;
    }),
);

const anchors = (html: string) => [...html.matchAll(/<a [^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/g)].map(m => ({ href: m[1].replace(/&amp;/g, "&"), label: m[2] }));

const newDestinations = [
  ...NEW_NAV_LINKS.flatMap(item => [item.to, ...(item.children ?? []).map(child => child.to)]),
  ...NEW_FOOTER_COLUMNS.flatMap(column => [column.heading.to, ...column.links.map(link => ("to" in link ? link.to : link.href))]),
];

describe("Main menu and footer switch-over flags", () => {
  it("keeps both flags switched off", () => {
    expect(USE_NEW_NAV).toBe(false);
    expect(USE_NEW_FOOTER).toBe(false);
  });

  it("keeps the live menu links exactly as they were", () => {
    expect(CURRENT_NAV_LINKS).toEqual(LIVE_NAV_SNAPSHOT);
    expect(navLinks).toEqual(LIVE_NAV_SNAPSHOT);
    const html = renderToStaticMarkup(createElement(Navbar));
    const desktop = html.split('class="hidden items-center gap-5 xl:flex"')[1].split('class="hidden items-center gap-2 xl:flex"')[0];
    expect(anchors(desktop)).toEqual(LIVE_NAV_SNAPSHOT.map(item => ({ href: item.to, label: item.label })));
  });

  it("keeps the live footer columns exactly as they were", () => {
    expect(CURRENT_FOOTER_COLUMNS).toEqual(LIVE_FOOTER_SNAPSHOT);
    expect(footerColumns).toEqual(LIVE_FOOTER_SNAPSHOT);
    const html = renderToStaticMarkup(createElement(Footer));
    const headings = [...html.matchAll(/<h3[^>]*><a [^>]*href="([^"]*)"[^>]*>([^<]*)<\/a><\/h3>/g)].map(m => ({ href: m[1], label: m[2] }));
    expect(headings).toEqual(LIVE_FOOTER_SNAPSHOT.map(column => ({ href: column.heading.to, label: column.heading.label })));
    const lists = [...html.matchAll(/<ul class="space-y-2 text-sm">(.*?)<\/ul>/g)].map(m => anchors(m[1]));
    expect(lists).toEqual(LIVE_FOOTER_SNAPSHOT.map(column => column.links.map(link => ({ href: link.to, label: link.label }))));
    expect(html).toContain("lg:grid-cols-5");
    expect(html).not.toContain("lg:grid-cols-6");
  });
});

describe("New main menu", () => {
  it("has exactly About Us, Get Support and Get Involved with the agreed children", () => {
    expect(NEW_NAV_LINKS).toEqual([
      { label: "About Us", to: "/about", children: [
        { label: "Our Story", to: "/about/our-story" },
        { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
        { label: "Partner With Us", to: "/partner" },
        { label: "Governance", to: "/governance" },
        { label: "Accessibility", to: "/accessibility" },
        { label: "Contact Us", to: "/contact" },
      ] },
      { label: "Get Support", to: "/support", children: [
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
    ]);
  });

  it("has no duplicate destinations across the dropdowns", () => {
    const children = NEW_NAV_LINKS.flatMap(item => (item.children ?? []).map(child => child.to));
    expect(new Set(children).size).toBe(children.length);
  });

  it("leaves out Join the Network, Resources, What We Do and the About Us FAQ", () => {
    const all = NEW_NAV_LINKS.flatMap(item => [item, ...(item.children ?? [])]);
    for (const banned of ["Join the Network", "Resources", "What We Do"]) {
      expect(all.some(link => link.label === banned), banned).toBe(false);
    }
    expect(all.some(link => link.to === "/join" || link.to === "/resources" || link.to === "/about/what-we-do")).toBe(false);
    const about = NEW_NAV_LINKS.find(item => item.label === "About Us")!;
    expect(about.children!.some(child => child.label === "FAQ" || child.to.includes("faq"))).toBe(false);
  });
});

describe("New footer columns", () => {
  it("has the agreed three link columns", () => {
    expect(NEW_FOOTER_COLUMNS).toEqual([
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
      { heading: { label: "Get Support", to: "/support" }, links: [
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
    ]);
  });

  it("uses the same Get Support addresses as the new menu, with no second Get Support link", () => {
    const menu = NEW_NAV_LINKS.find(item => item.label === "Get Support")!.children!;
    const footer = NEW_FOOTER_COLUMNS.find(column => column.heading.label === "Get Support")!.links;
    for (const link of footer) {
      expect(menu.find(child => child.label === link.label)?.to, link.label).toBe("to" in link ? link.to : undefined);
    }
    expect(footer.some(link => link.label === "Get Support" || ("to" in link && link.to === "/support"))).toBe(false);
    expect(NEW_FOOTER_COLUMNS[0].links.some(link => link.label === "What We Do")).toBe(false);
  });
});

describe("New menu and footer destinations", () => {
  it("only point at existing routes, the agreed post switch-over routes or the share email", () => {
    const missing = newDestinations.filter(to => to !== SHARE_MAILTO && !EXISTING_ROUTES.has(to));
    expect([...new Set(missing)]).toEqual([...POST_SWITCHOVER_ROUTES]);
    expect([...POST_SWITCHOVER_ROUTES]).toEqual(["/get-involved"]);
  });

  it("never link to a preview address", () => {
    for (const to of newDestinations) expect(to.includes("-preview"), to).toBe(false);
  });
});
