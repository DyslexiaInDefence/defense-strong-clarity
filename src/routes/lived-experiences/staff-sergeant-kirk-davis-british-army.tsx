import { createFileRoute } from "@tanstack/react-router";
import KirkDavisPage from "@/pages/lived-experiences/KirkDavisPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/staff-sergeant-kirk-davis-british-army")({
  component: KirkDavisPage,
  head: () => pageHead("/lived-experiences/staff-sergeant-kirk-davis-british-army"),
});
