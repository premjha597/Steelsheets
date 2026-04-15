import { Award, TrendingDown, Truck, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Award, title: "Premium Quality", desc: "Every sheet undergoes rigorous quality checks to ensure top-grade material reaches you." },
  { icon: TrendingDown, title: "Lean Pricing", desc: "We offer the best prices in the market without compromising on quality or service." },
  { icon: Truck, title: "Swift Logistics", desc: "Our nationwide logistics network ensures timely delivery to your doorstep." },
  { icon: ThumbsUp, title: "Elite Service", desc: "With 1000+ happy clients, our commitment to your success speaks for itself." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 bg-secondary/30 relative border-y border-border/50">
    <div className="container">
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
        >
          Our Edge
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6"
        >
          Why Industry Leaders Choose Us
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Forging partnerships that last through reliability, precision, and strength.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map((r, i) => (
          <motion.div 
            key={r.title} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group p-8 bg-card border border-border/50 hover:border-primary/50 transition-all"
          >
            <div className="w-16 h-16 rounded-none bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
              <r.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
            </div>
            <h3 className="text-foreground font-black text-xs uppercase tracking-widest mb-4">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
