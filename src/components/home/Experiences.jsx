import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Experiences = () => {
  // Estado para saber qué link está tocando el mouse
  const [hovered, setHovered] = useState(null);

  // Array con la configuración de cada link y su imagen "brusca"
  // Array con la configuración de cada link y su imagen asimétrica
  const obsesiones = [
    {
      id: 'obra',
      title: 'obra escrita',
      path: '/obra-escrita',
      img: '/hover-obra.jpg', 
      // Imagen mediana, flota arriba y muy a la derecha
      imgClasses: 'w-48 md:w-80 left-[80%] md:left-[110%] -top-10 md:-top-20'
    },
    {
      id: 'voz',
      title: 'en voz alta',
      path: '/en-voz-alta',
      img: '/hover-voz.jpg',
      // Imagen pequeña, flota más abajo y un poco menos a la derecha
      imgClasses: 'w-40 md:w-64 left-[70%] md:left-[90%] top-10 md:top-24'
    },
    {
      id: 'resonancias',
      title: 'resonancias',
      path: '/resonancias',
      img: '/hover-resonancias.jpg',
      // Imagen grande, centrada verticalmente y alejada a la derecha
      imgClasses: 'w-56 md:w-96 left-[60%] md:left-[100%] top-1/2 transform -translate-y-1/2'
    }
  ];

  return (
    <section 
      id="obsesiones" 
      // Mantenemos solo el fondo de manteca
      className="relative w-full min-h-screen flex items-center p-6 md:p-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col items-start gap-16 md:gap-24">
        
        {obsesiones.map((item) => (
          <div 
            key={item.id} 
            className="relative w-max group"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* EL LINK (TEXTO EN MÁQUINA DE ESCRIBIR) */}
            <Link 
              to={item.path} 
              // font-cutive para la máquina de escribir. z-20 para que pise la imagen.
              className={`relative z-20 block text-5xl md:text-7xl lg:text-8xl font-cutive tracking-tighter transition-all duration-300 
                ${hovered === item.id 
                  ? 'text-[#000000]' // Encendido al hacer hover
                  : 'text-black/40'         // Apagado (gris) por defecto
                }
              `}
            >
              {item.title}
            </Link>

            {/* LA IMAGEN FLOTANTE */}
            <AnimatePresence>
              {hovered === item.id && (
                <motion.img 
                  // Animación un poco más seca y "brusca" (menos duración)
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  animate={{ opacity: 0.65, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  src={item.img} 
                  alt={item.title} 
                  // z-10 para que quede detrás de la letra, pointer-events-none para que no parpadee el mouse
                  className={`absolute z-10 shadow-2xl pointer-events-none ${item.imgClasses}`}
                />
              )}
            </AnimatePresence>
          </div>
        ))}

      </div>
    </section>
  );
};