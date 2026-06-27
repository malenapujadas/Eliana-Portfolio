import React, { useState } from 'react';

export const Peripecias = () => {
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
  // Mezclamos imágenes y textos, dándoles distintos tamaños (span)
  const collageItems = [
    { type: 'img', src: '/peripecia-0.png', span: 'col-span-1 md:row-span-2' },
    { type: 'img', src: '/peripecia-1.png', span: 'col-span-1 md:row-span-1' },
    { type: 'img', src: '/peripecia-2.png', span: 'col-span-1 md:row-span-2' },
    { type: 'text', content: 'Un popurrí\nque me hace sentir viva', span: 'col-span-1 md:row-span-1', extraClasses: 'text-2xl md:text-3xl font-cutive italic whitespace-pre-line flex items-center' },
    { type: 'img', src: '/peripecia-3.png', span: 'col-span-1 md:row-span-2' },
    { type: 'img', src: '/peripecia-4.png', span: 'col-span-1 md:row-span-1' },
    { type: 'text', content: '| tostada con queso', span: 'col-span-1 md:row-span-1', extraClasses: 'text-sm font-cutive text-black/50 flex items-start' },
    { type: 'img', src: '/peripecia-5.png', span: 'col-span-1 md:row-span-2' },
    { type: 'img', src: '/peripecia-6.png', span: 'col-span-2 md:row-span-2' }, // Esta es más ancha (mesa de trabajo)
    { type: 'text', content: '| desorden', span: 'col-span-1 md:row-span-1', extraClasses: 'text-sm font-cutive text-black/50 flex items-end justify-end' },
    { type: 'img', src: '/peripecia-7.png', span: 'col-span-1 md:row-span-2' },
    { type: 'text', content: '| atardeceres', span: 'col-span-1 md:row-span-1', extraClasses: 'text-sm font-cutive text-black/50 flex items-start' },
    { type: 'img', src: '/peripecia-8.png', span: 'col-span-1 md:row-span-1' },
  ];

  return (
    <section 
      id="peripecias" 
      className="relative w-full min-h-screen py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Título oculto para accesibilidad, pero podemos dejar un pequeño texto guía */}
        <p className="text-center font-sans text-black/30 tracking-widest text-sm mb-12 uppercase animate-pulse">
          Explorá con el cursor
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
                // Eventos para revelar (mouse en compu, tocar en celular)
                onMouseEnter={() => handleReveal(index)}
                onTouchStart={() => handleReveal(index)}
                className={`relative w-full h-full ${item.span}`}
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
                  {item.type === 'img' ? (
                    <img 
                      src={item.src} 
                      alt={`Peripecia ${index}`} 
                      className="w-full h-full object-cover shadow-lg rounded-sm"
                    />
                  ) : (
                    <div className={`w-full h-full ${item.extraClasses}`}>
                      {item.content}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};