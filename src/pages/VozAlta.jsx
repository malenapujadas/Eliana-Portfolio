import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccordionSection, ObraCard, CARDS_GRID, SectionSubtitle } from '../components/Accordion';

const LECTURAS_IMAGES = [
  '/lecturas-1.jpg',
  '/lecturas-2.jpg',
  '/lecturas-3.jpg',
  '/lecturas-4.jpg',
  '/lecturas-5.jpeg'
];

const GESTION_CULTURAL = [
  {
    id: 'floresta-unplugged',
    mainLabel: 'Floresta Unplugged',
    topLabel: '2018 - 2020',
    accentLabel: 'La letra chica',
    link: 'https://www.instagram.com/ciclolaletrachica/?hl=es',
    actionLabel: 'Ver instagram'
  },
  {
    id: 'otra-ronda',
    mainLabel: 'Otra Ronda',
    topLabel: '2022 - 2023',
    extraLabel: 'CABA · Berlín · Madrid · Barcelona',
    link: 'https://www.instagram.com/otrarondapoesia/?hl=es',
    actionLabel: 'Ver instagram'
  },
  {
    id: 'nuevas-inquisiciones',
    mainLabel: 'Nuevas inquisiciones'
  }
];

const MANIJA_SUELTA = {
  id: 'manija-suelta',
  mainLabel: 'Manija suelta',
  topLabel: '2018 - 2019',
  extraLabel: 'Humor, arte y feminismos',
  link: 'https://www.instagram.com/manija_suelta/?hl=es',
  actionLabel: 'Ver instagram'
};

export const VozAlta = () => {
  // Arranca con "manija suelta" abierta
  const [openSection, setOpenSection] = useState('manija');

  const toggle = (id) => setOpenSection((prev) => (prev === id ? null : id));

  return (
    <section
      className="relative w-full min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-manteca.png')" }}
    >
      <div className="w-full max-w-6xl mx-auto">

        <Link
          to="/#obsesiones"
          className="inline-flex items-center gap-2 mb-8 md:mb-12 text-xs md:text-sm font-sans tracking-widest lowercase text-black/40 hover:text-[#b895d3] transition-colors duration-300"
        >
          <span aria-hidden="true">←</span> volver
        </Link>

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
          <div className={CARDS_GRID}>
            {GESTION_CULTURAL.map((item) => (
              <ObraCard key={item.id} {...item} />
            ))}
          </div>
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
        </AccordionSection>

      </div>
    </section>
  );
};
