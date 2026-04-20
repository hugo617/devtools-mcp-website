import { motion } from "motion/react";
import { HlsVideo } from "@/components/ui/HlsVideo";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: <CountUp end={200} suffix="+" />, label: "Sites launched" },
  { value: <CountUp end={98} suffix="%" />, label: "Client satisfaction" },
  { value: <CountUp end={3} suffix="x" />, label: "More conversions" },
  { value: <CountUp end={5} suffix=" days" />, label: "Average delivery" },
];

export default function Stats() {
  return (
    <section id="pricing" className="relative w-full min-h-[500px] overflow-hidden" style={{ scrollMarginTop: '100px' }}>
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        desaturated={true}
        style={{ transform: 'translateZ(0) scale(1.1)' }}
      />

      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" aria-hidden="true" />

      <div className="relative z-10 min-h-[500px] flex items-center justify-center px-4 md:px-8">
        <motion.div
          className="liquid-glass rounded-3xl p-6 md:p-12 lg:p-16 w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-4xl lg:text-5xl font-heading italic text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
