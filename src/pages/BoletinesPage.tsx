const boletines = [
  {
    id: '20261',
    fecha: '16 de enero de 2026',
    titulo: 'Boletín informativo N°1-2026',
    imagen: 'https://cdn.www.gob.pe/uploads/document/file/9311976/7634922-cover-sm-2.png?v=1768857440',
    descripcion: 'Primer boletín informativo del año 2026 de la Red de Salud Leoncio Prado. Contiene información sobre las actividades realizadas, indicadores de salud, campañas de vacunación y logros institucionales.',
    contenido: [
      'Resumen ejecutivo de actividades del primer trimestre.',
      'Indicadores de salud materno-neonatal.',
      'Avance de coberturas de vacunación.',
      'Campañas de promoción de la salud realizadas.',
      'Actividades de vigilancia epidemiológica.',
      'Logros y reconocimientos institucionales.',
    ],
  },
];

export default function BoletinesPage() {
  const boletin = boletines[0];

  return (
    <main className="flex-grow bg-white dark:bg-background-dark py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <a href="/" className="text-sm text-primary hover:underline flex items-center gap-1">
            <span className="material-icons-outlined text-sm">arrow_back</span>
            Volver al inicio
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-100 pb-6">
          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-primary">
              Boletines Informativos
            </h1>
            <p className="text-gray-500 mt-1">Publicaciones institucionales</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-700 p-6">
              <div className="w-48 flex-shrink-0">
                <img src={boletin.imagen} alt="" className="w-full h-auto border border-gray-200" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#001f5b] font-bold text-2xl mb-2">{boletin.titulo}</h2>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                  <span className="material-icons-outlined text-sm">calendar_today</span>
                  {boletin.fecha}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{boletin.descripcion}</p>
              </div>
            </div>

            <section>
              <h2 className="text-[#001f5b] font-bold text-xl mb-4">Contenido del boletín</h2>
              <ul className="space-y-2">
                {boletin.contenido.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-outlined text-primary text-lg mt-0.5">article</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="border border-gray-200 dark:border-gray-700 p-5">
              <h3 className="text-[#001f5b] font-bold text-lg mb-3">Archivo de boletines</h3>
              <ul className="space-y-2 text-sm">
                {boletines.map((b) => (
                  <li key={b.id}>
                    <a href={`/boletines/${b.id}`} className="text-primary hover:underline flex items-center gap-2 py-1">
                      <span className="material-icons-outlined text-sm">description</span>
                      {b.titulo}
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
