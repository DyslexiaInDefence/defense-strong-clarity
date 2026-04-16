import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextSteps from "@/components/NextSteps";
import Breadcrumbs from "@/components/Breadcrumbs";
import useSEO from "@/hooks/use-seo";

// Pages where the "What to do next" block would be redundant
const NEXT_STEPS_SKIP = new Set<string>(["/", "/join", "/community"]);

const Layout = () => {
  const { pathname } = useLocation();

  useSEO();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showNextSteps = !NEXT_STEPS_SKIP.has(pathname);
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
