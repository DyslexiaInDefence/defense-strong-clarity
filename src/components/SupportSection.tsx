import { ShieldCheck, Lock, Heart } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Psychological Safety",
    points: [
      "A judgement-free space to share experiences",
      "Facilitated by trained peer supporters",
      "Confidential and respectful at all times",
    ],
  },
  {
    icon: Lock,
    title: "Confidential Support",
    points: [
      "One-to-one guidance available on request",
      "Signposting to formal assessment pathways",
      "Advice on reasonable adjustment requests",
    ],
  },
  {
    icon: Heart,
    title: "Peer Connection",
    points: [
      "Connect with others who share similar experiences",
      "Regular meetups and community events",
      "Mentoring opportunities across ranks and roles",
    ],
  },
];

const SupportSection = () => {
  return (
    <section id="support" className="py-20 bg-secondary/30" aria-label="Support and community">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Support & Community
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          You are not alone. Our network provides safe, confidential, and empowering support.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-xl bg-card p-8 shadow-sm border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <benefit.icon className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">{benefit.title}</h3>
              <ul className="space-y-2" role="list">
                {benefit.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-foreground/80">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
