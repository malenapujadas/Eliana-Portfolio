import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFound = () => {
  useDocumentTitle('Página no encontrada — Eliana Tomassini');

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.webp')" }}
    >
      <span className="font-sans text-black/30 tracking-widest text-sm uppercase mb-6">
        404
      </span>
      <h1 className="font-cutive italic text-4xl md:text-6xl text-black mb-8">
        qué extraño, esta página no existe
      </h1>
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-sans text-sm md:text-base tracking-widest lowercase border border-black rounded-full px-8 py-3 hover:bg-[#b895d3] hover:text-white hover:border-[#b895d3] transition-all duration-300"
      >
        volver al inicio
      </Link>
    </section>
  );
};
