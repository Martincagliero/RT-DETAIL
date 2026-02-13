'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 md:px-8 lg:px-16 bg-deep-black border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl metallic-text mb-8">
            AGENDÁ TU TURNO
          </h2>
          <motion.button
            className="px-12 py-5 bg-white text-deep-black font-bold tracking-widest hover:bg-white/90 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">CONTACTAR</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-graphite-800 to-graphite-900"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
        />

        {/* Footer content */}
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
              <li>+54 9 XXX XXX XXXX</li>
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
    </footer>
  );
}
