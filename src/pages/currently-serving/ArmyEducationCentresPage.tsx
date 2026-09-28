import { useEffect, useMemo, useRef, useState } from "react";
import { Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { educationCentres } from "@/data/armyEducationCentres";

const REPORT_HREF = `mailto:contact@dyslexiaindefence.com?subject=${encodeURIComponent(
  "Army Education Centre information is out of date",
)}&body=${encodeURIComponent("Which centre is out of date?\n\n\nWhat has changed?\n\n")}`;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const CentresMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false }).setView([54.5, -3], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);
      educationCentres.forEach((c) => {
        L.circleMarker([c.lat, c.lng], { radius: 9, color: "#09245B", fillColor: "#2563eb", fillOpacity: 0.9, weight: 2 })
          .addTo(map!)
          .bindTooltip(escapeHtml(c.name))
          .bindPopup(
            `<strong>${escapeHtml(c.name)}</strong><br/>${escapeHtml(c.location)}<br/><a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>`,
          );
      });
    })();
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);
  return (
    <div
      ref={ref}
      role="region"
      aria-label="Map of Army Education Centres. The same centres are listed below the map."
      className="relative z-0 h-[420px] w-full overflow-hidden rounded-xl border border-border"
    />
  );
};

const ArmyEducationCentresPage = () => {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return t ? educationCentres.filter((c) => `${c.name} ${c.location}`.toLowerCase().includes(t)) : educationCentres;
  }, [q]);

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <span className="mb-4 inline-block rounded-full border-2 border-primary px-3 py-1 text-sm font-bold text-primary">Army only</span>
        <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Find your local Army Education Centre</h1>

        <section aria-labelledby="what-heading" className="mb-12 max-w-3xl">
          <h2 id="what-heading" className="mb-3 text-2xl font-bold text-foreground">What an Army Education Centre does</h2>
          <p className="text-lg text-muted-foreground">
            Your local Army Education Centre (AEC) is an education and resettlement support hub for serving personnel. AEC staff do not carry out dyslexia assessments themselves, that is done by separately listed assessors. AEC staff can advise on Standard Learning Credits (SLC) and Enhanced Learning Credits (ELC), including funding towards a dyslexia assessment, and provide support and guidance to personnel with neurodiversity, whether or not they have had a formal assessment.
          </p>
        </section>

        <section aria-labelledby="map-heading" className="mb-10">
          <h2 id="map-heading" className="mb-4 text-2xl font-bold text-foreground">Centres map</h2>
          {/* Update this date whenever AEC details are reconfirmed */}
          <p className="mb-4 text-xs text-muted-foreground">Army Education Centre details last confirmed: 28 September 2026.</p>
          <CentresMap />
        </section>

        <section aria-labelledby="list-heading" className="mb-10">
          <h2 id="list-heading" className="mb-4 text-2xl font-bold text-foreground">All centres</h2>
          <label htmlFor="aec-search" className="mb-2 block text-sm font-semibold text-foreground">Search by name or location</label>
          <div className="relative mb-5 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input id="aec-search" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" placeholder="For example, Catterick" />
          </div>
          <p className="sr-only" aria-live="polite">{filtered.length} centres shown</p>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">No centres match your search.</p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2">
              {filtered.map((c) => (
                <li key={c.name}>
                  <Card className="h-full">
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{c.location}</p>
                      <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 break-all text-sm text-primary hover:underline">
                        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {c.email}
                      </a>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </section>

        <a href={REPORT_HREF}>
          <Button variant="outline" size="lg" className="rounded-full border-2 border-primary px-8 font-bold text-primary hover:bg-primary hover:text-primary-foreground">
            Report out of date information
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ArmyEducationCentresPage;
