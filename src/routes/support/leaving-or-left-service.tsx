import { createFileRoute } from "@tanstack/react-router";
import LeavingOrLeftServicePage from "@/pages/support/LeavingOrLeftServicePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/leaving-or-left-service")({
  component: LeavingOrLeftServicePage,
  head: () => pageHead("/support/leaving-or-left-service"),
});
