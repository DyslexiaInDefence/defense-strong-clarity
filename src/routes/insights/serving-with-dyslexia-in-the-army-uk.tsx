import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301), previously a client-side <Navigate>.
export const Route = createFileRoute("/insights/serving-with-dyslexia-in-the-army-uk")({
  beforeLoad: () => {
    throw redirect({ to: "/lived-experiences/staff-sergeant-kirk-davis-british-army", statusCode: 301 });
  },
});
