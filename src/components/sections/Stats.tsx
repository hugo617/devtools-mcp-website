import { motion } from "motion/react";
import { HlsVideo } from "@/components/ui/HlsVideo";

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export default function Stats() {
  return (
    <section className="relative w-full min-h-[500px]">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        desaturated={true}
      />

      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 min-h-[500px] flex items-center justify-center px-8">
        <motion.div
          className="liquid-glass rounded-3xl p-12 md:p-16 w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
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
