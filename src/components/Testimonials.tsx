import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    text: 'A Dra. Giselly transformou meu sorriso! Profissionalismo e cuidado em todos os detalhes. Super recomendo!',
    rating: 5,
  },
  {
    name: 'João Santos',
    text: 'Excelente atendimento! A clínica é moderna e acolhedora. Me senti muito seguro durante todo o tratamento.',
    rating: 5,
  },
  {
    name: 'Ana Oliveira',
    text: 'Ótima experiência! A Dra. Giselly é muito atenciosa e competente. Resultados incríveis!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;