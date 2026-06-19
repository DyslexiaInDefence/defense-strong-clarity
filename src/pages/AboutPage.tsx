import { Link } from "react-router-dom";
import { ArrowRight, Compass, Target, User, Shield, HandCoins, FileSearch, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const aboutLinks = [
  {
    title: "Why It Matters",
    description: "The case for dyslexia awareness across the UK Defence community.",
    to: "/why-it-matters",
    icon: Compass,
  },
  {
    title: "What We Want to Achieve",
    description: "Our vision for improving understanding, support, opportunity, and outcomes for people with dyslexia and neurodiversity across the Defence community.",
    to: "/achieve",
    icon: Target,
  },
  {
    title: "Founder",
    description: "Who started Dyslexia in Defence and why.",
    to: "/governance/founder",
    icon: User,
  },
  {
    title: "Governance",
    description: "How the network is run and held to account.",
    to: "/governance",
    icon: Shield,
  },
  {
    title: "Sponsorship",
    description: "Principles that protect independence and editorial integrity.",
    to: "/governance/sponsorship",
    icon: HandCoins,
  },
  {
    title: "Transparency",
    description: "Financial and ethical accountability commitments.",
    to: "/governance/transparency",
    icon: FileSearch,
  },
  {
    title: "Safeguarding",
    description: "How we keep the community safe and respectful.",
    to: "/governance/safeguarding",
    icon: HeartHandshake,
  },
];

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">About Dyslexia in Defence</h1>
          <p className="text-lg text-muted-foreground">
            Dyslexia in Defence is a registered Community Interest Company, created to support people with dyslexia and neurodiversity across the UK Defence community by improving understanding, sharing lived experience, and connecting people to the right support.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            We are an independent, volunteer led initiative. Not affiliated with or endorsed by the Ministry of Defence or any employer.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Dyslexia in Defence CIC is registered in England and Wales. Company number: 17285330.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label={item.title}
            >
              <Card className="h-full transition-colors hover:border-primary">
                <CardContent className="p-6">
                  <item.icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                  <h2 className="mb-2 text-lg font-bold text-foreground">{item.title}</h2>
                  <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    {`Read about ${item.title}`}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
