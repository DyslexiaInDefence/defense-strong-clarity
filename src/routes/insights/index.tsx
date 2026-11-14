import { createFileRoute } from "@tanstack/react-router";
import InsightsLandingPage from "@/pages/support/InsightsLandingPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/")({
  component: InsightsLandingPage,
  head: () => pageHead("/insights"),
});
