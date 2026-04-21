import type { ReactNode } from "react";
import { HlsVideo } from "@/components/ui/HlsVideo";

interface VideoSectionProps {
  videoSrc: string;
  children: ReactNode;
  desaturated?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function VideoSection({
  videoSrc,
  children,
  desaturated = false,
  className = "",
  id,
  style,
}: VideoSectionProps) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`} style={style}>
      <HlsVideo
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        desaturated={desaturated}
        style={{ transform: "translateZ(0) scale(1.1)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" aria-hidden="true" />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
