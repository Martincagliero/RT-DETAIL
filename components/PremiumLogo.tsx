'use client';

import { motion } from 'framer-motion';

export default function PremiumLogo() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Sombra difusa suave */}
      <motion.div
        className="absolute -inset-8 blur-2xl opacity-40 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Logo container */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -6, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <h1
          className="font-display text-7xl md:text-8xl metallic-text whitespace-nowrap"
          style={{
            textShadow: '0 4px 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)',
            letterSpacing: '0.08em'
          }}
        >
          RT DETAIL
        </h1>

        {/* Light sweep metálico sutil */}
        <motion.div
          className="absolute inset-0 opacity-0 overflow-hidden rounded-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.25, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut'
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
            style={{
              transform: 'skewX(-20deg)',
              animation: 'sweep-light 2s ease-in-out forwards',
              animationDelay: '0s'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Línea decorativa */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      />

      <style>{`
        @keyframes sweep-light {
          0% {
            transform: translateX(-300%) scaleX(0.8) skewX(-20deg);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(300%) scaleX(0.8) skewX(-20deg);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}
