'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'ÓPTICOS',
    description: 'Restauración y pulido de faros para máxima claridad y estética.',
    longDescription:
      'Restauramos faros opacados y rayados para recuperar visibilidad nocturna y un frente mas limpio.',
    benefits: [
      'Mayor claridad y seguridad',
      'Eliminacion de opacidad y amarilleo',
      'Mejora estetica inmediata'
    ],
    duration: '45 a 90 min',
    price: 'Consultar precio',
    gallery: [
      '/images/services/01-opticos/optico-1.webp',
      '/images/services/01-opticos/optico-2.jpg',
      '/images/services/01-opticos/optico-3.jpg'
    ],
    image: '/videos/servicios/opticas.jpg',
    direction: 'left' as const
  },
  {
    id: 2,
    title: 'SELLADOS',
    description: 'Protección cerámica de alta durabilidad para la pintura.',
    longDescription:
      'Sellado profesional que realza el brillo y protege la pintura contra contaminantes y clima.',
    benefits: [
      'Brillo profundo y tacto suave',
      'Proteccion UV y quimica',
      'Facil mantenimiento'
    ],
    duration: '4 a 8 hs',
    price: 'Consultar precio',
    gallery: [
      '/images/services/02-sellados/sellado-1.webp',
      '/images/services/02-sellados/sellado-2.jpg',
      '/images/services/02-sellados/sellado-3.jpg'
    ],
    image: '/videos/proceso/sellados.jpg',
    direction: 'right' as const
  },
  {
    id: 3,
    title: 'TAPIZADOS',
    description: 'Limpieza profunda y restauración de interiores.',
    longDescription:
      'Limpieza integral de tapizados con extraccion, eliminando manchas y olores persistentes.',
    benefits: [
      'Remocion de manchas y olores',
      'Higiene profunda',
      'Recuperacion de color'
    ],
    duration: '3 a 5 hs',
    price: 'Consultar precio',
    gallery: [
      '/images/services/03-tapizados/tapizado-1.webp',
      '/images/services/03-tapizados/tapizado-2.webp',
      '/images/services/03-tapizados/tapizado-3.jpg'
    ],
    image: '/videos/servicios/tapizados.mp4',
    direction: 'left' as const,
    isVideo: true
  },
  {
    id: 4,
    title: 'RUEDAS',
    description: 'Detailing completo de llantas y neumáticos.',
    longDescription:
      'Descontaminacion y limpieza profunda de llantas, neumáticos y pasos de rueda.',
    benefits: [
      'Acabado satinado en neumaticos',
      'Eliminacion de polvo de frenos',
      'Proteccion contra suciedad'
    ],
    duration: '1 a 2 hs',
    price: 'Consultar precio',
    gallery: [
      '/images/services/04-ruedas/ruedas-1.jpg',
      '/images/services/04-ruedas/ruedas-2.webp',
      '/images/services/04-ruedas/ruedas-3.webp'
    ],
    image: '/videos/servicios/ruedas.mp4',
    direction: 'right' as const,
    isVideo: true
  },
  {
    id: 5,
    title: 'INTERIORES',
    description: 'Limpieza exhaustiva y acondicionamiento interior.',
    longDescription:
      'Acondicionamiento completo de interiores con limpieza de paneles, cueros y plasticos.',
    benefits: [
      'Ambiente limpio y renovado',
      'Proteccion de superficies',
      'Detalles finos en cada area'
    ],
    duration: '3 a 6 hs',
    price: 'Consultar precio',
    gallery: [
      '/images/services/05-interiores/interiores-1.webp',
      '/images/services/05-interiores/interiores-2.webp',
      '/images/services/05-interiores/interiores-3.webp'
    ],
    image: '/videos/servicios/interiores.mp4',
    direction: 'left' as const,
    isVideo: true
  },
  {
    id: 6,
    title: 'CHASIS',
    description: 'Limpieza y protección del chasis y bajos.',
    longDescription:
      'Limpieza tecnica del chasis y bajos con proteccion contra humedad y corrosión.',
    benefits: [
      'Eliminacion de barro y grasa',
      'Proteccion anticorrosiva',
      'Mejor preservacion a largo plazo'
    ],
    duration: '2 a 4 hs',
    price: 'Consultar precio',
    gallery: [
      '/images/services/06-chasis/chasis-1.jpg',
      '/images/services/06-chasis/chasis-2.webp',
      '/images/services/06-chasis/chasis-3.webp'
    ],
    image: '/videos/servicios/chasis.mp4',
    direction: 'right' as const,
    isVideo: true
  },
  {
    id: 7,
    title: 'MOTORES PULIDOS',
    description: 'Detailing de motor para un acabado impecable.',
    longDescription:
      'Limpieza y detailing de motor con proteccion de componentes y acabado premium.',
    benefits: [
      'Aspecto profesional del vano',
      'Proteccion de gomas y plasticos',
      'Mejor presentacion general'
    ],
    duration: '2 a 3 hs',
    price: 'Consultar precio',
    gallery: [
      '/images/services/07-motores/motores-1.webp',
      '/images/services/07-motores/motores-2.webp',
      '/images/services/07-motores/motores-3.mp4'
    ],
    image: '/videos/servicios/motores.mp4',
    direction: 'left' as const,
    isVideo: true
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        scale: 0.8,
      });

      // Animate service cards
      services.forEach((service, index) => {
        const direction = service.direction === 'left' ? -100 : 100;
        
        gsap.from(`.service-card-${service.id}`, {
          scrollTrigger: {
            trigger: `.service-card-${service.id}`,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 1,
            markers: false,
          },
          x: direction,
          opacity: 0,
          rotation: service.direction === 'left' ? -5 : 5,
        });
      });

      // Animate decorative lines
      gsap.from('.service-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-deep-black via-graphite-950 to-deep-black overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section Title */}
      <div className="relative z-10 mb-24 text-center">
        <motion.div
          className="service-line h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-white to-transparent"
        />
        <h2
          ref={titleRef}
          className="font-display text-6xl md:text-8xl lg:text-9xl metallic-text mb-6"
        >
          SERVICIOS
        </h2>
        <motion.p
          className="text-white/60 text-lg md:text-xl tracking-wider max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Tratamientos premium para cada aspecto de tu vehículo
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 space-y-24 md:space-y-32 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="relative">
            <ServiceCard service={service} index={index} />
            
            {/* Separator line between cards */}
            {index < services.length - 1 && (
              <motion.div
                className="service-line mt-24 md:mt-32 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-metallic/5 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
}
