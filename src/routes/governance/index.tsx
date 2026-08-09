import { createFileRoute } from "@tanstack/react-router";
import GovernanceOverviewPage from "@/pages/governance/GovernanceOverviewPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/")({
  component: GovernanceOverviewPage,
  head: () => pageHead("/governance"),
});
