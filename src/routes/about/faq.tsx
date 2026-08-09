import { createFileRoute } from "@tanstack/react-router";
import FaqPage from "@/pages/about/FaqPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about/faq")({
  component: FaqPage,
  head: () => pageHead("/about/faq"),
});
