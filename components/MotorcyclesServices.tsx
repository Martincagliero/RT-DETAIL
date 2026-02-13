'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function MotorcyclesServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    'Detailing Completo',
    'Protección Cerámica',
    'Pulido de Tanque',
    'Restauración de Plásticos',
    'Tratamiento de Llantas',
    'Sellado de Motor'
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-deep-black via-graphite-950 to-deep-black overflow-hidden"
    >
      {/* Fondo ondulante sutil */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(192,192,192,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(192,192,192,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(192,192,192,0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center"
          style={{ opacity, y }}
        >
          {/* Left: Image/Video */}
          <motion.div
            className="relative h-96 md:h-[500px] overflow-hidden rounded-sm bg-graphite-900 order-2 lg:order-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Video placeholder */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onError={() => console.log('Moto video loading...')}
            >
              <source src="/videos/motos/detalle.mp4" type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black/40" />

            {/* Hover effect border */}
            <motion.div
              className="absolute inset-0 border-2 border-white/0"
              animate={{
                borderColor: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)',
                boxShadow: isHovered ? '0 0 30px rgba(255,255,255,0.1)' : 'none'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Título */}
            <motion.h3
              className="font-display text-5xl sm:text-6xl md:text-7xl metallic-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              SERVICIOS
            </motion.h3>

            {/* Descripción */}
            <motion.p
              className="text-white/70 text-lg mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Especializados en detailing de motocicletas con técnicas de precisión extrema. Cada servicio es diseñado para mantener la integridad estética y funcional de tu moto.
            </motion.p>

            {/* Services List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {/* Bullet point */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  {/* Service text */}
                  <span className="text-white/80 text-base md:text-lg tracking-wide group-hover:text-white transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="mt-12 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-widest hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">CONSULTAR SERVICIOS</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
