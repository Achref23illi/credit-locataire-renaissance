import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

// Stripe product IDs
const PRODUCT_IDS = {
  credit: 'prod_SKw3QFSuk84g9x',
  judiciaires: 'prod_SKw3gc3JtGtntj',
  regie: 'prod_SKw4BGhYItIEGF',
};

// Stripe product prices (for display only)
const PRODUCT_PRICES = {
  credit: 29.95,
  judiciaires: 29.95,
  regie: 19.95,
  combined: 44.50,
};

const PaymentForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            FORMULAIRE DE PAIEMENT EN LIGNE POUR LES ENQUÊTES DE PRÉLOCATION
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <p className="text-gray-700 mb-6">
              Ce formulaire de paiement en ligne pour les enquêtes de prélocation, peut être utilisé pour payer plusieurs demandes pour différents locataires en une seule transaction. Vous recevrez une notification de paiement à votre adresse courriel.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <h3 className="text-lg font-semibold mb-2">Avis important</h3>
              <p className="text-gray-700">
                Il est de la responsabilité du propriétaire ou de son mandataire, de valider l'identité du futur locataire en vérifiant ses deux pièces d'identité avant de nous transmettre son consentement.
              </p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <h3 className="text-lg font-semibold mb-2">Livraison du rapport</h3>
              <p className="text-gray-700">
                <strong>Votre rapport vous sera envoyé par courriel dès qu'il sera disponible.</strong> 
                Vous recevrez une notification de traitement à votre adresse courriel une fois le paiement effectué.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Tenant Information */}
              <div>
                <h3 className="text-lg font-bold mb-4">Prénom et nom des locataires reliés à ce paiement (Nécessaire)*</h3>
                <div>
                  <textarea 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    placeholder="Veuillez les écrire comme ils se différent dans ce champ ci-dessus."
                    rows={4}
                    required
                  ></textarea>
                </div>
              </div>
              
              {/* Owner Information */}
              <div>
                <h3 className="text-lg font-bold mb-4">Information sur le propriétaire ou le mandataire</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="ownerFirstName">Prénom</Label>
                    <input
                      type="text"
                      id="ownerFirstName"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="ownerLastName">Nom</Label>
                    <input
                      type="text"
                      id="ownerLastName"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <Label htmlFor="ownerEmail">Courriel</Label>
                    <input
                      type="email"
                      id="ownerEmail"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="ownerPhone">Téléphone</Label>
                    <input
                      type="tel"
                      id="ownerPhone"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Service Selection */}
              <div>
                <h3 className="text-lg font-bold mb-4">Enquêtes de pré-location</h3>
                <p className="mb-4 text-gray-700">
                  Choisissez une des options de paiement ci-dessous pour accéder directement au paiement sécurisé Stripe.
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <a href="https://buy.stripe.com/9B6eVf8cnbk9f377el04800" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-bold">
                      Payer tout (Crédit + Judiciaires + Régie)
                    </Button>
                  </a>
                  <a href="https://buy.stripe.com/aFacN71NZdsh2glaqx04801" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-bold">
                      Payer Crédit + Régie
                    </Button>
                  </a>
                  <a href="https://buy.stripe.com/8x2eVf0JVdsh4ot42904802" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 text-lg font-bold">
                      Payer Crédit + Judiciaires
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentForm;
