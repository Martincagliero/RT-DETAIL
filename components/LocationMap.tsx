'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { motion } from 'framer-motion';

export default function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Coordenadas de Martínez, San Isidro
    const coordinates: [number, number] = [-58.5084, -34.4871];

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'carto-dark': {
            type: 'raster',
            tiles: [
              'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
              'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
              'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
          }
        },
        layers: [
          {
            id: 'carto-dark-layer',
            type: 'raster',
            source: 'carto-dark',
            minzoom: 0,
            maxzoom: 22
          }
        ]
      },
      center: coordinates,
      zoom: 15,
      attributionControl: false
    });

    // Control de navegación
    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: false
      }),
      'top-right'
    );

    // Crear marcador personalizado
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.cssText = `
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #a0a0a0 0%, #707070 100%);
      border: 3px solid #ffffff;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 15px rgba(160, 160, 160, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
    `;

    // Efecto hover en el marcador
    markerElement.addEventListener('mouseenter', () => {
      markerElement.style.transform = 'rotate(-45deg) scale(1.1)';
      markerElement.style.boxShadow = '0 6px 20px rgba(160, 160, 160, 0.6)';
    });
    
    markerElement.addEventListener('mouseleave', () => {
      markerElement.style.transform = 'rotate(-45deg) scale(1)';
      markerElement.style.boxShadow = '0 4px 15px rgba(160, 160, 160, 0.4)';
    });

    // Popup con información
    const popup = new maplibregl.Popup({
      offset: 25,
      closeButton: false,
      className: 'rt-detail-popup'
    }).setHTML(`
      <div style="padding: 4px 0; color: #ffffff;">
        <h3 style="font-size: 16px; font-weight: 700; margin: 0 0 6px 0; background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          RT DETAIL
        </h3>
        <p style="font-size: 13px; margin: 0 0 8px 0; color: #d1d1d1; line-height: 1.4;">
          Detailing automotriz<br/>de alto nivel
        </p>
        <p style="font-size: 12px; margin: 0 0 4px 0; color: #a0a0a0;">
          📍 Martínez, San Isidro<br/>Buenos Aires, Argentina
        </p>
        <p style="font-size: 12px; margin: 0; color: #a0a0a0;">
          📞 +54 9 11 6850-8827
        </p>
      </div>
    `);

    // Agregar marcador al mapa
    new maplibregl.Marker({ element: markerElement })
      .setLngLat(coordinates)
      .setPopup(popup)
      .addTo(map.current);

    // Animación de entrada del marcador
    setTimeout(() => {
      markerElement.style.animation = 'markerBounce 0.6s ease-out';
    }, 500);

    return () => {
      map.current?.remove();
    };
  }, []);

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
          <div
            ref={mapContainer}
            className="w-full h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 ring-1 ring-gray-700/50"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)'
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes markerBounce {
          0% {
            transform: rotate(-45deg) translateY(-100px);
            opacity: 0;
          }
          60% {
            transform: rotate(-45deg) translateY(10px);
            opacity: 1;
          }
          80% {
            transform: rotate(-45deg) translateY(-5px);
          }
          100% {
            transform: rotate(-45deg) translateY(0);
          }
        }

        .rt-detail-popup .maplibregl-popup-content {
          background: rgba(13, 13, 13, 0.95);
          backdrop-filter: blur(10px);
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(160, 160, 160, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
        }

        .rt-detail-popup .maplibregl-popup-tip {
          border-top-color: rgba(13, 13, 13, 0.95);
        }

        .maplibregl-ctrl-group {
          background: rgba(13, 13, 13, 0.9) !important;
          border: 1px solid rgba(160, 160, 160, 0.2) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;
        }

        .maplibregl-ctrl-group button {
          background-color: transparent !important;
          color: #ffffff !important;
        }

        .maplibregl-ctrl-group button:hover {
          background-color: rgba(160, 160, 160, 0.1) !important;
        }

        .maplibregl-ctrl-group button + button {
          border-top: 1px solid rgba(160, 160, 160, 0.2) !important;
        }
      `}</style>
    </motion.section>
  );
}
