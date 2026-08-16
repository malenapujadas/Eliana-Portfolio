import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Array con la configuración de cada link, su imagen y su offset horizontal (padding asimétrico)
const OBSESIONES = [
  {
    id: 'obra',
    title: 'obra escrita',
    path: '/obra-escrita',
    img: '/hover-obra.jpg',
    // Se corre hacia la izquierda del centro
    wrapperClasses: 'md:mr-32 lg:mr-48',
    // Desktop: flota al costado de la propia palabra
    imgClasses: 'hidden md:block md:w-80 md:h-auto md:object-contain md:-top-20 md:left-[110%]',
    // Mobile: dispersa por la sección, sin atarse a la posición del texto
    imgMobileClasses: 'w-32 h-24 object-cover top-[8%] left-[6%]'
  },
  {
    id: 'voz',
    title: 'voz alta',
    path: '/voz-alta',
    img: '/hover-voz.jpg',
    // Se corre hacia la derecha del centro
    wrapperClasses: 'md:ml-20 lg:ml-32',
    imgClasses: 'hidden md:block md:w-64 md:h-auto md:object-contain md:top-24 md:left-[90%]',
    imgMobileClasses: 'w-32 h-24 object-cover top-[42%] right-[6%]'
  },
  {
    id: 'resonancias',
    title: 'resonancias',
    path: '/resonancias',
    img: '/hover-resonancias.jpg',
    // Se corre un poco hacia la izquierda, menos que "obra escrita"
    wrapperClasses: 'md:mr-12 lg:mr-16',
    imgClasses: 'hidden md:block md:w-96 md:h-auto md:object-contain md:top-1/2 md:left-[100%] md:-translate-y-1/2',
    imgMobileClasses: 'w-32 h-24 object-cover top-[74%] left-[12%]'
  }
];

export const Experiences = () => {
  // Índice del ítem "encendido" automáticamente (arranca en 0 = obra escrita)
  const [autoIndex, setAutoIndex] = useState(0);
  // Si el mouse está sobre un ítem, ese id pisa temporalmente al automático
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % OBSESIONES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeId = hoveredId ?? OBSESIONES[autoIndex].id;

  return (
    <section
      id="obsesiones"
      className="relative w-full flex items-center justify-center p-6 py-32 md:p-24 overflow-hidden"
    >
      {/* IMÁGENES MOBILE: dispersas por la sección (z-0, siempre detrás del texto) */}
      <AnimatePresence>
        {OBSESIONES.map((item) =>
          activeId === item.id ? (
            <motion.img
              key={`mobile-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.65, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={item.img}
              alt={item.title}
              className={`md:hidden absolute z-0 shadow-2xl pointer-events-none ${item.imgMobileClasses}`}
            />
          ) : null
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-16 md:gap-24">

        {OBSESIONES.map((item) => (
          <div
            key={item.id}
            className={`relative w-max group ${item.wrapperClasses}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* EL LINK (TEXTO EN MÁQUINA DE ESCRIBIR) */}
            <Link
              to={item.path}
              // font-cutive para la máquina de escribir. z-20 para que pise la imagen.
              className={`relative z-20 block text-5xl md:text-7xl lg:text-8xl font-cutive tracking-tighter transition-all duration-500
                ${activeId === item.id
                  ? 'text-black' // Encendido (automático o por hover)
                  : 'text-black/40' // Apagado (gris) por defecto
                }
              `}
            >
              {item.title}
            </Link>

            {/* IMAGEN DESKTOP: flota al costado de la propia palabra */}
            <AnimatePresence>
              {activeId === item.id && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.65, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={item.img}
                  alt={item.title}
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
