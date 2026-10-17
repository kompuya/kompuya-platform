import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Espacio para Logo real de Kompuyá */}
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              K
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              KOMPU<span className="text-blue-600">YÁ</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#reparacion" className="hover:text-blue-600 transition">Reparación</a>
            <a href="#comunicaciones" className="hover:text-blue-600 transition">Comunicaciones Seguras</a>
            <a href="#domicilio" className="hover:text-blue-600 transition">Rastreo GPS</a>
          </nav>
          <div>
            <a 
              href="tel:+573204531169" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition shadow-md hover:shadow-lg"
            >
              Solicitar recogida
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase">
            Soporte técnico rápido, cercano y confiable
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Reparamos tus equipos y <span className="text-blue-600">blindamos tus comunicaciones</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Desde la reparación física hasta la privacidad total de tus dispositivos móviles. Todo a domicilio, con seguimiento GPS en tiempo real.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#reparacion" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-blue-600/30 transition"
            >
              Ver servicios de reparación
            </a>
            <a 
              href="#comunicaciones" 
              className="bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-800 font-bold px-8 py-4 rounded-xl text-base shadow-sm transition"
            >
              ¿Tus conversaciones son seguras?
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">✓</span> Servicio a domicilio
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">✓</span> Licencias originales
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">✓</span> Equipo 100% asegurado
            </span>
          </div>
        </div>
      </section>

      {/* Franja Descuento 10% */}
      <div className="bg-amber-500 py-4 text-slate-950 font-bold text-center px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-lg">
          <span className="bg-slate-950 text-white text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-extrabold">OFERTA ESPECIAL</span>
          <span>¡Obtén un <span className="underline decoration-2">10% de descuento</span> en tu primer servicio técnico o blindaje!</span>
        </div>
      </div>

      {/* Sección 1: Reparación y Actualización */}
      <section id="reparacion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Reparación y Actualización</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Tu computador funcionando al máximo
            </h2>
            <p className="text-slate-600 text-lg mt-3 max-w-3xl">
              Resolvemos problemas físicos y de software en computadores y portátiles. Tenemos¡Entendido completamente! Estas correcciones están extremadamente bien fundamentadas. El cambio a una paleta clara (fondo blanco, azul eléctrico y acento naranja) le da un aspecto mucho más moderno, tecnológico y comercial, alineado a lo que buscan tus clientes y el equipo evaluador.

Vamos a realizar **dos cambios en tu proyecto** para que quede exactamente como en la propuesta:

1. **El título de la pestaña (SEO/Metadata).**
2. **El contenido y diseño visual completo del código (`app/page.tsx`).**

---

### Paso 1: Cambiar el título de la pestaña (Metadata)

Para quitar el "Create Next App" y poner **“Kompuyá – Reparación de computadores a domicilio en Bogotá”**, debemos modificar el archivo de configuración global.

1. Abre en tu editor (VS Code) el archivo: **`app/layout.tsx`**.
2. Busca la sección que dice `export const metadata` y reemplázala para que quede así:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kompuyá – Reparación de computadores a domicilio en Bogotá",
  description: "Reparación de equipos, licencias originales, encriptación telefónica y servicio a domicilio con rastreo GPS en tiempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}