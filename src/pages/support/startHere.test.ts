import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getPageDate } from "../../data/pageDates";

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

describe("Staged support page boundaries", () => {
  it("excludes Start here from all existing discovery content", () => {
    const allowed = new Set(["src/routes/support/start-here.tsx", "src/pages/support/StartHerePage.tsx", "src/components/SupportTabs.tsx", "src/routeTree.gen.ts", "src/data/pageDates.test.ts", "src/pages/support/startHere.test.ts"]);
    for (const path of [...files("src"), ...files("public")]) {
      if (allowed.has(path) || !/\.(tsx?|txt|xml|html)$/.test(path)) continue;
      expect(readFileSync(path, "utf8").includes("/support/start-here"), path).toBe(false);
    }
  });

  it("leaves all six future support destinations unbuilt", () => {
    const routeText = files("src/routes").filter(path => path.endsWith(".tsx")).map(path => readFileSync(path, "utf8")).join("\n");
    for (const path of ["/support/thinking-of-joining", "/support/leaving-or-left-service", "/support/supporting-someone", "/support/guidance", "/support/downloads-and-tools", "/support/faq"]) {
      expect(routeText.includes(`createFileRoute("${path}")`), path).toBe(false);
    }
  });

  it("does not assign a public content date to the hidden page", () => {
    expect(getPageDate("/support/start-here")).toBeUndefined();
  });
});