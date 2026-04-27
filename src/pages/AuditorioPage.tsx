import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Radio, MonitorPlay, Calendar, Clock, MapPin, Users,
  ChevronRight, PlayCircle, RefreshCw, Phone, Mail, Info,
  Mic, Tag, History, MessageCircle, Send,
} from 'lucide-react';
import { getEventos, getChatMensajes, postChatMensaje, type EventoPublico, type MensajeChatPublico } from '@/services/publicApi';

/** Convierte URL de YouTube a formato embed */
function toEmbed(url: string): string {
  if (!url) return '';
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|live\/|embed\/))([A-Za-z0-9_-]{11})/);
  if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0&modestbranding=1`;
  return url;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
}
function formatTimeShort(iso: string) {
  return new Date(iso).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

/* ─── Ticker de texto corrido ─── */
function Ticker({ text }: { text: string }) {
  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{ background: '#001f5b', borderTop: '2px solid #f0c442', borderBottom: '2px solid #f0c442' }}
    >
      <div
        className="inline-block py-2 text-xs font-bold tracking-widest uppercase text-white/80"
        style={{ animation: 'ticker 22s linear infinite' }}
      >
        {Array(4).fill(`\u00A0\u00A0\u00A0\u25CF\u00A0\u00A0${text}`).join('')}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── Hero del auditorio ─── */
function AuditorioHero({
  enVivo,
  onRefresh,
}: {
  enVivo: EventoPublico | undefined;
  onRefresh: () => void;
}) {
  return (
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #001f5b 60%, #0d2d6e 100%)' }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#f0c44222' }}>
                <MonitorPlay size={22} style={{ color: '#f0c442' }} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Red de Salud Leoncio Prado</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              Auditorio <span style={{ color: '#f0c442' }}>Digital</span>
            </h1>
            <p className="text-white/50 text-sm md:text-base max-w-lg">
              Transmisiones en vivo, conferencias y eventos institucionales de salud.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {enVivo ? (
              <span className="flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 px-4 py-2 text-sm font-bold rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Transmisión en vivo
              </span>
            ) : (
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/40 px-4 py-2 text-sm font-bold rounded-full">
                <Radio size={14} />
                Sin transmisión activa
              </span>
            )}
            <button
              onClick={onRefresh}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 px-4 py-2 text-xs font-bold rounded-full transition-all"
              title="Actualizar"
            >
              <RefreshCw size={13} />
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Chat en vivo del auditorio ─── */
function AuditorioChat({ eventoId }: { eventoId: number }) {
  const [mensajes, setMensajes] = useState<MensajeChatPublico[]>([]);
  const [chatLoading, setChatLoading] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const cargarMensajes = useCallback(() => {
    getChatMensajes(eventoId)
      .then((list) => {
        setMensajes(list);
        setChatLoading(false);
      })
      .catch(() => setChatLoading(false));
  }, [eventoId]);

  useEffect(() => {
    cargarMensajes();
    const interval = setInterval(cargarMensajes, 3000);
    return () => clearInterval(interval);
  }, [cargarMensajes]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [mensajes]);

  const enviar = () => {
    const t = texto.trim();
    if (!t) return;
    const nombre = (usuario || 'Invitado').trim() || 'Invitado';
    setEnviando(true);
    postChatMensaje(eventoId, nombre, t)
      .then((nuevo) => {
        setMensajes((prev) => [...prev, nuevo]);
        setTexto('');
        setEnviando(false);
      })
      .catch(() => setEnviando(false));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col" style={{ minHeight: 280 }}>
      <div className="px-5 py-4 flex items-center gap-2 border-b border-gray-100" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #001f5b 100%)' }}>
        <MessageCircle size={16} style={{ color: '#f0c442' }} />
        <h3 className="font-bold text-sm text-white">Chat en vivo</h3>
      </div>
      <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-2 min-h-[160px] max-h-[220px]">
        {chatLoading && <p className="text-gray-400 text-xs text-center py-4">Cargando mensajes...</p>}
        {!chatLoading && mensajes.length === 0 && (
          <p className="text-gray-400 text-xs text-center py-4">Sé el primero en escribir.</p>
        )}
        {mensajes.map((m) => (
          <div key={m.id} className="text-sm">
            <span className="font-semibold text-slate-700">{m.usuario}</span>
            <span className="text-gray-400 text-xs ml-2">{formatTimeShort(m.fechaEnvio)}</span>
            <p className="text-slate-600 mt-0.5 break-words">{m.texto}</p>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-100 space-y-2">
        <input
          type="text"
          placeholder="Tu nombre (opcional)"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && enviar()}
            className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
          />
          <button
            type="button"
            onClick={enviar}
            disabled={enviando || !texto.trim()}
            className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-1 disabled:opacity-50 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #001f5b 0%, #0d2d6e 100%)' }}
          >
            <Send size={14} /> Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Sidebar (chat + archivo + instrucciones + soporte) ─── */
function AuditorioSidebar({
  enVivo,
  pasados,
  loading,
  refreshed,
}: {
  enVivo: EventoPublico | undefined;
  pasados: EventoPublico[];
  loading: boolean;
  refreshed: string;
}) {
  return (
    <div className="lg:col-span-4 flex flex-col gap-5">
      {enVivo && <AuditorioChat eventoId={enVivo.id} />}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 flex items-center gap-2 border-b border-gray-100">
          <History size={15} style={{ color: '#001f5b' }} strokeWidth={2} />
          <h3 className="font-bold text-slate-900 text-sm">Archivo de eventos</h3>
        </div>
        <div className="p-4 space-y-1">
          {loading && <p className="text-gray-400 text-xs text-center py-6">Cargando...</p>}
          {!loading && pasados.length === 0 && <p className="text-gray-400 text-xs text-center py-6">Sin eventos pasados.</p>}
          {pasados.map((ev) => (
            <div key={ev.id} className="flex items-start gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0 group-hover:bg-blue-400 transition-colors" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 line-clamp-1">{ev.titulo}</p>
                <p className="text-xs text-gray-400 mt-0.5">{formatDate(ev.fechaHora)}</p>
              </div>
              {ev.videoUrl && (
                <a href={ev.videoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle size={13} /> Ver
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #001f5b 100%)' }}>
        <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
          <Info size={14} style={{ color: '#f0c442' }} />
          <h3 className="font-bold text-sm text-white">¿Cómo ver la transmisión?</h3>
        </div>
        <div className="p-5 space-y-4">
          {[
            { n: '1', icon: <Radio size={14} />, t: 'Reunión inicia en Zoom', d: 'El host activa "Transmitir en YouTube Live" desde Zoom.' },
            { n: '2', icon: <MonitorPlay size={14} />, t: 'URL registrada en el sistema', d: 'El admin pega la URL de YouTube en el campo "Video/Stream" del evento y lo pone "En Vivo".' },
            { n: '3', icon: <PlayCircle size={14} />, t: 'Aparece automáticamente', d: 'El stream se muestra aquí al instante, sin recargar.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-black font-bold text-xs" style={{ background: '#f0c442' }}>
                {s.n}
              </div>
              <div>
                <p className="text-white text-xs font-bold flex items-center gap-1.5">{s.icon}{s.t}</p>
                <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <Users size={14} style={{ color: '#001f5b' }} /> Soporte técnico
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <a href="tel:062512345" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
            <Phone size={13} className="text-gray-400" /> (062) 512-345 Anexo 123
          </a>
          <a href="mailto:soporte@redsaludlp.gob.pe" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
            <Mail size={13} className="text-gray-400" /> soporte@redsaludlp.gob.pe
          </a>
          <p className="flex items-center gap-2 text-gray-400">
            <MapPin size={13} /> Tingo María, Huánuco
          </p>
        </div>
      </div>
      {refreshed && (
        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
          <RefreshCw size={10} /> Actualizado: {refreshed}
        </p>
      )}
    </div>
  );
}

export default function AuditorioPage() {
  const [eventos, setEventos] = useState<EventoPublico[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshed, setRefreshed] = useState('');

  const load = () => {
    setLoading(true);
    getEventos().then(d => {
      setEventos(d);
      setLoading(false);
      setRefreshed(new Date().toLocaleTimeString('es-PE'));
    });
  };

  useEffect(() => {
    getEventos()
      .then((d) => {
        setEventos(d);
        setLoading(false);
        setRefreshed(new Date().toLocaleTimeString('es-PE'));
      })
      .catch(() => setLoading(false));
  }, []);

  const enVivo = eventos.find(e => e.estado === 'EnVivo');
  const proximos = eventos.filter(e => e.estado === 'Programado').slice(0, 5);
  const pasados = eventos.filter(e => e.estado === 'Finalizado').slice(0, 6);
  const embedUrl = enVivo ? toEmbed(enVivo.videoUrl) : '';

  return (
    <div className="min-h-screen font-body bg-gray-50">
      <AuditorioHero enVivo={enVivo} onRefresh={load} />

      {/* ── Ticker animado (solo cuando hay evento en vivo) ── */}
      {enVivo && (
        <Ticker text={`EN VIVO: ${enVivo.titulo}${enVivo.sala ? ` · ${enVivo.sala}` : ''} · ${formatDate(enVivo.fechaHora)} ${formatTime(enVivo.fechaHora)}`} />
      )}

      {/* ── Contenido principal ── */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Columna principal 8/12 */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Player */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ background: '#0a0f1e' }}>
            {loading ? (
              <div className="aspect-video flex items-center justify-center text-white/30 gap-3">
                <RefreshCw size={22} className="animate-spin" />
                <span className="text-sm">Cargando...</span>
              </div>
            ) : enVivo && embedUrl ? (
              <div className="relative aspect-video">
                <iframe
                  src={embedUrl}
                  title={enVivo.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
            ) : enVivo ? (
              /* En vivo pero sin URL aún */
              <div className="aspect-video flex flex-col items-center justify-center gap-4 px-8 text-center"
                style={{ backgroundImage: 'url(/hero/hero-1.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'overlay', background: '#0a1a3e' }}>
                <div className="absolute inset-0 bg-black/60 rounded-2xl" />
                <Radio size={48} className="text-red-400 z-10 animate-pulse" strokeWidth={1} />
                <div className="z-10">
                  <p className="text-white font-bold text-xl mb-1">{enVivo.titulo}</p>
                  <p className="text-white/50 text-sm">La transmisión comenzará en breve. Recarga la página.</p>
                </div>
              </div>
            ) : (
              /* Sin eventos en vivo */
              <div className="aspect-video flex flex-col items-center justify-center gap-4 px-8 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2" style={{ background: '#001f5b22', border: '2px solid #001f5b44' }}>
                  <PlayCircle size={40} strokeWidth={1} className="text-white/20" />
                </div>
                <p className="text-white/40 font-semibold text-lg">Sin transmisión en vivo ahora</p>
                <p className="text-white/25 text-sm max-w-sm">Cuando haya un evento activo el stream aparecerá aquí automáticamente.</p>
              </div>
            )}

            {/* Barra inferior del player */}
            {enVivo && (
              <div className="px-5 py-3 flex items-center justify-between" style={{ background: '#0d1630', borderTop: '1px solid #ffffff15' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white/60 text-xs font-mono uppercase tracking-wider">En Vivo</span>
                </div>
                <div className="flex items-center gap-4 text-white/40 text-xs">
                  {enVivo.sala && <span className="flex items-center gap-1"><MapPin size={11} />{enVivo.sala}</span>}
                  <span className="flex items-center gap-1"><Clock size={11} />{formatTime(enVivo.fechaHora)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Detalle del evento en vivo */}
          {enVivo && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-xl font-bold text-slate-900 leading-snug">{enVivo.titulo}</h2>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" /> En Vivo
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14} style={{ color: '#001f5b' }} />{formatDate(enVivo.fechaHora)}</span>
                {enVivo.sala && <span className="flex items-center gap-1.5"><MapPin size={14} style={{ color: '#001f5b' }} />{enVivo.sala}</span>}
              </div>
              <p className="text-gray-600 leading-relaxed pl-4" style={{ borderLeft: '3px solid #f0c442' }}>{enVivo.descripcion}</p>
              {enVivo.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <Tag size={13} className="text-gray-400 mt-0.5" />
                  {enVivo.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">#{t}</span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Ponentes */}
          {enVivo && enVivo.ponentes.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mic size={16} style={{ color: '#001f5b' }} strokeWidth={2} />
                <h3 className="font-bold text-slate-900">Ponentes</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {enVivo.ponentes.map(p => (
                  <div key={p.nombre} className="flex gap-3 items-center p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200">
                      {p.imagenUrl ? (
                        <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-blue-600 text-lg">{p.nombre.charAt(0)}</div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 text-sm truncate">{p.nombre}</p>
                      <p className="text-xs font-medium" style={{ color: '#001f5b' }}>{p.rol}</p>
                      {p.descripcion && <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{p.descripcion}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Próximos eventos */}
          {proximos.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} style={{ color: '#001f5b' }} strokeWidth={2} />
                <h3 className="font-bold text-slate-900">Próximos eventos</h3>
              </div>
              <div className="space-y-3">
                {proximos.map(ev => (
                  <div key={ev.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center text-center flex-shrink-0" style={{ background: '#f0f4ff' }}>
                      <span className="text-xs font-bold" style={{ color: '#001f5b' }}>
                        {new Date(ev.fechaHora).toLocaleDateString('es-PE', { day: '2-digit' })}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-gray-400">
                        {new Date(ev.fechaHora).toLocaleDateString('es-PE', { month: 'short' })}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm truncate">{ev.titulo}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                        <span className="flex items-center gap-1"><Clock size={10} />{formatTime(ev.fechaHora)}</span>
                        {ev.sala && <span className="flex items-center gap-1"><MapPin size={10} />{ev.sala}</span>}
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <AuditorioSidebar enVivo={enVivo} pasados={pasados} loading={loading} refreshed={refreshed} />
      </main>
    </div>
  );
}
