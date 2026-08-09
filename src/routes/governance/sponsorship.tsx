import { createFileRoute } from "@tanstack/react-router";
import SponsorshipPage from "@/pages/governance/SponsorshipPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/sponsorship")({
  component: SponsorshipPage,
  head: () => pageHead("/governance/sponsorship"),
});
