// Downloads and tools library data and filter rules, kept separate so tests can check them.
// Audience labels, filter buttons and ?for= parsing are shared with the Guidance library.
import neurodiversityPdf from "@/assets/introduction-to-neurodiversity-army.pdf.asset.json";
import type { GuideAudience, GuideFilter } from "./guidanceLibrary";

export type DownloadGroup = "assessment" | "near-you" | "read";

export const DOWNLOAD_GROUPS: { id: DownloadGroup; heading: string }[] = [
  { id: "assessment", heading: "Get an assessment" },
  { id: "near-you", heading: "Find help near you" },
  { id: "read", heading: "Read" },
];

/** A page on this site ("Open") or a stored file whose type has been confirmed from the file itself. */
export type DownloadLink =
  | { kind: "page"; to: string }
  | { kind: "file"; href: string; fileType: "PDF" | "DOCX"; contentType: string };

export type DownloadItem = {
  title: string;
  description: string;
  audience: GuideAudience;
  group: DownloadGroup;
  link: DownloadLink;
};

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    group: "assessment",
    audience: "serving",
    title: "Screening and assessment forms",
    description: "The Standard Learning Credit forms and the routes to screening and assessment, with who to contact.",
    link: { kind: "page", to: "/currently-serving/standard-learning-credits" },
  },
  {
    group: "near-you",
    audience: "serving",
    title: "Army Education Centre directory",
    description: "Find your nearest centre on the map.",
    link: { kind: "page", to: "/currently-serving/army-education-centres" },
  },
  {
    group: "read",
    audience: "serving",
    title: "Introduction to neurodiversity in the Army",
    description: "A short guide to read yourself or pass to someone else.",
    link: { kind: "file", href: neurodiversityPdf.url, fileType: "PDF", contentType: neurodiversityPdf.content_type },
  },
];

/** "Everyone" items always show, whichever filter is selected. */
export function filterDownloads(items: DownloadItem[], filter: GuideFilter): DownloadItem[] {
  if (filter === "all") return items;
  return items.filter(item => item.audience === "everyone" || item.audience === filter);
}

export function linkLabel(link: DownloadLink): string {
  return link.kind === "page" ? "Open" : `Download (${link.fileType})`;
}
