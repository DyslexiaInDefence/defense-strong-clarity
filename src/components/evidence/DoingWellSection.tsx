import CountUp from "./CountUp";
import EvidenceBar from "./EvidenceBar";
import Reveal from "./Reveal";

export const doingWellFigures = {
  members: 2000,
  trainingResponses: 228,
  livedExperiences: 92,
  wouldHelpPercent: 58,
  describedHelp: 108,
  studyRespondents: 151,
  discussedPercent: 82,
  notDiscussedPercent: 25,
};

export default function DoingWellSection() {
  return (
    <div className="mt-10 space-y-14 md:space-y-16">
      <Reveal>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">Strength in numbers: when you share your data, we can help more people.</h3>
          <p className="max-w-[65ch] text-xl leading-relaxed text-foreground">More than <strong>2,000</strong> people have joined the Defence Dyslexia Network. <strong>228</strong> have told us how accessible Defence training really is. <strong>92</strong> have written, in their own words, what they want people to understand. Every answer is evidence, and evidence is where help starts. If you can't measure it, you can't improve it.</p>
          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-3">
            {[{ value: doingWellFigures.members, suffix: "+", label: "network members" }, { value: doingWellFigures.trainingResponses, label: "training responses" }, { value: doingWellFigures.livedExperiences, label: "written lived experiences" }].map(figure => (
              <div key={figure.label}><p className="text-4xl font-bold leading-tight text-primary md:text-5xl"><CountUp value={figure.value} suffix={figure.suffix ?? ""} /></p><p className="mt-3 text-lg leading-relaxed text-foreground">{figure.label}</p></div>
            ))}
          </div>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">Defence Dyslexia Network, membership at March 2025; training accessibility feedback form, 2026; lived experience responses, 2026.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6 border-t border-border pt-10">
          <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">People want to help, they just need the right guidance.</h3>
          <p className="max-w-[65ch] text-xl leading-relaxed text-foreground">In a 2022 University of Southampton study of 151 Defence personnel, <strong>58%</strong> said they would know how to help someone with dyslexia, and <strong>108</strong> described exactly what they would do. Their most common request was simple: training, guidance and awareness. Instructors are already making a difference. About <strong>one in five</strong> comments on what worked well in training named them.</p>
          <div className="space-y-7 py-2">
            <EvidenceBar label="Would know how to help: 58%" percent={doingWellFigures.wouldHelpPercent} />
            <EvidenceBar label="Described how they would help: 108 of 151 (72%)" percent={Math.round(doingWellFigures.describedHelp / doingWellFigures.studyRespondents * 100)} />
          </div>
          <p className="border-l-4 border-ribbon-yellow bg-secondary px-5 py-4 text-xl font-semibold leading-relaxed text-foreground">About 1 in 5 training comments named instructors or staff.</p>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">Beardsell, University of Southampton, 2022 (151 respondents, voluntary survey, mostly Army). Instructor figure: Dyslexia in Defence reading of 206 free text comments on the training accessibility form (about 45 named instructors or staff).</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6 border-t border-border pt-10">
          <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">Where needs are discussed, accessibility generally follows.</h3>
          <p className="max-w-[65ch] text-xl leading-relaxed text-foreground">Of the 172 people who answered, <strong>82%</strong> rated a course fully or mostly accessible when learning needs were discussed at the start. Where they weren't, <strong>25%</strong> did.</p>
          <div className="space-y-7 py-2">
            <EvidenceBar label="Needs discussed at the start: 82% (105 of 128)" percent={doingWellFigures.discussedPercent} />
            <EvidenceBar label="Needs not discussed: 25% (11 of 44)" percent={doingWellFigures.notDiscussedPercent} neutral />
          </div>
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">Defence Dyslexia Network training accessibility feedback form, 2026. Self reported. Responses that did not answer yes or no are excluded.</p>
        </div>
      </Reveal>
    </div>
  );
}