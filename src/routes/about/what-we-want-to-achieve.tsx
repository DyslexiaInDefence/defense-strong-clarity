import { createFileRoute } from "@tanstack/react-router";
import WhatWeWantToAchievePage from "@/pages/about/WhatWeWantToAchievePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about/what-we-want-to-achieve")({
  component: WhatWeWantToAchievePage,
  head: () => pageHead("/about/what-we-want-to-achieve"),
});
