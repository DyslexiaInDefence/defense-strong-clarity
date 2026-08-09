import React, { createContext, useContext, useEffect, useState } from "react";

interface AccessibilityState {
  darkMode: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  dyslexicFont: boolean;
  toggleDarkMode: () => void;
  toggleLargeText: () => void;
  toggleReduceMotion: () => void;
  toggleDyslexicFont: () => void;
}

const AccessibilityContext = createContext<AccessibilityState | undefined>(undefined);

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // SSR-safe: state starts false on both server and client so hydration
  // matches; saved preferences load right after mount. The <html> classes
  // themselves are applied before first paint by the inline bootstrap script
  // in __root.tsx, so there is no visual flash while this state catches up.
  const [hydrated, setHydrated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("did-dark") === "true");
    setLargeText(localStorage.getItem("did-large") === "true");
    setReduceMotion(localStorage.getItem("did-motion") === "true");
    setDyslexicFont(localStorage.getItem("did-dyslexic") === "true");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("did-dark", String(darkMode));
  }, [darkMode, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("text-large", largeText);
    localStorage.setItem("did-large", String(largeText));
  }, [largeText, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
    localStorage.setItem("did-motion", String(reduceMotion));
  }, [reduceMotion, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dyslexic-font", dyslexicFont);
    localStorage.setItem("did-dyslexic", String(dyslexicFont));
  }, [dyslexicFont, hydrated]);

  return (
    <AccessibilityContext.Provider
      value={{
        darkMode,
        largeText,
        reduceMotion,
        dyslexicFont,
        toggleDarkMode: () => setDarkMode((p) => !p),
        toggleLargeText: () => setLargeText((p) => !p),
        toggleReduceMotion: () => setReduceMotion((p) => !p),
        toggleDyslexicFont: () => setDyslexicFont((p) => !p),
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
