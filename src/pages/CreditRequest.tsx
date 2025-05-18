
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestForm from '@/components/RequestForm';

const CreditRequest = () => {
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Demande d'enquête de crédit</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Remplissez ce formulaire pour obtenir un rapport complet sur la situation financière 
            et les antécédents de crédit de votre futur locataire.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <RequestForm 
              type="credit" 
              title="Formulaire d'enquête de crédit"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreditRequest;
