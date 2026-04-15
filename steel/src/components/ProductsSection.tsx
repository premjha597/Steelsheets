import mildSteel from "@/assets/mild-steel.jpg";
import galvanized from "@/assets/galvanized-steel.jpg";
import stainless from "@/assets/stainless-steel.jpg";
import hotRolled from "@/assets/hot-rolled.jpg";
import coldRolled from "@/assets/cold-rolled.jpg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Mild Steel Sheets",
    img: mildSteel,
    desc: "Versatile and cost-effective, ideal for general fabrication, construction, and automotive applications.",
    features: ["Formable", "Machinable", "Wide Range"],
  },
  {
    name: "Galvanized Sheets",
    img: galvanized,
    desc: "Zinc-coated for superior corrosion resistance, perfect for roofing, ducting, and outdoor structures.",
    features: ["Corrosion-Proof", "Durable", "Zinc-Coat"],
  },
  {
    name: "Stainless Steel",
    img: stainless,
    desc: "Premium grade stainless steel with mirror finish for food processing, medical equipment, and architectural use.",
    features: ["Rust-proof", "Hygienic", "High Strength"],
  },
  {
    name: "Hot Rolled Sheets",
    img: hotRolled,
    desc: "Manufactured at high temperatures for structural steel, shipbuilding, and heavy machinery applications.",
    features: ["Tensile", "Structural", "Tough"],
  },
  {
    name: "Cold Rolled Sheets",
    img: coldRolled,
    desc: "Precision-finished with smooth surface for appliances, automotive panels, and precision components.",
    features: ["Precision", "Flatness", "Smooth"],
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 bg-background relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    
    <div className="container relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our Product Lineup
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            We supply a comprehensive range of premium steel products engineered to meet the most demanding industrial requirements.
          </motion.p>
        </div>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <a href="#interest" className="group flex items-center gap-2 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
            VIEW ALL PRODUCTS <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-card border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="text-[10px] uppercase tracking-wider font-bold bg-secondary text-muted-foreground px-3 py-1 border border-border">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover bar */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
