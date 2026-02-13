# Videos de Galería

Videos de tus mejores trabajos para la sección de galería.

## 📹 Organización

```
galeria/
├── 01-antes-despues.mp4      ← Transformación completa
├── 02-detalle-pintura.mp4    ← Close-up resultado
├── 03-pulido-opticos.mp4     ← Proceso faros
├── 04-sellado.mp4            ← Aplicación sellado
├── 05-interior.mp4           ← Tour interior
├── 06-ruedas.mp4             ← Llantas brillantes
├── 07-motor.mp4              ← Motor pulido
├── 08-360-auto.mp4           ← Giro del vehículo
└── 09-time-lapse.mp4         ← Proceso acelerado
```

## 🎯 Especificaciones

- **Formato**: MP4 (H.264)
- **Resolución**: Variable
  - Vertical: 1080x1920 (Stories)
  - Horizontal: 1920x1080
  - Cuadrado: 1080x1080
- **Duración**: 5-30 segundos
- **Peso**: < 5MB cada uno

## 💡 Mix Recomendado

Para efecto masonry dinámico:
- 3-4 videos verticales (1080x1920)
- 3-4 videos horizontales (1920x1080)
- 2-3 videos cuadrados (1080x1080)

## ⚡ Comprimir

**Vertical**:
```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 25 -preset fast -vf scale=1080:1920 -movflags +faststart -pix_fmt yuv420p 01-vertical.mp4
```

**Horizontal**:
```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 25 -preset fast -vf scale=1920:1080 -movflags +faststart -pix_fmt yuv420p 02-horizontal.mp4
```

**Cuadrado**:
```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 25 -preset fast -vf scale=1080:1080 -movflags +faststart -pix_fmt yuv420p 03-cuadrado.mp4
```

## 📝 Uso

Edita `components/MixedGallery.tsx` para agregar tus videos:

```typescript
{ id: 1, type: 'video', src: '/videos/galeria/01-antes-despues.mp4', alt: 'Transformación completa' }
```
