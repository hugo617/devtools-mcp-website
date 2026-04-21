import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { VideoSection } from "@/components/ui/VideoSection";

export default function StartSection() {
  return (
    <VideoSection
      videoSrc="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
      className="min-h-[500px]"
      style={{ scrollMarginTop: "100px" }}
      id="services"
    >
      <motion.div
        className="min-h-[500px] flex flex-col items-center justify-center text-center px-4 md:px-8"
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
          aria-label="Get started with AI web design"
        >
          Get Started
          <ArrowUpRight size={16} />
        </button>
      </motion.div>
    </VideoSection>
  );
}
