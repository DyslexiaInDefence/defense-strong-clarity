import { createFileRoute } from "@tanstack/react-router";
import CodeOfConductPage from "@/pages/governance/CodeOfConductPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/code-of-conduct")({
  component: CodeOfConductPage,
  head: () => pageHead("/governance/code-of-conduct"),
});
