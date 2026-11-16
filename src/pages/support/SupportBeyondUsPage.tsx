import PageTrail from "@/components/PageTrail";
import SupportTabs from "@/components/SupportTabs";
import PartnerLogoCarousel from "@/components/PartnerLogoCarousel";
import { trailFor } from "@/data/pageBreadcrumbs";
import { SUPPORT_SECTIONS, organisationsFor } from "@/data/supportOrganisations";
import "./start-here.css";

export default function SupportBeyondUsPage() {
  return (
    <div className="support-staged-page text-foreground">
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <PageTrail crumbs={trailFor("/support/support-beyond-us")} label="Get support breadcrumb" />
        {/* Not one of the Get support tabs, so no tab is marked. */}
        <SupportTabs />

        <header className="pb-8 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Support beyond us</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Other organisations that support dyslexic and neurodivergent people across Defence and beyond.</p>
        </header>

        {SUPPORT_SECTIONS.map(section => (
          <section key={section.id} aria-labelledby={`${section.id}-heading`} className="mb-6 rounded-lg border border-border bg-card px-3 py-6 sm:p-8">
            <h2 id={`${section.id}-heading`} className="mb-6 text-center text-2xl font-bold">{section.heading}</h2>
            <PartnerLogoCarousel organisations={organisationsFor(section)} label={`${section.heading} organisations`} />
          </section>
        ))}
      </div>
    </div>
  );
}
