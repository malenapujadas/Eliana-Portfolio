import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // Extraemos la ruta actual (ej: "/contacto", "/peripecias")
  const { pathname } = useLocation();

  // Este efecto se dispara CADA VEZ que el pathname cambia
  useEffect(() => {
    // Le ordenamos a la ventana del navegador que vaya a las coordenadas (x: 0, y: 0) instantáneamente
    window.scrollTo(0, 0);
  }, [pathname]);

  // Como es un componente lógico, no devuelve ningún HTML, devuelve null
  return null; 
};