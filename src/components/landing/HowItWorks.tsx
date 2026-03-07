import { motion } from "framer-motion";
import { Phone, Send, Zap, Bot, ArrowRight } from "lucide-react";

const steps = [
  { step: 1, title: "Farm & prepare numbers", desc: "Wasync manages WhatsApp phone sessions at scale.", icon: Phone, color: "text-wasync" },
  { step: 2, title: "Blast your audience", desc: "Wasync broadcasts AI-unique messages to thousands.", icon: Send, color: "text-wasync" },
  { step: 3, title: "Engage automatically", desc: "Fluxor detects behavior triggers and sends personalized follow-ups.", icon: Zap, color: "text-fluxor" },
  { step: 4, title: "Automate operations", desc: "Sentinel AI agent handles conversations and executes backend actions.", icon: Bot, color: "text-sentinel" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-28 relative">
    <div className="absolute inset-0 radial-glow" />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How It Works</h2>
        <p className="mt-4 text-muted-foreground">Four steps to full automation.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {steps.map((s, i) => (
          <div key={s.step} className="flex items-center gap-4 flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glow-card p-6 flex-1">
              <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 ${s.color}`}>
                <s.icon size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {s.step}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
            {i < steps.length - 1 && <ArrowRight size={20} className="text-muted-foreground hidden md:block shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
