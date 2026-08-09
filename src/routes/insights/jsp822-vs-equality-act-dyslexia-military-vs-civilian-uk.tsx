import { createFileRoute } from "@tanstack/react-router";
import JSP822vsEqualityActPage from "@/pages/insights/JSP822vsEqualityActPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk")({
  component: JSP822vsEqualityActPage,
  head: () => pageHead("/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk"),
});
