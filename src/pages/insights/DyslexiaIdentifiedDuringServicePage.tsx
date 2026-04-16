import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "tick-the-box")!;

const DyslexiaIdentifiedDuringServicePage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        What happens if dyslexia is identified during service?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-4">
        If dyslexia is identified while you’re serving, nothing automatically changes about your career. You don’t have to declare it unless it affects your training or work, and you can’t be discharged for being dyslexic.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-8">
        What does change is access — once it’s known, you can ask for assessment, adjustments and peer support through your chain of command, the Defence Dyslexia Network or your local Army Education Centre.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What the policy says — and the process</h2>
        <p className="text-foreground leading-relaxed mb-4">
          JSP 822 (Vol 7) is the military’s policy on Specific Learning Differences. The key points if dyslexia is identified mid-career:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li>You are <strong>not required</strong> to inform your line manager, trainer or commander if it doesn’t affect your training or work.</li>
          <li>If it does affect your duties, it’s your responsibility to tell your chain of command.</li>
          <li>You can request a dyslexia assessment through your local Army Education Centre (or service equivalent).</li>
          <li>Reasonable adjustments — extra time, assistive technology, workplace needs assessments — can be put in place.</li>
          <li>Identification is not grounds for discharge or career limitation.</li>
        </ul>
      </section>

      <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What this means in practice</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Most personnel who are identified mid-career describe the same pattern. There’s a moment of hesitation about whether to say anything. Many don’t — they crack on, tick the box and rely on coping mechanisms.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          Those who do speak up tend to find the help is real, but it’s patchy. Support on courses can be strong; support back at unit can depend heavily on the line manager. Peer support — other dyslexic personnel who’ve been through it — is often the most useful first step.
        </p>
        <p className="text-foreground leading-relaxed">
          For the wider question of disclosure see{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia when joining the military
          </Link>
          , and for what help is on offer see{" "}
          <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            what support is available for dyslexia in the military
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
        <p className="text-foreground leading-relaxed">
          Identification doesn’t end careers — it usually opens doors. Senior leaders, long-serving personnel and instructors across all three services have been identified mid-career and gone on to thrive. You stay in control of when, how and to whom you share it.
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

export default DyslexiaIdentifiedDuringServicePage;
