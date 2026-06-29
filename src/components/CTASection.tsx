import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export const CTASection = ({
  title = "Plumbing emergency? Don't wait.",
  subtitle = "Call now for fast response across Cardiff, Rhondda and South Wales. We aim to be with you within 30 to 60 minutes.",
}: { title?: string; subtitle?: string }) => (
  <section className="bg-hero-gradient text-primary-foreground">
    <div className="container-tight flex flex-col items-center gap-6 py-14 text-center md:py-20">
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-primary-foreground/85">{subtitle}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent animate-pulse-ring">
          <a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call {SITE.phoneDisplay}</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
          <Link to="/contact">Request a Plumber</Link>
        </Button>
      </div>
    </div>
  </section>
);
export default CTASection;