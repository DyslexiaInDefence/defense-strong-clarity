import { Download, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import covenantBanner from "@/assets/armed-forces-covenant-banner.png.asset.json";
import pledgeImage from "@/assets/dyslexia-in-defence-signed-armed-forces-covenant.png.asset.json";
import pledgePdf from "@/assets/dyslexia-in-defence-signed-armed-forces-covenant.pdf.asset.json";

const commitments = [
  {
    title: "Promoting the Armed Forces Community",
    body: "We will promote the Armed Forces Community through our website, newsletters and communications.",
  },
  {
    title: "Employment",
    body: "We will provide accessible information, signposting and community support for dyslexic veterans, Service leavers, reservists, military spouses and families.",
  },
  {
    title: "Communications and outreach",
    body: "We will share lived experience and plain English resources so dyslexic people across Defence feel less isolated.",
  },
  {
    title: "Health",
    body: "We are not a healthcare provider, but we will signpost to appropriate Armed Forces, veteran, wellbeing and statutory services.",
  },
  {
    title: "Education",
    body: "We will promote accessible learning and development, with practical information for managers, instructors, families and employers.",
  },
  {
    title: "Civic responsibilities",
    body: "We will support Armed Forces Day, Reserves Day and Remembrance.",
  },
];

const ArmedForcesCovenantPage = () => (
  <div className="py-12 md:py-16">
    <div className="container mx-auto max-w-5xl px-4">
      <section className="mb-14" aria-labelledby="covenant-title">
        <p className="mb-3 text-sm font-semibold uppercase text-primary">Our Armed Forces Covenant pledge</p>
        <h1 id="covenant-title" className="max-w-4xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
          We have signed the Armed Forces Covenant.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The Armed Forces Covenant is a national promise, not an organisation or charity.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="signed-pledge-heading">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)]">
          <figure>
            <div className="overflow-hidden border border-border bg-card">
              <img
                src={pledgeImage.url}
                alt="Signed Armed Forces Covenant pledge certificate for Dyslexia in Defence CIC"
                className="h-auto w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Signed 18 September 2026 by Symon Smith, Founder, Dyslexia in Defence CIC, and Neil Jackson, Director, Defence Relationship Management, Ministry of Defence.
            </figcaption>
          </figure>
          <div className="border-l-4 border-primary pl-6">
            <h2 id="signed-pledge-heading" className="mb-3 text-2xl font-bold text-foreground">Our signed pledge</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Read the complete pledge or download the original signed document.
            </p>
            <Button asChild size="lg">
              <a href={pledgePdf.url} download="Dyslexia-in-Defence-CIC-Armed-Forces-Covenant.pdf">
                <Download aria-hidden="true" />
                Download the pledge (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16" aria-label="Proudly supporting those who serve">
        <img
          src={covenantBanner.url}
          alt="Armed Forces Covenant — proudly supporting those who serve"
          className="h-auto w-full object-contain"
        />
      </section>

      <section className="mb-16" aria-labelledby="commitments-heading">
        <div className="mb-7 max-w-3xl">
          <h2 id="commitments-heading" className="mb-3 text-3xl font-bold text-foreground">What this means for us</h2>
          <p className="leading-relaxed text-muted-foreground">Our pledge turns into practical commitments across our work.</p>
        </div>
        <ol className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {commitments.map((commitment, index) => (
            <li key={commitment.title} className="bg-card p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="font-bold text-foreground">{commitment.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{commitment.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16 border-y border-border py-9" aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="mb-3 text-2xl font-bold text-foreground">Tell us how we're doing</h2>
        <p className="mb-5 max-w-3xl leading-relaxed text-muted-foreground">
          Tell us where our pledge is working and where we can do better.
        </p>
        <Button asChild variant="outline">
          <a href="mailto:contact@dyslexiaindefence.com">
            <Mail aria-hidden="true" />
            Email contact@dyslexiaindefence.com
          </a>
        </Button>
      </section>

      <section aria-labelledby="further-information-heading">
        <h2 id="further-information-heading" className="mb-5 text-2xl font-bold text-foreground">Further information</h2>
        <div className="flex flex-col items-start gap-4">
          <a href="https://www.armedforcescovenant.gov.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
            Find out more about the Armed Forces Covenant <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="https://www.gov.uk/government/publications/search-for-businesses-who-have-signed-the-armed-forces-covenant" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
            See the register of signatories <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 max-w-4xl border-l-4 border-border pl-5 text-sm leading-relaxed text-muted-foreground">
          Signing the Armed Forces Covenant is a voluntary pledge of support. It does not imply Ministry of Defence endorsement of our activities, and the Covenant is not a partnership, contract or funding arrangement.
        </p>
      </section>
    </div>
  </div>
);

export default ArmedForcesCovenantPage;