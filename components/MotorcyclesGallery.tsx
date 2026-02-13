'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MotorcycleImage {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const motorcycleImages: MotorcycleImage[] = [
  { id: 1, src: '/motorcycles/1.jpg', alt: 'Detailing profesional de motocicleta', width: 600, height: 800 },
  { id: 2, src: '/motorcycles/2.jpg', alt: 'Moto deportiva con acabado premium', width: 600, height: 800 },
  { id: 3, src: '/motorcycles/3.jpg', alt: 'Trabajo especializado en motos', width: 600, height: 800 },
  { id: 4, src: '/motorcycles/5.jpg', alt: 'Pulido y sellado en motocicletas', width: 600, height: 800 },
];

export default function MotorcyclesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentImage = selectedImage !== null ? motorcycleImages.find(img => img.id === selectedImage) : null;
  const currentIndex = selectedImage !== null ? motorcycleImages.findIndex(img => img.id === selectedImage) : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex = direction === 'prev'
      ? (currentIndex > 0 ? currentIndex - 1 : motorcycleImages.length - 1)
      : (currentIndex < motorcycleImages.length - 1 ? currentIndex + 1 : 0);
    setSelectedImage(motorcycleImages[newIndex].id);
  };

  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-deep-black via-deep-black to-graphite-950 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <motion.div
          className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
          Trabajos especializados en motos
        </motion.p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {motorcycleImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative break-inside-avoid group cursor-pointer rounded-sm bg-graphite-900 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.08]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay oscuro elegante */}
              <div
                className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center"
              >
                <p className="text-white font-semibold text-sm md:text-base tracking-wide text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </motion.button>

            {/* Image container */}
            <motion.div
              className="relative w-full max-w-4xl max-h-screen"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-graphite-900 rounded-sm overflow-hidden">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation arrows */}
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateImage('prev')}
              >
                ‹
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateImage('next')}
              >
                ›
              </motion.button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm backdrop-blur-sm">
                {currentIndex + 1} / {motorcycleImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
