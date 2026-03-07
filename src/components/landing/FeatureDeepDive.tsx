import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, BarChart3, Bot, Check } from "lucide-react";

const tabs = [
  {
    id: "wasync",
    name: "Wasync",
    icon: MessageSquare,
    color: "text-wasync",
    activeClass: "border-wasync bg-wasync/10",
    features: [
      "Mass WhatsApp broadcasting with AI-rewritten messages",
      "Phone number farming and session management",
      "Anti-ban system with sender rotation and delays",
      "Campaign scheduling and management dashboard",
      "Multi-device WhatsApp orchestration",
      "Detailed delivery and response analytics",
    ],
  },
  {
    id: "fluxor",
    name: "Fluxor",
    icon: BarChart3,
    color: "text-fluxor",
    activeClass: "border-fluxor bg-fluxor/10",
    features: [
      "Real-time behavioral segmentation engine",
      "5 persona classifications with auto-tagging",
      "Event-driven trigger detection",
      "AI-powered personalized message composition",
      "High-performance Rust processing core",
      "Integration with Wasync and Sentinel",
    ],
  },
  {
    id: "sentinel",
    name: "Sentinel",
    icon: Bot,
    color: "text-sentinel",
    activeClass: "border-sentinel bg-sentinel/10",
    features: [
      "Unified inbox across WhatsApp, Telegram, Email",
      "AI Agent that executes real business actions",
      "Drag-and-drop visual flow automation builder",
      "Complete contact lifecycle management",
      "Role-based access control (RBAC)",
      "Advanced analytics and reporting",
    ],
  },
];

const FeatureDeepDive = () => {
  const [active, setActive] = useState("wasync");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Feature Deep Dive</h2>
          <p className="mt-4 text-muted-foreground">Explore each product in detail.</p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all ${active === t.id ? t.activeClass : "border-border text-muted-foreground hover:text-foreground"}`}>
              <t.icon size={16} /> {t.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-bold ${tab.color}`}>{tab.name}</h3>
              <ul className="mt-6 space-y-4">
                {tab.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <Check size={16} className={`${tab.color} mt-0.5 shrink-0`} /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 h-72 flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Screenshot Placeholder</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureDeepDive;
