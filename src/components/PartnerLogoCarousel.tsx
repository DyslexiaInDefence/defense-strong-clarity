import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fandfLogo from "@/assets/fandf-logo.png.asset.json";

type PartnerLogo = {
  name: string;
  alt: string;
  src: string;
  href?: string;
};

const FTG_LOGO_PATH = "/images/partners/FTG-colour-Logo.png";

const LOGOS: PartnerLogo[] = [
  {
    name: "Forces Transition Group",
    alt: "Forces Transition Group logo, opens in new tab",
    src: FTG_LOGO_PATH,
    href: "https://ftgjobfairs.com",
  },
  {
    name: "FANDF",
    alt: "FANDF, Forces Additional Needs and Disability Forum logo",
    src: fandfLogo.url,
  },
];

const MD_BREAKPOINT = 768;

const PartnerLogoCarousel = () => {
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

  const maxIndex = Math.max(0, LOGOS.length - visibleCount);

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

  const isLogoVisible = (logoIndex: number) =>
    logoIndex >= currentIndex && logoIndex < currentIndex + visibleCount;

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
    const endX = touch.screenX;
    const diff = endX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const showControls = maxIndex > 0;

  return (
    <section
      className="border-t border-border bg-white py-16"
      aria-label="Partners and organisations we work with"
    >
      <div className="container mx-auto px-4">
        <h2
          className="mb-8 text-center text-2xl font-bold"
          style={{ color: "#09245B" }}
        >
          Partners &amp; Organisations We Work With
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {showControls && (
              <button
                type="button"
                onClick={goPrev}
                disabled={currentIndex === 0}
                aria-label="Show previous partner logo"
                className="shrink-0 rounded-full border border-border bg-white p-1.5 text-primary shadow-sm transition-colors hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 md:p-2"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
            )}

            <div
              className="w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: isClient
                    ? `translateX(-${currentIndex * (100 / visibleCount)}%)`
                    : undefined,
                }}
              >
                {LOGOS.map((logo) => {
                  const img = (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-auto max-w-[240px] object-contain md:h-[60px]"
                    />
                  );

                  return (
                    <div
                      key={logo.name}
                      className="flex shrink-0 items-center justify-center px-4 md:px-8"
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      {logo.href ? (
                        <a
                          href={logo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-md transition-transform duration-300 hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {img}
                        </a>
                      ) : (
                        img
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {showControls && (
              <button
                type="button"
                onClick={goNext}
                disabled={currentIndex === maxIndex}
                aria-label="Show next partner logo"
                className="shrink-0 rounded-full border border-border bg-white p-1.5 text-primary shadow-sm transition-colors hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 md:p-2"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>

          {showControls && (
            <div
              className="mt-6 flex justify-center gap-2"
              role="tablist"
              aria-label="Partner logo navigation"
            >
              {LOGOS.map((logo, index) => (
                <button
                  key={logo.name}
                  type="button"
                  role="tab"
                  aria-selected={isLogoVisible(index)}
                  aria-label={`Show ${logo.name}`}
                  onClick={() => goTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                    isLogoVisible(index)
                      ? "bg-[#09245B]"
                      : "border border-[#09245B]/40 bg-transparent hover:bg-[#09245B]/20"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogoCarousel;
