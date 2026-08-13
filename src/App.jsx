import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ObraEscrita } from './pages/ObraEscrita';
import { VozAlta } from './pages/VozAlta';
import { Peripecias } from './pages/Peripecias';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#111] font-sans">
        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/obra-escrita" element={<ObraEscrita />} />

            <Route path="/voz-alta" element={<VozAlta />} />
            <Route path="/resonancias" element={<div className="min-h-screen"></div>} />
            
            <Route path="/peripecias" element={<Peripecias />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;