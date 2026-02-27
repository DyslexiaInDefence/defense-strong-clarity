import { Shield, FileText, BookOpen, Building2, Landmark, Users, Handshake, Network, GraduationCap, Briefcase, Heart, Star, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const EcosystemPage = () => {
  return (
    <section className="py-16 md:py-24" aria-label="Ecosystem Map">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl mb-4">
            Ecosystem Map
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Where Dyslexia in Defence sits within the broader UK support landscape.
          </p>
        </div>

        {/* Venn Diagram */}
        <div className="mx-auto max-w-5xl">
          <div className="relative w-full" style={{ paddingBottom: "80%" }}>
            <svg
              viewBox="0 0 1000 800"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Venn diagram showing three overlapping circles: General Dyslexia Support, Government and Workplace Schemes, and Defence and Veteran Networks, with Dyslexia in Defence at the centre intersection"
            >
              <defs>
                {/* Circle fills */}
                <radialGradient id="grad1" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="hsl(200, 70%, 55%)" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="hsl(200, 70%, 55%)" stopOpacity="0.06" />
                </radialGradient>
                <radialGradient id="grad2" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="hsl(160, 55%, 45%)" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="hsl(160, 55%, 45%)" stopOpacity="0.06" />
                </radialGradient>
                <radialGradient id="grad3" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="hsl(35, 85%, 55%)" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="hsl(35, 85%, 55%)" stopOpacity="0.06" />
                </radialGradient>
                {/* Centre glow */}
                <radialGradient id="centreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(210, 80%, 58%)" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="hsl(210, 80%, 58%)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(210, 80%, 58%)" stopOpacity="0.05" />
                </radialGradient>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="hsl(210,40%,30%)" floodOpacity="0.12" />
                </filter>
                <filter id="centreShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="10" floodColor="hsl(210,70%,50%)" floodOpacity="0.25" />
                </filter>
                {/* Ribbon gradient for accent line */}
                <linearGradient id="ribbon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(48, 95%, 55%)" />
                  <stop offset="30%" stopColor="hsl(210, 80%, 55%)" />
                  <stop offset="60%" stopColor="hsl(0, 70%, 55%)" />
                  <stop offset="100%" stopColor="hsl(145, 60%, 45%)" />
                </linearGradient>
              </defs>

              {/* Ribbon accent at top */}
              <rect x="100" y="12" width="800" height="4" rx="2" fill="url(#ribbon)" opacity="0.7" />

              {/* Circle 1 — General Dyslexia Support (top-left) */}
              <circle cx="370" cy="340" r="260" fill="url(#grad1)" stroke="hsl(200, 60%, 60%)" strokeWidth="2" filter="url(#shadow)" opacity="0.9" />
              
              {/* Circle 2 — Government & Workplace (top-right) */}
              <circle cx="630" cy="340" r="260" fill="url(#grad2)" stroke="hsl(160, 45%, 50%)" strokeWidth="2" filter="url(#shadow)" opacity="0.9" />
              
              {/* Circle 3 — Defence & Veteran (bottom-centre) */}
              <circle cx="500" cy="520" r="260" fill="url(#grad3)" stroke="hsl(35, 70%, 55%)" strokeWidth="2" filter="url(#shadow)" opacity="0.9" />

              {/* === CIRCLE 1 LABELS — General Dyslexia Support === */}
              <text x="280" y="115" textAnchor="middle" className="fill-foreground" fontWeight="700" fontSize="18" fontFamily="Lexend, sans-serif">
                General Dyslexia
              </text>
              <text x="280" y="138" textAnchor="middle" className="fill-foreground" fontWeight="700" fontSize="18" fontFamily="Lexend, sans-serif">
                Support
              </text>

              {/* Items */}
              <g className="fill-muted-foreground" fontSize="12.5" fontFamily="Lexend, sans-serif">
                {/* BookOpen icon proxy */}
                <rect x="175" y="175" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
                <line x1="182" y1="175" x2="182" y2="187" strokeWidth="1.5" className="stroke-primary" />
                <text x="196" y="186">British Dyslexia Association</text>

                <rect x="175" y="205" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
                <line x1="182" y1="205" x2="182" y2="217" strokeWidth="1.5" className="stroke-primary" />
                <text x="196" y="216">Made By Dyslexia</text>

                <rect x="175" y="235" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" className="stroke-primary" />
                <line x1="182" y1="235" x2="182" y2="247" strokeWidth="1.5" className="stroke-primary" />
                <text x="196" y="246">Dyslexia Scotland</text>

                <rect x="175" y="265" width="14" height="10" rx="1" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <line x1="178" y1="269" x2="186" y2="269" strokeWidth="1" className="stroke-primary" />
                <line x1="178" y1="272" x2="184" y2="272" strokeWidth="1" className="stroke-primary" />
                <text x="196" y="275">Workplace Needs Assessments</text>

                <rect x="175" y="293" width="14" height="10" rx="1" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <line x1="178" y1="297" x2="186" y2="297" strokeWidth="1" className="stroke-primary" />
                <line x1="178" y1="300" x2="184" y2="300" strokeWidth="1" className="stroke-primary" />
                <text x="196" y="303">Employer Toolkits</text>
              </g>

              {/* === CIRCLE 2 LABELS — Government & Workplace === */}
              <text x="720" y="115" textAnchor="middle" className="fill-foreground" fontWeight="700" fontSize="18" fontFamily="Lexend, sans-serif">
                Government &
              </text>
              <text x="720" y="138" textAnchor="middle" className="fill-foreground" fontWeight="700" fontSize="18" fontFamily="Lexend, sans-serif">
                Workplace Schemes
              </text>

              <g className="fill-muted-foreground" fontSize="12.5" fontFamily="Lexend, sans-serif">
                {/* Building icon proxy */}
                <rect x="660" y="175" width="14" height="14" rx="1" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <line x1="664" y1="179" x2="664" y2="183" strokeWidth="1.5" className="stroke-primary" />
                <line x1="670" y1="179" x2="670" y2="183" strokeWidth="1.5" className="stroke-primary" />
                <text x="680" y="187">Access to Work</text>

                <rect x="660" y="205" width="14" height="14" rx="1" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <path d="M664 212 L667 209 L670 212" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <text x="680" y="217">Reasonable Adjustments</text>

                <rect x="660" y="235" width="14" height="12" rx="1" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <line x1="663" y1="240" x2="671" y2="240" strokeWidth="1" className="stroke-primary" />
                <line x1="663" y1="243" x2="669" y2="243" strokeWidth="1" className="stroke-primary" />
                <text x="680" y="246">HR Policy Frameworks</text>

                <circle cx="667" cy="273" r="7" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <text x="667" y="276" textAnchor="middle" fontSize="9" fontWeight="700" className="fill-primary">£</text>
                <text x="680" y="276">Funding & Grant Mechanisms</text>
              </g>

              {/* === CIRCLE 3 LABELS — Defence & Veteran Networks === */}
              <text x="500" y="660" textAnchor="middle" className="fill-foreground" fontWeight="700" fontSize="18" fontFamily="Lexend, sans-serif">
                Defence & Veteran Networks
              </text>

              <g className="fill-muted-foreground" fontSize="12.5" fontFamily="Lexend, sans-serif">
                {/* Shield icon proxy */}
                <path d="M360 600 L360 610 Q360 618 367 622 Q374 618 374 610 L374 600 L367 596 Z" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <text x="380" y="613">Defence Dyslexia Network (MOD)</text>

                <path d="M360 630 L360 640 Q360 648 367 652 Q374 648 374 640 L374 630 L367 626 Z" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <text x="380" y="643">Forces Employment Charity</text>

                <circle cx="367" cy="668" r="4" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <line x1="363" y1="668" x2="371" y2="668" strokeWidth="1" className="stroke-primary" />
                <line x1="367" y1="664" x2="367" y2="672" strokeWidth="1" className="stroke-primary" />
                <text x="380" y="672">TechVets</text>

                <rect x="360" y="687" width="14" height="10" rx="1" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <text x="380" y="697">Veteran Employment Support</text>

                <circle cx="367" cy="716" r="3" fill="none" strokeWidth="1.5" className="stroke-primary" />
                <line x1="360" y1="716" x2="364" y2="716" strokeWidth="1" className="stroke-primary" />
                <line x1="370" y1="716" x2="374" y2="716" strokeWidth="1" className="stroke-primary" />
                <text x="380" y="720">Industry Mentoring Networks</text>
              </g>

              {/* === CENTRE INTERSECTION === */}
              <circle cx="500" cy="390" r="105" fill="url(#centreGlow)" stroke="hsl(210, 70%, 55%)" strokeWidth="3" filter="url(#centreShadow)" />
              
              <text x="500" y="345" textAnchor="middle" className="fill-foreground" fontWeight="800" fontSize="16" fontFamily="Lexend, sans-serif">
                Dyslexia
              </text>
              <text x="500" y="365" textAnchor="middle" className="fill-foreground" fontWeight="800" fontSize="16" fontFamily="Lexend, sans-serif">
                in Defence
              </text>

              <g fontSize="11" fontFamily="Lexend, sans-serif" className="fill-foreground">
                <circle cx="445" cy="390" r="2.5" className="fill-primary" />
                <text x="453" y="394">Independent peer network</text>

                <circle cx="445" cy="408" r="2.5" className="fill-primary" />
                <text x="453" y="412">Defence-aware signposting</text>

                <circle cx="445" cy="426" r="2.5" className="fill-primary" />
                <text x="453" y="430">Bridge: service & industry</text>

                <circle cx="445" cy="444" r="2.5" className="fill-primary" />
                <text x="453" y="448">Professionally moderated</text>

                <circle cx="445" cy="462" r="2.5" className="fill-primary" />
                <text x="453" y="466">Complementary, not duplicative</text>
              </g>

              {/* Ribbon accent at bottom */}
              <rect x="100" y="775" width="800" height="4" rx="2" fill="url(#ribbon)" opacity="0.7" />
            </svg>
          </div>

          {/* Caption */}
          <p className="mt-6 text-center text-base italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "Complementing existing structures by providing independent, defence-aware peer support and structured signposting."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPage;
