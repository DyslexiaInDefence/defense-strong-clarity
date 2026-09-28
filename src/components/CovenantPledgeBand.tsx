import { Link, useLocation } from "@/lib/router-compat";
import CovenantLogoLockup from "@/components/CovenantLogoLockup";

const LOGO_EXCLUDED_ROUTES = new Set([
  "/partner",
  "/governance",
  "/governance/founder",
  "/governance/sponsorship",
  "/governance/transparency",
  "/support/currently-serving",
  "/currently-serving/standard-learning-credits",
  "/currently-serving/army-education-centres",
]);

const CovenantPledgeBand = () => {
  const { pathname } = useLocation();
  const showLogos = !LOGO_EXCLUDED_ROUTES.has(pathname.replace(/\/$/, "") || "/");

  return (
    <section className="mt-10 border-y border-border bg-background px-5 py-7" aria-labelledby="footer-pledge-heading">
      <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
        {showLogos && <CovenantLogoLockup compact />}
        <div className="max-w-3xl">
          <h2 id="footer-pledge-heading" className="mb-2 text-lg font-bold text-foreground">Our pledge</h2>
          <p className="text-sm leading-relaxed text-foreground">
            We have signed the Armed Forces Covenant, the nation's promise that those who serve or have served, and their families, are treated fairly.{" "}
            <Link to="/armed-forces-covenant" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
              Read our pledge
            </Link>
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Signing the Covenant is a voluntary pledge and does not imply Ministry of Defence endorsement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CovenantPledgeBand;