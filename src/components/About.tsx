import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Dra. Giselly em seu consultório"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dra. Giselly Beltrame
              <span className="block text-xl text-teal-600 mt-2">
                Especialista em Odontologia
              </span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Com mais de X anos de experiência, dedico-me a proporcionar tratamentos odontológicos de excelência, combinando técnica, tecnologia e um atendimento humanizado.
              </p>
              <p className="mb-4">
                Graduada pela Universidade X, com especializações em Ortodontia e Estética Dental, mantenho-me constantemente atualizada com as mais recentes técnicas e tecnologias do mercado.
              </p>
              <p>
                "Acredito que um sorriso saudável é a chave para a autoestima e o bem-estar. Meu objetivo é oferecer tratamentos personalizados e de alta qualidade, em um ambiente acolhedor e moderno."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;