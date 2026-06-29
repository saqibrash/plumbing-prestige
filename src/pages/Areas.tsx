import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CTASection from "@/components/CTASection";
import { AREAS, SITE } from "@/data/site";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Areas() {
  return (
    <>
      <Seo title="Service Areas | Plumber in Cardiff, Rhondda & South Wales" description="We cover Cardiff, Rhondda, Pontypridd, Caerphilly, Barry, Bridgend, Newport and surrounding South Wales areas with fast 24/7 plumbing." path="/areas" />
      <PageHero eyebrow="Areas We Cover" title="Plumbing across Cardiff, Rhondda & South Wales" subtitle="We're a locally based team covering a wide area of South Wales. Availability for further locations depends on distance and current schedule — just give us a call." crumbs={[{label:"Home",to:"/"},{label:"Areas We Cover"}]} />
      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <div key={a.name} className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="flex items-center gap-2 text-accent"><MapPin className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">Service Area</span></div>
              <h2 className="mt-2 font-display text-xl font-bold text-primary">{a.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.blurb}</p>
              <Button asChild size="sm" className="mt-5 bg-accent text-accent-foreground hover:bg-accent-glow"><a href={SITE.phoneHref}><Phone className="mr-1.5 h-4 w-4" /> Call now</a></Button>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}