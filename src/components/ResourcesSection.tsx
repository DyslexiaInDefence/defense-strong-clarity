import { ClipboardList, FlaskConical, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: ClipboardList,
    title: "Guidance",
    description: "Practical guidance for individuals and managers on recognising and supporting dyslexia in the workplace.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description: "The latest evidence and research on dyslexia, neurodiversity, and performance within defence contexts.",
  },
  {
    icon: Building2,
    title: "Workplace Adjustments",
    description: "Simple, effective adjustments that make a real difference — assistive technology, workflow changes, and more.",
  },
  {
    icon: Users,
    title: "Leadership Support",
    description: "Resources for leaders to champion neurodiversity and build genuinely inclusive teams.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20" aria-label="Resources">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Resources
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          Everything you need to understand, support, and champion dyslexia in defence.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <resource.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{resource.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
              <Button variant="outline" className="w-full rounded-full" aria-label={`View ${resource.title} resource`}>
                View Resource
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
