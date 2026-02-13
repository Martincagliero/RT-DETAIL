# 🚀 Funcionalidades Adicionales Sugeridas

Estas son funcionalidades que puedes agregar al proyecto según tus necesidades.

## 📧 Formulario de Contacto

### Opción 1: Formspree (Más fácil)

1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Agrega el endpoint a tu código

**Crear componente** `components/ContactForm.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:border-white/40 transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:border-white/40 transition-colors"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          className="w-full bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:border-white/40 transition-colors"
        />
      </div>
      <div>
        <select
          name="service"
          required
          className="w-full bg-white/5 border border-white/20 px-6 py-4 text-white focus:border-white/40 transition-colors"
        >
          <option value="">Seleccionar servicio</option>
          <option value="opticos">Ópticos</option>
          <option value="sellados">Sellados</option>
          <option value="tapizados">Tapizados</option>
          <option value="ruedas">Ruedas</option>
          <option value="interiores">Interiores</option>
          <option value="motos">Motos</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Mensaje (opcional)"
          rows={4}
          className="w-full bg-white/5 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:border-white/40 transition-colors resize-none"
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-8 py-4 bg-white text-deep-black font-bold tracking-widest hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'submitting' ? 'ENVIANDO...' : 'ENVIAR CONSULTA'}
      </motion.button>
      {status === 'success' && (
        <p className="text-green-400 text-center">¡Mensaje enviado! Te contactaremos pronto.</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center">Error al enviar. Intenta nuevamente.</p>
      )}
    </form>
  );
}
```

### Opción 2: Resend (Emails desde tu dominio)

```bash
npm install resend
```

Crear `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, service, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'RT Detail <onboarding@resend.dev>',
      to: 'tu@email.com',
      subject: `Nueva consulta de ${name}`,
      html: `
        <h2>Nueva Consulta</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
```

---

## 📅 Sistema de Reservas

### Integración con Calendly

```typescript
// components/CalendlyButton.tsx
'use client';

export default function CalendlyButton() {
  const openCalendly = () => {
    window.open('https://calendly.com/tu-usuario/detailing', '_blank');
  };

  return (
    <button onClick={openCalendly} className="px-8 py-4 bg-white text-deep-black font-bold">
      AGENDAR TURNO
    </button>
  );
}
```

O usa su widget embebido:

```bash
npm install react-calendly
```

```typescript
import { InlineWidget } from 'react-calendly';

<InlineWidget url="https://calendly.com/tu-usuario/detailing" />
```

---

## 🎥 Galería de Videos

**Crear** `components/VideoGallery.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  { id: 1, url: 'https://youtube.com/embed/VIDEO_ID_1', title: 'Sellado cerámico' },
  { id: 2, url: 'https://youtube.com/embed/VIDEO_ID_2', title: 'Pulido de ópticos' },
  { id: 3, url: 'https://youtube.com/embed/VIDEO_ID_3', title: 'Detailing completo' },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 bg-deep-black">
      <h2 className="font-display text-7xl metallic-text text-center mb-16">TRABAJOS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="aspect-video bg-graphite-900 cursor-pointer relative overflow-hidden group"
            onClick={() => setSelectedVideo(video.id)}
            whileHover={{ scale: 1.05 }}
          >
            <iframe
              src={`${video.url}?controls=0`}
              className="w-full h-full pointer-events-none"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para video expandido */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="w-full max-w-5xl aspect-video"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videos.find(v => v.id === selectedVideo)?.url}
                className="w-full h-full"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
```

---

## ⭐ Testimonios / Reseñas

**Crear** `components/Testimonials.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    text: 'Excelente trabajo, mi auto quedó como nuevo. El pulido de ópticos es impecable.',
    rating: 5,
    image: '/images/testimonials/1.jpg'
  },
  {
    id: 2,
    name: 'María García',
    text: 'El sellado cerámico superó todas mis expectativas. Altamente recomendable.',
    rating: 5,
    image: '/images/testimonials/2.jpg'
  },
  // ... más testimonios
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-deep-black to-graphite-950">
      <motion.h2
        className="font-display text-7xl md:text-8xl metallic-text text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        TESTIMONIOS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Estrellas */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Texto */}
            <p className="text-white/80 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

            {/* Autor */}
            <p className="text-white font-semibold">{testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

---

## 🎯 Call to Action Flotante

**Crear** `components/FloatingCTA.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de scrollear 500px
      setShow(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phone = '5491123456789';  // Tu número
    const message = 'Hola! Quiero agendar un turno';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={show ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsApp}
    >
      {/* Icono de WhatsApp */}
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.button>
  );
}
```

Agrégalo en [`app/layout.tsx`](app/layout.tsx):

```typescript
import FloatingCTA from '@/components/FloatingCTA';

// ...
<body>
  <FloatingCTA />
  {children}
</body>
```

---

## 📱 Integración con Instagram

### Feed de Instagram

Usa la API de Instagram o un servicio como:
- **Juicer.io**
- **SnapWidget**
- **Behold**

O muestra manualmente tus mejores posts:

```typescript
const instagramPosts = [
  { id: 1, image: '/instagram/post1.jpg', url: 'https://instagram.com/p/XXX' },
  { id: 2, image: '/instagram/post2.jpg', url: 'https://instagram.com/p/YYY' },
  // ...
];

<div className="grid grid-cols-3 md:grid-cols-6 gap-2">
  {instagramPosts.map(post => (
    <a key={post.id} href={post.url} target="_blank" className="aspect-square">
      <Image src={post.image} alt="Instagram post" fill className="object-cover" />
    </a>
  ))}
</div>
```

---

## 🔍 SEO Mejorado

### Meta Tags Dinámicos

**Crear** `app/metadata.ts`:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'RT Detail - Detailing Automotriz Premium',
    template: '%s | RT Detail'
  },
  description: 'Taller premium de detailing automotriz. Sellados cerámicos, pulido de ópticos, tapizados y más. Buenos Aires, Argentina.',
  keywords: ['detailing', 'automotriz', 'sellado cerámico', 'pulido', 'tapizado', 'RT Detail', 'Buenos Aires'],
  authors: [{ name: 'RT Detail' }],
  creator: 'RT Detail',
  publisher: 'RT Detail',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'RT Detail - Detailing Automotriz Premium',
    description: 'Perfección en cada detalle. Tratamientos premium para tu vehículo.',
    url: 'https://rtdetail.com',
    siteName: 'RT Detail',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RT Detail',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RT Detail - Detailing Automotriz Premium',
    description: 'Perfección en cada detalle.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
};
```

### JSON-LD Structured Data

**Crear** `components/JsonLd.tsx`:

```typescript
export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RT Detail',
    image: 'https://rtdetail.com/logo.jpg',
    '@id': 'https://rtdetail.com',
    url: 'https://rtdetail.com',
    telephone: '+54-11-XXXX-XXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tu Calle 123',
      addressLocality: 'Buenos Aires',
      postalCode: '1000',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.6037,
      longitude: -58.3816,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://instagram.com/rtdetail',
      'https://facebook.com/rtdetail',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

Agrégalo en el layout:

```typescript
<head>
  <JsonLd />
</head>
```

---

## 📊 Analytics Avanzado

### Google Tag Manager

```bash
npm install @next/third-parties
```

```typescript
import { GoogleTagManager } from '@next/third-parties/google'

<body>
  <GoogleTagManager gtmId="GTM-XXXXXXX" />
  {children}
</body>
```

### Facebook Pixel

```typescript
// lib/fpixel.ts
export const FB_PIXEL_ID = 'TU_PIXEL_ID';

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const event = (name: string, options = {}) => {
  window.fbq('track', name, options);
};
```

---

## 🎨 Más Efectos Visuales

### Efecto de Mouse Glow

```typescript
// components/MouseGlow.tsx
'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 bg-white/5 rounded-full blur-3xl transition-transform duration-300"
      style={{
        left: position.x - 192,
        top: position.y - 192,
      }}
    />
  );
}
```

---

**Elige las funcionalidades que necesites y agrégalas paso a paso.**  
**No todas son necesarias - prioriza según tu caso de uso.**
