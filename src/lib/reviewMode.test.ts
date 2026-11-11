import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";
import { REVIEW_ROUTE_MAP, isReviewHost, navToggleHref, reviewTarget, wantsOldNav } from "./reviewMode";

vi.mock("@/contexts/AccessibilityContext", () => ({
  useAccessibility: () => ({}),
}));

const { USE_NEW_NAV, NEW_NAV_LINKS, mapNavForReview } = await import("../components/Navbar");
const { USE_NEW_FOOTER, NEW_FOOTER_COLUMNS, mapFooterForReview } = await import("../components/Footer");
const { SHARE_MAILTO } = await import("../components/ShareLivedExperienceBanner");

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

describe("Review mode host check", () => {
  it("is on for the Lovable preview address", () => {
    expect(isReviewHost("id-preview--abc.lovable.app")).toBe(true);
    expect(isReviewHost("id-preview--be6a35ad-e7d9-4d1e-8084-785b5406f168.lovable.app")).toBe(true);
  });

  it("is off for the published site, other lovable.app addresses and localhost", () => {
    for (const host of ["dyslexiaindefence.com", "www.dyslexiaindefence.com", "abc.lovable.app", "defense-strong-clarity.lovable.app", "localhost"]) {
      expect(isReviewHost(host), host).toBe(false);
    }
  });

  it("leaves the switch-over flags off", () => {
    expect(USE_NEW_NAV).toBe(false);
    expect(USE_NEW_FOOTER).toBe(false);
  });
});

describe("Review mode address map", () => {
  it("only contains the agreed addresses", () => {
    expect(REVIEW_ROUTE_MAP).toEqual({
      "/about": "/about-preview",
      "/partner": "/partner-preview",
      "/get-involved": "/get-involved-preview",
      "/insights": "/support/insights-preview",
      "/support/currently-serving": "/support/serving-now-preview",
      "/lived-experiences": "/lived-experiences-preview",
      "/currently-serving/standard-learning-credits": "/support/slc-preview",
    });
  });

  it("never points at a missing route", () => {
    for (const target of Object.values(REVIEW_ROUTE_MAP)) expect(EXISTING_ROUTES.has(target), target).toBe(true);
  });

  it("leaves every other destination as it is", () => {
    for (const to of ["/", "/support", "/community", "/join", "/support/guidance", "/contact"]) expect(reviewTarget(to)).toBe(to);
  });

  it("makes every review menu and footer link reach an existing page or the share email", () => {
    const menu = mapNavForReview(NEW_NAV_LINKS).flatMap(item => [item.to, ...(item.children ?? []).map(child => child.to)]);
    const footer = mapFooterForReview(NEW_FOOTER_COLUMNS).flatMap(column => [column.heading.to, ...column.links.map(link => ("to" in link ? link.to : link.href))]);
    for (const to of [...menu, ...footer]) {
      if (to === SHARE_MAILTO) continue;
      expect(EXISTING_ROUTES.has(to), to).toBe(true);
    }
  });
});

describe("Old menu toggle", () => {
  it("adds and removes nav=old on the current address only", () => {
    expect(navToggleHref("/about", "", true)).toBe("/about?nav=old");
    expect(navToggleHref("/support/guidance", "?for=joining", true)).toBe("/support/guidance?for=joining&nav=old");
    expect(navToggleHref("/about", "?nav=old", false)).toBe("/about");
    expect(navToggleHref("/support/guidance", "?for=joining&nav=old", false)).toBe("/support/guidance?for=joining");
    expect(wantsOldNav("?nav=old")).toBe(true);
    expect(wantsOldNav("")).toBe(false);
    expect(wantsOldNav(undefined)).toBe(false);
  });
});
