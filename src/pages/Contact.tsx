import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <Seo title="Contact Emergency Plumbing Ltd | Cardiff & South Wales" description="Contact Emergency Plumbing Ltd for 24/7 emergency plumbing in Cardiff, Rhondda and South Wales. Call 07841 785060 or request a plumber online." path="/contact" />
      <PageHero eyebrow="Contact" title="Get in touch — we're here 24/7" subtitle="Call us for an emergency, or send a request and we'll get back to you fast." crumbs={[{label:"Home",to:"/"},{label:"Contact"}]} />

      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-5">
            <a href={SITE.phoneHref} className="block rounded-2xl bg-hero-gradient p-6 text-primary-foreground shadow-elevated">
              <div className="flex items-center gap-3 text-accent-glow"><Phone className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">Call 24/7</span></div>
              <div className="mt-2 font-display text-3xl font-extrabold">{SITE.phoneDisplay}</div>
              <div className="mt-1 text-sm text-primary-foreground/80">Fastest way to reach us for emergencies</div>
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="block rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="flex items-center gap-3 text-accent"><MessageCircle className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">WhatsApp</span></div>
              <div className="mt-2 font-display text-lg font-bold text-primary">Message us on WhatsApp</div>
              <div className="mt-1 text-sm text-muted-foreground">Quick messages, photos of the problem, voice notes.</div>
            </a>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="flex items-center gap-3 text-accent"><Mail className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">Email</span></div>
              <a href={`mailto:${SITE.email}`} className="mt-2 block font-display text-lg font-bold text-primary hover:text-accent">{SITE.email}</a>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="flex items-center gap-3 text-accent"><MapPin className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">Address</span></div>
              <div className="mt-2 font-medium text-primary">{SITE.address}</div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary">
                <iframe title="Emergency Plumbing Ltd location" src="https://www.google.com/maps?q=26+Ynyscynon+Road+Rhondda+CF40+2LN&output=embed" width="100%" height="100%" loading="lazy" style={{ border: 0 }} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="flex items-center gap-3 text-accent"><Clock className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-wider">Hours</span></div>
              <div className="mt-2 text-sm text-foreground/85">
                <strong className="text-primary">Emergency callouts available 24/7.</strong>
                <br />Office enquiries can be answered during normal working hours.
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Request a plumber</h2>
            <p className="mt-2 text-muted-foreground">Tell us what's going on and we'll call you straight back. For genuine emergencies, please call us directly.</p>
            <div className="mt-5"><ContactForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}