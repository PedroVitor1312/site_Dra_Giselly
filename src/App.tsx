import React from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Estado para controlar a visibilidade do menu mobile
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Navegação Fixa */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Nome */}
            <div className="flex-shrink-0 font-semibold text-burgundy-600">
              Dra. Giselly Beltrame
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-burgundy-600">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-burgundy-600">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-burgundy-600">Serviços</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-burgundy-600">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-burgundy-600">Contato</a>
            </div>

            {/* Botão do Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-burgundy-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-burgundy-600">Início</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-burgundy-600">Sobre</a>
              <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-burgundy-600">Serviços</a>
              <a href="#depoimentos" className="block px-3 py-2 text-gray-700 hover:text-burgundy-600">Depoimentos</a>
              <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-burgundy-600">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Conteúdo Principal */}
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Technology />
        <Contact />
      </main>

      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5534997645792"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;