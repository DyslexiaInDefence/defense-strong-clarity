import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getPageDate } from "../../data/pageDates";
import { GUIDES, GUIDE_FILTERS, filterGuides, parseGuideFilter } from "./guidanceLibrary";
import { DOWNLOAD_ITEMS, filterDownloads, linkLabel } from "./downloadsLibrary";

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

describe("Staged support page boundaries", () => {
  it("excludes Start here from all existing discovery content", () => {
    // Layout's exact-path opt-out is not an inbound link or discovery entry.
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/support/start-here.tsx", "src/pages/support/StartHerePage.tsx", "src/routes/support/thinking-of-joining.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/routes/support/leaving-or-left-service.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/routes/support/supporting-someone.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/routes/support/guidance.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/start-here"), path).toBe(false);
    }
  });

  it("excludes Thinking of joining from all existing discovery content", () => {
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/support/thinking-of-joining.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/StartHerePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/thinking-of-joining"), path).toBe(false);
    }
  });

  it("excludes Leaving or left service from all existing discovery content", () => {
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/support/leaving-or-left-service.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/StartHerePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/leaving-or-left-service"), path).toBe(false);
    }
  });

  it("builds Leaving or left service as a noindex page", () => {
    const route = readFileSync("src/routes/support/leaving-or-left-service.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/leaving-or-left-service")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(getPageDate("/support/leaving-or-left-service")).toBeUndefined();
  });

  it("builds Thinking of joining as a noindex page", () => {
    const route = readFileSync("src/routes/support/thinking-of-joining.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/thinking-of-joining")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(getPageDate("/support/thinking-of-joining")).toBeUndefined();
  });

  it("excludes Supporting someone from all existing discovery content", () => {
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/support/supporting-someone.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/StartHerePage.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/supporting-someone"), path).toBe(false);
    }
  });

  it("keeps Supporting someone hidden with its staging banner and green accent", () => {
    const route = readFileSync("src/routes/support/supporting-someone.tsx", "utf8");
    const page = readFileSync("src/pages/support/SupportingSomeonePage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/supporting-someone")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(page).toContain("support-route-supporting");
    expect(getPageDate("/support/supporting-someone")).toBeUndefined();
  });

  it("excludes Guidance from all existing discovery content", () => {
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/support/guidance.tsx", "src/pages/support/GuidancePage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/guidance"), path).toBe(false);
    }
  });

  it("keeps Guidance hidden with its staging banner", () => {
    const route = readFileSync("src/routes/support/guidance.tsx", "utf8");
    const page = readFileSync("src/pages/support/GuidancePage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/guidance")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/guidance")).toBe(false);
    expect(getPageDate("/support/guidance")).toBeUndefined();
  });

  it("links every guidance card to an existing route", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const guide of GUIDES) {
      expect(routeText.includes(`createFileRoute("${guide.to}")`), guide.to).toBe(true);
    }
  });

  it("shows Everyone guides under every guidance filter", () => {
    const everyone = GUIDES.filter(guide => guide.audience === "everyone");
    expect(everyone.length).toBeGreaterThan(0);
    for (const { value } of GUIDE_FILTERS) {
      const shown = filterGuides(GUIDES, value);
      for (const guide of everyone) expect(shown, value).toContain(guide);
    }
  });

  it("falls back to All for unknown ?for= values", () => {
    expect(parseGuideFilter("serving")).toBe("serving");
    expect(parseGuideFilter("veterans")).toBe("all");
    expect(parseGuideFilter(undefined)).toBe("all");
    expect(filterGuides(GUIDES, parseGuideFilter("veterans"))).toHaveLength(GUIDES.length);
  });

  it("excludes Downloads and tools from all existing discovery content", () => {
    const allowed = new Set(["src/components/Layout.tsx", "src/routes/support/downloads-and-tools.tsx", "src/pages/support/DownloadsAndToolsPage.tsx", "src/pages/support/StartHerePage.tsx", "src/pages/support/ThinkingOfJoiningPage.tsx", "src/pages/support/LeavingOrLeftServicePage.tsx", "src/pages/support/SupportingSomeonePage.tsx", "src/pages/support/GuidancePage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/downloads-and-tools"), path).toBe(false);
    }
  });

  it("keeps Downloads and tools hidden with its staging banner", () => {
    const route = readFileSync("src/routes/support/downloads-and-tools.tsx", "utf8");
    const page = readFileSync("src/pages/support/DownloadsAndToolsPage.tsx", "utf8");
    expect(route).toContain('createFileRoute("/support/downloads-and-tools")');
    expect(route).toContain('content: "noindex, nofollow"');
    expect(page).toContain("const SHOW_WIP_BANNER = true;");
    expect(page).toContain("Work in progress – this page is not live yet.");
    expect(readFileSync("public/sitemap.xml", "utf8").includes("/support/downloads-and-tools")).toBe(false);
    expect(getPageDate("/support/downloads-and-tools")).toBeUndefined();
  });

  it("links every download item to an existing route or stored file of the stated type", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    const assets = files("src/assets").filter(path => path.endsWith(".asset.json")).map(path => JSON.parse(readFileSync(path, "utf8")) as { url: string; content_type: string });
    const mime = { PDF: "application/pdf", DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
    for (const item of DOWNLOAD_ITEMS) {
      if (item.link.kind === "page") {
        expect(routeText.includes(`createFileRoute("${item.link.to}")`), item.link.to).toBe(true);
        expect(linkLabel(item.link)).toBe("Open");
      } else {
        const asset = assets.find(a => a.url === item.link.href);
        expect(asset, item.title).toBeDefined();
        expect(asset?.content_type).toBe(mime[item.link.fileType]);
        expect(linkLabel(item.link)).toBe(`Download (${item.link.fileType})`);
      }
    }
  });

  it("shows any Everyone download items under every filter", () => {
    const everyone = DOWNLOAD_ITEMS.filter(item => item.audience === "everyone");
    for (const { value } of GUIDE_FILTERS) {
      const shown = filterDownloads(DOWNLOAD_ITEMS, value);
      for (const item of everyone) expect(shown, value).toContain(item);
    }
    expect(filterDownloads(DOWNLOAD_ITEMS, "serving")).toHaveLength(3);
    expect(filterDownloads(DOWNLOAD_ITEMS, "joining")).toHaveLength(everyone.length);
  });

  it("leaves the remaining future support library destination unbuilt", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const path of ["/support/faq"]) {
      expect(routeText.includes(`createFileRoute("${path}")`), path).toBe(false);
    }
  });

  it("does not assign a public content date to the hidden page", () => {
    expect(getPageDate("/support/start-here")).toBeUndefined();
  });
});