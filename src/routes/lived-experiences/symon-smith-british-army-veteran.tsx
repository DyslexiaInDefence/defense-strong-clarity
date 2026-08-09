import { createFileRoute } from "@tanstack/react-router";
import SymonSmithPage from "@/pages/lived-experiences/SymonSmithPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/symon-smith-british-army-veteran")({
  component: SymonSmithPage,
  head: () => pageHead("/lived-experiences/symon-smith-british-army-veteran"),
});
