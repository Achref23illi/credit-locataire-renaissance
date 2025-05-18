
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Gavel, FileText } from 'lucide-react';

const ServiceCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-orange p-6 md:w-1/6 flex items-center justify-center">
                <FileText className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 md:p-8 md:flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">ENQUÊTE DE CRÉDIT EN LIGNE</h3>
                  <p className="text-gray-600">Voulez-vous savoir si votre futur locataire a la capacité de payer votre loyer?</p>
                </div>
                <div>
                  <Link to="/demande/credit" className="btn-secondary whitespace-nowrap">
                    Accéder aux formulaires
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-orange p-6 md:w-1/6 flex items-center justify-center">
                <Gavel className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 md:p-8 md:flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">ANTÉCÉDENTS JUDICIAIRES AU QUÉBEC</h3>
                  <p className="text-gray-600">Votre futur locataire a-t-il été mêlé à des poursuites judiciaires?</p>
                </div>
                <div>
                  <Link to="/demande/judiciaires" className="btn-primary whitespace-nowrap">
                    Accéder aux formulaires
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-orange p-6 md:w-1/6 flex items-center justify-center">
                <Building className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 md:p-8 md:flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">VÉRIFICATION À LA RÉGIE DU LOGEMENT</h3>
                  <p className="text-gray-600">Votre futur locataire a-t-il un dossier au Tribunal administratif du logement?</p>
                </div>
                <div>
                  <Link to="/demande/regie" className="btn-secondary whitespace-nowrap">
                    Accéder aux formulaires
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
