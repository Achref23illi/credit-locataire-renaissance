import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sendEmail, emailConfig } from '@/utils/emailjs';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      await sendEmail(emailConfig.templates.contact, templateParams);
      
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons bientôt",
        duration: 3000,
      });
      
      resetForm();
    } catch (error) {
      toast({
        title: "Erreur d'envoi",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contactez-nous</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Vous avez des questions concernant nos services d'enquête de crédit? 
            N'hésitez pas à nous contacter. Notre équipe est là pour vous aider.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : "Envoyer le message"}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-navy text-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-orange/20 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Téléphone</h3>
                      <p className="text-gray-300">+1 (514) 545-2839</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange/20 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-gray-300">info@creditlocataire.ca</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Heures d'ouverture</h2>
                
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Lundi - Vendredi</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Samedi - Dimanche</span>
                    <span className="font-medium">12:00 - 17:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
