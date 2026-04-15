import heroImg from "@/assets/hero-steel.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImg} alt="Steel manufacturing facility" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-background/20" />
    </div>

    <div className="container relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-6 uppercase flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary" />
            Leading Forging Excellence
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-8"
        >
          Forging the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Future</span> of Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
        >
          Dharma Steel delivers high-performance industrial steel solutions. Precision-engineered, durably forged, and trusted worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a href="#interest">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 h-16 rounded-none transition-all hover:gap-4">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#products">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-white/5 font-bold text-lg px-10 h-16 rounded-none backdrop-blur-sm">
              Our Products
            </Button>
          </a>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
