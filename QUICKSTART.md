# Inicio Rápido - RT Detail

## 🚀 Cómo iniciar el proyecto

### 1. Instalar dependencias (si no lo hiciste)
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Añadir tus assets

El proyecto está listo para funcionar, pero necesitas agregar tus propios videos e imágenes para la experiencia completa.

#### Videos (Hero Section)
Coloca 3 videos en `public/videos/`:
- `hero-1.mp4`
- `hero-2.mp4`
- `hero-3.mp4`

Ver [public/videos/README.md](public/videos/README.md) para especificaciones.

#### Imágenes de Servicios
Coloca 7 imágenes en `public/images/services/`:
- `opticos.jpg`
- `sellados.jpg`
- `tapizados.jpg`
- `ruedas.jpg`
- `interiores.jpg`
- `chasis.jpg`
- `motor.jpg`

Ver [public/images/services/README.md](public/images/services/README.md) para especificaciones.

#### Galería
Coloca 9 imágenes en `public/images/gallery/`:
- `1.jpg` hasta `9.jpg`

Ver [public/images/gallery/README.md](public/images/gallery/README.md) para especificaciones.

#### Imagen de Motos
Coloca 1 imagen en `public/images/`:
- `motorcycle.jpg`

Ver [public/images/README.md](public/images/README.md) para especificaciones.

## 📝 Nota sobre placeholders

Si no agregas las imágenes/videos, verás gradientes de placeholder elegantes.
El sitio funciona perfectamente sin ellos, pero la experiencia completa requiere los assets reales.

## 🎨 Personalización

### Cambiar colores
Edita [`tailwind.config.ts`](tailwind.config.ts)

### Modificar servicios
Edita el array en [`components/Services.tsx`](components/Services.tsx)

### Ajustar textos
- Hero: [`components/Hero.tsx`](components/Hero.tsx)
- Footer: [`components/Footer.tsx`](components/Footer.tsx)

## 🏗️ Comandos disponibles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linting
npm run lint
```

## ⚡ Performance

- Todas las imágenes deben estar optimizadas (< 500KB cada una)
- Videos deben ser comprimidos (< 10MB cada uno)
- El sitio usa lazy loading automáticamente
- Las animaciones están optimizadas para 60fps

## 🌐 Deploy

Este proyecto puede desplegarse en:
- **Vercel** (recomendado): `vercel deploy`
- **Netlify**: Conectar repo de Git
- **AWS, Azure, etc.**: Usar `npm run build` y servir la carpeta `.next`

## 📖 Documentación completa

Ver [README.md](README.md) para documentación detallada.

---

**¿Necesitas ayuda?** Revisa el README principal o contacta al desarrollador.
