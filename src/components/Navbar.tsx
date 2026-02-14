import { useState } from "react";
import { Moon, Sun, Type, Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Support", href: "#support" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { darkMode, largeText, reduceMotion, toggleDarkMode, toggleLargeText, toggleReduceMotion } = useAccessibility();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-primary" aria-label="Dyslexia in Defence - Home">
          Dyslexia in Defence
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Accessibility toggles + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-foreground/70 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleLargeText}
            className={`rounded-lg p-2 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${largeText ? "bg-secondary text-primary" : "text-foreground/70"}`}
            aria-label={largeText ? "Reset text size" : "Increase text size"}
            title="Text size"
          >
            <Type className="h-5 w-5" />
          </button>
          <button
            onClick={toggleReduceMotion}
            className={`rounded-lg p-2 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${reduceMotion ? "bg-secondary text-primary" : "text-foreground/70"}`}
            aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
            title="Reduce motion"
          >
            <Zap className="h-5 w-5" />
          </button>

          <a href="#join">
            <Button className="ml-2 rounded-full font-semibold" size="lg">
              Get Involved
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden" role="menu">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                onClick={() => setMobileOpen(false)}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <button onClick={toggleDarkMode} className="rounded-lg p-2 text-foreground/70 hover:bg-secondary" aria-label={darkMode ? "Light mode" : "Dark mode"}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={toggleLargeText} className={`rounded-lg p-2 hover:bg-secondary ${largeText ? "bg-secondary text-primary" : "text-foreground/70"}`} aria-label="Text size">
              <Type className="h-5 w-5" />
            </button>
            <button onClick={toggleReduceMotion} className={`rounded-lg p-2 hover:bg-secondary ${reduceMotion ? "bg-secondary text-primary" : "text-foreground/70"}`} aria-label="Reduce motion">
              <Zap className="h-5 w-5" />
            </button>
          </div>
          <a href="#join" className="mt-4 block" onClick={() => setMobileOpen(false)}>
            <Button className="w-full rounded-full font-semibold" size="lg">Get Involved</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
