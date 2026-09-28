import { createFileRoute, redirect } from "@tanstack/react-router";

// Breadcrumb target: send /currently-serving to the existing hub.
export const Route = createFileRoute("/currently-serving/")({
  beforeLoad: () => {
    throw redirect({ to: "/support/currently-serving", statusCode: 301 });
  },
});
