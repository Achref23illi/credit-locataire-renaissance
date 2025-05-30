import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { sendEmail, emailConfig } from '@/utils/emailjs';

const ConsentForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Tenant information
    firstName: '',
    lastName: '',
    gender: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    sin: '',
    phone: '',
    // Current address
    currentAddress: '',
    currentApt: '',
    currentCity: '',
    currentProvince: '',
    currentPostal: '',
    // Previous address
    previousAddress: '',
    previousApt: '',
    previousCity: '',
    previousProvince: '',
    previousPostal: '',
    // Owner information
    ownerFirstName: '',
    ownerLastName: '',
    ownerPhone: '',
    ownerEmail: '',
    // Consent/Signature
    signature: '',
    signYear: '',
    signMonth: '',
    signDay: '',
    // Checkboxes
    authorizationConsent: false,
    informationAccuracy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format data to match exactly the template's expected variables
      const templateParams = {
        // Tenant basic information
        tenant_firstName: formData.firstName || '',
        tenant_lastName: formData.lastName || '',
        tenant_gender: formData.gender || '',
        tenant_phone: formData.phone || '',
        tenant_sin: formData.sin || '',
        
        // Date of birth (separated to match template variables)
        tenant_dob_day: formData.birthDay || '',
        tenant_dob_month: formData.birthMonth || '',
        tenant_dob_year: formData.birthYear || '',
        
        // Current address (using camelCase as in the template)
        tenant_currentAddress: formData.currentAddress || '',
        tenant_currentApt: formData.currentApt ? `App. ${formData.currentApt}` : '',
        tenant_currentCity: formData.currentCity || '',
        tenant_currentProvince: formData.currentProvince || '',
        tenant_currentPostal: formData.currentPostal || '',
        
        // Previous address (also using camelCase)
        tenant_previousAddress: formData.previousAddress || '',
        tenant_previousApt: formData.previousApt ? `App. ${formData.previousApt}` : '',
        tenant_previousCity: formData.previousCity || '',
        tenant_previousProvince: formData.previousProvince || '',
        tenant_previousPostal: formData.previousPostal || '',
        
        // Owner information
        owner_firstName: formData.ownerFirstName || '',
        owner_lastName: formData.ownerLastName || '',
        owner_email: formData.ownerEmail || '',
        owner_phone: formData.ownerPhone || '',
        
        // Consent details (using snake_case to match template)
        consent_signature: formData.signature || '',
        consent_date_day: formData.signDay || '',
        consent_date_month: formData.signMonth || '',
        consent_date_year: formData.signYear || '',
        
        // Additional information for completeness
        submission_time: new Date().toLocaleString('fr-CA'),
        authorization_consent: formData.authorizationConsent ? 'Oui' : 'Non',
        information_accuracy: formData.informationAccuracy ? 'Oui' : 'Non'
      };

      console.log('Sending email with consent form data:', templateParams);

      await sendEmail(emailConfig.templates.consent, templateParams);
      
      toast({
        title: "Formulaire soumis avec succès",
        description: "Votre consentement a été enregistré.",
        duration: 5000,
      });
      
      navigate('/');
    } catch (error) {
      console.error('Error submitting consent form:', error);
      toast({
        title: "Erreur d'envoi",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                      <input 
                        type="checkbox" 
                        className="mr-2" 
                        id="authorizationConsent"
                        checked={formData.authorizationConsent}
                        onChange={handleInputChange}
                        required 
                      />
                      <span>J'autorise Crédit Locataire Renaissance, à titre d'agent de renseignements personnels, à obtenir mon dossier de crédit pour le propriétaire ou son représentant autorisé. Les communications pourront être envoyées depuis l'adresse locations@creditlocataire.ca.</span>
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
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Nom du locataire indiqué sur la pièce d'identité <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
                
                {/* SEXE */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Sexe</h3>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="gender" 
                        className="mr-2" 
                        value="feminin" 
                        checked={formData.gender === 'feminin'}
                        onChange={handleRadioChange}
                        required 
                        disabled={isSubmitting}
                      />
                      <span>Féminin</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="gender" 
                        className="mr-2" 
                        value="masculin" 
                        checked={formData.gender === 'masculin'}
                        onChange={handleRadioChange}
                        disabled={isSubmitting}
                      />
                      <span>Masculin</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="gender" 
                        className="mr-2" 
                        value="autre" 
                        checked={formData.gender === 'autre'}
                        onChange={handleRadioChange}
                        disabled={isSubmitting}
                      />
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
                        value={formData.birthYear}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="AAAA"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="birthMonth" className="block text-sm font-medium mb-1">Mois</label>
                      <input
                        type="text"
                        id="birthMonth"
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="JJ"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="sin" className="block text-sm font-medium mb-1">Numéro d'assurance sociale (Optionnel)</label>
                    <input
                      type="text"
                      id="sin"
                      value={formData.sin}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      disabled={isSubmitting}
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
                        value={formData.currentAddress}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Numéro civique, Rue"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="currentApt" className="block text-sm font-medium mb-1">Appartement (#) (s'il y a lieu, écrire Rez)</label>
                      <input
                        type="text"
                        id="currentApt"
                        value={formData.currentApt}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentCity" className="block text-sm font-medium mb-1">Ville <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="currentCity"
                          value={formData.currentCity}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="currentProvince" className="block text-sm font-medium mb-1">Province <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="currentProvince"
                          value={formData.currentProvince}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="currentPostal" className="block text-sm font-medium mb-1">Code Postal XXXXXX <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="currentPostal"
                        value={formData.currentPostal}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        disabled={isSubmitting}
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
                        value={formData.previousAddress}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="previousApt" className="block text-sm font-medium mb-1">Appartement (#) (s'il y a lieu, écrire Rez)</label>
                      <input
                        type="text"
                        id="previousApt"
                        value={formData.previousApt}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="previousCity" className="block text-sm font-medium mb-1">Ville</label>
                        <input
                          type="text"
                          id="previousCity"
                          value={formData.previousCity}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="previousProvince" className="block text-sm font-medium mb-1">Province</label>
                        <input
                          type="text"
                          id="previousProvince"
                          value={formData.previousProvince}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="previousPostal" className="block text-sm font-medium mb-1">Code Postal XXXXXX</label>
                      <input
                        type="text"
                        id="previousPostal"
                        value={formData.previousPostal}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        disabled={isSubmitting}
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
                        value={formData.ownerFirstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="ownerLastName" className="block text-sm font-medium mb-1">Nom</label>
                      <input
                        type="text"
                        id="ownerLastName"
                        value={formData.ownerLastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="ownerPhone" className="block text-sm font-medium mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="ownerPhone"
                      value={formData.ownerPhone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="ownerEmail" className="block text-sm font-medium mb-1">Adresse courriel du propriétaire</label>
                    <input
                      type="email"
                      id="ownerEmail"
                      value={formData.ownerEmail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      disabled={isSubmitting}
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
                      value={formData.signature}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Tapez votre nom complet comme signature"
                      required
                      disabled={isSubmitting}
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
                          value={formData.signYear}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="AAAA"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="signMonth" className="block text-sm font-medium mb-1">Mois</label>
                        <input
                          type="text"
                          id="signMonth"
                          value={formData.signMonth}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="MM"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="signDay" className="block text-sm font-medium mb-1">Jour</label>
                        <input
                          type="text"
                          id="signDay"
                          value={formData.signDay}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="JJ"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="flex items-start">
                      <input 
                        type="checkbox" 
                        className="mt-1 mr-2" 
                        id="informationAccuracy"
                        checked={formData.informationAccuracy}
                        onChange={handleInputChange}
                        required 
                        disabled={isSubmitting}
                      />
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
