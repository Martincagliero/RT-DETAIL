# 📹 ¿Dónde Cargo los Videos?

## 📁 Estructura de Carpetas

He organizado **5 carpetas** para que cargues tus videos por categoría:

```
c:\Users\Marti\OneDrive\Documentos\rt detail\public\videos\
│
├── 📂 hero/         ← Videos del fondo principal (PANTALLA INICIAL)
├── 📂 galeria/      ← Videos de trabajos para la galería
├── 📂 servicios/    ← Un video por cada servicio
├── 📂 motos/        ← Videos de trabajos en motos
└── 📂 proceso/      ← Time-lapses y procesos completos
```

---

## ⭐ PRIORIDAD 1: HERO (OBLIGATORIO)

### 📂 Carpeta: `public/videos/hero/`

**Videos del fondo principal que rota automáticamente**

```
Arrastra tus 3-5 mejores videos aquí:
hero/
├── 1.mp4    ← Tu mejor video
├── 2.mp4    ← Segundo mejor
├── 3.mp4    ← Tercer video
└── 4.mp4    ← Opcional
```

✅ **Nombres exactos**: `1.mp4`, `2.mp4`, `3.mp4`, `4.mp4`  
📐 **Resolución**: 1920x1080 (horizontal)  
⏱️ **Duración**: 8-15 segundos  
💾 **Peso**: < 10MB cada uno  

**Contenido ideal**:
- Planos generales del auto brillando
- Movimientos de cámara suaves
- Aplicación de productos
- Agua corriendo por la carrocería

---

## ⭐ PRIORIDAD 2: GALERÍA

### 📂 Carpeta: `public/videos/galeria/`

**Videos de tus mejores trabajos**

```
Carga 6-12 videos de diferentes orientaciones:
galeria/
├── 01-antes-despues.mp4       (horizontal)
├── 02-detalle-pintura.mp4     (vertical)
├── 03-pulido-opticos.mp4      (cuadrado)
├── 04-sellado.mp4             (horizontal)
├── 05-interior.mp4            (vertical)
└── ... (etc)
```

✅ **Nombres**: Descriptivos (01-xxx.mp4, 02-xxx.mp4, etc)  
📐 **Resolución**: Variable  
- Vertical: 1080x1920 (tipo Stories)  
- Horizontal: 1920x1080  
- Cuadrado: 1080x1080  
⏱️ **Duración**: 5-30 segundos  
💾 **Peso**: < 5MB cada uno  

**Tip**: Mezcla orientaciones para efecto masonry dinámico

---

## 🔧 OPCIONAL: SERVICIOS

### 📂 Carpeta: `public/videos/servicios/`

**Un video POR CADA servicio que ofreces**

```
servicios/
├── opticos.mp4       ← Pulido de faros
├── sellados.mp4      ← Sellado cerámico  
├── tapizados.mp4     ← Limpieza tapicería
├── ruedas.mp4        ← Detailing llantas
├── interiores.mp4    ← Limpieza interior
├── chasis.mp4        ← Trabajo en chasis
└── motor.mp4         ← Pulido motor
```

✅ **Nombres exactos**: `opticos.mp4`, `sellados.mp4`, etc  
📐 **Resolución**: 1920x1080 o 1080x1920  
⏱️ **Duración**: 10-30 segundos  
💾 **Peso**: < 5MB cada uno  

---

## 🏍️ OPCIONAL: MOTOS

### 📂 Carpeta: `public/videos/motos/`

**Videos de trabajos en motocicletas**

```
motos/
├── principal.mp4           ← Video destacado
├── cromados.mp4            ← Pulido cromados
├── tapizado-cuero.mp4      ← Asientos de cuero
└── detalle-completo.mp4    ← Trabajo completo
```

✅ **Resolución**: 1080x1920 (vertical preferido)  
⏱️ **Duración**: 10-20 segundos  
💾 **Peso**: < 5MB  

---

## ⏱️ OPCIONAL: PROCESO

### 📂 Carpeta: `public/videos/proceso/`

**Time-lapses y procesos paso a paso**

```
proceso/
├── detailing-completo.mp4      ← Time-lapse completo
├── pulido-pintura.mp4          ← Corrección pintura
├── lavado-completo.mp4         ← De sucio a limpio
└── sellado-tutorial.mp4        ← Paso a paso
```

✅ **Resolución**: 1920x1080  
⏱️ **Duración**: 30-60 segundos  
💾 **Peso**: < 8MB  

---

## 🚀 Orden de Carga Recomendado

1. **HERO** → Empieza por aquí (3-5 videos)
2. **GALERÍA** → Carga 6-12 de tus mejores trabajos
3. **SERVICIOS** → Si tienes, 1 video por servicio
4. **MOTOS** → Solo si ofreces ese servicio
5. **PROCESO** → Contenido adicional/educativo

---

## ⚡ Comprimir Videos (Si están muy pesados)

### Comprimir para HERO:
```bash
cd "c:\Users\Marti\OneDrive\Documentos\rt detail\public\videos\hero"
for %f in (*.mp4) do ffmpeg -i "%f" -c:v libx264 -crf 23 -preset medium -vf scale=1920:1080 -movflags +faststart -pix_fmt yuv420p "opt-%f"
```

### Comprimir para GALERÍA:
```bash
cd "c:\Users\Marti\OneDrive\Documentos\rt detail\public\videos\galeria"
for %f in (*.mp4) do ffmpeg -i "%f" -c:v libx264 -crf 25 -preset fast -movflags +faststart -pix_fmt yuv420p "opt-%f"
```

---

## 📝 Después de Cargar Videos

1. **Reinicia el servidor** (si está corriendo):
   ```bash
   Ctrl + C en la terminal
   npm run dev
   ```

2. **Actualiza el navegador**: `Ctrl + Shift + R` (recarga forzada)

3. **Verifica que se vean tus videos** en:
   - Hero: Fondo principal
   - Galería: Sección de trabajos

---

## ❓ Preguntas Frecuentes

### ¿Puedo usar otros nombres?
- **HERO**: No, deben ser exactamente `1.mp4`, `2.mp4`, `3.mp4`
- **GALERÍA**: Sí, usa nombres descriptivos
- **SERVICIOS**: No, deben ser exactos (`opticos.mp4`, `sellados.mp4`, etc)

### ¿Qué formato deben tener?
- **Formato**: MP4 (H.264)
- **Codec de video**: H.264
- **Codec de audio**: AAC (o sin audio)

### ¿Cómo sé si un video está muy pesado?
- **HERO**: Si pesa más de 10MB, comprime
- **OTROS**: Si pesa más de 5MB, comprime

### ¿Dónde consigo FFmpeg para comprimir?
- Descarga: https://ffmpeg.org/download.html
- O usa HandBrake (interfaz gráfica): https://handbrake.fr/

---

## 💡 Tips Importantes

✅ **Siempre usa formato MP4 H.264**  
✅ **Nombres sin espacios ni acentos** (`antes-despues.mp4` ✓, `antes después.mp4` ✗)  
✅ **Guarda originales** antes de comprimir  
✅ **Video horizontal para HERO** (1920x1080)  
✅ **Mezcla orientaciones en GALERÍA** (vertical + horizontal + cuadrado)  
✅ **Reinicia servidor** después de agregar videos  

---

¿Necesitas más ayuda? Checa estos archivos:
- 📖 **Guía completa**: [VIDEOS-GUIA.md](VIDEOS-GUIA.md)
- 🚀 **Inicio rápido**: [VIDEOS-INICIO.md](VIDEOS-INICIO.md)
- 📂 **README de cada carpeta**: Hay un README.md en cada carpeta de videos
