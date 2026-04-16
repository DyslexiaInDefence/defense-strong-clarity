import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const DeclareDyslexiaMilitaryPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Do I need to declare dyslexia when joining the military?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-4">
        No. You do not need to declare dyslexia when joining the UK military, and you are not screened for it during recruitment. Dyslexia is not a barrier to joining or serving.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-8">
        You will, however, need to meet the same selection, training and performance standards as everyone else. If your dyslexia could affect how you carry out your duties, it is your responsibility to tell your chain of command.
      </p>

      <div className="mb-10 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
        <p className="text-base text-foreground">
          Want a real-world view from people who’ve been through it? Speak to serving and former personnel in our{" "}
          <Link to="/community" className="font-semibold text-primary underline hover:text-primary/80">
            community
          </Link>
          .
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What the policy actually says</h2>
        <p className="text-foreground leading-relaxed mb-4">
          The military’s policy on Specific Learning Differences (JSP 822, Vol 7) is clear and supportive. In plain English:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li>You are <strong>not required to declare dyslexia</strong> during recruitment.</li>
          <li>You are <strong>not screened for dyslexia</strong> as part of the recruitment process.</li>
          <li>Dyslexia is <strong>not a barrier</strong> to joining or serving.</li>
          <li>You must meet the same <strong>selection, training and performance standards</strong> as anyone else.</li>
          <li>If your dyslexia <strong>could affect your training or work</strong>, it is your responsibility to inform your line manager, trainer, or commander.</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-4">
          The exact wording from the policy: <em>“There is no requirement for SP with SpLD to inform their line manager, trainer, or commander, if their condition does not affect their training or work.”</em> (JSP 822, Vol 7, Para 2.4.2)
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What this means in reality</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Around <strong>1 in 10 personnel are dyslexic</strong> — that’s roughly 18,000 people currently serving across the UK Armed Forces. Dyslexia is already part of every service, every trade, and every rank.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          Senior leaders openly discuss their dyslexia. Soldiers with 30+ years of service describe how dyslexia shaped their careers. Serving personnel have completed PhDs while in uniform. Others have become teachers, instructors, and specialists — all dyslexic.
        </p>
        <p className="text-foreground leading-relaxed">
          Dyslexia in Defence is normal. It does not hold people back from a long, successful military career.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">My experience of dyslexia in the Army</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            My dyslexia journey started with my brother. His diagnosis prompted mine. After a long fight by my parents with his primary school, he got the support he deserved and went on to achieve a BA (Hons). Because of that hard-won path, I received support throughout primary school, secondary school and university — through GCSEs, A Levels and a BSc.
          </p>
          <p>
            When I left education and started my Army career, that support disappeared. It became timed assessments with no extra time, handwritten essays, and short-notice written documents in customs styles. Support may have existed on military courses, but not wanting to be ‘that guy’, it was easier to crack on and tick the box.
          </p>
          <p>
            Training as you fight matters. Writing briefs at short notice will always be required — and rightly so. But without proper support during courses, dyslexic personnel are set up to struggle when the same is asked of them back at unit. I had coping mechanisms from years of earlier support. Many people don’t — especially those who go undiagnosed.
          </p>
          <p>
            What I want this network to do is spread the message that dyslexics bring loads of soft skills — most of which are vital for Defence. An arbitrary assessment of someone’s written word doesn’t reflect their overall worth.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support already exists in the military</h2>
        <p className="text-foreground leading-relaxed mb-4">
          You won’t be on your own. There is an established support network inside Defence:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li><strong>The Defence Dyslexia Network</strong> — over 2,000 serving personnel of every rank, ready to support you on your journey.</li>
          <li><strong>240+ dyslexia ambassadors</strong> across the Army, Royal Navy and RAF — covering every rank, offering career, course and academic support.</li>
          <li><strong>Active internal forum</strong> — daily posts sharing tips, tricks, ideas and peer support.</li>
        </ul>
        <p className="text-foreground leading-relaxed mt-4">
          For more on how dyslexia is treated across the services, see{" "}
          <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            is dyslexia a barrier in the military
          </Link>{" "}
          and{" "}
          <Link to="/insights/neurodiversity-in-the-mod-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            neurodiversity in the MOD
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
        <p className="text-foreground leading-relaxed">
          You don’t need to declare dyslexia to join. You won’t be screened out for it. And if you do choose to share it — at any point — there’s a structured network of people inside Defence ready to help.
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

export default DeclareDyslexiaMilitaryPage;
