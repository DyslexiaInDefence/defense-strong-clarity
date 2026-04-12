import { Link } from "react-router-dom";
import { MessageCircle, Shield, Users, Heart, Briefcase, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const CommunityPage = () => {
  useEffect(() => {
    document.title = "Community & Support | Dyslexia in Defence";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Join the Dyslexia in Defence community on Discord. A safe, moderated space for sharing lived experience, asking questions, and connecting with others across the UK military, civil service, and industry.");
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content = "Join the Dyslexia in Defence community on Discord. A safe, moderated space for sharing lived experience, asking questions, and connecting with others across the UK military, civil service, and industry.";
      document.head.appendChild(tag);
    }

    const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (link) {
      link.href = "https://dyslexiaindefence.com/community";
    } else {
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = "https://dyslexiaindefence.com/community";
      document.head.appendChild(canonical);
    }
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Community & Support
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">
            The Dyslexia in Defence community is a space for anyone connected to the defence and security sector who lives with dyslexia, supports someone who does, or simply wants to understand more. Whether you're thinking about joining the Armed Forces, currently serving, transitioning into civilian life, or working in industry — you belong here.
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            This is a space built on shared experience, mutual support, and openness. There are no silly questions and no judgement. If something is on your mind, ask it.
          </p>
          <p className="text-lg font-medium text-foreground">
            This is a space where any question can be asked.
          </p>
        </div>

        {/* Discord CTA - Prominent */}
        <div className="mb-12 max-w-3xl rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground">Join the Conversation</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Ask questions, share your experience, and connect with others who understand. The community is open and waiting for you.
          </p>
          <a
            href="https://discord.gg/6U68yM8nT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full font-semibold text-base px-8 gap-2">
              Join the Conversation <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* What the community is for */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What the Community Is For</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">Shared Lived Experience</h3>
                </div>
                <p className="text-muted-foreground">
                  Connect with others across Army, RAF, Royal Navy, Civil Service, and MOD roles who understand what it's like. Learn from people who've been where you are.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">Ask Anything</h3>
                </div>
                <p className="text-muted-foreground">
                  No question is too small or too uncertain. Whether you're unsure about the recruitment process, assessments, workplace adjustments, or daily life — just ask.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">Support Each Other</h3>
                </div>
                <p className="text-muted-foreground">
                  Whether you're pre-service, in-service, or post-service — the community is here to help. Share what's worked, what hasn't, and what you've learned along the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Across all stages */}
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Across Every Stage</h2>
          <p className="mb-4 text-muted-foreground">
            The community brings together people at every point in their journey:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Pre-service</strong> — Thinking about joining? Get honest answers from people who've done it.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">In-service</strong> — Day-to-day experience, adjustments, career progression, and practical support.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">Post-service</strong> — Transition, civilian careers, industry roles, and life after the military.</span>
            </li>
          </ul>
        </div>

        {/* Safe space */}
        <div className="mb-12 max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="text-xl font-bold text-foreground">A Safe and Respectful Space</h2>
            </div>
            <p className="mb-3 text-muted-foreground">
              This community is moderated and structured to ensure everyone feels safe and respected. We take this seriously.
            </p>
            <p className="text-muted-foreground">
              To make sure this remains a safe and constructive space, we have clear community guidelines in place.{" "}
              <Link to="/governance/code-of-conduct" className="font-medium text-primary underline-offset-4 hover:underline">
                Read our Code of Conduct
              </Link>.
            </p>
          </div>
        </div>

        {/* Industry & support */}
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Industry & Organisational Engagement</h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">A Place for Organisations Too</h3>
            </div>
            <p className="mb-3 text-muted-foreground">
              The community is also open to organisations that want to engage constructively. This includes sharing insight days, promoting support initiatives, and connecting with people who benefit from inclusive opportunities.
            </p>
            <p className="text-muted-foreground">
              All engagement is moderated to ensure it remains supportive, relevant, and beneficial to the community — never exploitative.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommunityPage;
