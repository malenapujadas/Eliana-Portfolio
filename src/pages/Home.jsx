import React from 'react';
import { Hero } from '../components/home/Hero';
import { Profile } from '../components/home/Profile';
import { Bio } from '../components/home/Bio';
import { Experiences } from '../components/home/Experiences';
import { Poem } from '../components/home/Poem';
import { Footer } from '../components/home/Footer';

export const Home = () => {
  return (
    <div className="w-full relative">
      
      {/* El contenedor del Hero tiene 'sticky' para quedarse pegado al fondo */}
      <div className="sticky top-0 h-screen w-full z-0">
        <Hero />
      </div>

      {/* Las secciones siguientes van a tener un z-index mayor (z-10) y un fondo sólido para tapar al Hero */}
      <div className="relative z-10">
        <Profile />
        <Bio />
        <Experiences />
        <Poem />
        <Footer/>
      </div>

    </div>
  );
};