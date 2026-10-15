import type { ReactNode } from "react";

/** Expand within the space left by the 250px navigation and 24px page gutters. */
export default function EvidenceWide({ children }: { children: ReactNode }) {
  return <div className="w-full min-w-0 lg:relative lg:left-1/2 lg:w-[min(1000px,calc(100vw-298px))] lg:max-w-none lg:-translate-x-1/2">{children}</div>;
}