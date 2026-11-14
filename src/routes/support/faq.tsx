import { createFileRoute } from "@tanstack/react-router";
import FaqPage from "@/pages/support/FaqPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/faq")({
  // ?for= is optional; unknown values are normalised to All inside the page.
  validateSearch: (search: Record<string, unknown>): { for?: string } =>
    typeof search["for"] === "string" ? { for: search["for"] } : {},
  component: FaqPage,
  head: () => pageHead("/support/faq"),
});
