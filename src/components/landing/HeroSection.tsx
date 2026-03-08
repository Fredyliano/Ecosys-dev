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
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Aurora mesh gradient background */}
    <div className="absolute inset-0" style={{ background: "hsl(200 45% 11%)" }}>
      <div
        className="aurora-blob-1 absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "hsl(160 84% 36%)", top: "10%", left: "15%" }}
      />
      <div
        className="aurora-blob-2 absolute w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
        style={{ background: "hsl(27 100% 48%)", top: "30%", right: "10%" }}
      />
      <div
        className="aurora-blob-3 absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "hsl(180 60% 30%)", bottom: "0%", left: "40%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>

    <div className="container relative z-10 py-32 text-center">
      <div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
          <AnimatedText text="One Ecosystem." className="text-white block" />
          <br />
          <AnimatedText text="Full Customer Lifecycle." className="text-gradient-brand block" />
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-white"
      >
        From customer acquisition to engagement and retention — everything is automated through an integrated AI ecosystem.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-white/80"
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
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
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

    {/* Diagonal bleed / slope at bottom */}
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: "120px" }}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path d="M0 120L0 60L720 0L1440 60L1440 120L0 120Z" fill="hsl(0, 0%, 100%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
