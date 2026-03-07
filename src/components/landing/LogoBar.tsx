import { motion } from "framer-motion";

const logos = ["TechCorp", "Nova Labs", "Vertex Digital", "ScaleHub", "DataForge"];

const LogoBar = () => (
  <section className="border-y border-border/50 py-12 overflow-hidden">
    <div className="container text-center mb-8">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Trusted by innovative teams</p>
    </div>
    <div className="relative">
      <div className="flex animate-slide-logos gap-16 w-max">
        {[...logos, ...logos].map((name, i) => (
          <motion.span key={i} whileHover={{ opacity: 1 }} className="text-xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors whitespace-nowrap select-none">
            {name}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default LogoBar;
