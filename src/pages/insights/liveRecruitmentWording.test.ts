import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const LIVE_FILES = [
  "src/data/faqCategories.ts",
  "src/lib/seo.ts",
  "src/pages/insights/ArmyDyslexiaPage.tsx",
  "src/pages/insights/DyslexiaBarrierMilitaryPage.tsx",
  "src/pages/insights/DeclareDyslexiaMilitaryPage.tsx",
];
const NEW_WORDING = "Dyslexia screening is not a requirement of recruitment";
const ASK_RECRUITER = "Ask your recruiter what the application asks, so you know what to expect.";
const declare = () => readFileSync("src/pages/insights/DeclareDyslexiaMilitaryPage.tsx", "utf8");

describe("Live recruitment screening wording", () => {
  it("keeps 'You are not screened for dyslexia' off every live page", () => {
    for (const path of LIVE_FILES) {
      expect(readFileSync(path, "utf8").toLowerCase().includes("you are not screened for dyslexia"), path).toBe(false);
    }
  });

  it("uses the approved screening sentence on every live page named", () => {
    for (const path of LIVE_FILES) expect(readFileSync(path, "utf8"), path).toContain(NEW_WORDING);
  });

  it("keeps the recruiter advice after the new screening sentence", () => {
    for (const path of ["src/data/faqCategories.ts", "src/lib/seo.ts", "src/pages/insights/DyslexiaBarrierMilitaryPage.tsx"]) {
      expect(readFileSync(path, "utf8"), path).toContain(`${NEW_WORDING}. ${ASK_RECRUITER}`);
    }
  });

  it("merges the two policy bullets on the declare page into one", () => {
    const page = declare();
    expect(page).toContain(`<li>${NEW_WORDING}. ${ASK_RECRUITER}</li>`);
    expect(page).not.toContain("<strong>not screened</strong>");
  });

  it("uses the approved chain of command wording on the declare page", () => {
    const page = declare();
    expect(page).toContain("Once you are serving, there is no requirement to tell your chain of command if your dyslexia does not affect your training or work. If it does, or you need Defence involvement, you are advised to tell them at the first opportunity.");
    expect(page).not.toContain("If your dyslexia could affect how you carry out your duties");
  });
});
