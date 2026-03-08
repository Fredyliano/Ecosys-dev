import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, ArrowRight } from "lucide-react";

const products = [
  { name: "Wasync", icon: MessageSquare, color: "text-wasync", bg: "bg-wasync/10", delay: 0.3 },
  { name: "Fluxor", icon: BarChart3, color: "text-fluxor", bg: "bg-fluxor/10", delay: 0.5 },
  { name: "Sentinel", icon: Bot, color: "text-sentinel", bg: "bg-sentinel/10", delay: 0.7 },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Subtle radial glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container relative z-10 py-32 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-foreground">
          One Ecosystem.
          <br />
          <span className="text-gradient-brand">Full Customer Lifecycle.</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-navy-muted leading-relaxed"
      >
        From customer acquisition to engagement and retention — everything is automated through an integrated AI ecosystem.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed"
      >
        Our ecosystem is designed for businesses that need end-to-end automation across the entire customer lifecycle.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          Request Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <a
          href="#products"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
        >
          View Products
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-24 flex justify-center gap-12 md:gap-20"
      >
        {products.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: p.delay, duration: 0.5 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div
              className={`rounded-2xl ${p.bg} p-5 ${p.color} group-hover:scale-110 transition-transform animate-float`}
              style={{ animationDelay: `${p.delay}s` }}
            >
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