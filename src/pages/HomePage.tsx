import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getHomeData, type NoticiaPublica, type CampanaPublica } from '@/services/publicApi';
import { imgSrc, withBasePath } from '@/lib/api';

const carouselSlides = [
  // Imágenes locales en alta resolución (evita estirado y baja calidad)
  withBasePath('/hero/hero-1.jpg'),
  withBasePath('/hero/hero-2.jpg'),
  withBasePath('/hero/hero-3.jpg'),
];

const accesosRapidos = [
  { label: 'aplicación web', nombre: 'HISMINSA', href: 'https://websalud.minsa.gob.pe/hisminsa/', icono: withBasePath('/accesos/hisminsa.png') },
  { label: 'aplicación web', nombre: 'SIHCE', href: 'https://sihce.redsaludhuanuco.gob.pe/', icono: withBasePath('/accesos/sihce.png') },
  { label: 'referencias', nombre: 'REFCON', href: 'https://refcon.minsa.gob.pe/refconv02/', icono: withBasePath('/accesos/refcon.png') },
  { label: 'RENIEC', nombre: 'Sistema de Hechos Vitales', href: 'https://portalrcm.reniec.gob.pe/hechosvitales/Login.do', icono: withBasePath('/accesos/reniec.avif') },
  { label: 'página web', nombre: 'Promoción de la Salud', href: 'https://sites.google.com/view/promsaweb/inicio', icono: withBasePath('/accesos/promsa.png') },
  { label: 'Gob.pe', nombre: 'Denuncia actos de corrupción', href: 'https://denuncias.servicios.gob.pe/?gobpe_id=681', icono: withBasePath('/accesos/hand.svg') },
  { label: 'Gob.pe', nombre: 'Libro de Reclamaciones', href: 'https://reclamos.servicios.gob.pe/?institution_id=67', icono: withBasePath('/accesos/book.svg') },
  { label: 'plataforma', nombre: 'Gob.pe', href: 'https://www.gob.pe/regionhuanuco-rsleoncioprado', icono: withBasePath('/accesos/gobpe.svg') },
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

type HomeData = {
  noticias: NoticiaPublica[];
  campanas: CampanaPublica[];
};

const initialHomeData: HomeData = {
  noticias: [],
  campanas: [],
};

export default function HomePage() {
  const [socialTab, setSocialTab] = useState<SocialTab>('facebook');
  const [data, setData] = useState<HomeData>(initialHomeData);
  const { noticias, campanas } = data;

  useEffect(() => {
    getHomeData()
      .then((resp) => {
        setData({
          noticias: resp.noticias.filter((x) => x.activo).slice(0, 6),
          campanas: resp.campanas.slice(0, 4),
        });
      })
      .catch(() => { });
  }, []);

  return (
    <>
      {/* Carousel */}
      <div className="pt-0 pb-1 sm:pb-2">
        <Splide options={splideOptions} className="splide-hero">
          {carouselSlides.map((src) => (
            <SplideSlide key={src}>
              <img src={src} alt="Imagen hero" className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[500px] object-contain bg-gray-100 dark:bg-gray-800" />
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
                    href="https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/noticias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-primary hover:underline"
                  >
                    Ver más noticias
                  </a>
                </div>
                <hr className="mb-3 sm:mb-4 border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {noticias.length === 0 && <p className="col-span-3 text-gray-400 text-sm text-center py-6">Cargando noticias...</p>}
                  {noticias.map((n) => (
                    <a key={n.id} href={n.linkExterno} target="_blank" rel="noopener noreferrer" className="block group">
                      <div className="border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-32 sm:h-40 overflow-hidden">
                          <img src={imgSrc(n.imagenUrl)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-2 sm:p-3 flex flex-col justify-between" style={{ minHeight: '110px' }}>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 text-xs sm:text-sm">{n.titulo}</p>
                            {n.descripcionCorta && <p className="text-gray-600 dark:text-gray-300 text-[11px] sm:text-xs line-clamp-2 mt-1.5 leading-snug">{n.descripcionCorta}</p>}
                          </div>
                          <small className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs mt-3 block">{new Date(n.fechaPublicacion).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })}</small>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>




              {/* Campañas */}
              <div>
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-[#001f5b] font-bold text-xl sm:text-2xl">Campañas</h2>
                </div>
                <hr className="mb-3 sm:mb-4 border-t-2 border-dashed border-gray-300 dark:border-gray-600" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {campanas.length === 0 && <p className="col-span-full text-gray-400 text-sm py-4">Cargando campañas...</p>}
                  {campanas.map((c) => (
                    <a 
                      key={c.id} 
                      href={c.linkExterno || withBasePath(`/campañas/${c.slug}`)} 
                      target={c.linkExterno ? "_blank" : undefined}
                      rel={c.linkExterno ? "noopener noreferrer" : undefined}
                      className="block group w-full"
                    >
                      <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 w-full">
                        {c.imagenUrl && (
                          <div className="w-full h-56 sm:h-72 flex-shrink-0 overflow-hidden bg-primary/5">
                            <img src={imgSrc(c.imagenUrl)} alt="" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        )}
                        <div className="p-3 sm:p-4 min-w-0 flex flex-col gap-1">
                          <small className="text-gray-500 dark:text-gray-400 block text-[11px] sm:text-xs">
                            {new Date(c.fechaInicio).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: '2-digit' })} — {new Date(c.fechaFin).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                          </small>
                          <p className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors text-sm sm:text-base line-clamp-2">{c.titulo}</p>
                          {c.descripcion && <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-0.5 line-clamp-2 leading-relaxed">{c.descripcion}</p>}
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
                    className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 -mb-px min-h-[44px] touch-manipulation ${socialTab === 'facebook'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    onClick={() => setSocialTab('tiktok')}
                    className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 -mb-px min-h-[44px] touch-manipulation ${socialTab === 'tiktok'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                  >
                    TikTok
                  </button>
                </div>
                <div className="border border-t-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  {socialTab === 'facebook' && (
                    <div className="h-[580px]">
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaludleoncioprado&tabs=timeline&width=340&height=580&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true"
                        width="100%"
                        height="580"
                        className="block w-full min-h-0"
                        style={{ border: 0 }}
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
                  <a href="https://www.facebook.com/saludleoncioprado" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>
                  {' · '}
                  <a href="https://www.tiktok.com/@reddesaludhuanuco" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TikTok</a>
                </p>
              </div>

              {/* Vista desktop: ambos embeds apilados */}
              <div className="hidden lg:block space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 h-[650px]">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaludleoncioprado&tabs=timeline&width=340&height=650&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true"
                    width="100%"
                    height="100%"
                    className="block w-full h-full min-h-0"
                    style={{ border: 0 }}
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
