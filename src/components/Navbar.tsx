import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold text-primary-foreground tracking-wide">
          DHARMA <span className="text-gold">STEEL</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact">
            <Button size="sm" className="bg-gold hover:bg-gold/90 text-primary font-semibold">
              <Phone className="w-4 h-4 mr-1" /> Request a Quote
            </Button>
          </a>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button size="sm" className="bg-gold hover:bg-gold/90 text-primary font-semibold w-full">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
