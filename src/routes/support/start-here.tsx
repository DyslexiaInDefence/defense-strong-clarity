import { createFileRoute } from "@tanstack/react-router";
import StartHerePage from "@/pages/support/StartHerePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/support/start-here")({
  component: StartHerePage,
  head: () => pageHead("/support/start-here"),
});