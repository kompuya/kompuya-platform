import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo estilizado */}
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              K
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              KOMPU<span className="text-blue-600">YÁ</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#reparacion" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#comunicaciones" className="hover:text-blue-600 transition">Seguridad</a>
            <a href="#domicilio" className="hover:text-blue-600 transition">Rastreo GPS</a>
          </nav>

          <div>
            <a href="https://wa.me/573204531169" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-orange-500/20">
              Solicitar recogida
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/60 to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold tracking-wide">
            Soporte técnico rápido, cercano y confiable
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Reparamos tus equipos y <span className="text-blue-600">blindamos tus comunicaciones</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Desde la reparación física hasta la privacidad total de tus dispositivos móviles. Todo a domicilio, con seguimiento GPS en tiempo real.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#reparacion" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-base transition shadow-md shadow-blue-600/20">
              Ver servicios de reparación
            </a>
            <a href="#comunicaciones" className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold px-8 py-4 rounded-xl text-base transition">
              ¿Tus conversaciones son seguras?
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2 text-emerald-600"><span className="text-lg">✓</span> Servicio a domicilio</span>
            <span className="flex items-center gap-2 text-emerald-600"><span className="text-lg">✓</span> Licencias originales</span>
            <span className="flex items-center gap-2 text-emerald-600"><span className="text-lg">✓</span> Equipo 100% asegurado</span>
          </div>
        </div>
      </section>

      {/* Sección 1: Reparación y Actualización */}
      <section id="reparacion" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Reparación y Actualización</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Tu computador funcionando al máximo</h2>
            <p className="mt-4 text-slate-600 text-base">
              Resolvemos problemas físicos y de software en computadores y portátiles. Tenemos el mejor precio en programas y licencias originales.
            </p>
          </div>

          {/* Tarjetas de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 font-bold">🔧</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Reparación</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Diagnóstico y arreglo de fallas físicas en computadores y portátiles.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 font-bold">🖥️</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Formateo e instalación</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Windows, Mac y antivirus instalados y listos para usar.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 font-bold">⚙️</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Limpieza interna</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Limpieza profunda y cambio de pasta térmica para evitar recalentamiento.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 font-bold">🔄</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Software y licencias</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Instalación, actualización y configuración con licencias originales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Franja promocional 10% */}
      <section className="bg-orange-500 text-white py-8 shadow-inner">
        <div className="max-w-5xl mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-orange-200">Oferta de bienvenida</span>
            <h3 className="text-2xl font-black">10% de descuento en tu primer servicio</h3>
          </div>
          <a href="https://wa.me/573204531169" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 font-extrabold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-md">
            Obtener descuento
          </a>
        </div>
      </section>

      {/* Sección 2: Comunicaciones Seguras */}
      <section id="comunicaciones" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-blue-200 font-bold text-xs uppercase tracking-wider">Comunicaciones Seguras</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 leading-tight">
              ¿Crees que tus conversaciones son seguras?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl">
              Te aseguramos que pueden no serlo. Con encriptación telefónica protegemos tu celular contra filtraciones, rastreos no autorizados y espionaje de tus mensajes y fotos.
            </p>
            
            <div className="mt-8">
              <a href="https://wa.me/573204531169" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition inline-block shadow-lg shadow-orange-600/30">
                Protege mi celular
              </a>
            </div>
          </div>

          <div className="space-y-4 mt-12">
            <div className="p-4 rounded-xl bg-blue-700/60 border border-blue-500/50 flex items-center gap-4">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold text-white">Mensajes y llamadas encriptados</span>
            </div>
            <div className="p-4 rounded-xl bg-blue-700/60 border border-blue-500/50 flex items-center gap-4">
              <span className="text-2xl">🛡️</span>
              <span className="font-semibold text-white">Protección contra espionaje</span>
            </div>
            <div className="p-4 rounded-xl bg-blue-700/60 border border-blue-500/50 flex items-center gap-4">
              <span className="text-2xl">🚫</span>
              <span className="font-semibold text-white">Bloqueo de rastreos no autorizados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Domicilio y GPS */}
      <section id="domicilio" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Logística Transparente</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Recogida con rastreo GPS en vivo</h2>
            <p className="mt-4 text-slate-600 text-base">
              Tu tranquilidad es lo más importante. Sabrás exactamente quién tiene tu equipo y en qué punto del camino está.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-lg mb-6">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Solicita el servicio</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Pide tu recogida desde el botón web o WhatsApp indicando tu dirección.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-lg mb-6">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Rastrea al técnico</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Recibe un enlace para ver en tiempo real la ubicación del domiciliario en el mapa.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-lg mb-6">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Equipo asegurado</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Tu computador estará protegido y respaldado durante todo el diagnóstico y reparación.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-2xl border border-dashed border-slate-300 text-center text-slate-400 font-medium">
            [ Foto del técnico y mapa en vivo en desarrollo ]
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="font-extrabold text-2xl text-white">KOMPU<span className="text-blue-500">YÁ</span></span>
          </div>
          <div className="space-y-3 text-sm text-slate-400 mb-8">
            <p>📞 Teléfono: 6012907584 | 💬 WhatsApp: 3204531169</p>
            <p>📍 Dirección: Maranta Sector 4 Casa 39 Carrera 20B #188a-16, Bogotá</p>
          </div>
          <p className="text-xs text-slate-500">© 2026 KOMPUYÁ. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}