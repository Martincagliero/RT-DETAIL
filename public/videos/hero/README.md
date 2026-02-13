# Videos Hero - Fondo Cinematográfico

Coloca aquí los videos principales del Hero Section (pantalla inicial).

## 📹 Videos Requeridos

```
hero/
├── 1.mp4    ← Video principal (se reproduce primero)
├── 2.mp4    ← Segundo video (transición a los 8 seg)
├── 3.mp4    ← Tercer video (transición a los 16 seg)
└── 4.mp4    ← Cuarto video (opcional)
```

## 🎯 Especificaciones

- **Formato**: MP4 (H.264 codec)
- **Resolución**: 1920x1080 (Full HD)
- **Duración**: 8-15 segundos cada uno
- **Peso**: < 10MB por video
- **Frame Rate**: 30fps o 60fps
- **Aspecto**: 16:9 (horizontal)

## 💡 Contenido Recomendado

- Planos generales del vehículo
- Movimientos de cámara suaves (pan, tilt)
- Close-ups de pintura brillante
- Aplicación de productos
- Agua corriendo por carrocería
- Detalles con buena iluminación

## ⚡ Comprimir

```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 23 -preset medium -vf scale=1920:1080 -movflags +faststart -pix_fmt yuv420p 1.mp4
```

## ✅ Checklist

- [ ] Mínimo 3 videos
- [ ] Nombres: 1.mp4, 2.mp4, 3.mp4
- [ ] Formato MP4 H.264
- [ ] Fast start habilitado
- [ ] Peso < 10MB cada uno
- [ ] Movimiento suave y cinematográfico
