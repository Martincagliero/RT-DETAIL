'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

export default function MotorcyclesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    // Animate title letters with reveal mask
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('.moto-letter');
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 80,
          clipPath: 'inset(100% 0 0 0)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0 0)',
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.08,
          delay: 0.5
        }
      );
    }
  }, []);

  const titleText = 'PRECISIÓN SOBRE DOS RUEDAS';

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-deep-black"
    >
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onError={() => console.log('Error loading motorcycle video')}
        >
          <source src="/videos/motos/principal.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay con gradiente radial dinámico */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black" />
        
        {/* Radial gradient overlay dinamico */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          ref={titleRef}
          className="text-center max-w-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Línea decorativa superior */}
          <motion.div
            className="h-px w-32 mx-auto mb-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Título con reveal */}
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tighter">
            {titleText.split('').map((letter, i) => (
              <span
                key={i}
                className="moto-letter inline-block"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #ffffff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(255,255,255,0.2)',
                  transformOrigin: 'center bottom'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h2>

          {/* Línea decorativa inferior */}
          <motion.div
            className="h-px w-32 mx-auto mt-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Subtítulo */}
          <motion.p
            className="mt-8 text-white/70 text-lg md:text-xl tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Especialización extrema en detailing de motos
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
