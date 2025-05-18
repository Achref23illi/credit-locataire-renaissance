
import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à commencer votre <span className="text-orange">enquête de crédit</span> ?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Obtenez rapidement des informations fiables pour prendre des décisions éclairées.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/demande/credit" className="btn-primary">
            Demander une enquête maintenant
          </Link>
          <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-navy font-medium py-3 px-6 rounded-md transition-colors duration-200">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
