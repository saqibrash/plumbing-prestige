import { Link, useParams, Navigate } from "react-router-dom";
import { CheckCircle2, Phone, ArrowRight, AlertTriangle } from "lucide-react";
import { SERVICES, SITE } from "@/data/site";
import { SERVICE_IMAGES } from "@/data/service-images";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const related = service.related.map((r) => SERVICES.find((s) => s.slug === r)).filter(Boolean) as typeof SERVICES;

  return (
    <>
      <Seo
        title={`${service.title} in Cardiff & South Wales | Emergency Plumbing Ltd`}
        description={service.short}
        path={`/services/${service.slug}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            areaServed: ["Cardiff","Rhondda","South Wales"],
            provider: { "@type": "Plumber", name: SITE.name, telephone: SITE.phone },
            description: service.intro,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <PageHero eyebrow="Service" title={service.title} subtitle={service.short} crumbs={[{label:"Home",to:"/"},{label:"Services",to:"/services"},{label:service.title}]} />

      <section className="py-14 md:py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-[1.6fr,1fr]">
          <div>
            <img src={SERVICE_IMAGES[service.slug]} alt={`${service.title} by Emergency Plumbing Ltd`} width={1024} height={768} className="mb-8 w-full rounded-2xl object-cover shadow-card" loading="lazy" />
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-foreground/80 md:text-base"><strong className="text-primary">Need help right now?</strong> Call our 24/7 team on <a href={SITE.phoneHref} className="font-semibold text-accent">{SITE.phoneDisplay}</a> — we aim to respond within 30 to 60 minutes.</p>
              </div>
            </div>

            <div className="prose prose-slate mt-8 max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">{service.intro}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-primary">Common problems we cover</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2 rounded-xl border border-border bg-background p-4 shadow-card">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-primary">Why choose Emergency Plumbing Ltd</h2>
              <ul className="mt-5 space-y-3">
                {service.why.map((p) => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{p}</span></li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-primary">What happens when we arrive</h2>
              <ol className="mt-5 space-y-3">
                {service.arrival.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i+1}</span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 rounded-2xl bg-hero-gradient p-6 text-primary-foreground md:p-8">
              <h3 className="font-display text-2xl font-bold">Need {service.title.toLowerCase()} help today?</h3>
              <p className="mt-2 text-primary-foreground/85">Call our 24/7 team for fast response across Cardiff, Rhondda and South Wales.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow"><a href={SITE.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call {SITE.phoneDisplay}</a></Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/contact">Request a Plumber</Link></Button>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-primary">Frequently asked questions</h2>
              <div className="mt-5"><FaqAccordion items={service.faqs} /></div>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold text-primary">Related services</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/services/${r.slug}`} className="group rounded-xl border border-border bg-background p-5 shadow-card hover:border-accent/50">
                      <div className="font-display font-bold text-primary">{r.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{r.short}</div>
                      <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ContactForm defaultService={service.slug} />
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}