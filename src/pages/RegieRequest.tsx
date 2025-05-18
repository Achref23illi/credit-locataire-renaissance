
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestForm from '@/components/RequestForm';

const RegieRequest = () => {
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Vérification à la Régie du logement</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Remplissez ce formulaire pour vérifier si votre futur locataire a eu des différends 
            portés devant le Tribunal administratif du logement (anciennement la Régie du logement).
          </p>
          
          <div className="max-w-3xl mx-auto">
            <RequestForm 
              type="regie" 
              title="Formulaire de vérification à la Régie du logement"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RegieRequest;
