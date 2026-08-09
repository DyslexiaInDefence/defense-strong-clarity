import { createFileRoute } from "@tanstack/react-router";
import SupportForDyslexiaMilitaryPage from "@/pages/insights/SupportForDyslexiaMilitaryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/what-support-is-available-for-dyslexia-in-the-military-uk")({
  component: SupportForDyslexiaMilitaryPage,
  head: () => pageHead("/insights/what-support-is-available-for-dyslexia-in-the-military-uk"),
});
