import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "@/components/ui/BlurText";

const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

export default function Hero() {
  return (
    <section className="relative overflow-visible min-h-[700px] md:min-h-[1000px]" style={{ height: "auto", minHeight: "1000px" }}>
      {/* Background video */}
      <motion.div
        className="absolute left-0 w-full h-auto z-0 hidden md:block"
        style={{ top: "20%" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_bg.jpeg"
          className="w-full h-auto object-contain"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Mobile dark background fallback */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black md:hidden z-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 w-full z-0"
        style={{
          height: "300px",
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 pt-24 md:pt-[150px]">
        {/* Badge pill */}
        <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2">
          <motion.span
            className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            New
          </motion.span>
          <span className="text-white text-sm font-body font-light">
            Introducing AI-powered web design.
          </span>
        </div>

        {/* Heading */}
        <div className="mt-8" style={{ textShadow: "0 0 60px rgba(255, 255, 255, 0.15)" }}>
          <BlurText
            text="The Website Your Brand Deserves"
            as="h1"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px]"
            animateOnView={false}
            delay={100}
          />
        </div>

        {/* Subtext */}
        <motion.p
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-lg mt-6"
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center gap-6 mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <motion.button
            type="button"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium flex items-center gap-2"
            whileTap={{ scale: 0.97 }}
          >
            Get Started
            <ArrowUpRight size={16} />
          </motion.button>

          <motion.button
            type="button"
            className="flex items-center gap-2 text-white font-body text-sm font-medium"
            whileTap={{ scale: 0.97 }}
          >
            <Play size={16} fill="white" />
            Watch the Film
          </motion.button>
        </motion.div>

        {/* Partners bar */}
        <div className="mt-auto pb-8 pt-16 flex flex-col items-center gap-4">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body font-light text-white">
            Trusted by the teams behind
          </span>
          <div className="overflow-x-auto">
            <div className="flex items-center gap-12 md:gap-16 flex-nowrap">
            {partners.map((partner, index) => (
              <motion.span
                key={partner}
                className="text-2xl md:text-3xl font-heading italic text-white inline-block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                {partner}
              </motion.span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
