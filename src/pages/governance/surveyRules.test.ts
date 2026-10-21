import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const html = readFileSync("public/your-voice.html", "utf8");
const start = html.indexOf("function validate() {");
const end = html.indexOf("async function submitForm", start);
if (start < 0 || end < 0) throw new Error("Survey validation function is missing");
const validation = html.slice(start, end);

function validateConsent(ageConfirmed: boolean, healthConsent: boolean) {
  return runInNewContext(`${validation}\nvalidate();`, {
    path: "other",
    step: 1,
    rawValues: () => ({}),
    visibleFields_: () => [],
    setErr: () => {},
    $: (id: string) => ({ checked: id === "c18" ? ageConfirmed : healthConsent }),
  });
}

describe("Live survey consent requirements", () => {
  it("rejects Part 1 without the 16-or-over confirmation", () => {
    expect(validateConsent(false, true)).toEqual(["__c18"]);
  });

  it("rejects Part 1 without explicit health-data consent", () => {
    expect(validateConsent(true, false)).toEqual(["__cdata"]);
  });

  it("accepts both confirmations", () => {
    expect(validateConsent(true, true)).toEqual([]);
  });
});