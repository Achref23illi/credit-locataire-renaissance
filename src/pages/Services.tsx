
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';
import { Check, FileText, Building, Gavel } from 'lucide-react';

const Services = () => {
  return (
    <div>
      <Header />
      
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Nos services de vérification</h1>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Découvrez nos différents services pour vous aider à prendre des décisions éclairées 
            concernant vos futurs locataires ou partenaires d'affaires.
          </p>
          
          {/* Service 1 */}
          <div className="mb-20">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-[url('https://images.unsplash.com/photo-1487958449943-2229e8be8625')] bg-cover bg-center h-64 md:h-auto"></div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-10 w-10 text-orange mr-4" />
                    <h2 className="text-2xl font-bold">Enquête de crédit complète</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Notre service d'enquête de crédit vous fournit un rapport complet sur la situation financière 
                    et les antécédents de crédit de votre futur locataire, vous permettant d'évaluer sa capacité 
                    à payer le loyer régulièrement.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-3">Le rapport inclut:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Score de crédit</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Historique de paiement</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Dettes actuelles</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Faillites ou propositions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Vérification d'emploi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Validation d'identité</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <span className="text-2xl font-bold text-orange">49,95$</span>
                      <span className="text-gray-600 ml-2">par enquête</span>
                    </div>
                    <Link to="/demande/credit" className="btn-primary">
                      Demander une enquête
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="mb-20">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center h-64 md:h-auto"></div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center mb-6">
                    <Gavel className="h-10 w-10 text-orange mr-4" />
                    <h2 className="text-2xl font-bold">Vérification des antécédents judiciaires</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Ce service vous permet de savoir si votre futur locataire a été impliqué dans 
                    des poursuites judiciaires au Québec, y compris les litiges civils, les poursuites 
                    pénales et autres procédures légales.
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-3">Le rapport inclut:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Poursuites civiles</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Infractions criminelles</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Litiges avec des propriétaires précédents</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Jugements rendus</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Procédures en cours</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <span className="text-2xl font-bold text-orange">39,95$</span>
                      <span className="text-gray-600 ml-2">par vérification</span>
                    </div>
                    <Link to="/demande/judiciaires" className="btn-primary">
                      Demander une vérification
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 3 */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center h-64 md:h-auto"></div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center mb-6">
                    <Building className="h-10 w-10 text-orange mr-4" />
                    <h2 className="text-2xl font-bold">Vérification à la Régie du logement</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Ce service vous permet de vérifier si votre futur locataire a eu des différends 
                    avec des propriétaires antérieurs qui ont été portés devant le Tribunal administratif 
                    du logement (anciennement la Régie du logement).
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-3">Le rapport inclut:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Plaintes pour non-paiement</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Avis d'éviction</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Litiges avec les propriétaires</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Décisions rendues</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-orange mr-2" />
                      <span>Cas en cours</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <span className="text-2xl font-bold text-orange">29,95$</span>
                      <span className="text-gray-600 ml-2">par vérification</span>
                    </div>
                    <Link to="/demande/regie" className="btn-primary">
                      Demander une vérification
                    </Link>
                  </div>
                </div>
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

export default Services;
