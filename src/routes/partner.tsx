import { createFileRoute } from "@tanstack/react-router";
import PartnerHubPage from "@/pages/PartnerHubPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/partner")({
  component: PartnerHubPage,
  head: () => pageHead("/partner"),
});
