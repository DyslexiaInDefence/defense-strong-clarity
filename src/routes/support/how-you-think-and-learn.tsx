import { createFileRoute } from "@tanstack/react-router";
import HowYouThinkAndLearnPage from "@/pages/support/HowYouThinkAndLearnPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/how-you-think-and-learn")({
  component: HowYouThinkAndLearnPage,
  head: () => pageHead("/support/how-you-think-and-learn"),
});
