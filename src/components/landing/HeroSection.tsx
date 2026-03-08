import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, MessageSquare, Bot, BarChart3, Send, Phone, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";

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

/* ── Floating Product Cards ── */

const WasyncCard = () => (
  <div className="w-[260px] rounded-2xl overflow-hidden shadow-xl border border-primary/10" style={{ background: "linear-gradient(145deg, hsl(104 58% 97%), #fff)" }}>
    <div className="px-4 py-3 flex items-center gap-2 border-b border-primary/10">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(104 50% 51%), hsl(115 56% 28%))" }}>
        <MessageSquare size={13} className="text-white" />
      </div>
      <span className="text-xs font-bold text-foreground">Wasync</span>
      <span className="ml-auto text-[9px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Live</span>
    </div>
    <div className="p-4 space-y-2.5">
      <div className="flex items-center gap-2">
        <Phone size={11} className="text-primary" />
        <div className="flex-1 h-2 rounded-full bg-primary/15"><div className="h-full rounded-full w-[88%]" style={{ background: "linear-gradient(90deg, hsl(104 50% 51%), hsl(115 56% 28%))" }} /></div>
        <span className="text-[9px] font-bold text-primary">88%</span>
      </div>
      <div className="flex items-center gap-2">
        <Send size={11} className="text-primary" />
        <div className="flex-1 h-2 rounded-full bg-primary/15"><div className="h-full rounded-full w-[72%]" style={{ background: "linear-gradient(90deg, hsl(104 50% 51%), hsl(115 56% 28%))" }} /></div>
        <span className="text-[9px] font-bold text-primary">72%</span>
      </div>
      <div className="text-[10px] text-muted-foreground mt-1">4,230 messages queued</div>
    </div>
  </div>
);

const SentinelCard = () => (
  <div className="w-[240px] rounded-2xl overflow-hidden shadow-xl border border-sentinel/10" style={{ background: "linear-gradient(145deg, hsl(200 74% 12%), hsl(200 74% 16%))" }}>
    <div className="px-4 py-3 flex items-center gap-2 border-b border-white/10">
      <div className="w-7 h-7 rounded-lg bg-teal/20 flex items-center justify-center">
        <Bot size={13} className="text-teal" />
      </div>
      <span className="text-xs font-bold text-white">Sentinel AI</span>
      <span className="ml-auto flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" /><span className="text-[9px] text-teal">Active</span></span>
    </div>
    <div className="p-4 space-y-2">
      <div className="flex items-start gap-2">
        <Shield size={10} className="text-teal mt-0.5" />
        <div className="text-[10px] text-white/80 bg-white/5 rounded-lg px-2.5 py-1.5">Auto-reply sent ✓</div>
      </div>
      <div className="flex items-start gap-2">
        <Zap size={10} className="text-teal mt-0.5" />
        <div className="text-[10px] text-white/80 bg-white/5 rounded-lg px-2.5 py-1.5">CRM updated • Lead scored</div>
      </div>
      <div className="text-[9px] text-white/40 mt-1">3 actions executed in 1.2s</div>
    </div>
  </div>
);

const FluxorCard = () => (
  <div className="w-[250px] rounded-2xl overflow-hidden shadow-xl border border-fluxor/10" style={{ background: "linear-gradient(145deg, hsl(30 100% 98%), #fff)" }}>
    <div className="px-4 py-3 flex items-center gap-2 border-b border-fluxor/10">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(30 100% 59%), hsl(18 100% 48%))" }}>
        <BarChart3 size={13} className="text-white" />
      </div>
      <span className="text-xs font-bold text-foreground">Fluxor</span>
      <span className="ml-auto text-[9px] font-medium bg-fluxor/10 px-2 py-0.5 rounded-full" style={{ color: "hsl(30 100% 50%)" }}>Tracking</span>
    </div>
    <div className="p-4">
      <div className="flex items-end gap-[3px] h-14 mb-2">
        {[35, 50, 40, 65, 55, 80, 70, 90, 60, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: `hsl(30 100% ${55 + i * 2}% / ${0.4 + i * 0.06})` }} />
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-muted-foreground">
        <span>Engagement</span>
        <span className="font-bold" style={{ color: "hsl(30 100% 50%)" }}>+34%</span>
      </div>
    </div>
  </div>
);

const floatingCards = [
  { id: 0, Card: WasyncCard, baseX: 180, baseY: -60, floatDuration: 4, floatDelay: 0, floatRange: 12 },
  { id: 1, Card: SentinelCard, baseX: 110, baseY: 80, floatDuration: 5, floatDelay: 0.8, floatRange: 10 },
  { id: 2, Card: FluxorCard, baseX: 200, baseY: 240, floatDuration: 4.5, floatDelay: 0.4, floatRange: 14 },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle z-index every 3s
  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((p) => (p + 1) % 3), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-background">
      {/* Soft green radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[20%] w-[700px] h-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "hsl(104 58% 41%)" }} />
        <div className="absolute top-[50%] right-[30%] w-[400px] h-[300px] rounded-full opacity-10 blur-[100px]" style={{ background: "hsl(160 100% 36%)" }} />
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

          {/* Right: Floating Product Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center min-h-[520px]"
            style={{ perspective: "1200px" }}
          >
            {floatingCards.map(({ id, Card, baseX, baseY, floatDuration, floatDelay, floatRange }) => (
              <motion.div
                key={id}
                animate={{
                  y: [baseY, baseY - floatRange, baseY],
                  rotateY: [0, id === activeIndex ? 3 : -1, 0],
                  rotateX: [0, id === activeIndex ? -2 : 1, 0],
                }}
                transition={{
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: floatDelay,
                }}
                className="absolute"
                style={{
                  left: `${baseX}px`,
                  zIndex: id === activeIndex ? 30 : 10 + id,
                  filter: id === activeIndex ? "none" : "brightness(0.97)",
                  transition: "z-index 0.5s, filter 0.5s",
                }}
              >
                <Card />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Seamless bleed into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
