import { motion } from "motion/react";
import { VideoSection } from "@/components/ui/VideoSection";

export default function CtaFooter() {
  return (
    <VideoSection
      videoSrc="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      style={{ scrollMarginTop: "100px" }}
      id="contact"
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center px-8 py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          Your next website starts here.
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed max-w-lg mb-10">
          Book a free strategy call. See what AI-powered design can do. No commitment, no
          pressure. Just possibilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#book"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium flex items-center gap-2"
          >
            Book a Call
          </a>
          <a
            href="#pricing"
            className="bg-white text-black rounded-full px-6 py-3 font-body text-sm font-medium"
          >
            View Pricing
          </a>
        </div>

        <div className="mt-12 w-full max-w-md">
          <form className="liquid-glass rounded-full p-1 flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent text-white text-sm font-body px-4 py-2.5 outline-none placeholder:text-white/30"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-black rounded-full px-5 py-2 text-sm font-body font-medium"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/30 text-xs font-body font-light mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* Footer bar */}
        <div className="mt-32 pt-8 border-t border-white/10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-white/40 text-xs font-body">
            &copy; 2026 Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#privacy" className="text-white/40 text-xs font-body">
              Privacy
            </a>
            <a href="#terms" className="text-white/40 text-xs font-body">
              Terms
            </a>
            <a href="#contact" className="text-white/40 text-xs font-body">
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </VideoSection>
  );
}
