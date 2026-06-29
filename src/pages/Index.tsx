import { Link } from "react-router-dom";
import { AlertTriangle, Phone, Clock, ShieldCheck, BadgeCheck, Users, MapPin, Star } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

const whyPoints = [
  { icon: Clock, title: "Available 24/7", body: "Day or night, weekends and bank holidays — we're always on call." },
  { icon: Phone, title: "30–60 min response", body: "Fast emergency arrival across Cardiff, Rhondda and nearby areas." },
  { icon: BadgeCheck, title: "Clear pricing", body: "We agree pricing with you before any work starts. No hidden costs." },
  { icon: ShieldCheck, title: "Fully insured", body: "Qualified, experienced engineers you can trust in your home." },
  { icon: Users, title: "Clean and respectful", body: "Tidy, professional service — we treat your home like our own." },
  { icon: MapPin, title: "Local plumbers", body: "Locally based and familiar with the South Wales area." },
];

const steps = [
  { n: "1", title: "Call or send a request", body: "Reach us by phone or our quick contact form." },
  { n: "2", title: "We confirm the issue", body: "We check your location and the urgency of the problem." },
  { n: "3", title: "A plumber is dispatched", body: "Our nearest available engineer heads to you fast." },
  { n: "4", title: "We diagnose and explain", body: "On arrival we identify the fault and confirm the cost." },
  { n: "5", title: "We fix it safely", body: "Work is completed cleanly, tested and explained." },
];

const Index = () => (
  <>
    <Seo
      title="24/7 Emergency Plumber in Cardiff & South Wales | Emergency Plumbing Ltd"
      description="Fast 24/7 emergency plumber in Cardiff, Rhondda and South Wales. Leaks, blocked drains, burst pipes, boilers and more. 30–60 min response. Call 07841 785060."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: SITE.name,
        telephone: SITE.phone,
        areaServed: ["Cardiff","Rhondda","South Wales"],
      }}
    />
    <Hero />

    <section className="border-y border-border bg-secondary/40 py-6">
      <div className="container-tight"><TrustBadges /></div>
    </section>

    <section className="bg-accent/5 py-10">
      <div className="container-tight flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-background p-6 shadow-card md:flex-row md:p-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-display text-xl font-bold text-primary md:text-2xl">Plumbing problem getting worse?</h2>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">
            Delaying can cause water damage and higher repair costs. Call now for immediate help across Cardiff and South Wales.
          </p>
        </div>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow">
          <a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call Now</a>
        </Button>
      </div>
    </section>

    <ServiceGrid />

    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Why choose Emergency Plumbing Ltd</h2>
          <p className="mt-3 text-primary-foreground/80">A trusted local team built around speed, honesty and quality workmanship.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">How It Works</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Help in 5 simple steps</h2>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="font-display text-4xl font-extrabold text-accent">{s.n}</div>
              <h3 className="mt-2 font-display text-base font-bold text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <ReviewsSection limit={6} />

    <section className="py-16 md:py-24">
      <div className="container-tight grid items-start gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">Request a plumber</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Tell us what's wrong — we'll call you straight back</h2>
          <p className="mt-3 text-muted-foreground">
            Send a quick request and our team will respond as fast as possible. For genuine emergencies, please call us directly on <a href={SITE.phoneHref} className="font-semibold text-accent">{SITE.phoneDisplay}</a>.
          </p>
          <div className="mt-6 space-y-3">
            {["Same day response where possible","Trusted local plumbers","No hidden costs","Friendly, professional team"].map((x) => (
              <div key={x} className="flex items-center gap-3 text-sm"><Star className="h-4 w-4 fill-gold text-gold" /> {x}</div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>

    <CTASection />
  </>
);

export default Index;
