import { motion } from "framer-motion";
import { Users, RefreshCw, Headphones, TrendingUp, Bell, MessageCircle } from "lucide-react";

const cases = [
  {
    title: "New Customer Acquisition",
    desc: "Farm numbers and blast campaigns automatically. Reach thousands with AI-unique messages that avoid detection.",
    icon: Users,
    color: "text-wasync",
    bg: "bg-wasync/10",
    span: "md:col-span-2",
    mockup: true,
  },
  {
    title: "Retention Campaigns",
    desc: "Detect inactive users and trigger re-engagement with personalized messaging based on behavioral signals.",
    icon: RefreshCw,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
    span: "md:col-span-1 md:row-span-2",
    mockup: false,
  },
  {
    title: "Automated Customer Support",
    desc: "AI agents answer questions and execute real business actions — from order lookups to ticket resolution.",
    icon: Headphones,
    color: "text-sentinel",
    bg: "bg-sentinel/10",
    span: "md:col-span-1",
    mockup: false,
  },
  {
    title: "Behavioral Analytics",
    desc: "Track every interaction, classify personas in real-time, and detect churn signals before they escalate.",
    icon: TrendingUp,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
    span: "md:col-span-1",
    mockup: false,
  },
];

const AcquisitionMockup = () => (
  <div className="glass-container p-4 mt-6">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] font-semibold text-foreground">Campaign Performance</span>
      <span className="text-[9px] px-2 py-0.5 rounded-full gradient-accent text-white font-medium">Live</span>
    </div>
    <div className="flex gap-2">
      {[
        { label: "Reached", val: "24.8K" },
        { label: "Converted", val: "3.2K" },
        { label: "Rate", val: "12.9%" },
      ].map((s) => (
        <div key={s.label} className="flex-1 bg-secondary/80 rounded-xl p-2.5 text-center">
          <p className="text-xs font-bold text-foreground">{s.val}</p>
          <p className="text-[9px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </div>
);

const UseCases = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Use Cases</h2>
        <p className="mt-4 text-navy-muted">Real scenarios. Real results.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`premium-card p-8 md:p-10 ${c.span}`}
          >
            <div className={`${c.bg} rounded-2xl w-14 h-14 flex items-center justify-center`}>
              <c.icon size={24} className={c.color} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            {c.mockup && <AcquisitionMockup />}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
