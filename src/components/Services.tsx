
import React from 'react';
import { Shield, Clock, FileText, User } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nos services d'enquête de crédit</h2>
        <p className="section-subtitle">
          Des solutions complètes pour vérifier la solvabilité et les antécédents de vos futurs locataires,
          employés ou partenaires d'affaires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Service 1 */}
          <div className="bg-white rounded-lg p-6 text-center border hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Vérification complète</h3>
            <p className="text-gray-600">
              Enquête approfondie sur l'historique financier et les antécédents de crédit.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg p-6 text-center border hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Résultats rapides</h3>
            <p className="text-gray-600">
              Recevez les résultats de votre enquête en moins de 2 heures.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg p-6 text-center border hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Rapports détaillés</h3>
            <p className="text-gray-600">
              Obtenez un rapport complet avec toutes les informations pertinentes.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg p-6 text-center border hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Service personnalisé</h3>
            <p className="text-gray-600">
              Solutions adaptées à vos besoins spécifiques et accompagnement professionnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
