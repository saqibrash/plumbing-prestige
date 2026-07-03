import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES, SITE } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  phone: z.string().trim().min(7, "Phone required").max(30),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  location: z.string().trim().min(1, "Location required").max(120),
  service: z.string().min(1, "Choose a service"),
  urgency: z.string().min(1, "Choose urgency"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const ContactForm = ({ defaultService }: { defaultService?: string }) => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(defaultService || "");
  const [urgency, setUrgency] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form)), service, urgency };
    const result = schema.safeParse(data);
    if (!result.success) { toast.error(result.error.issues[0]?.message || "Please check the form"); return; }
    setLoading(true);
    try {
      const serviceTitle = SERVICES.find((s) => s.slug === service)?.title || service;
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New plumbing lead — ${serviceTitle} (${data.urgency})`,
          _template: "table",
          _captcha: "false",
          name: data.name,
          phone: data.phone,
          email: data.email || "(not provided)",
          location: data.location,
          service: serviceTitle,
          urgency: data.urgency,
          message: data.message || "(none)",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      nav("/thank-you");
    } catch {
      toast.error("Could not send. Please call us on " + SITE.phoneDisplay);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-background p-6 shadow-card md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5"><Label htmlFor="name">Your Name *</Label><Input id="name" name="name" required maxLength={80} placeholder="John Smith" /></div>
        <div className="grid gap-1.5"><Label htmlFor="phone">Phone Number *</Label><Input id="phone" name="phone" required type="tel" maxLength={30} placeholder="07…" /></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" maxLength={120} placeholder="you@example.com" /></div>
        <div className="grid gap-1.5"><Label htmlFor="location">Location / Town *</Label><Input id="location" name="location" required maxLength={120} placeholder="Cardiff, Rhondda…" /></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5">
          <Label>Service Needed *</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (<SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>))}
              <SelectItem value="other">Other / Not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Urgency *</Label>
          <Select value={urgency} onValueChange={setUrgency}>
            <SelectTrigger><SelectValue placeholder="How urgent?" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="emergency">Emergency — ASAP</SelectItem>
              <SelectItem value="today">Same day</SelectItem>
              <SelectItem value="this-week">This week</SelectItem>
              <SelectItem value="quote">Just a quote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-1.5"><Label htmlFor="message">Brief description</Label><Textarea id="message" name="message" maxLength={1000} rows={4} placeholder="Tell us what's happening…" /></div>
      <Button type="submit" size="lg" disabled={loading} className="bg-accent text-accent-foreground hover:bg-accent-glow">
        {loading ? "Sending…" : "Request a Plumber"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">For genuine emergencies, please call us directly for the fastest response.</p>
    </form>
  );
};
export default ContactForm;