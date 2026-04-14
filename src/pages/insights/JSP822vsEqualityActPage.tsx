import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const JSP822vsEqualityActPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        JSP 822 vs Equality Act 2010: What Changes for Dyslexia When You Leave the Military
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          JSP 822 vs Equality Act 2010
        </h2>
        <p className="text-lg text-foreground leading-relaxed mb-4 font-semibold">
          What Actually Changes for Dyslexia When You Leave the Military
        </p>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            If you are serving in the Armed Forces and planning to move into civilian employment, there is one change that matters more than most people realise:
          </p>
          <p className="font-semibold">
            You move from a policy-based system to a legal rights-based system.
          </p>
          <p>
            In the military, support for dyslexia is real, structured, and improving. But it is governed by internal policy, primarily JSP 822 (Specific Learning Differences).
          </p>
          <p>
            In civilian life, dyslexia is protected under the Equality Act 2010, which places legal obligations on employers.
          </p>
          <p>
            This is not a small difference. It fundamentally changes what you are entitled to, how support is delivered, and who is responsible for making it happen.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How the military approaches dyslexia (JSP 822)
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>The official policy that governs this is:</p>
          <p>
            <strong>JSP 822 – Specific Learning Differences</strong>
            <br />
            <a
              href="https://assets.publishing.service.gov.uk/media/65ce3f754239310011b7b8a9/JSP_822_V7.0__Vol_7_V3.0_-_Specific_Learning_Differences.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 break-all"
            >
              View JSP 822 (PDF)
            </a>
          </p>
          <p>Under JSP 822:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dyslexia sits within Specific Learning Differences (SpLD) and wider neurodiversity</li>
            <li>It is recognised as a normal variation in how people think and learn</li>
            <li>Individuals may bring valuable strengths that should be utilised</li>
          </ul>
          <p>The policy is clear:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dyslexia is not a bar to recruitment or service, provided required standards are met</li>
          </ul>
          <p>However, support is structured and conditional.</p>
          <p className="font-semibold">Support in the Armed Forces:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Is provided where feasible</li>
            <li>
              Must not:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Lower training standards</li>
                <li>Affect others negatively</li>
                <li>Impact operational effectiveness</li>
              </ul>
            </li>
          </ul>
          <p>You may receive:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to SpLD Advisors</li>
            <li>Coaching and coping strategies</li>
            <li>Adjustments to training or working approaches</li>
            <li>Specialist assessment and Individual Learning Plans (ILPs)</li>
          </ul>
          <p>But the policy also makes clear:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Training objectives and competency standards cannot be changed</li>
            <li>Individuals remain responsible for managing their condition, with support available</li>
          </ul>
          <p>And critically:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Armed Forces are exempt from parts of the Equality Act 2010 relating to disability discrimination</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How civilian employers are required to operate (Equality Act 2010)
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>Once you leave the military, the legal framework changes.</p>
          <p>
            Dyslexia is recognised as a disability under the Equality Act 2010, where it has a substantial and long-term impact.
          </p>
          <p>Key legal provisions include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Section 6 – Definition of disability</li>
            <li>Section 20 – Duty to make reasonable adjustments</li>
            <li>Section 21 – Failure to comply is discrimination</li>
            <li>Section 39 – Protection in employment</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            (Source: Equality Act 2010, legislation.gov.uk)
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What "reasonable adjustments" actually means
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            In civilian employment, employers have a legal duty to reduce disadvantage.
          </p>
          <p>
            According to the Equality Act and Equality and Human Rights Commission (EHRC) guidance, reasonable adjustments may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Changes to working practices or processes</li>
            <li>Provision of assistive technology</li>
            <li>Adjustments to recruitment or assessment methods</li>
            <li>Alternative formats for information</li>
            <li>Additional time or flexibility</li>
          </ul>
          <p>Failure to make reasonable adjustments:</p>
          <p className="font-semibold">can constitute unlawful discrimination</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The key difference: Policy vs Law
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>In simple terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>JSP 822 = support within operational limits</li>
            <li>Equality Act 2010 = legal obligation to remove disadvantage (where reasonable)</li>
          </ul>
          <p>One is guided by operational need.</p>
          <p>The other is enforceable in law.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Side-by-side comparison
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Area</TableHead>
                <TableHead className="font-bold">Military (JSP 822)</TableHead>
                <TableHead className="font-bold">Civilian (Equality Act 2010)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Legal status</TableCell>
                <TableCell>Policy-based</TableCell>
                <TableCell>Legally enforceable rights</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Disability protection</TableCell>
                <TableCell>Armed Forces exempt from key provisions</TableCell>
                <TableCell>Full legal protection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dyslexia classification</TableCell>
                <TableCell>Learning difference (SpLD)</TableCell>
                <TableCell>Disability (if criteria met)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Recruitment</TableCell>
                <TableCell>Allowed if standards met</TableCell>
                <TableCell>Must not discriminate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Adjustments</TableCell>
                <TableCell>Provided where feasible</TableCell>
                <TableCell>Legally required if reasonable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Standards</TableCell>
                <TableCell>Cannot be lowered</TableCell>
                <TableCell>Must be maintained, with support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Responsibility</TableCell>
                <TableCell>Primarily on the individual</TableCell>
                <TableCell>Shared, with legal duty on employer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Support structure</TableCell>
                <TableCell>Internal (advisors, ILPs)</TableCell>
                <TableCell>Employer-led, legally required</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Enforcement</TableCell>
                <TableCell>Internal chain of command</TableCell>
                <TableCell>Employment law, tribunals</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The mindset shift
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>In the military:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You adapt to the system</li>
            <li>You manage your condition</li>
            <li>Support depends on structure and leadership</li>
          </ul>
          <p>In civilian life:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The system must also adapt to you</li>
            <li>You have the right to ask for adjustments</li>
            <li>Employers are expected to act</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What does not change
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>The expectation to perform remains.</p>
          <p>Dyslexia does not reduce capability.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Why this matters when transitioning
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>Many people leaving the military:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not realise they now have legal rights</li>
            <li>Do not ask for support</li>
            <li>Continue to work around barriers unnecessarily</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Final thought
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>The transition is not about becoming more capable.</p>
          <p>It is about moving into a system where:</p>
          <p className="font-semibold text-lg">
            you are legally entitled to the support needed to perform at your best
          </p>
        </div>
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
        <Link to="/community">
          <Button variant="outline" className="gap-2">
            Ask the Community <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default JSP822vsEqualityActPage;
