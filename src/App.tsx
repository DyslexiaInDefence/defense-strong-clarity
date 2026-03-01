import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import PlaceholderPage from "@/pages/PlaceholderPage";

const App = () => (
  <AccessibilityProvider>
    <PlaceholderPage />
  </AccessibilityProvider>
);

export default App;
