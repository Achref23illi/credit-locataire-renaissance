import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, FileText, Download, CreditCard } from 'lucide-react';

const JudiciairesRequest = () => {
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Antécédents judiciaires au Québec</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comment savoir si votre futur locataire a des poursuites judiciaires?
          </p>
          
          <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Demandez-nous de faire une vérification des antécédents judiciaires au Québec. Nous avons accès aux
            dossiers des tribunaux québécois, et sommes en mesure de vérifier si ceux-ci ont été accusés, mis en
            cause, et ce sans nécessairement avoir été reconnus coupables devant un tribunal. La vérification se fait
            rapidement et respecte la Loi sur la protection des renseignements personnels.
          </p>
          
          <p className="text-orange-600 text-center mb-16 max-w-4xl mx-auto font-medium">
            Protégez votre investissement avant de faire signer un bail à un individu ayant des antécédents judiciaires canadiens.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">DÉLAI DE TRAITEMENT : Habituellement dans la même journée.</h2>
              
              <div className="bg-orange/10 p-4 rounded-lg mb-6">
                <p className="text-orange font-semibold text-center">
                  ✓ Enquêtes disponibles 7j/7
                </p>
              </div>
              
              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Enquetedecreditenligne.com ne peut être tenue responsable des frais 
                  occasionnés par des informations erronées, des fraudes commises par la 
                  personne vérifiée, des loyers impayés ou encore les dossiers de crédit non
                  mis à jour par le locataire auprès de l'agence de crédit Transunion.
                </p>
                <p>
                  Le traitement de toute demande d'enquête commence dès la 
                  réception des informations requises. Une fois les résultats transmis par 
                  courriel, aucun remboursement ne peut être accordé. Des frais d'annulation 
                  peuvent également s'appliquer si l'enquête a déjà été lancée, même si les 
                  résultats ne vous ont pas encore été envoyés.
                </p>
              </div>
            </div>
            
            <div className="bg-orange text-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">—</span> Tarifs
              </h2>
              
              {/* Plan sans frais fixes */}
              <div className="mb-6 pb-4 border-b border-white/20">
                <h3 className="text-lg font-bold mb-3">Plan sans frais fixes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-medium mb-1">
                      Crédit + Antécédents judiciaires :
                    </h4>
                    <p className="text-xl font-bold">38.00$ + tx</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium mb-1">
                      Crédit + Régie du logement :
                    </h4>
                    <p className="text-xl font-bold">38.00$ + tx</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium mb-1">
                      Enquête complète (tout inclus) :
                    </h4>
                    <p className="text-xl font-bold">44.50$ + tx</p>
                  </div>
                </div>
              </div>

              {/* Plan avec adhésion annuelle */}
              <div>
                <h3 className="text-lg font-bold mb-3">Plan avec adhésion (75$/an)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-base font-medium mb-1">
                      Crédit + Antécédents judiciaires :
                    </h4>
                    <p className="text-xl font-bold">32.00$ + tx</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium mb-1">
                      Crédit + Régie du logement :
                    </h4>
                    <p className="text-xl font-bold">32.00$ + tx</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium mb-1">
                      Enquête complète (tout inclus) :
                    </h4>
                    <p className="text-xl font-bold">38.50$ + tx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Formulaire de consentement électronique</h3>
              <p className="mb-6">Le locataire le remplit en ligne, nous le recevons directement.</p>
              <Link to="/consent-form">
                <Button variant="outline" className="text-navy bg-white hover:bg-gray-100 hover:text-navy-dark w-full">
                  Remplir en ligne
                </Button>
              </Link>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Formulaire de consentement version imprimable</h3>
              <p className="mb-6">à télécharger, signer manuellement, puis nous l'envoyer par courriel.</p>
              <Button variant="outline" className="text-navy bg-white hover:bg-gray-100 hover:text-navy-dark w-full">
                Télécharger PDF
              </Button>
            </div>
            
            <div className="bg-gray-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Formulaire de paiement sécurisé</h3>
              <p className="mb-6">Accessible en ligne pour toutes les demandes de vérification, avec un paiement simple et sécurisé.</p>
              <Link to="/payment-form">
                <Button variant="outline" className="text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-800 w-full">
                  Payer maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default JudiciairesRequest;
