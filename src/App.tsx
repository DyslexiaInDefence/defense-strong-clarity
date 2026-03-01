import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import PlaceholderPage from "@/pages/PlaceholderPage";
import GovernanceOverviewPage from "@/pages/governance/GovernanceOverviewPage";
import FounderPurposePage from "@/pages/governance/FounderPurposePage";
import CodeOfConductPage from "@/pages/governance/CodeOfConductPage";
import SafeguardingPage from "@/pages/governance/SafeguardingPage";
import PrivacyNoticePage from "@/pages/governance/PrivacyNoticePage";
import SponsorshipPage from "@/pages/governance/SponsorshipPage";
import TransparencyPage from "@/pages/governance/TransparencyPage";

const App = () => (
  <AccessibilityProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceholderPage />} />
        <Route path="/governance" element={<GovernanceOverviewPage />} />
        <Route path="/governance/founder" element={<FounderPurposePage />} />
        <Route path="/governance/code-of-conduct" element={<CodeOfConductPage />} />
        <Route path="/governance/safeguarding" element={<SafeguardingPage />} />
        <Route path="/governance/privacy" element={<PrivacyNoticePage />} />
        <Route path="/governance/sponsorship" element={<SponsorshipPage />} />
        <Route path="/governance/transparency" element={<TransparencyPage />} />
      </Routes>
    </BrowserRouter>
  </AccessibilityProvider>
);

export default App;
