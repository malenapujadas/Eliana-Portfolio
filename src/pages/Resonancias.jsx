import { Link } from 'react-router-dom';
import { ObraCard, CARDS_GRID } from '../components/Accordion';

const RESONANCIAS = [
  {
    id: 'can-serrat-residente',
    topLabel: 'Can Serrat · España',
    accentLabel: '2023',
    mainLabel: 'Residencia Internacional de Arte — Residente',
    link: 'https://canserrat.org/es/eliana-tomassini',
    actionLabel: 'Ver más'
  },
  {
    id: 'can-serrat-jurada',
    topLabel: 'Can Serrat · España',
    accentLabel: '2024',
    mainLabel: 'Residencia Internacional de Arte — Jurada de la residencia',
    link: 'https://www.facebook.com/canserratresidency/posts/convocatoria-abierta-de-residencias-multidisciplinares-y-de-proyectos-de-escritu/922864273183327/',
    actionLabel: 'Ver más'
  },
  {
    id: 'fuente-vaqueros',
    topLabel: 'Fuente Vaqueros, España',
    accentLabel: '2023',
    mainLabel: 'Finalista Premio Internacional de Poesía de Fuente Vaqueros',
    extraLabel: 'Convocado por el Ayuntamiento de Fuente Vaqueros y Valparaíso Ediciones'
  }
];

export const Resonancias = () => {
  return (
    <section
      className="relative w-full min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto">

        <Link
          to="/#obsesiones"
          className="inline-flex items-center gap-2 mb-8 md:mb-12 text-xs md:text-sm font-sans tracking-widest lowercase text-black/40 hover:text-[#b895d3] transition-colors duration-300"
        >
          <span aria-hidden="true">←</span> volver
        </Link>

        {/* Título estático: misma tipografía que los encabezados de acordeón, sin botón ni flecha porque acá no hay nada para desplegar */}
        <div className="pb-10 md:pb-16 mb-10 md:mb-16 border-b border-black/10">
          <span className="block ml-2 sm:ml-[14%] md:ml-[24%] font-sans font-bold uppercase tracking-tighter leading-tight text-4xl sm:text-6xl md:text-8xl lg:text-7xl text-black">
            resonancias
          </span>
        </div>

        <div className={CARDS_GRID}>
          {RESONANCIAS.map((item) => (
            <ObraCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};
