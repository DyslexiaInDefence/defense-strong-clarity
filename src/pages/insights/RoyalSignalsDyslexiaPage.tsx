import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "strengths-match")!;

const RoyalSignalsDyslexiaPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Why the Royal Signals is a strong fit for dyslexic individuals
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-4">
        The Royal Signals is a strong fit for dyslexic individuals because it relies on the exact strengths dyslexic minds tend to bring — complex problem-solving, analytical thinking, communication and the ability to adapt under pressure.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-8">
        It’s the British Army’s communications, IT and cyber Corps. The work is technical, fast-moving and ambiguous — and that’s where dyslexic thinking earns its place.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexia fits the Royal Signals</h2>
        <p className="text-foreground leading-relaxed mb-4">
          The Royal Signals delivers IT, cyber and information systems wherever the British Armed Forces need them. The role profile maps cleanly onto well-evidenced dyslexic strengths:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li><strong>Complex problem-solving</strong> — networks fail in unfamiliar ways; dyslexic thinkers often spot non-obvious solutions.</li>
          <li><strong>Analytical thinking and innovation</strong> — pattern recognition across noisy, incomplete information.</li>
          <li><strong>Communication and leadership</strong> — translating technical reality into clear direction for command teams.</li>
          <li><strong>Adaptability</strong> — adjusting fast when the environment, the kit or the threat changes.</li>
          <li><strong>Creativity and initiative</strong> — building work-arounds when the standard answer doesn’t exist.</li>
        </ul>
      </section>

      <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">The reality — challenges and the role of support</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Fit doesn’t mean frictionless. Like any military Corps, the Royal Signals still requires written briefs, custom-style documents and timed assessments. These are the areas dyslexic personnel typically find hardest — reading comprehension, spelling, and producing long written work at speed.
        </p>
        <p className="text-foreground leading-relaxed">
          The right answer isn’t to lower the standard. It’s to make sure the support is genuinely there during courses and back at unit, so dyslexic personnel can demonstrate the strengths they’re actually being employed for. For more on what support looks like in practice see{" "}
          <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            what support is available for dyslexia in the military
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Future relevance</h2>
        <p className="text-foreground leading-relaxed mb-4">
          The complexity facing the Royal Signals is only growing. Cyber, electromagnetic activity, contested communications and information warfare don’t reward following a process — they reward thinking differently and quickly.
        </p>
        <p className="text-foreground leading-relaxed">
          That’s why dyslexic minds are likely to be over-represented among the people solving the Corps’ hardest future problems. The variables are increasing; the value of unconventional thinking is increasing with them.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
        <p className="text-foreground leading-relaxed">
          If you’re dyslexic and considering the Royal Signals — or any technical Corps — the strengths you bring are the strengths the role needs. For the wider question of joining see{" "}
          <Link to="/insights/can-you-join-army-with-dyslexia-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            can you join the Army with dyslexia
          </Link>
          {" "}and{" "}
          <Link to="/why-it-matters" className="font-medium text-primary underline-offset-4 hover:underline">
            why dyslexia matters in Defence
          </Link>
          .
        </p>
      </section>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">Still unsure what to do next?</h2>
        <p className="text-foreground leading-relaxed mb-5">
          The quickest way to get clarity is to speak to people who’ve been through it.
        </p>
        <ul className="space-y-3 text-foreground leading-relaxed">
          <li>
            →{" "}
            <Link to="/community" className="font-semibold text-primary underline-offset-4 hover:underline">
              Ask the Community
            </Link>{" "}
            – get real answers from serving and former personnel
          </li>
          <li>
            →{" "}
            <Link to="/join" className="font-semibold text-primary underline-offset-4 hover:underline">
              Join the Network
            </Link>{" "}
            – connect with others and access support
          </li>
          <li>
            →{" "}
            <Link to="/insights" className="font-semibold text-primary underline-offset-4 hover:underline">
              Explore Insights
            </Link>{" "}
            – understand what to expect next
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <Link to="/community">
          <Button className="gap-2">
            Ask the Community <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/insights">
          <Button variant="outline" className="gap-2">
            Explore Insights
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default RoyalSignalsDyslexiaPage;
