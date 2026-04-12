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
        Yes. Dyslexia is not a barrier to joining the British Army. Many serving soldiers and officers have dyslexia and build successful, fulfilling careers across every branch and rank. The Ministry of Defence has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition, which means support is structured, accessible, and actively improving.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Join?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The British Army welcomes dyslexic applicants. Thousands of serving personnel have dyslexia and contribute across infantry, engineering, intelligence, logistics, medical, and officer roles. Your suitability is assessed on your ability to meet the demands of your chosen role — dyslexia does not count against you.
          </p>
          <p>
            The recruitment process is standard for all candidates. If you have dyslexia, reasonable adjustments are available to ensure the process is fair and inclusive.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            During recruitment, you will complete aptitude tests at an Assessment Centre. These tests are standard for every applicant. If you have a formal diagnosis of dyslexia, declare it early so the team can arrange reasonable adjustments such as additional time on written elements.
          </p>
          <p>
            A formal diagnostic report from an educational psychologist is recommended. Having this ready before you apply ensures you receive the support you are entitled to from the start.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">MOD Commitment to Dyslexia Support</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition. In practice, this means the Army is committed to creating inclusive environments, improving awareness and understanding of dyslexia, providing reasonable adjustments, and enabling individuals to perform at their best.
          </p>
          <p>
            Once in service, dyslexic personnel can access assistive technology, workplace needs assessments, additional time for written assessments and courses, and specialist learning support. Unit education centres and welfare teams are there to help you access the right support quickly.
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
            <strong>Reality:</strong> Declaring gives you access to support. It does not count against you in the selection process.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Real-World Evidence</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Dyslexic personnel are already succeeding across the Armed Forces. For a first-hand perspective on what it is like to navigate dyslexia within the MOD, listen to this{" "}
            <a
              href="https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline hover:text-primary/80"
            >
              podcast episode featuring lived experience inside Defence
            </a>
            . It is direct, honest proof that dyslexia and a successful military career go hand in hand.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia is not a barrier to joining the British Army. The MOD is actively committed to inclusive, supportive environments through the BDA Dyslexia Friendly Workplace Pledge. Declare your diagnosis, access the adjustments available, and focus on what you bring to the role. The Army values diverse thinkers — and dyslexic personnel are already proving that every day.
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
