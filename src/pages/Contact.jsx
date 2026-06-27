import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    reason: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos listos para enviar:', formData);
    setIsSubmitted(true);
  };

  return (
    <section 
      // Agregamos overflow-x-hidden para garantizar que nada ensanche la pantalla
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-32 md:p-24 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-4xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-sans tracking-widest text-black/50 uppercase mb-12">
            Iniciar conversación
          </h2>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="w-full">
              <p className="text-3xl md:text-5xl lg:text-6xl font-sans text-black leading-snug md:leading-relaxed font-light">
                Hola Eliana. Mi nombre es{' '}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="tu nombre"
                  required
                  // Ajuste: achicamos el w base en mobile y agregamos max-w-[80vw]
                  className="bg-transparent border-b-2 border-black/20 focus:border-[#b895d3] outline-none text-center font-cutive text-[#b895d3] placeholder:text-black/20 placeholder:font-sans transition-colors w-[150px] md:w-[350px] max-w-[80vw]"
                />
                , estuve recorriendo tu sitio y me pareció un baile. Te escribo porque{' '}
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="quiero invitarte a..."
                  required
                  // Ajuste: w-[200px] en celular, crece a 500px en compu, y nunca pasa del 80% del viewport
                  className="bg-transparent border-b-2 border-black/20 focus:border-[#b895d3] outline-none text-center font-cutive text-[#b895d3] placeholder:text-black/20 placeholder:font-sans transition-colors w-[200px] md:w-[500px] max-w-[80vw]"
                />
                . Me encantaría que sigamos hablando, podés contestarme a mi correo:{' '}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  // Ajuste: w-[180px] base en celular
                  className="bg-transparent border-b-2 border-black/20 focus:border-[#b895d3] outline-none text-center font-cutive text-[#b895d3] placeholder:text-black/20 placeholder:font-sans transition-colors w-[180px] md:w-[400px] max-w-[80vw]"
                />
                .
              </p>

              <div className="mt-16 flex flex-col md:flex-row items-center justify-end gap-8">
                
                <a 
                  href="/cv-eliana.pdf" 
                  download="Eliana_Tomassini_CV.pdf"
                  className="font-sans text-lg md:text-xl text-black/50 hover:text-[#b895d3] hover:italic transition-all duration-300 underline underline-offset-4"
                >
                  o descargar cv
                </a>

                <button 
                  type="submit"
                  className="font-sans text-xl md:text-3xl border border-black rounded-full px-8 md:px-12 py-3 md:py-4 hover:bg-[#b895d3] hover:text-white hover:border-[#b895d3] transition-all duration-300"
                >
                  Enviar mensaje
                </button>
                
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-4xl md:text-6xl font-cutive italic text-[#1a3b2b]"
            >
              qué catástrofe hermosa que me hayas escrito. <br/> te respondo pronto.
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
};