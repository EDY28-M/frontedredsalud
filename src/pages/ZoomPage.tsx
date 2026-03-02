const COLORS = {
  ivory: '#FDFCF8',
  beige50: '#F9F6F0',
  beige100: '#F2EBE0',
  beige200: '#E6DCCA',
  gold400: '#D4AF37',
  gold500: '#B89628',
  gold600: '#997B1F',
  bronze800: '#4A3B2A',
  bronze900: '#2C2218',
};

const sesionesActivas = [
  { titulo: 'Revisión de Indicadores de Salud', host: 'Dra. Ana López', estado: 'live' as const },
  { titulo: 'Coordinación Epidemiológica', host: 'Dr. Carlos Ramírez', estado: 'live' as const },
  { titulo: 'Comité de Gestión Presupuestal', host: 'Lic. María Torres', estado: 'wait' as const },
  { titulo: 'Capacitación SIHCE', host: 'Ing. Pedro Sánchez', estado: 'soon' as const },
];

const proximasReuniones = [
  { titulo: 'Comité de Farmacia', dia: 'Lun 03/03', hora: '09:00 a.m.', id: '845 2301 9847' },
  { titulo: 'Reunión con Microredes', dia: 'Mar 04/03', hora: '10:00 a.m.', id: '912 4567 3210' },
  { titulo: 'Capacitación en HIS', dia: 'Mié 05/03', hora: '03:00 p.m.', id: '756 8901 2345' },
  { titulo: 'Evaluación POI 2026', dia: 'Jue 06/03', hora: '09:00 a.m.', id: '623 1098 7654' },
];

const estadoConfig = {
  live: { bg: 'bg-green-50 text-green-700', border: 'border-green-100', dot: 'bg-green-500', label: 'En vivo' },
  wait: { bg: 'bg-amber-50 text-amber-700', border: 'border-amber-100', dot: 'bg-amber-500', label: 'Espera' },
  soon: { bg: 'bg-slate-100 text-slate-500', border: 'border-slate-200', dot: 'bg-slate-400', label: 'Próximo' },
};

export default function ZoomPage() {
  return (
    <div className="min-h-screen w-full font-body" style={{ background: '#ffffff' }}>
      <main className="flex-1 flex flex-col items-center px-4 md:px-6 py-8 md:py-12 w-full max-w-[1400px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Columna izquierda (8/12) */}
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">

            {/* Hero - Sesión destacada */}
            <div
              className="relative overflow-hidden bg-white group hover:shadow-xl transition-all duration-500"
              style={{ border: `1px solid ${COLORS.gold400}33`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}
            >
              <div
                className="aspect-[21/9] w-full bg-cover bg-center relative"
                style={{ backgroundImage: 'url(/hero/hero-2.jpg)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${COLORS.bronze900}cc, ${COLORS.bronze900}33, transparent)` }}
                />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <div className="bg-white/90 text-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 border border-white/50">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                    </span>
                    Sesión en vivo
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                    Reunión de Coordinación Semanal
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white/90 text-xs md:text-sm font-medium">
                    <div className="flex items-center gap-2 bg-black/20 px-3 py-1 border border-white/10">
                      <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold400 }}>schedule</span>
                      <span>Iniciado hace 15 min</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/20 px-3 py-1 border border-white/10">
                      <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold400 }}>group</span>
                      <span>24 Participantes</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/20 px-3 py-1 border border-white/10">
                      <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold400 }}>admin_panel_settings</span>
                      <span>Host: Dirección de Red</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: `1px solid ${COLORS.beige100}` }}>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://zoom.us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 md:px-8 py-3 font-semibold flex items-center gap-2 text-sm tracking-wide uppercase text-white hover:-translate-y-0.5 transition-all"
                    style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})`, boxShadow: `0 10px 25px -5px ${COLORS.gold500}4d` }}
                  >
                    <span className="material-symbols-outlined">videocam</span>
                    Ingresar a sala
                  </a>
                  <button
                    className="px-5 py-3 font-semibold transition-all flex items-center gap-2 text-sm"
                    style={{ background: COLORS.beige100, color: COLORS.bronze800, border: `1px solid ${COLORS.beige200}` }}
                  >
                    <span className="material-symbols-outlined">description</span>
                    Agenda
                  </button>
                </div>
              </div>
            </div>

            {/* Próximas reuniones por Zoom */}
            <div
              className="bg-white p-6 md:p-8"
              style={{ border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}
            >
              <h2 className="text-xl font-bold mb-5" style={{ color: COLORS.bronze900 }}>
                Próximas reuniones por Zoom
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${COLORS.gold400}40` }}>
                      {['Reunión', 'Día', 'Hora', 'ID de Zoom', 'Acción'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: COLORS.gold600 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {proximasReuniones.map((r) => (
                      <tr key={r.titulo} className="hover:bg-stone-50 transition-colors" style={{ borderBottom: `1px solid ${COLORS.beige200}` }}>
                        <td className="px-4 py-3.5 font-medium" style={{ color: COLORS.bronze900 }}>{r.titulo}</td>
                        <td className="px-4 py-3.5" style={{ color: `${COLORS.bronze800}99` }}>{r.dia}</td>
                        <td className="px-4 py-3.5" style={{ color: `${COLORS.bronze800}99` }}>{r.hora}</td>
                        <td className="px-4 py-3.5 font-mono text-xs" style={{ color: `${COLORS.bronze800}cc` }}>{r.id}</td>
                        <td className="px-4 py-3.5">
                          <a
                            href="https://zoom.us/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-xs hover:opacity-80 transition-opacity"
                            style={{ color: COLORS.gold600 }}
                          >
                            Ingresar →
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Instrucciones Zoom */}
            <div
              className="bg-white p-6 md:p-8"
              style={{ border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: COLORS.bronze900 }}>
                ¿Cómo unirse a una reunión Zoom?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ol className="space-y-4 text-sm" style={{ color: `${COLORS.bronze800}cc` }}>
                    {[
                      { step: '1', title: 'Descargar Zoom', desc: 'Instale la aplicación de Zoom en su computadora o dispositivo móvil desde zoom.us/download.' },
                      { step: '2', title: 'Obtener el enlace', desc: 'Haga clic en "Ingresar" de la reunión correspondiente o use el ID de reunión proporcionado.' },
                      { step: '3', title: 'Unirse a la sala', desc: 'Ingrese su nombre y espere a que el anfitrión le permita el acceso a la sala.' },
                      { step: '4', title: 'Configurar audio y video', desc: 'Active su micrófono y cámara cuando el moderador lo autorice.' },
                    ].map((s) => (
                      <li key={s.step} className="flex gap-4 items-start">
                        <div
                          className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                          style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})` }}
                        >
                          {s.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm" style={{ color: COLORS.bronze900 }}>{s.title}</h4>
                          <p className="text-xs mt-0.5" style={{ color: `${COLORS.bronze800}99` }}>{s.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="space-y-4">
                  <div className="p-4" style={{ background: COLORS.beige50, border: `1px solid ${COLORS.gold400}30` }}>
                    <h4 className="font-bold text-sm mb-2" style={{ color: COLORS.bronze900 }}>Requisitos técnicos</h4>
                    <ul className="space-y-1.5 text-xs" style={{ color: `${COLORS.bronze800}99` }}>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>check_circle</span>
                        Conexión a internet estable (mínimo 2 Mbps)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>check_circle</span>
                        Micrófono y altavoces funcionales
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>check_circle</span>
                        Cámara web (opcional pero recomendada)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>check_circle</span>
                        Aplicación Zoom instalada o navegador actualizado
                      </li>
                    </ul>
                  </div>
                  <div className="p-4" style={{ background: COLORS.beige50, border: `1px solid ${COLORS.gold400}30` }}>
                    <h4 className="font-bold text-sm mb-2" style={{ color: COLORS.bronze900 }}>Soporte técnico</h4>
                    <div className="space-y-1 text-xs" style={{ color: `${COLORS.bronze800}99` }}>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>phone</span>
                        (062) 512-345 Anexo 123
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>location_on</span>
                        Tingo María, Huánuco - Castillo Grande
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" style={{ color: COLORS.gold600 }}>mail</span>
                        soporte@redsaludlp.gob.pe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha (4/12) - Sesiones activas */}
          <div className="lg:col-span-4 flex flex-col h-full gap-6">
            <div
              className="flex flex-col overflow-hidden"
              style={{ background: COLORS.ivory, border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}
            >
              <div
                className="p-5 flex justify-between items-center"
                style={{ borderBottom: `1px solid ${COLORS.gold400}30`, background: COLORS.beige50 }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: COLORS.gold500 }}></span>
                  <h3 className="font-bold text-lg" style={{ color: COLORS.bronze900 }}>
                    Sesiones activas
                  </h3>
                </div>
                <button className="text-[11px] font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity" style={{ color: COLORS.gold600 }}>
                  Ver todo
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {sesionesActivas.map((s) => {
                  const cfg = estadoConfig[s.estado];
                  const isSoon = s.estado === 'soon';
                  return (
                    <div
                      key={s.titulo}
                      className={`group bg-white p-4 shadow-sm border border-transparent hover:shadow-md transition-all cursor-pointer flex items-center gap-4 ${isSoon ? 'opacity-70 hover:opacity-100' : ''}`}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${COLORS.gold400}40`)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                    >
                      <div className="relative">
                        <div
                          className="h-11 w-11 flex items-center justify-center flex-shrink-0"
                          style={{ background: `${COLORS.gold400}1a`, color: COLORS.gold600 }}
                        >
                          <span className="material-symbols-outlined">videocam</span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-white p-0.5 rounded-full">
                          <div className={`h-2.5 w-2.5 rounded-full shadow-sm ${cfg.dot}`}></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate" style={{ color: COLORS.bronze900 }}>{s.titulo}</h4>
                        <p className="text-xs truncate mt-0.5" style={{ color: `${COLORS.bronze800}80` }}>Host: {s.host}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide border ${cfg.bg} ${cfg.border}`}>
                          {cfg.label}
                        </span>
                        {!isSoon ? (
                          <a
                            href="https://zoom.us/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 w-8 flex items-center justify-center transition-colors"
                            style={{ background: COLORS.beige50, color: COLORS.gold600 }}
                          >
                            <span className="material-symbols-outlined text-lg">videocam</span>
                          </a>
                        ) : (
                          <div
                            className="h-8 w-8 flex items-center justify-center cursor-not-allowed"
                            style={{ background: COLORS.beige50, color: `${COLORS.bronze800}4d` }}
                          >
                            <span className="material-symbols-outlined text-lg">lock</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-5" style={{ borderTop: `1px solid ${COLORS.gold400}30`, background: COLORS.beige50 }}>
                <button
                  className="w-full bg-white py-3 text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  style={{ color: COLORS.gold600, border: `1px solid ${COLORS.gold400}40` }}
                >
                  <span className="material-symbols-outlined text-xl">calendar_add_on</span>
                  Programar nueva reunión
                </button>
              </div>
            </div>

            {/* Descargar Zoom */}
            <div
              className="p-6"
              style={{ background: COLORS.ivory, border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}
            >
              <h4 className="font-bold text-base mb-4" style={{ color: COLORS.bronze900 }}>
                Descargar Zoom
              </h4>
              <p className="text-sm mb-4" style={{ color: `${COLORS.bronze800}99` }}>
                Descargue la aplicación para una mejor experiencia en las reuniones virtuales.
              </p>
              <a
                href="https://zoom.us/download"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 text-white hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})`, boxShadow: `0 5px 15px -3px ${COLORS.gold500}4d` }}
              >
                <span className="material-symbols-outlined">download</span>
                Descargar Zoom
              </a>
            </div>

            {/* Contacto */}
            <div
              className="p-6"
              style={{ background: COLORS.ivory, border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}
            >
              <h4 className="font-bold text-base mb-3" style={{ color: COLORS.bronze900 }}>
                ¿Necesita ayuda?
              </h4>
              <p className="text-sm mb-3" style={{ color: `${COLORS.bronze800}99` }}>
                Si tiene problemas para conectarse, comuníquese con la Oficina de Informática.
              </p>
              <div className="space-y-2 text-sm" style={{ color: `${COLORS.bronze800}cc` }}>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base" style={{ color: COLORS.gold600 }}>phone</span>
                  <span>(062) 512-345 Anexo 123</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base" style={{ color: COLORS.gold600 }}>location_on</span>
                  <span>Tingo María, Huánuco - Castillo Grande</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base" style={{ color: COLORS.gold600 }}>mail</span>
                  <span>soporte@redsaludlp.gob.pe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
