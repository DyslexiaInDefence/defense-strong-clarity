import { createFileRoute } from "@tanstack/react-router";
import WhatWeDoPage from "@/pages/about/WhatWeDoPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about/what-we-do")({
  component: WhatWeDoPage,
  head: () => pageHead("/about/what-we-do"),
});
