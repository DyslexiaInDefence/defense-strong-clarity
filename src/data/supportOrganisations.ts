import fandfLogo from "@/assets/fandf-logo.png.asset.json";
import neurodiverseLogo from "../../public/images/partners/neurodiverse-community.png.asset.json";
import vobLockup from "@/assets/vob-lockup.jpg.asset.json";
import vobMark from "@/assets/vob-mark.png.asset.json";

// The organisations shown in Support Beyond Us on the homepage and on the Support beyond us page.
// Logos, links and alt text are carried over unchanged from the original homepage carousel.
// Do not add location or service claims that the organisation's own text does not make.

export interface SupportOrganisation {
  name: string;
  alt: string;
  /** Logo, intrinsic size given so the box is reserved before it loads. */
  logo: { src: string; width: number; height: number };
  /** Narrow screen logo (below 768px), if the organisation has a separate mark. */
  mobileLogo?: { src: string; width: number; height: number };
  href: string;
  tagline: string;
  /** Pale logo that needs the dark brand backing it had in the carousel. */
  darkBacking?: boolean;
  /** Logo with built-in padding that is shown taller, as in the carousel. */
  tallLogo?: boolean;
}

export const SUPPORT_ORGANISATIONS: readonly SupportOrganisation[] = [
  {
    name: "Forces Transition Group",
    alt: "Forces Transition Group logo, opens in new tab",
    logo: { src: "/images/partners/FTG-colour-Logo.png", width: 1920, height: 819 },
    href: "https://ftgjobfairs.com",
    tagline:
      "Free support helping military and blue-light personnel and their families move from service to civilian life: online and live job fairs, free CV writing, a live jobs board, the FTG Academy for training, and interview and LinkedIn workshops.",
  },
  {
    name: "FANDF",
    alt: "FANDF, Forces Additional Needs and Disability Forum logo, opens in new tab",
    logo: { src: fandfLogo.url, width: 242, height: 192 },
    href: "https://www.ssafa.org.uk/get-help/disability-support/additional-needs-and-disability-support",
    tagline:
      "A tri-Service forum, facilitated by SSAFA, giving Forces families who have a child or adult dependant with an additional need or disability a voice, with support, advice, an annual conference and a guide for Service families. Free to join.",
  },
  {
    name: "The Education People",
    alt: "The Education People logo, opens in new tab",
    logo: { src: "/images/partners/the-education-people.png", width: 1182, height: 402 },
    href: "https://www.theeducationpeople.org/connecttowork",
    tagline:
      "Delivers Connect to Work across Kent and Medway: up to 12 months of tailored employment support for disabled people, people with health conditions and those facing complex barriers to work. Free recruitment and retention support for employers too.",
  },
  {
    name: "Veterans Operating Base",
    alt: "Veterans Operating Base (VOB) logo",
    logo: { src: vobLockup.url, width: 1920, height: 453 },
    mobileLogo: { src: vobMark.url, width: 1666, height: 713 },
    href: "https://vob.org.uk/",
    tagline:
      "Veteran-led drop-in hub offering immediate, trauma-informed support to veterans and their families: on-site mental health specialists, a PTSD therapist for private sessions, community projects and days out. Open six days a week.",
  },
  {
    name: "Embers Woodcraft",
    alt: "Embers Woodcraft logo, opens in new tab",
    logo: { src: "/images/partners/embers-woodcraft.png", width: 400, height: 100 },
    href: "https://emberswoodcraft.co.uk",
    tagline:
      "Woodland bushcraft days in Kent for military and blue-light communities: build new skills, connect with nature and look after your mental health, with a campfire check-in and signposting to further support.",
    darkBacking: true,
  },
  {
    name: "ReferKent",
    alt: "ReferKent logo, opens in new tab",
    logo: { src: "/images/partners/refer-kent.png", width: 800, height: 450 },
    href: "https://www.kent.gov.uk/referkent",
    tagline:
      "Kent County Council's secure online referral system. Professionals refer adults to support across Kent and Medway, from debt to mental health and wellbeing, with a response within 3 working days. Free for voluntary sector organisations.",
  },
  {
    name: "Head Up",
    alt: "Head Up logo, opens in new tab",
    logo: { src: "/images/partners/head-up.png", width: 350, height: 187 },
    href: "https://www.head-up.org.uk/",
    tagline:
      "Veteran-founded charity supporting the mental health of serving personnel, reservists and veterans from any UK service: one-to-one support, wellness days and mini retreats, and wellness presentations, with a free 7-day residential retreat in development.",
  },
  {
    name: "NeuroDiverse Community",
    alt: "NeuroDiverse Community CIC logo, opens in new tab",
    logo: { src: neurodiverseLogo.url, width: 1600, height: 900 },
    href: "https://neurodiverse-community.co.uk",
    tagline:
      "Community led support for neurodivergent children, young people, adults and families, including Armed Forces and veteran families, with hubs in Catterick and Windsor, parent and carer support, training and employability programmes.",
    tallLogo: true,
  },
  {
    name: "Team Talk",
    alt: "Team Talk logo, opens in new tab",
    logo: { src: "/images/partners/team-talk.png", width: 864, height: 353 },
    href: "https://linktr.ee/t3amtalk",
    tagline:
      "An evidence-informed, people-first initiative breaking down stigma, building meaningful connections and strengthening resilience through the power of everyday conversations. Giving people permission to talk, the confidence to listen and the freedom to connect, without judgement, expectation or pressure. No agenda. No pressure. Just connections.",
  },
];

export interface SupportSection {
  id: string;
  heading: string;
  organisations: readonly string[];
}

// Organisations can appear in more than one section.
export const SUPPORT_SECTIONS: readonly SupportSection[] = [
  { id: "mental-health-and-wellbeing", heading: "Mental health and wellbeing", organisations: ["Head Up", "Team Talk", "Veterans Operating Base", "Embers Woodcraft"] },
  { id: "localised-support", heading: "Localised support", organisations: ["ReferKent", "The Education People", "Veterans Operating Base", "Embers Woodcraft", "NeuroDiverse Community"] },
  { id: "neurodiversity", heading: "Neurodiversity", organisations: ["NeuroDiverse Community", "FANDF"] },
  { id: "transition-and-employment", heading: "Transition and employment", organisations: ["Forces Transition Group", "The Education People"] },
];

export function organisationsFor(section: SupportSection): SupportOrganisation[] {
  return section.organisations.map(name => {
    const organisation = SUPPORT_ORGANISATIONS.find(item => item.name === name);
    if (!organisation) throw new Error(`Unknown support organisation: ${name}`);
    return organisation;
  });
}
