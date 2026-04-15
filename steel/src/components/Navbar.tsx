import { useState } from "react";
import { Menu, X, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const ADMIN_PIN = "1122";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleAdminVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      localStorage.setItem("isAdmin", "true");
      setPinModalOpen(false);
      setPin("");
      toast.success("Admin Access Granted");
      navigate("/admin");
    } else {
      setError(true);
      toast.error("Incorrect PIN");
      setPin("");
      setTimeout(() => setError(false), 500);
    }
  };

  const handleAdminClick = () => {
    if (localStorage.getItem("isAdmin") === "true") {
      navigate("/admin");
    } else {
      setPinModalOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
          DHARMA <span className="text-primary">STEEL</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4 border-l border-border pl-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleAdminClick}
              className="text-muted-foreground hover:text-primary font-bold uppercase tracking-widest text-[10px]"
            >
              <Lock className="w-3 h-3 mr-2" /> Admin
            </Button>
            
            <Link to="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Phone className="w-4 h-4 mr-1" /> Request a Quote
              </Button>
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <Dialog open={pinModalOpen} onOpenChange={setPinModalOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border/50 rounded-none shadow-2xl">
          <DialogHeader className="text-center">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Admin Portal</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <form onSubmit={handleAdminVerify} className="space-y-6">
              <div className="text-center">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-widest">Enter Security PIN</p>
                <Input
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className={`text-center text-3xl tracking-[1em] font-black h-16 bg-muted/30 border-border/50 rounded-none focus-visible:ring-primary ${error ? "animate-shake border-red-500" : ""}`}
                  autoFocus
                />
                {error && <p className="text-red-500 text-[10px] font-black uppercase mt-2">Invalid Access PIN</p>}
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest rounded-none"
              >
                UNLOCK DASHBOARD
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {open && (
        <div className="lg:hidden bg-card border-t border-border pb-4">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-muted-foreground hover:text-primary text-sm font-medium">
              {l.label}
            </Link>
          ))}
          <div className="px-6 pt-4 border-t border-border mt-2 space-y-4">
            <Button 
              variant="outline" 
              onClick={() => { setOpen(false); handleAdminClick(); }}
              className="w-full border-border/50 text-muted-foreground hover:text-primary font-bold uppercase tracking-widest text-[10px]"
            >
              <Lock className="w-3 h-3 mr-2" /> Admin Access
            </Button>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
