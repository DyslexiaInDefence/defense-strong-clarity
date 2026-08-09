/**
 * Decorative, continuously scrolling band of faceless service-personnel silhouettes.
 * Roughly 1 in every 10 figures is picked out in a brighter accent, representing the
 * estimated 1 in 10 dyslexia prevalence rate. Motion stops under the site's
 * Reduce Motion toggle and under the OS prefers-reduced-motion setting.
 */
const FIGURE_COUNT = 30; // 3 highlighted per pass (every 10th)

const variants = [
  // Army: beret-style headwear, squarer shoulders
  (
    <g key="army">
      <path d="M7 8 Q17 0 27 6 Q22 9 8 10 Z" />
      <circle cx="17" cy="14" r="7.5" />
      <path d="M5 26 h24 a3 3 0 0 1 3 3 v25 h-30 v-25 a3 3 0 0 1 3 -3 Z" />
    </g>
  ),
  // Royal Navy: flat-topped cap, narrower shoulders
  (
    <g key="navy">
      <rect x="8" y="4" width="18" height="4" rx="1.5" />
      <rect x="7" y="8" width="20" height="2.5" rx="1.2" />
      <circle cx="17" cy="15" r="7" />
      <path d="M7 27 h20 a4 4 0 0 1 4 4 v23 h-28 v-23 a4 4 0 0 1 4 -4 Z" />
    </g>
  ),
  // RAF: soft side cap with small forward peak
  (
    <g key="raf">
      <path d="M8 9 Q10 3 18 3 Q26 3 26 9 Z" />
      <path d="M4 9 h6 v2.5 h-6 Z" />
      <circle cx="17" cy="15" r="7" />
      <path d="M6 27 h22 a5 5 0 0 1 5 5 v22 h-32 v-22 a5 5 0 0 1 5 -5 Z" />
    </g>
  ),
];

const Figure = ({ index }: { index: number }) => {
  const highlighted = index % 10 === 4;
  const accent =
    ["hsl(var(--ribbon-blue))", "hsl(var(--ribbon-yellow))", "hsl(var(--ribbon-green))"][
      Math.floor(index / 10) % 3
    ];
  const fill = highlighted ? accent : "hsl(var(--muted-foreground))";
  const opacity = highlighted ? 0.95 : 0.22;

  return (
    <svg
      width="34"
      height="56"
      viewBox="0 0 34 56"
      className="shrink-0"
      role="presentation"
      focusable="false"
    >
      <g fill={fill} opacity={opacity}>{variants[index % 3]}</g>
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
      <div className="flex w-max animate-personnel-scroll items-end gap-4 motion-reduce:animate-none">
        {[0, 1].map((track) => (
          <div key={track} className="flex items-end gap-4">
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