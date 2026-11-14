import { createFileRoute } from "@tanstack/react-router";
import DownloadsAndToolsPage from "@/pages/support/DownloadsAndToolsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/downloads-and-tools")({
  // ?for= is optional; unknown values are normalised to All inside the page.
  validateSearch: (search: Record<string, unknown>): { for?: string } =>
    typeof search["for"] === "string" ? { for: search["for"] } : {},
  component: DownloadsAndToolsPage,
  head: () => pageHead("/support/downloads-and-tools"),
});
