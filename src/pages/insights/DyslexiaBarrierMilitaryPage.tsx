import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const DyslexiaBarrierMilitaryPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Is Dyslexia a Barrier in the UK Military?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        No. Dyslexia is not a barrier to serving in the UK Armed Forces. All three services — the British Army, Royal Navy, and Royal Air Force — welcome dyslexic candidates. The Ministry of Defence has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition, meaning structured, inclusive support is available from recruitment through to senior career stages.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Serve With Dyslexia?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Dyslexic personnel serve across all ranks, branches, and trades — from infantry to intelligence, engineering to medical. Many successful serving personnel, including senior officers, have dyslexia. The MOD recognises that cognitive diversity strengthens operational capability.
          </p>
          <p>
            Dyslexic thinkers often bring strengths in problem solving, spatial awareness, and creative thinking that are directly relevant to military roles. These are valued, not overlooked.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Each service has its own recruitment tests, which are standard for all candidates. If you declare dyslexia and provide a formal diagnostic assessment, adjustments such as additional time on written tests can be arranged. The key is to declare early and provide evidence.
          </p>
          <p>
            Entry standards are the same for everyone. Adjustments ensure a level playing field — they do not lower the bar or change what is expected of you.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">MOD Commitment to Dyslexia Support</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition. In practice, this means a commitment to inclusive environments, improved awareness and understanding of dyslexia, reasonable adjustments where appropriate, and enabling individuals to perform at their best.
          </p>
          <p>
            Across all three services, dyslexic personnel can access assistive technology, workplace needs assessments, extra time on courses and exams, and specialist learning support. These are provided under the Equality Act 2010, and support is available from initial training through to senior career courses.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Common Misconceptions</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong>Misconception:</strong> Dyslexia limits your career progression.<br />
            <strong>Reality:</strong> Dyslexic personnel reach senior ranks across all services. Adjustments are available at every career stage.
          </p>
          <p>
            <strong>Misconception:</strong> The military does not understand neurodiversity.<br />
            <strong>Reality:</strong> The MOD has established neurodiversity networks, achieved BDA Bronze recognition, and continues to develop inclusive policies.
          </p>
          <p>
            <strong>Misconception:</strong> Declaring dyslexia will harm your application.<br />
            <strong>Reality:</strong> Declaring gives you access to the support you are entitled to. It does not count against you in the selection process.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Real-World Evidence</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Dyslexic personnel are already building successful careers across Defence. For a first-hand account, listen to this{" "}
            <a
              href="https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline hover:text-primary/80"
            >
              podcast episode featuring lived experience inside the MOD
            </a>
            . It is direct, honest proof that dyslexia and a successful military career go hand in hand.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia is not a barrier to a military career in the UK. The MOD's commitment through the BDA Dyslexia Friendly Workplace Pledge means inclusive support is structured and accessible. All three services welcome dyslexic candidates, provide adjustments, and benefit from the cognitive strengths that dyslexic thinkers bring. Declare, access support, and focus on what you do best.
        </p>
      </section>

      <div className="flex flex-wrap gap-4">
        <Link to="/insights">
          <Button variant="outline" className="gap-2">
            ← Browse all FAQ
          </Button>
        </Link>
        <Link to="/join">
          <Button className="gap-2">
            Join the Network <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/why-it-matters">
          <Button variant="outline" className="gap-2">
            Why dyslexia matters in Defence <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/insights/neurodiversity-in-the-mod-uk">
          <Button variant="outline" className="gap-2">
            Neurodiversity in the MOD <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default DyslexiaBarrierMilitaryPage;
