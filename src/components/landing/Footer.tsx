import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-20 border-t border-foreground/5 bg-foreground">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="text-lg font-extrabold text-gradient-brand">Ecosystem</span>
          <p className="mt-3 text-xs text-white/50">Full customer lifecycle automation.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">Wasync</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fluxor</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sentinel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Github size={18} /></a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        © 2026 Ecosystem. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
