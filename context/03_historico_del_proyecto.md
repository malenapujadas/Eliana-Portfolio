# Histórico del Proyecto

## Cómo empezó
El proyecto inició como la estructuración base de un portfolio en React con Tailwind CSS. Se establecieron las páginas principales (`Home`, `Contacto`, `Obra Escrita`) y se configuró un `Navbar` flotante.

## Evolución y Desafíos Resueltos
1. **Navegación Híbrida:** Se resolvió un problema clásico de React Router construyendo un `Navbar` inteligente que puede scrollear a anclas (`#`) si está en la misma página, o redirigir y luego scrollear si viene de otra página.
2. **Componente `<ScrollToTop />`:** Se implementó para forzar que cada cambio de ruta inicie desde el tope de la página, mejorando la UX de la SPA.
3. **Responsive en Formularios:** Se arregló un bug de desbordamiento horizontal en celulares aplicando `max-w-[80vw]` e inputs escalables en la página de Contacto.
4. **Interacciones Complejas:** 
   - Se creó la sección "Peripecias": una grilla fotográfica asimétrica donde las fotos están ocultas y quedan fijas a medida que el usuario pasa el mouse (efecto "revelar memoria").
   - Se rediseñó el menú de "Obsesiones" para que al hacer hover en tipografía de máquina de escribir, aparezcan imágenes desestructuradas y asimétricas pisando el texto.
5. **Menús Locales:** Se implementó un sistema de "migas de pan" interactivas (SubMenuObra) para navegar lateralmente entre *Libros*, *Revistas* y *Antologías* sin recargar el menú principal.

## Estado Actual y Próximos Pasos
- El esqueleto visual y la lógica de navegación están al 90%.
- **Pendientes principales:**
  1. Maquetar las páginas de `En Voz Alta` y `Resonancias`.
  2. Conectar el formulario de `Contacto` con EmailJS para envíos reales.