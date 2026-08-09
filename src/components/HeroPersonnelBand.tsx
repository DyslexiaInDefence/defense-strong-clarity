/**
 * Decorative, continuously scrolling band of faceless service-personnel silhouettes.
 * Roughly 1 in every 10 figures is picked out in a brighter accent, representing the
 * estimated 1 in 10 dyslexia prevalence rate. Motion stops under the site's
 * Reduce Motion toggle and under the OS prefers-reduced-motion setting.
 */
const FIGURE_COUNT = 30; // 3 highlighted per pass (every 10th)

// 40 x 66 viewBox. Head + service headwear + sloped-shoulder torso, single fill.
const variants = [
  // Army: beret, squarer shoulders
  (
    <g key="army">
      <path d="M9 15 Q11 5 21 5 Q31 5 30 13 Q22 17 9 15 Z" />
      <circle cx="20" cy="22" r="8" />
      <path d="M20 31 q10 1 13 8 q3 6 3 27 h-32 q0 -21 3 -27 q3 -7 13 -8 Z" />
    </g>
  ),
  // Royal Navy: flat-topped cap with band
  (
    <g key="navy">
      <rect x="11" y="7" width="18" height="6" rx="2.5" />
      <rect x="9" y="13" width="22" height="3.5" rx="1.6" />
      <circle cx="20" cy="23" r="7.5" />
      <path d="M20 31 q10 1 12.5 8 q2.5 6 2.5 27 h-30 q0 -21 2.5 -27 q2.5 -7 12.5 -8 Z" />
    </g>
  ),
  // RAF: soft side cap with a small forward peak
  (
    <g key="raf">
      <path d="M10 15 Q12 6 21 6 Q30 6 30 15 Z" />
      <path d="M5 15 h8 v3.5 h-8 Z" />
      <circle cx="20" cy="23" r="7.5" />
      <path d="M20 31 q11 1 13 9 q2 6 2 26 h-30 q0 -20 2 -26 q2 -8 13 -9 Z" />
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
      width="40"
      height="66"
      viewBox="0 0 40 66"
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