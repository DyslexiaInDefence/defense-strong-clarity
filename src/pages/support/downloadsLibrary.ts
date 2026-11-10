// Downloads and tools library data and filter rules, kept separate so tests can check them.
// Audience labels, filter buttons and ?for= parsing are shared with the Guidance library.
import neurodiversityPdf from "@/assets/introduction-to-neurodiversity-army.pdf.asset.json";
// The same stored SLC forms the Standard Learning Credits page links, so there is one copy of each file.
import slcLevel1 from "@/assets/slc-level1.docx.asset.json";
import slcLevel2 from "@/assets/slc-level2.docx.asset.json";
import slcFull from "@/assets/slc-full.docx.asset.json";
import slcTemplate from "@/assets/slc-template.docx.asset.json";
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
  | {
      kind: "file";
      href: string;
      fileType: "PDF" | "DOCX";
      contentType: string;
      /** Saved filename, matching the SLC page; when set the link downloads instead of opening a new tab. */
      filename?: string;
      /** Descriptive accessible name for the link. */
      ariaLabel?: string;
    };

const SLC_PAGE = "/currently-serving/standard-learning-credits";

export type DownloadItem = {
  title: string;
  description: string;
  audience: GuideAudience;
  group: DownloadGroup;
  link: DownloadLink;
  /** Optional second text link to a page on this site. */
  secondaryLink?: { label: string; to: string };
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
    group: "assessment",
    audience: "serving",
    title: "Level 1 screening: SLC form (Sarah Hickinbotham)",
    description: "A pre-filled Standard Learning Credits application for a Level 1 screening with Sarah Hickinbotham, an independent assessor. Her details, the costs and the reason for study are already filled in. You complete your own details, your signature and the marked items. Only use it if you book with Sarah. A screening is not a diagnosis.",
    link: { kind: "file", href: slcLevel1.url, fileType: "DOCX", contentType: slcLevel1.content_type, filename: "SLC_Application_Sarah_Hickinbotham_Level1_Screening_V2.docx", ariaLabel: "Download the Level 1 screening SLC form (Word, DOCX)" },
    secondaryLink: { label: "Read how the process works", to: SLC_PAGE },
  },
  {
    group: "assessment",
    audience: "serving",
    title: "Level 2 screening: SLC form (Sarah Hickinbotham)",
    description: "A pre-filled Standard Learning Credits application for a Level 2 screening with Sarah Hickinbotham, an independent assessor. Her details, the costs and the reason for study are already filled in. You complete your own details, your signature and the marked items. Only use it if you book with Sarah. A screening is not a diagnosis.",
    link: { kind: "file", href: slcLevel2.url, fileType: "DOCX", contentType: slcLevel2.content_type, filename: "SLC_Application_Sarah_Hickinbotham_Level2_Screening_V2.docx", ariaLabel: "Download the Level 2 screening SLC form (Word, DOCX)" },
    secondaryLink: { label: "Read how the process works", to: SLC_PAGE },
  },
  {
    group: "assessment",
    audience: "serving",
    title: "Full diagnostic assessment: SLC form (Sarah Hickinbotham)",
    description: "A pre-filled Standard Learning Credits application for a full diagnostic assessment with Sarah Hickinbotham, an independent assessor. Her details, the costs and the reason for study are already filled in. You complete your own details, your signature and the marked items. Only use it if you book with Sarah.",
    link: { kind: "file", href: slcFull.url, fileType: "DOCX", contentType: slcFull.content_type, filename: "SLC_Application_Sarah_Hickinbotham_Full_Diagnostic_Assessment_V2.docx", ariaLabel: "Download the full diagnostic assessment SLC form (Word, DOCX)" },
    secondaryLink: { label: "Read how the process works", to: SLC_PAGE },
  },
  {
    group: "assessment",
    audience: "serving",
    title: "Generic SLC application template",
    description: "A blank version of the form, based on MOD Form 1950 (Annex A to JSP 822 Vol 9), for any assessor, such as the British Dyslexia Association. The reason for study and the benefit to Defence are already written for you. You, your line manager and education staff complete the rest.",
    link: { kind: "file", href: slcTemplate.url, fileType: "DOCX", contentType: slcTemplate.content_type, filename: "SLC_Application_Template_Dyslexia_Assessment.docx", ariaLabel: "Download the generic SLC application template (Word, DOCX)" },
    secondaryLink: { label: "Read how the process works", to: SLC_PAGE },
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
  if (link.kind === "page") return "Open";
  return link.fileType === "DOCX" ? "Download (Word)" : `Download (${link.fileType})`;
}
