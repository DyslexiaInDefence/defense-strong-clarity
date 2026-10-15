import { useEffect, useRef, type ReactNode } from "react";
import { useEvidenceMotion } from "./useEvidenceMotion";

export default function Reveal({ children }: { children: ReactNode }) {
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
      animation = element.animate([{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 500, easing: "ease-out" });
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); };
  }, [motion]);
  return <div ref={ref}>{children}</div>;
}