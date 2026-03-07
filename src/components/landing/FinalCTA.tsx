import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 radial-glow" />
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="container relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl font-extrabold text-foreground max-w-3xl mx-auto leading-tight">
          Ready to automate your entire customer pipeline?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Launch your AI-powered marketing and CRM ecosystem today.
        </p>
        <button className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
