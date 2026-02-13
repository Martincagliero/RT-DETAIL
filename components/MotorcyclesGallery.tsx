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
  { id: 1, src: '/public/motorcycles/1.jpg', alt: 'Moto detailing 1', width: 400, height: 300 },
  { id: 2, src: '/public/motorcycles/2.jpg', alt: 'Moto detailing 2', width: 600, height: 400 },
  { id: 3, src: '/public/motorcycles/3.jpg', alt: 'Moto detailing 3', width: 400, height: 500 },
  { id: 4, src: '/public/motorcycles/4.jpg', alt: 'Moto detailing 4', width: 600, height: 300 },
  { id: 5, src: '/public/motorcycles/5.jpg', alt: 'Moto detailing 5', width: 400, height: 450 },
  { id: 6, src: '/public/motorcycles/6.jpg', alt: 'Moto detailing 6', width: 400, height: 400 },
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
              className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm bg-graphite-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback gradient si no carga imagen
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-graphite-700 to-deep-black" />
              </div>

              {/* Overlay oscuro elegante */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {/* Icon play o zoom */}
                <motion.div
                  className="w-16 h-16 border-2 border-white/60 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-0 h-0 border-l-8 border-l-white/60 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </motion.div>
              </motion.div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 border border-white/0 group-hover:border-white/30 rounded-sm transition-all duration-300"
                style={{
                  boxShadow: 'none'
                }}
                whileHover={{
                  boxShadow: '0 0 30px rgba(255,255,255,0.15)'
                }}
              />
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
              <div className="relative w-full h-auto bg-graphite-900 rounded-sm overflow-hidden">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
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
