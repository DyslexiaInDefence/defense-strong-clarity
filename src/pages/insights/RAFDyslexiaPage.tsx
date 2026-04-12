import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const RAFDyslexiaPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Can You Join the RAF With Dyslexia in the UK?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Yes. Dyslexia does not prevent you from joining the Royal Air Force. Many serving RAF personnel have dyslexia and thrive across engineering, logistics, intelligence, and aircrew roles. The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition, meaning inclusive support is embedded and actively improving.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Join?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The RAF welcomes dyslexic applicants. Your suitability is based on your ability to meet the demands of your chosen role, not on a dyslexia diagnosis. Dyslexic personnel serve successfully across every branch of the RAF.
          </p>
          <p>
            The recruitment process is the same for all candidates. Where dyslexia is declared, reasonable adjustments are made to ensure the process is fair and supportive.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            RAF recruitment includes aptitude testing at the Airman/Airwoman Selection Test (AST). These are standard assessments for all applicants. If you have dyslexia, inform the recruitment team early and provide a formal diagnostic report so adjustments can be arranged.
          </p>
          <p>
            Adjustments may include extra time on written elements. Having your diagnosis ready before applying ensures you get the support you are entitled to from the start.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">MOD Commitment to Dyslexia Support</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition. This means the RAF is committed to creating inclusive environments, improving awareness of dyslexia, providing reasonable adjustments, and enabling individuals to thrive.
          </p>
          <p>
            Once serving, you can access assistive technology, workplace assessments, additional time for training courses and examinations, and specialist learning support. Education teams are available at most stations to help arrange what you need.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Common Misconceptions</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong>Misconception:</strong> Dyslexia prevents you from becoming a pilot.<br />
            <strong>Reality:</strong> Dyslexia does not automatically exclude you from aircrew roles. Each case is assessed individually based on functional ability.
          </p>
          <p>
            <strong>Misconception:</strong> You will struggle with technical training.<br />
            <strong>Reality:</strong> Many dyslexic personnel excel in technical and engineering roles where practical problem solving and spatial reasoning are valued.
          </p>
          <p>
            <strong>Misconception:</strong> The RAF does not understand dyslexia.<br />
            <strong>Reality:</strong> The RAF actively supports neurodiversity. The MOD's BDA Bronze recognition demonstrates a formal, ongoing commitment to inclusive practice.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Real-World Evidence</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Dyslexic personnel are already building successful careers across Defence. For a first-hand account of navigating dyslexia within the MOD, listen to this{" "}
            <a
              href="https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline hover:text-primary/80"
            >
              podcast episode featuring lived experience inside Defence
            </a>
            . It is real-world proof that dyslexia and a successful military career go hand in hand.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia is not a barrier to joining the RAF. The MOD's commitment through the BDA Dyslexia Friendly Workplace Pledge means inclusive support is real and accessible. Declare your diagnosis, access adjustments, and focus on your strengths. The RAF values cognitive diversity — and dyslexic thinkers are already part of the force.
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
        <Link to="/insights/can-you-join-army-with-dyslexia-uk">
          <Button variant="outline" className="gap-2">
            Can you join the Army with dyslexia? <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default RAFDyslexiaPage;
