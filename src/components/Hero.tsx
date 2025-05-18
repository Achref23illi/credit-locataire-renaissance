
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-[url('https://images.unsplash.com/photo-1487958449943-2229e8be8625')] bg-cover bg-center h-full w-full opacity-40"></div>
      </div>
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ENQUÊTE DE CRÉDIT EN LIGNE
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Vérifiez la solvabilité de vos futurs locataires, employés ou partenaires
            d'affaires avec notre service d'enquête de crédit professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/demande" className="btn-primary text-center">
              Demander une enquête
            </Link>
            <Link to="/services" className="btn-secondary text-center">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
