import React from 'react';
import { Bluetooth as Tooth, Smile, Heart, Star, Baby } from 'lucide-react';

const services = [
  {
    icon: <Tooth className="w-8 h-8 text-burgundy-600" />,
    title: 'Clínica Geral',
    description: 'Check-ups, limpezas e restaurações com os mais altos padrões de qualidade.',
  },
  {
    icon: <Smile className="w-8 h-8 text-burgundy-600" />,
    title: 'Ortodontia',
    description: 'Aparelhos fixos, móveis e alinhadores invisíveis para um sorriso alinhado.',
  },
  {
    icon: <Star className="w-8 h-8 text-burgundy-600" />,
    title: 'Estética Dental',
    description: 'Clareamento, facetas e lentes de contato dental para um sorriso deslumbrante.',
  },
  {
    icon: <Heart className="w-8 h-8 text-burgundy-600" />,
    title: 'Implantes Dentários',
    description: 'Reabilitação oral com tecnologia avançada e procedimentos minimamente invasivos.',
  },
  {
    icon: <Baby className="w-8 h-8 text-burgundy-600" />,
    title: 'Odontopediatria',
    description: 'Cuidados especializados para crianças em um ambiente acolhedor e divertido.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta e profissionais altamente qualificados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;