import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { SITE, SERVICES } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const heroSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  phone: z.string().trim().min(7, "Phone required").max(30),
  location: z.string().trim().min(1, "Location required").max(120),
  service: z.string().min(1, "Choose a service"),
});

const HeroForm = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = { ...Object.fromEntries(new FormData(form)), service } as Record<string, string>;
    const result = heroSchema.safeParse(raw);
    if (!result.success) { toast.error(result.error.issues[0]?.message || "Please check the form"); return; }
    const data = result.data;
    setLoading(true);
    try {
      const serviceTitle = SERVICES.find((s) => s.slug === data.service)?.title || data.service;
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New plumbing lead — ${serviceTitle} (Hero form)`,
          _template: "table",
          _captcha: "false",
          name: data.name,
          phone: data.phone,
          location: data.location,
          service: serviceTitle,
          source: "Homepage hero",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      nav("/thank-you");
    } catch {
      toast.error("Could not send. Please call " + SITE.phoneDisplay);
    } finally { setLoading(false); }
  };
  return (
    <form onSubmit={onSubmit} className="relative rounded-2xl bg-background p-5 text-primary shadow-elevated md:p-6">
      <div className="mb-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">Get help now</div>
        <h2 className="mt-2 font-display text-xl font-bold md:text-2xl">Request a plumber — we'll call you back fast</h2>
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1.5"><Label htmlFor="h-name">Your Name *</Label><Input id="h-name" name="name" required maxLength={80} placeholder="John Smith" /></div>
        <div className="grid gap-1.5"><Label htmlFor="h-phone">Phone Number *</Label><Input id="h-phone" name="phone" required type="tel" maxLength={30} placeholder="07…" /></div>
        <div className="grid gap-1.5"><Label htmlFor="h-loc">Location / Town *</Label><Input id="h-loc" name="location" required maxLength={120} placeholder="Cardiff, Rhondda…" /></div>
        <div className="grid gap-1.5">
          <Label>Service Needed *</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (<SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>))}
              <SelectItem value="other">Other / Not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" size="lg" disabled={loading} className="mt-1 bg-accent text-accent-foreground hover:bg-accent-glow">
          {loading ? "Sending…" : "Request a Plumber"}
        </Button>
        <a href={SITE.phoneHref} className="text-center text-sm font-semibold text-primary hover:text-accent">
          Or call now: <span className="text-accent">{SITE.phoneDisplay}</span>
        </a>
      </div>
    </form>
  );
};

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
        <div className="mt-7">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent animate-pulse-ring">
            <a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call Now: {SITE.phoneDisplay}</a>
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
        <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-3xl" aria-hidden />
        <div className="relative">
          <HeroForm />
        </div>
      </div>
    </div>
  </section>
);
export default Hero;