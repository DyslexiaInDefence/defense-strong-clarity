import { createFileRoute } from "@tanstack/react-router";
import InsightsPage from "@/pages/InsightsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/")({
  component: InsightsPage,
  head: () => pageHead("/insights"),
});
