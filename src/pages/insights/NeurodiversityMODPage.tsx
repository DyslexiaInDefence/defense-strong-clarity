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
        The Ministry of Defence recognises neurodiversity as a workforce strength. Dyslexia, ADHD, autism, and other neurodiverse conditions are present across the Armed Forces and Civil Service, and the MOD has policies and networks in place to support neurodiverse personnel.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What Is Neurodiversity in a Defence Context?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Neurodiversity refers to natural variation in how people think, learn, and process information. In Defence, this includes personnel with dyslexia, dyspraxia, ADHD, autism, and dyscalculia. These are not deficits. They are differences in cognitive processing that come with distinct strengths.
          </p>
          <p>
            In a sector that relies on strategic thinking, pattern recognition, and rapid problem solving, neurodiverse minds are not just welcome. They are operationally valuable.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Neurodiversity Is Assessed and Supported</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The MOD supports neurodiverse personnel through workplace needs assessments, assistive technology provision, and reasonable adjustments under the Equality Act 2010. These apply to military personnel and civil servants alike.
          </p>
          <p>
            Personnel can request a workplace assessment through their line management or occupational health team. This typically results in recommendations for software, equipment, or working arrangements that enable full performance.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support and Adjustments Available</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Available support includes text to speech and speech to text software, screen readers, coloured overlays, noise cancelling headphones, flexible working patterns, and additional time for exams and assessments.
          </p>
          <p>
            The MOD also has internal neurodiversity staff networks that provide peer support, share best practice, and advocate for policy improvements. These networks span military and civilian personnel.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Common Misconceptions</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong>Misconception:</strong> The MOD does not take neurodiversity seriously.<br />
            <strong>Reality:</strong> The MOD has dedicated diversity and inclusion teams and neurodiversity is explicitly included in its workforce strategies.
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Neurodiversity is part of the UK Defence workforce. The MOD provides formal support, reasonable adjustments, and growing recognition that cognitive diversity is a strategic asset. If you are neurodiverse and working in or considering Defence, support exists and is accessible.
        </p>
      </section>

      <div className="flex flex-wrap gap-4">
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
