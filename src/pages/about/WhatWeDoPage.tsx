import { Link } from "@/lib/router-compat";
import WhyItMattersPage from "@/pages/WhyItMattersPage";

/**
 * "What We Do" — the existing Why It Matters content, unchanged, framed as a
 * practical explanation of our guidance, community and support activity.
 */
const WhatWeDoPage = () => (
  <>
    <section className="border-b border-border bg-card py-12" aria-label="What we do">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">What We Do</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Guidance, community and practical support
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We publish plain English{" "}
            <Link to="/insights" className="font-semibold text-primary hover:underline">guidance</Link>{" "}
            for people joining, serving and leaving service, run a peer{" "}
            <Link to="/community" className="font-semibold text-primary hover:underline">community</Link>{" "}
            where questions can be asked without judgement, share{" "}
            <Link to="/lived-experiences" className="font-semibold text-primary hover:underline">lived experience</Link>{" "}
            from across the Defence community, and signpost people to established support. The case for that work is set out below.
          </p>
        </div>
      </div>
    </section>
    <WhyItMattersPage />
  </>
);

export default WhatWeDoPage;