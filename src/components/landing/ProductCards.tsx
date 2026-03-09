import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bot, Check, Send, Activity, Users } from "lucide-react";
import Interactive3DCard from "./Interactive3DCard";
import featureWa from "../Image/featureWa.png";
import featureSen from "../Image/featureSentinel.png";

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
  <img
    src={featureWa}
    alt="Wasync Dashboard"
    className="w-[700px] h-[270px] rounded-xl border border-border shadow-lg"
  />
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
  <img
    src={featureSen}
    alt="Sentinel Dashboard"
    className="w-[700px] h-[270px] rounded-xl border border-border shadow-lg"
  />
);

const mockups: Record<string, () => JSX.Element> = {
  campaign: CampaignMockup,
  segments: SegmentMockup,
  chat: ChatMockup,
};

const ProductCards = () => (
  <section id="products" className="py-32 relative overflow-hidden">
    {/* Parallax blob */}
    <motion.div
      className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
      style={{ background: "hsl(var(--tea-green))" }}
      initial={{ y: 0 }}
      whileInView={{ y: -30 }}
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Products</h2>
        <p className="mt-4 text-navy-muted max-w-xl mx-auto">
          Each product is powerful on its own — together they create an unstoppable pipeline.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => {
          const Mockup = mockups[p.mockup];
          return (
            <Interactive3DCard key={p.name} index={i} className="h-full">
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
            </Interactive3DCard>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductCards;
