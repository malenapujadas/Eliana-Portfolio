import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    reason: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá en el futuro conectaremos EmailJS o Formspree
    console.log('Datos listos para enviar:', formData);
    setIsSubmitted(true);
  };

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-32 md:p-24 bg-cover bg-center bg-no-repeat"
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
              {/* El Formulario de Lenguaje Natural */}
              <p className="text-3xl md:text-5xl lg:text-6xl font-sans text-black leading-snug md:leading-relaxed font-light">
                Hola Eliana. Mi nombre es{' '}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="tu nombre"
                  required
                  className="bg-transparent border-b-2 border-black/20 focus:border-[#b895d3] outline-none text-center font-cutive text-[#b895d3] placeholder:text-black/20 placeholder:font-sans transition-colors w-[200px] md:w-[300px]"
                />
                , estuve recorriendo tu sitio y me pareció un baile. Te escribo porque{' '}
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="quiero invitarte a..."
                  required
                  className="bg-transparent border-b-2 border-black/20 focus:border-[#b895d3] outline-none text-center font-cutive text-[#b895d3] placeholder:text-black/20 placeholder:font-sans transition-colors w-[250px] md:w-[400px]"
                />
                . Me encantaría que sigamos hablando, podés contestarme a mi correo:{' '}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="bg-transparent border-b-2 border-black/20 focus:border-[#b895d3] outline-none text-center font-cutive text-[#b895d3] placeholder:text-black/20 placeholder:font-sans transition-colors w-[220px] md:w-[350px]"
                />
                .
              </p>

              {/* Botón de Enviar */}
              <div className="mt-16 flex justify-end">
                <button 
                  type="submit"
                  className="font-sans text-xl md:text-3xl border border-black rounded-full px-8 md:px-12 py-3 md:py-4 hover:bg-[#b895d3] hover:text-white hover:border-[#b895d3] transition-all duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          ) : (
            // Mensaje de éxito disruptivo
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