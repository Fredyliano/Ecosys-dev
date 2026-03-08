import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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

const stats = [
  { value: "10x", label: "Faster Support" },
  { value: "85%", label: "Automation Rate" },
  { value: "10,000+", label: "Messages/Day" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-background">
    {/* Soft green radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-[30%] right-[20%] w-[700px] h-[500px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "hsl(104 58% 41%)" }}
      />
      <div
        className="absolute top-[50%] right-[30%] w-[400px] h-[300px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "hsl(160 100% 36%)" }}
      />
    </div>

    <div className="container relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05]">
            <AnimatedText text="One Ecosystem." className="text-foreground block" />
            <AnimatedText text="Full Customer" className="text-gradient-brand block mt-2" />
            <AnimatedText text="Lifecycle." className="text-gradient-brand block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            From WhatsApp farming to AI-driven CRM — Sentinel automates every stage of your player communication pipeline. Zero manual work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="btn-primary-glow px-8 py-4 text-sm group">
              Get a Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Watch How It Works <Play size={14} className="fill-primary" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5">
                <span className="text-sm font-extrabold text-primary">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Ecosystem Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center min-h-[500px]"
        >
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
            {/* W to S */}
            <motion.line
              x1="250" y1="100" x2="150" y2="350"
              stroke="hsl(30 100% 59%)" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
            {/* W to F */}
            <motion.line
              x1="250" y1="100" x2="370" y2="350"
              stroke="hsl(160 100% 36%)" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            />
            {/* S to F */}
            <motion.line
              x1="150" y1="350" x2="370" y2="350"
              stroke="hsl(104 58% 41%)" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </svg>

          {/* Wasync circle */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-extrabold shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(104 58% 41%), hsl(160 100% 36%))" }}>
              W
            </div>
            <span className="mt-2 text-sm font-semibold text-foreground">Wasync</span>
          </motion.div>

          {/* Sentinel circle */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[15%] left-[15%] flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(30 100% 59%))" }}>
              S
            </div>
            <span className="mt-2 text-sm font-semibold text-foreground">Sentinel</span>
          </motion.div>

          {/* Fluxor circle */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] right-[10%] flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(30 100% 50%), hsl(30 100% 65%))" }}>
              F
            </div>
            <span className="mt-2 text-sm font-semibold text-foreground">Fluxor</span>
          </motion.div>

          {/* Floating labels */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-[25%] left-[5%] bg-card rounded-full px-4 py-2 shadow-md text-xs font-medium text-foreground"
          >
            97% SLA
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-[15%] right-[2%] bg-card rounded-full px-4 py-2 shadow-md text-xs font-medium text-foreground flex items-center gap-1"
          >
            AI Rewrite <span className="text-primary">✓</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-[38%] left-[2%] bg-card rounded-full px-4 py-2 shadow-md text-xs font-medium text-foreground"
          >
            42s First Response
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute top-[45%] right-[0%] bg-card rounded-full px-4 py-2 shadow-md text-xs font-medium text-foreground"
          >
            Anti-ban Active
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Diagonal bleed */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
        <path d="M0,80 L1440,0 L1440,80 Z" fill="hsl(0 0% 100%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
