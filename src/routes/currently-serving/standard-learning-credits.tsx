import { createFileRoute } from "@tanstack/react-router";
import SlcPage from "@/pages/support/SlcPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/currently-serving/standard-learning-credits")({
  component: SlcPage,
  head: () => pageHead("/currently-serving/standard-learning-credits"),
});
