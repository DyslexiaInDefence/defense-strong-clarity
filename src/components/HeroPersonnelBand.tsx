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

// 64 x 64 viewBox. Head centred at (32, 31) r 11. Headwear sits on the brow,
// overlapping the top of the head. Shoulders cropped by the badge edge.
const Head = ({ o }: { o: number }) => <circle cx="32" cy="31" r="11" opacity={o} />;

const Shoulders = ({ o }: { o: number }) => (
  <path d="M32 42 q13 0 17.5 9 q3 5 3 13 h-41 q0 -8 3 -13 q4.5 -9 17.5 -9 Z" opacity={o} />
);

const icons: Array<(p: IconProps) => JSX.Element> = [
  // 1. Beret with small badge, formal collar and tie
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M19 25 q0 -12 13 -12 q14 0 15 8 q-2 4 -9 4.5 q-12 1 -19 -0.5 Z" opacity={o3} />
      <circle cx="41.5" cy="20" r="2.1" opacity={o1} />
      <path d="M32 42 l5.5 5 l-5.5 17 l-5.5 -17 Z" opacity={o1} />
      <path d="M26.5 43 l5.5 4 l-3 3.5 l-5.5 -4.5 Z" opacity={o3} />
      <path d="M37.5 43 l-5.5 4 l3 3.5 l5.5 -4.5 Z" opacity={o3} />
    </g>
  ),
  // 2. Naval officer's cap with dark peak, open shirt collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M21 22 q1 -10 11 -10 q10 0 11 10 Z" opacity={o2} />
      <rect x="20" y="21.5" width="24" height="4.2" rx="1.8" opacity={o3} />
      <path d="M16 25.5 q7 -0.8 14 0 v3.4 q-8 0.8 -14 -0.6 Z" opacity={o3} />
      <circle cx="32" cy="17" r="2" opacity={o3} />
      <path d="M24 43 l8 7 l8 -7 l4.5 3.5 l-12.5 10 l-12.5 -10 Z" opacity={o3} />
    </g>
  ),
  // 3. Army peaked cap with raised crown, tunic collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M21 21 q0 -12 11 -12 q12 0 12.5 12 Z" opacity={o3} />
      <rect x="19.5" y="20.5" width="25" height="4.6" rx="2" opacity={o1} />
      <path d="M15.5 24.8 q7 -0.8 14.5 0 v3.6 q-8 0.8 -14.5 -0.7 Z" opacity={o1} />
      <path d="M32 42 l6.5 5.5 v16.5 h-13 v-16.5 Z" opacity={o3} />
      <circle cx="32" cy="53" r="1.7" opacity={o1} />
      <circle cx="32" cy="59.5" r="1.7" opacity={o1} />
    </g>
  ),
  // 4. Combat helmet with goggles pushed up on the brow
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M19 27 q0 -16 13 -16 q13 0 13 16 q0 2.5 -1.5 3 h-23 q-1.5 -0.5 -1.5 -3 Z" opacity={o3} />
      <path d="M19.5 20 q12.5 -3.5 25 0 v5 q-12.5 -3.5 -25 0 Z" opacity={o1} />
      <path d="M21 30 h6 v3 h-6 Z" opacity={o1} />
      <path d="M37 30 h6 v3 h-6 Z" opacity={o1} />
      <path d="M24 44 h16 v5.5 h-16 Z" opacity={o3} />
    </g>
  ),
  // 5. Camo field cap with soft peak, patterned combat collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M21.5 23 q0 -11 10.5 -11 q11 0 11 11 Z" opacity={o3} />
      <path d="M15.5 22.5 q8 -0.8 15 0 v4 q-9 0.8 -15 -0.8 Z" opacity={o3} />
      <circle cx="24" cy="53" r="3.6" opacity={o3} />
      <circle cx="40" cy="50" r="2.8" opacity={o3} />
      <circle cx="32" cy="61" r="3.2" opacity={o3} />
      <circle cx="46" cy="59" r="2.6" opacity={o3} />
      <circle cx="19" cy="62" r="2.4" opacity={o3} />
    </g>
  ),
  // 6. Helmet with headset cups and boom mic, plated vest collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M20 26 q0 -15 12 -15 q12 0 12 15 q-4 1.5 -12 1.5 q-8 0 -12 -1.5 Z" opacity={o3} />
      <rect x="14.5" y="25" width="6.5" height="10" rx="3" opacity={o1} />
      <rect x="43" y="25" width="6.5" height="10" rx="3" opacity={o1} />
      <path d="M21 34 q3.5 6.5 9 7 v2.6 q-7.5 -0.6 -11.2 -9 Z" opacity={o1} />
      <path d="M22.5 44 h19 v6.5 h-19 Z" opacity={o3} />
      <rect x="26" y="54" width="12" height="9.5" rx="1.6" opacity={o3} />
    </g>
  ),
  // 7. Pilot's helmet with visor and oxygen mask, flight suit collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M19 30 q0 -19 13 -19 q13 0 13 19 q0 4 -2 5 h-22 q-2 -1 -2 -5 Z" opacity={o3} />
      <path d="M20 22 q12 -4 24 0 v5.5 q-12 -3.8 -24 0 Z" opacity={o1} />
      <path d="M24 31 q8 -2.5 16 0 v6.5 q0 5.5 -8 5.5 q-8 0 -8 -5.5 Z" opacity={o1} />
      <rect x="30.5" y="40" width="3" height="7" rx="1.4" opacity={o1} />
      <path d="M21 45 h22 v5.5 h-22 Z" opacity={o3} />
    </g>
  ),
  // 8. Sailor's cap with rolled brim, V-neck sailor collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M22.5 22 q0 -10 9.5 -10 q9.5 0 9.5 10 Z" opacity={o3} />
      <path d="M20 21.5 q12 -3 24 0 q0 4.2 -12 4.2 q-12 0 -12 -4.2 Z" opacity={o3} />
      <path d="M23 43 l9 9.5 l9 -9.5 l5 3.5 l-14 13 l-14 -13 Z" opacity={o3} />
      <path d="M32 54 l4.5 4 l-4.5 3.5 l-4.5 -3.5 Z" opacity={o1} />
    </g>
  ),
  // 9. Dress uniform peaked cap, high buttoned collar
  ({ o1, o2, o3 }) => (
    <g>
      <Head o={o1} />
      <Shoulders o={o2} />
      <path d="M21.5 21 q0 -11 10.5 -11 q11 0 11 11 Z" opacity={o3} />
      <rect x="20" y="20.5" width="24" height="4.6" rx="2" opacity={o1} />
      <path d="M16 24.8 q7 -0.8 14.5 0 v3.6 q-8 0.8 -14.5 -0.7 Z" opacity={o3} />
      <circle cx="32" cy="15" r="2" opacity={o1} />
      <path d="M32 42 l7.5 5.5 v16.5 h-15 v-16.5 Z" opacity={o3} />
      <circle cx="27.5" cy="52" r="1.6" opacity={o1} />
      <circle cx="36.5" cy="52" r="1.6" opacity={o1} />
      <circle cx="27.5" cy="59" r="1.6" opacity={o1} />
      <circle cx="36.5" cy="59" r="1.6" opacity={o1} />
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
