import { Link, useLocation } from "@/lib/router-compat";
import { navToggleHref, useReviewMode, wantsOldNav } from "@/lib/reviewMode";

// Review aid shown only on the Lovable preview address. Delete at switch-over.
const ReviewModeBar = () => {
  const review = useReviewMode();
  const { pathname, search } = useLocation();
  if (!review) return null;
  const showingOld = wantsOldNav(search);
  return (
    <div className="border-b border-border bg-primary text-primary-foreground" role="region" aria-label="Review mode">
      <div className="container mx-auto flex flex-col gap-1 px-4 py-1 text-sm leading-relaxed sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="py-2">
          {showingOld
            ? "Review mode: you are seeing the old menu and footer."
            : "Review mode: you are seeing the new menu and footer. Links inside pages may still lead to the old pages until switch-over."}
        </p>
        <Link
          to={navToggleHref(pathname, search, !showingOld)}
          className="inline-flex min-h-11 shrink-0 items-center self-start rounded-xs font-semibold underline underline-offset-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:self-auto"
        >
          {showingOld ? "See the new menu" : "See the old menu"}
        </Link>
      </div>
    </div>
  );
};

export default ReviewModeBar;
