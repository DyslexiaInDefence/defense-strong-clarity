import vennDiagram from "@/assets/venn-diagram.png";

const aims = [
"Empower individuals with dyslexia to recognise and use their strengths",
"Increase awareness and understanding of dyslexia across defence environments",
"Create connections between industry, charities, and veteran support organisations",
"Improve opportunities for individuals during service, transition, and civilian careers"];


const successItems = [
"Greater awareness of dyslexia across the defence sector",
"Stronger collaboration between industry and neurodiversity specialists",
"Practical support networks for individuals with dyslexia",
"Clearer pathways for people leaving the military into meaningful careers"];


const AchievePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" aria-label="Introduction">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              What We Want to Achieve
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Dyslexia in Defence exists to empower people with dyslexia to thrive across the defence ecosystem by connecting the defence industry, neurodiversity expertise, and veteran support organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Venn Diagram */}
      <section className="border-t border-border bg-card py-16" aria-label="Ecosystem diagram">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <img
              src={vennDiagram}
              alt="Venn diagram showing Dyslexia in Defence at the intersection of Defence Industry, Dyslexia and Neurodiversity Charities, and Veteran Support Organisations"
              className="mx-auto w-full max-w-2xl rounded-lg" />
            
            <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground italic">
              Dyslexia in Defence connects defence industry partners, neurodiversity expertise, and veteran support organisations (or those pre service) to empower individuals with dyslexia to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Aim */}
      <section className="py-16" aria-label="Our aim">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Our Aim</h2>
            <ul className="space-y-4">
              {aims.map((item) =>
              <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="border-t border-border bg-card py-16" aria-label="What success looks like">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">What Success Looks Like</h2>
            <ul className="space-y-4">
              {successItems.map((item) =>
              <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>);

};

export default AchievePage;