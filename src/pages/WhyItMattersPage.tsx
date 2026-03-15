import { Brain, Eye, Lightbulb, Puzzle, Compass, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import spikyProfileImg from "@/assets/spiky-profile.jpg";

const strengths = [
{ icon: Puzzle, label: "Systems thinking" },
{ icon: Eye, label: "Pattern recognition" },
{ icon: Brain, label: "Strategic problem solving" },
{ icon: Compass, label: "Spatial reasoning" },
{ icon: Lightbulb, label: "Innovative thinking under pressure" }];


const ecosystem = [
{ label: "Pre-service", description: "Candidates exploring defence and security careers." },
{ label: "Serving", description: "Active personnel across military and civilian roles." },
{ label: "Veterans", description: "Those transitioning to civilian life." },
{ label: "Industry", description: "Defence and security contractors and partners." },
{ label: "Families", description: "Dependants navigating support." }];


const WhyItMattersPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why It Matters</h1>
          <p className="text-lg text-muted-foreground">
            ​
          </p>
        </div>

        {/* Spiky Profile */}
        <section className="mb-16" aria-label="The Dyslexic Spiky Profile">
          <h2 className="mb-6 text-2xl font-bold text-foreground">The Dyslexic "Spiky Profile"</h2>

          <div className="max-w-3xl space-y-5 text-foreground leading-relaxed">
            <p>
              Up to 20% of the UK MOD are Dyslexic. This is a whole Squadron in a Regiment, <a href="https://www.royalnavy.mod.uk/equipment/ships/queen-elizabeth-class" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">135 people on the Queen Elizabeth class ship</a> and <a href="https://des.mod.uk/who-we-are/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">2500 people in Defence Equipment &amp; Support</a>.
            </p>
            <p>
              All these people will have 'spikey profiles' shown below .
            </p>
          </div>

          {/* Image */}
          <div className="my-10 rounded-lg border border-border bg-card p-4 max-w-2xl mx-auto">
            <img
              src={spikyProfileImg}
              alt="Graph illustrating the spiky cognitive profile of neurodiverse individuals compared to a neurotypical baseline, showing dramatic peaks and troughs across different cognitive abilities."
              className="w-full h-auto rounded" />
            
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Source:{" "}
              <a
                href="https://geniuswithin.org/what-is-neurodiversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors">
                
                Genius Within – What is Neurodiversity
              </a>
            </p>
          </div>

          <div className="max-w-3xl space-y-5 text-foreground leading-relaxed">
            <p>
              For many years, people with dyslexia have been assessed, judged, and filtered based primarily on the <strong>lowest points</strong> of that profile. Recruitment processes, exams, training systems, and workplace assessments frequently focus on areas where dyslexic individuals may struggle — such as processing speed, written accuracy, or certain forms of working memory.
            </p>

            <p>
              What is often overlooked is the <strong>top half</strong> of the spiky profile. Dyslexic individuals frequently demonstrate strong capabilities in analytical thinking, problem solving, spatial reasoning, pattern recognition, creativity, and strategic thinking.
            </p>

            <p>
              The result is that organisations can unintentionally screen out or undervalue people who may possess exceptional strengths.
            </p>

            <p>
              The goal is not to ignore the lower points. Those areas simply require practical support — and in many cases that support is straightforward: clear written instructions, assistive technology, flexible communication formats, or adjusted workflows.
            </p>

            <p>
              These small adjustments allow the strengths at the top of the profile to be fully realised.
            </p>

            <p>
              When organisations recognise both sides of the spiky profile — supporting the weaker areas while enabling the stronger ones — they unlock individuals who can contribute enormous value.
            </p>

            <p className="font-semibold text-primary">
              This is the core idea behind Dyslexia in Defence.
            </p>

            <p>
              The network exists to help defence and security organisations stop focusing solely on the bottom of the spiky profile and instead create environments where dyslexic individuals can succeed, contribute, and thrive.
            </p>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-16" aria-label="Dyslexic strengths">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Dyslexic Strengths</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) =>
            <Card key={s.label}>
                <CardContent className="flex items-center gap-3 p-5">
                  <s.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-medium text-foreground">{s.label}</span>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Who we support */}
        <section aria-label="Who we support">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Who We Support</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((e) =>
            <Card key={e.label}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{e.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>);

};

export default WhyItMattersPage;