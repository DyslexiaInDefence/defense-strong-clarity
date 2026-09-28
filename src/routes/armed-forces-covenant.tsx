import { createFileRoute } from "@tanstack/react-router";
import ArmedForcesCovenantPage from "@/pages/ArmedForcesCovenantPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/armed-forces-covenant")({
  component: ArmedForcesCovenantPage,
  head: () => pageHead("/armed-forces-covenant"),
});