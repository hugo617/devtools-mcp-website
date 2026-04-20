import { useEffect, useRef } from "react";
import Hls from "hls.js";
import type { CSSProperties } from "react";

interface HlsVideoProps {
  src: string;
  className?: string;
  desaturated?: boolean;
  style?: CSSProperties;
}

export function HlsVideo({ src, className = "", desaturated = false, style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [src]);

  const mergedStyle: CSSProperties = {
    ...style,
    ...(desaturated ? { filter: "saturate(0)" } : {}),
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={Object.keys(mergedStyle).length > 0 ? mergedStyle : undefined}
    />
  );
}
