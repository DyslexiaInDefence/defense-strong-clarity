import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">About</h1>
          <p className="text-lg text-muted-foreground">
            Dyslexia in Defence is an independent, volunteer-led peer support network for dyslexic individuals across the defence and security ecosystem.
          </p>
        </div>

        {/* Founder */}
        <section aria-label="Founder">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Symon Smith</h2>
                  <p className="text-muted-foreground">Founder</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Professional background in defence and cybersecurity governance, risk management, and assurance. MSc in Cyber Defence and Information Assurance. Chartered IT Professional.
                </p>
                <p>
                  Dyslexia in Defence was established to provide independent peer support and structured signposting, grounded in the understanding that cognitive diversity is a strategic asset.
                </p>
                <p className="text-sm italic border-l-2 border-primary pl-4">
                  Founded in a personal capacity. Independent of the Ministry of Defence and any employer.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
