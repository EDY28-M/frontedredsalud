import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCampanas, getCampana, type CampanaPublica } from '@/services/publicApi';
import { CheckCircle, CalendarDays, Zap, ArrowLeft, Loader2 } from 'lucide-react';

type CampanaPageState = {
  campana: CampanaPublica | null | undefined;
  otras: CampanaPublica[];
  loading: boolean;
};

const initialCampanaState: CampanaPageState = {
  campana: undefined,
  otras: [],
  loading: true,
};

export default function CampanaPage() {
  const { slug } = useParams<{ slug: string }>();
  const [state, setState] = useState<CampanaPageState>(initialCampanaState);
  const { campana, otras, loading } = state;

  useEffect(() => {
    if (!slug) return;
    Promise.all([getCampana(slug), getCampanas()])
      .then(([c, all]) => {
        setState({ campana: c, otras: all.filter((x) => x.slug !== slug), loading: false });
      })
      .catch(() => setState({ campana: null, otras: [], loading: false }));
  }, [slug]);

  const fmt = (iso: string) => new Date(iso).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });

  if (loading) return (
    <main className="flex-grow bg-white py-20 flex justify-center items-center">
      <Loader2 size={36} className="animate-spin text-[#001f5b]" strokeWidth={1.5} />
    </main>
  );

  if (!campana) return (
    <main className="flex-grow bg-white py-10">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mt-4">Campaña no encontrada</h1>
        <p className="text-gray-500 mt-2">La campaña que buscas no existe o fue removida.</p>
        <Link to="/" className="inline-block mt-6 px-6 py-2 bg-[#001f5b] text-white font-medium hover:opacity-90 transition-opacity">
          Volver al inicio
        </Link>
      </div>
    </main>
  );

  return (
    <main className="flex-grow bg-white dark:bg-background-dark py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="text-sm text-[#001f5b] hover:underline flex items-center gap-1">
            <ArrowLeft size={14} /> Volver al inicio
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            {/* Hero */}
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 flex-shrink-0 bg-primary/5 flex items-center justify-center overflow-hidden">
                {campana.imagenUrl && (
                  <img src={campana.imagenUrl} alt="" className="w-20 h-20 object-contain" />
                )}
              </div>
              <div>
                <h1 className="font-display font-bold text-2xl md:text-3xl text-[#001f5b]">{campana.titulo}</h1>
                <p className="text-gray-500 mt-1 flex items-center gap-2 text-sm">
                  <CalendarDays size={14} />
                  {fmt(campana.fechaInicio)} — {fmt(campana.fechaFin)}
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-[#001f5b] font-bold text-xl mb-3">Descripción</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{campana.descripcion}</p>
            </section>

            {campana.objetivos.length > 0 && (
              <section>
                <h2 className="text-[#001f5b] font-bold text-xl mb-3">Objetivos</h2>
                <ul className="space-y-2">
                  {campana.objetivos.map((obj, i) => (
                    <li key={`objetivo-${i}-${obj.slice(0, 40)}`} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#001f5b] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-700 dark:text-gray-300">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {campana.actividades.length > 0 && (
              <section>
                <h2 className="text-[#001f5b] font-bold text-xl mb-3">Actividades</h2>
                <ul className="space-y-2">
                  {campana.actividades.map((act, i) => (
                    <li key={`actividad-${i}-${act.slice(0, 40)}`} className="flex items-start gap-3">
                      <Zap size={18} className="text-[#001f5b] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-700 dark:text-gray-300">{act}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="border border-gray-200 p-5">
              <h3 className="text-[#001f5b] font-bold text-lg mb-3">Otras campañas</h3>
              {otras.length === 0 && <p className="text-gray-400 text-sm">Sin otras campañas.</p>}
              <ul className="space-y-2 text-sm">
                {otras.map(c => (
                  <li key={c.id}>
                    <Link to={`/campañas/${c.slug}`} className="text-[#001f5b] hover:underline block py-1">{c.titulo}</Link>
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
