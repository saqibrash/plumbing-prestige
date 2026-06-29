import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { REVIEWS, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export const ReviewsSection = ({ limit }: { limit?: number }) => {
  const items = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 flex items-center justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold" />)}
          </div>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Trusted by customers across South Wales</h2>
          <p className="mt-3 text-muted-foreground">Real Google reviews from our customers — and we're getting more every month.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <div key={r.name} className="rounded-2xl bg-background p-6 shadow-card">
              <Quote className="h-6 w-6 text-accent/60" />
              <div className="mt-2 flex gap-0.5 text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}</div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow">
            <a href={SITE.phoneHref}>Call a Google reviewed plumber</a>
          </Button>
          <Button asChild size="lg" variant="outline"><Link to="/reviews">Read more reviews</Link></Button>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">Live Google reviews widget can be integrated here.</div>
      </div>
    </section>
  );
};
export default ReviewsSection;