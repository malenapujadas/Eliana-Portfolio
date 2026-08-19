import { useEffect } from 'react';

// Pone el título de la pestaña del navegador para la página actual.
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
