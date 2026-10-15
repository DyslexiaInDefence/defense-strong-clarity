import { Link } from "@/lib/router-compat";
import Reveal from "./Reveal";

const headingClass = "text-2xl font-bold leading-relaxed text-foreground md:text-3xl";
const listClass = "list-disc space-y-5 pl-6 text-xl leading-relaxed text-foreground";
const paragraphClass = "text-xl leading-relaxed text-foreground";

export default function SourcesSection() {
  return (
    <div className="max-w-[65ch] space-y-12 md:space-y-16">
      <Reveal><p className={paragraphClass}>Every figure on this page comes from one of the sources below. Figures are as at October 2026.</p></Reveal>
      <Reveal>
        <div className="space-y-6">
          <h3 className={headingClass}>Our own data</h3>
          <ul className={listClass}>
            <li>Defence Dyslexia Network membership: more than 2,000 members at March 2025.</li>
            <li>Training accessibility feedback form: 228 responses, March to September 2026. Voluntary and self reported. Most responses came from the RAF (54%) and Phase 2 training (63%), so the results may not represent all of Defence.</li>
            <li>Lived experience form: 92 written responses, January to February 2026.</li>
          </ul>
          <p className={paragraphClass}>Results are shown as totals only. No names or identifying details are published.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6">
          <h3 className={headingClass}>Research we draw on</h3>
          <ul className={listClass}>
            <li>Beardsell, University of Southampton, 2022. Dyslexia support in the military. 151 respondents, voluntary survey, mostly Army. Used with the author's permission.</li>
            <li>Davis, Falmouth University, 2025. Research project on dyslexia in Defence training and events. 115 respondents. Used with the author's permission.</li>
            <li><a href="https://doi.org/10.1080/09585192.2023.2293066" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Allen et al.<span className="sr-only"> (opens in a new tab)</span></a>, International Journal of Human Resource Management, 2025. Neurodiverse UK military veterans, a Cranfield University study. 232 participants, with diagnosis timing reported for 154.</li>
            <li>British Dyslexia Association, Set up for somebody else, 2025. A survey of 500 young people aged 13 to 18, with school attainment data for England, 2023 to 24.</li>
            <li>British Dyslexia Association, A pathway interrupted, 2026. A survey of 257 young people aged 16 to 24.</li>
          </ul>
          <p className={paragraphClass}>We summarise these reports and point to them. We do not reproduce their charts or long passages.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6">
          <h3 className={headingClass}>The 18,205 figure</h3>
          <p className={paragraphClass}>18,205 is an estimate. It is 10% of 182,050 serving personnel (MOD statistics, 1 January 2026), using the British Dyslexia Association estimate that about 1 in 10 people are dyslexic. It is not a count of diagnoses.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-6">
          <h3 className={headingClass}>How to read the figures</h3>
          <ul className={listClass}>
            <li>Surveys are voluntary and self reported. People who chose to answer may differ from those who did not.</li>
            <li>Each source asked different people, at different times, in different ways. We do not add figures from different sources together, and some people may appear in more than one.</li>
            <li>"Where needs are discussed, accessibility generally follows" shows an association. It does not prove that one causes the other. It uses the 172 people who answered yes or no.</li>
            <li>The "about one in five" figure for instructors is our own reading of 206 free text comments. It is not a field on the form.</li>
            <li>National figures are for England or the UK. They are not Defence data.</li>
            <li>Percentages are rounded.</li>
          </ul>
        </div>
      </Reveal>
      <Reveal><p className={paragraphClass}>Spotted an error, or want to talk about the data? <Link to="/contact" className="text-primary underline underline-offset-4">Get in touch</Link>.</p></Reveal>
    </div>
  );
}