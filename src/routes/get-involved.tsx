import { createFileRoute } from "@tanstack/react-router";
import GetInvolvedHubPage from "@/pages/GetInvolvedHubPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedHubPage,
  head: () => pageHead("/get-involved"),
});
