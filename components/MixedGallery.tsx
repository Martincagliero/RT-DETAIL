'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
}

// Galería con imágenes y videos reales
const galleryMedia: MediaItem[] = [
  // MOTOS - IMÁGENES REALES
  { id: 1, type: 'image', src: '/videos/motos/1.jpg', alt: 'Detailing profesional de motocicleta' },
  { id: 2, type: 'image', src: '/videos/motos/2.jpg', alt: 'Moto deportiva con acabado premium' },
  { id: 3, type: 'image', src: '/videos/motos/3.jpg', alt: 'Trabajo especializado en motos' },
  { id: 4, type: 'image', src: '/videos/motos/5.jpg', alt: 'Pulido y sellado en motocicletas' },
  
  // VIDEOS DE PROCESOS
  { id: 5, type: 'video', src: '/videos/motos/principal.mp4', alt: 'Proceso de detailing en motocicleta' },
  { id: 6, type: 'video', src: '/videos/motos/detalle.mp4', alt: 'Detalles de trabajo especializado' },
];

export default function MixedGallery() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const currentMedia = selectedMedia !== null ? galleryMedia.find(m => m.id === selectedMedia) : null;
  const currentIndex = selectedMedia !== null ? galleryMedia.findIndex(m => m.id === selectedMedia) : -1;

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex > 0 ? currentIndex - 1 : galleryMedia.length - 1)
      : (currentIndex < galleryMedia.length - 1 ? currentIndex + 1 : 0);
    
    setSelectedMedia(galleryMedia[newIndex].id);
  };

  // Pausar videos cuando no están en el lightbox
  useEffect(() => {
    if (selectedMedia === null) {
      Object.values(videoRefs.current).forEach(video => {
        if (video) video.pause();
      });
    }
  }, [selectedMedia]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-deep-black via-graphite-950 to-deep-black overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <motion.div
          className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          className="font-display text-6xl md:text-8xl lg:text-9xl metallic-text mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          GALERÍA
        </motion.h2>
        <motion.p
          className="text-white/60 text-lg md:text-xl tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nuestros trabajos hablan por sí mismos
        </motion.p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryMedia.map((media, index) => (
            <motion.div
              key={media.id}
              className="relative break-inside-avoid group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedMedia(media.id)}
            >
              <div className="relative overflow-hidden rounded-sm bg-graphite-900 aspect-[4/5] transition-transform duration-300 ease-out group-hover:scale-[1.08]">
                {media.type === 'video' ? (
                  <>
                    {/* Video preview */}
                    <video
                      ref={(el) => { videoRefs.current[media.id] = el; }}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={media.thumbnail}
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      onError={() => console.log('Error loading video')}
                    >
                      <source src={media.src} type="video/mp4" />
                    </video>
                    
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image */}
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </>
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center"
                >
                  <div className="text-center px-4">
                    <p className="text-white font-semibold text-sm md:text-base tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {media.alt}
                    </p>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia !== null && currentMedia && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20 rounded-full z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Media container */}
            <motion.div
              className="relative max-w-5xl w-full aspect-[4/3] bg-graphite-900 rounded-sm overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {currentMedia.type === 'video' ? (
                <video
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                >
                  <source src={currentMedia.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </motion.div>

            {/* Navigation */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('prev');
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('next');
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Media type indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {currentIndex + 1} / {galleryMedia.length} 
              {currentMedia.type === 'video' && ' • VIDEO'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
