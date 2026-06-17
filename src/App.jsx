import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
/* import { Footer } from './components/Footer'; */
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ObraEscrita } from './pages/ObraEscrita'; 
import { Revistas } from './pages/Revistas';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#111] font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/obra-escrita" element={<ObraEscrita />} /> 
            
            <Route path="/obra-escrita/revistas" element={<Revistas />} /> 
            <Route path="/obra-escrita/libros" element={<div className="min-h-screen"></div>} />
            <Route path="/obra-escrita/antologias" element={<div className="min-h-screen"></div>} />
            
            <Route path="/en-voz-alta" element={<div className="min-h-screen"></div>} />
            <Route path="/resonancias" element={<div className="min-h-screen"></div>} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;