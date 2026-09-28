import { createFileRoute } from "@tanstack/react-router";
import ArmyEducationCentresPage from "@/pages/currently-serving/ArmyEducationCentresPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/currently-serving/army-education-centres")({
  component: ArmyEducationCentresPage,
  head: () => pageHead("/currently-serving/army-education-centres"),
});
