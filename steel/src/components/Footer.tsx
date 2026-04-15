import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-steel-dark py-20 border-t border-border/50">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-tighter">
            DHARMA <span className="text-primary">STEEL</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Forging the future of infrastructure with precision-engineered steel solutions. Quality, reliability, and strength since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-foreground font-black text-xs uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "About", "Products", "Why Us", "Admin"].map((l) => (
              <li key={l}>
                <a 
                  href={l === "Admin" ? "/admin" : `#${l.toLowerCase().replace(" ", "-")}`} 
                  className="text-muted-foreground hover:text-primary text-xs font-bold uppercase tracking-tight transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-foreground font-black text-xs uppercase tracking-widest mb-6">Capabilities</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-muted-foreground">
            <li className="hover:text-primary cursor-default transition-colors">MS Sheets</li>
            <li className="hover:text-primary cursor-default transition-colors">GI Sheets</li>
            <li className="hover:text-primary cursor-default transition-colors">Stainless Steel</li>
            <li className="hover:text-primary cursor-default transition-colors">Hot Rolled</li>
            <li className="hover:text-primary cursor-default transition-colors">Cold Rolled</li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-black text-xs uppercase tracking-widest mb-6">Network</h4>
          <div className="flex gap-4 mb-8">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Connect with our sales team.</p>
        </div>
      </div>

      <div className="border-t border-border/50 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-[0.2em]">© 2026 Dharma Steel. Industrial Forging Division.</p>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <p className="text-primary/50">v2.4.0</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
