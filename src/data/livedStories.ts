import lisaPhoto from "@/assets/lisa-hodge.png.asset.json";

export interface LivedStory {
  slug: string;
  name: string;
  role: string;
  photoUrl: string;
  photoAlt: string;
  metaTitle: string;
  metaDescription: string;
}

export const livedStories: LivedStory[] = [
  {
    slug: "lisa-hodge-civil-servant",
    name: "Lisa Hodge",
    role: "Civil Servant",
    photoUrl: lisaPhoto.url,
    photoAlt:
      "Lisa Hodge, founding member and Co Chair of the Defence Dyslexia Network",
    metaTitle:
      "Lisa Hodge – Civil Servant | Lived Experiences | Dyslexia in Defence",
    metaDescription:
      "Lisa Hodge shares her personal journey of being diagnosed with dyslexia at age 32, growing up undiagnosed, and helping lead the Defence Dyslexia Network.",
  },
];

export const getStory = (slug: string) =>
  livedStories.find((s) => s.slug === slug);

export const LIVED_EXPERIENCES_BASE = "/lived-experiences";