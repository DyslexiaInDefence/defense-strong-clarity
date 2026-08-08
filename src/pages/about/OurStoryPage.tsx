import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const serves = [
  { label: "Preparing to join", description: "People considering a Defence career and the families supporting them." },
  { label: "Serving personnel", description: "Regulars, reserves and Defence civil servants across all three services." },
  { label: "Leaving service and veterans", description: "People transitioning into civilian work and study." },
  { label: "Industry and partners", description: "Defence employers who want to understand and use dyslexic talent well." },
];

const OurStoryPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Story</h1>
        <p className="text-lg text-muted-foreground">
          How Dyslexia in Defence started, and who it is for today.
        </p>
      </div>

      <div className="max-w-3xl space-y-10">
        <section aria-labelledby="how-it-started">
          <h2 id="how-it-started" className="mb-4 text-2xl font-bold text-foreground">How it started</h2>
          <div className="space-y-4 leading-relaxed text-foreground">
            <p>
              Dyslexia in Defence began with one person's experience of service. Our founder, Symon Smith, is a British Army veteran who was diagnosed with dyslexia and spent years navigating education, training and a military career without a clear map of what support existed or how to ask for it.
            </p>
            <p>
              Much of what helped came from other people who had been through the same thing. That is the pattern this organisation is built on: practical information, shared openly, from people who understand the environment.
            </p>
            <p>
              <Link to="/lived-experiences/symon-smith-british-army-veteran" className="font-semibold text-primary underline-offset-4 hover:underline">
                Read Symon's full story →
              </Link>
            </p>
          </div>
        </section>

        <section aria-labelledby="ddn">
          <h2 id="ddn" className="mb-4 text-2xl font-bold text-foreground">The Defence Dyslexia Network</h2>
          <div className="space-y-4 leading-relaxed text-foreground">
            <p>
              Inside Defence, the Defence Dyslexia Network grew from a small group of people comparing notes into a recognised staff network with thousands of members and hundreds of volunteer ambassadors across the military and the civil service. It is referenced on the{" "}
              <a
                href="https://www.gov.uk/government/organisations/ministry-of-defence/about/equality-and-diversity"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Ministry of Defence diversity and inclusion pages
              </a>{" "}
              as part of Defence's recognised network provision.
            </p>
            <p>
              That work matters, and it continues. But an internal network can only reach people who are already inside the organisation, and only for as long as they are serving.
            </p>
          </div>
        </section>

        <section aria-labelledby="pivot">
          <h2 id="pivot" className="mb-4 text-2xl font-bold text-foreground">From one story to a wider mission</h2>
          <div className="space-y-4 leading-relaxed text-foreground">
            <p>
              Dyslexia in Defence exists to close that gap. It is an independent organisation, registered as Dyslexia in Defence CIC in England and Wales (company number 17285330), so that support is not tied to a single employer, a single service, or a single stage of a career.
            </p>
            <p>
              We publish plain English guidance, run a peer community, share lived experience, and signpost people to established professional services. We do not provide clinical, legal or crisis services, and we are not affiliated with or endorsed by the Ministry of Defence or any employer.
            </p>
            <p className="text-sm text-muted-foreground">
              How we are governed, funded and held to account is set out in our{" "}
              <Link to="/governance" className="font-semibold text-primary hover:underline">governance pages</Link>{" "}
              and our{" "}
              <Link to="/structure" className="font-semibold text-primary hover:underline">structure</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="who-we-serve">
          <h2 id="who-we-serve" className="mb-4 text-2xl font-bold text-foreground">Who we serve today</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {serves.map((s) => (
              <li key={s.label} className="rounded-lg border border-border bg-card p-5">
                <p className="mb-1 font-bold text-foreground">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link to="/join">
            <Button size="lg" className="rounded-full font-semibold">
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link to="/about/what-we-do">
            <Button variant="outline" size="lg" className="rounded-full border-2 border-primary font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
              What we do
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default OurStoryPage;