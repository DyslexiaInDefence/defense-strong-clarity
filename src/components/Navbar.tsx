import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Moon, Sun, Type, Zap, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import didLogoFull from "@/assets/did-logo-full.webp";


type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

const navLinks: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Why It Matters", to: "/why-it-matters" },
      { label: "What We Want to Achieve", to: "/achieve" },
      { label: "Founder", to: "/governance/founder" },
      { label: "Governance", to: "/governance" },
      { label: "Sponsorship", to: "/governance/sponsorship" },
      { label: "Transparency", to: "/governance/transparency" },
    ],
  },
  {
    label: "Support",
    to: "/support",
    children: [
      { label: "Insights", to: "/insights" },
      { label: "Ask the Community", to: "/community" },
      { label: "Join the Network", to: "/join" },
    ],
  },
  { label: "Contact", to: "/contact" },
];


const Navbar = () => {
  const { darkMode, largeText, reduceMotion, dyslexicFont, toggleDarkMode, toggleLargeText, toggleReduceMotion, toggleDyslexicFont } = useAccessibility();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<Record<string, boolean>>({});
  const { pathname } = useLocation();
  const desktopRef = useRef<HTMLDivElement>(null);

  const isChildActive = (item: NavItem) =>
    item.children?.some((c) => pathname === c.to || pathname.startsWith(c.to + "/")) ?? false;

  const isItemActive = (item: NavItem) => {
    if (item.to === "/") return pathname === "/";
    return pathname === item.to || pathname.startsWith(item.to + "/") || isChildActive(item);
  };

  // Auto-expand mobile section if a child is active
  useEffect(() => {
    setOpenMobile((prev) => {
      const next = { ...prev };
      navLinks.forEach((item) => {
        if (item.children && isChildActive(item)) next[item.label] = true;
      });
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDesktop(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close desktop dropdown on navigation
  useEffect(() => {
    setOpenDesktop(null);
  }, [pathname]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation">
      
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Dyslexia in Defence - Home">
          <img alt="Dyslexia in Defence" className="h-8 w-auto" src="/lovable-uploads/7587c4e2-f331-4595-97c3-f3455bc6fc98.webp" />
        </Link>

        {/* Desktop nav */}
        <div ref={desktopRef} className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => {
            const active = isItemActive(link);
            if (!link.children) {
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1 ${isActive ? "text-primary" : "text-foreground/80"}`
                  }
                >
                  {link.label}
                </NavLink>
              );
            }
            const isOpen = openDesktop === link.label;
            return (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setOpenDesktop(link.label)}
                onMouseLeave={() => setOpenDesktop((cur) => (cur === link.label ? null : cur))}
              >
                <button
                  type="button"
                  onClick={() => setOpenDesktop(isOpen ? null : link.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1 ${active ? "text-primary" : "text-foreground/80"}`}
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full z-50 mt-2 min-w-[14rem] rounded-lg border border-border bg-popover p-2 shadow-lg"
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-secondary ${isActive ? "text-primary" : "text-foreground"}`
                      }
                      role="menuitem"
                    >
                      {link.label} overview
                    </NavLink>
                    <div className="my-1 h-px bg-border" />
                    {link.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          `block rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary ${isActive ? "text-primary" : "text-foreground/80"}`
                        }
                        role="menuitem"
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
            {navLinks.map((link) => {
              if (!link.children) {
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-primary ${isActive ? "bg-secondary text-primary" : "text-foreground/80"}`
                    }
                    onClick={() => setMobileOpen(false)}
                    role="menuitem"
                  >
                    {link.label}
                  </NavLink>
                );
              }
              const expanded = !!openMobile[link.label];
              const active = isItemActive(link);
              return (
                <div key={link.to} className="flex flex-col">
                  <div className="flex items-stretch gap-1">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex-1 rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-primary ${isActive || active ? "bg-secondary text-primary" : "text-foreground/80"}`
                      }
                      onClick={() => setMobileOpen(false)}
                      role="menuitem"
                    >
                      {link.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobile((prev) => ({ ...prev, [link.label]: !prev[link.label] }))
                      }
                      aria-expanded={expanded}
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label} section`}
                      className="rounded-lg px-3 text-foreground/70 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  </div>
                  {expanded && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                      {link.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive }) =>
                            `rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-primary ${isActive ? "bg-secondary text-primary" : "text-foreground/70"}`
                          }
                          onClick={() => setMobileOpen(false)}
                          role="menuitem"
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
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