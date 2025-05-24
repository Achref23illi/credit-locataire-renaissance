import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Louez en toute confiance : vérifiez vos locataires en quelques clics !
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
            Protégez votre investissement avec notre enquête de crédit en ligne rapide et fiable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/demande/credit" className="btn-primary text-center">
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
