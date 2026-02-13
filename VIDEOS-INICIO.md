# 🎬 INICIO RÁPIDO - VIDEOS

## ✅ Tu proyecto YA ESTÁ LISTO para videos

He actualizado todo el proyecto para trabajar con videos de forma óptima.

## 📁 Pasos para empezar:

### 1. Coloca tus videos en las carpetas

```
public/
└── videos/
    ├── hero-1.mp4    ← Coloca aquí (REQUERIDO)
    ├── hero-2.mp4    ← Coloca aquí (REQUERIDO)
    └── hero-3.mp4    ← Coloca aquí (REQUERIDO)
```

**Mínimo necesario**: 3 videos para el hero

### 2. (Opcional) Videos para la galería

```
public/
└── videos/
    ├── gallery-1.mp4  ← Videos para la galería
    ├── gallery-3.mp4
    └── gallery-5.mp4
```

### 3. Inicia el proyecto

```bash
npm run dev
```

Abre: http://localhost:3000

---

## 🎯 ¿Qué se ha actualizado?

### ✨ Nuevos Componentes

1. **VideoPlayer.tsx** - Componente optimizado para videos
2. **MixedGallery.tsx** - Galería que soporta videos e imágenes
3. **Hero mejorado** - Mejor manejo de videos en el fondo

### 📚 Nueva Documentación

- **VIDEOS-GUIA.md** - Guía completa de optimización de videos
- **ffmpeg-commands.sh** - Comandos listos para comprimir videos
- READMEs actualizados en las carpetas de assets

### ⚡ Optimizaciones

- ✅ Preload inteligente (solo metadata)
- ✅ Lazy loading de videos
- ✅ Reproducción automática al hover
- ✅ Controles en lightbox
- ✅ Compatible con mobile
- ✅ Manejo de errores

---

## 🛠️ Comprimir Videos (IMPORTANTE)

Tus videos deben estar optimizados para web. Usa uno de estos métodos:

### Opción A: HandBrake (Recomendado - Fácil)
1. Descarga: https://handbrake.fr/
2. Preset: "Fast 1080p30"
3. ✓ Web Optimized
4. Exporta

### Opción B: FFmpeg (Más control)

**Para HERO (alta calidad)**:
```bash
ffmpeg -i TU-VIDEO.mp4 -c:v libx264 -crf 23 -preset medium -vf scale=1920:1080 -movflags +faststart -pix_fmt yuv420p hero-1.mp4
```

**Para GALERÍA (más comprimido)**:
```bash
ffmpeg -i TU-VIDEO.mp4 -c:v libx264 -crf 25 -preset fast -movflags +faststart -pix_fmt yuv420p gallery-1.mp4
```

### Opción C: Online (Sin instalar)
- https://www.freeconvert.com/video-compressor
- https://clideo.com/compress-video

---

## 📊 Especificaciones de Videos

### HERO Videos
- Formato: MP4 (H.264)
- Resolución: 1920x1080
- Duración: 8-15 segundos
- Peso: < 10MB
- Tipo: Cinematográfico, movimiento suave

### GALERÍA Videos (opcional)
- Formato: MP4 (H.264)
- Resolución: Variable
- Duración: 5-30 segundos
- Peso: < 5MB
- Tipo: Procesos, resultados, time-lapses

---

## 🎨 Configurar Galería

### Solo Videos
Edita `components/MixedGallery.tsx`:
```typescript
const galleryMedia: MediaItem[] = [
  { id: 1, type: 'video', src: '/videos/gallery-1.mp4', alt: 'Trabajo 1' },
  { id: 2, type: 'video', src: '/videos/gallery-2.mp4', alt: 'Trabajo 2' },
  // ...
];
```

### Mezclar Videos e Imágenes
```typescript
const galleryMedia: MediaItem[] = [
  { id: 1, type: 'video', src: '/videos/gallery-1.mp4', alt: 'Proceso' },
  { id: 2, type: 'image', src: '/images/gallery/2.jpg', alt: 'Resultado' },
  { id: 3, type: 'video', src: '/videos/gallery-3.mp4', alt: 'Antes/Después' },
  // ...
];
```

---

## ✅ Checklist Final

Antes de lanzar, verifica:

- [ ] 3 videos de hero colocados en `public/videos/`
- [ ] Videos comprimidos (< 10MB cada uno)
- [ ] Formato MP4 H.264 con `+faststart`
- [ ] Videos se reproducen correctamente
- [ ] Testeado en Chrome, Safari y mobile
- [ ] Galería configurada (si usas videos allí)

---

## 🚀 TODO LISTO

1. Coloca tus videos en `public/videos/`
2. Ejecuta `npm run dev`
3. Ve a http://localhost:3000
4. ¡Disfruta tu landing cinematográfica!

---

## 📖 Más Info

- **Guía completa**: [VIDEOS-GUIA.md](VIDEOS-GUIA.md)
- **Comandos FFmpeg**: [ffmpeg-commands.sh](ffmpeg-commands.sh)
- **Personalización**: [PERSONALIZACION.md](PERSONALIZACION.md)

---

**¿Dudas?** Revisa la documentación o contacta al desarrollador.

🎬 **¡Feliz edición de videos!**
