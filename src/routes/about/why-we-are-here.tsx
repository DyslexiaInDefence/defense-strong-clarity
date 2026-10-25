import { createFileRoute } from "@tanstack/react-router";
import WhyWeAreHerePage from "@/pages/about/WhyWeAreHerePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about/why-we-are-here")({
  component: WhyWeAreHerePage,
  head: () => pageHead("/about/why-we-are-here"),
});