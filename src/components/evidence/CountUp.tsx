import { useEffect, useRef, useState } from "react";
import { useEvidenceMotion } from "./useEvidenceMotion";

export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const motion = useEvidenceMotion();
  useEffect(() => {
    if (!motion) { setDisplay(value); return; }
    if (started.current || !ref.current || !("IntersectionObserver" in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.4)) return;
      started.current = true;
      observer.disconnect();
      setDisplay(0);
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - start) / 1200, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.4 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [motion, value]);
  const format = (number: number) => `${number.toLocaleString("en-GB")}${suffix}`;
  return <span ref={ref} className="evidence-counter"><span className="sr-only">{format(value)}</span><span aria-hidden="true">{format(display)}</span></span>;
}