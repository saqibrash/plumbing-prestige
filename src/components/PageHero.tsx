import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export const PageHero = ({ eyebrow, title, subtitle, crumbs = [] }: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string }[];
}) => (
  <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
    <div className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:radial-gradient(circle_at_70%_30%,white,transparent_50%)]" />
    <div className="container-tight relative py-14 md:py-20">
      {crumbs.length > 0 && (
        <nav className="mb-3 flex items-center gap-1 text-xs text-primary-foreground/70">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {c.to ? <Link to={c.to} className="hover:text-accent">{c.label}</Link> : <span>{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
            </span>
          ))}
        </nav>
      )}
      {eyebrow && <div className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-glow">{eyebrow}</div>}
      <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">{subtitle}</p>}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent">
          <a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call {SITE.phoneDisplay}</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
          <Link to="/contact">Request a Plumber</Link>
        </Button>
      </div>
    </div>
  </section>
);
export default PageHero;