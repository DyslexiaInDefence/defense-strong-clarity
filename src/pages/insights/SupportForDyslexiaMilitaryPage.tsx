import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "coping-mechanisms")!;

const SupportForDyslexiaMilitaryPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        What support is available for dyslexia in the military?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-4">
        Dyslexia support in the UK military is structured and growing. You can access dyslexia assessments, workplace adjustments, peer networks, ambassadors and dedicated forums — across every service and rank.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-8">
        Most support sits inside the Defence Dyslexia Network and through your local Army Education Centre (AEC) or service equivalent. You don’t need a diagnosis to start asking for help.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">The main support mechanisms</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Support inside the military comes from several joined-up sources:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li><strong>Defence Dyslexia Network</strong> — over 2,000 serving members across every rank, plus 240+ ambassadors covering Army, Royal Navy and RAF.</li>
          <li><strong>Ambassadors</strong> — peer-trained personnel who advise on careers, military courses and academic study.</li>
          <li><strong>Army Education Centres (AEC)</strong> — practical access point for assessment, study skills and assistive technology, with or without a diagnosis.</li>
          <li><strong>Active internal forum</strong> — a dyslexia-focused space inside Defence with daily posts on tips, tools and peer support.</li>
          <li><strong>Workplace adjustments</strong> — extra time on courses, assistive software, workplace needs assessments where appropriate.</li>
          <li><strong>Monthly virtual events and in-person sessions</strong> — open to anyone serving in Defence.</li>
        </ul>
      </section>

      <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What this looks like in practice</h2>
        <p className="text-foreground leading-relaxed mb-4">
          The honest picture: support exists, but it’s inconsistent and you usually have to ask for it. The strongest, most reliable support comes from peers — other dyslexic personnel who’ve been through the same courses, exams and career stages.
        </p>
        <p className="text-foreground leading-relaxed">
          That’s why the Defence Dyslexia Network and the wider{" "}
          <Link to="/community" className="font-medium text-primary underline-offset-4 hover:underline">
            Dyslexia in Defence community
          </Link>{" "}
          exist. They fill the gap between policy and day-to-day reality.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
        <p className="text-foreground leading-relaxed">
          You’re not on your own, and you don’t need to have it all figured out before asking. For more on what to expect see{" "}
          <Link to="/insights/what-happens-if-dyslexia-is-identified-during-service-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            what happens if dyslexia is identified during service
          </Link>
          {" "}or{" "}
          <Link to="/insights/neurodiversity-in-the-mod-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            neurodiversity in the MOD
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

export default SupportForDyslexiaMilitaryPage;
