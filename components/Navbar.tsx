import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apartments', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
                <Building2 className="h-8 w-8 text-stone-800" />
                <span className="font-serif text-2xl font-bold tracking-widest text-stone-900">THE ROW</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-stone-900 font-bold border-b-2 border-stone-900 pb-1' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
                to="/booking"
                className="bg-stone-900 text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors duration-300 shadow-md"
            >
                Check Availability
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-800 hover:text-stone-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium text-center ${
                    isActive(link.path) ? 'text-stone-900 bg-stone-50' : 'text-stone-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-stone-900 text-white px-3 py-4 text-base font-medium uppercase tracking-widest mt-4"
            >
                Check Availability
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;