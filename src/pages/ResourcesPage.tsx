import { useState } from "react";
import { Briefcase, Users, Monitor, ArrowRightLeft, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const audiences = ["All", "Pre-joining", "Serving", "Veterans", "Industry", "Families"] as const;

type Audience = (typeof audiences)[number];

interface Resource {
  title: string;
  summary: string;
  category: string;
  audiences: Audience[];
  icon: React.ElementType;
}

const resources: Resource[] = [
  { title: "Workplace Adjustment Guidance", summary: "Practical guidance on reasonable adjustments for dyslexic individuals in defence and security roles.", category: "Workplace adjustments", audiences: ["Serving", "Industry"], icon: Briefcase },
  { title: "Leadership Inclusion Framework", summary: "Supporting leaders to recognise and leverage neurodivergent strengths within their teams.", category: "Leadership inclusion", audiences: ["Serving", "Industry"], icon: Users },
  { title: "Assistive Technology Overview", summary: "A curated overview of assistive tools and software available for dyslexic professionals.", category: "Assistive technology", audiences: ["All"], icon: Monitor },
  { title: "Transition Support Resources", summary: "Guidance for personnel transitioning between roles or to civilian employment.", category: "Transition support", audiences: ["Veterans", "Serving"], icon: ArrowRightLeft },
  { title: "Research Summary: Cognitive Diversity in Defence", summary: "Key findings from published research on neurodiversity and operational effectiveness.", category: "Research summaries", audiences: ["All"], icon: BookOpen },
  { title: "Family and Carers Resource Pack", summary: "Information and signposting for families supporting dyslexic individuals in the defence community.", category: "Workplace adjustments", audiences: ["Families"], icon: Users },
  { title: "Pre Joining Candidate Guide", summary: "Advice for prospective candidates navigating recruitment processes with dyslexia.", category: "Transition support", audiences: ["Pre-joining"], icon: ArrowRightLeft },
  { title: "Assistive Technology for Veterans", summary: "Tools and platforms available to support veterans in education and employment.", category: "Assistive technology", audiences: ["Veterans"], icon: Monitor },
];

const ResourcesPage = () => {
  const [filter, setFilter] = useState<Audience>("All");

  const filtered = filter === "All" ? resources : resources.filter((r) => r.audiences.includes(filter) || r.audiences.includes("All"));

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Resources</h1>
          <p className="text-lg text-muted-foreground">
            A structured library of guidance, research, and practical tools for dyslexic individuals across the defence and security ecosystem.
          </p>
        </div>

        {/* Audience filter */}
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by audience">
          {audiences.map((a) => (
            <Button
              key={a}
              variant={filter === a ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setFilter(a)}
              role="tab"
              aria-selected={filter === a}
            >
              {a}
            </Button>
          ))}
        </div>

        {/* Resource cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <Card key={r.title} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 mb-1">
                  <r.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{r.category}</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{r.summary}</p>
                <Button variant="outline" size="sm" className="w-fit" asChild>
                  <a href="#" aria-label={`View ${r.title}`}>
                    View Resource <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
