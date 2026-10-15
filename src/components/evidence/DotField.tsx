import { useEffect, useRef } from "react";
import { useEvidenceMotion } from "./useEvidenceMotion";

const DOTS = 18205;
export default function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const played = useRef(false);
  const motion = useEvidenceMotion();
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let fade = 1;
    let width = 0;
    let height = 0;
    let colours: string[] = [];
    let faint = "";
    const draw = () => {
      context.clearRect(0, 0, width, height);
      const columns = Math.ceil(Math.sqrt(DOTS * width / height));
      const rows = Math.ceil(DOTS / columns);
      const spacingX = width / columns;
      const spacingY = height / rows;
      const radius = Math.max(0.45, Math.min(spacingX, spacingY) * 0.16);
      // Every tenth dot is lit; the final incomplete group remains faint.
      for (let group = 0; group < 5; group += 1) {
        context.beginPath();
        context.fillStyle = group === 0 ? faint : colours[group - 1] ?? faint;
        context.globalAlpha = group === 0 ? 0.055 : 0.3 * fade;
        for (let i = 0; i < DOTS; i += 1) {
          const lit = (i + 1) % 10 === 0;
          const colourGroup = lit ? (Math.floor(i / 10) % 4) + 1 : 0;
          if (colourGroup !== group) continue;
          const x = (i % columns + 0.5) * spacingX;
          const y = (Math.floor(i / columns) + 0.5) * spacingY;
          context.moveTo(x + radius, y);
          context.arc(x, y, radius, 0, Math.PI * 2);
        }
        context.fill();
      }
      context.globalAlpha = 1;
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      const scale = Math.min(window.devicePixelRatio || 1, 2, 1600 / width, 1200 / height, Math.sqrt(1400000 / (width * height)));
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      const tokens = getComputedStyle(canvas);
      colours = ["yellow", "blue", "red", "green"].map(colour => `hsl(${tokens.getPropertyValue(`--ribbon-${colour}`)})`);
      faint = `hsl(${tokens.getPropertyValue("--brand-navy-foreground")})`;
      draw();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const themeObserver = new MutationObserver(resize);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    let observer: IntersectionObserver | undefined;
    if (motion && !played.current && "IntersectionObserver" in window) {
      fade = 0;
      draw();
      observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        played.current = true;
        observer?.disconnect();
        const start = performance.now();
        const animate = (now: number) => {
          fade = Math.min((now - start) / 1200, 1);
          draw();
          if (fade < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
      });
      observer.observe(canvas);
    }
    return () => { cancelAnimationFrame(frame); observer?.disconnect(); resizeObserver.disconnect(); themeObserver.disconnect(); };
  }, [motion]);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" data-dot-count={DOTS} />;
}