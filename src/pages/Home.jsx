import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importamos useLocation
import { Hero } from '../components/home/Hero';
import { Profile } from '../components/home/Profile';
import { Bio } from '../components/home/Bio';
import { Experiences } from '../components/home/Experiences';
import { Footer } from '../components/home/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Home = () => {
  useDocumentTitle('Eliana Tomassini');
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
    /* Un solo fondo para todo el home: la imagen cubre el contenedor entero
       (hero + contenido), asi no hay corte visible entre secciones. El color de
       base es el del borde inferior de la imagen, por si la pagina crece mas. */
    <div className="w-full relative bg-[#f7f2f1] bg-[url('/fondo-nuevo-mb.webp')] md:bg-[url('/fondo-nuevo.webp')] bg-cover bg-top bg-no-repeat">
      <h1 className="sr-only">Eliana Tomassini — escritora y artista</h1>

      <Hero />

      <div className="relative z-10">
        <Profile />
        <Bio />
        <Experiences />
        <Footer/>
      </div>
    </div>
  );
};