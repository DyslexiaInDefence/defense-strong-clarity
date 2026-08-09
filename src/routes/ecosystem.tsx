import { createFileRoute } from "@tanstack/react-router";
import EcosystemPage from "@/pages/EcosystemPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ecosystem")({
  component: EcosystemPage,
  head: () => pageHead("/ecosystem"),
});
