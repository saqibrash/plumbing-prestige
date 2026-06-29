import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/site";
import { SERVICE_IMAGES } from "@/data/service-images";

export const ServiceGrid = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="container-tight">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">Our Services</div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Complete plumbing services, 24/7</h2>
        <p className="mt-3 text-muted-foreground">From emergencies to planned work — one trusted local team for every plumbing job.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img src={SERVICE_IMAGES[s.slug]} alt={`${s.title} — Emergency Plumbing Ltd`} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" aria-hidden />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
export default ServiceGrid;