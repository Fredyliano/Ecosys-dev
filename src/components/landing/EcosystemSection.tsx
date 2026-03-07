import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, ArrowRight } from "lucide-react";

const items = [
  { name: "Wasync", desc: "WhatsApp Blast & Farming", icon: MessageSquare, color: "text-wasync", borderClass: "glow-card-wasync" },
  { name: "Fluxor", desc: "Behavioral Marketing Engine", icon: BarChart3, color: "text-fluxor", borderClass: "glow-card-fluxor" },
  { name: "Sentinel", desc: "AI CRM & Support", icon: Bot, color: "text-sentinel", borderClass: "glow-card-sentinel" },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="relative py-28">
    <div className="absolute inset-0 radial-glow" />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">The Ecosystem</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Three products. One pipeline. Full lifecycle automation.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {items.map((item, i) => (
          <div key={item.name} className="flex items-center gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`glow-card ${item.borderClass} p-8 text-center w-64`}>
              <item.icon size={36} className={`${item.color} mx-auto mb-4`} />
              <h3 className={`text-xl font-bold ${item.color}`}>{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </motion.div>
            {i < items.length - 1 && (
              <ArrowRight size={24} className="text-muted-foreground hidden md:block" />
            )}
          </div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-muted-foreground/70 mt-12 max-w-2xl mx-auto">
        Farm numbers and broadcast campaigns → Automatically engage users based on behavior → AI handles conversations and business actions
      </motion.p>
    </div>
  </section>
);

export default EcosystemSection;
