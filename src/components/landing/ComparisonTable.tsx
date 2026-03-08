import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Sparkles } from "lucide-react";

const problems = [
  "Manual customer outreach with no automation",
  "No behavioral segmentation or triggers",
  "Single-channel communication only",
  "No anti-ban protection for messaging",
  "Disconnected tools with no pipeline",
  "Generic mass messages that get ignored",
];

const solutions = [
  "Full pipeline automation from acquisition to retention",
  "AI-powered behavioral marketing with persona classification",
  "Omnichannel inbox: WhatsApp, Telegram, Email",
  "Anti-ban technology with sender rotation & delays",
  "Integrated ecosystem: Wasync → Fluxor → Sentinel",
  "AI-unique messaging rewritten per recipient",
  "Agentic AI that executes real business actions",
  "Visual flow builder for complex automations",
];

const ComparisonTable = () => (
  <section className="py-32 section-teal">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How We Compare</h2>
        <p className="mt-4 text-navy-muted">See the difference an integrated ecosystem makes.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Without */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10"
          style={{ borderRadius: "2.5rem", backgroundColor: "hsl(0 70% 97%)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle size={18} className="text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Without Our Ecosystem</h3>
          </div>
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-navy-muted">
                <X size={16} className="text-destructive mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* With */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-10"
          style={{ backgroundColor: "hsl(110 40% 95%)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-wasync/10 flex items-center justify-center">
              <Sparkles size={18} className="text-wasync" />
            </div>
            <h3 className="text-xl font-bold text-foreground">With Our Ecosystem</h3>
          </div>
          <ul className="space-y-4">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-navy-muted">
                <Check size={16} className="text-wasync mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
