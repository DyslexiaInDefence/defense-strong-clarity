import { describe, expect, it } from "vitest";
import { workforceIllustration } from "./figures";

describe("Illustrative workforce comparison", () => {
  it("uses a 100 dot grid for each workplace", () => {
    expect(workforceIllustration.dotsPerGrid).toBe(100);
  });
  it("shows 10 solid dots for the typical workplace", () => {
    expect(workforceIllustration.typicalHighlighted).toBe(10);
  });
  it("distinguishes Defence's 10 solid dots from its 10 additional outlined dots", () => {
    expect(workforceIllustration.defenceHighlighted).toBe(10);
    expect(workforceIllustration.defenceAdditionalOutlined).toBe(10);
  });
});