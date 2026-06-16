import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ObraEscrita = () => {
  const [hovered, setHovered] = useState(null);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative w-full min-h-screen pt-40 pb-20 px-6 md:px-12 flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-8 items-center"
      >
        
        {/* BLOQUE 1: LIBROS */}
        <motion.div 
          variants={itemVars}
          className="relative flex flex-col justify-end items-center md:items-start group md:mt-32"
          onMouseEnter={() => setHovered('libros')}
          onMouseLeave={() => setHovered(null)}
        >
          <Link to="/obra-escrita/libros" className="relative w-full md:w-11/12 aspect-[4/3] block">
            <h2 className="absolute -top-10 md:-top-12 left-0 md:-left-4 text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#111] z-20 group-hover:italic transition-all duration-500 uppercase tracking-tighter">
              Libros
            </h2>
            <div className="w-full h-full overflow-hidden shadow-2xl bg-gray-200">
              <img 
                src="/libros.png" 
                alt="Libros" 
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                  hovered === 'libros' ? 'grayscale-0 scale-105' : 'grayscale'
                }`}
              />
            </div>
          </Link>
        </motion.div>

        {/* BLOQUE 2: REVISTAS */}
        <motion.div 
          variants={itemVars}
          className="relative flex flex-col justify-start items-center group md:-mt-0"
          onMouseEnter={() => setHovered('revistas')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Ajusté el ancho a w-10/12 para que no sea tan gigante */}
          <Link to="/obra-escrita/revistas" className="relative w-full md:w-10/12 aspect-[2/3] block">
            <h2 className="absolute -top-10 md:-top-12 left-1/2 transform -translate-x-1/2 text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#111] z-20 group-hover:italic transition-all duration-500 uppercase tracking-tighter">
              Revistas
            </h2>
            <div className="w-full h-full overflow-hidden shadow-2xl bg-gray-200">
              <img 
                src="/revistas.png" 
                alt="Revistas" 
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                  hovered === 'revistas' ? 'grayscale-0 scale-105' : 'grayscale'
                }`}
              />
            </div>
          </Link>
        </motion.div>

        {/* BLOQUE 3: ANTOLOGÍAS */}
        <motion.div 
          variants={itemVars}
          className="relative flex flex-col justify-center items-center md:items-end group md:mt-16"
          onMouseEnter={() => setHovered('antologias')}
          onMouseLeave={() => setHovered(null)}
        >
          <Link to="/obra-escrita/antologias" className="relative w-full md:w-10/12 aspect-[3/4] block">
            <h2 className="absolute -top-10 md:-top-12 right-0 md:-right-4 text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#111] z-20 group-hover:italic transition-all duration-500 uppercase tracking-tighter">
              Antologías
            </h2>
            <div className="w-full h-full overflow-hidden shadow-2xl bg-gray-200">
              <img 
                src="/antologias.png" 
                alt="Antologías" 
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                  hovered === 'antologias' ? 'grayscale-0 scale-105' : 'grayscale'
                }`}
              />
            </div>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};