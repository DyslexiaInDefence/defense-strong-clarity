import { ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import "../support/start-here.css";

const SHOW_WIP_BANNER = true;

// Skeleton only: headings with no content yet. Moves to /insights/serving-with-dyslexia-in-the-army-uk at switch-over.
export const ARMY_GUIDE_HEADINGS = [
  "Joining the Army",
  "Basic training and trade training",
  "Declaring dyslexia and getting an assessment",
  "Standard Learning Credits and Army Education Centres",
  "Support once you are serving",
  "Working with your chain of command",
  "Stories from serving soldiers",
  "Where to go next",
] as const;

export default function ArmyGuidePreviewPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-4xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Army guide breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/insights">Insights</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Serving with dyslexia in the Army</span></li>
          </ol>
        </nav>

        <header className="mb-10 pt-8">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Serving with dyslexia in the Army</h1>
        </header>

        {ARMY_GUIDE_HEADINGS.map((heading, index) => (
          <section key={heading} aria-labelledby={`army-guide-${index}`} className="mb-10">
            <h2 id={`army-guide-${index}`} className="mb-3 text-2xl font-bold">{heading}</h2>
            <p className="text-base leading-relaxed">Content to follow.</p>
          </section>
        ))}
      </div>
    </div>
  );
}
