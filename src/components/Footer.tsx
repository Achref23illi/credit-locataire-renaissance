
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange rounded-md flex items-center justify-center">
                <span className="text-white font-bold">CR</span>
              </div>
              <span className="ml-2 font-bold text-white text-lg">Crédit Locataire Renaissance</span>
            </div>
            <p className="text-gray-300 mb-6">
              Services professionnels d'enquête de crédit pour propriétaires, employeurs et entreprises au Québec.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-orange" />
                <span>+1 (514) 545-2839</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-orange" />
                <span>info@creditlocataire.ca</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-orange" />
                <span>1234 Rue Principale, Montréal, QC H1A 1A1</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-orange" />
                <span>Lun-Ven: 9h  - 17h</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-orange transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange transition-colors">
                  Nous rejoindre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange transition-colors">
                  Vérifications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Droits d'auteur © 2023 Enquête de crédit en ligne
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
