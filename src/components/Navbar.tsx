import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Type, Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import didLogoFull from "@/assets/did-logo-full.png";
import didIcon from "@/assets/did-icon.png";

const navLinks = [
{ label: "Home", to: "/" },
{ label: "Why It Matters", to: "/why-it-matters" },
{ label: "What We Want to Achieve", to: "/achieve" },
{ label: "Governance", to: "/governance" }];


const Navbar = () => {
  const { darkMode, largeText, reduceMotion, dyslexicFont, toggleDarkMode, toggleLargeText, toggleReduceMotion, toggleDyslexicFont } = useAccessibility();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation">
      
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Dyslexia in Defence - Home">
          <img src={didIcon} alt="" className="h-8 w-auto sm:hidden" aria-hidden="true" />
          <img alt="Dyslexia in Defence" className="hidden sm:block h-8 w-auto" src="/lovable-uploads/8357f802-8a1f-4cbf-9742-b43a69ed84c4.png" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) =>
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1 ${isActive ? "text-primary" : "text-foreground/80"}`
            }>
            
              {link.label}
            </NavLink>
          )}
        </div>

        {/* Accessibility toggles + CTA */}
        <div className="hidden items-center gap-2 xl:flex">
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-foreground/70 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}>
            
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleLargeText}
            className={`rounded-lg p-2 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${largeText ? "bg-secondary text-primary" : "text-foreground/70"}`}
            aria-label={largeText ? "Reset text size" : "Increase text size"}
            title="Text size">
            
            <Type className="h-5 w-5" />
          </button>
          <button
            onClick={toggleReduceMotion}
            className={`rounded-lg p-2 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${reduceMotion ? "bg-secondary text-primary" : "text-foreground/70"}`}
            aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
            title="Reduce motion">
            
            <Zap className="h-5 w-5" />
          </button>
          <button
            onClick={toggleDyslexicFont}
            className={`rounded-lg px-2 py-1 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-bold text-sm ${dyslexicFont ? "bg-secondary text-primary" : "text-foreground/70"}`}
            aria-label={dyslexicFont ? "Use default font" : "Use OpenDyslexic font"}
            title="Dyslexic friendly font"
            style={dyslexicFont ? { fontFamily: "'Open Dyslexic', sans-serif" } : undefined}>
            
            Aa
          </button>

          <Link to="/join">
            <Button className="ml-2 rounded-full font-semibold" size="lg">
              Get Involved
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-foreground xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="border-t border-border bg-background px-4 py-4 xl:hidden" role="menu">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) =>
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-primary ${isActive ? "bg-secondary text-primary" : "text-foreground/80"}`
            }
            onClick={() => setMobileOpen(false)}
            role="menuitem">
            
                {link.label}
              </NavLink>
          )}
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
            <button onClick={toggleDyslexicFont} className={`rounded-lg px-2 py-1 hover:bg-secondary font-bold text-sm ${dyslexicFont ? "bg-secondary text-primary" : "text-foreground/70"}`} aria-label="Dyslexic font" style={dyslexicFont ? { fontFamily: "'Open Dyslexic', sans-serif" } : undefined}>
              Aa
            </button>
          </div>
          <Link to="/join" className="mt-4 block" onClick={() => setMobileOpen(false)}>
            <Button className="w-full rounded-full font-semibold" size="lg">Get Involved</Button>
          </Link>
        </div>
      }
    </nav>);

};

export default Navbar;