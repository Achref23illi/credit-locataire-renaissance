
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { FileText, Gavel, Building } from 'lucide-react';

const Request = () => {
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Nos services de vérification</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choisissez le type de vérification que vous souhaitez effectuer pour votre futur locataire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FileText className="h-8 w-8 text-orange" />
                </div>
                <h2 className="text-xl font-bold mb-4 text-center">Enquête de crédit</h2>
                <p className="text-gray-600 text-center mb-8">
                  Vérifiez la solvabilité et les antécédents de crédit de votre futur locataire.
                </p>
                <div className="flex justify-center">
                  <Link to="/demande/credit" className="btn-primary">
                    Choisir cette option
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Gavel className="h-8 w-8 text-orange" />
                </div>
                <h2 className="text-xl font-bold mb-4 text-center">Antécédents judiciaires</h2>
                <p className="text-gray-600 text-center mb-8">
                  Vérifiez si votre locataire a été impliqué dans des poursuites judiciaires.
                </p>
                <div className="flex justify-center">
                  <Link to="/demande/judiciaires" className="btn-primary">
                    Choisir cette option
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Building className="h-8 w-8 text-orange" />
                </div>
                <h2 className="text-xl font-bold mb-4 text-center">Régie du logement</h2>
                <p className="text-gray-600 text-center mb-8">
                  Vérifiez si votre locataire a des dossiers au Tribunal administratif du logement.
                </p>
                <div className="flex justify-center">
                  <Link to="/demande/regie" className="btn-primary">
                    Choisir cette option
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold mb-4">Besoin d'une vérification personnalisée?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si vous avez besoin d'une combinaison de services ou d'une vérification spécifique,
              n'hésitez pas à nous contacter directement.
            </p>
            <Link to="/contact" className="btn-secondary">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Request;
