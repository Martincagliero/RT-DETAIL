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
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-[#25D366] to-[#20ba5a] text-white font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Official WhatsApp Icon - Clean SVG */}
              <svg className="w-5 h-5 md:w-[22px] md:h-[22px] relative z-10 flex-shrink-0" fill="white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.248.638 4.359 1.749 6.156L.216 23.469 6.938 21.64C8.762 22.912 11.292 23.5 12 23.5c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.489 17.541c-.287.844-1.67 1.559-2.499 1.723-.568.106-1.309.209-3.814-.821-3.238-1.307-5.359-4.835-5.522-5.056-.161-.22-1.318-1.753-1.318-3.342 0-1.588.831-2.367 1.124-2.693.293-.325.638-.407.85-.407.211 0 .421 0 .604.011.194.012.482-.073.755.577.276.657 1.336 3.277 1.456 3.516.12.239.201.517.041.828-.161.312-.242.509-.485.783-.242.273-.51.608-.729.825-.242.241-.492.502-.211.981.281.479 1.247 2.056 2.675 3.329 1.839 1.637 3.399 2.144 3.878 2.387.479.241.757.2 1.037-.122.281-.322 1.19-1.387 1.508-1.858.318-.471.637-.394.956-.237.318.156 2.03 1.054 2.378 1.244s.588.27.675.421c.086.152.086.884-.201 1.728z"/>
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
            {/* Official WhatsApp Icon - Clean SVG */}
            <svg className="w-8 h-8 text-white relative z-10" fill="white" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.248.638 4.359 1.749 6.156L.216 23.469 6.938 21.64C8.762 22.912 11.292 23.5 12 23.5c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.489 17.541c-.287.844-1.67 1.559-2.499 1.723-.568.106-1.309.209-3.814-.821-3.238-1.307-5.359-4.835-5.522-5.056-.161-.22-1.318-1.753-1.318-3.342 0-1.588.831-2.367 1.124-2.693.293-.325.638-.407.85-.407.211 0 .421 0 .604.011.194.012.482-.073.755.577.276.657 1.336 3.277 1.456 3.516.12.239.201.517.041.828-.161.312-.242.509-.485.783-.242.273-.51.608-.729.825-.242.241-.492.502-.211.981.281.479 1.247 2.056 2.675 3.329 1.839 1.637 3.399 2.144 3.878 2.387.479.241.757.2 1.037-.122.281-.322 1.19-1.387 1.508-1.858.318-.471.637-.394.956-.237.318.156 2.03 1.054 2.378 1.244s.588.27.675.421c.086.152.086.884-.201 1.728z"/>
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
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.248.638 4.359 1.749 6.156L.216 23.469 6.938 21.64C8.762 22.912 11.292 23.5 12 23.5c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.489 17.541c-.287.844-1.67 1.559-2.499 1.723-.568.106-1.309.209-3.814-.821-3.238-1.307-5.359-4.835-5.522-5.056-.161-.22-1.318-1.753-1.318-3.342 0-1.588.831-2.367 1.124-2.693.293-.325.638-.407.85-.407.211 0 .421 0 .604.011.194.012.482-.073.755.577.276.657 1.336 3.277 1.456 3.516.12.239.201.517.041.828-.161.312-.242.509-.485.783-.242.273-.51.608-.729.825-.242.241-.492.502-.211.981.281.479 1.247 2.056 2.675 3.329 1.839 1.637 3.399 2.144 3.878 2.387.479.241.757.2 1.037-.122.281-.322 1.19-1.387 1.508-1.858.318-.471.637-.394.956-.237.318.156 2.03 1.054 2.378 1.244s.588.27.675.421c.086.152.086.884-.201 1.728z"/>
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
