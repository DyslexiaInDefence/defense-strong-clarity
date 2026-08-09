import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => pageHead("/"),
});
