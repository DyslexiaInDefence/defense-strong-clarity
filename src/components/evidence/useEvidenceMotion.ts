import { useEffect, useState } from "react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export function useEvidenceMotion() {
  const { reduceMotion } = useAccessibility();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowed(!reduceMotion && !preference.matches && !document.documentElement.classList.contains("reduce-motion"));
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    preference.addEventListener("change", update);
    update();
    return () => { observer.disconnect(); preference.removeEventListener("change", update); };
  }, [reduceMotion]);
  return allowed;
}