import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { SITE, SERVICES, AREAS } from "@/data/site";
import logoWhite from "@/assets/logo-white.png.asset.json";

export const Footer = () => (
  <footer className="mt-24 bg-primary text-primary-foreground">
    <div className="container-tight grid gap-10 py-14 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-3 font-display text-lg font-bold">
          <img src={logoWhite.url} alt="Emergency Plumbing Ltd" width={48} height={48} className="h-11 w-11 object-contain" />
          Emergency Plumbing Ltd
        </div>
        <p className="mt-4 text-sm text-primary-foreground/75">Trusted 24/7 emergency plumbers serving Cardiff, Rhondda and South Wales. Fast response, fully insured, transparent pricing.</p>
        <div className="mt-5 space-y-2 text-sm">
          <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent"><Mail className="h-4 w-4" /> {SITE.email}</a>
          <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> {SITE.address}</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 24/7 Emergency Callouts</div>
        </div>
      </div>
      <div>
        <div className="font-semibold">Quick Links</div>
        <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
          {[["/","Home"],["/about","About Us"],["/services","Services"],["/areas","Areas We Cover"],["/reviews","Reviews"],["/contact","Contact"]].map(([to,label]) => (
            <li key={to}><Link to={to} className="hover:text-accent">{label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-semibold">Services</div>
        <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
          {SERVICES.map((s) => (<li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-accent">{s.title}</Link></li>))}
        </ul>
      </div>
      <div>
        <div className="font-semibold">Areas We Cover</div>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-primary-foreground/75">
          {AREAS.map((a) => (<li key={a.name}><Link to="/areas" className="hover:text-accent">{a.name}</Link></li>))}
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15">
      <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
        <div>© 2026 Emergency Plumbing Ltd. All rights reserved.</div>
        <div>Powered by The SR Innovations</div>
      </div>
    </div>
  </footer>
);
export default Footer;