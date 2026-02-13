'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EditorialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  });

  // Parallax effect sutil
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const text = 'EL DETALLE LO ES TODO';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-deep-black py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-graphite-950 to-deep-black" />

      {/* Animated glow background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 55% 45%, rgba(255,255,255,0.08) 0%, transparent 70%)',
            'radial-gradient(circle at 45% 55%, rgba(255,255,255,0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        style={{ y, opacity, scale }}
      >
        {/* Decorative line top */}
        <motion.div
          className="h-px w-32 mx-auto mb-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />

        {/* Giant text with stroke and reveal animation */}
        <div className="relative">
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[13rem] leading-[0.9] tracking-tighter">
            {text.split(' ').map((word, wordIndex) => (
              <div key={wordIndex} className="overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: wordIndex * 0.15,
                    ease: 'power4.out'
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 70%, rgba(255,255,255,0.5) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textStroke: '2px rgba(255,255,255,0.2)',
                    textShadow: '0 0 60px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)'
                  }}
                >
                  {word}
                  {wordIndex < text.split(' ').length - 1 && ' '}
                </motion.span>
              </div>
            ))}
          </h2>

          {/* Glow effect behind text */}
          <motion.div
            className="absolute inset-0 -z-10 blur-[100px] opacity-30"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* Decorative line bottom */}
        <motion.div
          className="h-px w-32 mx-auto mt-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-white/60 text-lg md:text-xl tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Cada parte de tu vehículo merece precisión extrema
        </motion.p>
      </motion.div>

      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-graphite-950 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
}
