import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export const Revistas = () => {
  const [activeTab, setActiveTab] = useState('poesia');
  const { scrollYProgress } = useScroll();

  // BASE DE DATOS DE POESÍA
  const poesiaData = [
    {
      id: "santa-rabia",
      revista: "Santa Rabia Poetry",
      pais: "Perú",
      titulo: "La caricia de una fe en su fértil baldío",
      link: "https://santarabiapoetry.com/52-ano-9-eliana-tomassini-la-caricia-de-una-fe-en-su-fertil-baldio/",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "buenos-aires",
      revista: "Buenos Aires Poetry",
      pais: "Argentina",
      titulo: "Aliteraciones de la noche",
      link: "https://buenosairespoetry.com/2024/08/26/aliteraciones-de-la-noche-eliana-tomassini/",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "giros-poesia",
      revista: "Giros",
      pais: "Argentina",
      titulo: "Dos poemas",
      link: "https://revistagiros.com/dos-poemas-eliana-tomassini",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "montaje",
      revista: "Montaje",
      pais: "Chile",
      titulo: "Poesía",
      link: "https://revistamontaje.cl/poesia-eliana-tomassini/",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "casa-pais",
      revista: "Casa País",
      pais: "Uruguay y Argentina",
      titulo: "Faro Fantasma",
      link: "https://www.casapais.org/faro-fantasma/eliana-tomassini",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "pasajes",
      revista: "Pasajes",
      pais: "Francia",
      titulo: "Obsesión y cordialidad",
      link: "https://revista-pasajes.com/2025/03/31/obsesion-y-cordialidad-dos-poemas/",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "flor-ave",
      revista: "Flor de ave",
      pais: "Argentina",
      titulo: "Poemas",
      link: "https://flordeave.com.ar/poemas-de-eliana-tomassini/",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    }
  ];

  // BASE DE DATOS DE ENSAYOS
  const ensayoData = [
    {
      id: "aspera",
      revista: "Áspera",
      pais: "Ensayo",
      titulo: "Un plancito para el finde",
      link: "https://medium.com/@asperarevista/un-plancito-para-el-finde-8f11e364faf6",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "las-olas",
      revista: "Las Olas",
      pais: "Ensayo",
      titulo: "Un abismo al que dicen cielo",
      link: "https://www.revistalasolas.com/revista",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "giros-ensayo",
      revista: "Giros",
      pais: "Ensayo",
      titulo: "Adorable mundo, a vos te espío",
      link: "https://revistagiros.com/adorable-mundo-a-vos-te-espio",
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    },
    {
      id: "gambito",
      revista: "Gambito",
      pais: "Ensayo",
      titulo: "De la impertinencia poética",
      link: "#", 
      description: "Acá va a ir el texto explicativo. Por ahora dejamos este espacio reservado."
    }
  ];

  const currentData = activeTab === 'poesia' ? poesiaData : ensayoData;

  return (
    <div className="relative w-full min-h-screen">
      
      {/* FONDO CORREGIDO: Usamos z-0 en lugar de -z-10 para tapar el negro, sin pisar el contenido */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fondo-manteca.png')" }}
      ></div>

      {/* CONTENEDOR PROTECTOR: Todo lo que va acá adentro tiene z-10 y está por encima del fondo */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* BARRA DE PROGRESO FLOTANTE */}
        <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-1.5 h-32 md:h-48 bg-black/10 rounded-full z-50 overflow-hidden">
          <motion.div 
            className="w-full bg-[#b895d3] origin-top rounded-full"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />
        </div>

        {/* TABS TIPOGRÁFICOS */}
        <div className="w-full pt-40 pb-12 px-6 flex justify-center gap-8 md:gap-24 relative border-b border-black/10">
          <button 
            onClick={() => setActiveTab('poesia')} 
            className={`text-4xl md:text-7xl font-cutive tracking-widest transition-all duration-300 ${
              activeTab === 'poesia' ? 'text-[#111]' : 'text-black/20 line-through hover:text-black/50'
            }`}
          >
            POESÍA
          </button>
          <button 
            onClick={() => setActiveTab('ensayo')} 
            className={`text-4xl md:text-7xl font-cutive tracking-widest transition-all duration-300 ${
              activeTab === 'ensayo' ? 'text-[#111]' : 'text-black/20 line-through hover:text-black/50'
            }`}
          >
            ENSAYO
          </button>
        </div>

        {/* LISTA DE PUBLICACIONES */}
        <div className="w-full relative">
          {currentData.map((item, idx) => (
            
            <div key={idx} className="relative w-full min-h-[150vh] flex flex-col md:flex-row border-b border-black/10">
              
              {/* COLUMNA IZQUIERDA: IMAGEN STICKY */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky top-0 flex items-center justify-center p-6 md:p-24">
                <div className="w-full h-full relative overflow-hidden shadow-2xl bg-black/5">
                  <img 
                    src={`/${item.id}.png`} 
                    alt={item.revista} 
                    className="w-full h-full " 
                  />
                </div>
              </div>

              {/* COLUMNA DERECHA: TEXTO */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 md:pt-48 md:pb-48">
                
                <h4 className="text-sm md:text-base font-sans tracking-[0.3em] text-black/50 uppercase mb-4">
                  {item.pais}
                </h4>
                
                <h3 className="text-5xl md:text-7xl font-sans font-bold text-[#111] leading-[0.9] tracking-tighter mb-6 uppercase">
                  {item.revista}
                </h3>
                
                <p className="text-2xl md:text-4xl font-cutive italic text-[#b895d3] mb-8">
                  "{item.titulo}"
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