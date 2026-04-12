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
        Yes. Dyslexia does not prevent you from joining the Royal Navy. Many serving sailors, Royal Marines, and officers have dyslexia and build successful careers across the Naval Service. The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition, so inclusive support is in place and actively improving.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Join?</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The Royal Navy welcomes dyslexic applicants. Dyslexic personnel serve at every rank and across all branches — warfare, engineering, logistics, medical, and the Royal Marines. Your suitability is assessed on your ability to perform the role, not on a dyslexia diagnosis.
          </p>
          <p>
            The recruitment standards are the same for everyone. Where dyslexia is declared, reasonable adjustments are made to ensure the process is fair and inclusive.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How Dyslexia Is Assessed in Recruitment</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The recruitment process includes a psychometric test (the Recruiting Test), which is standard for all applicants. If you have dyslexia, declare it when you apply and provide a formal diagnostic assessment. This allows the recruitment team to arrange adjustments such as additional time.
          </p>
          <p>
            Having your diagnosis ready before applying ensures you receive the support you are entitled to from the start.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">MOD Commitment to Dyslexia Support</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition. This means the Royal Navy is committed to creating inclusive environments, improving awareness and understanding of dyslexia, providing reasonable adjustments, and enabling individuals to perform at their best.
          </p>
          <p>
            In service, you can access assistive technology, workplace needs assessments, additional time for written exams and training assessments, and specialist learning support. Naval education centres and divisional officers are there to help you access the right support.
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

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Real-World Evidence</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Dyslexic personnel are already succeeding across Defence. For a first-hand perspective on navigating dyslexia within the MOD, listen to this{" "}
            <a
              href="https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline hover:text-primary/80"
            >
              podcast episode featuring lived experience inside Defence
            </a>
            . It is honest, real-world proof that dyslexia and a successful military career go hand in hand.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
        <p className="text-foreground leading-relaxed">
          Dyslexia is not a barrier to joining the Royal Navy. The MOD's BDA Dyslexia Friendly Workplace Pledge means inclusive support is real, structured, and accessible. Declare your diagnosis, take advantage of the adjustments available, and focus on what you bring to the fleet. Dyslexic personnel are already a valued part of the Naval Service.
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
