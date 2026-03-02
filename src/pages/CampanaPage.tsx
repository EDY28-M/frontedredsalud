import { useParams } from 'react-router-dom';

const campanasData: Record<string, { titulo: string; fecha: string; descripcion: string; imagen: string; objetivos: string[]; actividades: string[] }> = {
  'semana-americas-2025': {
    titulo: 'Semana de Vacunación de las Américas 2025',
    fecha: '26 de abril al 10 de mayo de 2025',
    descripcion: 'La 23ª Semana de Vacunación en las Américas (SVA) se celebra bajo el lema "Tu decisión marca la diferencia: Inmunización para todos". Esta iniciativa regional busca promover la equidad y el acceso a la vacunación en todos los países de las Américas, haciendo un esfuerzo especial para alcanzar a las poblaciones más vulnerables.',
    imagen: '/campañas/americas-logo.eewX5B-n.png',
    objetivos: [
      'Vacunar a la población objetivo contra enfermedades prevenibles por vacunación.',
      'Sensibilizar a la comunidad sobre la importancia de completar el esquema de vacunación.',
      'Fortalecer la cadena de frío y los procesos logísticos de vacunación.',
      'Cerrar brechas de inmunización en poblaciones vulnerables.',
    ],
    actividades: [
      'Jornadas de vacunación en establecimientos de salud.',
      'Vacunación casa por casa en zonas rurales y periurbanas.',
      'Campañas informativas en medios de comunicación y redes sociales.',
      'Coordinación con autoridades locales y organizaciones comunitarias.',
    ],
  },
  'vph-2025': {
    titulo: 'Campaña de Vacunación VPH 2025',
    fecha: '1 de febrero al 30 de junio de 2025',
    descripcion: 'Campaña nacional de vacunación contra el Virus del Papiloma Humano (VPH), dirigida a niñas de 9 a 13 años. La vacuna contra el VPH previene el cáncer de cuello uterino, que es una de las principales causas de muerte por cáncer en mujeres en el Perú.',
    imagen: '/campañas/vph-logo.D9RncHjq.png',
    objetivos: [
      'Vacunar a niñas de 9 a 13 años contra el VPH.',
      'Alcanzar una cobertura mínima del 90% en la población objetivo.',
      'Reducir la incidencia futura de cáncer de cuello uterino.',
      'Informar a padres de familia sobre la importancia y seguridad de la vacuna.',
    ],
    actividades: [
      'Vacunación en instituciones educativas.',
      'Vacunación en establecimientos de salud.',
      'Charlas informativas para padres de familia.',
      'Seguimiento de niñas con esquema incompleto.',
    ],
  },
  'vancan-2024': {
    titulo: 'VANCAN 2024',
    fecha: '7 al 27 de noviembre de 2024',
    descripcion: 'La campaña VANCAN 2024 es una iniciativa del Ministerio de Salud (MINSA) para la vacunación antirrábica canina a nivel nacional. El objetivo es vacunar a más de 3 millones de perros para prevenir la rabia, una enfermedad mortal que puede transmitirse de animales a personas.',
    imagen: '/campañas/vancan-logo.Bt0jF98n.png',
    objetivos: [
      'Vacunar a la mayor cantidad posible de canes contra la rabia.',
      'Prevenir la transmisión de rabia de animales a humanos.',
      'Sensibilizar a la población sobre la tenencia responsable de mascotas.',
      'Actualizar el registro de canes vacunados.',
    ],
    actividades: [
      'Puntos de vacunación en parques y plazas.',
      'Vacunación casa por casa en zonas de riesgo.',
      'Capacitación a brigadistas vacunadores.',
      'Distribución de material informativo.',
    ],
  },
  'barrido-spr-antipolio-2024': {
    titulo: 'Barrido SPR y Antipolio 2024',
    fecha: '15 al 30 de noviembre de 2024',
    descripcion: 'Campaña de barrido de vacunación con SPR (Sarampión, Paperas y Rubéola) y Antipolio oral, dirigida a niños menores de 5 años. Esta campaña busca cerrar brechas de inmunización y mantener al Perú libre de poliomielitis y sarampión.',
    imagen: '/campañas/barrido-logo.DEU0hDbv.png',
    objetivos: [
      'Completar el esquema de vacunación de niños menores de 5 años.',
      'Mantener coberturas de vacunación superiores al 95%.',
      'Prevenir brotes de sarampión, rubéola y poliomielitis.',
      'Identificar y vacunar a niños no vacunados o con esquema incompleto.',
    ],
    actividades: [
      'Vacunación en establecimientos de salud.',
      'Barrido casa por casa en zonas priorizadas.',
      'Coordinación con DEMUNA y promotores de salud.',
      'Monitoreo rápido de cobertura post-campaña.',
    ],
  },
};

export default function CampanaPage() {
  const { slug } = useParams<{ slug: string }>();
  const campana = slug ? campanasData[slug] : null;

  if (!campana) {
    return (
      <main className="flex-grow bg-white dark:bg-background-dark py-10">
        <div className="container mx-auto px-4 text-center py-20">
          <span className="material-icons-outlined text-6xl text-gray-300">search_off</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Campaña no encontrada</h1>
          <p className="text-gray-500 mt-2">La campaña que buscas no existe o fue removida.</p>
          <a href="/" className="inline-block mt-6 px-6 py-2 bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
            Volver al inicio
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-white dark:bg-background-dark py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <a href="/" className="text-sm text-primary hover:underline flex items-center gap-1">
            <span className="material-icons-outlined text-sm">arrow_back</span>
            Volver al inicio
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 flex-shrink-0 bg-primary/5 flex items-center justify-center overflow-hidden">
                <img src={campana.imagen} alt="" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h1 className="font-display font-bold text-2xl md:text-3xl text-primary">{campana.titulo}</h1>
                <p className="text-gray-500 mt-1 flex items-center gap-2">
                  <span className="material-icons-outlined text-sm">calendar_today</span>
                  {campana.fecha}
                </p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            <section>
              <h2 className="text-[#001f5b] font-bold text-xl mb-3">Descripción</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{campana.descripcion}</p>
            </section>

            <section>
              <h2 className="text-[#001f5b] font-bold text-xl mb-3">Objetivos</h2>
              <ul className="space-y-2">
                {campana.objetivos.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span className="text-gray-700 dark:text-gray-300">{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[#001f5b] font-bold text-xl mb-3">Actividades</h2>
              <ul className="space-y-2">
                {campana.actividades.map((act, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-lg mt-0.5">event_note</span>
                    <span className="text-gray-700 dark:text-gray-300">{act}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="text-[#001f5b] font-bold text-lg mb-3">Otras campañas</h3>
              <ul className="space-y-2 text-sm">
                {Object.entries(campanasData)
                  .filter(([key]) => key !== slug)
                  .map(([key, c]) => (
                    <li key={key}>
                      <a href={`/campañas/${key}`} className="text-primary hover:underline block py-1">
                        {c.titulo}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
