import { useState } from 'react';
import { Link } from 'react-router-dom';
import { withBasePath } from '@/lib/api';

interface NavItem {
  label: string;
  href?: string;
  icon?: string;
}

interface NavDropdown {
  label: string;
  items: NavItem[];
  to?: string;
}

const navItems: NavDropdown[] = [
  {
    label: 'Institucional',
    items: [
      { label: '¿Qué hacemos?', href: '/institucional', icon: 'bi-building' },
      { label: 'Organigrama', href: '/assets/pdf/rshco-organigrama.pdf', icon: 'bi-diagram-3' },
      { label: 'Directorio', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/funcionarios', icon: 'bi-person-add' },
      { label: 'Instrumentos de Gestión', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/colecciones/38261-instrumentos-de-gestion' },
      { label: 'Planes y Políticas', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/colecciones/38264-planes-y-politicas' },
      { label: 'Plan Operativo Institucional (POI)', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/colecciones/38266-plan-operativo-institucional-poi' },
      { label: 'Portal Gob.pe', href: 'https://www.gob.pe/regionhuanuco-rsleoncioprado', icon: 'bi-globe' },
      { label: 'Libro de Reclamaciones', href: 'https://reclamos.servicios.gob.pe/?institution_id=67', icon: 'bi-book' },
      { label: 'Denuncias de Corrupción', href: 'https://denuncias.servicios.gob.pe/?gobpe_id=681', icon: 'bi-shield-exclamation' },
    ],
  },
  {
    label: 'Documentos',
    items: [
      { label: 'Informes y Publicaciones', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/informes-publicaciones', icon: 'bi-files' },
      { label: 'Normas y Documentos Legales', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/normas-legales', icon: 'bi-file-earmark-medical' },
      { label: 'Cartera de Servicios', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/colecciones/27840-cartera-de-servicios' },
      { label: 'Gestión de la Calidad en Salud', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/colecciones/39037-gestion-de-la-calidad-en-salud' },
      { label: 'Cuadro Multianual de Necesidades', href: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/colecciones/43673-cuadro-multianual-de-necesidades' },
    ],
  },
  {
    label: 'Organización',
    items: [
      { label: 'Dirección de Red', href: 'https://www.gob.pe/52834-red-de-salud-huanuco-direccion-de-red', icon: 'bi-building' },
      { label: 'Oficina de Control Institucional', href: 'https://www.gob.pe/52856-red-de-salud-huanuco-oficina-de-control-institucional' },
      { label: 'Oficina de Administración', href: 'https://www.gob.pe/52966-red-de-salud-huanuco-oficina-de-administracion' },
      { label: 'Oficina de Desarrollo Institucional', href: 'https://www.gob.pe/52858-red-de-salud-huanuco-oficina-de-desarrollo-institucional' },
      { label: 'Oficina de Planeamiento Estratégico', href: 'https://www.gob.pe/52961-red-de-salud-huanuco-oficina-de-planeamiento-estrategico' },
      { label: 'Microredes', href: 'https://www.gob.pe/52971-red-de-salud-huanuco-microrredes-de-salud', icon: 'bi-buildings' },
    ],
  },
  { label: 'Convocatorias', to: 'https://convocatorias.redsaludleoncioprado.gob.pe/', items: [] },
  {
    label: 'Noticias',
    to: 'https://www.gob.pe/institucion/regionhuanuco-rsleoncioprado/noticias',
    items: [],
  },
  {
    label: 'Campañas',
    items: [
      { label: 'Semana de Vacunación de las Américas 2025', href: '/campañas/semana-americas-2025', icon: 'bi-megaphone' },
      { label: 'Vacunación VPH 2025', href: '/campañas/vph-2025', icon: 'bi-megaphone' },
      { label: 'Barrido SPR Antipolio 2024', href: '/campañas/barrido-spr-antipolio-2024', icon: 'bi-megaphone' },
      { label: 'VANCAN 2024', href: '/campañas/vancan-2024', icon: 'bi-megaphone' },
    ],
  },
  {
    label: 'Reuniones',
    items: [
      { label: 'Auditorio', href: '/auditorio', icon: 'bi-person-video3' },
      { label: 'Zoom', href: '/zoom', icon: 'bi-camera-video' },
    ],
  },
];

export default function Header({ activePage }: { activePage?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex flex-wrap justify-between items-center gap-2">
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img src={withBasePath('/logo_redlp.jpg')} alt="Red de Salud Leoncio Prado" className="h-6 sm:h-7 w-auto max-h-10" />
        </Link>

        <button
          className="lg:hidden text-gray-600 dark:text-gray-300 p-2.5 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <span className="material-icons-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>

        <div className={`${mobileOpen ? 'block' : 'hidden'} lg:flex lg:flex-1 lg:justify-end w-full lg:w-auto order-3 lg:order-none basis-full lg:basis-auto max-h-[calc(100vh-3.5rem)] overflow-y-auto lg:max-h-none lg:overflow-visible`}>
          <ul className="flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-1 py-2 lg:py-0 border-t lg:border-t-0 border-gray-200 dark:border-gray-700 lg:border-0">
            {navItems.map((item) => {
              const isActive = activePage?.toLowerCase() === item.label.toLowerCase();
              const isLink = item.to && item.items.length === 0;

              if (isLink) {
                const external = item.to!.startsWith('http');
                return (
                  <li key={item.label} className="border-b lg:border-b-0 border-gray-100 dark:border-gray-800 lg:border-0">
                    {external ? (
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-4 py-3.5 lg:py-2 text-sm font-medium hover:text-primary transition-colors min-h-[44px] flex items-center ${isActive ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300'}`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.to!}
                        className={`block px-4 py-3.5 lg:py-2 text-sm font-medium hover:text-primary transition-colors min-h-[44px] flex items-center ${isActive ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300'}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label} className="relative group py-0 border-b lg:border-b-0 border-gray-100 dark:border-gray-800 lg:border-0">
                  <button
                    type="button"
                    className={`w-full lg:w-auto text-left px-4 py-3.5 lg:py-2 flex items-center justify-between lg:justify-center gap-2 text-sm font-medium hover:text-primary transition-colors min-h-[44px] touch-manipulation ${isActive ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300'}`}
                  >
                    {item.label}
                    <span className="material-icons-outlined text-sm lg:ml-1 flex-shrink-0">expand_more</span>
                  </button>
                  {item.items.length > 0 && (
                    <ul className="lg:absolute lg:left-0 lg:top-full lg:min-w-[280px] lg:bg-white lg:dark:bg-gray-800 lg:shadow-lg lg:border lg:border-gray-100 lg:dark:border-gray-700 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-all lg:z-50 bg-gray-50 dark:bg-gray-800/50 pl-5 lg:pl-0">
                      {item.items.map((sub, i) => (
                        <li key={sub.label}>
                          {(() => {
                            const isExternalHref = sub.href?.startsWith('http');
                            const resolvedHref = withBasePath(sub.href ?? '#');

                            return (
                          <a
                            href={resolvedHref}
                            target={isExternalHref ? '_blank' : undefined}
                            rel={isExternalHref ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-2 px-4 py-3 lg:py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 min-h-[44px] touch-manipulation"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.icon && <i className={`${sub.icon} text-sm`} />}
                            {sub.label}
                          </a>
                            );
                          })()}
                          {i === 2 && item.label === 'Institucional' && <hr className="my-1 border-gray-200 dark:border-gray-600" />}
                          {i === 5 && item.label === 'Institucional' && <hr className="my-1 border-gray-200 dark:border-gray-600" />}
                          {i === 2 && item.label === 'Documentos' && <hr className="my-1 border-gray-200 dark:border-gray-600" />}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
