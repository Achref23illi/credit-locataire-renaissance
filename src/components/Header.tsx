import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Instagram, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-3">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-orange" />
              <span className="text-sm font-medium">+1 (514) 545-2839</span>
            </div>
            <div className="hidden sm:block text-sm text-gray-300">
              Vérifications de crédit professionnelles • Service rapide et fiable
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link 
              to="#" 
              aria-label="Facebook"
              className="p-1.5 rounded-full hover:bg-slate-700 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link 
              to="#" 
              aria-label="Instagram"
              className="p-1.5 rounded-full hover:bg-slate-700 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="Crédit Locataire Renaissance" 
                className="w-16 h-16 object-contain drop-shadow-sm"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-slate-800 leading-tight">
                Crédit Locataire
              </h1>
              <p className="text-sm text-orange font-semibold tracking-wide">
                Renaissance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-slate-700 hover:text-orange hover:bg-orange/5 rounded-lg font-medium transition-all duration-200"
            >
              Accueil
            </Link>
            <Link 
              to="/a-propos" 
              className="px-4 py-2 text-slate-700 hover:text-orange hover:bg-orange/5 rounded-lg font-medium transition-all duration-200"
            >
              À propos
            </Link>
            
            {/* Vérifications Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-slate-700 hover:text-orange hover:bg-orange/5 font-medium bg-transparent hover:bg-orange/5 data-[state=open]:bg-orange/10 data-[state=open]:text-orange rounded-lg transition-all duration-200">
                    Vérifications
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded-xl p-0 min-w-[280px]">
                    <ul className="p-3 space-y-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/demande/credit"
                            className="block py-3 px-4 hover:bg-orange/5 hover:text-orange rounded-lg transition-all duration-200 group"
                          >
                            <div className="font-medium text-slate-800 group-hover:text-orange">
                              Enquête de crédit en ligne
                            </div>
                            <div className="text-sm text-slate-500 mt-1">
                              Vérification complète du dossier de crédit
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/demande/judiciaires"
                            className="block py-3 px-4 hover:bg-orange/5 hover:text-orange rounded-lg transition-all duration-200 group"
                          >
                            <div className="font-medium text-slate-800 group-hover:text-orange">
                              Antécédents judiciaires
                            </div>
                            <div className="text-sm text-slate-500 mt-1">
                              Recherche au registre judiciaire du Québec
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/demande/regie"
                            className="block py-3 px-4 hover:bg-orange/5 hover:text-orange rounded-lg transition-all duration-200 group"
                          >
                            <div className="font-medium text-slate-800 group-hover:text-orange">
                              Régie du logement
                            </div>
                            <div className="text-sm text-slate-500 mt-1">
                              Vérification des antécédents locatifs
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2.5 bg-orange text-white hover:bg-orange/90 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Nous rejoindre
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 mt-6">
            <div className="container-custom py-6 space-y-4">
              <Link 
                to="/" 
                className="block py-3 px-4 text-slate-700 hover:text-orange hover:bg-orange/5 font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/a-propos" 
                className="block py-3 px-4 text-slate-700 hover:text-orange hover:bg-orange/5 font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              
              {/* Mobile Vérifications Section */}
              <div className="border-t border-gray-100 pt-4">
                <div className="px-4 py-2 text-slate-800 font-semibold text-sm uppercase tracking-wide">
                  Vérifications
                </div>
                <div className="space-y-2 mt-2">
                  <Link 
                    to="/demande/credit" 
                    className="block py-3 px-4 text-slate-600 hover:text-orange hover:bg-orange/5 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">Enquête de crédit en ligne</div>
                    <div className="text-sm text-slate-400 mt-1">Dossier de crédit complet</div>
                  </Link>
                  <Link 
                    to="/demande/judiciaires" 
                    className="block py-3 px-4 text-slate-600 hover:text-orange hover:bg-orange/5 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">Antécédents judiciaires</div>
                    <div className="text-sm text-slate-400 mt-1">Registre judiciaire du Québec</div>
                  </Link>
                  <Link 
                    to="/demande/regie" 
                    className="block py-3 px-4 text-slate-600 hover:text-orange hover:bg-orange/5 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="font-medium">Régie du logement</div>
                    <div className="text-sm text-slate-400 mt-1">Antécédents locatifs</div>
                  </Link>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/contact" 
                  className="block py-3 px-6 bg-orange text-white hover:bg-orange/90 font-medium rounded-lg text-center transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nous rejoindre
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
