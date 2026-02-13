'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Detail work 1' },
  { id: 2, src: '/images/gallery/2.jpg', alt: 'Detail work 2' },
  { id: 3, src: '/images/gallery/3.jpg', alt: 'Detail work 3' },
  { id: 4, src: '/images/gallery/4.jpg', alt: 'Detail work 4' },
  { id: 5, src: '/images/gallery/5.jpg', alt: 'Detail work 5' },
  { id: 6, src: '/images/gallery/6.jpg', alt: 'Detail work 6' },
  { id: 7, src: '/images/gallery/7.jpg', alt: 'Detail work 7' },
  { id: 8, src: '/images/gallery/8.jpg', alt: 'Detail work 8' },
  { id: 9, src: '/images/gallery/9.jpg', alt: 'Detail work 9' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative break-inside-avoid group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
              whileHover={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden rounded-sm bg-graphite-900 aspect-[4/5]">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-graphite-700 via-graphite-800 to-graphite-900" />
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover opacity-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-lg mb-2">
                      {image.alt}
                    </p>
                    <div className="h-px w-16 bg-white/50" />
                  </div>
                </motion.div>

                {/* Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20 rounded-full"
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

            {/* Image */}
            <motion.div
              className="relative max-w-5xl w-full aspect-[4/3] bg-graphite-900 rounded-sm overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-graphite-700 via-graphite-800 to-graphite-900" />
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain opacity-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>

            {/* Navigation */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/20 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
                setSelectedImage(galleryImages[prevIndex].id);
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
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage(galleryImages[nextIndex].id);
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
