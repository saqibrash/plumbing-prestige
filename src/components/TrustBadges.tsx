import { Clock, ShieldCheck, Star, Zap, BadgeCheck } from "lucide-react";

const items = [
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: Zap, label: "30–60 Min Response" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "Google Reviewed" },
  { icon: BadgeCheck, label: "No Hidden Costs" },
];

export const TrustBadges = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 ${variant === "dark" ? "text-primary-foreground/85" : "text-primary"}`}>
    {items.map((it) => (
      <div key={it.label} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider md:text-sm">
        <it.icon className="h-4 w-4 text-accent" />
        {it.label}
      </div>
    ))}
  </div>
);
export default TrustBadges;