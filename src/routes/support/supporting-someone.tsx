import { createFileRoute } from "@tanstack/react-router";
import SupportingSomeonePage from "@/pages/support/SupportingSomeonePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/supporting-someone")({
  component: SupportingSomeonePage,
  head: () => pageHead("/support/supporting-someone"),
});
