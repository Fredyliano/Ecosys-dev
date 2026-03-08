import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, Check, Send, Activity, Users } from "lucide-react";

const products = [
  {
    name: "Wasync",
    tagline: "AI-Powered WhatsApp Blast & Farming",
    icon: MessageSquare,
    color: "text-primary",
    bg: "bg-primary/10",
    features: [
      "AI unique messaging (LLM rewrite per recipient)",
      "Anti-ban technology with sender rotation",
      "Random delays and typing simulation",
      "Campaign management with scheduling",
      "Multi-sender WhatsApp orchestration",
      "Phone farming system",
    ],
    mockup: "campaign",
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
    mockup: "segments",
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
    mockup: "chat",
  },
];

const CampaignMockup = () => (
  <div className="glass-container p-5 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold text-foreground">Campaign Dashboard</span>
      <span className="text-[10px] px-2 py-0.5 rounded-full gradient-accent text-white font-medium">Live</span>
    </div>
    <div className="flex gap-3">
      {[
        { label: "Sent", value: "12,847", icon: Send },
        { label: "Delivered", value: "98.2%", icon: Activity },
        { label: "Replied", value: "3,241", icon: MessageSquare },
      ].map((s) => (
        <div key={s.label} className="flex-1 rounded-xl bg-secondary/80 p-3">
          <s.icon size={12} className="text-primary mb-1" />
          <p className="text-sm font-bold text-foreground">{s.value}</p>
          <p className="text-[10px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="h-12 rounded-lg bg-secondary/60 flex items-end gap-1 px-2 pb-1">
      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
        <div key={i} className="flex-1 rounded-t bg-primary/30" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

const SegmentMockup = () => (
  <div className="glass-container p-4 space-y-2">
    {[
      { label: "VIP", pct: 85, color: "bg-primary" },
      { label: "At-Risk", pct: 45, color: "bg-fluxor" },
      { label: "Dormant", pct: 30, color: "bg-muted-foreground/30" },
    ].map((s) => (
      <div key={s.label} className="space-y-1">
        <div className="flex justify-between text-[10px]">
          <span className="font-medium text-foreground">{s.label}</span>
          <span className="text-muted-foreground">{s.pct}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary">
          <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
        </div>
      </div>
    ))}
  </div>
);

const ChatMockup = () => (
  <div className="glass-container p-4 space-y-2">
    <div className="flex items-start gap-2">
      <div className="w-6 h-6 rounded-full bg-sentinel/20 flex items-center justify-center shrink-0">
        <Bot size={10} className="text-sentinel" />
      </div>
      <div className="rounded-2xl rounded-tl-sm bg-secondary/80 px-3 py-2 text-[11px] text-foreground">
        Order #4821 has been shipped. Tracking sent to customer.
      </div>
    </div>
    <div className="flex items-center gap-2 ml-8">
      <div className="px-2 py-1 rounded-full text-[9px] font-medium text-white" style={{ background: "hsl(var(--success))" }}>
        ✓ Action Executed
      </div>
    </div>
    <div className="flex items-start gap-2 flex-row-reverse">
      <div className="w-6 h-6 rounded-full bg-fluxor/20 flex items-center justify-center shrink-0">
        <Users size={10} className="text-fluxor" />
      </div>
      <div className="rounded-2xl rounded-tr-sm bg-primary/10 px-3 py-2 text-[11px] text-foreground">
        Can you also send a satisfaction survey?
      </div>
    </div>
  </div>
);

const mockups: Record<string, () => JSX.Element> = {
  campaign: CampaignMockup,
  segments: SegmentMockup,
  chat: ChatMockup,
};

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

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => {
          const Mockup = mockups[p.mockup];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="premium-card"
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
                <div className="mt-8">
                  <Mockup />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductCards;
