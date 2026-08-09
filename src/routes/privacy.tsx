import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301), previously a client-side <Navigate>.
export const Route = createFileRoute("/privacy")({
  beforeLoad: () => {
    throw redirect({ to: "/governance/privacy", statusCode: 301 });
  },
});
