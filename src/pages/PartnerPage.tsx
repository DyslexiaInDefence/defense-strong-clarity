import { Link } from "react-router-dom";
import { Handshake, Shield, Users, BookOpen, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartnerPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* ───── 1. HERO ───── */}
        <section className="mb-16">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl leading-tight">
            Partner With Dyslexia in Defence
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Supporting neurodiverse talent across the defence ecosystem while delivering <strong className="text-foreground">measurable social value</strong> and <strong className="text-foreground">organisational benefit</strong>.
          </p>

          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                Research from{" "}
                <a
                  href="https://www.madebydyslexia.org/assets/downloads/Return_on_Dyslexic_Thinking.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Made By Dyslexia
                </a>{" "}
                suggests dyslexic thinking may contribute up to <strong>£98.2&nbsp;billion</strong> in value within the UK with significant untapped potential remaining.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3">
            <Link to="/join">
              <Button size="lg" className="rounded-full px-8 font-semibold">
                <Handshake className="mr-2 h-5 w-5" />
                Register Interest
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold" disabled>
              Download Overview (Coming Soon)
            </Button>
          </div>
        </section>

        {/* ───── 2. WHY THIS MATTERS ───── */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Why This Matters</h2>


          <p className="text-foreground leading-relaxed">
            Each year, approximately <strong>15,000–20,000</strong> leave the UK Armed Forces and transition into civilian life. Among them are individuals with valuable skills in:
          </p>
...
          <p className="text-foreground leading-relaxed">
            If you are an organisation wanting to harness the amazing skills ex military personnel bring to an organisation then making sure that that 1,500 to 2,000 of those leaving every year could be an individual with an untapped resource purely because they haven't been given the support or opportunity to showcase those skills listed above.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            {"\n"}
          </p>
...
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold text-foreground">{"\n"}</h2>

          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              {"\n"}
            </p>
            <p>
              {"\n"}
            </p>
            <p>
              Without structured support, awareness, and transition pathways, this represents a <strong>loss of highly capable individuals</strong> whose strengths are often underutilised.
            </p>
          </div>

          <ul className="mt-6 mb-6 space-y-3">
            {[
              "Untapped human capability",
              "Lost innovation potential",
              "Missed economic value",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed font-semibold">
                This is not just a workforce issue — it is a capability and performance gap.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ───── 4. WHY PARTNER WITH US ───── */}
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold text-foreground">Why Partner With Us</h2>
          <ul className="space-y-3 mb-6">
            {[
              "Demonstrate tangible social value contribution",
              "Align with MOD Social Value Model (PPN 06/20)",
              "Support workforce capability and inclusion",
              "Contribute to a defence-wide initiative",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Partners can reference their involvement within <strong className="text-foreground">social value</strong>, <strong className="text-foreground">ESG</strong>, and <strong className="text-foreground">bid responses</strong>.
          </p>
        </section>

        {/* ───── 5. WHAT WE PROVIDE ───── */}
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold text-foreground">What Dyslexia in Defence Provides</h2>
          <ul className="space-y-3 mb-6">
            {[
              "Awareness and education sessions",
              "Insight into dyslexia within defence environments",
              "Access to lived experience and community insight",
              "Contribution to improving support systems across defence",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {["Education", "Awareness", "Capability Enhancement"].map((label) => (
              <span
                key={label}
                className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* ───── 6. PARTNERSHIP PACKAGES ───── */}
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-foreground">Partnership Packages</h2>
          <p className="mb-8 text-sm text-muted-foreground italic">
            All partnership packages below are proposed concepts and are not yet formally implemented.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Bronze */}
            <Card className="border-amber-700/30">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-6 w-6 text-amber-700" aria-hidden="true" />
                  <CardTitle className="text-lg">Bronze</CardTitle>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Supporter</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />Recognition as supporter</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />Logo on website</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />Inclusion in impact summary</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />Social value reference rights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Silver */}
            <Card className="border-slate-400/40">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-6 w-6 text-slate-500" aria-hidden="true" />
                  <CardTitle className="text-lg">Silver</CardTitle>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Engagement Partner</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />Everything in Bronze</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />Awareness session participation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />Access to insights and content</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />Community engagement opportunity</li>
                </ul>
              </CardContent>
            </Card>

            {/* Gold */}
            <Card className="border-yellow-500/40">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                  <CardTitle className="text-lg">Gold</CardTitle>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Strategic Partner</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />Everything in Silver</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />Tailored education sessions</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />Strategic collaboration</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />Potential co-branded initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ───── 7. SOCIAL VALUE ALIGNMENT ───── */}
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold text-foreground">{"\n"}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{"\n"}</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />{"\n"}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />{"\n"}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />{"\n"}</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{"\n"}</h3>
              <p className="text-foreground leading-relaxed">
                <strong></strong>{"\n"}
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{"\n"}</h3>
              <p className="text-foreground leading-relaxed">
                {"\n"}
              </p>
            </div>
          </div>
        </section>

        {/* ───── 8. THE BIGGER PICTURE ───── */}
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold text-foreground">The Bigger Picture</h2>
          <ul className="space-y-3">
            {[
              "Supporting individuals before, during, and after service",
              "Complementary to existing initiatives (e.g. Defence Dyslexia Network)",
              "A wrap-around support ecosystem for the defence community",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ───── 9. CALL TO ACTION ───── */}
        <section className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground">Get Involved</h2>
          <p className="mb-6 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Interested in partnering with Dyslexia in Defence? Register your interest or get in touch to explore how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/join">
              <Button size="lg" className="rounded-full px-8 font-semibold">
                <Handshake className="mr-2 h-5 w-5" />
                Register Interest
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PartnerPage;
