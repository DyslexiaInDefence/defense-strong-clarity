import { describe, expect, it } from "vitest";
import { doingWellFigures } from "./DoingWellSection";

describe("Evidence figures", () => {
  it("keeps membership at 2000 without combining the response counts", () => expect(doingWellFigures.members).toBe(2000));
  it("keeps training responses at 228", () => expect(doingWellFigures.trainingResponses).toBe(228));
  it("keeps written lived experiences at 92", () => expect(doingWellFigures.livedExperiences).toBe(92));
  it("shows 58 percent would know how to help", () => expect(doingWellFigures.wouldHelpPercent).toBe(58));
  it("rounds 108 of 151 to 72 percent", () => {
    expect(doingWellFigures.describedHelp).toBe(108);
    expect(doingWellFigures.studyRespondents).toBe(151);
    expect(Math.round(doingWellFigures.describedHelp / doingWellFigures.studyRespondents * 100)).toBe(72);
  });
  it("shows 82 percent when needs were discussed", () => expect(doingWellFigures.discussedPercent).toBe(82));
  it("shows 25 percent when needs were not discussed", () => expect(doingWellFigures.notDiscussedPercent).toBe(25));
});