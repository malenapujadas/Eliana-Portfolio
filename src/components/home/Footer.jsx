import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer 
      className="relative w-full py-24 px-6 md:px-24 bg-cover bg-center bg-no-repeat z-10"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        
        {/* Título gigante que funciona como link al formulario */}
        <div className="w-full flex justify-end mb-24 md:mb-32">
          <Link to="/contacto" className="group">
            <h2 className="text-5xl md:text-8xl font-sans font-bold text-black tracking-tighter text-right transition-colors duration-300 group-hover:text-[#b895d3]">
              A un paso <br className="hidden md:block" /> de otra cosa
            </h2>
          </Link>
        </div>

        {/* Líneas de contacto */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          
          {/* Email */}
          <div className="border-b border-black/30 pb-4 flex justify-start">
            <a 
              href="mailto:elitomassini8@gmail.com" 
              className="text-lg md:text-2xl font-sans text-black hover:italic hover:text-[#b895d3] transition-all"
            >
              elitomassini8@gmail.com
            </a>
          </div>

          {/* Teléfono alineado a la derecha como en tu diseño */}
          <div className="border-b border-black/30 pb-4 flex justify-end">
            <a 
              href="https://wa.me/541125259843" 
              target="_blank" 
              rel="noreferrer"
              title="Enviar WhatsApp"
              className="text-lg md:text-2xl font-sans text-black hover:italic hover:text-[#b895d3] transition-all"
            >
              1125259843
            </a>
          </div>

          {/* Instagram */}
          <div className="border-b border-black/30 pb-4 flex justify-start">
            <a 
              href="https://instagram.com/manijasuelta" 
              target="_blank" 
              rel="noreferrer"
              className="text-lg md:text-2xl font-sans text-black hover:italic hover:text-[#b895d3] transition-all"
            >
              @manijasuelta
            </a>
          </div>

          {/* Descargar CV */}
          <div className="border-b border-black/30 pb-4 flex justify-end">
            <a 
              href="/cv-eliana.pdf" 
              download="Eliana_Tomassini_CV.pdf"
              className="text-lg md:text-2xl font-sans text-black hover:italic hover:text-[#b895d3] transition-all"
            >
              descargar cv
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};