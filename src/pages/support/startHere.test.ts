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
        const link = item.link;
        const asset = assets.find(a => a.url === link.href);
        expect(asset, item.title).toBeDefined();
        expect(asset?.content_type).toBe(mime[link.fileType]);
        expect(link.contentType).toBe(mime[link.fileType]);
        expect(linkLabel(link)).toBe(link.fileType === "DOCX" ? "Download (Word)" : `Download (${link.fileType})`);
      }
    }
  });

  it("shows any Everyone download items under every filter", () => {
    const everyone = DOWNLOAD_ITEMS.filter(item => item.audience === "everyone");
    for (const { value } of GUIDE_FILTERS) {
      const shown = filterDownloads(DOWNLOAD_ITEMS, value);
      for (const item of everyone) expect(shown, value).toContain(item);
    }
  });

  it("lists the four SLC Word forms using the same stored files and filenames as the SLC page", () => {
    const slcPage = readFileSync("src/pages/support/StandardLearningCreditsPage.tsx", "utf8");
    const expected = [
      { asset: "slc-level1", filename: "SLC_Application_Sarah_Hickinbotham_Level1_Screening_V2.docx" },
      { asset: "slc-level2", filename: "SLC_Application_Sarah_Hickinbotham_Level2_Screening_V2.docx" },
      { asset: "slc-full", filename: "SLC_Application_Sarah_Hickinbotham_Full_Diagnostic_Assessment_V2.docx" },
      { asset: "slc-template", filename: "SLC_Application_Template_Dyslexia_Assessment.docx" },
    ];
    const wordItems = DOWNLOAD_ITEMS.filter(item => item.link.kind === "file" && item.link.fileType === "DOCX");
    expect(wordItems).toHaveLength(4);
    expected.forEach(({ asset, filename }, index) => {
      const stored = JSON.parse(readFileSync(`src/assets/${asset}.docx.asset.json`, "utf8")) as { url: string };
      const item = wordItems[index];
      const link = item.link;
      if (link.kind !== "file") throw new Error("expected a file link");
      expect(link.href).toBe(stored.url);
      expect(stored.url.endsWith(".docx")).toBe(true);
      expect(link.filename).toBe(filename);
      expect(slcPage.includes(`"${filename}"`), filename).toBe(true);
      expect(slcPage).toContain(`@/assets/${asset}.docx.asset.json`);
      expect(item.group).toBe("assessment");
      expect(item.audience).toBe("serving");
      expect(link.ariaLabel).toMatch(/^Download the .+ \(Word, DOCX\)$/);
      expect(item.secondaryLink).toEqual({ label: "Read how the process works", to: "/currently-serving/standard-learning-credits" });
    });
    // No duplicated Word files in the project.
    expect(files("src").filter(path => path.endsWith(".docx"))).toHaveLength(0);
    expect(files("public").filter(path => path.endsWith(".docx"))).toHaveLength(0);
  });

  it("shows 7 download items under All and Serving now, and none under the other filters", () => {
    expect(filterDownloads(DOWNLOAD_ITEMS, "all")).toHaveLength(7);
    expect(filterDownloads(DOWNLOAD_ITEMS, "serving")).toHaveLength(7);
    for (const value of ["joining", "leaving", "supporting"] as const) {
      expect(filterDownloads(DOWNLOAD_ITEMS, value), value).toHaveLength(0);
    }
  });

  it("keeps prices off the Downloads and tools page", () => {
    const page = readFileSync("src/pages/support/DownloadsAndToolsPage.tsx", "utf8");
    const data = readFileSync("src/pages/support/downloadsLibrary.ts", "utf8");
    for (const text of [page, data]) expect(text).not.toMatch(/£\s?\d|\d+\s?(pounds|GBP)/i);
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