import { Link } from "@/lib/router-compat";
import InsightLayout from "@/components/InsightLayout";
import PodcastInsight from "@/components/PodcastInsight";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";

const ArmyDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the Army with dyslexia in the UK?"
    intent="joining"
    progressReassurance="You’re in the right place if you’re thinking about joining the Army with dyslexia."
    preCtaLine="You don’t need to decide everything now — start with the step that feels easiest."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Yes. Dyslexia is not a barrier to joining the British Army. You aren't screened for it at recruitment, and dyslexic personnel serve at every rank.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      What matters is being prepared to work hard to reach the standard expected of a trained soldier, including on the subjects you may have found difficult at school. Army instructors are there to help you get there. Many of the Army's most successful leaders are neurodiverse, and the Army recognises that this is part of what makes them excellent soldiers.
    </p>

    <LivedExperienceBlock
      variant="inline"
      className="mb-10"
      snippet={{
        id: "sue-thain-army-recruitment",
        quote: "Dyslexia is not a bar to joining the Army.",
        attribution: "Sue Thain, Head of Skills Leadership, British Army",
        tag: "Joining",
      }}
    />

    <DecisionConfidenceBlock
      heading="Can I actually join the Army with dyslexia?"
      intent="joining"
      bullets={[
        "Yes — dyslexia is not a disqualifier and you are not screened for it at recruitment.",
        "It depends on meeting the same aptitude, fitness and medical standards as every other applicant — not on your diagnosis.",
        "You don't have to declare dyslexia to join, and the Army's position is that there are no assessment accommodations for assessments related to your job. See the section below.",
      ]}
      links={[
        { label: "Ask the Community", to: "/community" },
        { label: "Do I need to declare dyslexia?", to: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What recruitment actually looks like</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Aptitude tests are standard for every applicant.</li>
        <li>You'll need to meet the same selection, training and performance standards as everyone else.</li>
        <li>You don't have to declare dyslexia to join. See{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia
          </Link>
          {" "}for the policy.
        </li>
        <li>A diagnosis can still help you understand your strengths and plan your coping strategies early.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">The honest bit: what the Army doesn't offer yet</h2>
      <p className="text-foreground leading-relaxed mb-4">
        The Army's position is that there are no assessment accommodations for assessments related to your job. The reasoning is safety: it is about making sure you and the people you work with can do the job. In practice, that means you shouldn't expect extra time or adjusted formats on role-related assessments in the way you might have had at school or university.
      </p>
      <p className="text-foreground leading-relaxed mb-4">
        This is different to the Navy and RAF. Both assess for neurodiversity during phase 1 training, and the Navy has a dedicated neurodiversity role. The Army doesn't currently take the same approach, even though a large share of dyslexic personnel serve in it.
      </p>
      <p className="text-foreground leading-relaxed">
        We think that's a gap, and we're working to influence it, including better support on courses, earlier identification, and more consistent understanding among line managers and chain of command. Change takes time, so if you're joining now, go in with your eyes open: build your coping strategies early, and use the network.
      </p>
    </section>

    <PodcastInsight
      title="Hear from a serving soldier with dyslexia"
      className="mb-10"
    />

    <IfThisSoundsLikeYou
      concerns={[
        "You’re worried the aptitude tests will catch you out because of your reading speed.",
        "You don’t know whether to mention dyslexia at the recruiting office or stay quiet.",
        "You’re afraid that admitting you’re dyslexic will quietly count against you in selection.",
      ]}
      reassurance="None of those things stop people joining — they’re the most common worries from applicants who go on to pass."
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexic people often suit the Army</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Around 1 in 10 personnel are dyslexic — and the Army has historically attracted people who didn’t enjoy a desk-bound education.
      </p>
      <p className="text-foreground leading-relaxed">
        The MOD has signed the British Dyslexia Association’s Dyslexia Friendly Workplace Pledge, and dyslexic personnel serve at every rank across all three services.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support once you’re in</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Once serving, you can get peer support through the Defence Dyslexia Network, advice from its ambassadors, and help finding an assessment through your Army Education Centre. Experience varies between units and roles, and the Defence Dyslexia Network is the quickest way to find what's available in yours.
      </p>
      <p className="text-foreground leading-relaxed">
        For the full picture see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        {" "}and{" "}
        <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          is dyslexia a barrier in the military
        </Link>
        .
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        Dyslexia doesn’t hold people back from a long, successful Army career. Senior officers, long-serving soldiers and instructors across the Army are dyslexic. You’re in good company.
      </p>
    </section>
  </InsightLayout>
);

export default ArmyDyslexiaPage;
