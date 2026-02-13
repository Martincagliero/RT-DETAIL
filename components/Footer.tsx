'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showFloatingBtn, setShowFloatingBtn] = useState(true);
  const [showWhatsAppOverlay, setShowWhatsAppOverlay] = useState(false);

  // Detectar cuando la sección CTA está visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingBtn(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Manejar clic en WhatsApp
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowWhatsAppOverlay(true);
    setTimeout(() => {
      window.open('https://wa.me/5491123392274?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20detailing.', '_blank');
      setShowWhatsAppOverlay(false);
    }, 300);
  };

  return (
    <footer className="relative bg-deep-black overflow-hidden">
      {/* CTA Section - Premium Conversion Strategy */}
      <div 
        ref={ctaRef}
        className="relative py-[100px] md:py-[120px] lg:py-[140px] px-4 md:px-8 lg:px-16"
      >
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Title */}
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl metallic-text mb-8 md:mb-12">
            AGENDÁ TU TURNO
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl mb-12 md:mb-16 tracking-wide leading-relaxed">
            Contactá con nosotros mediante tu canal preferido y reservá tu turno para una experiencia de detailing premium
          </p>

          {/* Buttons Container - Professional Layout */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 justify-center items-stretch md:items-center">
            {/* Email Button - Premium Style */}
            <motion.a
              href="mailto:rtdetailcontacto@gmail.com?subject=Solicitud%20de%20turno%20RT%20Detail&body=Hola%2C%20quiero%20agendar%20un%20turno%20para%20detailing."
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-gray-100 to-gray-200 text-deep-black font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG Envelope Icon - Minimalist */}
              <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <span className="relative z-10 text-sm md:text-base font-bold">ENVIAR MAIL</span>
              
              {/* Hover background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[14px]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* WhatsApp Button - Premium Style */}
            <motion.a
              href="https://wa.me/5491123392274?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20detailing."
              onClick={handleWhatsAppClick}
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-[#25D366] to-[#20ba5a] text-white font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG WhatsApp Icon - Minimalist */}
              <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.921.927-.129 1.124.792.199 1.592.489 2.332 1.039 1.315.929 2.19 2.285 2.461 3.801.272 1.516.04 3.196-.529 4.523-.566 1.327-1.529 2.261-2.67 2.75-.584.235-1.207.303-1.825.174-.617-.128-1.176-.4-1.656-.873-.48-.473-.872-1.066-1.154-1.666-.282-.6-.47-1.223-.553-1.844-.084-.62-.093-1.202-.035-1.754.058-.552.19-1.07.38-1.557.189-.487.456-.92.784-1.281.328-.361.73-.651 1.188-.858.458-.207.96-.325 1.48-.342.52-.017 1.037.064 1.539.238.503.175.97.449 1.39.805.42.356.786.797 1.094 1.307.309.51.556 1.074.73 1.68.175.606.27 1.251.277 1.912.007.66-.078 1.306-.246 1.926-.168.62-.425 1.2-.758 1.726-.333.526-.74 1.0-1.217 1.419-.476.42-1.013.761-1.607 1.023-.594.263-1.231.443-1.906.535-.676.092-1.387.07-2.097-.067-.71-.137-1.398-.407-2.049-.798-.651-.391-1.247-.895-1.779-1.503-.532-.608-.992-1.314-1.369-2.1-.376-.785-.674-1.638-.878-2.543-.204-.905-.32-1.858-.34-2.837-.02-.98.078-1.938.289-2.86.211-.922.556-1.8 1.024-2.623.468-.823 1.072-1.576 1.81-2.254.738-.678 1.61-1.271 2.605-1.766.995-.495 2.108-.89 3.33-1.176 1.222-.286 2.543-.464 3.957-.528 1.414-.064 2.914-.009 4.498.168 1.584.177 3.237.504 4.947.976.341.099.648.26.914.474.266.214.483.472.651.767.168.295.283.618.341.963.059.345.06.707.005 1.081-.055.374-.172.745-.341 1.098z"/>
              </svg>
              <span className="relative z-10 text-sm md:text-base font-bold">WHATSAPP</span>
              
              {/* Hover background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#20ba5a] to-[#1eaa4f] rounded-[14px]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
      />

      {/* Footer Info Section */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-16">
        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-4xl metallic-text mb-4">RT DETAIL</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Perfección en cada detalle. Tratamientos premium para tu vehículo.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 tracking-wider">SERVICIOS</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {['Ópticos', 'Sellados', 'Tapizados', 'Ruedas', 'Interiores', 'Chasis', 'Motores'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 tracking-wider">CONTACTO</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>info@rtdetail.com</li>
              <li>+54 9 1123392274</li>
              <li>Instagram: @rtdetail</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} RT Detail. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacidad
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating WhatsApp Button - Smart Behavior */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.a
            href="https://wa.me/5491123392274?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20detailing."
            onClick={handleWhatsAppClick}
            className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20ba5a] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* WhatsApp Icon */}
            <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.921.927-.129 1.124.792.199 1.592.489 2.332 1.039 1.315.929 2.19 2.285 2.461 3.801.272 1.516.04 3.196-.529 4.523-.566 1.327-1.529 2.261-2.67 2.75-.584.235-1.207.303-1.825.174-.617-.128-1.176-.4-1.656-.873-.48-.473-.872-1.066-1.154-1.666-.282-.6-.47-1.223-.553-1.844-.084-.62-.093-1.202-.035-1.754.058-.552.19-1.07.38-1.557.189-.487.456-.92.784-1.281.328-.361.73-.651 1.188-.858.458-.207.96-.325 1.48-.342.52-.017 1.037.064 1.539.238.503.175.97.449 1.39.805.42.356.786.797 1.094 1.307.309.51.556 1.074.73 1.68.175.606.27 1.251.277 1.912.007.66-.078 1.306-.246 1.926-.168.62-.425 1.2-.758 1.726-.333.526-.74 1.0-1.217 1.419-.476.42-1.013.761-1.607 1.023-.594.263-1.231.443-1.906.535-.676.092-1.387.07-2.097-.067-.71-.137-1.398-.407-2.049-.798-.651-.391-1.247-.895-1.779-1.503-.532-.608-.992-1.314-1.369-2.1-.376-.785-.674-1.638-.878-2.543-.204-.905-.32-1.858-.34-2.837-.02-.98.078-1.938.289-2.86.211-.922.556-1.8 1.024-2.623.468-.823 1.072-1.576 1.81-2.254.738-.678 1.61-1.271 2.605-1.766.995-.495 2.108-.89 3.33-1.176 1.222-.286 2.543-.464 3.957-.528 1.414-.064 2.914-.009 4.498.168 1.584.177 3.237.504 4.947.976.341.099.648.26.914.474.266.214.483.472.651.767.168.295.283.618.341.963.059.345.06.707.005 1.081-.055.374-.172.745-.341 1.098z"/>
            </svg>

            {/* Subtle pulse animation */}
            <motion.div
              className="absolute inset-0 bg-[#20ba5a] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 9,
                ease: 'easeInOut'
              }}
            />
          </motion.a>
        )}
      </AnimatePresence>

      {/* WhatsApp Connection Overlay */}
      <AnimatePresence>
        {showWhatsAppOverlay && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-deep-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <motion.div
                  className="absolute inset-0 border-2 border-[#25D366]/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                <svg className="w-full h-full text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.921.927-.129 1.124.792.199 1.592.489 2.332 1.039 1.315.929 2.19 2.285 2.461 3.801.272 1.516.04 3.196-.529 4.523-.566 1.327-1.529 2.261-2.67 2.75-.584.235-1.207.303-1.825.174-.617-.128-1.176-.4-1.656-.873-.48-.473-.872-1.066-1.154-1.666-.282-.6-.47-1.223-.553-1.844-.084-.62-.093-1.202-.035-1.754.058-.552.19-1.07.38-1.557.189-.487.456-.92.784-1.281.328-.361.73-.651 1.188-.858.458-.207.96-.325 1.48-.342.52-.017 1.037.064 1.539.238.503.175.97.449 1.39.805.42.356.786.797 1.094 1.307.309.51.556 1.074.73 1.68.175.606.27 1.251.277 1.912.007.66-.078 1.306-.246 1.926-.168.62-.425 1.2-.758 1.726-.333.526-.74 1.0-1.217 1.419-.476.42-1.013.761-1.607 1.023-.594.263-1.231.443-1.906.535-.676.092-1.387.07-2.097-.067-.71-.137-1.398-.407-2.049-.798-.651-.391-1.247-.895-1.779-1.503-.532-.608-.992-1.314-1.369-2.1-.376-.785-.674-1.638-.878-2.543-.204-.905-.32-1.858-.34-2.837-.02-.98.078-1.938.289-2.86.211-.922.556-1.8 1.024-2.623.468-.823 1.072-1.576 1.81-2.254.738-.678 1.61-1.271 2.605-1.766.995-.495 2.108-.89 3.33-1.176 1.222-.286 2.543-.464 3.957-.528 1.414-.064 2.914-.009 4.498.168 1.584.177 3.237.504 4.947.976.341.099.648.26.914.474.266.214.483.472.651.767.168.295.283.618.341.963.059.345.06.707.005 1.081-.055.374-.172.745-.341 1.098z"/>
                </svg>
              </div>
              <p className="text-white text-lg font-semibold tracking-wide">
                Conectando con WhatsApp…
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
