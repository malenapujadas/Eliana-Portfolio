import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* CAPA 1: Fondo con Zoom en Mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-90 scale-[1.8] md:scale-100 origin-top transition-transform duration-1000"
        style={{ backgroundImage: "url('/fondo.png')" }}
      ></div>

      {/* CAPA 2: Máquina de escribir */}
      <div className="absolute bottom-32 left-8 md:bottom-24 md:left-auto md:right-24 text-[#b895d3] z-10 flex">
        {/* ACÁ ESTÁ LA MAGIA: flex-col en mobile, md:flex-row en escritorio */}
        <h1 className="text-5xl md:text-7xl font-cutive tracking-wide flex flex-col md:flex-row md:items-center items-start">
          {/* Le agregamos un margen abajo (mb-2) solo para celulares para separar las líneas */}
          <span className="mb-2 md:mb-0 md:mr-4">qué</span>
          
          <span className="inline-block min-w-[280px] md:min-w-[320px]">
            <Typewriter
              words={['catástrofe', 'baile']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h1>
      </div>

    </section>
  );
};