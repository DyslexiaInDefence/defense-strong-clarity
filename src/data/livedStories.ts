export interface LivedStory {
  slug: string;
  name: string;
  role: string;
  photoUrl: string;
  photoAlt: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
}

export const livedStories: LivedStory[] = [
  {
    slug: "lisa-hodge-civil-servant",
    name: "Lisa Hodge",
    role: "Civil Servant",
    photoUrl: "/images/lived-experiences/lisa-hodge-lived-experience.webp",
    photoAlt:
      "Lisa Hodge, founding member and Co Chair of the Defence Dyslexia Network",
    summary:
      "Lisa shares being diagnosed with dyslexia at 32, growing up undiagnosed, and helping lead the Defence Dyslexia Network.",
    metaTitle:
      "Lisa Hodge – Civil Servant | Lived Experiences | Dyslexia in Defence",
    metaDescription:
      "Lisa Hodge shares her personal journey of being diagnosed with dyslexia at age 32, growing up undiagnosed, and helping lead the Defence Dyslexia Network.",
  },
  {
    slug: "staff-sergeant-kirk-davis-british-army",
    name: "Staff Sergeant Kirk Davis",
    role: "British Army",
    photoUrl:
      "/images/lived-experiences/staff-sergeant-kirk-davis-lived-experience.webp",
    photoAlt:
      "Staff Sergeant Kirk Davis sharing his lived experience of dyslexia in the British Army",
    summary:
      "A serving Staff Sergeant's perspective on dyslexia, belonging, imposter syndrome, masking, and building confidence throughout an Army career.",
    metaTitle:
      "Staff Sergeant Kirk Davis | Lived Experiences | Dyslexia in Defence",
    metaDescription:
      "Staff Sergeant Kirk Davis shares his lived experience of dyslexia, belonging, imposter syndrome, and support throughout his British Army career.",
  },
];

export const getStory = (slug: string) =>
  livedStories.find((s) => s.slug === slug);

export const LIVED_EXPERIENCES_BASE = "/lived-experiences";