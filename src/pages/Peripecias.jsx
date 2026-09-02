import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Peripecias = () => {
  useDocumentTitle('Peripecias — Eliana Tomassini');

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
            // Verificamos si este ítem ya fue tocado por el mouse
            const isRevealed = revealed.includes(index);

            return (
              <div
                key={index}
                // Eventos para revelar (mouse en compu, tocar en celular, foco de teclado)
                onMouseEnter={() => handleReveal(index)}
                onTouchStart={() => handleReveal(index)}
                onFocus={() => handleReveal(index)}
                tabIndex={0}
                className={`relative w-full h-full ${item.span} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b895d3] rounded-sm`}
              >
                {/* ACÁ ESTÁ LA MAGIA DE LA OPACIDAD:
                  Si isRevealed es true, opacity-100. Si no, opacity-0.
                  La transición dura 1 segundo (duration-1000) para que sea súper suave.
                */}
                <div 
                  className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
                    isRevealed ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={item.src} 
                    alt={`Peripecia ${index}`} 
                    className="w-full h-full object-cover shadow-lg rounded-sm"
                  />
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};