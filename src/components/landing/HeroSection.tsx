import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, ArrowRight } from "lucide-react";

const products = [
  { name: "Wasync", icon: MessageSquare, color: "text-wasync", delay: 0.3 },
  { name: "Fluxor", icon: BarChart3, color: "text-fluxor", delay: 0.5 },
  { name: "Sentinel", icon: Bot, color: "text-sentinel", delay: 0.7 },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute inset-0 radial-glow" />

    <div className="container relative z-10 py-24 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
          <span className="text-foreground">One Ecosystem.</span>
          <br />
          <span className="text-gradient-brand">Full Customer Lifecycle.</span>
        </h1>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
        From customer acquisition to engagement and retention — everything is automated through an integrated AI ecosystem.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground/70 leading-relaxed">
        Our ecosystem is designed for businesses that need end-to-end automation across the entire customer lifecycle. Each product has a specific role and connects into a full pipeline.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all">
          Request Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <a href="#products" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors">
          View Products
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-20 flex justify-center gap-12 md:gap-20">
        {products.map((p) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: p.delay, duration: 0.5 }} className="flex flex-col items-center gap-3 group">
            <div className={`rounded-xl border border-border bg-card p-4 ${p.color} group-hover:scale-110 transition-transform animate-float`} style={{ animationDelay: `${p.delay}s` }}>
              <p.icon size={28} />
            </div>
            <span className={`text-sm font-semibold ${p.color}`}>{p.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
