import React from 'react';
import { motion } from 'framer-motion';

export const Libros = () => {
  // Animación de entrada suave
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full min-h-screen pb-32">
      
      {/* EL FONDO MANTECA */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fondo-manteca.png')" }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-40">
        
        {/* =========================================
            LIBRO 2: PRIMERA DISTANCIA (NUEVO)
            
        ========================================= */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-40">
          
          {/* Etiqueta de novedad */}
          <span className="inline-block bg-[#b895d3] text-white font-sans text-xs md:text-sm tracking-widest uppercase px-4 py-1 rounded-full mb-4">
            Próximo lanzamiento
          </span>

          {/* Fila: Título + Botón de compra */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/20 pb-6 mb-8 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold italic text-[#111] tracking-tighter">
                Primera distancia
              </h2>
              <p className="text-lg md:text-xl font-cutive text-black/60 mt-2">
                Enero editorial, 2026.
              </p>
            </div>
            
            <a 
              href="https://www.eneroeditorial.com/libro.php?id=88"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-sans text-lg border-2 border-black rounded-full px-8 py-2 hover:bg-[#b895d3] hover:border-[#b895d3] hover:text-white transition-all duration-300 text-center"
            >
              Ver en editorial
            </a>
          </div>

          {/* Collage de imágenes (CSS Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">
            {/* Imagen Principal (Ocupa 2 columnas) */}
            <div className="md:col-span-2 overflow-hidden shadow-xl bg-black/5 h-[400px] md:h-full">
              <img src="/distancia-1.jpeg" alt="Primera distancia 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Imágenes secundarias */}
            <div className="overflow-hidden shadow-xl bg-black/5 h-[300px] md:h-full">
              <img src="/distancia-2.jpeg" alt="Primera distancia 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-xl bg-black/5 h-[300px] md:h-full">
              <img src="/distancia-3.jpeg" alt="Primera distancia 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <a href="https://www.eneroeditorial.com/autor.php?id=87" target="_blank" rel="noreferrer" className="text-sm font-sans text-black/50 hover:text-[#b895d3] underline underline-offset-4">
              Ver perfil de autora en Enero Editorial
            </a>
          </div>
        </motion.div>


        {/* =========================================
            LIBRO 1: ALGÚN RECUERDO DE INTIMIDAD
        ========================================= */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/20 pb-6 mb-8 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold italic text-[#111] tracking-tighter">
                Algún recuerdo de Intimidad
              </h2>
              <p className="text-lg md:text-xl font-cutive text-black/60 mt-2">
                Alción editora, 2019.
              </p>
            </div>
            
            <a 
              href="https://alcioneditora.com.ar/productos/algun-recuerdo-de-intimidad/"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-sans text-lg border-2 border-black rounded-full px-12 py-2 hover:bg-black hover:text-white transition-all duration-300 text-center"
            >
              Comprar
            </a>
          </div>

          {/* Collage Estilo "Referencia" (Grid Complejo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[700px]">
            
            {/* Póster principal (Ocupa 1 columna de ancho, pero 2 filas de alto) */}
            <div className="md:col-span-1 md:row-span-2 overflow-hidden shadow-xl bg-black/5 h-[500px] md:h-full">
              <img src="/intimidad-1.jpg" alt="Poster Algún Recuerdo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* 4 fotos más chicas que se reparten en las 2 columnas restantes */}
            <div className="overflow-hidden shadow-xl bg-black/5 h-[250px] md:h-full">
              <img src="/intimidad-2.jpg" alt="Foto libro 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-xl bg-black/5 h-[250px] md:h-full">
              <img src="/intimidad-3.png" alt="Foto libro 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-xl bg-black/5 h-[250px] md:h-full">
              <img src="/intimidad-4.jpg" alt="Foto libro 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-xl bg-black/5 h-[250px] md:h-full">
              <img src="/intimidad-5.jpg" alt="Foto libro 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

          </div>

          <div className="mt-4 flex justify-end">
            <a href="https://descontexto.blogspot.com/2023/06/tres-poemas-de-algun-recuerdo-de.html" target="_blank" rel="noreferrer" className="text-sm font-sans text-black/50 hover:text-[#b895d3] underline underline-offset-4">
              Leer tres poemas del libro en Descontexto
            </a>
          </div>

        </motion.div>

      </div>
    </div>
  );
};