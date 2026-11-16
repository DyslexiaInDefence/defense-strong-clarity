import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SupportOrganisationLogo from "@/components/SupportOrganisationLogo";
import type { SupportOrganisation } from "@/data/supportOrganisations";

const MD_BREAKPOINT = 768;

interface PartnerLogoCarouselProps {
  /** Organisations shown, one block each: logo, name, short paragraph and a link to their site. */
  organisations: readonly SupportOrganisation[];
  /** Accessible name for the carousel, e.g. "Mental health and wellbeing organisations". */
  label: string;
}

/**
 * Two organisations per view from 768px, one below. No autoplay. Arrows and dots appear only
 * when there are more organisations than fit in view. Blocks out of view are inert so keyboard
 * focus never lands on hidden links. Sliding is instant under reduced motion.
 */
const PartnerLogoCarousel = ({ organisations, label }: PartnerLogoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setIsClient(true);
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= MD_BREAKPOINT ? 2 : 1);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const total = organisations.length;
  const maxIndex = Math.max(0, total - visibleCount);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  const isVisible = (index: number) => index >= currentIndex && index < currentIndex + visibleCount;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    if (!touch) return;
    touchStartX.current = touch.screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touch = e.changedTouches[0];
    if (!touch) {
      touchStartX.current = null;
      return;
    }
    const diff = touch.screenX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const showControls = maxIndex > 0;
  const first = currentIndex + 1;
  const last = Math.min(total, currentIndex + visibleCount);
  const arrowClass =
    "flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="mx-auto max-w-3xl">
      {showControls && (
        <p className="sr-only" aria-live="polite">
          Showing {first === last ? `${first}` : `${first} to ${last}`} of {total}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 md:gap-4">
        {showControls && (
          <button type="button" onClick={goPrev} disabled={currentIndex === 0} aria-label="Show previous organisation" className={arrowClass}>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <div className="w-full min-w-0 overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <ul
            className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: isClient ? `translateX(-${currentIndex * (100 / visibleCount)}%)` : undefined }}
          >
            {organisations.map((organisation, index) => (
              <li
                key={organisation.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}: ${organisation.name}`}
                inert={showControls && !isVisible(index)}
                className="flex shrink-0 flex-col items-center px-3 md:px-6"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="flex h-24 w-full items-center justify-center md:h-28">
                  <a
                    href={organisation.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 max-w-full items-center justify-center rounded-md transition-transform duration-300 hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
                  >
                    <SupportOrganisationLogo organisation={organisation} />
                  </a>
                </div>
                <h3 className="mt-3 text-center text-lg font-bold leading-relaxed text-foreground">{organisation.name}</h3>
                <p className="mx-auto mt-2 max-w-sm text-center text-base leading-relaxed text-foreground">{organisation.tagline}</p>
                <a
                  href={organisation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Visit website<span className="sr-only">: {organisation.name}, opens in new tab</span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {showControls && (
          <button type="button" onClick={goNext} disabled={currentIndex === maxIndex} aria-label="Show next organisation" className={arrowClass}>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {showControls && (
        <div className="mt-4 flex flex-wrap justify-center" role="group" aria-label={`Choose an organisation: ${label}`}>
          {organisations.map((organisation, index) => (
            <button
              key={organisation.name}
              type="button"
              aria-label={`Show ${organisation.name}`}
              aria-current={isVisible(index) ? "true" : undefined}
              onClick={() => goTo(index)}
              className="group flex size-11 items-center justify-center rounded-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                aria-hidden="true"
                className={`size-2.5 rounded-full transition-colors motion-reduce:transition-none ${
                  isVisible(index) ? "bg-foreground" : "border border-foreground/50 bg-transparent group-hover:bg-foreground/20"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PartnerLogoCarousel;
