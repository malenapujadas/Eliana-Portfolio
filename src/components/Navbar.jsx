import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate(); // Herramienta para navegar entre páginas

  // Detectamos si estamos en una página que SIEMPRE debe tener el texto oscuro
  const isLightPage = location.pathname.includes('/obra-escrita') || location.pathname.includes('/contacto') || location.pathname.includes('/peripecias');
  useEffect(() => {
    const handleScroll = () => {
      // Si estamos en el home, esperamos a pasar el Hero. 
      // Si estamos en otra página, el umbral es mucho menor.
      const scrollThreshold = location.pathname === '/' ? window.innerHeight - 50 : 50;
      
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ejecutamos una vez al montar por si el usuario recarga la página a la mitad
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // NUEVO: La función inteligente que decide cómo navegar
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); 
    setIsMenuOpen(false); 

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  // Esta variable decide el color final evaluando el scroll y en qué página estamos
  const shouldBeDarkText = (isScrolled || isLightPage) && !isMenuOpen;

  return (
    <>
      <nav 
        className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl rounded-full backdrop-blur-md border px-6 md:px-8 py-3 md:py-4 flex justify-between items-center z-50 transition-all duration-500 ${
          shouldBeDarkText
            ? 'bg-black/5 border-black/10 text-black/80' 
            : 'bg-white/10 border-white/20 text-white/80'
        }`}
      >
        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest lowercase">
          {/* Cambiamos las etiquetas <a> por <button> que llaman a nuestra función */}
          <button onClick={(e) => handleNavClick(e, 'inicio')} className="hover:text-[#b895d3] transition-colors duration-300">inicio</button>
          <button onClick={(e) => handleNavClick(e, 'obsesiones')} className="hover:text-[#b895d3] transition-colors duration-300">obsesiones</button>
          <Link to="/peripecias" className="hover:text-[#b895d3] transition-colors duration-300">peripecias</Link>
          <Link to="/contacto" className="hover:text-[#b895d3] transition-colors duration-300">contacto</Link>
        </div>

        {/* BOTÓN MOBILE (Menú) */}
        <div className="md:hidden flex-grow flex justify-start">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-sm tracking-widest lowercase font-sans hover:text-[#b895d3] transition-colors"
          >
            menú
          </button>
        </div>
        
        {/* ICONOS (Se ven en ambos) */}
        <div className="flex gap-4 md:gap-5 items-center">
          {/* Icono de Email */}
          <a href="mailto:elitomassini8@gmail.com" title="Enviar correo">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#b895d3] transition-colors duration-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>

          {/* Icono de Descargar CV */}
          <a href="/cv-eliana.pdf" download="Eliana_Tomassini_CV.pdf" title="Descargar CV">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#b895d3] transition-colors duration-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
          {/* Icono de IG */}
          <a href="https://instagram.com/manijasuelta"  target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#b895d3] transition-colors duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          {/* Icono de mensaje */}
          <a 
            href="https://wa.me/541125259843" 
            target="_blank" 
            rel="noreferrer"
            title="Enviar WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#b895d3] transition-colors duration-300"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
          </a>
        </div>
      </nav>

      {/* OVERLAY MENÚ MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-[#111]/90 flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="flex flex-col gap-8 text-center text-3xl font-sans font-light lowercase text-white">
              {/* Actualizamos también los botones de mobile */}
              <button onClick={(e) => handleNavClick(e, 'inicio')}>inicio</button>
              <button onClick={(e) => handleNavClick(e, 'obsesiones')}>obsesiones</button>
              <Link to="/peripecias" onClick={() => setIsMenuOpen(false)}>peripecias</Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>contacto</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}