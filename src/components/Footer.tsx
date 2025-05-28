import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ArrowUp, Facebook, Instagram, Globe } from 'lucide-react';

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
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <img 
                  src="/logo.png" 
                  alt="Crédit Locataire Renaissance" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="font-bold text-white text-lg">Crédit Locataire Renaissance</span>
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
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-orange" />
                <div>
                  <div>Lun-Ven: 9h - 17h</div>
                  <div>Sam-Dim: 12h - 17h</div>
                </div>
              </li>
              <li className="flex items-start">
                <Globe className="h-5 w-5 mr-3 mt-0.5 text-orange" />
                <a 
                  href="https://creditlocataire.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange transition-colors underline"
                >
                  creditlocataire.ca
                </a>
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
            Droits d'auteur © 2025 Enquête de crédit en ligne
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
