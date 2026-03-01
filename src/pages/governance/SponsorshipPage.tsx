import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "purpose", title: "Purpose of Sponsorship" },
  { id: "transparency", title: "Financial Transparency" },
  { id: "editorial", title: "No Editorial Control" },
  { id: "moderation", title: "No Influence Over Moderation" },
  { id: "conflict", title: "Conflict of Interest Safeguards" },
  { id: "ethics", title: "Ethical Boundaries" },
  { id: "acknowledgement", title: "Sponsor Acknowledgement" },
  { id: "endorsement", title: "No Implied Endorsement" },
];

const SponsorshipPage = () => (
  <PolicyLayout
    title="Sponsorship Principles"
    summary="This page sets out the principles that govern any current or future sponsorship of Dyslexia in Defence. These principles exist to protect the initiative's independence, credibility, and the trust of its community."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="purpose">
      <h2 className="text-2xl font-bold text-foreground mb-4">Purpose of Sponsorship</h2>
      <p className="text-muted-foreground mb-3">
        Any sponsorship accepted by Dyslexia in Defence will serve one purpose: to sustain and improve the initiative's ability to deliver its mission of peer support, curated resources, and structured signposting.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Sponsorship funds will be used to cover operational costs such as hosting, platform fees, and content development</li>
        <li>Sponsorship will not be used for personal financial gain by the founder or any contributor</li>
        <li>The initiative will not accept sponsorship that is disproportionate to its scale or that could create dependency on a single funder</li>
      </ul>
    </section>

    <section id="transparency">
      <h2 className="text-2xl font-bold text-foreground mb-4">Financial Transparency</h2>
      <p className="text-muted-foreground mb-3">
        The initiative is committed to financial transparency in all matters relating to sponsorship:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>All sponsors will be publicly acknowledged (unless they request otherwise)</li>
        <li>The nature and approximate value of sponsorship will be disclosed</li>
        <li>A summary of how sponsorship funds are used will be made available</li>
        <li>Financial transparency reporting will be proportionate to the scale of funding received</li>
      </ul>
    </section>

    <section id="editorial">
      <h2 className="text-2xl font-bold text-foreground mb-4">No Editorial Control</h2>
      <Callout variant="important">
        <strong>No sponsor will have editorial control over any content published by Dyslexia in Defence.</strong>
      </Callout>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Sponsors may not approve, veto, or influence the content of any resource, article, or community communication</li>
        <li>Sponsored content, if ever introduced, will be clearly labelled as such</li>
        <li>The founder retains sole editorial authority over all published materials</li>
      </ul>
    </section>

    <section id="moderation">
      <h2 className="text-2xl font-bold text-foreground mb-4">No Influence Over Moderation</h2>
      <p className="text-muted-foreground mb-3">
        Sponsorship does not confer any rights or influence over community moderation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Sponsors may not influence moderation decisions</li>
        <li>Sponsors may not request removal of content or individuals</li>
        <li>Sponsors are subject to the same Code of Conduct as all community members</li>
        <li>The Code of Conduct applies equally and without exception</li>
      </ul>
    </section>

    <section id="conflict">
      <h2 className="text-2xl font-bold text-foreground mb-4">Conflict of Interest Safeguards</h2>
      <p className="text-muted-foreground mb-3">
        The following safeguards are in place to manage potential conflicts of interest arising from sponsorship:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>The founder will not accept sponsorship from their current employer</li>
        <li>Sponsorship decisions will be assessed against the initiative's values and mission</li>
        <li>Any potential conflict of interest will be declared and recorded</li>
        <li>Where a conflict cannot be adequately managed, the sponsorship will be declined</li>
      </ul>
    </section>

    <section id="ethics">
      <h2 className="text-2xl font-bold text-foreground mb-4">Ethical Boundaries</h2>
      <p className="text-muted-foreground mb-3">
        The initiative will not accept sponsorship from organisations or individuals whose activities are inconsistent with its values. This includes, but is not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Organisations with a demonstrated record of discrimination</li>
        <li>Organisations engaged in activities harmful to the communities the initiative serves</li>
        <li>Organisations whose association could undermine the initiative's credibility or independence</li>
        <li>Individuals or entities subject to relevant sanctions or legal proceedings</li>
      </ul>
      <Callout>
        The decision to accept or decline any sponsorship rests solely with the founder, guided by these principles and the broader interests of the community.
      </Callout>
    </section>

    <section id="acknowledgement">
      <h2 className="text-2xl font-bold text-foreground mb-4">Sponsor Acknowledgement Framework</h2>
      <p className="text-muted-foreground mb-3">
        Where sponsorship is accepted, it will be acknowledged in a manner that is proportionate and transparent:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Sponsor name and logo may be displayed on the website in a dedicated section</li>
        <li>Sponsorship will be clearly distinguished from endorsement</li>
        <li>The nature of the sponsorship relationship will be stated plainly</li>
        <li>Sponsors will not be presented as partners, affiliates, or co-owners of the initiative</li>
      </ul>
    </section>

    <section id="endorsement">
      <h2 className="text-2xl font-bold text-foreground mb-4">No Implied Endorsement</h2>
      <Callout variant="important">
        <strong>Sponsorship of Dyslexia in Defence does not constitute endorsement of the sponsor's products, services, policies, or practices.</strong>
      </Callout>
      <p className="text-muted-foreground mb-3">
        Similarly, the sponsor's support does not imply that the sponsor endorses the views, content, or activities of the initiative.
      </p>
      <p className="text-muted-foreground">
        Both parties operate independently. The sponsorship relationship is limited to the specific terms agreed and disclosed.
      </p>
    </section>
  </PolicyLayout>
);

export default SponsorshipPage;
