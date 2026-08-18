import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccordionSection, ObraCard, CARDS_GRID } from '../components/Accordion';

// === DATOS ===
// Misma información que antes vivía en Libros.jsx / Revistas.jsx / Antologias.jsx,
// solo reordenada para el formato de tarjetita (imagen + etiqueta + título).

const LIBROS = [
  {
    id: 'primera-distancia',
    img: '/distancia-2.jpeg',
    topLabel: 'Enero editorial, 2026',
    mainLabel: 'Primera distancia',
    badge: 'Próximo lanzamiento',
    link: 'https://www.eneroeditorial.com/libro.php?id=88',
    actionLabel: 'Ver en editorial'
  },
  {
    id: 'intimidad',
    img: '/intimidad-1.jpg',
    topLabel: 'Alción editora, 2019',
    mainLabel: 'Algún recuerdo de Intimidad',
    link: 'https://alcioneditora.com.ar/productos/algun-recuerdo-de-intimidad/',
    actionLabel: 'Comprar'
  }
];

const POESIA = [
  {
    id: 'santa-rabia',
    revista: 'Santa Rabia Poetry',
    pais: 'Perú',
    titulo: 'La caricia de una fe en su fértil baldío',
    link: 'https://santarabiapoetry.com/52-ano-9-eliana-tomassini-la-caricia-de-una-fe-en-su-fertil-baldio/'
  },
  {
    id: 'buenos-aires',
    revista: 'Buenos Aires Poetry',
    pais: 'Argentina',
    titulo: 'Aliteraciones de la noche',
    link: 'https://buenosairespoetry.com/2024/08/26/aliteraciones-de-la-noche-eliana-tomassini/'
  },
  {
    id: 'giros-poesia',
    revista: 'Giros',
    pais: 'Argentina',
    titulo: 'Dos poemas',
    link: 'https://revistagiros.com/dos-poemas-eliana-tomassini'
  },
  {
    id: 'montaje',
    revista: 'Montaje',
    pais: 'Chile',
    titulo: 'Poesía',
    link: 'https://revistamontaje.cl/poesia-eliana-tomassini/'
  },
  {
    id: 'casa-pais',
    revista: 'Casa País',
    pais: 'Uruguay y Argentina',
    titulo: 'Faro Fantasma',
    link: 'https://www.casapais.org/faro-fantasma/eliana-tomassini'
  },
  {
    id: 'pasajes',
    revista: 'Pasajes',
    pais: 'Francia',
    titulo: 'Obsesión y cordialidad',
    link: 'https://revista-pasajes.com/2025/03/31/obsesion-y-cordialidad-dos-poemas/'
  },
  {
    id: 'flor-ave',
    revista: 'Flor de ave',
    pais: 'Argentina',
    titulo: 'Poemas',
    link: 'https://flordeave.com.ar/poemas-de-eliana-tomassini/'
  },
  {
    id: 'alborismos',
    revista: 'Alborismos',
    pais: 'Venezuela',
    titulo: 'Poesía',
    link: 'https://alborismos.wordpress.com/?s=eliana+tomassini'
  }
].map((item) => ({
  id: item.id,
  img: `/${item.id}.png`,
  topLabel: item.revista,
  accentLabel: item.pais,
  mainLabel: item.titulo,
  link: item.link,
  actionLabel: 'Leer publicación'
}));

const ENSAYO = [
  {
    id: 'aspera',
    revista: 'Áspera',
    titulo: 'Un plancito para el finde',
    link: 'https://medium.com/@asperarevista/un-plancito-para-el-finde-8f11e364faf6'
  },
  {
    id: 'las-olas',
    revista: 'Las Olas',
    titulo: 'Un abismo al que dicen cielo',
    link: 'https://www.revistalasolas.com/revista'
  },
  {
    id: 'giros-ensayo',
    revista: 'Giros',
    titulo: 'Adorable mundo, a vos te espío',
    link: 'https://revistagiros.com/adorable-mundo-a-vos-te-espio'
  },
  /* {
    id: 'gambito',
    revista: 'Gambito',
    titulo: 'De la impertinencia poética',
    link: '#'
  } */
].map((item) => ({
  id: item.id,
  img: `/${item.id}.png`,
  topLabel: item.revista,
  mainLabel: item.titulo,
  link: item.link,
  actionLabel: 'Leer publicación'
}));

const ANTOLOGIAS = [
  {
    id: 'diana',
    titulo: 'Diana',
    homenaje: 'Homenaje a Diana Bellessi',
    editorial: 'Camalote ediciones',
    link: 'https://www.lanacion.com.ar/cultura/diana-bellessi-la-vida-pende-de-un-hilo-y-el-poema-tambien-nid30052025/'
  },
  {
    id: 'juanele',
    titulo: 'Juanele',
    homenaje: 'Homenaje a Juan L. Ortiz',
    editorial: 'Camalote ediciones',
    link: 'https://www.lanacion.com.ar/cultura/a-130-anos-de-su-nacimiento-publican-una-coleccion-con-los-libros-de-juan-l-ortiz-nid11062026/'
  },
  {
    id: 'emma',
    titulo: 'Emma',
    homenaje: 'Homenaje a Emma Barendeguy',
    editorial: 'Camalote ediciones',
    link: 'https://salvajefederal.com/productos/emma-poetas-argentinxs-homenajean-a-emma-barrandeguy-aa-vv/'
  },
  {
    id: 'ninez',
    titulo: 'Niñez',
    homenaje: '100 poemas sobre la niñez',
    editorial: 'Camalote ediciones',
    link: 'https://www.lanacion.com.ar/cultura/con-manto-sutil-cien-poemas-sobre-la-ninez-de-autores-argentinos-de-todas-las-latitudes-nid20072023/'
  },
  {
    id: 'otras-nosotras',
    titulo: 'Otras nosotras mismas',
    homenaje: 'Homenaje a Olga Orozco',
    editorial: 'Agua viva ediciones',
    link: 'https://salvajefederal.com/productos/otras-nosotras-mismas-antologia-en-homenaje-a-olga-orozco-aa-vv/'
  }
].map((item) => ({
  id: item.id,
  img: `/${item.id}.png`,
  topLabel: item.editorial,
  accentLabel: item.titulo,
  mainLabel: item.homenaje,
  link: item.link,
  actionLabel: 'Leer publicación'
}));

export const ObraEscrita = () => {
  // Arranca con "antologías" abierta: así se ven de entrada las 3 cabeceras superpuestas
  const [openSection, setOpenSection] = useState('antologias');

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
          label="libros"
          isOpen={openSection === 'libros'}
          onToggle={() => toggle('libros')}
        >
          <div className={CARDS_GRID}>
            {LIBROS.map((item) => (
              <ObraCard key={item.id} {...item} />
            ))}
          </div>
        </AccordionSection>

        <AccordionSection
          index="02"
          label="revistas"
          isOpen={openSection === 'revistas'}
          onToggle={() => toggle('revistas')}
        >
          <h4 className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-black/40 mb-6">
            Poesía
          </h4>
          <div className={`${CARDS_GRID} mb-16`}>
            {POESIA.map((item) => (
              <ObraCard key={item.id} {...item} />
            ))}
          </div>

          <h4 className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-black/40 mb-6">
            Ensayo
          </h4>
          <div className={CARDS_GRID}>
            {ENSAYO.map((item) => (
              <ObraCard key={item.id} {...item} />
            ))}
          </div>
        </AccordionSection>

        <AccordionSection
          index="03"
          label="antologías"
          isOpen={openSection === 'antologias'}
          onToggle={() => toggle('antologias')}
        >
          <div className={CARDS_GRID}>
            {ANTOLOGIAS.map((item) => (
              <ObraCard key={item.id} {...item} />
            ))}
          </div>
        </AccordionSection>

      </div>
    </section>
  );
};
