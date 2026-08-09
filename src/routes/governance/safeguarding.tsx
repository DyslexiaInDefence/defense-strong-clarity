import { createFileRoute } from "@tanstack/react-router";
import SafeguardingPage from "@/pages/governance/SafeguardingPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/safeguarding")({
  component: SafeguardingPage,
  head: () => pageHead("/governance/safeguarding"),
});
