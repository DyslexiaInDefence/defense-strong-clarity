import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 md:py-32"
      aria-label="Hero section"
    >
      {/* Decorative ribbon */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 animate-ribbon-flow"
        style={{
          background: "linear-gradient(90deg, hsl(var(--ribbon-yellow)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-red)), hsl(var(--ribbon-green)), hsl(var(--ribbon-yellow)))",
          backgroundSize: "300% 100%",
        }}
        aria-hidden="true"
      />

      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, hsl(var(--ribbon-blue) / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(var(--ribbon-green) / 0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Dyslexia in Defence
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Championing neurodiversity across the defence community. Building a network where dyslexic thinking is recognised, supported, and celebrated as a strategic strength.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#join">
            <Button size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#about">
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
              Learn More
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Decorative ribbon wave */}
        <div className="mt-16 flex justify-center" aria-hidden="true">
          <svg width="320" height="40" viewBox="0 0 320 40" fill="none" className="w-full max-w-md opacity-60">
            <path d="M0 20 Q40 0 80 20 T160 20 T240 20 T320 20" stroke="hsl(var(--ribbon-yellow))" strokeWidth="3" fill="none" />
            <path d="M0 24 Q40 4 80 24 T160 24 T240 24 T320 24" stroke="hsl(var(--ribbon-blue))" strokeWidth="3" fill="none" />
            <path d="M0 28 Q40 8 80 28 T160 28 T240 28 T320 28" stroke="hsl(var(--ribbon-red))" strokeWidth="3" fill="none" />
            <path d="M0 32 Q40 12 80 32 T160 32 T240 32 T320 32" stroke="hsl(var(--ribbon-green))" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
