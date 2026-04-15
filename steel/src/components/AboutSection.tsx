import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Industry-leading quality standards",
  "Decades of trusted experience",
  "Pan-India delivery network",
  "Custom sizes & specifications",
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background overflow-hidden">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Legacy of Strength</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Commitment to <span className="text-primary">Forging Excellence</span> for 25+ Years
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Dharma Steel is a premier supplier of high-performance steel solutions. We combine advanced metallurgy with reliable delivery to empower India's industrial backbone. 
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <motion.div 
                key={p} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-bold text-sm uppercase tracking-tight">{p}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative pt-10"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/20" />
          <div className="bg-card border border-border/50 p-2 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" 
              alt="Steel facility" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-primary p-6 z-20 hidden lg:block">
            <p className="text-primary-foreground font-black text-4xl">ISO</p>
            <p className="text-primary-foreground/80 text-xs font-bold uppercase tracking-widest">9001:2015</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
