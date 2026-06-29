import { Link } from "react-router-dom";
import { Phone, MessageSquare, ShieldCheck, Clock, Star } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumber.jpg";

export const Hero = () => (
  <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
    <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
    <div className="container-tight relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          24/7 Emergency Plumbers — Online Now
        </div>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          24/7 Emergency <span className="text-accent">Plumber</span> in Cardiff & South Wales
        </h1>
        <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
          Fast local plumbing help for leaks, blocked drains, burst pipes, toilet issues, boiler problems and urgent repairs. We aim to respond within 30 to 60 minutes.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent animate-pulse-ring">
            <a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call Now: {SITE.phoneDisplay}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/contact"><MessageSquare className="mr-2 h-5 w-5" /> Request a Plumber</Link>
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 text-sm md:max-w-md">
          <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 text-center">
            <Clock className="mx-auto h-5 w-5 text-accent" />
            <div className="mt-1 font-semibold">30–60 min</div>
            <div className="text-xs text-primary-foreground/70">Response time</div>
          </div>
          <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 text-center">
            <ShieldCheck className="mx-auto h-5 w-5 text-accent" />
            <div className="mt-1 font-semibold">Insured</div>
            <div className="text-xs text-primary-foreground/70">Qualified team</div>
          </div>
          <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 text-center">
            <Star className="mx-auto h-5 w-5 text-gold" />
            <div className="mt-1 font-semibold">Google</div>
            <div className="text-xs text-primary-foreground/70">Reviewed</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-accent/30 blur-3xl" aria-hidden />
        <img src={heroImg} alt="Professional emergency plumber fixing a pipe in Cardiff" width={1536} height={1024} className="relative w-full rounded-2xl object-cover shadow-elevated" />
        <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-background p-4 text-primary shadow-elevated md:block">
          <div className="flex items-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
            <span className="text-sm font-semibold">Google Reviewed</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Verified customers across South Wales</div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;