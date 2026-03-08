import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, Check, Play } from "lucide-react";

const products = [
  {
    name: "Wasync",
    tagline: "AI-Powered WhatsApp Blast & Farming",
    icon: MessageSquare,
    color: "text-wasync",
    bg: "bg-wasync/10",
    features: [
      "AI unique messaging (LLM rewrite per recipient)",
      "Anti-ban technology with sender rotation",
      "Random delays and typing simulation",
      "Campaign management with scheduling",
      "Multi-sender WhatsApp orchestration",
      "Phone farming system",
    ],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Fluxor",
    tagline: "Behavioral Marketing Engine",
    icon: BarChart3,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
    features: [
      "Real-time auto segmentation",
      "Persona classification (VIP, Dormant, At-Risk)",
      "Trigger detection system",
      "AI personalized message generation",
      "High-performance Rust engine",
    ],
    span: "md:col-span-1",
  },
  {
    name: "Sentinel",
    tagline: "AI-Powered CRM Platform",
    icon: Bot,
    color: "text-sentinel",
    bg: "bg-sentinel/10",
    features: [
      "Omnichannel inbox (WhatsApp, Telegram, Email)",
      "AI Agent with action execution",
      "Visual flow builder automation",
      "Contact management and analytics",
      "RBAC security system",
    ],
    span: "md:col-span-1",
  },
];

const ProductCards = () => (
  <section id="products" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Products</h2>
        <p className="mt-4 text-navy-muted max-w-xl mx-auto">
          Each product is powerful on its own — together they create an unstoppable pipeline.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-3 gap-6 auto-rows-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`premium-card ${p.span}`}
          >
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className={`${p.bg} rounded-2xl w-14 h-14 flex items-center justify-center`}>
                <p.icon size={24} className={p.color} />
              </div>
              <h3 className={`mt-5 text-2xl font-bold ${p.color}`}>{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy-muted">
                    <Check size={16} className={`${p.color} mt-0.5 shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
              {/* Media container with glassmorphism */}
              <div className="mt-8 glass-container h-44 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Play size={18} className="ml-0.5" />
                  </div>
                  <span className="text-xs">Watch Demo</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCards;