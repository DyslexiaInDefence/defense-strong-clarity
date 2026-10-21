import { createFileRoute } from "@tanstack/react-router";
import covenantBanner from "@/assets/armed-forces-covenant-banner.png.asset.json";
import standPhoto from "@/assets/rbve-valour-stand.jpeg.asset.json";
import didLogo from "@/assets/did-logo-full.webp";
import { Button } from "@/components/ui/button";

const URL = "https://dyslexiaindefence.com/newsletters/october-2026";
const TITLE = "Dyslexia in Defence CIC quarterly update (#2)";
const DESC =
  "We have signed the Armed Forces Covenant, our socials are now live and we are connecting with more organisations.";
const OG_IMAGE = "https://dyslexiaindefence.com/images/did-logo-full.webp";

export const Route = createFileRoute("/newsletters/october-2026")({
  component: NewsletterOctober2026,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
});

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const link = "font-medium text-primary underline underline-offset-4 hover:text-primary/80";
const box = "space-y-4 rounded-lg border border-border px-4 py-5";

function NewsletterOctober2026() {
  return (
    <div className="min-h-screen bg-[#F0F7FD] px-4 py-8 text-base leading-relaxed text-foreground">
      <article className="mx-auto max-w-[600px] space-y-6 rounded-xl border border-border bg-card px-5 py-8 text-left sm:px-8">
        <a href="https://dyslexiaindefence.com/" className="mx-auto block w-[200px] max-w-[65%]">
          <img src={didLogo} alt="Dyslexia in Defence" className="h-auto w-full" />
        </a>
        <h1 className="text-center text-[26px] font-bold leading-snug">
          <a href="https://dyslexiaindefence.com/" className="text-[#156BC1] no-underline">
            {TITLE}
          </a>
        </h1>
        <p>Hi there,</p>
        <h2 className="text-xl font-bold">Latest news</h2>

        <section className={box}>
          <p>
            We've signed the Armed Forces Covenant! While it seems like an obvious step, this is a really positive step in supporting those in the Defence community!
          </p>
          <a href="/armed-forces-covenant" className="mx-auto block w-fit py-6">
            <img
              src={covenantBanner.url}
              alt="Armed Forces Covenant"
              className="h-auto w-[120px] min-w-[80px] max-w-[140px] object-contain"
            />
          </a>
          <p className="text-center text-[13px] text-muted-foreground">
            The Armed Forces Covenant is a national promise, not an organisation. Signing it is a voluntary pledge and does not imply Ministry of Defence endorsement.{" "}
            <a href="/armed-forces-covenant" className={link}>Read our pledge</a>
          </p>
        </section>

        <section className={box}>
          <p>
            An amazing day in Kent at the Royal British Veterans Enterprise (RBVE) Valour event. Lots of interest and loads of very useful connections. A lot of people receiving support as well!
          </p>
          <img
            src={standPhoto.url}
            alt="The Dyslexia in Defence stand at the RBVE Valour event in Kent"
            className="mx-auto h-auto w-[300px] max-w-full rounded-md"
          />
        </section>

        <section className={`${box} text-center`}>
          <p>Our socials are now live!</p>
          <p className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/company/dyslexia-in-defence-cic/" {...ext} className={link}>LinkedIn</a>
            <a href="https://www.instagram.com/dyslexia_in_defence" {...ext} className={link}>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61595201726937" {...ext} className={link}>Facebook</a>
          </p>
          <p>Follow for more news and information about us!</p>
        </section>

        <section className={`${box} text-center`}>
          <p>
            We are now connected with over 8 different organisations, and we are sharing the amazing work they do. In particular,{" "}
            <a href="https://neurodiverse-community.co.uk/" {...ext} className={link}>NeuroDiverse Community CIC</a>{" "}
            do amazing work supporting neurodivergent children, young people, adults and families, including Armed Forces and veteran families.
          </p>
        </section>

        <section className="space-y-3">
          <p className="text-center font-bold">Get involved</p>
          <p>
            If you would like to get involved in any other way then just contact{" "}
            <a href="mailto:admin@dyslexiaindefence.com" className={link}>admin@dyslexiaindefence.com</a> direct.
          </p>
        </section>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="https://dyslexiaindefence.com">Visit our website</a>
          </Button>
        </div>

        <footer className="space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
          <p>Dyslexia in Defence CIC</p>
          <p>A Community Interest Company for serving personnel, veterans, civil servants, families and industry. Company number 17285330.</p>
          <p>This is an independent community initiative and is not an official Ministry of Defence service.</p>
        </footer>
      </article>
    </div>
  );
}
