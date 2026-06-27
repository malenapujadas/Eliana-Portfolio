import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const Antologias = () => {
  // Hook de Framer Motion para la barra de progreso (lee el scroll de la página)
  const { scrollYProgress } = useScroll();

  // BASE DE DATOS DE ANTOLOGÍAS
  // Acá guardamos toda la info de forma ordenada en un Array (lista) de Objetos {}
  const antologiasData = [
    {
      id: "diana", // Guardá la foto como diana.jpg en la carpeta public
      titulo: "Diana",
      homenaje: "Homenaje a Diana Bellessi",
      editorial: "Camalote ediciones",
      link: "https://www.lanacion.com.ar/cultura/diana-bellessi-la-vida-pende-de-un-hilo-y-el-poema-tambien-nid30052025/",
      description: "Acá va a ir el texto explicativo que te pase Eliana sobre su participación en esta antología."
    },
    {
      id: "juanele", // juanele.jpg
      titulo: "Juanele",
      homenaje: "Homenaje a Juan L. Ortiz",
      editorial: "Camalote ediciones",
      link: "https://www.lanacion.com.ar/cultura/a-130-anos-de-su-nacimiento-publican-una-coleccion-con-los-libros-de-juan-l-ortiz-nid11062026/",
      description: "Acá va a ir el texto explicativo que te pase Eliana sobre su participación en esta antología."
    },
    {
      id: "emma", // emma.jpg
      titulo: "Emma",
      homenaje: "Homenaje a Emma Barendeguy",
      editorial: "Camalote ediciones",
      link: "https://salvajefederal.com/productos/emma-poetas-argentinxs-homenajean-a-emma-barrandeguy-aa-vv/",
      description: "Acá va a ir el texto explicativo que te pase Eliana sobre su participación en esta antología."
    },
    {
      id: "ninez", // ninez.jpg
      titulo: "Niñez",
      homenaje: "100 poemas sobre la niñez", // Le inventé este subtítulo porque no tenía homenaje explícito, lo podés cambiar!
      editorial: "Camalote ediciones",
      link: "https://www.lanacion.com.ar/cultura/con-manto-sutil-cien-poemas-sobre-la-ninez-de-autores-argentinos-de-todas-las-latitudes-nid20072023/",
      description: "Acá va a ir el texto explicativo que te pase Eliana sobre su participación en esta antología."
    },
    {
      id: "otras-nosotras", // otras-nosotras.jpg
      titulo: "Otras nosotras mismas",
      homenaje: "Homenaje a Olga Orozco",
      editorial: "Agua viva ediciones",
      link: "https://salvajefederal.com/productos/otras-nosotras-mismas-antologia-en-homenaje-a-olga-orozco-aa-vv/",
      description: "Acá va a ir el texto explicativo que te pase Eliana sobre su participación en esta antología."
    }
  ];

  return (
    <div className="relative w-full min-h-screen">
      
      {/* 1. EL FONDO (Misma lógica de capas que aprendimos) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fondo-manteca.png')" }}
      ></div>

      <div className="relative z-10 w-full flex flex-col pt-32">
        
        {/* 2. TÍTULO DE LA SECCIÓN (Como no hay pestañas, ponemos un título fijo) */}
        <div className="w-full pb-12 px-6 flex justify-center border-b border-black/10">
          <h2 className="text-4xl md:text-7xl font-cutive tracking-widest text-[#111]">
            ANTOLOGÍAS
          </h2>
        </div>

        {/* 3. BARRA DE PROGRESO FLOTANTE */}
        <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-1.5 h-32 md:h-48 bg-black/10 rounded-full z-50 overflow-hidden">
          <motion.div 
            className="w-full bg-[#b895d3] origin-top rounded-full"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />
        </div>

        {/* 4. EL BUCLE (MAP) QUE DIBUJA LA LISTA */}
        <div className="w-full relative">
          {antologiasData.map((item, idx) => (
            
            <div key={idx} className="relative w-full min-h-[150vh] flex flex-col md:flex-row border-b border-black/10">
              
              {/* COLUMNA IZQUIERDA: IMAGEN STICKY */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky top-0 flex items-center justify-center p-6 md:p-24">
                <div className="w-full h-full relative overflow-hidden shadow-2xl bg-black/5">
                  <img 
                    src={`/${item.id}.png`} 
                    alt={item.titulo} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>

              {/* COLUMNA DERECHA: TEXTO */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 md:pt-48 md:pb-48">
                
                <h4 className="text-sm md:text-base font-sans tracking-[0.3em] text-black/50 uppercase mb-4">
                  {item.editorial}
                </h4>
                
                <h3 className="text-5xl md:text-7xl font-sans font-bold text-[#111] leading-[0.9] tracking-tighter mb-6 uppercase">
                  {item.titulo}
                </h3>
                
                <p className="text-2xl md:text-4xl font-cutive italic text-[#b895d3] mb-8">
                  {item.homenaje}
                </p>
                
                <p className="text-lg md:text-xl font-sans text-black/80 font-light leading-relaxed mb-12">
                  {item.description}
                </p>
                
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block font-sans text-lg border border-black rounded-full px-10 py-4 w-max hover:bg-[#b895d3] hover:text-white hover:border-[#b895d3] transition-all duration-300"
                >
                  Leer publicación
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};