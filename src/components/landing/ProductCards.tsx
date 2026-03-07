import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, Check } from "lucide-react";

const products = [
  {
    name: "Wasync",
    tagline: "AI-Powered WhatsApp Blast & Farming",
    icon: MessageSquare,
    color: "text-wasync",
    borderClass: "glow-card-wasync",
    bgGlow: "radial-glow-wasync",
    features: [
      "AI unique messaging (LLM rewrite per recipient)",
      "Anti-ban technology with sender rotation",
      "Random delays and typing simulation",
      "Campaign management with scheduling",
      "Multi-sender WhatsApp orchestration",
      "Phone farming system",
    ],
  },
  {
    name: "Fluxor",
    tagline: "Behavioral Marketing Engine",
    icon: BarChart3,
    color: "text-fluxor",
    borderClass: "glow-card-fluxor",
    bgGlow: "radial-glow-fluxor",
    features: [
      "Real-time auto segmentation",
      "Persona classification (VIP, Dormant, At-Risk)",
      "Trigger detection system",
      "AI personalized message generation",
      "High-performance Rust engine",
    ],
  },
  {
    name: "Sentinel",
    tagline: "AI-Powered CRM Platform",
    icon: Bot,
    color: "text-sentinel",
    borderClass: "glow-card-sentinel",
    bgGlow: "radial-glow-sentinel",
    features: [
      "Omnichannel inbox (WhatsApp, Telegram, Email)",
      "AI Agent with action execution",
      "Visual flow builder automation",
      "Contact management and analytics",
      "RBAC security system",
    ],
  },
];

const ProductCards = () => (
  <section id="products" className="py-28">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Products</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Each product is powerful on its own — together they create an unstoppable pipeline.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`glow-card ${p.borderClass} relative overflow-hidden`}>
            <div className={`absolute inset-0 ${p.bgGlow} pointer-events-none`} />
            <div className="relative p-8">
              <p.icon size={32} className={p.color} />
              <h3 className={`mt-4 text-2xl font-bold ${p.color}`}>{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <Check size={16} className={`${p.color} mt-0.5 shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-border bg-muted/50 h-40 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Product Screenshot</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCards;
