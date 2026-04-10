import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy py-14">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-3">
            DHARMA <span className="text-gold">STEEL</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Your trusted partner for premium steel sheets. Quality, reliability, and strength — guaranteed.
          </p>
        </div>

        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Products", "Why Us", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>MS Sheets</li>
            <li>GI Sheets</li>
            <li>Stainless Steel</li>
            <li>Hot Rolled</li>
            <li>Cold Rolled</li>
          </ul>
        </div>

        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon className="w-4 h-4 text-primary-foreground/70" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="text-primary-foreground/50 text-sm">© 2026 Dharma Steel. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
