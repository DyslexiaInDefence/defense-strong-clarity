import { createFileRoute } from "@tanstack/react-router";
import LivedExperiencesHubPage from "@/pages/LivedExperiencesHubPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/")({
  component: LivedExperiencesHubPage,
  head: () => pageHead("/lived-experiences"),
});
