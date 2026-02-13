'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  direction: 'left' | 'right';
  isVideo?: boolean;
}

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
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
    </motion.div>
  );
}
