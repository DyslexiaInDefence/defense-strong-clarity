import ftgLogo from "@/assets/ftg-logo.png.asset.json";
import fandfLogo from "@/assets/fandf-logo.png.asset.json";

type PartnerLogo = {
  name: string;
  alt: string;
  src: string;
  href?: string;
};

/**
 * Partner logos. To add a partner, append one object to this array — no other
 * change is needed.
 *
 * Note: the FANDF logo has its own tagline text baked into the image, so at the
 * same fixed height it can read visually larger or heavier than the FTG logo.
 * This is expected for now and can be adjusted later.
 */
const LOGOS: PartnerLogo[] = [
  {
    name: "Forces Transition Group",
    alt: "Forces Transition Group logo",
    src: ftgLogo.url,
    href: "https://ftgjobfairs.com/",
  },
  {
    name: "FANDF",
    alt: "FANDF, Forces Additional Needs and Disability Forum logo",
    src: fandfLogo.url,
  },
];

const LogoItem = ({ logo }: { logo: PartnerLogo }) => {
  const img = (
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      decoding="async"
      className="h-10 w-auto max-w-[180px] object-contain md:h-[60px] md:max-w-[240px]"
    />
  );
  return (
    <li className="flex shrink-0 items-center justify-center">
      {logo.href ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        >
          {img}
        </a>
      ) : (
        img
      )}
    </li>
  );
};

const PartnerLogoScroller = () => (
  <section className="border-t border-border py-16" aria-label="Partners and organisations we work with">
    <div className="container mx-auto px-4">
      <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: "#09245B" }}>
        Partners &amp; Organisations We Work With
      </h2>
    </div>

    {/* Animated strip: pauses on hover / touch-and-hold, static row under reduced motion */}
    <div className="group w-full overflow-hidden bg-white py-6">
      <div className="flex w-max animate-partner-scroll items-center group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center">
        {[0, 1].map((track) => (
          <ul
            key={track}
            className={
              track === 1
                ? "flex items-center gap-10 pl-10 md:gap-20 md:pl-20 motion-reduce:hidden"
                : "flex items-center gap-10 md:gap-20"
            }
            aria-hidden={track === 1 ? true : undefined}
          >
            {LOGOS.map((logo) => (
              <LogoItem key={`${track}-${logo.name}`} logo={logo} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerLogoScroller;
