const COLORS = {
  primary: '#f0c442',
  backgroundLight: '#f8f7f6',
  backgroundDark: '#221d10',
  surfaceBeige: '#efebe6',
  surfaceDark: '#1a1814',
};

const speakers = [
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Cardióloga Principal',
    desc: 'Especialista en monitoreo remoto y sistemas de alerta temprana.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=128&h=128&fit=crop',
  },
  {
    name: 'Ing. Marco Polo',
    role: 'Director de TI',
    desc: 'Arquitecto de sistemas de salud integrados y seguridad de datos.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop',
  },
];

const chatMessages = [
  { initials: 'JP', name: 'Juan Pérez', time: '14:32', msg: '¿Los protocolos estarán disponibles en PDF?', isAdmin: false, color: 'blue' },
  { initials: 'AD', name: 'Admin', time: '14:33', msg: 'Sí, Juan. Al finalizar la charla se habilitará la descarga en la pestaña de Recursos.', isAdmin: true, color: 'yellow' },
  { initials: 'ML', name: 'Maria Lopez', time: '14:35', msg: 'Excelente punto sobre la seguridad de datos.', isAdmin: false, color: 'green' },
  { initials: 'CR', name: 'Carlos Ruiz', time: '14:36', msg: '¿Qué plataforma recomiendan para zonas rurales con baja conectividad?', isAdmin: false, color: 'purple' },
];

export default function AuditorioPage() {
  return (
    <div className="min-h-screen flex flex-col font-body" style={{ background: COLORS.backgroundLight }}>
      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Breadcrumbs / Status */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-500">
              <span className="w-2 h-2 bg-red-500 animate-pulse"></span>
              <span>En Vivo</span>
              <span className="px-2">/</span>
              <span>Sala A</span>
              <span className="px-2">/</span>
              <span>14:30 PM EST</span>
            </div>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-stone-100 text-stone-500">
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
              <button className="p-1 hover:bg-stone-100 text-stone-500">
                <span className="material-symbols-outlined text-sm">open_in_full</span>
              </button>
            </div>
          </div>

          {/* Video Player Container */}
          <div
            className="relative w-full aspect-video shadow-lg overflow-hidden"
            style={{
              background: COLORS.surfaceDark,
              border: '1px solid #e0dbd0',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
            }}
          >
            <div className="absolute inset-0 bg-stone-900 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
                style={{ backgroundImage: 'url(/hero/hero-1.jpg)' }}
              />
              <button
                className="z-10 w-20 h-20 flex items-center justify-center transition-all hover:scale-105"
                style={{ background: `${COLORS.primary}e6`, color: COLORS.surfaceDark }}
              >
                <span className="material-symbols-outlined text-5xl">play_arrow</span>
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white z-20">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined cursor-pointer hover:opacity-80" style={{ color: COLORS.primary }}>pause</span>
                <span className="material-symbols-outlined cursor-pointer hover:opacity-80" style={{ color: COLORS.primary }}>volume_up</span>
                <div className="h-1 w-24 bg-white/20 relative">
                  <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '66%' }} />
                </div>
                <span className="text-xs font-mono">24:15 / 1:30:00</span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="text-[10px] font-bold px-1 py-0.5 uppercase"
                  style={{ background: COLORS.primary, color: 'black' }}
                >
                  HD
                </span>
                <span className="material-symbols-outlined cursor-pointer hover:opacity-80" style={{ color: COLORS.primary }}>settings</span>
                <span className="material-symbols-outlined cursor-pointer hover:opacity-80" style={{ color: COLORS.primary }}>fullscreen</span>
              </div>
            </div>
            {/* Technical corner accent */}
            <div
              className="absolute bottom-0 right-0 w-3 h-3"
              style={{ borderBottom: `2px solid ${COLORS.primary}`, borderRight: `2px solid ${COLORS.primary}` }}
            />
          </div>

          {/* Title & Info */}
          <div className="bg-white border border-stone-200 p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-2 tracking-tight">
              Transmisión en Vivo: Avances en Telemedicina
            </h1>
            <p
              className="text-stone-600 text-lg leading-relaxed mb-6 font-light pl-4"
              style={{ borderLeft: `4px solid ${COLORS.primary}` }}
            >
              Bienvenidos al Auditorio Digital de Leoncio Prado. Esta sesión técnica aborda la integración de nuevos protocolos para la atención remota y diagnósticos asistidos por IA.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 border-t border-stone-100 pt-4">
              <span className="px-3 py-1 text-xs font-mono uppercase text-stone-600 border border-stone-200" style={{ background: COLORS.surfaceBeige }}>
                #Telemedicina
              </span>
              <span className="px-3 py-1 text-xs font-mono uppercase text-stone-600 border border-stone-200" style={{ background: COLORS.surfaceBeige }}>
                #SaludDigital
              </span>
              <span className="px-3 py-1 text-xs font-mono uppercase text-stone-600 border border-stone-200" style={{ background: COLORS.surfaceBeige }}>
                #Protocolos2024
              </span>
            </div>
          </div>

          {/* Speakers Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {speakers.map((s) => (
              <div key={s.name} className="bg-white border border-stone-200 p-4 flex gap-4 items-start">
                <div className="w-16 h-16 bg-stone-200 shrink-0 overflow-hidden">
                  <img className="w-full h-full object-cover" src={s.img} alt={s.name} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{s.name}</h3>
                  <p className="text-sm font-medium uppercase tracking-wide" style={{ color: COLORS.primary }}>{s.role}</p>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Chat Panel */}
        <div className="lg:col-span-4 flex flex-col min-h-[600px]">
          <div className="bg-white border border-stone-200 flex flex-col flex-1 shadow-lg">
            {/* Tabs */}
            <div className="flex border-b border-stone-200 bg-stone-50">
              <button
                className="flex-1 py-4 text-center text-sm font-bold uppercase tracking-wider bg-white"
                style={{ borderBottom: `2px solid ${COLORS.primary}`, color: 'inherit' }}
              >
                Chat
              </button>
              <button className="flex-1 py-4 text-center text-sm font-bold uppercase tracking-wider text-stone-500 hover:text-slate-900 border-b-2 border-transparent hover:bg-stone-100 transition-colors">
                Q&A
              </button>
              <button className="flex-1 py-4 text-center text-sm font-bold uppercase tracking-wider text-stone-500 hover:text-slate-900 border-b-2 border-transparent hover:bg-stone-100 transition-colors">
                Encuesta
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50 min-h-[280px]">
              <div className="flex justify-center">
                <span className="bg-stone-200 text-stone-600 text-xs px-2 py-1 font-mono uppercase">
                  La sesión ha comenzado
                </span>
              </div>
              {chatMessages.map((m) => (
                <div key={`${m.name}-${m.time}`} className="flex gap-3 items-start">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0 border text-xs font-bold"
                    style={{
                      background: m.color === 'blue' ? '#dbeafe' : m.color === 'green' ? '#dcfce7' : m.color === 'purple' ? '#f3e8ff' : `${COLORS.primary}33`,
                      borderColor: m.color === 'blue' ? '#93c5fd' : m.color === 'green' ? '#86efac' : m.color === 'purple' ? '#e9d5ff' : `${COLORS.primary}66`,
                      color: m.color === 'blue' ? '#1e40af' : m.color === 'green' ? '#166534' : m.color === 'purple' ? '#6b21a8' : '#854d0e',
                    }}
                  >
                    {m.initials}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-sm font-bold ${m.isAdmin ? '' : 'text-slate-900'}`} style={m.isAdmin ? { color: COLORS.primary } : {}}>
                        {m.name}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">{m.time}</span>
                    </div>
                    <p
                      className={`text-sm text-stone-700 mt-1 ${m.isAdmin ? 'p-2' : ''}`}
                      style={m.isAdmin ? { background: `${COLORS.primary}1a`, borderLeft: `2px solid ${COLORS.primary}` } : {}}
                    >
                      {m.msg}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-stone-200 bg-white">
              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full border p-3 text-sm resize-none h-20 placeholder-stone-400 focus:outline-none"
                  placeholder="Escribe tu pregunta o comentario..."
                  style={{
                    background: COLORS.surfaceBeige,
                    borderColor: '#d6d3d1',
                  }}
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 text-stone-400">
                    <button className="hover:opacity-70" style={{ color: COLORS.primary }}>
                      <span className="material-symbols-outlined text-lg">sentiment_satisfied</span>
                    </button>
                    <button className="hover:opacity-70" style={{ color: COLORS.primary }}>
                      <span className="material-symbols-outlined text-lg">attach_file</span>
                    </button>
                  </div>
                  <button
                    className="px-6 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-colors"
                    style={{ background: '#1e293b', color: 'white' }}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <style>{`
        .auditorio-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .auditorio-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .auditorio-scrollbar::-webkit-scrollbar-thumb { background: #ccc; }
        .auditorio-scrollbar::-webkit-scrollbar-thumb:hover { background: #aaa; }
      `}</style>
    </div>
  );
}
