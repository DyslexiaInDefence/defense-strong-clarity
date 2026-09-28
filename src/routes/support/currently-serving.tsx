import { createFileRoute } from "@tanstack/react-router";
import CurrentlyServingPage from "@/pages/support/CurrentlyServingPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/currently-serving")({
  component: CurrentlyServingPage,
  head: () => pageHead("/support/currently-serving"),
});
