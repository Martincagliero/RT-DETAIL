# 🎥 Guía de Videos - RT Detail

## 📁 Estructura de Carpetas para Videos

```
public/
├── videos/
│   ├── hero-1.mp4          # Video principal del hero
│   ├── hero-2.mp4          # Segundo video del hero
│   ├── hero-3.mp4          # Tercer video del hero
│   ├── gallery-1.mp4       # Videos para la galería (opcional)
│   ├── gallery-3.mp4
│   ├── gallery-5.mp4
│   └── ...
```

## 🎬 Especificaciones de Videos

### Videos del Hero (Fondo Cinematográfico)

**Ubicación**: `public/videos/`
**Nombres**: `hero-1.mp4`, `hero-2.mp4`, `hero-3.mp4`

**Especificaciones Técnicas**:
- **Resolución**: 1920x1080 (Full HD) o 3840x2160 (4K)
- **Formato**: MP4 (H.264 codec)
- **Duración**: 8-15 segundos cada uno
- **Frame Rate**: 30fps o 60fps
- **Bitrate**: 3000-5000 kbps (para Full HD)
- **Peso objetivo**: < 10MB por video
- **Ratio**: 16:9 (horizontal)

**Características del Contenido**:
- Videos cinematográficos de autos siendo detallados
- Movimiento sutil y suave (no muy rápido)
- Buena iluminación que muestre brillos y detalles
- Enfocados en texturas, reflejos, superficies
- Pueden ser close-ups de:
  - Pulido de pintura
  - Aplicación de sellado
  - Detalles de ópticos
  - Brillos en carrocería
  - Ruedas siendo limpiadas

### Videos para Galería (Opcional)

**Ubicación**: `public/videos/`
**Nombres**: `gallery-1.mp4`, `gallery-3.mp4`, `gallery-5.mp4`, etc.

**Especificaciones**:
- **Resolución**: 1080x1920 (vertical/stories) o 1920x1080 (horizontal)
- **Formato**: MP4 (H.264)
- **Duración**: 5-30 segundos
- **Peso objetivo**: < 5MB por video
- **Ratio**: Variado (vertical, horizontal, cuadrado)

**Contenido**:
- Time-lapses de trabajos
- Antes/después
- Procesos de detailing
- Resultados finales

## 🛠️ Herramientas de Optimización

### 1. HandBrake (Gratuito, Recomendado)

**Descarga**: https://handbrake.fr/

**Configuración para Hero Videos**:
```
Preset: Fast 1080p30
Web Optimized: ✓
Video Codec: H.264 (x264)
Constant Quality: 23 (RF)
Framerate: Same as source o 30fps
```

**Configuración para Galería**:
```
Preset: Very Fast 1080p30
Constant Quality: 25 (RF)
```

### 2. FFmpeg (Línea de comandos)

**Instalar**: `choco install ffmpeg` (Windows) o descarga de ffmpeg.org

**Comprimir video manteniendo calidad**:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart output.mp4
```

**Reducir tamaño agresivamente**:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset fast -vf scale=1920:1080 -c:a aac -b:a 96k -movflags +faststart output.mp4
```

**Convertir a formato web-optimized**:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k -movflags +faststart -pix_fmt yuv420p output.mp4
```

**Crear thumbnail del video**:
```bash
ffmpeg -i input.mp4 -ss 00:00:02 -vframes 1 thumbnail.jpg
```

### 3. Online (Sin instalación)

- **Cloudconvert**: https://cloudconvert.com/mp4-converter
- **Clideo**: https://clideo.com/compress-video
- **FreeConvert**: https://www.freeconvert.com/video-compressor

## ⚡ Optimización Web

### Fast Start (Streaming)

Todos los videos deben tener "fast start" habilitado para carga progresiva:

```bash
ffmpeg -i input.mp4 -movflags +faststart output.mp4
```

Esto permite que el video comience a reproducirse antes de descargarse completamente.

### Preload Strategy

El proyecto usa diferentes estrategias de preload:

- **Hero videos**: `preload="metadata"` - Solo carga metadatos
- **Gallery videos**: `preload="none"` - Solo carga al hacer hover
- **Lightbox videos**: `preload="auto"` - Carga completo al abrir

## 📊 Recomendaciones de Compression

| Tipo | Resolución | CRF | Bitrate | Peso Aprox |
|------|-----------|-----|---------|------------|
| Hero HD | 1920x1080 | 23 | ~3000k | 5-8 MB |
| Hero 4K | 3840x2160 | 23 | ~8000k | 15-20 MB |
| Gallery Vertical | 1080x1920 | 25 | ~2000k | 3-5 MB |
| Gallery Horizontal | 1920x1080 | 25 | ~2000k | 3-5 MB |

**CRF (Constant Rate Factor)**:
- 18-23: Alta calidad (recomendado para hero)
- 23-28: Buena calidad, menor tamaño
- Menor número = mejor calidad pero mayor tamaño

## 🎨 Tipos de Videos Sugeridos

### Para Hero (Fondo)
1. **Close-up de pulido** - Movimiento circular de la pulidora
2. **Aplicación de sellado** - Líquido aplicándose a la pintura
3. **Pan suave del vehículo** - Movimiento lateral mostrando brillos

### Para Galería
1. **Time-lapse** - Proceso completo acelerado
2. **Antes/Después** - Transición con split screen
3. **Detalle macro** - Close-up extremo de resultados
4. **360° del vehículo** - Mostrar resultado final
5. **Proceso específico** - Pulido de ópticos, etc.

## 🔧 Troubleshooting

### Video no se reproduce
- Verificar que es formato MP4 con codec H.264
- Asegurar que tiene `+faststart`
- Comprobar que el nombre del archivo es correcto
- Verificar que está en la carpeta `public/videos/`

### Video tarda mucho en cargar
- Reducir bitrate a 2000-3000 kbps
- Aumentar CRF a 25-28
- Reducir resolución si es muy alta
- Aplicar `+faststart` si no lo tiene

### Video se ve pixelado
- Reducir CRF (18-20 para mejor calidad)
- Aumentar bitrate
- Verificar resolución de origen

### Video no se ve en iPhone/Safari
- Asegurar codec H.264 (no H.265/HEVC)
- Usar pixel format yuv420p
- Incluir atributo `playsinline` en el HTML

## 📱 Consideraciones Mobile

Los videos se optimizan automáticamente para mobile:
- Se reduce opacidad en dispositivos con GPU limitada
- Preload está limitado para ahorrar datos
- Videos de galería solo se cargan al hacer scroll

## 🎯 Checklist de Video Perfecto

- [ ] Formato MP4 con codec H.264
- [ ] Fast start habilitado (`+faststart`)
- [ ] Peso < 10MB (hero) o < 5MB (galería)
- [ ] Resolución apropiada (1920x1080 o menos)
- [ ] CRF entre 23-25
- [ ] Audio removido o a 96-128kbps (si es necesario)
- [ ] Pixel format yuv420p
- [ ] Testeado en Chrome, Safari y mobile

## 💡 Tips Profesionales

1. **Grabar en alta calidad**: Siempre graba en la máxima calidad posible, optimiza después
2. **Iluminación**: Buena luz es más importante que alta resolución
3. **Estabilización**: Usa gimbal o estabiliza en post-producción
4. **Duración**: Más corto = menos peso. 8-10 segundos es ideal para loops
5. **Audio**: Puedes remover el audio completamente para ahorrar espacio
6. **Backup**: Guarda originales sin comprimir

## 🔄 Workflow Recomendado

1. **Grabar** → Máxima calidad posible
2. **Editar** → Cortar, estabilizar, color grading
3. **Exportar** → Formato intermedio de alta calidad
4. **Comprimir** → Con HandBrake o FFmpeg
5. **Verificar** → Probar en el sitio
6. **Optimizar** → Ajustar si es necesario

## 🌐 Hosting de Videos (Alternativa)

Si los videos son muy pesados, considera hosting externo:

- **Vimeo Pro**: Alta calidad, sin branding
- **Cloudflare Stream**: CDN optimizado
- **AWS S3 + CloudFront**: Escalable
- **YouTube** (unlisted): Gratis pero con branding

Para videos externos, modifica el componente Hero para usar `<iframe>` en lugar de `<video>`.

---

**¿Necesitas ayuda específica con algún video?** Consulta o prueba las herramientas recomendadas.
