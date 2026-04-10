import { Award, TrendingDown, Truck, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Award, title: "Premium Quality Materials", desc: "Every sheet undergoes rigorous quality checks to ensure top-grade material reaches you." },
  { icon: TrendingDown, title: "Competitive Pricing", desc: "We offer the best prices in the market without compromising on quality or service." },
  { icon: Truck, title: "Fast Delivery", desc: "Our nationwide logistics network ensures timely delivery to your doorstep." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "With 1000+ happy clients, our commitment to your success speaks for itself." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 bg-primary">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-2">Our Promise</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">Why Choose Dharma Steel</h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          We go beyond supplying steel — we build partnerships that last.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center group">
            <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/25 transition-colors">
              <r.icon className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-primary-foreground font-bold text-lg mb-2">{r.title}</h3>
            <p className="text-primary-foreground/65 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
