# Sistema de Diseño (Design System)

## Paleta de Colores
- **Fondo Base Universal:** Textura importada estáticamente `bg-[url('/fondo-manteca.png')]`. Color claro/cálido.
- **Texto Principal:** `#111` (Casi negro).
- **Texto Secundario/Apagado:** `black/40` o `black/30` para elementos inactivos, barras separadoras, o migas de pan.
- **Color de Acento (Hover/Activo):** `#b895d3` (Lila/Violeta suave).

## Tipografías
- **Tipografía de Interfaz (UI):** `font-sans` (Limpia, moderna). Se usa a menudo con `tracking-widest` y `lowercase` para menús, botones, migas de pan y etiquetas pequeñas.
- **Tipografía Literaria:** `font-cutive` (Estilo máquina de escribir/monoespaciada). Se usa para títulos de secciones artísticas, fragmentos de textos, y el input del formulario de contacto simulando una carta. A menudo acompañada de `italic`.

## Componentes UI Recurrentes
- **Botones/Links en Menú:** Minúsculas, espaciado amplio, hover en lila con transición suave (`transition-colors duration-300`).
- **Links activos (Migas de pan):** Texto negro, `font-semibold`, y un borde inferior `border-b border-[#b895d3]`.
- **Imágenes Flotantes (Hover):** Asimetría, bordes redondeados (`rounded-sm` o `rounded-full`), opacidad media al aparecer (ej. `opacity: 0.65`), y posicionamiento absoluto rompiendo grillas.