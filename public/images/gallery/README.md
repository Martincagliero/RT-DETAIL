# 🎥 Cómo Configurar la Galería

La galería ahora soporta **VIDEOS e IMÁGENES mezclados**.

## 📝 Editar contenido de galería

Abre el archivo: [`components/MixedGallery.tsx`](../../../components/MixedGallery.tsx)

Busca esta sección (línea ~14):

```typescript
const galleryMedia: MediaItem[] = [
  { id: 1, type: 'video', src: '/videos/gallery-1.mp4', thumbnail: '/images/gallery/1-thumb.jpg', alt: 'Detailing work 1' },
  { id: 2, type: 'image', src: '/images/gallery/2.jpg', alt: 'Detail work 2' },
  { id: 3, type: 'video', src: '/videos/gallery-3.mp4', thumbnail: '/images/gallery/3-thumb.jpg', alt: 'Detailing work 3' },
  // ... más items
];
```

## 🎬 Para agregar un VIDEO:

```typescript
{ 
  id: 1, 
  type: 'video',                              // Tipo: video
  src: '/videos/gallery-1.mp4',               // Ruta al video
  thumbnail: '/images/gallery/1-thumb.jpg',   // Thumbnail (imagen de preview)
  alt: 'Sellado cerámico proceso' 
}
```

## 🖼️ Para agregar una IMAGEN:

```typescript
{ 
  id: 2, 
  type: 'image',                    // Tipo: imagen
  src: '/images/gallery/2.jpg',     // Ruta a la imagen
  alt: 'Auto pulido' 
}
```

## ⚙️ Configuración Recomendada

### Opción 1: Solo Videos
```typescript
const galleryMedia: MediaItem[] = [
  { id: 1, type: 'video', src: '/videos/gallery-1.mp4', alt: 'Trabajo 1' },
  { id: 2, type: 'video', src: '/videos/gallery-2.mp4', alt: 'Trabajo 2' },
  { id: 3, type: 'video', src: '/videos/gallery-3.mp4', alt: 'Trabajo 3' },
  // etc...
];
```

### Opción 2: Solo Imágenes
```typescript
const galleryMedia: MediaItem[] = [
  { id: 1, type: 'image', src: '/images/gallery/1.jpg', alt: 'Trabajo 1' },
  { id: 2, type: 'image', src: '/images/gallery/2.jpg', alt: 'Trabajo 2' },
  { id: 3, type: 'image', src: '/images/gallery/3.jpg', alt: 'Trabajo 3' },
  // etc...
];
```

### Opción 3: Mezclados (Recomendado)
```typescript
const galleryMedia: MediaItem[] = [
  { id: 1, type: 'video', src: '/videos/gallery-1.mp4', alt: 'Proceso sellado' },
  { id: 2, type: 'image', src: '/images/gallery/2.jpg', alt: 'Resultado final' },
  { id: 3, type: 'image', src: '/images/gallery/3.jpg', alt: 'Detalle óptico' },
  { id: 4, type: 'video', src: '/videos/gallery-4.mp4', alt: 'Pulido faros' },
  { id: 5, type: 'image', src: '/images/gallery/5.jpg', alt: 'Interior limpio' },
  // etc...
];
```

## 📂 Estructura de Archivos

```
public/
├── videos/
│   ├── gallery-1.mp4
│   ├── gallery-4.mp4
│   └── ...
└── images/
    └── gallery/
        ├── 2.jpg
        ├── 3.jpg
        ├── 5.jpg
        ├── 1-thumb.jpg    (opcional: thumbnail para videos)
        └── ...
```

## 💡 Funcionalidades

✅ **Videos con preview**: Al hacer hover sobre un video, se reproduce automáticamente  
✅ **Play icon**: Icono visual para identificar videos  
✅ **Lightbox con controles**: Videos se pueden pausar, adelantar, etc.  
✅ **Navegación**: Flechas para ir al siguiente/anterior  
✅ **Responsive**: Funciona perfecto en mobile  
✅ **Optimizado**: Videos solo se cargan al ser visibles  

## 🔄 Volver a galería solo imágenes

Si prefieres usar solo la galería de imágenes original:

En [`app/page.tsx`](../../../app/page.tsx), cambia:
```typescript
import Gallery from "@/components/Gallery";  // ← Descomenta esto
// import MixedGallery from "@/components/MixedGallery";  // ← Comenta esto

// Y en el return:
<Gallery />  // ← Usa esto
// <MixedGallery />  // ← En lugar de esto
```

---

**Listo para personalizar tu galería!** 🎨
