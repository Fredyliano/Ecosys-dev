import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, ChevronRight } from "lucide-react";
import Interactive3DCard from "./Interactive3DCard";

const items = [
  {
    name: "Wasync",
    desc: "WhatsApp Blast & Farming",
    icon: MessageSquare,
    color: "text-primary",
    bg: "bg-primary/10",
    visual: (
      <div className="flex gap-1 mt-3">
        {[65, 80, 50, 90, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-primary/20" style={{ height: `${h * 0.5}px` }} />
        ))}
      </div>
    ),
  },
  {
    name: "Fluxor",
    desc: "Behavioral Marketing Engine",
    icon: BarChart3,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
    visual: (
      <div className="mt-3 space-y-1.5">
        {[{ w: 80, label: "VIP" }, { w: 50, label: "At-Risk" }].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[9px] text-muted-foreground w-10">{s.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-secondary">
              <div className="h-full rounded-full bg-fluxor/50" style={{ width: `${s.w}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Sentinel",
    desc: "AI CRM & Support",
    icon: Bot,
    color: "text-sentinel",
    bg: "bg-sentinel/10",
    visual: (
      <div className="mt-3 space-y-1.5">
        <div className="flex items-start gap-1.5">
          <div className="w-4 h-4 rounded-full bg-sentinel/15 flex items-center justify-center shrink-0">
            <Bot size={8} className="text-sentinel" />
          </div>
          <div className="rounded-lg bg-sentinel/10 px-2 py-1 text-[9px] text-foreground">Resolved ✓</div>
        </div>
      </div>
    ),
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-32 relative overflow-hidden">
    {/* Parallax blob */}
    <motion.div
      className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-25 blur-[100px] pointer-events-none"
      style={{ background: "hsl(var(--tea-green))" }}
      initial={{ y: 0 }}
      whileInView={{ y: 30 }}
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">The Ecosystem</h2>
        <p className="mt-4 text-navy-muted max-w-xl mx-auto">Three products. One pipeline. Full lifecycle automation.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
        {items.map((item, i) => (
          <div key={item.name} className="flex items-center gap-0">
            <Interactive3DCard index={i} className="w-full md:w-64">
              <div className="p-8 text-center h-full flex flex-col">
                <div className={`${item.bg} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={28} className={item.color} />
                </div>
                <h3 className={`text-xl font-bold ${item.color}`}>{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{item.desc}</p>
                {item.visual}
              </div>
            </Interactive3DCard>
            {i < items.length - 1 && (
              <div className="hidden md:flex items-center px-3">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                  className="w-12 h-[2px] bg-foreground/10 origin-left"
                />
                <ChevronRight size={16} className="text-primary shrink-0 -ml-1" />
              </div>
            )}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-16 max-w-2xl mx-auto"
      >
        Farm numbers and broadcast campaigns → Automatically engage users based on behavior → AI handles conversations and business actions
      </motion.p>
    </div>
  </section>
);

export default EcosystemSection;
