import React from 'react';
import { motion } from 'framer-motion';

export const Poem = () => {
  // Desglosamos el poema en un array para poder animar línea por línea
  const poemLines = [
    "cada día practicar la atención.",
    "escuchar: una obsesión crea",
    "su propio mantra diario.",
    "es nuestra pasión la que nos tiene,",
    "no nosotrxs a ella.",
    "cada día buscar",
    "el detalle que nos acerca",
    "a la sospecha.",
    "aprender con el propio cuerpo",
    "el mundo, la vida",
    "y el misterio, igual siempre cerca.",
    "lo único posible es sentirlo.",
    "es el mínimo paso de baile",
    "en medio de la anestesia impuesta",
    "de lo ya por sentado y dicho.",
    "ese edificio fabricado",
    "con un fino cristal de certezas,",
    "siempre a punto de romperse.",
    "recordar. ya estamos rotos.",
    "como si el nacimiento",
    "no fuera la primera",
    "separación.",
    "entonces la extrañeza",
    "de la primera vez,",
    "de muchas primeras veces."
  ];

  return (
    <section 
      // Agregamos overflow-hidden para que el parallax de la imagen no rompa la página
      className="relative w-full min-h-screen py-24 px-6 md:px-24 bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* COLUMNA IZQUIERDA: EL POEMA */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="font-sans italic text-xl md:text-3xl leading-snug md:leading-relaxed text-black font-light">
            {poemLines.map((line, index) => (
              <motion.div
                key={index}
                // Animación que ilumina el texto cuando entra al centro de la pantalla
                initial={{ opacity: 0.15, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.5 }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: LA FOTOGRAFÍA (CON PARALLAX) */}
        <div className="md:col-span-5 flex items-end justify-center md:justify-end mt-12 md:mt-0">
          <motion.img 
            // El parallax lo logramos moviendo la imagen en el eje Y levemente mientras scrolleamos
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: -50, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/lectura.png" 
            alt="Eliana leyendo en voz alta" 
            className="w-[80%] md:w-full max-w-[400px] h-auto object-cover grayscale shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};