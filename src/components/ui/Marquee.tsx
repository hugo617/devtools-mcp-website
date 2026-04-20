import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function Marquee({ items, speed = 20, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl lg:text-[10rem] font-heading italic text-white/[0.03] mx-8 select-none"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
