import { ShieldCheck, MapPin, Clock, Users, BadgeCheck, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CTASection from "@/components/CTASection";
import ReviewsSection from "@/components/ReviewsSection";

const values = [
  { icon: Clock, title: "Fast response", body: "We treat every emergency like our own — aiming to be with you within 30 to 60 minutes." },
  { icon: ShieldCheck, title: "Trusted and insured", body: "All work carried out by qualified, fully insured plumbers." },
  { icon: BadgeCheck, title: "Honest pricing", body: "We agree the price before we start. No surprises, no hidden costs." },
  { icon: Users, title: "Friendly local team", body: "Polite, respectful and tidy — we treat your home with care." },
  { icon: MapPin, title: "Local knowledge", body: "Based in the Rhondda and serving Cardiff and South Wales every day." },
  { icon: Wrench, title: "Wide expertise", body: "Emergencies, drains, leaks, boilers, bathrooms, taps and appliance plumbing." },
];

export default function About() {
  return (
    <>
      <Seo title="About Emergency Plumbing Ltd | Cardiff & South Wales Plumbers" description="Trusted local plumbing company serving Cardiff, Rhondda and South Wales. Fast emergency response, fully insured engineers, transparent pricing." path="/about" />
      <PageHero eyebrow="About Us" title="A trusted local plumbing team you can rely on" subtitle="Emergency Plumbing Ltd provides fast, reliable and professional plumbing services across Cardiff, Rhondda and the surrounding South Wales areas." crumbs={[{label:"Home",to:"/"},{label:"About Us"}]} />

      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Who we are</h2>
            <div className="mt-5 space-y-4 text-foreground/80">
              <p>Emergency Plumbing Ltd is a local plumbing company built around one simple idea — when something goes wrong, you should get fast, honest, professional help.</p>
              <p>We help homes and businesses across Cardiff, Rhondda, Pontypridd, Caerphilly, Barry, Newport and nearby South Wales areas with everything from urgent plumbing emergencies to everyday repairs.</p>
              <p>That includes burst pipes, blocked drains, leaks, toilets, taps, washing machine and dishwasher plumbing, bathrooms and boiler related issues.</p>
              <p>We're a local team, locally based — so we know the area, we respond quickly and we care about the reputation we're building one happy customer at a time.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "24/7", v: "Always available" },
              { k: "30–60", v: "Minutes response" },
              { k: "100%", v: "Insured engineers" },
              { k: "5★", v: "Google reviewed" },
            ].map((b) => (
              <div key={b.k} className="rounded-2xl border border-border bg-background p-6 text-center shadow-card">
                <div className="font-display text-3xl font-extrabold text-accent">{b.k}</div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">What we stand for</h2>
            <p className="mt-3 text-muted-foreground">Speed, honesty and quality workmanship — every job, every time.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground"><v.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <CTASection />
    </>
  );
}