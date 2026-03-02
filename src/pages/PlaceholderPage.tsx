import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Moon, Sun, Type, Eye } from "lucide-react";

const PlaceholderPage = () => {
  const {
    darkMode,
    largeText,
    reduceMotion,
    dyslexicFont,
    toggleDarkMode,
    toggleLargeText,
    toggleReduceMotion,
    toggleDyslexicFont,
  } = useAccessibility();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Ribbon accent */}
      <div
        className="absolute top-0 left-0 w-full h-1.5 animate-ribbon-flow"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--ribbon-yellow)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-red)), hsl(var(--ribbon-green)), hsl(var(--ribbon-yellow)))",
          backgroundSize: "300% 100%",
        }}
      />

      {/* Content */}
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Coming soon... Dyslexia in Defence
        </h1>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          An independent organisation aimed at enabling those with dyslexia to
          thrive across their time in service, transition and industry
          environments by providing peer support, curated resources and
          structured signposting across the defence and security ecosystem.
        </p>

      <a
          href="mailto:contact@dyslexiaindefence.com"
          className="inline-block text-primary hover:text-primary/80 underline underline-offset-4 font-medium transition-colors"
        >
          contact@dyslexiaindefence.com
        </a>

        <div className="pt-4">
          <a
            href="/governance"
            className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors"
          >
            Governance & Policies
          </a>
        </div>
      </div>

      {/* Accessibility toggles */}
      <div className="mt-16 flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          onClick={toggleLargeText}
          aria-label="Toggle large text"
          className={`px-2 py-1 rounded-md text-sm font-bold transition-colors ${
            largeText
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <Type size={18} />
        </button>
        <button
          onClick={toggleDyslexicFont}
          aria-label="Toggle dyslexic font"
          className={`px-2 py-1 rounded-md text-sm font-bold transition-colors ${
            dyslexicFont
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
          style={dyslexicFont ? { fontFamily: "'Open Dyslexic', sans-serif" } : undefined}
        >
          Aa
        </button>
        <button
          onClick={toggleReduceMotion}
          aria-label="Toggle reduce motion"
          className={`p-2 rounded-md transition-colors ${
            reduceMotion
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <Eye size={18} />
        </button>
      </div>

      {/* Bottom ribbon */}
      <div
        className="absolute bottom-0 left-0 w-full h-1.5 animate-ribbon-flow"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--ribbon-green)), hsl(var(--ribbon-red)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-yellow)), hsl(var(--ribbon-green)))",
          backgroundSize: "300% 100%",
        }}
      />
    </div>
  );
};

export default PlaceholderPage;
