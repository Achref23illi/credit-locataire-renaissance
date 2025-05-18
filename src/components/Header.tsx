
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
    <header>
      <div className="bg-navy text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">+1 (514) 555-7777</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 border-b">
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-orange rounded-md flex items-center justify-center">
              <span className="text-white font-bold">CR</span>
            </div>
            <span className="ml-2 font-bold text-navy text-lg hidden md:block">Crédit Locataire Renaissance</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-orange font-medium">Accueil</Link>
            <Link to="/a-propos" className="text-gray-800 hover:text-orange font-medium">À propos</Link>
            
            {/* Vérifications Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-orange font-medium bg-transparent hover:bg-transparent">
                    <span>Vérifications</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/demande/credit"
                            className="block py-2 px-3 hover:bg-gray-100 rounded-md"
                          >
                            Enquête de crédit en ligne
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/demande/judiciaires"
                            className="block py-2 px-3 hover:bg-gray-100 rounded-md"
                          >
                            Antécédents judiciaires au Québec
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/demande/regie"
                            className="block py-2 px-3 hover:bg-gray-100 rounded-md"
                          >
                            Vérification à la régie du logement
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/contact" className="text-gray-800 hover:text-orange font-medium">Nous rejoindre</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
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
          <div className="md:hidden bg-white border-t pt-4 pb-6">
            <div className="container-custom flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/a-propos" 
                className="text-gray-800 hover:text-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              
              {/* Mobile Vérifications Dropdown */}
              <div className="py-2">
                <div className="flex items-center justify-between text-gray-800 font-medium">
                  <span>Vérifications</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <Link 
                    to="/demande/credit" 
                    className="text-gray-700 hover:text-orange py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Enquête de crédit en ligne
                  </Link>
                  <Link 
                    to="/demande/judiciaires" 
                    className="text-gray-700 hover:text-orange py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Antécédents judiciaires au Québec
                  </Link>
                  <Link 
                    to="/demande/regie" 
                    className="text-gray-700 hover:text-orange py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vérification à la régie du logement
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-orange font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nous rejoindre
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
