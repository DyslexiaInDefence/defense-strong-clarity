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
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("did-dark") === "true");
  const [largeText, setLargeText] = useState(() => localStorage.getItem("did-large") === "true");
  const [reduceMotion, setReduceMotion] = useState(() => localStorage.getItem("did-motion") === "true");
  const [dyslexicFont, setDyslexicFont] = useState(() => localStorage.getItem("did-dyslexic") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("did-dark", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("text-large", largeText);
    localStorage.setItem("did-large", String(largeText));
  }, [largeText]);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
    localStorage.setItem("did-motion", String(reduceMotion));
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.classList.toggle("dyslexic-font", dyslexicFont);
    localStorage.setItem("did-dyslexic", String(dyslexicFont));
  }, [dyslexicFont]);

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
