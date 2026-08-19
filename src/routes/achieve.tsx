import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301) to the new About Us location.
export const Route = createFileRoute("/achieve")({
  beforeLoad: () => {
    throw redirect({ to: "/about/what-we-want-to-achieve", statusCode: 301 });
  },
});
