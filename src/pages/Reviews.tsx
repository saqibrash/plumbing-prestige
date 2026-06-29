import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";

export default function Reviews() {
  return (
    <>
      <Seo title="Reviews | Emergency Plumbing Ltd — Cardiff & South Wales" description="Read Google reviews from real customers of Emergency Plumbing Ltd across Cardiff, Rhondda and South Wales." path="/reviews" />
      <PageHero eyebrow="Reviews" title="What our customers say" subtitle="Real Google reviews from homeowners and businesses across South Wales." crumbs={[{label:"Home",to:"/"},{label:"Reviews"}]} />
      <ReviewsSection />
      <CTASection />
    </>
  );
}