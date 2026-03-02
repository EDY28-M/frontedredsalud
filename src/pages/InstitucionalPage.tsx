const COLORS = {
  primary: '#8B7E66',
  secondary: '#D4AF37',
  bgBeige: '#F0EAD6',
  borderBeige: '#D8D0C0',
  surfaceIvory: 'rgba(255, 255, 240, 0.95)',
};

const funciones = [
  {
    titulo: 'Atención de Salud',
    sub: 'Servicio Integral',
    img: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Prevención',
    sub: 'Programas y Promoción',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Epidemiología',
    sub: 'Vigilancia Sanitaria',
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Recursos Humanos',
    sub: 'Administración de Personal',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Logística',
    sub: 'Abastecimiento Médico',
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
  },
  {
    titulo: 'Capacitación',
    sub: 'Formación Continua',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  },
];

export default function InstitucionalPage() {
  return (
    <main className="w-full bg-white font-body">
      {/* Hero Section */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            className="font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
            style={{ color: COLORS.primary }}
          >
            Nuestra Identidad
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Institucional
          </h2>
          <div className="w-px h-10 mx-auto" style={{ background: COLORS.primary }}></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column (8/12) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative pl-8" style={{ borderLeft: `2px solid ${COLORS.primary}` }}>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Misión
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Somos una organización que gerencia servicios de salud, con trabajo multisectorial concertado, destinado a mejorar la salud de la población priorizando la más vulnerable, con equidad, calidad, respetando su cultura y derecho a la vida.
              </p>
            </div>
            <div className="relative pl-8" style={{ borderLeft: `2px solid ${COLORS.primary}` }}>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Visión
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Al 2030, la Red de Salud Leoncio Prado es una institución líder en la gestión de servicios de salud integral, con establecimientos acreditados, personal competente y comprometido, contribuyendo a mejorar la calidad de vida.
              </p>
            </div>
          </div>

          {/* Objetivos Estratégicos */}
          <div className="p-10 border border-gray-200" style={{ background: '#FAFAFA' }}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200">
              Objetivos Estratégicos
            </h3>
            <ul className="grid grid-cols-1 gap-6">
              {[
                'Mejorar la salud de la población en el ámbito de la Red de Salud Leoncio Prado.',
                'Reducir la morbimortalidad materno-neonatal e infantil.',
                'Reducir la desnutrición crónica infantil y la anemia.',
                'Disminuir las enfermedades transmisibles y no transmisibles.',
                'Mejorar la gestión institucional con enfoque de resultados.',
              ].map((obj, i) => (
                <li key={i} className="flex items-baseline gap-4">
                  <span className="font-bold text-lg" style={{ color: COLORS.primary }}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-gray-700 text-lg font-light">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nuestras Funciones */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Nuestras Funciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
              {funciones.map((f) => (
                <div key={f.titulo} className="group relative h-80 overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-gray-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${f.img}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div
                    className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-sm"
                    style={{ background: COLORS.surfaceIvory, borderLeft: `4px solid ${COLORS.primary}` }}
                  >
                    <h4 className="font-bold text-xl text-slate-900 mb-1">
                      {f.titulo}
                    </h4>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (4/12) */}
        <div className="lg:col-span-4 space-y-12">
          {/* Datos Generales */}
          <div className="p-8" style={{ background: COLORS.bgBeige, border: `1px solid ${COLORS.borderBeige}` }}>
            <h4 className="font-bold text-xl text-slate-900 mb-6 uppercase tracking-wider pb-2" style={{ borderBottom: `1px solid ${COLORS.primary}` }}>
              Datos Generales
            </h4>
            <div className="space-y-6 text-sm">
              {[
                { label: 'Denominación', value: 'Red de Salud Leoncio Prado' },
                { label: 'Unidad Ejecutora', value: '403' },
                { label: 'Ubicación', value: 'Tingo María, Huánuco - Castillo Grande' },
                { label: 'Dirección', value: 'Av. Carretera Central N° 238 - Castillo Grande' },
                { label: 'Horario', value: 'Lunes a Viernes (8:00 - 17:30)' },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: COLORS.primary }}>{d.label}</p>
                  <p className="text-slate-900 font-light text-lg">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="bg-white border border-gray-200">
            <h4 className="bg-slate-900 text-white p-5 font-bold text-sm uppercase tracking-wider">
              Enlaces Rápidos
            </h4>
            <div className="divide-y divide-gray-100">
              {[
                { label: 'Organigrama', href: '/assets/pdf/rshco-organigrama.pdf' },
                { label: 'Directorio de Funcionarios', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/funcionarios' },
                { label: 'Instrumentos de Gestión', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/colecciones/38261-instrumentos-de-gestion' },
                { label: 'Planes y Políticas', href: 'https://www.gob.pe/institucion/regionhuanuco-rshuanuco/colecciones/38264-planes-y-politicas' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 text-slate-700 font-medium flex justify-between items-center group transition-colors"
                  style={{ display: 'flex' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bgBeige)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '')}
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: COLORS.primary }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-slate-900 text-white p-10 text-center">
            <h5 className="font-bold text-2xl mb-4">¿Necesitas Ayuda?</h5>
            <p className="text-gray-400 mb-8 font-light">
              Estamos aquí para atenderte. Contacta con nosotros para cualquier consulta.
            </p>
            <a
              href="mailto:info@redsaludlp.gob.pe"
              className="block w-full py-4 font-bold uppercase text-xs tracking-[0.2em] text-white transition-colors text-center"
              style={{ background: COLORS.primary, border: `1px solid ${COLORS.primary}` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1e293b'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.primary; e.currentTarget.style.color = 'white'; }}
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
