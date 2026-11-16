import { createFileRoute } from "@tanstack/react-router";
import SupportBeyondUsPage from "@/pages/support/SupportBeyondUsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/support-beyond-us")({
  component: SupportBeyondUsPage,
  head: () => pageHead("/support/support-beyond-us"),
});
