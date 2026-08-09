import { createFileRoute } from "@tanstack/react-router";
import NeurodiversityMODPage from "@/pages/insights/NeurodiversityMODPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/neurodiversity-in-the-mod-uk")({
  component: NeurodiversityMODPage,
  head: () => pageHead("/insights/neurodiversity-in-the-mod-uk"),
});
