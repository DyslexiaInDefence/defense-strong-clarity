import { createFileRoute } from "@tanstack/react-router";
import LivedExperiencesPage from "@/pages/LivedExperiencesPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/")({
  component: LivedExperiencesPage,
  head: () => pageHead("/lived-experiences"),
});
