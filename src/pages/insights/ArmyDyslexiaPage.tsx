import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ArmyDyslexiaPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Can You Join the Army With Dyslexia in the UK?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Yes, you can join the British Army with dyslexia. Dyslexia is not an automatic bar to entry. Each candidate is assessed individually, and reasonable adjustments may be available during the recruitment process.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Join?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The British Army does not exclude candidates on the basis of dyslexia alone. Thousands of serving personnel are dyslexic. What matters is whether you can meet the requirements of your chosen role, with or without adjustments.
          </p>
          <p>
            Some roles involve more reading and writing than others. If dyslexia significantly affects your ability to perform specific tasks safely, this may be considered. But for the majority of Army roles, dyslexia is not a barrier.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            During the application process, you will complete aptitude tests at an Assessment Centre. If you have a formal diagnosis of dyslexia, you should declare it early. This allows the Army to consider reasonable adjustments such as extra time on written tests.
          </p>
          <p>
            A formal diagnostic report from an educational psychologist is usually required. Without this, adjustments may not be offered. If you suspect you are dyslexic but have no diagnosis, it is worth seeking one before applying.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support and Adjustments Available</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Once in service, dyslexic personnel can access a range of support. This includes assistive technology such as text to speech software, coloured overlays, and additional time for written assessments and courses.
          </p>
          <p>
            The MOD has a duty under the Equality Act 2010 to make reasonable adjustments for serving personnel with dyslexia. Unit welfare teams and education centres can help arrange these.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Common Misconceptions</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong>Misconception:</strong> Dyslexia means you cannot pass Army tests.<br />
            <strong>Reality:</strong> Many dyslexic candidates pass with adjustments. The tests measure aptitude, not reading speed.
          </p>
          <p>
            <strong>Misconception:</strong> You will be limited to certain roles.<br />
            <strong>Reality:</strong> Dyslexic personnel serve across all branches and ranks, including officer roles and technical trades.
          </p>
          <p>
            <strong>Misconception:</strong> Declaring dyslexia will count against you.<br />
            <strong>Reality:</strong> Declaring allows you to access support. Not declaring may mean missing out on adjustments you are entitled to.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia does not prevent you from joining the British Army. Declare your diagnosis early, request adjustments, and focus on what you bring to the role. The Armed Forces benefit from cognitive diversity, and dyslexic thinking is part of that strength.
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

export default ArmyDyslexiaPage;
