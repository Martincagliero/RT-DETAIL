'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function MotorcycleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-deep-black overflow-hidden flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-deep-black to-graphite-950 opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="h-px w-24 mb-6 bg-gradient-to-r from-white to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl metallic-text mb-6">
                MOTOS
              </h2>
            </motion.div>

            <motion.p
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Detailing especializado para motocicletas. Tratamientos premium
              que respetan cada detalle de tu máquina, desde el cromado hasta
              el tapizado.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {['Limpieza profunda', 'Pulido de cromados', 'Protección de plásticos', 'Tratamiento de cuero'].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-white rotate-45" />
                  <span className="text-white/90 tracking-wide">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-widest hover:bg-white/20 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">CONOCER MÁS</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            style={{ x, scale }}
          >
            <motion.div
              className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-graphite-700 via-graphite-800 to-graphite-900" />
              
              <Image
                src="/images/motorcycle.jpg"
                alt="Motorcycle Detailing"
                fill
                className="object-cover opacity-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent" />

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 border-2 border-white/20"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,255,255,0.1)',
                    '0 0 40px rgba(255,255,255,0.2)',
                    '0 0 20px rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
