export default function TopBar() {
  return (
    <div className="bg-beige-header dark:bg-beige-dark border-b border-gray-200 dark:border-gray-700 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium">
      <div className="container mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1.5 sm:gap-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-gray-600 dark:text-gray-300">
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://www.gob.pe/regionhuanuco-rsleoncioprado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-globe text-xs sm:text-sm" />
            Portal Gob.pe
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://denuncias.servicios.gob.pe/?gobpe_id=681"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-shield-exclamation text-[13px]" />
            Denuncias
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://reclamos.servicios.gob.pe/?institution_id=67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-book text-[13px]" />
            Reclamaciones
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://webmail.redsaludleoncioprado.gob.pe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-at text-xs sm:text-sm" />
            Correo Institucional
          </a>
          <a
            className="hover:text-primary flex items-center gap-1 transition-colors"
            href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=18620"
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
            href="https://cdn.www.gob.pe/uploads/document/file/9716395/7947090-fut.pdf?v=1774963824"
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
