import { createFileRoute } from "@tanstack/react-router";
import TransparencyPage from "@/pages/governance/TransparencyPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/transparency")({
  component: TransparencyPage,
  head: () => pageHead("/governance/transparency"),
});
