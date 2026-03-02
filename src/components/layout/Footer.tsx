import Icon from '../ui/Icon';

const enlacesAplicaciones = [
  { nombre: 'HSMNGA', href: 'https://websalud.minsa.gob.pe/hisminsa/' },
  { nombre: 'SIMS', href: 'https://sihce.redsaludhuanuco.gob.pe/' },
  { nombre: 'Ficha familiar', href: 'https://fichafamiliar.diresahuanuco.gob.pe/app_Login/' },
  { nombre: 'Hechos Vitales', href: 'https://portalrcm.reniec.gob.pe/hechosvitales/Login.do' },
  { nombre: 'SISMED - Stock de Medicamentos', href: '#' },
];

const enlacesSusalud = [
  { nombre: 'SISDS Sistema de Acreditación de Aseguradoras', href: 'https://app8.susalud.gob.pe:8380/login' },
  { nombre: 'Tramites SETIPRESS', href: 'https://app1.susalud.gob.pe:8184/' },
  { nombre: 'RENAPRESS', href: 'http://app12.susalud.gob.pe/' },
];

const enlacesServidor = [
  { nombre: 'SGD - Sistema de Gestión Documental', href: 'http://digital.regionhuanuco.gob.pe/login' },
  { nombre: 'Correo institucional', href: 'https://redsaludhuanuco.gob.pe:2096/?locale=es_es' },
  { nombre: 'Boleta Electronica', href: 'http://boletaselectronicas.minsa.gob.pe/boletas/consulta' },
  { nombre: 'INFOBRAS', href: 'https://digep.minsa.gob.pe/verificar.html' },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Imagen decorativa encima del pie de página */}
      <div className="w-full overflow-hidden bg-beige-header dark:bg-beige-dark relative">
        <img
          src="/Pie%20de%20pagina/line.Y4JZT7Bg.svg"
          alt=""
          className="w-full h-auto block"
          style={{ maxHeight: '16px', objectFit: 'cover' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(245, 242, 235, 0.6)' }}
        />
      </div>

      {/* Sección Enlaces de Interés */}
      <div className="bg-beige-header dark:bg-beige-dark border-t border-secondary/30">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
          <h2 className="font-display text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 lg:mb-8">
            Enlaces de Interés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-black mb-3 sm:mb-4 uppercase tracking-wide">
                Aplicaciones
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 list-none">
                {enlacesAplicaciones.map((link) => (
                  <li key={link.nombre} className="flex items-center gap-1.5">
                    <span className="text-black text-xs">■</span>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black hover:underline transition-colors"
                    >
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xs sm:text-sm text-black mb-3 sm:mb-4 uppercase tracking-wide">
                SUSALUD
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 list-none">
                {enlacesSusalud.map((link) => (
                  <li key={link.nombre} className="flex items-center gap-1.5">
                    <span className="text-black text-xs">■</span>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black hover:underline transition-colors"
                    >
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xs sm:text-sm text-black mb-3 sm:mb-4 uppercase tracking-wide">
                Servidor Público
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 list-none">
                {enlacesServidor.map((link) => (
                  <li key={link.nombre} className="flex items-center gap-1.5">
                    <span className="text-black text-xs">■</span>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black hover:underline transition-colors"
                    >
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa entre Enlaces y Copyright */}
      <div className="w-full overflow-hidden bg-beige-header dark:bg-beige-dark relative">
        <img
          src="/Pie%20de%20pagina/line.Y4JZT7Bg.svg"
          alt=""
          className="w-full h-auto block"
          style={{ maxHeight: '16px', objectFit: 'cover' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(245, 242, 235, 0.6)' }}
        />
      </div>

      {/* Barra inferior - Copyright, dirección y horario */}
      <div className="bg-secondary/30 dark:bg-secondary/10 border-t border-secondary/40">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-black">
          <div className="text-center md:text-left space-y-0.5">
            <p className="font-semibold text-black">
              Red de Salud Leoncio Prado © 2024 - Derechos Reservados
            </p>
            <p className="text-black">Unidad de Estadística e Informática</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-black text-center sm:text-left">
            <span className="flex items-center justify-center sm:justify-start gap-1.5">
              <Icon name="location_on" className="text-black text-xs sm:text-sm flex-shrink-0" />
              <span>Tingo María, Huánuco - Castillo Grande</span>
            </span>
            <span className="flex items-center justify-center sm:justify-start gap-1.5">
              <Icon name="schedule" className="text-black text-xs sm:text-sm flex-shrink-0" />
              <span>Lunes a Viernes 08:00 - 17:00</span>
            </span>
          </div>
        </div>
      </div>

      {/* Barra gradiente inferior */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>
    </footer>
  );
}
