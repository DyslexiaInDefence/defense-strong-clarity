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
        Yes, dyslexia does not automatically disqualify you from joining the Royal Air Force. The RAF assesses each applicant individually, and reasonable adjustments can be made during selection and training.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Join?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The RAF welcomes applicants with dyslexia. Many serving RAF personnel are dyslexic, working across engineering, logistics, intelligence, and aircrew roles. Your suitability is based on your ability to meet the demands of the role, not on a dyslexia diagnosis alone.
          </p>
          <p>
            Some specialist roles may involve higher volumes of written material. In these cases, the RAF will consider whether adjustments can enable you to perform effectively. For most branches, dyslexia presents no barrier.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            RAF recruitment includes aptitude testing at the Airman/Airwoman Selection Test (AST). If you have dyslexia, you should inform the recruitment team early. A formal diagnostic report from a qualified assessor is usually needed to arrange adjustments.
          </p>
          <p>
            Adjustments may include extra time on written elements or modified test formats. Without a formal diagnosis, these may not be available, so obtaining one beforehand is strongly recommended.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support and Adjustments Available</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Once serving, the RAF provides access to assistive technology, workplace assessments, and additional time for training courses and examinations. Education and learning support teams are available at most stations.
          </p>
          <p>
            Under the Equality Act 2010, the RAF has a legal duty to provide reasonable adjustments. This applies throughout your career, from initial training to promotion courses.
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
            <strong>Reality:</strong> The RAF actively supports neurodiversity through its diversity and inclusion frameworks and workplace adjustment policies.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia is not a barrier to joining the RAF. Declare your diagnosis, access the support available, and focus on your strengths. The RAF values the cognitive diversity that dyslexic thinkers bring to the force.
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
