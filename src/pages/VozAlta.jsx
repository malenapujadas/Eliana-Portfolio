import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccordionSection, ObraCard, CARDS_GRID, SectionSubtitle } from '../components/Accordion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const LECTURAS_IMAGES = [
  '/lecturas-1.jpg',
  '/lecturas-2.jpg',
  '/lecturas-3.jpg',
  '/lecturas-4.jpg',
  '/lecturas-5.jpeg',
  '/lecturas-6.jpg',
  '/lecturas-7.jpeg',
  '/lecturas-8.jpg',
  '/lecturas-9.jpg',
];

// Los cuatro ciclos, sin imágenes: sólo dos tienen instagram, así que en vez de
// dejar dos tarjetas con el placeholder vacío, la sección es una lista tipográfica.
const GESTION_CULTURAL = [
  {
    id: 'floresta-unplugged',
    mainLabel: 'Floresta Unplugged',
    topLabel: '2018 - 2020'
  },
  {
    id: 'la-letra-chica',
    mainLabel: 'La letra chica',
    link: 'https://www.instagram.com/ciclolaletrachica/?hl=es',
    actionLabel: 'ver instagram'
  },
  {
    id: 'otra-ronda',
    mainLabel: 'Otra Ronda',
    topLabel: '2022 - 2023',
    extraLabel: 'CABA · Berlín · Madrid · Barcelona',
    link: 'https://www.instagram.com/otrarondapoesia/?hl=es',
    actionLabel: 'ver instagram'
  },
  {
    id: 'nuevas-inquisiciones',
    mainLabel: 'Nuevas inquisiciones'
  }
];

// Fila de ciclo. Cuando hay link, la fila entera es el área clickeable (mucho más
// cómodo en celular que apuntarle a un botoncito) y por eso el wrapper cambia de
// <div> a <a> según el dato, en vez de anidar un link adentro.
const CicloRow = ({ topLabel, mainLabel, extraLabel, link, actionLabel }) => {
  const Wrapper = link ? 'a' : 'div';
  const linkProps = link ? { href: link, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Wrapper
      {...linkProps}
      className="group flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 py-6 md:py-8"
    >
      <span className="flex flex-col gap-1.5 min-w-0">
        {topLabel && (
          <span className="text-[10px] md:text-[11px] font-sans tracking-widest uppercase text-black/40">
            {topLabel}
          </span>
        )}
        <span className="text-xl md:text-3xl font-sans font-bold uppercase tracking-tight leading-none text-black transition-colors duration-300 md:group-hover:text-[#b895d3]">
          {mainLabel}
        </span>
        {extraLabel && (
          <span className="text-xs md:text-sm font-cutive text-black/50 tracking-wide">
            {extraLabel}
          </span>
        )}
      </span>

      {link && (
        <span className="shrink-0 inline-flex items-center gap-1.5 text-[11px] md:text-xs font-sans lowercase tracking-widest text-black/40 transition-colors duration-300 md:group-hover:text-[#b895d3]">
          {actionLabel}
          <span aria-hidden="true" className="inline-block transition-transform duration-300 md:group-hover:translate-x-1">
            →
          </span>
        </span>
      )}
    </Wrapper>
  );
};

const MANIJA_SUELTA = {
  id: 'manija-suelta',
  mainLabel: 'Manija suelta',
  topLabel: '2018 - 2019',
  extraLabel: 'Humor, arte y feminismos',
  img: '/manija-suelta.jpg',
  link: 'https://www.instagram.com/manija_suelta/?hl=es',
  actionLabel: 'Ver instagram'
};

// Fotos del programa. `span` define el rectángulo que ocupa cada una dentro de la
// grilla del collage; `offset` es un desplazamiento sólo visual (translate no mueve
// la grilla, así que descoloca la imagen sin romper el calce de las demás).
const MANIJA_IMAGES = [
  {
    src: '/manija-suelta-2.webp',
    alt: 'Eliana con auriculares frente al micrófono del estudio',
    span: 'col-span-1 row-span-2'
  },
  {
    src: '/manija-suelta-3.webp',
    alt: 'Eliana riéndose al aire durante una emisión',
    span: 'col-span-2 row-span-2'
  },
  {
    src: '/manija-suelta-4.webp',
    alt: 'Entrevista a un músico invitado en el estudio',
    span: 'col-span-1 row-span-2',
    offset: 'md:-translate-y-6'
  },
  {
    src: '/manija-suelta-1.webp',
    alt: 'El estudio de Gypsy Radio vacío, antes de salir al aire',
    span: 'col-span-2 row-span-2'
  },
  {
    src: '/manija-suelta-5.webp',
    alt: 'Detalle del estudio con una figura de Elektra en primer plano',
    span: 'col-span-2 row-span-2',
    offset: 'md:translate-y-8'
  }
];

export const VozAlta = () => {
  useDocumentTitle('Voz alta — Eliana Tomassini');

  // Arranca con "manija suelta" abierta
  const [openSection, setOpenSection] = useState('manija');

  const toggle = (id) => setOpenSection((prev) => (prev === id ? null : id));

  return (
    <section
      className="relative w-full min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.webp')" }}
    >
      <div className="w-full max-w-6xl mx-auto">

        <Link
          to="/#obsesiones"
          className="inline-flex items-center gap-2 mb-8 md:mb-12 text-xs md:text-sm font-sans tracking-widest lowercase text-black/40 hover:text-[#b895d3] transition-colors duration-300"
        >
          <span aria-hidden="true">←</span> volver
        </Link>

        <h1 className="sr-only">Voz alta — lecturas, gestión cultural y radio de Eliana Tomassini</h1>

        <AccordionSection
          index="01"
          label="lecturas"
          isOpen={openSection === 'lecturas'}
          onToggle={() => toggle('lecturas')}
        >
          <SectionSubtitle>-ciclos y festivales-</SectionSubtitle>
          <div className="columns-2 md:columns-3 gap-4 md:gap-6">
            {LECTURAS_IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Lectura ${i + 1}`}
                className="w-full h-auto object-cover shadow-lg mb-4 md:mb-6 break-inside-avoid"
              />
            ))}
          </div>
        </AccordionSection>

        <AccordionSection
          index="02"
          label="gestión cultural"
          isOpen={openSection === 'gestion'}
          onToggle={() => toggle('gestion')}
        >
          <SectionSubtitle>-ciclos de poesía, música y performance-</SectionSubtitle>
          <ul className="divide-y divide-black/10">
            {GESTION_CULTURAL.map((item) => (
              <li key={item.id}>
                <CicloRow {...item} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection
          index="03"
          label="manija suelta"
          isOpen={openSection === 'manija'}
          onToggle={() => toggle('manija')}
        >
          <SectionSubtitle>-programa de radio online: creadora, operadora y conductora-</SectionSubtitle>
          <div className={CARDS_GRID}>
            <ObraCard {...MANIJA_SUELTA} />
          </div>

          {/* Collage del programa.
              auto-rows fija la altura de cada fila, y cada foto declara cuántas
              columnas/filas ocupa: object-cover se encarga del recorte. grid-flow-dense
              rellena los huecos que quedan en mobile cuando una foto ancha no entra. */}
          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-3 md:gap-6 auto-rows-[110px] md:auto-rows-[190px] md:pb-10">
            {MANIJA_IMAGES.map(({ src, alt, span, offset = '' }) => (
              <figure
                key={src}
                className={`group relative overflow-hidden bg-black/5 shadow-lg ${span} ${offset}`}
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </AccordionSection>

      </div>
    </section>
  );
};
