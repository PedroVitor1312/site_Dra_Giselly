import React from 'react';

const Hero = () => {
  return (
    // Seção inicial com padding ajustado e gradiente de fundo
    <section
      id="inicio"
      className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-burgundy-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout flexível que se ajusta em coluna no mobile e linha no desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Conteúdo textual */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Dra. Giselly Beltrame
              <span className="block text-2xl md:text-3xl text-burgundy-600 mt-2">
                Odontologia de Excelência
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Cuidando do seu sorriso com expertise e dedicação
            </p>
            {/* Botão de chamada para ação */}
            <a
              href="#contato"
              className="inline-block bg-burgundy-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-burgundy-700 transition-colors"
            >
              Agende sua consulta
            </a>
          </div>
          {/* Container da imagem com proporções fixas */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-md relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/fotos/foto_gi.jpg"
                alt="Dra. Giselly Beltrame"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
