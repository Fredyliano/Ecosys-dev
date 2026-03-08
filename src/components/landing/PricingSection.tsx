import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Single product access",
    price: "$99",
    features: ["1 product access", "5,000 messages/month", "Basic analytics", "Email support"],
    featured: false,
  },
  {
    name: "Growth",
    desc: "Multiple product integration",
    price: "$299",
    features: ["2 products integrated", "50,000 messages/month", "Advanced analytics", "Priority support", "API access"],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Full ecosystem pipeline",
    price: "Custom",
    features: ["Full ecosystem access", "Unlimited messages", "Custom infrastructure", "Dedicated account manager", "SLA guarantee", "Custom integrations"],
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Pricing</h2>
        <p className="mt-4 text-navy-muted">Scale as you grow.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className={`premium-card p-8 md:p-10 flex flex-col ${
              p.featured ? "gradient-border-green" : ""
            }`}
          >
            {p.featured && (
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Most Popular</span>
            )}
            <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            <div className="mt-6 mb-6">
              <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
              {p.price !== "Custom" && <span className="text-muted-foreground text-sm">/month</span>}
            </div>
            <ul className="space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-navy-muted">
                  <Check size={16} className="text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition-all ${
                p.featured
                  ? "btn-primary-glow justify-center"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {p.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
