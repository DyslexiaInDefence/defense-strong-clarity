import { createFileRoute } from "@tanstack/react-router";
import UnderstandingDyslexiaPage from "@/pages/support/UnderstandingDyslexiaPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/understanding-dyslexia")({
  component: UnderstandingDyslexiaPage,
  head: () => pageHead("/insights/understanding-dyslexia"),
});
