import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import { SITE } from "@/data/site";

export const StickyMobileBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground">
      <Phone className="h-4 w-4" /> Call Now
    </a>
    <Link to="/contact" className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground">
      <MessageSquare className="h-4 w-4" /> Request Help
    </Link>
  </div>
);
export default StickyMobileBar;