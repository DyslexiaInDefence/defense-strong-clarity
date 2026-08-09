import { createFileRoute } from "@tanstack/react-router";
import DyslexiaIdentifiedDuringServicePage from "@/pages/insights/DyslexiaIdentifiedDuringServicePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/what-happens-if-dyslexia-is-identified-during-service-uk")({
  component: DyslexiaIdentifiedDuringServicePage,
  head: () => pageHead("/insights/what-happens-if-dyslexia-is-identified-during-service-uk"),
});
