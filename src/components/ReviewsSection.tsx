import { Star, ShieldCheck, Phone, ExternalLink, PenSquare } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export const ReviewsSection = () => {
  const { googleRating, googleReviewCount, googleReviewsUrl, googleWriteReviewUrl, phoneHref, phoneDisplay } = SITE;
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <ShieldCheck className="h-3.5 w-3.5" /> Verified Google Rating
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">Rated {googleRating.toFixed(1)} out of 5 on Google</h2>
          <p className="mt-3 text-muted-foreground">Trusted by homeowners and businesses across Cardiff, Rhondda and South Wales — read every one of our genuine Google reviews directly on Google.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-[1.1fr,1fr]">
          <div className="rounded-2xl bg-background p-8 text-center shadow-card">
            <div className="font-display text-6xl font-extrabold text-primary">{googleRating.toFixed(1)}</div>
            <div className="mt-2 flex items-center justify-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-gold" />)}
            </div>
            <div className="mt-3 text-sm font-semibold text-primary">{googleReviewCount}+ Google reviews</div>
            <div className="mt-1 text-xs text-muted-foreground">Verified by Google — updated regularly</div>
            <Button asChild size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent-glow">
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Read all reviews on Google
              </a>
            </Button>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-background p-8 shadow-card">
            <h3 className="font-display text-xl font-bold text-primary">Why customers choose us</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 shrink-0 fill-gold text-gold" /> Consistent 5-star service across South Wales</li>
              <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 shrink-0 fill-gold text-gold" /> Open 24 hours, fast response on emergencies</li>
              <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 shrink-0 fill-gold text-gold" /> Transparent pricing — no hidden call-out fees</li>
              <li className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 shrink-0 fill-gold text-gold" /> Fully insured, qualified plumbers</li>
            </ul>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-glow">
                <a href={phoneHref}><Phone className="mr-2 h-4 w-4" /> Call {phoneDisplay}</a>
              </Button>
              <Button asChild variant="outline">
                <a href={googleWriteReviewUrl} target="_blank" rel="noopener noreferrer"><PenSquare className="mr-2 h-4 w-4" /> Leave a review</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReviewsSection;