import React from 'react';
import { motion } from 'framer-motion';

export const Profile = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 md:p-24 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }} 
    >
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        
        {/* Columna Izquierda (Espacio negativo) */}
        <div className="hidden md:block"></div>

        {/* Columna Derecha (Foto y Nombre) */}
        <div className="flex flex-col items-end text-right">
          <img
            src="/eliana.jpg"
            alt="Eliana Tomassini"
            className="w-full max-w-[450px] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <h2 className="text-6xl md:text-8xl font-sans text-black leading-[0.9] tracking-tighter">
            ELIANA<br />TOMASSINI
          </h2>
        </div>
      </div>

      {/* Flecha con animación leve (Framer Motion) */}
      <motion.div
        className="absolute bottom-12 flex justify-center w-full z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.div>

    </section>
  );
};