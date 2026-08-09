/**
 * Decorative, continuously scrolling band of faceless service-personnel silhouettes.
 * Roughly 1 in every 10 figures is picked out in a brighter accent, representing the
 * estimated 1 in 10 dyslexia prevalence rate. Motion stops under the site's
 * Reduce Motion toggle and under the OS prefers-reduced-motion setting.
 */
const FIGURE_COUNT = 30; // 3 highlighted per pass (every 10th)

/**
 * 64 x 64 viewBox. Flat circular badge, faceless head-and-shoulders silhouette,
 * distinguished only by headwear shape. Head centre ~ (32, 30), r 9.
 */
const shoulders = <path d="M32 41 q11 0 15.5 8 q2.5 4.5 2.5 11 h-36 q0 -6.5 2.5 -11 q4.5 -8 15.5 -8 Z" />;

const variants = [
  // Beret, sloped and worn to one side
  (
    <g key="beret">
      <circle cx="32" cy="30" r="9" />
      <path d="M21 22 q1 -8 11 -8 q11 0 13 6 q-1 3 -6 3 q-10 1 -18 -1 Z" />
      {shoulders}
    </g>
  ),
  // Naval officer cap: flat top, band and peak
  (
    <g key="naval">
      <circle cx="32" cy="31" r="8.5" />
      <rect x="23" y="13" width="18" height="6" rx="2.5" />
      <rect x="21" y="19" width="22" height="3.5" rx="1.6" />
      <path d="M18 22.5 h11 v3 h-11 Z" />
      {shoulders}
    </g>
  ),
  // Army peaked cap: structured crown, forward peak
  (
    <g key="peaked">
      <circle cx="32" cy="31" r="8.5" />
      <path d="M22 20 q1 -8 10 -8 q10 0 11 8 Z" />
      <rect x="20" y="20" width="24" height="3.5" rx="1.6" />
      <path d="M17 23.5 h12 v3 h-12 Z" />
      {shoulders}
    </g>
  ),
  // Combat helmet: rounded dome, low brow line
  (
    <g key="helmet">
      <circle cx="32" cy="31" r="8.5" />
      <path d="M20 25 q0 -13 12 -13 q12 0 12 13 q-3 2 -12 2 q-9 0 -12 -2 Z" />
      {shoulders}
    </g>
  ),
  // Field cap: soft low crown, short peak
  (
    <g key="field">
      <circle cx="32" cy="31" r="8.5" />
      <path d="M23 21 q0 -7 9 -7 q9 0 9 7 Z" />
      <path d="M19 21 h12 v3 h-12 Z" />
      {shoulders}
    </g>
  ),
];

const Figure = ({ index }: { index: number }) => {
  const highlighted = index % 10 === 4;
  const accent =
    ["hsl(var(--ribbon-blue))", "hsl(var(--ribbon-yellow))", "hsl(var(--ribbon-green))"][
      Math.floor(index / 10) % 3
    ];
  const tone = highlighted ? accent : "hsl(var(--muted-foreground))";

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 64 64"
      className="shrink-0"
      role="presentation"
      focusable="false"
    >
      <circle cx="32" cy="32" r="32" fill={tone} opacity={highlighted ? 0.16 : 0.08} />
      <g fill={tone} opacity={highlighted ? 0.95 : 0.3}>
        {variants[index % 5]}
      </g>
    </svg>
  );
};

const HeroPersonnelBand = () => {
  const figures = Array.from({ length: FIGURE_COUNT }, (_, i) => i);

  return (
    <div
      className="pointer-events-none select-none overflow-hidden py-2"
      aria-hidden="true"
      data-testid="personnel-band"
    >
      <div className="flex w-max animate-personnel-scroll items-center gap-4 motion-reduce:animate-none">
        {[0, 1].map((track) => (
          <div key={track} className="flex items-center gap-4">
            {figures.map((i) => (
              <Figure key={`${track}-${i}`} index={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPersonnelBand;