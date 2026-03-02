export default function TopBar() {
  return (
    <div className="bg-beige-header dark:bg-beige-dark border-b border-gray-200 dark:border-gray-700 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium">
      <div className="container mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1.5 sm:gap-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-gray-600 dark:text-gray-300">
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://redsaludhuanuco.gob.pe:2096/?locale=es_es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-at text-xs sm:text-sm" />
            Correo Institucional
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=78975&id_tema=1&ver=D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-bank text-sm" />
            Portal Transparencia (PTE)
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-600 dark:text-gray-300">
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="http://digital.regionhuanuco.gob.pe/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-file-earmark-break text-sm" />
            SGD
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://cdn.www.gob.pe/uploads/document/file/5634205/4990617-fut-actual.pdf?v=1704379075"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-file-earmark-text text-sm" />
            FUT
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-file-earmark-person text-sm" />
            Mesa de partes
          </a>
        </div>
      </div>
    </div>
  );
}
