import { createFileRoute } from "@tanstack/react-router";
import DeclareDyslexiaMilitaryPage from "@/pages/insights/DeclareDyslexiaMilitaryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk")({
  component: DeclareDyslexiaMilitaryPage,
  head: () => pageHead("/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk"),
});
