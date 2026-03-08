import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, ChevronRight } from "lucide-react";

const items = [
  { name: "Wasync", desc: "WhatsApp Blast & Farming", icon: MessageSquare, color: "text-wasync", bg: "bg-wasync/10" },
  { name: "Fluxor", desc: "Behavioral Marketing Engine", icon: BarChart3, color: "text-fluxor", bg: "bg-fluxor/10" },
  { name: "Sentinel", desc: "AI CRM & Support", icon: Bot, color: "text-sentinel", bg: "bg-sentinel/10" },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">The Ecosystem</h2>
        <p className="mt-4 text-navy-muted max-w-xl mx-auto">Three products. One pipeline. Full lifecycle automation.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {items.map((item, i) => (
          <div key={item.name} className="flex items-center gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="premium-card p-10 text-center w-64"
            >
              <div className={`${item.bg} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-5`}>
                <item.icon size={28} className={item.color} />
              </div>
              <h3 className={`text-xl font-bold ${item.color}`}>{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </motion.div>
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
