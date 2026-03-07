import { motion } from "framer-motion";
import { Users, RefreshCw, Headphones } from "lucide-react";

const cases = [
  { title: "New Customer Acquisition", desc: "Farm numbers and blast campaigns automatically.", icon: Users, color: "text-wasync", borderClass: "glow-card-wasync" },
  { title: "Retention Campaigns", desc: "Detect inactive users and trigger re-engagement.", icon: RefreshCw, color: "text-fluxor", borderClass: "glow-card-fluxor" },
  { title: "Automated Customer Support", desc: "AI agents answer and execute actions automatically.", icon: Headphones, color: "text-sentinel", borderClass: "glow-card-sentinel" },
];

const UseCases = () => (
  <section className="py-28">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Use Cases</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glow-card ${c.borderClass} p-8`}>
            <c.icon size={28} className={c.color} />
            <h3 className="mt-4 text-xl font-bold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
