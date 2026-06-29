import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X, Siren } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/areas", label: "Areas We Cover" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary md:text-xl">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-accent">
            <Siren className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            Emergency<span className="text-accent">.</span>
            <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Plumbing Ltd</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"}
              className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-accent", isActive ? "text-accent" : "text-foreground/80")}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" size="sm"><Link to="/contact">Get Emergency Help</Link></Button>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent">
            <a href={SITE.phoneHref}><Phone className="mr-1.5 h-4 w-4" />Call 24/7: {SITE.phoneDisplay}</a>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent-glow">
            <a href={SITE.phoneHref} aria-label="Call now"><Phone className="mr-1 h-4 w-4" /> Call</a>
          </Button>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-md border border-border p-2">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-tight flex flex-col py-3">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => cn("py-3 text-base font-medium border-b border-border last:border-0", isActive ? "text-accent" : "text-foreground")}>
                {n.label}
              </NavLink>
            ))}
            <Button asChild variant="outline" className="mt-3"><Link to="/contact" onClick={() => setOpen(false)}>Get Emergency Help</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;