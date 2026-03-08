import { motion } from "framer-motion";
import { Phone, Send, Zap, Bot } from "lucide-react";

const steps = [
  { step: 1, title: "Farm & prepare numbers", desc: "Wasync manages WhatsApp phone sessions at scale.", icon: Phone, color: "text-wasync", bg: "bg-wasync/10" },
  { step: 2, title: "Blast your audience", desc: "Wasync broadcasts AI-unique messages to thousands.", icon: Send, color: "text-wasync", bg: "bg-wasync/10" },
  { step: 3, title: "Engage automatically", desc: "Fluxor detects behavior triggers and sends personalized follow-ups.", icon: Zap, color: "text-fluxor", bg: "bg-fluxor/10" },
  { step: 4, title: "Automate operations", desc: "Sentinel AI agent handles conversations and executes backend actions.", icon: Bot, color: "text-sentinel", bg: "bg-sentinel/10" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How It Works</h2>
        <p className="mt-4 text-navy-muted">Four steps to full automation.</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-foreground/5" />

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="premium-card p-8 text-center relative"
          >
            <div className={`${s.bg} rounded-2xl w-14 h-14 flex items-center justify-center mx-auto ${s.color}`}>
              <s.icon size={22} />
            </div>
            <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Step {s.step}
            </span>
            <h3 className="mt-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
