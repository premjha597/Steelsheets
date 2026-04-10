import heroImg from "@/assets/hero-steel.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Steel manufacturing facility" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
    </div>

    <div className="container relative z-10 py-32 md:py-0">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-gold font-semibold tracking-widest text-sm mb-4 uppercase">Trusted Steel Supplier</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Strong Steel.<br />
          <span className="text-gold">Stronger Trust.</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
          Dharma Steel is your reliable partner for premium-quality steel sheets — built to last, priced to compete, and delivered on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#products">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary font-semibold text-base px-8">
              Explore Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
              Get a Quote
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
