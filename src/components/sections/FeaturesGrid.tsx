import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: readonly FeatureCard[] = [
  {
    icon: Zap,
    title: "Days, Not Months",
    description:
      "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    description:
      "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    description:
      "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
  },
] as const;

function FeatureCard({ icon: Icon, title, description, index }: FeatureCard & { index: number }) {
  return (
    <motion.div
      className="liquid-glass glass-hover rounded-2xl p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
        <Icon size={18} className="text-white" />
      </div>
      <h3 className="text-white font-body font-medium text-sm mb-2">
        {title}
      </h3>
      <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function FeaturesGrid() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto" style={{ scrollMarginTop: '100px' }}>
      <div className="text-center">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Why Us
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] text-center mt-6 mb-16">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
