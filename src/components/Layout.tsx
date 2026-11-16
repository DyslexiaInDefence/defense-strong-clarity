import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "@/lib/router-compat";
import { trackPageView } from "@/lib/gtag";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextSteps from "@/components/NextSteps";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieBanner from "@/components/CookieBanner";
import LastUpdated from "@/components/LastUpdated";
import { PAGE_BREADCRUMBS } from "@/data/pageBreadcrumbs";

// Pages where the global "What to do next" block would be redundant
const NEXT_STEPS_SKIP = new Set<string>(["/", "/join", "/community", "/support/start-here", "/support/thinking-of-joining", "/support/leaving-or-left-service", "/support/supporting-someone", "/support/guidance", "/support/downloads-and-tools", "/support/faq", "/support/support-beyond-us", "/support/how-you-think-and-learn", "/insights", "/support/currently-serving", "/currently-serving/standard-learning-credits", "/insights/army-guide-preview", "/get-involved", "/partner"]);

const Layout = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // The initial page view is sent by gtag('config') once analytics consent is
  // given (see CookieBanner); send one for each later client-side route change.
  const isFirstView = useRef(true);
  useEffect(() => {
    if (isFirstView.current) {
      isFirstView.current = false;
      return;
    }
    trackPageView(pathname + search);
  }, [pathname, search]);

  // Insights guide articles (InsightLayout) carry no next-steps block.
  // Understanding Dyslexia does not use InsightLayout, so it takes the shared block.
  const isInsightArticle =
    pathname.startsWith("/insights/") && pathname !== "/insights" && pathname !== "/insights/understanding-dyslexia";
  const showNextSteps = !NEXT_STEPS_SKIP.has(pathname) && !isInsightArticle;
  // Pages that draw their own page trail (PageTrail or an inline trail) skip the automatic one.
  const showBreadcrumbs = pathname !== "/" && !PAGE_BREADCRUMBS[pathname.replace(/\/$/, "")];

  // Unlisted newsletter web copies render without site chrome.
  if (pathname.startsWith("/newsletters/")) return <Outlet />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {showBreadcrumbs && <Breadcrumbs />}
      <main data-inner-page={pathname !== "/" ? "" : undefined}>
        <Outlet />
        {showNextSteps && <NextSteps />}
        <LastUpdated />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
