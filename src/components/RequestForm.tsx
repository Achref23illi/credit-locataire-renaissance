import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { sendEmail, emailConfig } from '@/utils/emailjs';

type RequestFormProps = {
  type: 'credit' | 'judiciaires' | 'regie';
  title: string;
};

const RequestForm = ({ type, title }: RequestFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Tenant information
    tenantFirstName: '',
    tenantLastName: '',
    tenantDob: '',
    tenantPhone: '',
    tenantAddress: '',
    // Owner information
    ownerFirstName: '',
    ownerLastName: '',
    ownerEmail: '',
    ownerPhone: '',
    // Consent
    consentGiven: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        request_type: type,
        request_title: title,
        tenant_firstName: formData.tenantFirstName,
        tenant_lastName: formData.tenantLastName,
        tenant_dob: formData.tenantDob,
        tenant_phone: formData.tenantPhone,
        tenant_address: formData.tenantAddress,
        owner_firstName: formData.ownerFirstName,
        owner_lastName: formData.ownerLastName,
        owner_email: formData.ownerEmail,
        owner_phone: formData.ownerPhone,
        submission_time: new Date().toLocaleString()
      };

      await sendEmail(emailConfig.templates.request, templateParams);
      
      toast({
        title: "Demande envoyée avec succès",
        description: "Nous traiterons votre demande dans les plus brefs délais.",
        duration: 5000,
      });
      
      navigate('/');
    } catch (error) {
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
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Tenant Information */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-4 pb-2 border-b">Informations sur le locataire</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="tenantFirstName" className="block mb-2 text-gray-700 font-medium">Prénom</label>
              <input 
                type="text" 
                id="tenantFirstName" 
                value={formData.tenantFirstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="tenantLastName" className="block mb-2 text-gray-700 font-medium">Nom</label>
              <input 
                type="text" 
                id="tenantLastName" 
                value={formData.tenantLastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="tenantDob" className="block mb-2 text-gray-700 font-medium">Date de naissance</label>
              <input 
                type="date" 
                id="tenantDob" 
                value={formData.tenantDob}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="tenantPhone" className="block mb-2 text-gray-700 font-medium">Téléphone</label>
              <input 
                type="tel" 
                id="tenantPhone" 
                value={formData.tenantPhone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4 md:col-span-2">
              <label htmlFor="tenantAddress" className="block mb-2 text-gray-700 font-medium">Adresse actuelle</label>
              <input 
                type="text" 
                id="tenantAddress" 
                value={formData.tenantAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>
        
        {/* Owner Information */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4 pb-2 border-b">Vos informations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="ownerFirstName" className="block mb-2 text-gray-700 font-medium">Prénom</label>
              <input 
                type="text" 
                id="ownerFirstName" 
                value={formData.ownerFirstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="ownerLastName" className="block mb-2 text-gray-700 font-medium">Nom</label>
              <input 
                type="text" 
                id="ownerLastName" 
                value={formData.ownerLastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="ownerEmail" className="block mb-2 text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                id="ownerEmail" 
                value={formData.ownerEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="ownerPhone" className="block mb-2 text-gray-700 font-medium">Téléphone</label>
              <input 
                type="tel" 
                id="ownerPhone" 
                value={formData.ownerPhone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="flex items-start space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="mt-1" 
              id="consentGiven"
              checked={formData.consentGiven}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <span className="text-gray-700">
              J'ai obtenu le consentement du candidat pour effectuer cette vérification et j'accepte les termes et conditions.
            </span>
          </label>
        </div>
        
        <button 
          type="submit"
          className="btn-primary w-full flex justify-center items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {isSubmitting ? 'Traitement en cours...' : 'Soumettre la demande'}
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
