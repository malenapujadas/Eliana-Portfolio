import { useCallback, useSyncExternalStore } from 'react';

/**
 * Devuelve true/false según si una media query de CSS se cumple, y se
 * actualiza sola si cambia (al rotar el celular o redimensionar la ventana).
 *
 * Sirve para los casos en que la diferencia entre mobile y desktop no se puede
 * resolver con clases de Tailwind, porque cambia la lógica y no solo el estilo.
 *
 * Usamos useSyncExternalStore, que es el hook que React trae específicamente
 * para suscribirse a cosas de afuera de React (acá, el matchMedia del
 * navegador). Comparado con useState + useEffect evita el parpadeo del primer
 * render y los renders en cascada.
 */
export const useMediaQuery = (query) => {
  // subscribe: React nos pasa su callback y nosotros le avisamos cuando cambia.
  const subscribe = useCallback(
    (onStoreChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onStoreChange);
      return () => mql.removeEventListener('change', onStoreChange);
    },
    [query]
  );

  // getSnapshot: el valor actual. Devuelve un booleano, así que React puede
  // compararlo y no re-renderiza si no cambió.
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot);
};
