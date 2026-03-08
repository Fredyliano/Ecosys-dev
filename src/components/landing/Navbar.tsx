import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-2 shadow-sm"
          : "bg-background/60 backdrop-blur-sm py-4"
      }`}
      style={{ borderBottom: "1px solid hsl(200 20% 90% / 0.5)" }}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span className="text-gradient-brand">Ecosystem</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Products", "How it Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-navy-muted hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary-glow px-5 py-2.5 text-sm">
            Request Demo <ArrowRight size={14} />
          </button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container py-6 flex flex-col gap-4">
              {["Products", "How it Works", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm text-navy-muted"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary-glow px-5 py-2.5 text-sm w-fit">
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
