import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const NavyDyslexiaPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Can You Join the Royal Navy With Dyslexia in the UK?
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Yes, you can join the Royal Navy with dyslexia. It is not a disqualifying condition. The Navy assesses each applicant on their individual ability, and adjustments can be made during recruitment and throughout your career.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Join?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The Royal Navy does not reject candidates because of dyslexia. Many serving sailors and Royal Marines are dyslexic. The focus is on whether you can perform the core duties of your chosen branch, with reasonable adjustments where needed.
          </p>
          <p>
            Roles across warfare, engineering, logistics, and medical branches are open to dyslexic applicants. Some roles with intensive written requirements may require additional assessment, but very few are closed entirely.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The Royal Navy recruitment process includes a psychometric test (the Recruiting Test). If you have dyslexia, you should declare it when you apply. Providing a formal diagnostic assessment allows the recruitment team to arrange adjustments such as additional time.
          </p>
          <p>
            Without a formal diagnosis, adjustments cannot be guaranteed. If you believe you may be dyslexic, consider getting assessed before starting your application.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support and Adjustments Available</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            In service, the Royal Navy provides access to assistive technology, workplace needs assessments, and learning support. Additional time for written exams and training assessments is routinely available for personnel with a confirmed diagnosis.
          </p>
          <p>
            The Equality Act 2010 requires the MOD to provide reasonable adjustments. Naval education centres and divisional officers can help you access the right support.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Common Misconceptions</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <strong>Misconception:</strong> The Royal Navy will not take dyslexic recruits.<br />
            <strong>Reality:</strong> Dyslexic personnel serve at every rank and across all branches of the Naval Service.
          </p>
          <p>
            <strong>Misconception:</strong> You cannot become an officer with dyslexia.<br />
            <strong>Reality:</strong> Many officers are dyslexic. The Admiralty Interview Board assesses leadership potential, not reading speed.
          </p>
          <p>
            <strong>Misconception:</strong> Submariners cannot be dyslexic.<br />
            <strong>Reality:</strong> There is no blanket exclusion. Each role is assessed on its own requirements.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia is not a barrier to joining the Royal Navy. Declare early, provide your diagnostic evidence, and take advantage of the adjustments available. The Navy needs diverse thinkers, and dyslexic personnel are already a valued part of the fleet.
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
        <Link to="/insights/can-you-join-raf-with-dyslexia-uk">
          <Button variant="outline" className="gap-2">
            Can you join the RAF with dyslexia? <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default NavyDyslexiaPage;
