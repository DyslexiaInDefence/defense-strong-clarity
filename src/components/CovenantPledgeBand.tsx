import { Link, useLocation } from "@/lib/router-compat";
import covenantBanner from "@/assets/armed-forces-covenant-banner.png.asset.json";

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
    <section className="mt-6 border-y border-border bg-background px-5 py-3.5" aria-labelledby="footer-pledge-heading">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
        {showLogos && (
          <Link
            to="/armed-forces-covenant"
            aria-label="Read our Armed Forces Covenant pledge"
            className="shrink-0"
          >
            <img
              src={covenantBanner.url}
              alt="Armed Forces Covenant"
              className="h-14 w-auto object-contain sm:h-18"
            />
          </Link>
        )}
        <p className="text-sm text-foreground">
          We have signed the Armed Forces Covenant.{" "}
          <Link to="/armed-forces-covenant" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
            Read our pledge
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CovenantPledgeBand;
