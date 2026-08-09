import { createFileRoute } from "@tanstack/react-router";
import DyslexiaBarrierMilitaryPage from "@/pages/insights/DyslexiaBarrierMilitaryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/is-dyslexia-a-barrier-in-the-military-uk")({
  component: DyslexiaBarrierMilitaryPage,
  head: () => pageHead("/insights/is-dyslexia-a-barrier-in-the-military-uk"),
});
