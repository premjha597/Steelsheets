import { Shield, Gem, BadgeDollarSign, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Gem, label: "High Quality" },
  { icon: Shield, label: "Durable" },
  { icon: BadgeDollarSign, label: "Affordable" },
  { icon: Handshake, label: "Trusted Supplier" },
];

const FeaturesBar = () => (
  <section className="bg-secondary/50 backdrop-blur-sm py-10 border-y border-border/50">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-center gap-4 text-foreground group"
          >
            <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
              <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
            </div>
            <span className="font-bold text-xs md:text-sm uppercase tracking-[0.2em]">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesBar;
