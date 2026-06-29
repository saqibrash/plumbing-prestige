import { Link } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export default function ThankYou() {
  return (
    <>
      <Seo title="Thank you | Emergency Plumbing Ltd" description="Thanks for contacting Emergency Plumbing Ltd. We'll be in touch shortly." path="/thank-you" />
      <section className="bg-hero-gradient py-24 text-primary-foreground md:py-32">
        <div className="container-tight max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
          <h1 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">Thanks — we've got your request</h1>
          <p className="mt-4 text-primary-foreground/85">A member of our team will call you back as fast as possible. If your issue is urgent, please call us directly for the quickest response.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow"><a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call {SITE.phoneDisplay}</a></Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/">Back to homepage</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}