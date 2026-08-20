import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "@/lib/router-compat";
import { trackPageView } from "@/lib/gtag";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextSteps from "@/components/NextSteps";
import Breadcrumbs from "@/components/Breadcrumbs";

// Pages where the global "What to do next" block would be redundant
const NEXT_STEPS_SKIP = new Set<string>(["/", "/join", "/community"]);

const Layout = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // The initial page view is sent by gtag('config') in the root head; send one
  // for each subsequent client-side route change.
  const isFirstView = useRef(true);
  useEffect(() => {
    if (isFirstView.current) {
      isFirstView.current = false;
      return;
    }
    trackPageView(pathname + search);
  }, [pathname, search]);

  // Insights articles render their own (PRIMARY) NextSteps block via InsightLayout.
  const isInsightArticle =
    pathname.startsWith("/insights/") && pathname !== "/insights";
  const showNextSteps = !NEXT_STEPS_SKIP.has(pathname) && !isInsightArticle;
  const showBreadcrumbs = pathname !== "/";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {showBreadcrumbs && <Breadcrumbs />}
      <main>
        <Outlet />
        {showNextSteps && <NextSteps />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
