import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-20 border-t border-foreground/5">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="text-lg font-extrabold text-gradient-brand">Ecosystem</span>
          <p className="mt-3 text-xs text-muted-foreground">Full customer lifecycle automation.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Wasync</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Fluxor</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Sentinel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-foreground/5 text-center text-xs text-muted-foreground">
        © 2026 Ecosystem. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;