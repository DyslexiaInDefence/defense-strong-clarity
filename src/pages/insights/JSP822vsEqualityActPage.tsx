import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const snippet = livedExperienceSnippets.find((s) => s.id === "support-disappeared")!;

const JSP822vsEqualityActPage = () => (
  <InsightLayout
    title="JSP 822 vs Equality Act 2010: what changes for dyslexia when you leave the military"
    intent="veteran"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      When you leave the Armed Forces for civilian work, your dyslexia support shifts from <strong>policy-based</strong> (JSP 822) to <strong>legally enforceable rights</strong> under the Equality Act 2010.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      That single change is bigger than most people realise. It changes what you’re entitled to, how support is delivered, and who is responsible for making it happen.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">How the military approaches dyslexia (JSP 822)</h2>
      <p className="text-foreground leading-relaxed mb-3">
        <strong>JSP 822 — Specific Learning Differences</strong> ·{" "}
        <a
          href="https://assets.publishing.service.gov.uk/media/65ce3f754239310011b7b8a9/JSP_822_V7.0__Vol_7_V3.0_-_Specific_Learning_Differences.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          View JSP 822 (PDF)
        </a>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Dyslexia sits within Specific Learning Differences (SpLD) and wider neurodiversity.</li>
        <li>It’s recognised as a normal variation in how people think and learn.</li>
        <li>Dyslexia is not a bar to recruitment or service, provided required standards are met.</li>
        <li>Support is provided where feasible — but cannot lower training standards or affect operational effectiveness.</li>
        <li>Crucially: the Armed Forces are exempt from parts of the Equality Act 2010 relating to disability discrimination.</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-4">
        For the in-service picture see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        {" "}and{" "}
        <Link to="/insights/what-happens-if-dyslexia-is-identified-during-service-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what happens if dyslexia is identified during service
        </Link>
        .
      </p>
    </section>

    <MidContentNudge intent="veteran" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">How civilian employers must operate (Equality Act 2010)</h2>
      <p className="text-foreground leading-relaxed mb-3">
        Once you leave the military, dyslexia is recognised as a disability under the Equality Act 2010 where it has a substantial and long-term impact.
      </p>
      <p className="text-foreground leading-relaxed mb-3">Key legal provisions:</p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Section 6 — Definition of disability</li>
        <li>Section 20 — Duty to make reasonable adjustments</li>
        <li>Section 21 — Failure to comply is discrimination</li>
        <li>Section 39 — Protection in employment</li>
      </ul>
      <p className="text-sm text-muted-foreground mt-3">(Source: Equality Act 2010, legislation.gov.uk)</p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What "reasonable adjustments" actually means</h2>
      <p className="text-foreground leading-relaxed mb-3">
        Civilian employers have a legal duty to reduce disadvantage. EHRC guidance includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Changes to working practices or processes</li>
        <li>Provision of assistive technology</li>
        <li>Adjustments to recruitment or assessment methods</li>
        <li>Alternative formats for information</li>
        <li>Additional time or flexibility</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-3">
        Failure to make reasonable adjustments <strong>can constitute unlawful discrimination</strong>.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Side-by-side comparison</h2>
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
            <TableRow><TableCell className="font-medium">Legal status</TableCell><TableCell>Policy-based</TableCell><TableCell>Legally enforceable rights</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Disability protection</TableCell><TableCell>Armed Forces exempt from key provisions</TableCell><TableCell>Full legal protection</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Dyslexia classification</TableCell><TableCell>Learning difference (SpLD)</TableCell><TableCell>Disability (if criteria met)</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Recruitment</TableCell><TableCell>Allowed if standards met</TableCell><TableCell>Must not discriminate</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Adjustments</TableCell><TableCell>Provided where feasible</TableCell><TableCell>Legally required if reasonable</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Standards</TableCell><TableCell>Cannot be lowered</TableCell><TableCell>Must be maintained, with support</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Responsibility</TableCell><TableCell>Primarily on the individual</TableCell><TableCell>Shared, with legal duty on employer</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Support structure</TableCell><TableCell>Internal (advisors, ILPs)</TableCell><TableCell>Employer-led, legally required</TableCell></TableRow>
            <TableRow><TableCell className="font-medium">Enforcement</TableCell><TableCell>Internal chain of command</TableCell><TableCell>Employment law, tribunals</TableCell></TableRow>
          </TableBody>
        </Table>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">The mindset shift</h2>
      <p className="text-foreground leading-relaxed mb-3">In the military:</p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>You adapt to the system.</li>
        <li>You manage your condition.</li>
        <li>Support depends on structure and leadership.</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-4 mb-3">In civilian life:</p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>The system must also adapt to you.</li>
        <li>You have the right to ask for adjustments.</li>
        <li>Employers are expected to act.</li>
      </ul>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        The transition isn’t about becoming more capable. It’s about moving into a system where you’re legally entitled to the support you need to perform at your best.
      </p>
    </section>
  </InsightLayout>
);

export default JSP822vsEqualityActPage;
