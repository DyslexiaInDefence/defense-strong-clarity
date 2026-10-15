import { useEffect, useRef, type ReactNode } from "react";
import { useEvidenceMotion } from "./useEvidenceMotion";

export default function GrowOnView({ children, className = "", responsiveLine = false }: { children?: ReactNode; className?: string; responsiveLine?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const motion = useEvidenceMotion();
  useEffect(() => {
    const element = ref.current;
    if (!motion || !element || played.current || !("IntersectionObserver" in window)) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      played.current = true;
      observer.disconnect();
      const axis = responsiveLine && !window.matchMedia("(min-width: 1024px)").matches ? "Y" : "X";
      animation = element.animate([{ transform: `scale${axis}(0)` }, { transform: `scale${axis}(1)` }], { duration: 1200, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); };
  }, [motion, responsiveLine]);
  return <div ref={ref} aria-hidden="true" className={`origin-top-left ${className}`}>{children}</div>;
}