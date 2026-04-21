import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import type { CSSProperties } from "react";

interface HlsVideoProps {
  src: string;
  className?: string;
  desaturated?: boolean;
  poster?: string;
  style?: CSSProperties;
}

export function HlsVideo({ src, className = "", desaturated = false, poster, style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setHasError(false);

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      });
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              setHasError(true);
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("error", () => setHasError(true), { once: true });
    } else {
      setHasError(true);
    }
  }, [src]);

  const mergedStyle: CSSProperties = {
    ...style,
    ...(desaturated ? { filter: "saturate(0)" } : {}),
  };

  if (hasError) {
    return (
      <div
        className={className}
        style={{ ...mergedStyle, background: "#000" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      style={Object.keys(mergedStyle).length > 0 ? mergedStyle : undefined}
      aria-hidden="true"
    />
  );
}
