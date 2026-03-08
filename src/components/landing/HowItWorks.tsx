import { motion } from "framer-motion";
import { Phone, Send, Zap, Bot } from "lucide-react";
import Interactive3DCard from "./Interactive3DCard";

const steps = [
  {
    step: 1,
    title: "Farm & prepare numbers",
    desc: "Wasync manages WhatsApp phone sessions at scale — farming, warming, and rotating senders automatically.",
    icon: Phone,
    color: "text-primary",
    bg: "bg-primary/10",
    illustration: (
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-10 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          <Phone size={16} className="text-primary" />
        </div>
        <div className="w-6 h-[2px] bg-primary/30" />
        <div className="w-10 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          <Phone size={16} className="text-primary" />
        </div>
        <div className="w-6 h-[2px] bg-primary/30" />
        <div className="w-10 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          <Phone size={16} className="text-primary" />
        </div>
      </div>
    ),
  },
  {
    step: 2,
    title: "Blast your audience",
    desc: "Wasync broadcasts AI-unique messages to thousands with anti-ban tech and smart delivery scheduling.",
    icon: Send,
    color: "text-primary",
    bg: "bg-primary/10",
    illustration: (
      <div className="mt-4 space-y-2">
        {[85, 60, 40].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
              <Send size={8} className="text-primary" />
            </div>
            <div className="h-2 rounded-full bg-primary/20" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    step: 3,
    title: "Engage automatically",
    desc: "Fluxor detects behavior triggers and sends personalized follow-ups based on real-time segmentation.",
    icon: Zap,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
    illustration: (
      <div className="mt-4 flex items-end gap-1 h-12">
        {[30, 55, 40, 70, 50, 85, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background: `hsl(30 100% 59% / ${0.2 + i * 0.1})`,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    step: 4,
    title: "Automate operations",
    desc: "Sentinel AI agent handles conversations and executes backend actions — fully autonomous.",
    icon: Bot,
    color: "text-sentinel",
    bg: "bg-sentinel/10",
    illustration: (
      <div className="mt-4 space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-sentinel/15 flex items-center justify-center shrink-0">
            <Bot size={8} className="text-sentinel" />
          </div>
          <div className="rounded-xl bg-sentinel/10 px-3 py-1.5 text-[10px] text-foreground">
            Order shipped ✓
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row-reverse">
          <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0" />
          <div className="rounded-xl bg-secondary/80 px-3 py-1.5 text-[10px] text-foreground">
            Send invoice?
          </div>
        </div>
      </div>
    ),
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-32 relative overflow-hidden">
    {/* Parallax blob */}
    <motion.div
      className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] pointer-events-none"
      style={{ background: "hsl(var(--tea-green))" }}
      initial={{ y: 0 }}
      whileInView={{ y: -40 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How It Works</h2>
        <p className="mt-4 text-navy-muted">Four steps to full automation.</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 relative pt-6">
        {steps.map((s, i) => (
          <Interactive3DCard key={s.step} index={i} className="h-full mt-5">
            <div className="p-8 pt-10 text-center h-full flex flex-col relative">
              {/* Step number badge — fully visible above card */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-[0_4px_14px_hsl(104_58%_41%/0.35)]">
                  {s.step}
                </div>
              </div>

              {/* Illustration */}
              <div className="mt-4 mb-4 min-h-[80px] flex flex-col justify-center">
                {s.illustration}
              </div>

              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
            </div>
          </Interactive3DCard>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
