import { Link } from "react-router-dom";
import { ArrowRight, Siren, Waves, Droplets, Flame, ShowerHead, Wrench, Droplet, WashingMachine, CircleDot } from "lucide-react";
import { SERVICES } from "@/data/site";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren, Waves, Droplets, Flame, ShowerHead, Wrench, Droplet, WashingMachine, Toilet: CircleDot,
};

export const ServiceGrid = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="container-tight">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">Our Services</div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Complete plumbing services, 24/7</h2>
        <p className="mt-3 text-muted-foreground">From emergencies to planned work — one trusted local team for every plumbing job.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = icons[s.icon] || Wrench;
          return (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);
export default ServiceGrid;