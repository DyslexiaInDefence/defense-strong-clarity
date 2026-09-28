import { createFileRoute } from "@tanstack/react-router";
import HubPage from "@/pages/currently-serving/HubPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/currently-serving/")({
  component: HubPage,
  head: () => pageHead("/currently-serving"),
});
