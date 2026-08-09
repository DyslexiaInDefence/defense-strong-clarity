import { createFileRoute } from "@tanstack/react-router";
import FounderPurposePage from "@/pages/governance/FounderPurposePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/founder")({
  component: FounderPurposePage,
  head: () => pageHead("/governance/founder"),
});
