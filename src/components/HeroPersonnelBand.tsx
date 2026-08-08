/**
 * Decorative, continuously scrolling band of faceless service-personnel silhouettes.
 * Roughly 1 in every 10 figures is picked out in a brighter accent, representing the
 * estimated 1 in 10 dyslexia prevalence rate. Motion stops under the site's
 * Reduce Motion toggle and under the OS prefers-reduced-motion setting.
 */
const FIGURE_COUNT = 30; // 3 highlighted per pass (every 10th)

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
      <g fill={fill} opacity={opacity}>
        <circle cx="17" cy="12" r="9" />
        <rect x="6" y="25" width="22" height="29" rx="8" />
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