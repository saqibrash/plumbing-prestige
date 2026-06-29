import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export default function Services() {
  return (
    <>
      <Seo title="Plumbing Services in Cardiff & South Wales | Emergency Plumbing Ltd" description="Full range of plumbing services in Cardiff, Rhondda and South Wales. Emergency plumbing, drains, leaks, boilers, bathrooms, taps and appliance plumbing." path="/services" />
      <PageHero eyebrow="Services" title="Plumbing services in Cardiff, Rhondda & South Wales" subtitle="We cover emergency callouts, planned plumbing work, repairs and installations — one trusted team for the whole job." crumbs={[{label:"Home",to:"/"},{label:"Services"}]} />
      <section className="border-y border-border bg-secondary/40 py-6"><div className="container-tight"><TrustBadges /></div></section>
      <section className="py-16 md:py-20">
        <div className="container-tight max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Emergency and planned plumbing — all under one roof</h2>
          <div className="mt-5 space-y-4 text-foreground/80">
            <p>From a burst pipe at 2am to a brand new bathroom tap, we handle the full range of plumbing work for homes and businesses across South Wales.</p>
            <p>Each service is delivered by qualified, insured plumbers with clear pricing agreed before any work starts. We're available 24 hours a day for genuine emergencies and we offer flexible appointments for planned work.</p>
          </div>
        </div>
      </section>
      <ServiceGrid />
      <CTASection />
    </>
  );
}