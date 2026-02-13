'use client';

import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#0d0d0d] to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Nuestra ubicación
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Estamos en Martínez, San Isidro. Te esperamos.
          </p>
        </div>

        {/* Contenedor del mapa */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 ring-1 ring-gray-700/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26281.15835!2d-58.5184!3d-34.4871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1c6e7b7c7c7%3A0x1!2sMart%C3%ADnez%2C%20San%20Isidro%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890!5m2!1ses!2sar&style=feature:all|element:geometry|color:0x212121&style=feature:all|element:labels.text.fill|color:0x757575&style=feature:all|element:labels.text.stroke|color:0x212121&style=feature:administrative|element:geometry|color:0x757575&style=feature:road|element:geometry.fill|color:0x2c2c2c&style=feature:water|element:geometry|color:0x000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(85%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación RT Detail - Martínez, San Isidro"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

