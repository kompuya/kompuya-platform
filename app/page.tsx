import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="Logo de Kompuyá" 
              width={60} 
              height={60} 
              className="rounded-full shadow-lg shadow-cyan-500/20"
            />
            <span className="font-extrabold text-3xl tracking-wider text-white">KOMPU<span className="text-cyan-400">YÁ</span></span>
          </div>
          <nav className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
            <a href="#reparacion" className="hover:text-cyan-400 transition">Reparación</a>
            <a href="#comunicaciones" className="hover:text-cyan-400 transition">Comunicaciones Seguras</a>
            <a href="#domicilio" className="hover:text-cyan-400 transition">Rastreo GPS</a>
          </nav>
          <div>
            <a href="tel:+573204531169" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-cyan-500/25">
              Solicitar Recogida
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Soporte técnico rápido, cercano y confiable
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Reparamos y Actualizamos tus Equipos y Blindamos tus Comunicaciones
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Desde la reparación física hasta la privacidad total en tus dispositivos móviles. Todo a domicilio con seguimiento GPS en tiempo real.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a href="#reparacion" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-10 py-4.5 rounded-2xl text-lg transition shadow-xl shadow-cyan-500/30">
              Ver Servicios de Reparación
            </a>
            <a href="#comunicaciones" className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-10 py-4.5 rounded-2xl text-lg transition">
              ¿Tus conversaciones son seguras?
            </a>
          </div>
        </div>
      </section>

      {/* Sección 1: Reparación y Actualización */}
      <section id="reparacion" className="py-24 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-extrabold text-white leading-tight">Reparamos y Actualizamos tus Equipos</h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">Nos encargamos de que tu computador o laptop funcione al máximo, ya sea por problemas físicos o de software. Tenemos el mejor precio en programas y licencias originales.</p>
            <ul className="mt-10 space-y-4 text-slate-300 text-lg">
              {[
                "Reparación",
                "Formateo e instalación de Windows/Mac/Antivirus",
                "Limpieza interna y cambio de pasta térmica",
                "Instalación, actualización y configuración de Software",
                "Optimización y aceleración del sistema",
                "Recuperación de datos"
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <span className="h-6 w-6 text-cyan-400 flex items-center justify-center border border-cyan-500/30 rounded-full bg-cyan-500/10">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
            <div className="relative z-10 py-12 text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white">Servicios Técnicos Integrales</h3>
              <p className="text-sm text-slate-400 mt-2">Cubrimos todas las necesidades de tus equipos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Comunicaciones Seguras */}
      <section id="comunicaciones" className="py-24 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-8">🛡️</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            ¿Crees que tu seguridad y tus conversaciones son seguras?
          </h2>
          <p className="mt-6 text-2xl text-cyan-400 font-semibold">
            Te aseguro que no lo son.
          </p>
          <p className="mt-8 text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Nosotros en <span className="text-white font-bold">KOMPUYÁ</span> nos aseguramos de que tu comunicación sea segura a través de la encriptación telefónica. Blindamos tu dispositivo contra filtraciones, rastreos desautorizados y espionaje de tus mensajes y fotos. Garantizamos privacidad absoluta.
          </p>
        </div>
      </section>

      {/* Sección 3: Domicilio y Rastreo GPS */}
      <section id="domicilio" className="py-24 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Logística KOMPUYÁ</span>
            <h2 className="text-4xl font-extrabold text-white mt-3">Recogida con rastreo GPS en vivo</h2>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed">
              Solicitas la recogida desde nuestra web o por teléfono, un técnico de <span className="text-white font-bold">KOMPUYÁ</span> va por tu equipo y ves exactamente en tiempo real dónde se encuentra el domiciliario en el mapa. Tu equipo estará 100% asegurado mientras lo tenemos.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            <div className="text-6xl mb-6">📍</div>
            <h3 className="text-2xl font-bold text-white">Mapa de Rastreo Activo</h3>
            <p className="text-lg text-slate-400 mt-2">Aquí conectaremos el mapa interactivo para tus clientes.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-950 border-t border-slate-800 py-20 text-center text-slate-400 text-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Image 
              src="/logo.png" 
              alt="Logo de Kompuyá" 
              width={70} 
              height={70} 
              className="rounded-full shadow-lg shadow-cyan-500/20"
            />
            <span className="font-extrabold text-3xl tracking-wider text-white">KOMPU<span className="text-cyan-400">YÁ</span></span>
          </div>
          <div className="mb-12 inline-block px-10 py-5 bg-cyan-500/20 border border-cyan-500/40 rounded-2xl text-3xl font-bold text-cyan-300 shadow-xl shadow-cyan-500/10">
            10% Descuento en el primer servicio
          </div>
          <div className="space-y-6 text-lg">
            <p className="flex items-center justify-center space-x-3"><span className="text-2xl">📞</span><span>Tel: <a href="tel:6012907584" className="hover:text-cyan-400">6012907584</a></span></p>
            <p className="flex items-center justify-center space-x-3"><span className="text-2xl">💬</span><span>WhatsApp: <a href="https://wa.me/573204531169" className="hover:text-cyan-400">3204531169</a></span></p>
            <p className="flex items-center justify-center space-x-3"><span className="text-2xl">📍</span><span>Dirección: Maranta Sector 4 Casa 39 Carrera 20B #188a-16</span></p>
          </div>
          <p className="mt-16 text-sm text-slate-600">© 2026 KOMPUYÁ. Todos los derechos reservados. Profesionales en tecnología y privacidad.</p>
        </div>
      </footer>
    </div>
  );
}