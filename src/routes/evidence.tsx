import { createFileRoute } from "@tanstack/react-router";
import EvidencePage from "@/pages/EvidencePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/evidence")({
  component: EvidencePage,
  head: () => pageHead("/evidence"),
});
