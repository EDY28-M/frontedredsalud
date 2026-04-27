import { getPublicApiBase } from '@/lib/api';

const get = <T>(path: string): Promise<T> =>
    fetch(`${getPublicApiBase()}/api${path.startsWith('/') ? path : `/${path}`}`)
        .then(r => (r.ok ? r.json() : Promise.reject(new Error(`GET ${path} failed with status ${r.status}`))));

const post = <T>(path: string, body: unknown): Promise<T> =>
    fetch(`${getPublicApiBase()}/api${path.startsWith('/') ? path : `/${path}`}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    }).then(r => (r.ok ? r.json() : Promise.reject(new Error(`POST ${path} failed with status ${r.status}`))));

// ──── Tipos ────────────────────────────────────────────────────────────────
export interface NoticiaPublica {
    id: number; slug: string; titulo: string; descripcionCorta: string; fechaPublicacion: string;
    imagenUrl: string; linkExterno: string; activo: boolean;
}

// (Boletines removed)


export interface CampanaPublica {
    id: number; slug: string; titulo: string;
    fechaInicio: string; fechaFin: string;
    descripcion: string; imagenUrl: string;
    linkExterno?: string;
    objetivos: string[]; actividades: string[];
}

export interface EventoPublico {
    id: number; slug: string; titulo: string; descripcion: string;
    sala: string; fechaHora: string; videoUrl: string;
    estado: 'EnVivo' | 'Programado' | 'Finalizado';
    tags: string[];
    ponentes: { nombre: string; rol: string; descripcion: string; imagenUrl: string }[];
}

export interface ReunionZoomPublica {
    id: number; titulo: string; responsableHost: string;
    estado: 'EnVivo' | 'EnEspera' | 'Proximo' | 'Finalizado';
    diaHora: string; zoomMeetId: string; linkAcceso: string;
}

export interface MensajeChatPublico {
    id: number; eventoId: number; usuario: string; texto: string; fechaEnvio: string;
}

export interface HomeResponse {
    noticias: NoticiaPublica[];
    campanas: CampanaPublica[];
}

// ──── API calls ─────────────────────────────────────────────────────────────
export const getNoticias = () => get<NoticiaPublica[]>('/noticias');
export const getHomeData = () => get<HomeResponse>('/home-data');
export const getCampanas = () => get<CampanaPublica[]>('/campanas');
export const getCampana = (slug: string) =>
    get<CampanaPublica[]>('/campanas').then(list => list.find(c => c.slug === slug) ?? null);
export const getEventos = () => get<EventoPublico[]>('/eventos');
export const getReunionesZoom = () => get<ReunionZoomPublica[]>('/reunioneszoom');

/** Mensajes del chat en vivo por evento (auditorio). */
export const getChatMensajes = (eventoId: number) =>
    get<MensajeChatPublico[]>(`/chat/${eventoId}`);
/** Enviar mensaje al chat del evento (auditorio). */
export const postChatMensaje = (eventoId: number, usuario: string, texto: string) =>
    post<MensajeChatPublico>('/chat', { eventoId, usuario, texto });
