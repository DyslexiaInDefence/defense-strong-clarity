import { createFileRoute } from "@tanstack/react-router";
import ThinkingOfJoiningPage from "@/pages/support/ThinkingOfJoiningPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/thinking-of-joining")({
  component: ThinkingOfJoiningPage,
  head: () => pageHead("/support/thinking-of-joining"),
});
