import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  animateOnView?: boolean;
  splitBy?: "word" | "letter";
}

export function BlurText({
  text,
  className = "",
  delay = 100,
  as: Tag = "h1",
  animateOnView = true,
  splitBy = "word",
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!animateOnView);

  useEffect(() => {
    if (!animateOnView) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnView]);

  const units = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {units.map((unit, i) => (
          <motion.span
            key={i}
            initial={{
              filter: "blur(10px)",
              opacity: 0,
              y: 50,
            }}
            animate={
              isVisible
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : {
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 50,
                  }
            }
            transition={{
              duration: 0.7,
              delay: i * (delay / 1000),
              ease: "easeOut",
            }}
            style={{ display: "inline-block" }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}

