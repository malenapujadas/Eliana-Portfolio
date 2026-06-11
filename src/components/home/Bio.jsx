import React from 'react';
import { motion } from 'framer-motion';

export const Bio = () => {
  // Configuramos la animación en cascada (el contenedor maneja los tiempos de los hijos)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Retraso de 0.3s entre el título y el párrafo
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="experiencia" 
      // px-6 y py-20 es para celular, md:p-24 es para escritorio
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 md:p-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-end z-10">
        
        {/* El contenedor del texto ahora ocupa el 100% en celu y el 60% en compu */}
        <motion.div 
          className="w-full md:w-7/12 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Título */}
          <motion.h3 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-cutive italic text-[#1a3b2b] mb-6 md:mb-8 md:-ml-12"
          >
            impertinencia poética
          </motion.h3>

          {/* Párrafo con las palabras clave destacadas */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl font-sans text-black/80 leading-relaxed font-light"
          >
            artista de la palabra y las contradicciones. gestora del encuentro, la escucha y la <span className="text-[#b895d3] italic font-medium">incomodidad del cuerpo deseante</span>, vivo. inclinada al cambio que traen las aliteraciones de los ciclos. propensa a frecuentar el capricho de toda norma. tiene un magister en escritura creativa y un título de licenciada en economía. <strong className="text-black font-semibold">no es ni magister ni economista.</strong> el <span className="text-[#b895d3] italic font-medium">juego serio del lenguaje</span>, ante todo, juego.
            <br /><br />
            busca recordarse que por ahora solo hay una vida.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};