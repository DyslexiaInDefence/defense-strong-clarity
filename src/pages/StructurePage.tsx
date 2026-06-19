import { Link } from "react-router-dom";
import { ArrowRight, User, Shield, FileSearch, HandCoins, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
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
    title: "Transparency",
    description: "Financial and ethical accountability commitments.",
    to: "/governance/transparency",
    icon: FileSearch,
  },
  {
    title: "Sponsorship",
    description: "Principles that protect independence and editorial integrity.",
    to: "/governance/sponsorship",
    icon: HandCoins,
  },
];

const StructurePage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <header className="mb-10 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Structure</h1>
          <p className="text-lg text-muted-foreground">
            How Dyslexia in Defence is organised, governed and held to account. Most visitors won't need this page — it's here for the people who do.
          </p>
        </header>

        <section aria-labelledby="cic-info" className="mb-10">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 id="cic-info" className="text-xl font-bold text-foreground">Community Interest Company</h2>
            </div>
            <p className="text-muted-foreground">
              Dyslexia in Defence CIC is a registered Community Interest Company in England and Wales. Private Limited by Guarantee. Company number: 17285330.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              We are independent and volunteer led. Not affiliated with or endorsed by the Ministry of Defence or any employer.
            </p>
          </div>
        </section>

        <section aria-labelledby="structure-links">
          <h2 id="structure-links" className="sr-only">Structure pages</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                aria-label={item.title}
              >
                <Card className="h-full transition-colors hover:border-primary">
                  <CardContent className="p-6">
                    <item.icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      Read about {item.title}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StructurePage;