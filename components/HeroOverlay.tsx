'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroOverlayProps {
  isHeroVisible: boolean;
}

export default function HeroOverlay({ isHeroVisible }: HeroOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  useEffect(() => {
    if (!containerRef.current || !isHeroVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Calcular posición del mouse como porcentaje, con límite de movimiento
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Limitar el movimiento a 2-4% máximo
      const limitedX = 50 + (x - 50) * 0.03;
      const limitedY = 50 + (y - 50) * 0.03;

      setMouseX(limitedX);
      setMouseY(limitedY);
    };

    const rect = containerRef.current;
    rect.addEventListener('mousemove', handleMouseMove);
    return () => rect.removeEventListener('mousemove', handleMouseMove);
  }, [isHeroVisible]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 z-20 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Radial gradient dinámico */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, 
            rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.5) 40%, 
            rgba(0,0,0,0.7) 100%)`
        }}
      />

      {/* Overlay base oscuro */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
          backdropFilter: 'blur(0px)'
        }}
      />

      {/* Vignette suave en bordes */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)'
        }}
      />
    </motion.div>
  );
}
