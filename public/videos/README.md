# � Estructura de Videos - RT Detail

## 🎯 Organización por Carpetas

```
public/videos/
├── hero/           → Videos de fondo del Hero Section
├── servicios/      → Videos de cada servicio específico
├── galeria/        → Videos para la galería principal
├── motos/          → Videos de trabajos en motocicletas
└── proceso/        → Time-lapses y procesos completos
```

---

## 🎬 HERO (Videos de Fondo) ⭐⭐⭐ PRIORIDAD ALTA

**Carpeta**: `public/videos/hero/`

Coloca tus videos principales aquí:
```
hero/
├── 1.mp4    ← Video principal (se reproduce primero)
├── 2.mp4    ← Segundo video
├── 3.mp4    ← Tercer video
└── 4.mp4    ← Cuarto video (opcional)
```

**Especificaciones**:
- Resolución: 1920x1080 (Full HD)
- Duración: 8-15 segundos
- Peso: < 10MB cada uno
- Contenido: Planos generales, movimientos suaves, brillos

**Ejemplos de contenido**:
- Pan lateral del vehículo completo
- Close-up de pintura brillante
- Aplicación de productos
- Agua corriendo por la carrocería

---

## 🔧 SERVICIOS (Videos por Servicio) ⭐⭐ PRIORIDAD MEDIA

**Carpeta**: `public/videos/servicios/`

Un video por cada servicio:
```
servicios/
├── opticos.mp4      ← Pulido de faros
├── sellados.mp4     ← Aplicación de sellado cerámico
├── tapizados.mp4    ← Limpieza de interiores
├── ruedas.mp4       ← Detailing de llantas
├── interiores.mp4   ← Limpieza de habitáculo
├── chasis.mp4       ← Trabajo en bajos
└── motor.mp4        ← Pulido de motor
```

**Especificaciones**:
- Resolución: 1080x1920 (vertical) o 1920x1080 (horizontal)
- Duración: 10-30 segundos
- Peso: < 5MB cada uno
- Contenido: Proceso específico del servicio

---

## 📸 GALERÍA (Trabajos Destacados) ⭐⭐⭐ PRIORIDAD ALTA

**Carpeta**: `public/videos/galeria/`

Videos de tus mejores trabajos:
```
galeria/
├── 01-antes-despues.mp4      ← Transformación completa
├── 02-detalle-pintura.mp4    ← Close-up de resultados
├── 03-pulido-opticos.mp4     ← Proceso de faros
├── 04-sellado-aplicacion.mp4 ← Aplicación paso a paso
├── 05-interior-completo.mp4  ← Tour del interior
├── 06-ruedas-brillantes.mp4  ← Detalle de llantas
├── 07-motor-pulido.mp4       ← Motor detallado
├── 08-360-vehicle.mp4        ← Giro completo del auto
└── 09-time-lapse.mp4         ← Proceso acelerado
```

**Especificaciones**:
- Resolución: Variable (cuadrado, vertical, horizontal)
- Duración: 5-30 segundos
- Peso: < 5MB cada uno
- Contenido: Variado, atractivo para redes sociales

**Tips**:
- 3-4 videos verticales (1080x1920) tipo Instagram Stories
- 3-4 videos horizontales (1920x1080)
- 2-3 videos cuadrados (1080x1080)

---

## 🏍️ MOTOS (Trabajos en Motocicletas) ⭐ PRIORIDAD BAJA

**Carpeta**: `public/videos/motos/`

Videos específicos de motos:
```
motos/
├── principal.mp4        ← Video destacado para la sección
├── cromados.mp4         ← Pulido de cromados
├── tapizado-cuero.mp4   ← Tratamiento de asientos
└── detalle-completo.mp4 ← Trabajo completo
```

**Especificaciones**:
- Resolución: 1080x1920 (vertical preferido)
- Duración: 10-20 segundos
- Peso: < 5MB cada uno

---

## ⏱️ PROCESO (Time-lapses y Procesos) ⭐ PRIORIDAD BAJA

**Carpeta**: `public/videos/proceso/`

Videos de procesos completos:
```
proceso/
├── detailing-completo.mp4    ← Trabajo completo en time-lapse
├── pulido-pintura.mp4        ← Proceso de pulido
├── lavado-completo.mp4       ← Desde sucio hasta brillante
└── sellado-paso-a-paso.mp4   ← Tutorial de sellado
```

**Especificaciones**:
- Resolución: 1920x1080
- Duración: 30-60 segundos
- Peso: < 8MB cada uno
- Contenido: Procesos educativos o impresionantes

---

## ⚡ Comprimir tus videos

### Opción 1: HandBrake (Más fácil)
1. Descarga: https://handbrake.fr/
2. Abre tu video
3. Preset: "Fast 1080p30"
4. Activa "Web Optimized"
5. Exporta

### Opción 2: FFmpeg (Más control)

**Para videos del HERO**:
```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 23 -preset medium -vf scale=1920:1080 -movflags +faststart -pix_fmt yuv420p hero-1.mp4
```

**Para videos de GALERÍA**:
```bash
ffmpeg -i tu-video.mp4 -c:v libx264 -crf 25 -preset fast -movflags +faststart -pix_fmt yuv420p gallery-1.mp4
```

### Opción 3: Online (Sin instalar nada)
- https://www.freeconvert.com/video-compressor
- https://clideo.com/compress-video

---

## 📋 Checklist antes de subir

- [ ] Formato MP4 H.264
- [ ] Peso correcto (< 10MB hero, < 5MB galería)
- [ ] Nombres correctos (`hero-1.mp4`, etc.)
- [ ] Ubicados en `public/videos/`
- [ ] Testeado que se reproducen en navegador

---

## 🎯 Estructura Completa

```
public/videos/
├── hero-1.mp4          ✅ Requerido - Video principal
├── hero-2.mp4          ✅ Requerido - Segundo video
├── hero-3.mp4          ✅ Requerido - Tercer video
├── hero-4.mp4          ⭕ Opcional - Cuarto video
├── gallery-1.mp4       ⭕ Opcional - Video en galería
├── gallery-3.mp4       ⭕ Opcional - Video en galería
├── gallery-5.mp4       ⭕ Opcional - Video en galería
└── ...
```

---

## 💡 Tips

1. **Iluminación**: Más importante que resolución
2. **Duración**: 8-10 segundos es perfecto para loops
3. **Movimiento**: Suave y cinematográfico, no rápido
4. **Audio**: Puedes removerlo, no se usa
5. **Calidad original**: Graba en la mejor calidad, comprime después

---

## ❓ ¿Necesitas ayuda?

Ver documentación completa en [VIDEOS-GUIA.md](../../VIDEOS-GUIA.md)
