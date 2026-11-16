import type { SupportOrganisation } from "@/data/supportOrganisations";

/**
 * An organisation's logo at a fixed height, keeping its aspect ratio. Loaded eagerly with its
 * intrinsic size so it never shows as an empty box. Veterans Operating Base shows its mark on
 * narrow screens and its full lockup from 768px, as the original carousel did.
 */
export default function SupportOrganisationLogo({ organisation }: { organisation: SupportOrganisation }) {
  const size = organisation.tallLogo ? "h-20 md:h-24" : "h-10 md:h-14";
  const small = organisation.mobileLogo ?? organisation.logo;
  const img = (
    <img
      src={small.src}
      width={small.width}
      height={small.height}
      alt={organisation.alt}
      loading="eager"
      decoding="async"
      className={`${size} w-auto max-w-full object-contain`}
    />
  );
  const logo = organisation.mobileLogo ? (
    <picture className="contents">
      <source media="(min-width: 768px)" srcSet={organisation.logo.src} width={organisation.logo.width} height={organisation.logo.height} />
      {img}
    </picture>
  ) : img;
  return organisation.darkBacking ? (
    <span className="flex max-w-full items-center justify-center rounded-md bg-primary px-3 py-2">{logo}</span>
  ) : logo;
}
