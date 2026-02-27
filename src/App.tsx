import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import WhyItMattersPage from "@/pages/WhyItMattersPage";
import CommunityPage from "@/pages/CommunityPage";
import ResourcesPage from "@/pages/ResourcesPage";
import SupportPage from "@/pages/SupportPage";
import PartnerPage from "@/pages/PartnerPage";
import GovernancePage from "@/pages/GovernancePage";
import JoinPage from "@/pages/JoinPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import AccessibilityPage from "@/pages/AccessibilityPage";
import EcosystemPage from "@/pages/EcosystemPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AccessibilityProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-it-matters" element={<WhyItMattersPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/partner" element={<PartnerPage />} />
              <Route path="/governance" element={<GovernancePage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/ecosystem" element={<EcosystemPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AccessibilityProvider>
  </QueryClientProvider>
);

export default App;
