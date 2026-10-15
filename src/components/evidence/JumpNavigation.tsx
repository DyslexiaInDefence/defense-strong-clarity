import { useEffect, useRef, useState } from "react";
import { Link } from "@/lib/router-compat";

export const evidenceSections = [
  { id: "what-defence-is-doing-well", label: "What is going well", title: "What Defence is doing well" },
  { id: "what-can-be-improved", label: "What can be improved", title: "What can be improved" },
  { id: "you-said-we-heard", label: "You said, we heard", title: "You said, we heard" },
  { id: "sources-and-method", label: "Sources and method", title: "Sources and method" },
];

export default function JumpNavigation() {
  const [active, setActive] = useState(evidenceSections[0]?.id);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Main navigation"]');
    const root = ref.current?.closest<HTMLElement>(".evidence-page");
    const resize = () => root?.style.setProperty("--evidence-header-height", `${nav?.getBoundingClientRect().height ?? 80}px`);
    resize();
    const sizeObserver = new ResizeObserver(resize);
    if (nav) sizeObserver.observe(nav);
    const sections = evidenceSections.map(section => document.getElementById(section.id)).filter((section): section is HTMLElement => Boolean(section));
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      }, { rootMargin: "-25% 0px -45% 0px", threshold: 0 });
      sections.forEach(section => observer?.observe(section));
    }
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const first = sections[0];
      const last = sections[sections.length - 1];
      if (!first || !last) return;
      const offset = (nav?.getBoundingClientRect().height ?? 80) + 80;
      const start = first.getBoundingClientRect().top - offset;
      const distance = last.getBoundingClientRect().bottom - first.getBoundingClientRect().top - window.innerHeight + offset;
      setProgress(Math.max(0, Math.min(1, -start / Math.max(distance, 1))));
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    updateProgress();
    return () => { sizeObserver.disconnect(); observer?.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", scroll); window.removeEventListener("resize", scroll); };
  }, []);
  useEffect(() => {
    ref.current?.querySelectorAll<HTMLAnchorElement>("a[data-section-id]").forEach(link => {
      if (link.dataset.sectionId === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    const link = ref.current?.querySelector<HTMLElement>('[aria-current="location"]');
    const nav = ref.current;
    if (link && nav && window.innerWidth < 1024) nav.scrollLeft = Math.max(0, link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2);
  }, [active]);
  return (
    <nav ref={ref} className="evidence-jump" aria-label="Evidence sections">
      <div className="evidence-progress" aria-hidden="true"><div style={{ transform: `scaleY(${progress})` }} /></div>
      {evidenceSections.map(section => <Link key={section.id} to={`#${section.id}`} activeOptions={{ includeHash: true }} data-section-id={section.id} data-evidence-active={active === section.id} aria-current={active === section.id ? "location" : undefined} className="evidence-jump-link">{section.label}</Link>)}
    </nav>
  );
}