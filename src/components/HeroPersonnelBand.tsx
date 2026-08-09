import p1 from "@/assets/personnel-1.png.asset.json";
import p2 from "@/assets/personnel-2.png.asset.json";
import p3 from "@/assets/personnel-3.png.asset.json";
import p4 from "@/assets/personnel-4.png.asset.json";
import p5 from "@/assets/personnel-5.png.asset.json";
import p6 from "@/assets/personnel-6.png.asset.json";

/**
 * Decorative, continuously scrolling band of six military role icons.
 * Order is randomised (deterministic seed) so the row never reads as a
 * mechanical repeat. Roughly 1 in every 10 icons shows in full original
 * colour; the rest are greyscale, representing the estimated 1 in 10
 * dyslexia prevalence rate. Motion stops under reduced-motion settings.
 */
const IMAGES = [p1.url, p2.url, p3.url, p4.url, p5.url, p6.url];

const COUNT = 40;

// Deterministic pseudo-random sequence: stable between renders, non-repeating feel.
const buildSequence = () => {
  let seed = 20260809;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const items: Array<{ src: string; colour: boolean }> = [];
  let last = -1;
  for (let i = 0; i < COUNT; i += 1) {
    let pick = Math.floor(rand() * IMAGES.length);
    if (pick === last) pick = (pick + 1) % IMAGES.length;
    last = pick;
    items.push({ src: IMAGES[pick], colour: i % 10 === Math.floor(rand() * 10) % 10 });
  }
  // guarantee roughly 1 in 10 in colour, evenly spread with jitter
  items.forEach((item, i) => {
    item.colour = false;
  });
  for (let block = 0; block * 10 < COUNT; block += 1) {
    const idx = block * 10 + Math.floor(rand() * 10);
    if (items[idx]) items[idx].colour = true;
  }
  return items;
};

const sequence = buildSequence();

const HeroPersonnelBand = () => (
  <div
    className="pointer-events-none select-none overflow-hidden py-2"
    aria-hidden="true"
    data-testid="personnel-band"
  >
    <div className="flex w-max animate-personnel-scroll items-center gap-4 motion-reduce:animate-none">
      {[0, 1].map((track) => (
        <div key={track} className="flex items-center gap-4">
          {sequence.map((item, i) => (
            <img
              key={`${track}-${i}`}
              src={item.src}
              alt=""
              width={60}
              height={60}
              loading="lazy"
              decoding="async"
              className={
                item.colour
                  ? "h-[60px] w-[60px] shrink-0"
                  : "h-[60px] w-[60px] shrink-0 grayscale opacity-60"
              }
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default HeroPersonnelBand;
