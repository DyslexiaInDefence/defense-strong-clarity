import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301) to the new Currently Serving Hub.
export const Route = createFileRoute("/support/currently-serving")({
  beforeLoad: () => {
    throw redirect({ to: "/currently-serving", statusCode: 301 });
  },
});
