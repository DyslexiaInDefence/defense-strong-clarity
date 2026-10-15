import { useEffect, useRef } from "react";
import { useEvidenceMotion } from "./useEvidenceMotion";

export default function EvidenceBar({ label, percent, neutral = false }: { label: string; percent: number; neutral?: boolean }) {
  const bar = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const motion = useEvidenceMotion();
  useEffect(() => {
    const element = bar.current;
    if (!motion || !element || played.current || !("IntersectionObserver" in window)) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      played.current = true;
      observer.disconnect();
      animation = element.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); };
  }, [motion]);
  return (
    <div role="group" aria-label={label} className="space-y-3">
      <p className="text-lg font-semibold leading-relaxed text-foreground">{label}</p>
      <div aria-hidden="true" className="h-5 overflow-hidden rounded-sm bg-secondary">
        <div ref={bar} className={`h-full origin-left rounded-sm ${neutral ? "bg-muted-foreground" : "bg-primary"}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}