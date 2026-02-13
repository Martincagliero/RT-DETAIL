# RT Detail - Premium Automotive Detailing Landing Page

Landing page ultra moderna y cinematográfica para RT Detail, taller premium de detailing automotriz.

## 🎨 Características

- **Diseño Oscuro Premium**: Paleta de colores elegante con negro profundo (#0d0d0d), grises grafito y acentos metálicos
- **Experiencia Cinematográfica**: Videos de fondo, transiciones suaves, efectos parallax
- **Animaciones Avanzadas**: Implementadas con Framer Motion y GSAP + ScrollTrigger
- **Cursor Personalizado**: Cursor minimalista con efecto de seguimiento
- **Smooth Scroll**: Experiencia de scroll suave con Lenis
- **Efectos 3D Sutiles**: Implementados con Three.js
- **Performance Optimizado**: Lazy loading, optimización de imágenes con next/image
- **100% Responsive**: Diseño adaptativo para todos los dispositivos

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Animaciones**: 
  - Framer Motion (transiciones de página, animaciones de componentes)
  - GSAP + ScrollTrigger (animaciones basadas en scroll)
- **3D**: Three.js con @react-three/fiber y @react-three/drei
- **Smooth Scroll**: @studio-freight/lenis
- **Tipografías**: Inter, Bebas Neue (Google Fonts)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🎬 Estructura del Proyecto

```
rt-detail/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes y providers
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y utilidades
├── components/
│   ├── CustomCursor.tsx    # Cursor personalizado
│   ├── Footer.tsx          # Footer con CTA
│   ├── Gallery.tsx         # Galería tipo masonry con lightbox
│   ├── Hero.tsx            # Hero cinematográfico con videos
│   ├── LoadingIntro.tsx    # Intro de carga premium (2seg)
│   ├── MotorcycleSection.tsx # Sección de motos
│   ├── PageTransition.tsx  # Transiciones entre páginas
│   ├── Particles.tsx       # Sistema de partículas flotantes
│   ├── ServiceCard.tsx     # Cards de servicios con efecto 3D
│   ├── Services.tsx        # Sección de servicios con ScrollTrigger
│   └── SmoothScroll.tsx    # Implementación de smooth scroll
├── public/
│   ├── images/             # Imágenes (usuario debe agregar)
│   │   ├── services/       # Imágenes de servicios
│   │   ├── gallery/        # Imágenes de la galería
│   │   └── motorcycle.jpg  # Imagen de motos
│   └── videos/             # Videos del hero (usuario debe agregar)
│       ├── hero-1.mp4
│       ├── hero-2.mp4
│       └── hero-3.mp4
└── ...

```

## 🎥 Assets Requeridos

### Videos para Hero Section
Coloca tus videos en `public/videos/`:
- `hero-1.mp4`
- `hero-2.mp4`
- `hero-3.mp4`

**Recomendaciones:**
- Resolución: 1920x1080 o superior
- Formato: MP4 (H.264)
- Duración: 8-15 segundos cada uno
- Peso: Optimizados para web (< 10MB cada uno)

### Imágenes para Servicios
Coloca imágenes en `public/images/services/`:
- `opticos.jpg`
- `sellados.jpg`
- `tapizados.jpg`
- `ruedas.jpg`
- `interiores.jpg`
- `chasis.jpg`
- `motor.jpg`

### Imágenes para Galería
Coloca 9 imágenes en `public/images/gallery/`:
- `1.jpg` hasta `9.jpg`

**Recomendaciones para imágenes:**
- Formato: JPG o WebP
- Orientación variada para efecto masonry
- Peso optimizado (< 500KB cada una)
- Alta calidad visual

### Imagen de Motos
Coloca en `public/images/`:
- `motorcycle.jpg`

## 🎨 Personalización

### Colores
Edita los colores en [`tailwind.config.ts`](tailwind.config.ts):
```typescript
colors: {
  'deep-black': '#0d0d0d',
  'graphite': { /* paleta de grises */ },
  'metallic': { /* tonos metálicos */ }
}
```

### Servicios
Edita la lista de servicios en [`components/Services.tsx`](components/Services.tsx):
```typescript
const services = [
  { id: 1, title: 'ÓPTICOS', description: '...', image: '...', direction: 'left' },
  // ... más servicios
];
```

### Animaciones
Ajusta duraciones y delays en cada componente según preferencias.

## 🚀 Optimizaciones Implementadas

- ✅ Next/Image para optimización automática de imágenes
- ✅ Lazy loading de componentes y assets
- ✅ CSS optimizado con Tailwind purge
- ✅ Animaciones desacopladas del main thread
- ✅ Reducción de animaciones en mobile para mejor performance
- ✅ Smooth scroll con RAF (requestAnimationFrame)
- ✅ Cursor personalizado solo en desktop

## 📱 Responsive Design

- **Desktop**: Experiencia completa con todas las animaciones
- **Tablet**: Animaciones simplificadas, layout adaptado
- **Mobile**: Sin cursor personalizado, animaciones optimizadas

## 🎯 Secciones Principales

1. **Loading Intro**: Intro premium de 2 segundos con logo animado
2. **Hero**: Sección cinematográfica con videos rotando, parallax y efectos de partículas
3. **Services**: 7 servicios con animaciones ScrollTrigger y efectos 3D al hover
4. **Motorcycle**: Sección dedicada a motos con parallax horizontal
5. **Gallery**: Grid tipo masonry con lightbox animado
6. **Footer**: CTA prominente y links de navegación

## 🎬 Efectos Implementados

- ✨ Smooth scroll personalizado
- ✨ Cursor minimalista con efecto blend mode
- ✨ Parallax multi-capa
- ✨ Texto con reveal animations
- ✨ Cards con movimiento 3D al mouse
- ✨ Transiciones de video suaves
- ✨ Partículas flotantes
- ✨ Gradientes metálicos animados
- ✨ Scroll indicators
- ✨ Hover effects premium
- ✨ Lightbox con blur background

## 🔧 Configuración Adicional

### Variables de Entorno
No se requieren variables de entorno para la versión base.

### Fuentes
Las fuentes se cargan automáticamente desde Google Fonts:
- Inter (texto)
- Bebas Neue (títulos)

## 📄 Licencia

Este proyecto es de uso privado para RT Detail.

## 🤝 Soporte

Para consultas o modificaciones, contactar al desarrollador.

---

**Nota**: Este es un proyecto de alta calidad con animaciones avanzadas. Asegúrate de tener assets optimizados para mantener un rendimiento óptimo.
