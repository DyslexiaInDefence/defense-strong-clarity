import { createFileRoute } from "@tanstack/react-router";
import AboutHubPage from "@/pages/AboutHubPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about/")({
  component: AboutHubPage,
  head: () => pageHead("/about"),
});
