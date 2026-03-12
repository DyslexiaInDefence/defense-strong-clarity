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
import JoinPage from "@/pages/JoinPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import AccessibilityPage from "@/pages/AccessibilityPage";
import EcosystemPage from "@/pages/EcosystemPage";
import GovernanceOverviewPage from "@/pages/governance/GovernanceOverviewPage";
import FounderPurposePage from "@/pages/governance/FounderPurposePage";
import CodeOfConductPage from "@/pages/governance/CodeOfConductPage";
import SafeguardingPage from "@/pages/governance/SafeguardingPage";
import PrivacyNoticePage from "@/pages/governance/PrivacyNoticePage";
import SponsorshipPage from "@/pages/governance/SponsorshipPage";
import TransparencyPage from "@/pages/governance/TransparencyPage";
import AchievePage from "@/pages/AchievePage";
import NotFound from "@/pages/NotFound";

const App = () => (
  <AccessibilityProvider>
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
          <Route path="/join" element={<JoinPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/achieve" element={<AchievePage />} />
          <Route path="/governance" element={<GovernanceOverviewPage />} />
          <Route path="/governance/founder" element={<FounderPurposePage />} />
          <Route path="/governance/code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="/governance/safeguarding" element={<SafeguardingPage />} />
          <Route path="/governance/privacy" element={<PrivacyNoticePage />} />
          <Route path="/governance/sponsorship" element={<SponsorshipPage />} />
          <Route path="/governance/transparency" element={<TransparencyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AccessibilityProvider>
);

export default App;
