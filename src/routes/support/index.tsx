import { createFileRoute } from "@tanstack/react-router";
import SupportPage from "@/pages/SupportPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/")({
  component: SupportPage,
  head: () => pageHead("/support"),
});
