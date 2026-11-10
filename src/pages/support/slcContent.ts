// Shared Standard Learning Credits content for the hidden SLC preview page.
// The live StandardLearningCreditsPage still holds its own copy until switch-over, so update both together until then.
import slcTemplate from "@/assets/slc-template.docx.asset.json";
import slcLevel1 from "@/assets/slc-level1.docx.asset.json";
import slcLevel2 from "@/assets/slc-level2.docx.asset.json";
import slcFull from "@/assets/slc-full.docx.asset.json";

export const SLC_COST_DATE = "30 October 2026";
export const JSP822_PAGE_URL = "https://www.gov.uk/government/publications/jsp-822-governance-and-management-of-defence-individual-training-education-and-skills";
// GOV.UK media links change when the MOD republishes, so check the publication page at JSP822_PAGE_URL whenever the page is updated.
export const JSP822_VOL7_URL = "https://assets.publishing.service.gov.uk/media/65ce3f754239310011b7b8a9/JSP_822_V7.0__Vol_7_V3.0_-_Specific_Learning_Differences.pdf";
export const JSP822_VOL9_URL = "https://assets.publishing.service.gov.uk/media/6925b8c022424e25e6bc316d/JSP_822_Volume_9_Elective_Education.pdf";

// The usual (non-discounted) price of Sarah's full diagnostic assessment, from her information pack.
export const SLC_FULL_USUAL_PRICE = "£595";

// BDA self funded rates (including VAT) and the resulting amounts you pay after SLC.
export const BDA_RATE_DATE = "28 September 2026";
export const BDA_TEACHER_FEE = "£690";
export const BDA_PSYCHOLOGIST_FEE = "£882";
export const BDA_SLC_CAP = "£175";
export const BDA_TEACHER_YOU_PAY = "£515";
export const BDA_PSYCHOLOGIST_YOU_PAY = "£707";

export interface SlcCostOption {
  name: string;
  title: string;
  detail: string;
  total: string;
  slc: string;
  you: string;
  note?: string;
  form: { url: string; filename: string; label: string };
}

// Each option carries its own application form so the table row and its download button stay in sync.
export const SLC_COST_OPTIONS: SlcCostOption[] = [
  {
    name: "Option 1: Level 1 screening",
    title: "Level 1 screening",
    detail: "A brief online check. Not a diagnosis.",
    total: "£50",
    slc: "£40",
    you: "£10",
    form: { url: slcLevel1.url, filename: "SLC_Application_Sarah_Hickinbotham_Level1_Screening_V2.docx", label: "Download the Level 1 screening form (Word)" },
  },
  {
    name: "Option 2: Level 2 screening",
    title: "Level 2 screening",
    detail: "A more detailed online check. Not a diagnosis.",
    total: "£150",
    slc: "£120",
    you: "£30",
    form: { url: slcLevel2.url, filename: "SLC_Application_Sarah_Hickinbotham_Level2_Screening_V2.docx", label: "Download the Level 2 screening form (Word)" },
  },
  {
    name: "Option 3: Full diagnostic assessment",
    title: "Full diagnostic assessment",
    detail: "A full diagnostic assessment and report. Discounted rate for bookings through Dyslexia in Defence.",
    total: "£495",
    slc: "£175",
    you: "£320",
    note: "(£690 through the BDA)",
    form: { url: slcFull.url, filename: "SLC_Application_Sarah_Hickinbotham_Full_Diagnostic_Assessment_V2.docx", label: "Download the full diagnostic assessment form (Word)" },
  },
];

export const SLC_TEMPLATE_FORM = { url: slcTemplate.url, filename: "SLC_Application_Template_Dyslexia_Assessment.docx", label: "Download the template (Word)" };

/* NOTE FOR FUTURE UPDATES: the table figures come from Sarah Hickinbotham's published information pack
    (as of SLC_COST_DATE). Each SLC_COST_OPTIONS entry also holds its own application form asset, so replace
    the form there when a new version is issued. Update SLC_COST_DATE, SLC_COST_OPTIONS and the pricing
    paragraphs below together when the assessor publishes new pricing. The BDA comparison and the BDA route
    section use the BDA self funded rate as of 28 September 2026 and must be updated separately if BDA
    pricing changes. */

export const SARAH_EMAIL = "hello@adultdyslexiaservices.co.uk";
export const SARAH_SUBJECT = "Enquiry via Dyslexia in Defence: Standard Learning Credits assessment";
export const SARAH_BODY = [
  "Hello Sarah,",
  "",
  "I found you through the Dyslexia in Defence website. I am interested in the following option (delete as appropriate): Level 1 screening / Level 2 screening / Full diagnostic assessment, at the rate for bookings through Dyslexia in Defence.",
  "",
  "Could you please let me know:",
  "- your availability and possible dates",
  "- whether you can hold a provisional date while I wait for my Standard Learning Credits to be authorised",
  "- the cost, including whether VAT is included",
  "- a written quote or invoice that I can attach to my Standard Learning Credits application",
  "- how payment works, and what evidence you can give me once the assessment is complete, as I will be claiming my SLC contribution back",
  "",
  "Thank you,",
  "[Your name]",
].join("\r\n");
export const SARAH_MAILTO = `mailto:${SARAH_EMAIL}?subject=${encodeURIComponent(SARAH_SUBJECT)}&body=${encodeURIComponent(SARAH_BODY)}`;
export const SARAH_INFO_PACK_URL = "https://sway.cloud.microsoft/HjNS1WQIQ6VdYA7d";
export const SARAH_SERVICES_URL = "https://www.adultdyslexiaservices.co.uk/services-5";
