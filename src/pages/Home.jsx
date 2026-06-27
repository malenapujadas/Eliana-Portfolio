import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importamos useLocation
import { Hero } from '../components/home/Hero';
import { Profile } from '../components/home/Profile';
import { Bio } from '../components/home/Bio';
import { Experiences } from '../components/home/Experiences';
import { Footer } from '../components/home/Footer';

export const Home = () => {
  const location = useLocation();

  // NUEVO: Este bloque revisa si venimos de otra página pidiendo ir a una sección específica
  useEffect(() => {
    if (location.hash) {
      // Si la URL dice "/#obsesiones", le sacamos el # y buscamos "obsesiones"
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Hacemos que baje suavemente hasta esa sección
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0); // Si no hay hash, arranca arriba de todo
    }
  }, [location]);

  return (
    <div className="w-full relative">
      <div className="sticky top-0 h-screen w-full z-0">
        <Hero />
      </div>

      <div className="relative z-10 bg-transparent">
        <Profile />
        <Bio />
        <Experiences />
        <Footer/>
      </div>
    </div>
  );
};