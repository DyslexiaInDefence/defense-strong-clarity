import CountUp from "./CountUp";
import EvidenceBar from "./EvidenceBar";
import GrowOnView from "./GrowOnView";
import Reveal from "./Reveal";
import { defenceBars, diagnosisSegments, journeyStages } from "./improvementFigures";

export default function CanBeImprovedSection() {
  return (
    <div className="mt-10 space-y-14 md:space-y-16">
      <Reveal>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">Support exists on paper. Experience depends on who you meet.</h3>
          <p className="max-w-[65ch] text-xl leading-relaxed text-foreground">Only <strong>6%</strong> of Defence personnel surveyed say dyslexia is fully accommodated in training and events. <strong>68%</strong> say getting an adjustment depends on leadership discretion. <strong>46%</strong> have felt excluded at a training event at least once. <strong>51%</strong> aren't sure the policies that protect them, JSP 822 and ACSO 3226, even exist. And nearly <strong>one in five</strong> wouldn't know how to help a colleague.</p>
          <div className="space-y-7 py-2">
            {defenceBars.map(bar => <EvidenceBar key={bar.label} {...bar} />)}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">Bars show the share of respondents. For the first bar, a low figure is the concern.</p>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">Davis, Falmouth University, 2025 (115 respondents); Beardsell, University of Southampton, 2022 (151 respondents). Self reported surveys.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6 border-t border-border pt-10">
          <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">Too many find out too late.</h3>
          <p className="max-w-[65ch] text-xl leading-relaxed text-foreground">Nearly half of the neurodiverse veterans in a Cranfield University study (<strong>74 of 154</strong>) were diagnosed only after leaving service. Dyslexia was the most common condition in the study, at <strong>32%</strong>.</p>
          <div role="group" aria-label="Diagnosis timing">
            <GrowOnView className="flex h-8 overflow-hidden rounded-sm">
              {diagnosisSegments.map(segment => <div key={segment.label} className={`h-full ${segment.colour}`} style={{ width: `${segment.percent}%` }} />)}
            </GrowOnView>
            <ul className="mt-5 space-y-3">
              {diagnosisSegments.map(segment => <li key={segment.label} className="flex items-start gap-3 text-lg leading-relaxed text-foreground"><span aria-hidden="true" className={`mt-1.5 h-4 w-4 shrink-0 rounded-sm ${segment.colour}`} /><span className="font-semibold">{segment.label}</span></li>)}
            </ul>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">The study covered neurodiverse veterans across several conditions, not only dyslexia.</p>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">Allen et al., International Journal of Human Resource Management, 2025.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6 border-t border-border pt-10">
          <p className="text-sm font-semibold leading-relaxed text-foreground">NATIONAL FIGURES, MOSTLY ENGLAND. NOT DEFENCE DATA.</p>
          <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">Beyond Defence: it starts at school and follows people into work.</h3>
          <p className="max-w-[65ch] text-xl leading-relaxed text-foreground">In England, only <strong>1 in 5</strong> pupils with dyslexia reaches a grade 5 in GCSE English and maths, against more than half of pupils with no recorded special educational needs. <strong>78%</strong> of dyslexic teenagers say people assume they aren't clever, and <strong>65%</strong> hide their dyslexia. Children in households earning under £30,000 are less than half as likely to be diagnosed as those earning £100,000 or more (<strong>43%</strong> against <strong>90%</strong>). Then comes work: <strong>81%</strong> of 16 to 24 year olds find job adverts hard to read, <strong>87%</strong> find applications hard, and <strong>77%</strong> worry that telling an employer will cost them the job.</p>
          <div role="group" aria-labelledby="evidence-journey-title" className="pt-4">
            <p id="evidence-journey-title" className="mb-6 text-xl font-bold leading-relaxed text-foreground">School, diagnosis, work</p>
            <div className="relative">
              <GrowOnView responsiveLine className="absolute bottom-0 left-2 top-0 w-0.5 bg-primary lg:bottom-auto lg:left-0 lg:right-0 lg:top-2 lg:h-0.5 lg:w-auto" />
              <div className="relative grid grid-cols-1 gap-7 pl-8 lg:grid-cols-3 lg:pl-0 lg:pt-8">
                {journeyStages.map(stage => (
                  <article key={stage.label} className="relative min-w-0 rounded-lg border border-border bg-card p-5">
                    <span aria-hidden="true" className="absolute -left-8 top-6 h-4 w-4 rounded-full border-4 border-muted bg-primary lg:-top-8 lg:left-5" />
                    <h4 className="mb-6 text-xl font-bold leading-relaxed text-foreground">{stage.label}</h4>
                    <div className="space-y-6">
                      {stage.stats.map(stat => <p key={stat.explanation} className="text-lg leading-relaxed text-foreground"><strong className="mb-2 block break-words text-2xl font-bold leading-tight text-primary">{"value" in stat && typeof stat.value === "number" ? <CountUp value={stat.value} suffix={stat.suffix ?? ""} /> : stat.text}</strong>{stat.explanation}</p>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">British Dyslexia Association, Set up for somebody else, 2025; A pathway interrupted, 2026. The school figures are for England, 2023 to 24. Other figures are UK surveys of young people.</p>
        </div>
      </Reveal>
    </div>
  );
}