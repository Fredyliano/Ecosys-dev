import { motion } from "framer-motion";
import { Users, RefreshCw, Headphones, TrendingUp, ArrowUpRight, MessageCircle, Bell, BarChart } from "lucide-react";
import Interactive3DCard from "./Interactive3DCard";

const cases = [
  {
    title: "New Customer Acquisition",
    desc: "Farm numbers and blast campaigns automatically. Reach thousands with AI-unique messages that avoid detection.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
    visual: (
      <div className="mt-5 flex items-center gap-3">
        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-primary/15 border-2 border-card flex items-center justify-center">
              <Users size={10} className="text-primary" />
            </div>
          ))}
        </div>
        <ArrowUpRight size={14} className="text-primary" />
        <span className="text-xs font-bold text-primary">+2.4k</span>
      </div>
    ),
  },
  {
    title: "Retention Campaigns",
    desc: "Detect inactive users and trigger re-engagement with personalized messaging based on behavioral signals.",
    icon: RefreshCw,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
    visual: (
      <div className="mt-5 space-y-1.5">
        {[
          { label: "Re-engaged", pct: 72 },
          { label: "Churned", pct: 18 },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[9px] text-muted-foreground w-16">{s.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-secondary">
              <div className="h-full rounded-full bg-fluxor/50" style={{ width: `${s.pct}%` }} />
            </div>
            <span className="text-[9px] font-semibold text-foreground">{s.pct}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Automated Customer Support",
    desc: "AI agents answer questions and execute real business actions — from order lookups to ticket resolution.",
    icon: Headphones,
    color: "text-sentinel",
    bg: "bg-sentinel/10",
    visual: (
      <div className="mt-5 flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-sentinel/10">
          <MessageCircle size={10} className="text-sentinel" />
          <span className="text-[9px] font-medium text-sentinel">98% resolved</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10">
          <Bell size={10} className="text-primary" />
          <span className="text-[9px] font-medium text-primary">~2s avg</span>
        </div>
      </div>
    ),
  },
  {
    title: "Behavioral Analytics",
    desc: "Track every interaction, classify personas in real-time, and detect churn signals before they escalate.",
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
    visual: (
      <div className="mt-5 flex items-end gap-1 h-10">
        {[25, 40, 35, 60, 45, 75, 55, 80, 65, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background: `hsl(104 58% 41% / ${0.15 + i * 0.08})`,
            }}
          />
        ))}
      </div>
    ),
  },
];

const UseCases = () => (
  <section className="py-32 relative overflow-hidden">
    {/* Parallax blob */}
    <motion.div
      className="absolute top-20 -right-20 w-[450px] h-[450px] rounded-full opacity-20 blur-[120px] pointer-events-none"
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Use Cases</h2>
        <p className="mt-4 text-navy-muted">Real scenarios. Real results.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((c, i) => (
          <Interactive3DCard key={c.title} index={i} className="h-full">
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className={`${c.bg} rounded-2xl w-14 h-14 flex items-center justify-center`}>
                <c.icon size={24} className={c.color} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
              {c.visual}
            </div>
          </Interactive3DCard>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
