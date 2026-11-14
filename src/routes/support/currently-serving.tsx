import { createFileRoute } from "@tanstack/react-router";
import ServingNowPage from "@/pages/support/ServingNowPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/currently-serving")({
  component: ServingNowPage,
  head: () => pageHead("/support/currently-serving"),
});
