'use client';

import { useRef, useEffect, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  onEnded?: () => void;
}

export default function VideoPlayer({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  onEnded,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      if (autoPlay) {
        video.play().catch(() => {
          // Autoplay failed, possibly due to browser policy
          console.log('Autoplay prevented');
        });
      }
    };

    const handleError = () => {
      setError(true);
      console.error('Error loading video:', src);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src, autoPlay]);

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-graphite-800 via-graphite-700 to-graphite-900 ${className}`}>
        <div className="w-full h-full flex items-center justify-center text-white/50">
          Video no disponible
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      onEnded={onEnded}
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
  );
}
