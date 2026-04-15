import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Dharma Steel has been our primary supplier for over 5 years. Their consistency in quality and delivery timing is unmatched in the industry.",
    author: "Rajesh Kumar",
    company: "BuildRight Infrastructure",
  },
  {
    quote: "The structural integrity of their MS sheets is superior. We've used them in several high-profile projects with zero complaints.",
    author: "Anita Sharma",
    company: "Apex Manufacturing",
  },
  {
    quote: "A truly reliable partner. Their customer support team is knowledgeable and helped us select the right grade for our specific architectural needs.",
    author: "Sanjay Mehta",
    company: "Modern Designs Ltd.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background overflow-hidden relative">
    <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] -translate-y-1/2" />
    
    <div className="container relative z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
        >
          Partnership
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          What Industry Leaders Say
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 bg-card border border-border/50 relative group"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6 group-hover:text-primary transition-colors duration-500" />
            <p className="text-muted-foreground italic mb-8 relative z-10 leading-relaxed pt-6">
               "{t.quote}"
            </p>
            <div className="border-t border-border/50 pt-6">
              <p className="text-foreground font-black text-xs uppercase tracking-widest">{t.author}</p>
              <p className="text-primary text-[10px] uppercase font-bold tracking-tighter mt-1">{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
