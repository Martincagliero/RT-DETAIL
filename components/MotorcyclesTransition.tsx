'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function MotorcyclesTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !revealRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 0.8,
        markers: false
      }
    });

    // Vertical curtain reveal effect using clipPath
    tl.fromTo(
      revealRef.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        opacity: 1
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out'
      }
    );

    // Subtitle reveal with delay
    gsap.fromTo(
      '.transition-subtitle',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          scrub: 0.5
        }
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 bg-gradient-to-b from-deep-black to-graphite-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Reveal element */}
      <div
        ref={revealRef}
        className="relative z-10 w-full max-w-4xl text-center"
      >
        {/* Top accent */}
        <motion.div
          className="h-px w-32 mx-auto mb-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Main heading */}
        <motion.h2
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl metallic-text mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Experiencia Completa
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="transition-subtitle text-white/60 text-lg md:text-xl tracking-wider leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Desde la inspección inicial hasta el acabado final, cada paso está diseñado para transformar tu moto.
        </motion.p>

        {/* Bottom accent */}
        <motion.div
          className="h-px w-32 mx-auto mt-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/40 text-xs tracking-widest uppercase">Scroll</div>
        <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
