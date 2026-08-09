import { createFileRoute } from "@tanstack/react-router";
import PartnerPage from "@/pages/PartnerPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/partner")({
  component: PartnerPage,
  head: () => pageHead("/partner"),
});
