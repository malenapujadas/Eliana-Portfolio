import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Experiences = () => {
  // Variantes para que los links aparezcan uno por uno
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="obsesiones" 
      className="relative w-full min-h-screen flex items-center justify-center p-6 md:p-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-5xl relative z-10">
        
        {/* Contenedor relativo que abraza a la imagen para posicionar los textos adentro */}
        <div className="relative w-full shadow-2xl overflow-hidden">
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="/ficcion.png" 
            alt="En este sitio se produce ficcion" 
            className="w-full h-auto object-cover grayscale opacity-90"
          />

          {/* Contenedor absoluto para los links */}
          {/* Contenedor absoluto para los links - AHORA ABAJO A LA DERECHA */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // Cambiamos la alineación: justify-end (abajo) e items-end (derecha)
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-end pb-[15%] pr-[10%] md:pb-[8%] md:pr-[12%] gap-6 md:gap-10"
          >
            <motion.div variants={linkVariants}>
              <Link 
                to="/obra-escrita" 
                // Agregamos drop-shadow-lg para que despegue del fondo gris
                className="text-white drop-shadow-lg font-sans text-2xl md:text-4xl lg:text-5xl hover:font-bold hover:underline underline-offset-8 hover:text-[#b895d3] transition-all duration-300"
              >
                obra escrita
              </Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link 
                to="/en-voz-alta" 
                className="text-white drop-shadow-lg font-sans text-2xl md:text-4xl lg:text-5xl hover:font-bold hover:underline underline-offset-8 hover:text-[#b895d3] transition-all duration-300"
              >
                en voz alta
              </Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link 
                to="/resonancias" 
                className="text-white drop-shadow-lg font-sans text-2xl md:text-4xl lg:text-5xl hover:font-bold hover:underline underline-offset-8 hover:text-[#b895d3] transition-all duration-300"
              >
                resonancias
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};