import { ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import type { Crumb } from "@/data/pageBreadcrumbs";

/**
 * The page trail drawn by Get support and Get involved pages, in the same style as the Insights page.
 * Pass the page's entry from PAGE_BREADCRUMBS so the visible trail and its BreadcrumbList data match.
 */
export default function PageTrail({ crumbs, label }: { crumbs: readonly Crumb[]; label: string }) {
  return (
    <nav aria-label={label} className="mb-5">
      <ol className="flex flex-wrap items-center gap-2 text-base">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={`${i}-${crumb.name}`} className={isLast && i > 0 ? "flex min-h-11 items-center gap-2" : i > 0 ? "flex items-center gap-2" : undefined}>
              {i > 0 && <ChevronRight aria-hidden="true" className="size-4 shrink-0" />}
              {isLast || !crumb.path ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Button asChild variant="link" className="min-h-11 h-auto px-0 text-base">
                  <Link to={crumb.path}>{crumb.name}</Link>
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
