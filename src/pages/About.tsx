
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">À propos de nous</h1>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Crédit Locataire Renaissance offre des services professionnels d'enquête de crédit 
            pour les propriétaires, employeurs et entreprises au Québec depuis plus de 15 ans.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center rounded-lg shadow-md"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange rounded-lg hidden md:flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">15+</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Notre mission</h2>
              <p className="text-gray-700 mb-6">
                Notre mission est de fournir des informations fiables et précises sur les antécédents 
                de crédit pour aider nos clients à prendre des décisions éclairées concernant 
                leurs locataires, employés ou partenaires d'affaires.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Notre expertise</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange mr-3" />
                  <span>Plus de 15 ans d'expérience dans le domaine</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange mr-3" />
                  <span>Équipe de professionnels qualifiés</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange mr-3" />
                  <span>Accès aux bases de données officielles</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange mr-3" />
                  <span>Rapports détaillés et précis</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange mr-3" />
                  <span>Service rapide et confidentiel</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi nous choisir?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold text-xl text-orange">01</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Fiabilité</h3>
                <p className="text-gray-600">
                  Nous fournissons des données fiables et vérifiées auprès des sources officielles pour 
                  garantir la précision de nos rapports.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold text-xl text-orange">02</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Rapidité</h3>
                <p className="text-gray-600">
                  Notre processus efficace vous permet d'obtenir les résultats en quelques heures, 
                  vous permettant de prendre des décisions sans délai.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold text-xl text-orange">03</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Confidentialité</h3>
                <p className="text-gray-600">
                  Nous respectons les normes les plus strictes en matière de confidentialité 
                  et de protection des données personnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
