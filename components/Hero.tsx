'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import Particles from './Particles';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  // Videos del hero - coloca tus videos en public/videos/hero/
  const videos = [
    '/videos/hero/hero-1.mp4',
    '/videos/hero/hero-2.mp4',
    '/videos/hero/hero-3.mp4',
  ];

  useEffect(() => {
    // Animate title letters with stagger - with blur reveal
    const letters = document.querySelectorAll('.hero-letter');
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        filter: 'blur(10px)'
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.05,
        delay: 2.2
      }
    );

    // Animate subtitle with fade-in
    gsap.fromTo(
      '.hero-subtitle',
      {
        opacity: 0,
        y: 50,
        filter: 'blur(8px)'
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        delay: 2.8
      }
    );

    // Video transition interval
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fade video transition
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
      );
    }
  }, [currentVideo]);

  const titleText = 'PERFECCIÓN';
  const subtitleText = 'EN CADA DETALLE';

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-deep-black"
    >
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <video
          ref={videoRef}
          key={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-40"
          onError={(e) => {
            console.log('Error cargando video:', videos[currentVideo]);
          }}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        {/* Dark overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/50 to-deep-black" />
        
        {/* Metallic gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-metallic/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>

      {/* Particles */}
      <Particles />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        style={{ opacity }}
      >
        {/* Main Title */}
        <div className="mb-4 overflow-hidden max-h-[15vh]">
          <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            {titleText.split('').map((letter, i) => (
              <span
                key={i}
                className="hero-letter inline-block metallic-text"
                style={{ transformOrigin: 'bottom center' }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden max-h-[12vh]">
          <h2 className="hero-subtitle font-display text-white/90 tracking-wide" style={{ fontSize: 'clamp(1.25rem, 4.5vw, 2.75rem)' }}>
            {subtitleText.split(' ').map((word, i) => (
              <span
                key={i}
                className={word === 'DETALLE' ? 'relative inline-block ml-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gradient-to-r after:from-white/30 after:via-white/60 after:to-white/30' : 'inline-block mr-2'}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px w-64 md:w-96 bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 3.2 }}
        />

        {/* CTA */}
        <motion.button
          className="mt-12 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold tracking-widest hover:bg-white/20 transition-all duration-300 group relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">AGENDAR TURNO</span>
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-white/50 text-xs mt-2 tracking-widest">SCROLL</p>
      </motion.div>
    </section>
  );
}
