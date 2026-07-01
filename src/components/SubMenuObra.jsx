import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SubMenuObra = () => {
  const { pathname } = useLocation();

  return (
    // Alineación exacta al Navbar: w-[90%] max-w-5xl mx-auto y el mismo padding lateral
    <div className="w-[90%] max-w-5xl mx-auto pt-32 pb-4 px-6 md:px-8 flex flex-wrap items-center justify-start gap-2 text-xs md:text-sm font-sans tracking-widest lowercase relative z-20">
      
      {/* 1. EL RECORRIDO (Migas de pan) */}
      {/* <a href="/#obsesiones" className="text-black/40 hover:text-[#b895d3] transition-colors">
        obsesiones
      </a>
      <span className="text-black/30">/</span> */}
      
      <span className="text-black/40">
        obra escrita
      </span>
      <span className="text-black/30">/</span>
      
      {/* 2. LOS LINKS HERMANOS (Pequeños y sutiles) */}
      <div className="flex items-center gap-4 ml-2">
        <Link 
          to="/obra-escrita/libros" 
          className={`transition-all duration-300 hover:text-[#b895d3] ${
            pathname.includes('libros') 
              ? 'text-black font-semibold border-b border-[#b895d3]' 
              : 'text-black/40'
          }`}
        >
          libros
        </Link>

        <Link 
          to="/obra-escrita/revistas" 
          className={`transition-all duration-300 hover:text-[#b895d3] ${
            pathname.includes('revistas') 
              ? 'text-black font-semibold border-b border-[#b895d3]' 
              : 'text-black/40'
          }`}
        >
          revistas
        </Link>

        <Link 
          to="/obra-escrita/antologias" 
          className={`transition-all duration-300 hover:text-[#b895d3] ${
            pathname.includes('antologias') 
              ? 'text-black font-semibold border-b border-[#b895d3]' 
              : 'text-black/40'
          }`}
        >
          antologías
        </Link>
      </div>

    </div>
  );
};