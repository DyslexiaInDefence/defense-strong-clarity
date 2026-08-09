import { createFileRoute } from "@tanstack/react-router";
import ResourcesPage from "@/pages/ResourcesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => pageHead("/resources"),
});
