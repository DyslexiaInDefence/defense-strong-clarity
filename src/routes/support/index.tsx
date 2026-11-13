import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301): the Get support hub is now Start here.
export const Route = createFileRoute("/support/")({
  beforeLoad: () => {
    throw redirect({ to: "/support/start-here", statusCode: 301 });
  },
});
