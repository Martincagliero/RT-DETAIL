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
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-gray-100 to-gray-200 text-deep-black font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-[10px] shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* SVG Envelope Icon - Perfectly Aligned */}
              <svg className="w-[22px] h-[22px] flex-shrink-0 self-center" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <span className="text-sm md:text-base font-semibold uppercase leading-none">ENVIAR MAIL</span>
              
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
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-br from-[#25D366] to-[#20ba5a] text-white font-semibold tracking-wider rounded-[14px] overflow-hidden transition-all duration-300 inline-flex items-center justify-center gap-[10px] shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Official WhatsApp Icon - Perfectly Aligned */}
              <svg className="w-[22px] h-[22px] flex-shrink-0 self-center" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.149-.197.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.259c.001-5.45 4.436-9.884 9.888-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 012.888 6.984c-.002 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.89c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.87 11.87 0 005.71 1.458h.005c6.555 0 11.89-5.335 11.89-11.89a11.82 11.82 0 00-3.446-8.413"/>
              </svg>
              <span className="text-sm md:text-base font-semibold uppercase leading-none">WHATSAPP</span>
              
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
            <svg className="w-7 h-7 text-white" fill="#ffffff" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.149-.197.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.259c.001-5.45 4.436-9.884 9.888-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 012.888 6.984c-.002 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.89c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.87 11.87 0 005.71 1.458h.005c6.555 0 11.89-5.335 11.89-11.89a11.82 11.82 0 00-3.446-8.413"/>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.149-.197.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.259c.001-5.45 4.436-9.884 9.888-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 012.888 6.984c-.002 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.89c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.87 11.87 0 005.71 1.458h.005c6.555 0 11.89-5.335 11.89-11.89a11.82 11.82 0 00-3.446-8.413"/>
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
