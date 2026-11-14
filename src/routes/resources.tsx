import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301): Resources is now Start here.
export const Route = createFileRoute("/resources")({
  beforeLoad: () => {
    throw redirect({ to: "/support/start-here", statusCode: 301 });
  },
});
