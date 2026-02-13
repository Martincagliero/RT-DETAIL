# Videos de Motos

Videos específicos de trabajos en motocicletas.

## 📹 Videos Recomendados

```
motos/
├── principal.mp4        ← Video destacado para sección motos
├── cromados.mp4         ← Pulido de cromados
├── tapizado-cuero.mp4   ← Tratamiento de asientos
└── detalle-completo.mp4 ← Trabajo completo
```

## 🎯 Especificaciones

- **Formato**: MP4 (H.264)
- **Resolución**: 1080x1920 (vertical preferido)
- **Duración**: 10-20 segundos
- **Peso**: < 5MB cada uno

## 💡 Contenido

- Proceso de limpieza/pulido
- Antes/después
- Detalles de cromados
- Tratamiento de cuero
- Motor pulido

## ⚡ Comprimir

```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 25 -preset fast -vf scale=1080:1920 -movflags +faststart -pix_fmt yuv420p principal.mp4
```

## 📝 Uso

Reemplaza la imagen en `components/MotorcycleSection.tsx` por video si lo deseas.
