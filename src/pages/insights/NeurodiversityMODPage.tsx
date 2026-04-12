import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const NeurodiversityMODPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Neurodiversity in the MOD: What You Need to Know
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        The Ministry of Defence recognises neurodiversity as a workforce strength. Dyslexia, ADHD, autism, and other neurodiverse conditions are present across the Armed Forces and Civil Service. The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition, demonstrating a formal commitment to inclusive, supportive environments where neurodiverse personnel can thrive.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What Is Neurodiversity in a Defence Context?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Neurodiversity refers to natural variation in how people think, learn, and process information. In Defence, this includes personnel with dyslexia, dyspraxia, ADHD, autism, and dyscalculia. These are not deficits. They are differences in cognitive processing that come with distinct strengths.
          </p>
          <p>
            In a sector that relies on strategic thinking, pattern recognition, and rapid problem solving, neurodiverse minds are not just welcome — they are operationally valuable.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">MOD Commitment to Neurodiversity</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition. In practice, this means a commitment to creating inclusive environments, improving awareness and understanding, providing reasonable adjustments where appropriate, and enabling individuals to perform at their best.
          </p>
          <p>
            This is not just policy. It means support for neurodiverse personnel is structured, recognised, and actively improving across both military and civil service roles.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support and Adjustments Available</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Available support includes text to speech and speech to text software, screen readers, coloured overlays, noise cancelling headphones, flexible working patterns, and additional time for exams and assessments. Personnel can request a workplace needs assessment through their line management or occupational health team.
          </p>
          <p>
            The MOD also has internal neurodiversity staff networks that provide peer support, share best practice, and advocate for continued improvement. These networks span military and civilian personnel.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Common Misconceptions</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong>Misconception:</strong> The MOD does not take neurodiversity seriously.<br />
            <strong>Reality:</strong> The MOD has achieved BDA Bronze recognition and has dedicated diversity and inclusion teams. Neurodiversity is explicitly included in its workforce strategies.
          </p>
          <p>
            <strong>Misconception:</strong> Neurodiverse personnel cannot reach senior positions.<br />
            <strong>Reality:</strong> Neurodiverse individuals serve at senior ranks and grades across the MOD. Adjustments are available at every level.
          </p>
          <p>
            <strong>Misconception:</strong> Only military personnel are supported.<br />
            <strong>Reality:</strong> MOD civil servants, contractors, and defence industry partners are also covered by workplace adjustment policies.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Real-World Evidence</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Neurodiverse personnel are already succeeding at every level across Defence. For a first-hand perspective, listen to this{" "}
            <a
              href="https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline hover:text-primary/80"
            >
              podcast episode featuring lived experience inside the MOD
            </a>
            . It provides honest, real-world proof that neurodiversity and a successful Defence career go hand in hand.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Neurodiversity is part of the UK Defence workforce, and the MOD is formally committed to supporting it. Through the BDA Dyslexia Friendly Workplace Pledge and Bronze recognition, the MOD provides structured support, reasonable adjustments, and growing recognition that cognitive diversity is a strategic asset. If you are neurodiverse and working in or considering Defence, support exists, it is accessible, and it is improving.
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
        <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk">
          <Button variant="outline" className="gap-2">
            Is dyslexia a barrier in the military? <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default NeurodiversityMODPage;
