import { UserPlus, Handshake, Award, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: UserPlus,
    title: "Join",
    description: "Become a member of the network. Open to anyone in or affiliated with defence.",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate with us as an organisation to broaden the reach of neurodiversity support.",
  },
  {
    icon: Award,
    title: "Sponsor",
    description: "Fund events, resources, or initiatives that make a tangible difference.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer",
    description: "Give your time as a peer supporter, mentor, or event organiser.",
  },
];

const GetInvolvedSection = () => {
  return (
    <section id="join" className="py-20" aria-label="Get involved">
      <div className="container mx-auto px-4">
        {/* Banner */}
        <div
          className="relative mb-14 overflow-hidden rounded-2xl p-10 text-center md:p-16"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--ribbon-blue)) 50%, hsl(var(--ribbon-green)) 100%)",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Get Involved
          </h2>
          <p className="mx-auto max-w-lg text-lg text-primary-foreground/90">
            Whether you're dyslexic, a supporter, or simply curious — there's a place for you in this network.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <div
              key={action.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <action.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{action.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{action.description}</p>
              <Button className="w-full rounded-full font-semibold">{action.title} Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
