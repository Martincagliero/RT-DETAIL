'use client';

import { motion } from 'framer-motion';

export default function MaskReveal() {
  return (
    <div className="relative h-screen pointer-events-none">
      {/* Vertical curtain reveal */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="reveal-clip">
            <path id="reveal-path" d="M 0,0 L 1920,0 L 1920,1080 L 0,1080 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Animated reveal layer */}
      <motion.div
        className="absolute inset-0 bg-deep-black"
        initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
        animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        transition={{
          duration: 0.8,
          ease: 'power4.out',
          delay: 0.2
        }}
        style={{
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
        }}
      />

      {/* Vertical split reveal (cortina) */}
      <motion.div
        className="absolute inset-0 bg-deep-black"
        initial={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}
        animate={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
        transition={{
          duration: 1,
          ease: 'power4.out'
        }}
      />
      <motion.div
        className="absolute inset-0 bg-deep-black"
        initial={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
        animate={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
        transition={{
          duration: 1,
          ease: 'power4.out'
        }}
      />
    </div>
  );
}
