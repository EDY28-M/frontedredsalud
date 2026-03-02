import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const carouselSlides = [
  // Imágenes locales en alta resolución (evita estirado y baja calidad)
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
];

const accesosRapidos = [
  { label: 'aplicación web', nombre: 'HISMINSA', href: 'https://websalud.minsa.gob.pe/hisminsa/', icono: '/accesos/hisminsa.png' },
  { label: 'aplicación web', nombre: 'SIHCE', href: 'https://sihce.redsaludhuanuco.gob.pe/', icono: '/accesos/sihce.png' },
  { label: 'referencias', nombre: 'REFCON', href: 'https://refcon.minsa.gob.pe/refconv02/', icono: '/accesos/refcon.png' },
  { label: 'RENIEC', nombre: 'Sistema de Hechos Vitales', href: 'https://portalrcm.reniec.gob.pe/hechosvitales/Login.do', icono: '/accesos/reniec.avif' },
  { label: 'página web', nombre: 'Promoción de la Salud', href: 'https://sites.google.com/view/promsaweb/inicio', icono: '/accesos/promsa.png' },
  { label: 'Gob.pe', nombre: 'Denuncia actos de corrupción', href: 'https://denuncias.servicios.gob.pe/?gobpe_id=6188', icono: '/accesos/hand.svg' },
  { label: 'Gob.pe', nombre: 'Libro de Reclamaciones', href: 'https://reclamos.servicios.gob.pe/?institution_id=67', icono: '/accesos/book.svg' },
  { label: 'plataforma', nombre: 'Gob.pe', href: 'https://www.gob.pe/regionhuanuco-rshuanuco/', icono: '/accesos/gobpe.svg' },
];

const noticias = [
  { titulo: 'Mg. Sergio Fernández asume dirección ejecutiva de la Red de Salud Leoncio Prado', fecha: '19 de febrero de 2026 - 12:27 p. m.', imagen: 'https://cdn.www.gob.pe/uploads/document/file/9473897/1356216-nuevo-director.JPG', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias/1356216-mg-sergio-fernandez-asume-direccion-ejecutiva-de-la-red-de-salud-huanuco' },
  { titulo: 'Entregan resoluciones de nombramiento a 76 profesionales de la salud', fecha: '18 de febrero de 2026 - 5:21 p. m.', imagen: 'https://cdn.www.gob.pe/uploads/document/file/9469968/1355842-ceremonia.jpg', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias/1355842-entregan-resoluciones-de-nombramiento-a-76-profesionales-de-la-salud' },
  { titulo: 'El Hospital Carlos Showing Ferrari ya es Unidad Ejecutora: Un paso histórico para la salud en Huánuco', fecha: '19 de enero de 2026 - 4:51 p. m.', imagen: 'https://cdn.www.gob.pe/uploads/document/file/9312610/1337254-entrega-de-resolucion.JPG', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias/1337254-el-hospital-carlos-showing-ferrari-ya-es-unidad-ejecutora-un-paso-historico-para-la-salud-en-huanuco' },
  { titulo: 'Red de Salud Leoncio Prado lidera comitiva regional en Encuentro Nacional de Municipios Saludables en Cajamarca', fecha: '21 de noviembre de 2025 - 5:28 p. m.', imagen: 'https://cdn.www.gob.pe/uploads/document/file/9035878/1294404-promsa.jpg', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias/1294404-red-de-salud-huanuco-lidera-comitiva-regional-en-encuentro-nacional-de-municipios-saludables-en-cajamarca' },
  { titulo: '138 equipos de cómputo son entregados a establecimientos de la Red de Salud Leoncio Prado', fecha: '20 de octubre de 2025 - 4:29 p. m.', imagen: 'https://cdn.www.gob.pe/uploads/document/file/8858061/1269035-entrega-de-equipos-de-computo.JPG', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias/1269035-138-equipos-de-computo-son-entregados-a-establecimientos-de-la-red-de-salud-huanuco' },
  { titulo: 'Amarilis celebró el Día Mundial de la Alimentación', fecha: '17 de octubre de 2025 - 12:51 p. m.', imagen: 'https://cdn.www.gob.pe/uploads/document/file/8846607/1266253-alimentacion-saludable.JPG', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias/1266253-amarilis-celebro-el-dia-mundial-de-la-alimentacion' },
];

const boletines = [
  { fecha: '2026-01-16', titulo: 'Boletín informativo N°1-2026', imagen: 'https://cdn.www.gob.pe/uploads/document/file/9311976/7634922-cover-sm-2.png?v=1768857440', href: '/boletines/20261' },
];

const campanas = [
  { fecha: '26/04/2025 - 10/05/2025', titulo: 'Semana de Vacunación de las Américas 2025', href: '/campañas/semana-americas-2025', imagen: '/campañas/americas-logo.eewX5B-n.png' },
  { fecha: '01/02/2025 - 30/06/2025', titulo: 'Campaña de vacunación VPH 2025', href: '/campañas/vph-2025', imagen: '/campañas/vph-logo.D9RncHjq.png' },
  { fecha: '07/11/2024 - 27/11/2024', titulo: 'VANCAN 2024', href: '/campañas/vancan-2024', imagen: '/campañas/vancan-logo.Bt0jF98n.png' },
  { fecha: '15/11/2024 - 30/11/2024', titulo: 'Barrido SPR y Antipolio 2024', href: '/campañas/barrido-spr-antipolio-2024', imagen: '/campañas/barrido-logo.DEU0hDbv.png' },
];

const splideOptions = {
  type: 'loop' as const,
  perPage: 1,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  arrows: true,
  pagination: true,
  padding: 0,
  gap: 0,
  breakpoints: {
    1024: {
      padding: 0,
    },
  },
};

type SocialTab = 'facebook' | 'tiktok';

export default function HomePage() {
  const [socialTab, setSocialTab] = useState<SocialTab>('facebook');

  return (
    <>
      {/* Carousel */}
      <div className="pt-0 pb-1 sm:pb-2">
        <Splide options={splideOptions} className="splide-hero">
          {carouselSlides.map((src, i) => (
            <SplideSlide key={i}>
              <img src={src} alt="Imagen hero" className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[500px] object-cover" />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Accesos rápidos */}
      <section className="my-4 sm:my-6">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-[#001f5b] mb-3 sm:mb-4 font-bold text-xl sm:text-2xl">Accesos rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {accesosRapidos.map((acceso) => (
              <a
                key={acceso.nombre}
                href={acceso.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2.5 sm:p-3 gap-2 sm:gap-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md hover:border-primary/50 transition-all group min-h-[52px]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img src={acceso.icono} alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase truncate">{acceso.label}</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors text-xs sm:text-base truncate">{acceso.nombre}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias + Boletines + Campañas + Social */}
      <section className="bg-white dark:bg-gray-900 py-4 sm:py-6">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Columna principal - 9/12 */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              {/* Noticias */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3 sm:mb-4">
                  <h2 className="text-[#001f5b] font-bold text-xl sm:text-2xl">Noticias</h2>
                  <a
                    href="https://www.gob.pe/institucion/regionhuanuco-rshuanuco/noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-primary hover:underline"
                  >
                    Ver más noticias
                  </a>
                </div>
                <hr className="mb-3 sm:mb-4 border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {noticias.map((n) => (
                    <a key={n.titulo} href={n.href} target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-32 sm:h-40 overflow-hidden">
                          <img src={n.imagen} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-2 sm:p-3">
                          <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 text-xs sm:text-sm">{n.titulo}</p>
                          <small className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs">{n.fecha}</small>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Boletines */}
              <div>
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-[#001f5b] font-bold text-xl sm:text-2xl">Boletines</h2>
                </div>
                <hr className="mb-3 sm:mb-4 border-t-2 border-dashed border-gray-300 dark:border-gray-600" />
                <div className="grid grid-cols-1 max-w-2xl">
                  {boletines.map((b) => {
                    const parts = b.titulo.includes(' N°') ? b.titulo.split(/ N°/) : [b.titulo, ''];
                    const tituloPrincipal = parts[0];
                    const numero = parts[1] ? `N°${parts[1]}` : '';
                    return (
                      <a key={b.titulo} href={b.href} className="block group w-full">
                        <div className="flex flex-col sm:flex-row border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 w-full sm:w-fit">
                          <div className="w-full sm:w-[45%] sm:max-w-[240px] flex-shrink-0 overflow-hidden aspect-[4/3] sm:aspect-auto sm:max-h-[320px]">
                            <img src={b.imagen} alt="" className="w-full h-full object-cover object-top" />
                          </div>
                          <div className="p-3 sm:p-4 flex flex-col justify-center flex-shrink-0 sm:whitespace-nowrap min-w-0">
                            <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">{b.fecha}</span>
                            <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight text-sm sm:text-base">{tituloPrincipal}</p>
                            {numero && <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors text-xs sm:text-sm mt-0.5">{numero}</p>}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Campañas */}
              <div>
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-[#001f5b] font-bold text-xl sm:text-2xl">Campañas</h2>
                </div>
                <hr className="mb-3 sm:mb-4 border-t-2 border-dashed border-gray-300 dark:border-gray-600" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {campanas.map((c) => (
                    <a key={c.titulo} href={c.href} className="block group">
                      <div className="flex flex-row p-2.5 sm:p-3 gap-2 sm:gap-3 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 min-h-[72px]">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden bg-primary/5">
                          <img src={c.imagen} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col justify-center py-0.5">
                          <small className="text-gray-500 dark:text-gray-400 block text-[10px] sm:text-xs">{c.fecha}</small>
                          <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors text-xs sm:text-sm line-clamp-2">{c.titulo}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Social - 3/12 */}
            <div className="lg:col-span-1 space-y-3 sm:space-y-4">
              <h2 className="text-[#001f5b] font-bold text-xl sm:text-2xl">Social</h2>
              <hr className="border-gray-200 dark:border-gray-700" />

              {/* Vista móvil: pestañas para elegir una red */}
              <div className="lg:hidden">
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-0">
                  <button
                    type="button"
                    onClick={() => setSocialTab('facebook')}
                    className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 -mb-px min-h-[44px] touch-manipulation ${
                      socialTab === 'facebook'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    onClick={() => setSocialTab('tiktok')}
                    className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 -mb-px min-h-[44px] touch-manipulation ${
                      socialTab === 'tiktok'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    TikTok
                  </button>
                </div>
                <div className="border border-t-0 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
                  {socialTab === 'facebook' && (
                    <div className="h-[480px]">
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-de-Salud-Hu%C3%A1nuco-1716600175152136&tabs=timeline&width=320&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=310122202434286"
                        width="100%"
                        height="100%"
                        className="block w-full h-full min-h-0"
                        style={{ border: 0, overflow: 'hidden' }}
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Red de Salud Leoncio Prado"
                      />
                    </div>
                  )}
                  {socialTab === 'tiktok' && (
                    <div className="h-[480px]">
                      <iframe
                        width="100%"
                        height="100%"
                        className="block w-full h-full min-h-0"
                        src="https://www.tiktok.com/player/v1/7527734062526598406?autoplay=1&loop=1&rel=0"
                        title="TikTok Red de Salud"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Síguenos en{' '}
                  <a href="https://www.facebook.com/Red-de-Salud-Hu%C3%A1nuco-1716600175152136" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>
                  {' · '}
                  <a href="https://www.tiktok.com/@reddesaludhuanuco" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TikTok</a>
                </p>
              </div>

              {/* Vista desktop: ambos embeds apilados */}
              <div className="hidden lg:block space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 overflow-hidden h-[600px]">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRed-de-Salud-Hu%C3%A1nuco-1716600175152136&tabs=timeline&width=320&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=310122202434286"
                    width="100%"
                    height="100%"
                    className="block w-full h-full min-h-0"
                    style={{ border: 0, overflow: 'hidden' }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Red de Salud Leoncio Prado"
                  />
                </div>
                <div className="border border-gray-200 dark:border-gray-700 overflow-hidden h-[540px]">
                  <iframe
                    width="100%"
                    height="100%"
                    className="block w-full h-full min-h-0"
                    src="https://www.tiktok.com/player/v1/7527734062526598406?autoplay=1&loop=1&rel=0"
                    title="TikTok Red de Salud"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
