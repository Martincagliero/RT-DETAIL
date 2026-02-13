'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  price: string;
  gallery: string[];
  image: string;
  direction: 'left' | 'right';
  isVideo?: boolean;
}

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className={`service-card-${service.id} relative group`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
        {/* Image */}
        <motion.div
          className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-sm bg-graphite-900"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Placeholder gradient - usuario reemplazará con imágenes reales */}
          <div className="absolute inset-0 bg-gradient-to-br from-graphite-800 via-graphite-700 to-graphite-900" />
          
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Zoom effect on hover */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {service.isVideo ? (
              <video
                src={service.image}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Hide broken image, show gradient instead
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
          </motion.div>

          {/* Border glow effect */}
          <motion.div
            className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-500"
            style={{
              boxShadow: isHovered ? '0 0 30px rgba(255,255,255,0.2)' : 'none'
            }}
          />

          {/* Number badge */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
            <span className="font-display text-2xl text-white">
              {String(service.id).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.h3
            className="font-display text-5xl md:text-6xl lg:text-7xl metallic-text"
            initial={{ opacity: 0, x: service.direction === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {service.title}
          </motion.h3>
          
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-white to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-white/70 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {service.description}
          </motion.p>

          <motion.button
            className="group/btn flex items-center gap-3 text-white font-semibold tracking-wider hover:gap-5 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ x: 10 }}
            onClick={() => setIsOpen(true)}
          >
            <span>MÁS INFO</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[18px] bg-graphite-950 border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar"
              >
                <span className="text-xl">×</span>
              </button>

              <div className="px-6 py-8 md:px-10 md:py-10 space-y-8">
                <div className="space-y-3">
                  <p className="text-white/50 text-sm tracking-[0.3em]">SERVICIO</p>
                  <h3 className="font-display text-4xl md:text-5xl metallic-text">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold tracking-wider">BENEFICIOS INCLUIDOS</h4>
                    <ul className="space-y-2 text-white/70 text-sm md:text-base">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/50 text-sm uppercase tracking-widest">Duracion</p>
                      <p className="text-white text-lg font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm uppercase tracking-widest">Precio</p>
                      <p className="text-white text-lg font-semibold">{service.price}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-semibold tracking-wider">GALERIA</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.gallery.map((src, idx) => (
                      <div
                        key={`${service.id}-gallery-${idx}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-graphite-900 border border-white/10"
                      >
                        {src.endsWith('.mp4') ? (
                          <video
                            src={src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={src}
                            alt={`${service.title} ${idx + 1}`}
                            fill
                            sizes="(min-width: 640px) 33vw, 100vw"
                            quality={70}
                            className="object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    className="flex-1 rounded-[14px] bg-white text-deep-black font-semibold py-3 px-6 tracking-wider hover:bg-white/90 transition"
                    onClick={() => {
                      setIsOpen(false);
                      const element = document.getElementById('agendar-turno');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    AGENDAR TURNO
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-[14px] border border-white/30 text-white/80 font-semibold py-3 px-6 tracking-wider hover:text-white hover:border-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    CERRAR
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
