import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "AI CRM with agentic actions", us: true, comp: false, ft: true },
  { feature: "Behavioral marketing engine", us: true, comp: false, ft: false },
  { feature: "WhatsApp broadcast with AI rewrite", us: true, comp: false, ft: false },
  { feature: "WhatsApp number farming", us: true, comp: false, ft: false },
  { feature: "Anti-ban technology", us: true, comp: false, ft: false },
  { feature: "Visual flow builder", us: true, comp: true, ft: true },
  { feature: "Engine-agnostic integration", us: true, comp: false, ft: false },
  { feature: "Full pipeline automation", us: true, comp: false, ft: false },
];

const Cell = ({ val }: { val: boolean }) => val ? <Check size={18} className="text-wasync mx-auto" /> : <X size={18} className="text-muted-foreground/40 mx-auto" />;

const ComparisonTable = () => (
  <section className="py-28 relative">
    <div className="absolute inset-0 radial-glow" />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How We Compare</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-4 px-6 text-left text-muted-foreground font-medium">Feature</th>
              <th className="py-4 px-6 text-center font-bold text-gradient-brand">Our Ecosystem</th>
              <th className="py-4 px-6 text-center text-muted-foreground font-medium">Typical Competitors</th>
              <th className="py-4 px-6 text-center text-muted-foreground font-medium">fasttrack.ai</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-4 px-6 text-foreground">{r.feature}</td>
                <td className="py-4 px-6"><Cell val={r.us} /></td>
                <td className="py-4 px-6"><Cell val={r.comp} /></td>
                <td className="py-4 px-6"><Cell val={r.ft} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
