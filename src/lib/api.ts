/**
 * Base URL del API público (portal). Apunta al backend .NET (puerto 5141).
 * Puedes sobreescribir con VITE_API_BASE en .env (ej. https://api.midominio.gob.pe).
 */
const API_PORT = 5141;

export function getPublicApiBase(): string {
  const envBase = import.meta.env?.VITE_API_BASE as string | undefined;
  if (envBase) return envBase.replace(/\/+$/, '');
  if (typeof window !== 'undefined') {
    return `http://${window.location.hostname}:${API_PORT}`;
  }
  return `http://localhost:${API_PORT}`;
}

/** Convierte una URL relativa del API (ej. /uploads/foo.jpg) en URL absoluta. */
export function imgSrc(url: string): string {
  if (!url) return '';
  return url.startsWith('/') ? `${getPublicApiBase()}${url}` : url;
}

/**
 * Resuelve rutas locales para que funcionen cuando el frontend vive en una subcarpeta.
 * Ejemplo: /accesos/a.png -> /apps/sitioweb/accesos/a.png
 */
export function withBasePath(path: string): string {
  if (!path) return '';

  if (
    /^(https?:)?\/\//i.test(path) ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  const base = (import.meta.env?.BASE_URL as string | undefined) ?? '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
