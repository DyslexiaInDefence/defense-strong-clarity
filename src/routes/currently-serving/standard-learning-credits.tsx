import { createFileRoute } from "@tanstack/react-router";
import StandardLearningCreditsPage from "@/pages/support/StandardLearningCreditsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/currently-serving/standard-learning-credits")({
  component: StandardLearningCreditsPage,
  head: () => pageHead("/currently-serving/standard-learning-credits"),
});
