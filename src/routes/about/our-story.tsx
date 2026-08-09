import { createFileRoute } from "@tanstack/react-router";
import OurStoryPage from "@/pages/about/OurStoryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about/our-story")({
  component: OurStoryPage,
  head: () => pageHead("/about/our-story"),
});
