
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons bientôt",
      duration: 3000,
    });
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
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full"
                >
                  Envoyer le message
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
                      <p className="text-gray-300">+1 (514) 555-7777</p>
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
                      <p className="text-gray-300">info@enquetedecredit.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange/20 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Adresse</h3>
                      <p className="text-gray-300">1234 Rue Principale, Montréal, QC H1A 1A1</p>
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
                    <span className="text-gray-700">Samedi</span>
                    <span className="font-medium">Fermé</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Dimanche</span>
                    <span className="font-medium">Fermé</span>
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
