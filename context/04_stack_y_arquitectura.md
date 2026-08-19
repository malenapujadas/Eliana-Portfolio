# Stack Tecnológico y Arquitectura

## Core Stack
- **Framework:** React (Vite/CRA) usando componentes funcionales y Hooks (`useState`, `useEffect`, `useLocation`, `useNavigate`).
- **Enrutamiento:** `react-router-dom` (BrowserRouter, Routes, Route, Link).
- **Estilos:** Tailwind CSS. Usamos utilidades nativas y medidas relativas/absolutas.
- **Animaciones:** `framer-motion` (uso intensivo de `motion.div`, `motion.img`, `AnimatePresence`, `variants` y `whileInView`).

## Estructura de Carpetas (Referencia)
- `/src/pages/`: Componentes de nivel de ruta (ej. `Home.jsx`, `Contact.jsx`, `ObraEscrita.jsx`, `Peripecias.jsx`).
- `/src/components/`: Componentes reutilizables o de layout (ej. `Navbar.jsx`, `Accordion.jsx`, `ScrollToTop.jsx`).
- `/src/components/home/`: Secciones específicas que arman la página principal (ej. `Hero.jsx`, `Bio.jsx`, `Experiences.jsx`).
- `/public/`: Recursos estáticos, imágenes, texturas (ej. `fondo-manteca.webp`) y PDFs (`cv-eliana.pdf`).

## Reglas de Arquitectura
- Separación de responsabilidades: La lógica compleja se extrae si ensucia la vista (ej. Navbar maneja su propio estado de scroll).
- Se prefieren imágenes nativas o `<motion.img>` cargadas desde la carpeta public con rutas absolutas (ej. `src="/foto.jpg"`).