import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, ArrowRight } from "lucide-react";

const products = [
  { name: "Wasync", icon: MessageSquare, color: "text-wasync", bg: "bg-wasync/10", delay: 0.6, floatDuration: 3.2 },
  { name: "Fluxor", icon: BarChart3, color: "text-fluxor", bg: "bg-fluxor/10", delay: 0.8, floatDuration: 3.8 },
  { name: "Sentinel", icon: Bot, color: "text-sentinel", bg: "bg-sentinel/10", delay: 1.0, floatDuration: 4.4 },
];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.4, ease: "easeOut" as const },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
    {/* Soft warm radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "hsl(27 100% 59%)" }}
      />
      <div
        className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "hsl(18 100% 48%)" }}
      />
    </div>

    <div className="container relative z-10 py-32 text-center">
      <div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
          <AnimatedText text="One Ecosystem." className="text-navy block" />
          <br />
          <AnimatedText text="Full Customer Lifecycle." className="text-gradient-brand block" />
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-muted-foreground"
      >
        From customer acquisition to engagement and retention — everything is automated through an integrated AI ecosystem.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground/80"
      >
        Our ecosystem is designed for businesses that need end-to-end automation across the entire customer lifecycle.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="btn-primary-glow px-10 py-4 text-sm group">
          Request Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <a
          href="#products"
          className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-8 py-3.5 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
        >
          View Products
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
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
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: p.floatDuration, repeat: Infinity, ease: "easeInOut" }}
              className={`rounded-2xl ${p.bg} p-5 ${p.color} group-hover:scale-110 transition-transform`}
            >
              <p.icon size={28} />
            </motion.div>
            <span className={`text-sm font-semibold ${p.color}`}>{p.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
