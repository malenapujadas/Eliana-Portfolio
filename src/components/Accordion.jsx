import { motion, AnimatePresence } from 'framer-motion';

// === TARJETITA ===
// Fila (imagen + texto lado a lado) en mobile, columna (imagen arriba) en desktop.
// img/link son opcionales: sin img se muestra un placeholder "próximamente";
// sin link no se muestra botón de acción.
export const ObraCard = ({ img, topLabel, accentLabel, mainLabel, extraLabel, badge, link, actionLabel }) => (
  <div className="group relative flex flex-row md:flex-col gap-4 md:gap-3">
    <div className="relative w-28 h-20 md:w-full md:h-auto md:aspect-4/3 shrink-0 overflow-hidden bg-black/5">
      {img ? (
        <img
          src={img}
          alt={mainLabel}
          className="w-full h-full object-contain transition-all duration-700 md:group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center border border-dashed border-black/15">
          <span className="text-[9px] md:text-[10px] font-sans tracking-widest uppercase text-black/30">
            próximamente
          </span>
        </div>
      )}
    </div>

    <div className="flex flex-col gap-0.5 md:gap-1 min-w-0">
      {/* En mobile la miniatura mide 112px de ancho: un chip encima la tapaba
          entera, así que acá va arriba del texto, donde hay lugar. En desktop la
          imagen ocupa todo el ancho de la tarjeta, así que vuelve a superponerse
          en la esquina (absolute respecto de la tarjeta, que ahora es relative). */}
      {badge && (
        <span className="w-max mb-1 md:mb-0 md:absolute md:top-2 md:left-2 md:z-10 bg-[#b895d3] text-white text-[8px] md:text-[10px] font-sans tracking-widest uppercase px-2 md:px-3 py-0.5 md:py-1 rounded-full">
          {badge}
        </span>
      )}
      {topLabel && (
        <span className="text-[10px] md:text-[11px] font-sans tracking-widest uppercase text-black/40 truncate">
          {topLabel}
        </span>
      )}
      {accentLabel && (
        <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-wide text-[#b895d3]">
          {accentLabel}
        </span>
      )}
      <span className="text-sm md:text-lg font-sans font-bold text-black leading-snug">
        {mainLabel}
      </span>
      {extraLabel && (
        <span className="text-[11px] md:text-xs font-sans text-black/50 tracking-wide">
          {extraLabel}
        </span>
      )}

      {/* En mobile el botón queda siempre visible (no hay hover confiable en touch); en desktop se revela al pasar el mouse */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-max items-center gap-1.5 text-[11px] md:text-xs font-sans border border-black rounded-full px-3.5 md:px-4 py-1 md:py-1.5 md:opacity-0 md:-translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-[#b895d3] hover:text-white hover:border-[#b895d3]"
        >
          {actionLabel} <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  </div>
);

// === ACORDEÓN ===
// El row tiene una altura fija (define dónde cae la línea divisoria); el título,
// mucho más grande que esa altura y con leading apretado, se desborda hacia
// arriba/abajo a propósito, generando el pisado entre los títulos consecutivos.
export const AccordionSection = ({
  index,
  label,
  isOpen,
  onToggle,
  children,
  labelSizeClass = 'text-4xl sm:text-6xl md:text-8xl lg:text-7xl'
}) => (
  <div className="relative border-b border-black/10">
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="relative z-10 w-full h-24 md:h-36 flex items-center text-left scroll-mt-24 md:scroll-mt-36"
    >
      <span className="flex flex-col items-start gap-1 md:gap-2 w-10 md:w-14 shrink-0">
        <span className="text-xs md:text-sm font-sans text-black/30 tracking-widest">
          {index}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm md:text-base text-black/30"
        >
          →
        </motion.span>
      </span>

      <span
        className={`ml-2 sm:ml-[14%] md:ml-[24%] flex-1 font-sans font-bold uppercase tracking-tighter leading-tight md:leading-[0.75] ${labelSizeClass} transition-colors duration-500 ${
          isOpen ? 'text-black' : 'text-black/30'
        }`}
      >
        {label}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative z-10 overflow-hidden"
        >
          <div className="pt-10 pb-16 md:pt-16 md:pb-24">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const CARDS_GRID = 'flex flex-col gap-10 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 md:gap-y-16';

// Subtítulo breve entre guiones, estilo cita editorial (usado en cada sección del acordeón)
export const SectionSubtitle = ({ children }) => (
  <p className="text-lg md:text-2xl font-cutive italic text-black/50 mb-10 md:mb-14">
    {children}
  </p>
);
