import { useRouterState } from "@tanstack/react-router";
import { useLocation } from "@/lib/router-compat";
import { EVIDENCE_DATA_AS_AT, formatPageDate, getPageDate } from "@/data/pageDates";

export default function LastUpdated() {
  const { pathname } = useLocation();
  const isNotFound = useRouterState({ select: state => state.statusCode === 404 });
  const isEvidence = pathname.replace(/\/$/, "") === "/evidence";
  const date = getPageDate(pathname);

  if (isNotFound || (!date && !isEvidence)) return null;

  return (
    <div className="container px-4 pt-10 pb-8">
      <p className="text-left text-base leading-relaxed text-muted-foreground">
        {isEvidence ? (
          <>Figures as at <time dateTime={EVIDENCE_DATA_AS_AT.iso}>{EVIDENCE_DATA_AS_AT.label}</time></>
        ) : date ? (
          <>Last updated: <time dateTime={date}>{formatPageDate(date)}</time></>
        ) : null}
      </p>
    </div>
  );
}