# 🎨 Guía de Personalización - RT Detail

## 📝 Textos a Personalizar

### Hero Section
**Archivo**: [`components/Hero.tsx`](components/Hero.tsx)

```typescript
// Líneas 49-50
const titleText = 'PERFECCIÓN';    // Cambia el título principal
const subtitleText = 'EN CADA DETALLE';  // Cambia el subtítulo
```

```typescript
// Línea 83 (dentro del botón)
<span className="relative z-10">AGENDAR TURNO</span>
// Cambia el texto del CTA
```

### Footer
**Archivo**: [`components/Footer.tsx`](components/Footer.tsx)

```typescript
// Línea 25 - Título CTA
<h2>AGENDÁ TU TURNO</h2>

// Línea 32 - Botón CTA
<span>CONTACTAR</span>

// Línea 47 - Descripción marca
<p>Perfección en cada detalle. Tratamientos premium para tu vehículo.</p>

// Líneas 61-76 - Información de contacto
<li>info@rtdetail.com</li>
<li>+54 9 XXX XXX XXXX</li>
<li>Instagram: @rtdetail</li>
<li>Buenos Aires, Argentina</li>
```

### Servicios
**Archivo**: [`components/Services.tsx`](components/Services.tsx)

```typescript
// Líneas 10-62
const services = [
  {
    id: 1,
    title: 'ÓPTICOS',
    description: 'Restauración y pulido de faros para máxima claridad y estética.',
    image: '/images/services/opticos.jpg',
    direction: 'left'
  },
  // ... edita cada servicio según necesites
];
```

### Sección Motos
**Archivo**: [`components/MotorcycleSection.tsx`](components/MotorcycleSection.tsx)

```typescript
// Línea 44
<h2>MOTOS</h2>

// Líneas 53-57
<p>
  Detailing especializado para motocicletas. Tratamientos premium
  que respetan cada detalle de tu máquina, desde el cromado hasta
  el tapizado.
</p>

// Líneas 66-70 - Features
['Limpieza profunda', 'Pulido de cromados', 'Protección de plásticos', 'Tratamiento de cuero']
```

---

## 🎨 Colores a Personalizar

**Archivo**: [`tailwind.config.ts`](tailwind.config.ts)

### Color Principal (Negro)
```typescript
'deep-black': '#0d0d0d',  // Cambia aquí
```

### Escala de Grises
```typescript
'graphite': {
  50: '#f5f5f5',   // Más claro
  100: '#e7e7e7',
  // ... hasta ...
  950: '#1a1a1a',  // Más oscuro
},
```

### Acentos Metálicos
```typescript
'metallic': {
  light: '#c0c0c0',
  DEFAULT: '#8c8c8c',
  dark: '#5a5a5a',
}
```

---

## 🖼️ Optimización de Assets

### Videos
**Herramientas recomendadas**:
- **HandBrake** (gratuito): Comprimir videos
- **FFmpeg**: 
  ```bash
  ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
  ```

**Target**:
- Peso: < 10MB
- Resolución: 1920x1080
- Bitrate: ~3000 kbps
- Formato: H.264 MP4

### Imágenes
**Herramientas recomendadas**:
- **TinyPNG** (online): Comprimir JPG/PNG
- **Squoosh** (online): Convertir a WebP
- **ImageOptim** (Mac): Optimización automática

**Target**:
- Peso: < 500KB por imagen
- Formato: JPG o WebP
- Calidad: 80-85%

---

## ⚙️ Configuraciones Avanzadas

### Velocidad de Scroll
**Archivo**: [`components/SmoothScroll.tsx`](components/SmoothScroll.tsx)

```typescript
const lenis = new Lenis({
  duration: 1.2,  // Duración del scroll (más = más lento)
  // Prueba valores entre 0.8 (rápido) y 2.0 (lento)
});
```

### Duración de Animaciones

**Hero** - [`components/Hero.tsx`](components/Hero.tsx):
```typescript
// Línea 33 - Velocidad de animación de letras
stagger: 0.05,  // Reduce para más rápido
delay: 2.2      // Delay inicial

// Línea 69 - Intervalo de cambio de videos
8000  // Cambia a 10000 para 10 segundos
```

**Loading Intro** - [`components/LoadingIntro.tsx`](components/LoadingIntro.tsx):
```typescript
// Línea 10 - Duración del intro
setTimeout(() => {
  setIsLoading(false);
}, 2000);  // Cambia a 1500 para más rápido
```

### Cantidad de Partículas
**Archivo**: [`components/Particles.tsx`](components/Particles.tsx)

```typescript
// Línea 20 - Cantidad de partículas
for (let i = 0; i < 50; i++) {  // Reduce a 30 para menos, aumenta a 100 para más
```

---

## 🎭 Animaciones

### Deshabilitar Cursor Personalizado
**Archivo**: [`app/layout.tsx`](app/layout.tsx)

```typescript
return (
  <html lang="es" className={`${inter.variable} ${bebas.variable}`}>
    <body className="overflow-x-hidden">
      {/* <CustomCursor /> */}  {/* Comenta esta línea */}
      <SmoothScroll>
        <PageTransition>
          {children}
        </PageTransition>
      </SmoothScroll>
    </body>
  </html>
);
```

### Reducir Animaciones en Mobile
Las animaciones ya están optimizadas para mobile, pero puedes ajustar:

**Ejemplo en ServiceCard**:
```typescript
// Deshabilita efectos 3D en mobile
const isMobile = window.innerWidth < 768;

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (isMobile) return;  // No hace nada en mobile
  // ... resto del código
};
```

---

## 🚀 Performance

### Lazy Loading de Componentes
Si tienes problemas de performance, lazy load algunos componentes:

```typescript
// En app/page.tsx
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div>Cargando galería...</div>
});

const Services = dynamic(() => import('@/components/Services'));
```

### Optimizar Three.js (si lo usas)
```typescript
// Reducir calidad en mobile
const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
renderer.setPixelRatio(pixelRatio);
```

---

## 📱 Responsive

### Breakpoints de Tailwind
```typescript
// xs: por defecto
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Ejemplo de uso:
```typescript
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  // Mobile: 4xl, Tablet: 6xl, Desktop: 8xl
</h1>
```

---

## 🎬 Videos del Hero

### Cambiar Rutas de Videos
**Archivo**: [`components/Hero.tsx`](components/Hero.tsx)

```typescript
// Líneas 25-29
const videos = [
  '/videos/hero-1.mp4',
  '/videos/hero-2.mp4',
  '/videos/hero-3.mp4'
];
```

**Agregar más videos**:
```typescript
const videos = [
  '/videos/hero-1.mp4',
  '/videos/hero-2.mp4',
  '/videos/hero-3.mp4',
  '/videos/hero-4.mp4',  // Nuevo
  '/videos/hero-5.mp4',  // Nuevo
];
```

### Cambiar Opacidad del Video
```typescript
// Línea 70
<video className="h-full w-full object-cover opacity-40">
// Cambia opacity-40 a opacity-30 (más oscuro) o opacity-50 (más claro)
```

---

## 🔗 Links y Navegación

### Agregar Links Funcionales
**Footer** - [`components/Footer.tsx`](components/Footer.tsx):

```typescript
// Reemplaza los # con URLs reales
<a href="https://instagram.com/tu_usuario" target="_blank">
  Instagram: @rtdetail
</a>
```

### Agregar WhatsApp
```typescript
const whatsappNumber = '5491123456789';  // Tu número
const message = 'Hola! Quiero agendar un turno';

<a 
  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  CONTACTAR POR WHATSAPP
</a>
```

---

## 📊 Analytics

### Agregar Google Analytics
1. Instala el paquete:
```bash
npm install @next/third-parties
```

2. En [`app/layout.tsx`](app/layout.tsx):
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## 🎨 Fuentes

### Cambiar Fuentes
**Archivo**: [`app/layout.tsx`](app/layout.tsx)

```typescript
import { Inter, Bebas_Neue, Poppins } from "next/font/google";

// Ejemplo con Poppins
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});
```

**Actualiza en [`tailwind.config.ts`](tailwind.config.ts)**:
```typescript
fontFamily: {
  sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
  display: ['var(--font-bebas)', 'sans-serif'],
},
```

---

## 💡 Tips Finales

1. **Prueba en diferentes navegadores**: Chrome, Firefox, Safari
2. **Optimiza para mobile primero**: La mayoría del tráfico viene de mobile
3. **Usa imágenes reales**: Los gradientes placeholder son temporales
4. **Testea la velocidad**: usa Lighthouse en Chrome DevTools
5. **Comprime assets**: Antes de subir a producción
6. **Configura meta tags**: Para SEO (en layout.tsx)

---

## 🐛 Troubleshooting

### Videos no se reproducen
- Verifica que los archivos existan en `public/videos/`
- Asegúrate que sean formato MP4 H.264
- Prueba en diferentes navegadores

### Animaciones lentas
- Reduce la cantidad de partículas
- Simplifica las animaciones ScrollTrigger
- Usa `will-change: transform` en elementos animados

### Build falla
- Ejecuta `npm run build` y lee los errores
- Verifica que todas las importaciones sean correctas
- Asegúrate de que las imágenes tengan rutas válidas

---

**¿Necesitas más ayuda?** Consulta el [README.md](README.md) principal.
