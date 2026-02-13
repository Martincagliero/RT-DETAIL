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
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-gray-100 to-gray-200 text-deep-black font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 flex items-center justify-center gap-[10px] shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG Envelope Icon - Perfectly Aligned */}
              <svg className="w-[22px] h-[22px] md:w-[22px] md:h-[22px] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <span className="text-sm md:text-base font-semibold uppercase">ENVIAR MAIL</span>
              
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
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-[#25D366] to-[#20ba5a] text-white font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 flex items-center justify-center gap-[10px] shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Official WhatsApp Icon - Perfectly Aligned */}
              <svg className="w-[22px] h-[22px] md:w-[22px] md:h-[22px] flex-shrink-0" fill="white" viewBox="0 0 24 24">
                <path d="M12,2C6.5,2 2,6.5 2,12C2,13.8 2.5,15.5 3.2,17L2,22L7.1,20.8C8.8,21.6 10.8,22 12,22C17.5,22 22,17.5 22,12C22,6.5 17.5,2 12,2M12,20C10.2,20 8.6,19.5 7.2,18.7L7,18.6L4.5,19.3L5.2,16.9L5,16.7C4.1,15.3 3.6,13.7 3.6,12C3.6,7.4 7.4,3.6 12,3.6C16.6,3.6 20.4,7.4 20.4,12C20.4,16.6 16.6,20 12,20M18.7,14.3C18.4,14.1 17,13.4 16.7,13.3C16.5,13.2 16.3,13.2 16.1,13.4C15.9,13.6 15.3,14.3 15.1,14.5C15,14.7 14.8,14.7 14.6,14.6C13.4,14 12.3,13.2 11.5,12.2C11.2,11.8 11.5,11.8 11.8,11.5C11.9,11.4 12,11.2 12.2,11C12.3,10.8 12.3,10.6 12.1,10.5C11.9,10.4 11.3,9.2 11.1,8.7C10.8,8.1 10.5,8.2 10.3,8.2C10.1,8.2 9.9,8.2 9.7,8.2C9.5,8.2 9.1,8.4 8.9,8.6C8.7,8.8 8.1,9.5 8.1,10.7C8.1,11.9 8.8,13 8.9,13.2C9.1,13.4 11.3,16.5 14.6,17.8C15.7,18.3 16.5,18.5 17.1,18.7C18.2,19.1 19.2,19 19.9,18.9C20.6,18.8 22,18.3 22.2,17.7C22.4,17.1 22.4,16.6 22.3,16.5C22.3,16.3 22.1,16.2 21.9,16.1Z"/>
              </svg>
              <span className="text-sm md:text-base font-semibold uppercase">WHATSAPP</span>
              
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
            <svg className="w-9 h-9 text-white" fill="white" viewBox="0 0 24 24">
              <path d="M12,2C6.5,2 2,6.5 2,12C2,13.8 2.5,15.5 3.2,17L2,22L7.1,20.8C8.8,21.6 10.8,22 12,22C17.5,22 22,17.5 22,12C22,6.5 17.5,2 12,2M12,20C10.2,20 8.6,19.5 7.2,18.7L7,18.6L4.5,19.3L5.2,16.9L5,16.7C4.1,15.3 3.6,13.7 3.6,12C3.6,7.4 7.4,3.6 12,3.6C16.6,3.6 20.4,7.4 20.4,12C20.4,16.6 16.6,20 12,20M18.7,14.3C18.4,14.1 17,13.4 16.7,13.3C16.5,13.2 16.3,13.2 16.1,13.4C15.9,13.6 15.3,14.3 15.1,14.5C15,14.7 14.8,14.7 14.6,14.6C13.4,14 12.3,13.2 11.5,12.2C11.2,11.8 11.5,11.8 11.8,11.5C11.9,11.4 12,11.2 12.2,11C12.3,10.8 12.3,10.6 12.1,10.5C11.9,10.4 11.3,9.2 11.1,8.7C10.8,8.1 10.5,8.2 10.3,8.2C10.1,8.2 9.9,8.2 9.7,8.2C9.5,8.2 9.1,8.4 8.9,8.6C8.7,8.8 8.1,9.5 8.1,10.7C8.1,11.9 8.8,13 8.9,13.2C9.1,13.4 11.3,16.5 14.6,17.8C15.7,18.3 16.5,18.5 17.1,18.7C18.2,19.1 19.2,19 19.9,18.9C20.6,18.8 22,18.3 22.2,17.7C22.4,17.1 22.4,16.6 22.3,16.5C22.3,16.3 22.1,16.2 21.9,16.1Z"/>
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
                  <path d="M12,2C6.5,2 2,6.5 2,12C2,13.8 2.5,15.5 3.2,17L2,22L7.1,20.8C8.8,21.6 10.8,22 12,22C17.5,22 22,17.5 22,12C22,6.5 17.5,2 12,2M12,20C10.2,20 8.6,19.5 7.2,18.7L7,18.6L4.5,19.3L5.2,16.9L5,16.7C4.1,15.3 3.6,13.7 3.6,12C3.6,7.4 7.4,3.6 12,3.6C16.6,3.6 20.4,7.4 20.4,12C20.4,16.6 16.6,20 12,20M18.7,14.3C18.4,14.1 17,13.4 16.7,13.3C16.5,13.2 16.3,13.2 16.1,13.4C15.9,13.6 15.3,14.3 15.1,14.5C15,14.7 14.8,14.7 14.6,14.6C13.4,14 12.3,13.2 11.5,12.2C11.2,11.8 11.5,11.8 11.8,11.5C11.9,11.4 12,11.2 12.2,11C12.3,10.8 12.3,10.6 12.1,10.5C11.9,10.4 11.3,9.2 11.1,8.7C10.8,8.1 10.5,8.2 10.3,8.2C10.1,8.2 9.9,8.2 9.7,8.2C9.5,8.2 9.1,8.4 8.9,8.6C8.7,8.8 8.1,9.5 8.1,10.7C8.1,11.9 8.8,13 8.9,13.2C9.1,13.4 11.3,16.5 14.6,17.8C15.7,18.3 16.5,18.5 17.1,18.7C18.2,19.1 19.2,19 19.9,18.9C20.6,18.8 22,18.3 22.2,17.7C22.4,17.1 22.4,16.6 22.3,16.5C22.3,16.3 22.1,16.2 21.9,16.1Z"/>
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
