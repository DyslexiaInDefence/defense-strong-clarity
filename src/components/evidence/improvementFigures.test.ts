import { describe, expect, it } from "vitest";
import { defenceBars, diagnosisSegments, journeyStages } from "./improvementFigures";

describe("Second section evidence figures", () => {
  it.each([6, 68, 46, 51, 18])("preserves the Defence percentage %i", percent => {
    expect(defenceBars.some(bar => bar.percent === percent)).toBe(true);
  });
  it("keeps the first Defence bar neutral and the rest primary", () => {
    expect(defenceBars.map(bar => bar.neutral)).toEqual([true, false, false, false, false]);
  });
  it.each([[0, 48], [1, 27], [2, 25]])("preserves diagnosis segment %i at %i percent", (index, percent) => {
    expect(diagnosisSegments[index]?.percent).toBe(percent);
  });
  it("preserves the school figures separately", () => expect(journeyStages[0]?.stats.map(stat => stat.value)).toEqual([1, undefined, 78, 65]));
  it("preserves the diagnosis figures separately", () => expect(journeyStages[1]?.stats.map(stat => stat.value)).toEqual([43, 90]));
  it("preserves the work figures separately", () => expect(journeyStages[2]?.stats.map(stat => stat.value)).toEqual([81, 87, 77]));
});