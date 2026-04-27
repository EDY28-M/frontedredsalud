import { useState, useEffect } from 'react';
import { getReunionesZoom, type ReunionZoomPublica } from '@/services/publicApi';
import { Video, Clock, Users, ExternalLink, Download, Phone, Mail, MapPin, Loader2, Calendar, Hash } from 'lucide-react';

const COLORS = {
  ivory: '#92DBFF', beige50: '#92DBFF', beige100: '#92DBFF', beige200: '#92DBFF',
  gold400: '#D4AF37', gold500: '#B89628', gold600: '#997B1F', bronze800: '#4A3B2A', bronze900: '#2C2218',
};

const defaultEstadoCfg = { bg: 'bg-slate-100 text-slate-500', border: 'border-slate-200', dot: 'bg-slate-400', label: '—' };

const estadoCfg: Record<string, { bg: string; border: string; dot: string; label: string }> = {
  EnVivo: { bg: 'bg-green-50 text-green-700', border: 'border-green-100', dot: 'bg-green-500', label: 'En vivo' },
  EnEspera: { bg: 'bg-amber-50 text-amber-700', border: 'border-amber-100', dot: 'bg-amber-500', label: 'En Espera' },
  Proximo: { bg: 'bg-slate-100 text-slate-500', border: 'border-slate-200', dot: 'bg-slate-400', label: 'Próximo' },
  Finalizado: { bg: 'bg-slate-50 text-slate-500', border: 'border-slate-200', dot: 'bg-slate-300', label: 'Finalizado' },
};
function getEstadoCfg(estado: string) {
  return estadoCfg[estado] ?? defaultEstadoCfg;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-PE', { weekday: 'short', day: '2-digit', month: 'short' });
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
}

type ZoomPageState = {
  reuniones: ReunionZoomPublica[];
  loading: boolean;
};

const initialZoomState: ZoomPageState = { reuniones: [], loading: true };

export default function ZoomPage() {
  const [state, setState] = useState<ZoomPageState>(initialZoomState);
  const { reuniones, loading } = state;

  useEffect(() => {
    getReunionesZoom()
      .then((data) => {
        const order: Record<string, number> = { EnVivo: 0, EnEspera: 1, Proximo: 2, Finalizado: 3 };
        const sorted = [...data].sort(
          (a, b) =>
            (order[a.estado] ?? 4) - (order[b.estado] ?? 4) || new Date(a.diaHora).getTime() - new Date(b.diaHora).getTime()
        );
        setState({ reuniones: sorted, loading: false });
      })
      .catch(() => setState((s) => ({ ...s, loading: false })));
  }, []);

  const activas = reuniones.filter(r => r.estado === 'EnVivo' || r.estado === 'EnEspera');
  const proximas = reuniones.filter(r => r.estado === 'Proximo');
  const destacada = activas[0] ?? proximas[0] ?? null;

  return (
    <div className="min-h-screen w-full font-body" style={{ background: '#ffffff' }}>
      <main className="flex-1 flex flex-col items-center px-4 md:px-6 py-8 md:py-12 w-full max-w-[1400px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* ── Columna izquierda (8/12) ── */}
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">

            {/* Hero: reunión destacada */}
            <div className="relative overflow-hidden bg-white group hover:shadow-xl transition-all duration-500"
              style={{ border: `1px solid ${COLORS.gold400}33`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}>
              <div className="aspect-[21/9] w-full bg-cover bg-center relative" style={{ backgroundImage: 'url(/hero/hero-2.jpg)' }}>
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${COLORS.bronze900}cc, ${COLORS.bronze900}33, transparent)` }} />
                {/* Badge estado */}
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  {destacada ? (
                    <div className="bg-white/90 text-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow flex items-center gap-2 border border-white/50">
                      {destacada.estado === 'EnVivo' ? (
                        <><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" /></span>Sesión en vivo</>
                      ) : (
                        <><Video size={12} /> {getEstadoCfg(destacada.estado).label}</>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white/80 text-slate-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow border border-white/50 flex items-center gap-2">
                      <Video size={12} /> Sin sesiones activas
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow">
                    {loading ? 'Cargando...' : destacada ? destacada.titulo : 'Reuniones Zoom'}
                  </h1>
                  {destacada && (
                    <div className="flex flex-wrap items-center gap-3 text-white/90 text-xs md:text-sm font-medium">
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1 border border-white/10">
                        <Clock size={14} style={{ color: COLORS.gold400 }} />
                        <span>{formatDate(destacada.diaHora)} · {formatTime(destacada.diaHora)}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1 border border-white/10">
                        <Users size={14} style={{ color: COLORS.gold400 }} />
                        <span>Host: {destacada.responsableHost}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="bg-white px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: `1px solid ${COLORS.beige100}` }}>
                <div className="flex gap-3 flex-wrap">
                  {destacada?.linkAcceso ? (
                    <a href={destacada.linkAcceso} target="_blank" rel="noopener noreferrer"
                      className="px-6 py-3 font-semibold flex items-center gap-2 text-sm uppercase text-white hover:-translate-y-0.5 transition-all"
                      style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})`, boxShadow: `0 10px 25px -5px ${COLORS.gold500}4d` }}>
                      <ExternalLink size={16} /> Ingresar a sala
                    </a>
                  ) : (
                    <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer"
                      className="px-6 py-3 font-semibold flex items-center gap-2 text-sm uppercase text-white hover:-translate-y-0.5 transition-all"
                      style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})` }}>
                      <ExternalLink size={16} /> Ir a Zoom.us
                    </a>
                  )}
                </div>
                {destacada?.zoomMeetId && (
                  <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: COLORS.bronze800 }}>
                    <Hash size={12} /> ID: {destacada.zoomMeetId}
                  </span>
                )}
              </div>
            </div>

            {/* Tabla de próximas reuniones */}
            <div className="bg-white p-6 md:p-8" style={{ border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}>
              <h2 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: COLORS.bronze900 }}>
                <Calendar size={18} style={{ color: COLORS.gold600 }} /> Próximas reuniones por Zoom
              </h2>
              {loading && <div className="flex justify-center py-10"><Loader2 size={28} className="animate-spin" style={{ color: COLORS.gold500 }} /></div>}
              {!loading && proximas.length === 0 && !activas.length && (
                <p className="text-center py-8" style={{ color: `${COLORS.bronze800}66` }}>No hay reuniones programadas.</p>
              )}
              {!loading && (proximas.length > 0 || activas.length > 0) && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ borderBottom: `2px solid ${COLORS.gold400}40` }}>
                        {['Reunión', 'Día', 'Hora', 'Host', 'ID de Zoom', 'Acción'].map(h => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: COLORS.gold600 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {reuniones.map(r => {
                        const cfg = getEstadoCfg(r.estado);
                        return (
                          <tr key={r.id} className="hover:bg-stone-50 transition-colors" style={{ borderBottom: `1px solid ${COLORS.beige200}` }}>
                            <td className="px-4 py-3.5 font-medium" style={{ color: COLORS.bronze900 }}>
                              <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                                {r.titulo}
                              </div>
                            </td>
                            <td className="px-4 py-3.5" style={{ color: `${COLORS.bronze800}99` }}>{formatDate(r.diaHora)}</td>
                            <td className="px-4 py-3.5" style={{ color: `${COLORS.bronze800}99` }}>{formatTime(r.diaHora)}</td>
                            <td className="px-4 py-3.5 text-xs" style={{ color: `${COLORS.bronze800}99` }}>{r.responsableHost}</td>
                            <td className="px-4 py-3.5 font-mono text-xs" style={{ color: `${COLORS.bronze800}cc` }}>{r.zoomMeetId || '—'}</td>
                            <td className="px-4 py-3.5">
                              {r.linkAcceso ? (
                                <a href={r.linkAcceso} target="_blank" rel="noopener noreferrer"
                                  className="font-semibold text-xs hover:opacity-80 transition-opacity flex items-center gap-1"
                                  style={{ color: COLORS.gold600 }}>
                                  <ExternalLink size={11} /> Ingresar
                                </a>
                              ) : <span className="text-xs" style={{ color: `${COLORS.bronze800}40` }}>—</span>}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Instrucciones */}
            <div className="bg-white p-6 md:p-8" style={{ border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.bronze900 }}>
                <Video size={18} style={{ color: COLORS.gold600 }} /> ¿Cómo unirse a una reunión Zoom?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ol className="space-y-4 text-sm" style={{ color: `${COLORS.bronze800}cc` }}>
                  {[
                    { n: '1', t: 'Descargar Zoom', d: 'Instale la aplicación desde zoom.us/download.' },
                    { n: '2', t: 'Hacer clic en "Ingresar"', d: 'Use el link de la reunión o el ID proporcionado.' },
                    { n: '3', t: 'Unirse a la sala', d: 'Ingrese su nombre y espere al anfitrión.' },
                    { n: '4', t: 'Configurar audio y video', d: 'Active micrófono cuando el moderador lo autorice.' },
                  ].map(s => (
                    <li key={s.n} className="flex gap-4 items-start">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                        style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})` }}>
                        {s.n}
                      </div>
                      <div><h4 className="font-bold text-sm" style={{ color: COLORS.bronze900 }}>{s.t}</h4>
                        <p className="text-xs mt-0.5" style={{ color: `${COLORS.bronze800}99` }}>{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="space-y-4 text-sm" style={{ color: `${COLORS.bronze800}99` }}>
                  <div className="p-4" style={{ background: COLORS.beige50, border: `1px solid ${COLORS.gold400}30` }}>
                    <h4 className="font-bold text-sm mb-2" style={{ color: COLORS.bronze900 }}>Soporte técnico</h4>
                    <div className="space-y-1.5 text-xs">
                      <p className="flex items-center gap-2"><Phone size={12} style={{ color: COLORS.gold600 }} /> (062) 512-345 Anexo 123</p>
                      <p className="flex items-center gap-2"><MapPin size={12} style={{ color: COLORS.gold600 }} /> Tingo María, Huánuco</p>
                      <p className="flex items-center gap-2"><Mail size={12} style={{ color: COLORS.gold600 }} /> soporte@redsaludlp.gob.pe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Columna derecha (4/12) ── */}
          <div className="lg:col-span-4 flex flex-col h-full gap-6">
            <div className="flex flex-col overflow-hidden" style={{ background: COLORS.ivory, border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}>
              <div className="p-5 flex justify-between items-center" style={{ borderBottom: `1px solid ${COLORS.gold400}30`, background: COLORS.beige50 }}>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: COLORS.gold500 }} />
                  <h3 className="font-bold text-lg" style={{ color: COLORS.bronze900 }}>Sesiones activas</h3>
                </div>
              </div>
              <div className="flex-1 p-4 space-y-3">
                {loading && <div className="flex justify-center py-6"><Loader2 size={22} className="animate-spin" style={{ color: COLORS.gold500 }} /></div>}
                {!loading && activas.length === 0 && (
                  <p className="text-center py-6 text-sm" style={{ color: `${COLORS.bronze800}66` }}>Sin sesiones activas ahora.</p>
                )}
                {activas.map(r => {
                  const cfg = getEstadoCfg(r.estado);
                  return (
                    <div key={r.id} className="bg-white p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-all cursor-pointer">
                      <div className="relative">
                        <div className="h-11 w-11 flex items-center justify-center flex-shrink-0" style={{ background: `${COLORS.gold400}1a`, color: COLORS.gold600 }}>
                          <Video size={20} />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-white p-0.5 rounded-full">
                          <div className={`h-2.5 w-2.5 rounded-full shadow-sm ${cfg.dot}`} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate" style={{ color: COLORS.bronze900 }}>{r.titulo}</h4>
                        <p className="text-xs truncate mt-0.5" style={{ color: `${COLORS.bronze800}80` }}>Host: {r.responsableHost}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide border ${cfg.bg} ${cfg.border}`}>{cfg.label}</span>
                        {r.linkAcceso && (
                          <a href={r.linkAcceso} target="_blank" rel="noopener noreferrer"
                            className="h-8 w-8 flex items-center justify-center transition-colors"
                            style={{ background: COLORS.beige50, color: COLORS.gold600 }}>
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Descargar Zoom */}
            <div className="p-6" style={{ background: COLORS.ivory, border: `1px solid ${COLORS.beige200}`, boxShadow: `0 10px 40px -10px ${COLORS.gold500}26` }}>
              <h4 className="font-bold text-base mb-2 flex items-center gap-2" style={{ color: COLORS.bronze900 }}>
                <Download size={16} style={{ color: COLORS.gold600 }} /> Descargar Zoom
              </h4>
              <p className="text-sm mb-4" style={{ color: `${COLORS.bronze800}99` }}>Descarga la app para la mejor experiencia.</p>
              <a href="https://zoom.us/download" target="_blank" rel="noopener noreferrer"
                className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 text-white hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(to right, ${COLORS.gold500}, ${COLORS.gold400})`, boxShadow: `0 5px 15px -3px ${COLORS.gold500}4d` }}>
                <Download size={15} /> Descargar Zoom
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
