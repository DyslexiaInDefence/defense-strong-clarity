import { lazy, Suspense, useMemo, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { Mail, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { armyEducationCentres, AEC_LAST_CONFIRMED, OVERSEAS_AEC } from "@/data/armyEducationCentres";

const AecMap = lazy(() => import("@/components/AecMap"));

const reportHref =
  "mailto:contact@dyslexiaindefence.com?subject=" +
  encodeURIComponent("Army Education Centre information is out of date") +
  "&body=" +
  encodeURIComponent("Which centre is out of date?\n\n\nWhat has changed?\n\n");

const mapFallback = <div className="h-[420px] w-full rounded-xl border border-border bg-muted md:h-[520px]" />;

const ArmyEducationCentresPage = () => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return armyEducationCentres;
    return armyEducationCentres.filter((c) => `${c.name} ${c.location}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
          Army only
        </span>
        <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Army Education Centres</h1>
        <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
          Your local Army Education Centre (AEC) is an education and resettlement support hub for serving personnel. AEC
          staff do not carry out dyslexia assessments themselves, that is done by separately listed assessors. AEC staff
          can advise on Standard Learning Credits (SLC) and Enhanced Learning Credits (ELC), including funding towards a
          dyslexia assessment, and provide support and guidance to personnel with neurodiversity, whether or not they have
          had a formal assessment.
        </p>

        <section aria-labelledby="map-heading" className="mb-10">
          <h2 id="map-heading" className="mb-3 text-2xl font-bold text-foreground">Find a centre</h2>
          <p className="mb-4 text-sm text-muted-foreground">Hover over a marker to see its name. Select it for contact details.</p>
          <ClientOnly fallback={mapFallback}>
            <Suspense fallback={mapFallback}>
              <AecMap />
            </Suspense>
          </ClientOnly>
          <p className="mt-2 text-xs text-muted-foreground">
            Army Education Centre details last confirmed: {AEC_LAST_CONFIRMED}
          </p>
        </section>

        <section aria-labelledby="list-heading" className="mb-10">
          <h2 id="list-heading" className="mb-3 text-2xl font-bold text-foreground">All centres</h2>
          <label htmlFor="aec-search" className="mb-2 block text-sm font-semibold text-foreground">
            Search by name or location
          </label>
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              id="aec-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="For example, Catterick"
              className="pl-9"
            />
          </div>
          <p className="sr-only" aria-live="polite">{filtered.length} centres shown</p>
          {filtered.length === 0 ? (
            <p className="text-base text-muted-foreground">No centres match your search.</p>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {filtered.map((c) => (
                <li key={c.name} className="rounded-xl border border-border bg-card p-4">
                  <p className="font-bold text-foreground">{c.name}</p>
                  <p className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" aria-hidden="true" /> {c.location}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="inline-flex items-center gap-1 break-all text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {c.email}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        <p className="mb-8 text-sm text-muted-foreground">
          {OVERSEAS_AEC.name.replace("AEC Group 55", "AEC Group 55")} is not shown on the map as it is based overseas.
          Contact:{" "}
          <a href={`mailto:${OVERSEAS_AEC.email}`} className="break-all font-semibold text-primary underline-offset-4 hover:underline">
            {OVERSEAS_AEC.email}
          </a>
          .
        </p>

        <a href={reportHref}>
          <Button variant="outline" className="rounded-full border-2 border-primary font-bold text-primary hover:bg-primary hover:text-primary-foreground">
            Report out of date information
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ArmyEducationCentresPage;
