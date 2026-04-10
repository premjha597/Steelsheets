import { Shield, Gem, BadgeDollarSign, Handshake } from "lucide-react";

const features = [
  { icon: Gem, label: "High Quality" },
  { icon: Shield, label: "Durable" },
  { icon: BadgeDollarSign, label: "Affordable" },
  { icon: Handshake, label: "Trusted Supplier" },
];

const FeaturesBar = () => (
  <section className="bg-primary py-8">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
      {features.map((f) => (
        <div key={f.label} className="flex items-center justify-center gap-3 text-primary-foreground">
          <f.icon className="w-7 h-7 text-gold" />
          <span className="font-semibold text-sm md:text-base">{f.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesBar;
