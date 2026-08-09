import { createFileRoute } from "@tanstack/react-router";
import AchievePage from "@/pages/AchievePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/achieve")({
  component: AchievePage,
  head: () => pageHead("/achieve"),
});
