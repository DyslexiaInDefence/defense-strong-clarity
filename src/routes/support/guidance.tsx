import { createFileRoute } from "@tanstack/react-router";
import GuidancePage from "@/pages/support/GuidancePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/guidance")({
  // ?for= is optional; unknown values are normalised to All inside the page.
  validateSearch: (search: Record<string, unknown>): { for?: string } =>
    typeof search["for"] === "string" ? { for: search["for"] } : {},
  component: GuidancePage,
  head: () => pageHead("/support/guidance"),
});
