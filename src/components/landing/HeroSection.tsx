import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, MessageSquare, Bot, BarChart3, Send, Phone, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import wasyncImg from "../Image/wasync.png";
import sentinelImg from "../Image/sentinel.png";
import fluxorImg from "../Image/plan.png";

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
  <img
    src={wasyncImg}
    alt="Wasync"
    className="w-[450px] rounded-2xl shadow-2xl"
  />

);

const SentinelCard = () => (
  <img
    src={sentinelImg}
    alt="sentinel"
    className="w-[450px] rounded-2xl shadow-2xl"
  />
);


const floatingCards = [
  { id: 0, Card: WasyncCard, baseX: 150, baseY: -60, floatDuration: 4, floatDelay: 0, floatRange: 12 },
  { id: 1, Card: SentinelCard, baseX: 0, baseY: 80, floatDuration: 5, floatDelay: 0.8, floatRange: 10 },
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
              <span className="block whitespace-nowrap">
                <AnimatedText text="One Ecosystem" className="text-foreground" />
              </span>

              <span className="block mt-2">
                <AnimatedText text="Full Customer" className="text-gradient-brand" />
              </span>

              <span className="block">
                <AnimatedText text="Lifecycle" className="text-gradient-brand" />
              </span>
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
