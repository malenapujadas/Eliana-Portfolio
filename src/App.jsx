import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
// Importaremos el Footer cuando lo crees
// import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Todo el contenedor principal */}
      <div className="min-h-screen flex flex-col bg-[#111] font-sans">
        
        {/* El Navbar queda fijo arriba en todas las pantallas */}
        <Navbar />
        
        {/* Renderiza las rutas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obra-escrita" element={<div className="min-h-screen text-white bg-[#111] p-24">Página de Obra Escrita en construcción...</div>} />
            <Route path="/en-voz-alta" element={<div className="min-h-screen text-white bg-[#111] p-24">Página En Voz Alta en construcción...</div>} />
            <Route path="/resonancias" element={<div className="min-h-screen text-white bg-[#111] p-24">Página Resonancias en construcción...</div>} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;