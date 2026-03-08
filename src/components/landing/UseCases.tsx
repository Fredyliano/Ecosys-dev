import { motion } from "framer-motion";
import { Users, RefreshCw, Headphones, TrendingUp } from "lucide-react";

const cases = [
  {
    title: "New Customer Acquisition",
    desc: "Farm numbers and blast campaigns automatically. Reach thousands with AI-unique messages that avoid detection.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Retention Campaigns",
    desc: "Detect inactive users and trigger re-engagement with personalized messaging based on behavioral signals.",
    icon: RefreshCw,
    color: "text-fluxor",
    bg: "bg-fluxor/10",
  },
  {
    title: "Automated Customer Support",
    desc: "AI agents answer questions and execute real business actions — from order lookups to ticket resolution.",
    icon: Headphones,
    color: "text-sentinel",
    bg: "bg-sentinel/10",
  },
  {
    title: "Behavioral Analytics",
    desc: "Track every interaction, classify personas in real-time, and detect churn signals before they escalate.",
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="premium-card p-8 md:p-10"
          >
            <div className={`${c.bg} rounded-2xl w-14 h-14 flex items-center justify-center`}>
              <c.icon size={24} className={c.color} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
