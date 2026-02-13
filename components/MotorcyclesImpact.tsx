'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MotorcyclesImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Get individual letters for stagger effect
    const letters = textRef.current.querySelectorAll('span');

    // Create timeline for scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'center center',
        scrub: 0.5,
        markers: false
      }
    });

    // Stagger reveal with mask animation
    tl.fromTo(
      letters,
      {
        opacity: 0,
        y: 100,
        clipPath: 'inset(0 0 100% 0)'
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.5,
        stagger: {
          amount: 0.8,
          ease: 'power4.out'
        }
      }
    );

    // Subtle vibration on enter
    letters.forEach((letter) => {
      gsap.to(letter, {
        x: () => gsap.utils.random(-2, 2),
        rotation: () => gsap.utils.random(-0.5, 0.5),
        duration: 0.08,
        repeat: 2,
        yoyo: true,
        delay: Math.random() * 0.3
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const text = 'LA DIFERENCIA ESTÁ EN EL DETALLE';

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-deep-black overflow-hidden py-32"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Small header */}
        <div className="mb-16 md:mb-24">
          <p className="text-white/50 text-base md:text-lg tracking-[0.3em] uppercase font-light">
            Especialización Extrema
          </p>
        </div>

        {/* Giant text with letter-by-letter reveal */}
        <div
          ref={textRef}
          className="relative max-w-5xl mx-auto"
        >
          <h2 className="font-display leading-[1.2] tracking-[-0.02em] font-bold" style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}>
            {text.split('').map((char, index) => (
              <span
                key={index}
                className={`inline-block ${
                  char === ' ' ? 'w-[0.3em]' : ''
                } ${
                  char === char.toUpperCase() && char !== ' '
                    ? 'text-white'
                    : 'text-white/40'
                }`}
                style={{
                  textShadow: char !== ' ' 
                    ? '0 0 30px rgba(255,255,255,0.1), -2px -2px 10px rgba(0,0,0,0.8)'
                    : 'none',
                  WebkitTextStroke: char !== ' ' ? '0.5px rgba(255,255,255,0.2)' : 'none'
                }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 md:mt-24">
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Supporting text */}
        <div className="mt-12 md:mt-16 max-w-2xl mx-auto">
          <p className="text-white/40 text-sm md:text-base leading-relaxed tracking-wide">
            Cada detalle cuenta cuando se trata de perfección. Nuestro equipo especializado invierte tiempo, pasión y técnica avanzada en cada trabajo.
          </p>
        </div>
      </div>
    </section>
  );
}
