import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { HlsVideo } from "@/components/ui/HlsVideo";

export default function StartSection() {
  return (
    <section id="services" className="relative w-full min-h-[500px]">
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" />

      <motion.div
        className="relative z-10 min-h-[500px] flex flex-col items-center justify-center text-center px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          How It Works
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mt-6">
          You dream it. We ship it.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-lg mt-4">
          Share your vision. Our AI handles the rest — wireframes, design, code,
          launch. All in days, not quarters.
        </p>

        <button
          type="button"
          className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium flex items-center gap-2 mt-8"
        >
          Get Started
          <ArrowUpRight size={16} />
        </button>
      </motion.div>
    </section>
  );
}
