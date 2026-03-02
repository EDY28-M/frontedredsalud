interface Convocatoria {
  fecha: string;
  estado: string;
  estadoColor: 'blue' | 'gray' | 'yellow';
  tipo: string;
  denominacion: string;
  bases: string[];
  resultados: string[];
  concluido: boolean;
}

const estadoColorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
};

const convocatorias: Convocatoria[] = [
  {
    fecha: '2026-02-23',
    estado: 'Vigente',
    estadoColor: 'blue',
    tipo: 'Locacion de Servicio',
    denominacion:
      'Contratación de 20 Técnicos de Campo par laborar en el área de Vigilancia Entomológica y Control de Vectores',
    bases: ['TDR', 'Cronograma', 'Fe de erratas 1 (TDR)'],
    resultados: [],
    concluido: false,
  },
  {
    fecha: '2026-02-04',
    estado: 'Vigente',
    estadoColor: 'blue',
    tipo: 'Locacion de Servicio',
    denominacion:
      'Contratación de personal para la Estrategia Sanitaria de Salud Familiar y Comunitaria',
    bases: ['TDR', 'Cronograma', 'Formato cotización', 'Fe de erratas 1'],
    resultados: ['Resultados'],
    concluido: false,
  },
  {
    fecha: '2025-11-15',
    estado: 'Concluido',
    estadoColor: 'gray',
    tipo: 'Locacion de Servicio',
    denominacion:
      'Contratación de servicio de profesionales de salud para la Estrategia Sanitaria de Salud Familiar',
    bases: ['Bases', 'Formato cotización'],
    resultados: ['Resultado final'],
    concluido: true,
  },
  {
    fecha: '2025-11-13',
    estado: 'Suspendido',
    estadoColor: 'yellow',
    tipo: 'Locacion de Servicio',
    denominacion:
      'Contratación de servicio de profesionales de salud para la Estrategia Sanitaria de Salud Familiar',
    bases: ['Invitación', 'TDR', 'Formato cotización'],
    resultados: ['Suspensión'],
    concluido: false,
  },
  {
    fecha: '2025-10-21',
    estado: 'Concluido',
    estadoColor: 'gray',
    tipo: 'Locacion de Servicio',
    denominacion:
      'Contratación de un nutricionista para la estrategia de metales pesados para la MR Chaulán',
    bases: ['TDR', 'Fe de erratas 1 (TDR)', 'Fe de erratas 2 (cronograma)'],
    resultados: ['Resultado Final'],
    concluido: true,
  },
  {
    fecha: '2025-10-17',
    estado: 'Concluido',
    estadoColor: 'gray',
    tipo: 'CAS',
    denominacion: 'Convocatoria CAS N°003-2025-RED DE SALUD LEONCIO PRADO',
    bases: [
      'Bases',
      'TDR Administrativo',
      'TDR Asistencial',
      'Anexos',
      'Fe de erratas 1',
      'Fe de erratas 2',
      'Comunicado 1 (examen de conocimiento)',
    ],
    resultados: [
      'Resultado de evaluación de conocimiento',
      'Fe de erratas 3',
      'Comunicado 2',
      'Resultado de evaluación curricular',
      'Absolución de reclamos',
      'Comunicado 3 (entrevista personal)',
      'Resultado Final',
      'Fe de erratas 4',
    ],
    concluido: true,
  },
];

export default function ConvocatoriasPage() {
  return (
    <main className="flex-grow bg-white dark:bg-background-dark py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-100 pb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="material-icons-outlined text-5xl text-gray-400">groups</span>
              <span className="material-icons-outlined text-5xl text-gray-400">badge</span>
              <span className="material-icons-outlined text-5xl text-gray-400">work</span>
            </div>
          </div>
          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-primary text-right">
              Convocatorias
            </h1>
          </div>
        </div>

        <div className="mb-6"></div>

        {/* Tabla */}
        <div className="overflow-x-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-none shadow-sm">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-950">
              <tr>
                <th className="px-4 py-3 font-semibold border-b border-gray-700 border-r border-gray-700 w-32" scope="col">
                  Publicado
                </th>
                <th className="px-4 py-3 font-semibold border-b border-gray-700 border-r border-gray-700 w-32" scope="col">
                  Estado
                </th>
                <th className="px-4 py-3 font-semibold border-b border-gray-700 border-r border-gray-700 w-40" scope="col">
                  Tipo
                </th>
                <th className="px-4 py-3 font-semibold border-b border-gray-700 border-r border-gray-700" scope="col">
                  Denominación
                </th>
                <th className="px-4 py-3 font-semibold border-b border-gray-700 border-r border-gray-700 w-1/4" scope="col">
                  Bases
                </th>
                <th className="px-4 py-3 font-semibold border-b border-gray-700" scope="col">
                  Resultados
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {convocatorias.map((conv, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors ${conv.concluido ? 'bg-gray-50/50' : ''}`}
                >
                  <td
                    className={`px-4 py-4 whitespace-nowrap font-medium border-b border-r border-gray-200 dark:border-gray-700 ${conv.concluido ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}
                  >
                    {conv.fecha}
                  </td>
                  <td className="px-4 py-4 border-b border-r border-gray-200 dark:border-gray-700">
                    <span
                      className={`${estadoColorMap[conv.estadoColor]} text-xs font-medium px-2.5 py-0.5 rounded-none`}
                    >
                      {conv.estado}
                    </span>
                  </td>
                  <td className="px-4 py-4 border-b border-r border-gray-200 dark:border-gray-700">{conv.tipo}</td>
                  <td className="px-4 py-4 border-b border-r border-gray-200 dark:border-gray-700">{conv.denominacion}</td>
                  <td className="px-4 py-4 border-b border-r border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {conv.bases.map((base, i) => (
                        <a
                          key={i}
                          className="inline-flex items-center px-3 py-1 bg-white border border-gray-300 rounded-none hover:bg-gray-100 text-xs font-medium text-gray-700 transition-colors"
                          href="#"
                        >
                          {base}
                        </a>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {conv.resultados.map((resultado, i) =>
                        resultado === 'Suspensión' ? (
                          <span
                            key={i}
                            className="bg-yellow-400 text-white text-xs font-medium px-3 py-1 rounded-none shadow-sm"
                          >
                            {resultado}
                          </span>
                        ) : (
                          <a
                            key={i}
                            className="inline-flex items-center px-3 py-1 bg-white border border-gray-300 rounded-none hover:bg-gray-100 text-xs font-medium text-gray-700 transition-colors"
                            href="#"
                          >
                            {resultado}
                          </a>
                        )
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
