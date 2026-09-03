import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const Peripecias = () => {
  useDocumentTitle('Peripecias — Eliana Tomassini');

  // Dónde estamos parados decide CÓMO se revela el collage:
  // - Con mouse (desktop): se revela al pasar por encima. Esa es la gracia de la
  //   página, la exploración deliberada.
  // - Sin mouse (celular/tablet): el hover no existe, y obligar a tocar diez
  //   imágenes una por una es incómodo. Ahí se revelan solas al entrar en pantalla.
  const hayHover = useMediaQuery('(hover: hover) and (min-width: 768px)');

  // Este estado guarda una lista (array) con los números de las imágenes que ya revelamos
  const [revealed, setRevealed] = useState([]);

  // Función que se ejecuta al pasar el mouse
  const handleReveal = (index) => {
    setRevealed((prev) => {
      // Si el índice ya está en la lista, no hacemos nada. Si no está, lo agregamos.
      if (prev.includes(index)) return prev;
      return [...prev, index];
    });
  };

  // BASE DE DATOS DEL COLLAGE
  // Solo imágenes, con distintos tamaños (span) para armar el ritmo del collage
  const collageItems = [
    { src: '/peripecia-0.jpg', span: 'col-span-1 md:row-span-2' },
    { src: '/peripecia-1.jpg', span: 'col-span-1 md:row-span-1' },
    { src: '/peripecia-2.jpg', span: 'col-span-1 md:row-span-2' },
    { src: '/peripecia-3.jpg', span: 'col-span-1 md:row-span-2' },
    { src: '/peripecia-4.jpg', span: 'col-span-1 md:row-span-1' },
    { src: '/peripecia-5.jpg', span: 'col-span-1 md:row-span-2' },
    { src: '/peripecia-6.jpg', span: 'col-span-2 md:row-span-2' }, // Esta es más ancha (mesa de trabajo)
    { src: '/peripecia-7.jpg', span: 'col-span-1 md:row-span-2' },
    { src: '/peripecia-8.jpg', span: 'col-span-1 md:row-span-1' },
    { src: '/peripecia-9.jpg', span: 'col-span-1 md:row-span-1' },
  ];

  return (
    <section 
      id="peripecias" 
      className="relative w-full min-h-screen py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.webp')" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        
        <h1 className="sr-only">Peripecias — cuaderno visual de Eliana Tomassini</h1>

        {/* Título oculto para accesibilidad, pero podemos dejar un pequeño texto guía */}
        <p className="text-center font-sans text-black/30 tracking-widest text-sm mb-12 uppercase animate-pulse">
          Explorá la grilla
        </p>

        {/* GRILLA DEL COLLAGE */}
        {/* En celular 2 columnas, en compu 4 columnas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[150px] md:auto-rows-[250px]">
          
          {collageItems.map((item, index) => {
            // Con hover, la opacidad la manda el estado (se prende al pasar el mouse).
            // Sin hover, la maneja whileInView: framer-motion la anima cuando la
            // celda entra en pantalla. once:true la deja revelada para siempre;
            // amount:0.3 espera a que se vea un 30% para no dispararla de refilón.
            const revelado = hayHover
              ? { animate: { opacity: revealed.includes(index) ? 1 : 0 } }
              : { whileInView: { opacity: 1 }, viewport: { once: true, amount: 0.3 } };

            // El foco de teclado y el hover solo tienen sentido donde hay mouse.
            // En celular la grilla no es interactiva, así que tampoco suma diez
            // paradas de tabulación que no hacen nada.
            const interaccion = hayHover
              ? {
                  onMouseEnter: () => handleReveal(index),
                  onFocus: () => handleReveal(index),
                  tabIndex: 0
                }
              : {};

            return (
              <div
                key={index}
                {...interaccion}
                className={`relative w-full h-full ${item.span} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b895d3] rounded-sm`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  {...revelado}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <img 
                    src={item.src} 
                    alt={`Peripecia ${index}`} 
                    className="w-full h-full object-cover shadow-lg rounded-sm"
                  />
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};