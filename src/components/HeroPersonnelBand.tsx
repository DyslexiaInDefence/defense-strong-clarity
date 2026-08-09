/**
 * Decorative, continuously scrolling band of flat circular military role badges.
 * Nine faceless head-and-shoulders icons, differentiated only by headwear and
 * collar shape. Roughly 1 in every 10 badges is picked out in a ribbon accent,
 * representing the estimated 1 in 10 dyslexia prevalence rate. Motion stops
 * under the site's Reduce Motion toggle and the OS prefers-reduced-motion setting.
 */
const FIGURE_COUNT = 27; // multiple of 9 variants; ~1 in 10 highlighted

type IconProps = {
  /** base silhouette (head, shoulders) */
  o1: number;
  /** headwear / uniform shapes */
  o2: number;
  /** small details: peaks, badges, straps */
  o3: number;
};

// 64 x 64 viewBox. Head centred at (32, 31) r 9.5. Shoulders cropped by badge edge.
const Head = ({ o }: { o: number }) => <circle cx="32" cy="31" r="9.5" opacity={o} />;

const Shoulders = ({ o }: { o: number }) => (
  <path d="M32 41 q12 0 16.5 8.5 q3 5 3 14.5 h-39 q0 -9.5 3 -14.5 q4.5 -8.5 16.5 -8.5 Z" opacity={o} />
);

const icons: Array<(p: IconProps) => JSX.Element> = [
  // 1. Beret with small badge, formal collar and tie
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M21 22 q0 -9 11 -9 q12 0 13.5 6.5 q-1.5 3.5 -7.5 3.5 q-10 0.5 -17 -1 Z" opacity={o3} />
      <circle cx="39" cy="18.5" r="2" opacity={o1} />
      <path d="M32 41 l5 5 l-5 18 l-5 -18 Z" opacity={o1} />
      <path d="M27 42 l5 4 l-3 3 l-5 -4 Z" opacity={o3} />
      <path d="M37 42 l-5 4 l3 3 l5 -4 Z" opacity={o3} />
    </g>
  ),
  // 2. Naval officer's white cap with dark peak, open shirt collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M22 20 q1 -8 10 -8 q9 0 10 8 Z" opacity={o2} />
      <rect x="21" y="19.5" width="22" height="3.6" rx="1.6" opacity={o3} />
      <path d="M18 23 q6 -0.5 12 0 v3 q-7 0.5 -12 -0.5 Z" opacity={o3} />
      <circle cx="32" cy="16" r="1.8" opacity={o3} />
      <path d="M25 42 l7 6 l7 -6 l4 3 l-11 9 l-11 -9 Z" opacity={o3} />
    </g>
  ),
  // 3. Army peaked cap with raised crown, tunic collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M22 19 q0 -10 10 -10 q11 0 11.5 10 Z" opacity={o3} />
      <rect x="20.5" y="18.5" width="23" height="4" rx="1.8" opacity={o1} />
      <path d="M17.5 22.3 q6.5 -0.6 13 0 v3.2 q-7.5 0.6 -13 -0.6 Z" opacity={o1} />
      <path d="M32 41 l6 5 v18 h-12 v-18 Z" opacity={o3} />
      <circle cx="32" cy="52" r="1.6" opacity={o1} />
      <circle cx="32" cy="58" r="1.6" opacity={o1} />
    </g>
  ),
  // 4. Combat helmet with goggles pushed up on the brow
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M20 27 q0 -15 12 -15 q12 0 12 15 q-4 2 -12 2 q-8 0 -12 -2 Z" opacity={o3} />
      <path d="M20.5 18 q11.5 -3 23 0 v4.5 q-11.5 -3 -23 0 Z" opacity={o1} />
      <path d="M24 43 h16 v5 h-16 Z" opacity={o3} />
    </g>
  ),
  // 5. Camo field cap with soft peak, patterned combat collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M23 20 q0 -8 9 -8 q10 0 10 8 Z" opacity={o3} />
      <path d="M18.5 20 q7 -0.6 14 0 v3.4 q-8 0.6 -14 -0.6 Z" opacity={o3} />
      <circle cx="25" cy="52" r="3.4" opacity={o3} />
      <circle cx="39" cy="49" r="2.6" opacity={o3} />
      <circle cx="32" cy="60" r="3" opacity={o3} />
      <circle cx="44" cy="58" r="2.4" opacity={o3} />
      <circle cx="21" cy="61" r="2.2" opacity={o3} />
    </g>
  ),
  // 6. Helmet with headset cups and boom mic, plated vest collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M21 25 q0 -13 11 -13 q11 0 11 13 q-4 1.5 -11 1.5 q-7 0 -11 -1.5 Z" opacity={o3} />
      <rect x="16.5" y="24" width="6" height="9" rx="2.6" opacity={o1} />
      <rect x="41.5" y="24" width="6" height="9" rx="2.6" opacity={o1} />
      <path d="M22 32 q3 6 8 6.5 v2.4 q-7 -0.6 -10.4 -8.4 Z" opacity={o1} />
      <path d="M23 43 h18 v6 h-18 Z" opacity={o3} />
      <rect x="26" y="52" width="12" height="9" rx="1.6" opacity={o3} />
    </g>
  ),
  // 7. Pilot's helmet with visor and oxygen mask, flight suit collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M20 30 q0 -18 12 -18 q12 0 12 18 q0 4 -2 5 h-20 q-2 -1 -2 -5 Z" opacity={o3} />
      <path d="M21 21.5 q11 -3.5 22 0 v4.8 q-11 -3.4 -22 0 Z" opacity={o1} />
      <path d="M25 28 q7 -2 14 0 v6 q0 5 -7 5 q-7 0 -7 -5 Z" opacity={o1} />
      <rect x="30.5" y="36" width="3" height="7" rx="1.4" opacity={o1} />
      <path d="M22 44 h20 v5 h-20 Z" opacity={o3} />
    </g>
  ),
  // 8. Sailor's cap with rolled brim, V-neck sailor collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M23.5 20 q0 -8 8.5 -8 q8.5 0 8.5 8 Z" opacity={o3} />
      <path d="M21.5 19.5 q10.5 -2.5 21 0 q0 3.6 -10.5 3.6 q-10.5 0 -10.5 -3.6 Z" opacity={o3} />
      <path d="M24 42 l8 9 l8 -9 l5 3 l-13 13 l-13 -13 Z" opacity={o3} />
      <path d="M32 52 l4 4 l-4 3 l-4 -3 Z" opacity={o1} />
    </g>
  ),
  // 9. Dress uniform peaked cap, high buttoned collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M22.5 19 q0 -9 9.5 -9 q10 0 10 9 Z" opacity={o3} />
      <rect x="21" y="18.5" width="22" height="4" rx="1.8" opacity={o1} />
      <path d="M18 22.3 q6.5 -0.6 13 0 v3.2 q-7.5 0.6 -13 -0.6 Z" opacity={o3} />
      <circle cx="32" cy="14" r="1.8" opacity={o1} />
      <path d="M32 41 l7 5 v18 h-14 v-18 Z" opacity={o3} />
      <circle cx="27.5" cy="50" r="1.5" opacity={o1} />
      <circle cx="36.5" cy="50" r="1.5" opacity={o1} />
      <circle cx="27.5" cy="57" r="1.5" opacity={o1} />
      <circle cx="36.5" cy="57" r="1.5" opacity={o1} />
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
  const Icon = icons[index % icons.length];
  const tones: IconProps = highlighted
    ? { o1: 0.55, o2: 0.85, o3: 1 }
    : { o1: 0.2, o2: 0.32, o3: 0.42 };

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 64 64"
      className="shrink-0"
      role="presentation"
      focusable="false"
    >
      <defs>
        <clipPath id={`badge-clip-${index}`}>
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="32" fill={tone} opacity={highlighted ? 0.18 : 0.09} />
      <g fill={tone} clipPath={`url(#badge-clip-${index})`}>
        <Icon {...tones} />
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
