import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ConsentForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulaire soumis avec succès",
        description: "Votre consentement a été enregistré.",
        duration: 5000,
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Formulaire de consentement de signature électronique pour l'enquête de crédit
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <p className="text-sm text-gray-700 mb-6">
              Votre consentement de signature électronique doit être rempli en totalité par le futur locataire et il doit être imprimable. Une fois rempli vous recevrez
              directement à vos bureaux. N'oubliez pas de toujours valider l'identité de votre futur locataire en lui demandant des pièces d'identité avant de
              remplir ce consentement. Les renseignements personnels doivent être exacts et à jour.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-8">
              <h3 className="font-bold mb-2">Avis de confidentialité :</h3>
              <p className="text-sm text-gray-700">
                Les renseignements personnels sont traités de manière confidentielle et ne sont partagés. Ce document est strictement réservé à l'usage de la personne ou de l'entité à qui il est adressé.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* INFORMATIONS SUR LE FUTUR LOCATAIRE */}
                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase">Informations sur le futur locataire</h3>
                  
                  <div className="mb-4">
                    <label className="flex items-center text-sm mb-4">
                      <input type="checkbox" className="mr-2" required />
                      <span>J'autorise, La Société P.C.S. - loué et/ou locations@enquetedecreditenligne.com, à titre d'agente de renseignements personnels, à obtenir mon dossier de crédit pour propriétaires ou à leurs représentants, lequel étant précisé en toutes responsabilités.</span>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        Prénom du locataire indiqué sur la pièce d'identité <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Nom du locataire indiqué sur la pièce d'identité <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* SEXE */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Sexe</h3>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="gender" className="mr-2" value="feminin" required />
                      <span>Féminin</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="gender" className="mr-2" value="masculin" />
                      <span>Masculin</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="gender" className="mr-2" value="autre" />
                      <span>Autre</span>
                    </label>
                  </div>
                </div>
                
                {/* DATE DE NAISSANCE */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Date de naissance (aaaa-mm-jj exemple: 1975-03-07)</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="birthYear" className="block text-sm font-medium mb-1">Année</label>
                      <input
                        type="text"
                        id="birthYear"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="AAAA"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="birthMonth" className="block text-sm font-medium mb-1">Mois</label>
                      <input
                        type="text"
                        id="birthMonth"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="MM"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="birthDay" className="block text-sm font-medium mb-1">Jour</label>
                      <input
                        type="text"
                        id="birthDay"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="JJ"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="sin" className="block text-sm font-medium mb-1">Numéro d'assurance sociale (Optionnel)</label>
                    <input
                      type="text"
                      id="sin"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* ADRESSE ACTUELLE */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Adresse actuelle</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="currentAddress" className="block text-sm font-medium mb-1">Adresse actuelle <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="currentAddress"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Numéro civique, Rue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="currentApt" className="block text-sm font-medium mb-1">Appartement (#) (s'il y a lieu, écrire Rez)</label>
                      <input
                        type="text"
                        id="currentApt"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentCity" className="block text-sm font-medium mb-1">Ville <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="currentCity"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="currentProvince" className="block text-sm font-medium mb-1">Province <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="currentProvince"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="currentPostal" className="block text-sm font-medium mb-1">Code Postal XXXXXX <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="currentPostal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* ADRESSE PRÉCÉDENTE */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Adresse précédente (Elle est indispensable. Si vous n'avez pas une, écrire la raison dans cet espace)</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="previousAddress" className="block text-sm font-medium mb-1">Numéro civique, Rue</label>
                      <input
                        type="text"
                        id="previousAddress"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="previousApt" className="block text-sm font-medium mb-1">Appartement (#) (s'il y a lieu, écrire Rez)</label>
                      <input
                        type="text"
                        id="previousApt"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="previousCity" className="block text-sm font-medium mb-1">Ville</label>
                        <input
                          type="text"
                          id="previousCity"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="previousProvince" className="block text-sm font-medium mb-1">Province</label>
                        <input
                          type="text"
                          id="previousProvince"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="previousPostal" className="block text-sm font-medium mb-1">Code Postal XXXXXX</label>
                      <input
                        type="text"
                        id="previousPostal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* INFORMATIONS DU PROPRIÉTAIRE */}
                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase">Informations du propriétaire demandeur des enquêtes de prélocation</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ownerFirstName" className="block text-sm font-medium mb-1">Prénom</label>
                      <input
                        type="text"
                        id="ownerFirstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="ownerLastName" className="block text-sm font-medium mb-1">Nom</label>
                      <input
                        type="text"
                        id="ownerLastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="ownerPhone" className="block text-sm font-medium mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="ownerPhone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="ownerAddress" className="block text-sm font-medium mb-1">Adresse courriel du propriétaire</label>
                    <input
                      type="email"
                      id="ownerAddress"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* CONSENTEMENT/SIGNATURE */}
                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase">Consentement/signature locataire</h3>
                  <div className="mb-4">
                    <label htmlFor="signature" className="block text-sm font-medium mb-1">Signature</label>
                    <input
                      type="text"
                      id="signature"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Tapez votre nom complet comme signature"
                      required
                    />
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Date de la signature du consentement par le futur locataire</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="signYear" className="block text-sm font-medium mb-1">Année</label>
                        <input
                          type="text"
                          id="signYear"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="AAAA"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="signMonth" className="block text-sm font-medium mb-1">Mois</label>
                        <input
                          type="text"
                          id="signMonth"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="MM"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="signDay" className="block text-sm font-medium mb-1">Jour</label>
                        <input
                          type="text"
                          id="signDay"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="JJ"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" required />
                      <span className="text-sm">Je, soussigné, en tant que locataire, certifie par la présente que les informations fournies dans ce formulaire de consentement pour l'enquête de crédit sont exactes et à jour.</span>
                    </label>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4">
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Traitement en cours...
                      </>
                    ) : "Envoyer"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ConsentForm;
