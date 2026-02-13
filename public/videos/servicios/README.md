# Videos de Servicios

Un video por cada servicio específico que ofreces.

## 📹 Videos por Servicio

```
servicios/
├── opticos.mp4      ← Pulido/restauración de faros
├── sellados.mp4     ← Sellado cerámico aplicación
├── tapizados.mp4    ← Limpieza de tapicería
├── ruedas.mp4       ← Detailing de llantas/neumáticos
├── interiores.mp4   ← Limpieza interior completo
├── chasis.mp4       ← Trabajo en chasis/bajos
└── motor.mp4        ← Pulido de motor
```

## 🎯 Especificaciones

- **Formato**: MP4 (H.264)
- **Resolución**: 1920x1080 o 1080x1920 (vertical)
- **Duración**: 10-30 segundos
- **Peso**: < 5MB cada uno

## 💡 Contenido

Muestra el **proceso específico** de ese servicio:
- Antes/durante/después
- Técnica utilizada
- Productos aplicados
- Resultado final

## ⚡ Comprimir

```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 25 -preset fast -movflags +faststart -pix_fmt yuv420p opticos.mp4
```

## 📝 Opcional

Estos videos son opcionales. Si no los tienes, se mostrarán imágenes o gradientes.
