import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { armyEducationCentres } from "@/data/armyEducationCentres";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Leaflet touches window on import, so it is loaded only after mount.
const AecMap = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    import("leaflet").then(({ default: L }) => {
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false }).setView([54.2, -2.5], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      const bounds: [number, number][] = [];
      armyEducationCentres.forEach((c) => {
        const marker = L.circleMarker([c.lat, c.lng], {
          radius: 9,
          color: "#09245B",
          weight: 2,
          fillColor: "#2563eb",
          fillOpacity: 0.9,
        }).addTo(map!);
        marker.bindTooltip(escapeHtml(c.name));
        marker.bindPopup(
          `<strong>${escapeHtml(c.name)}</strong><br/>${escapeHtml(c.location)}<br/><a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>`,
        );
        bounds.push([c.lat, c.lng]);
      });
      map.fitBounds(bounds, { padding: [30, 30] });
    });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Map of Army Education Centres in the UK. The same centres are listed below the map."
      className="relative z-0 h-[420px] w-full overflow-hidden rounded-xl border border-border md:h-[520px]"
    />
  );
};

export default AecMap;
