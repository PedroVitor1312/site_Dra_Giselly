import React from 'react';

const Technology = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Estrutura Moderna e Tecnológica
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Investimos em tecnologia de ponta para oferecer o melhor tratamento aos nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Equipamentos modernos"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Equipamentos de Última Geração
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>• Scanner intraoral para maior precisão nos tratamentos</li>
              <li>• Radiografia digital com menor exposição à radiação</li>
              <li>• Equipamentos de esterilização modernos</li>
              <li>• Cadeiras odontológicas ergonômicas para seu conforto</li>
              <li>• Sistema de câmeras intraorais para diagnóstico preciso</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;