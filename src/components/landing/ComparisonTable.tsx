import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const features = [
  { name: "AI CRM + Agentic Actions", us: true, competitors: false, fasttrack: true },
  { name: "Behavioral Marketing Engine", us: true, competitors: false, fasttrack: true },
  { name: "WhatsApp Broadcast + AI Rewrite", us: true, competitors: "Partial", fasttrack: false },
  { name: "WhatsApp Number Farming", us: true, competitors: false, fasttrack: false },
  { name: "Anti-Ban Technology", us: true, competitors: false, fasttrack: false },
  { name: "Visual Flow Builder", us: true, competitors: false, fasttrack: true },
  { name: "Engine-Agnostic (Any Backend)", us: true, competitors: false, fasttrack: false },
  { name: "Full Pipeline (Farm → CRM)", us: true, competitors: false, fasttrack: false },
];

const CellValue = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check size={18} className="text-primary mx-auto" />;
  if (value === false) return <X size={18} className="text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

const ComparisonTable = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How We Compare</h2>
        <p className="mt-4 text-navy-muted">From number farming to AI operations.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto premium-card p-2 md:p-4"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-sm font-bold text-foreground">Capability</th>
                <th className="text-center py-4 px-6">
                  <span className="text-sm font-bold text-primary">Our Ecosystem</span>
                </th>
                <th className="text-center py-4 px-6 text-sm font-bold text-foreground">General Competitors</th>
                <th className="text-center py-4 px-6 text-sm font-bold text-foreground">Fasttrack.ai</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <motion.tr
                  key={f.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-t border-border/50"
                >
                  <td className="py-4 px-6 text-sm text-foreground font-medium">{f.name}</td>
                  <td className="py-4 px-6 text-center" style={{ backgroundColor: "hsl(110 55% 88% / 0.3)" }}>
                    <CellValue value={f.us} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CellValue value={f.competitors} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CellValue value={f.fasttrack} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
