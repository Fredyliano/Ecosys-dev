import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card text-center py-20 px-8 md:px-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-wasync/5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground max-w-3xl mx-auto leading-tight">
            Ready to automate your entire customer pipeline?
          </h2>
          <p className="mt-6 text-lg text-navy-muted max-w-xl mx-auto">
            Launch your AI-powered marketing and CRM ecosystem today.
          </p>
          <button className="group btn-primary-glow mt-10 px-10 py-4 text-base">
            Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
