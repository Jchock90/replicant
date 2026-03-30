import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/', label: t('Inicio') },
    { to: '/about', label: t('Sobre') },
    { to: '/contact', label: t('Contacto') },
  ];

  return (
    <nav className="fixed w-full z-50 border-b border-neon-pink/20">
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-md" />
      <div className="relative container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="glitch-logo-nav relative">
            <img src="/logo.png" alt="Replicant" className="h-8 md:h-10 neon-logo" />
            <img src="/logo.png" alt="" className="glitch-nav-copy glitch-nav-1" aria-hidden="true" />
            <img src="/logo.png" alt="" className="glitch-nav-copy glitch-nav-2" aria-hidden="true" />
            <img src="/logo.png" alt="" className="glitch-nav-copy glitch-nav-3" aria-hidden="true" />
            <img src="/logo.png" alt="" className="glitch-nav-copy glitch-nav-4" aria-hidden="true" />
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs tracking-[0.3em] uppercase transition-all duration-300 ${
                isActive(to)
                  ? 'text-neon-pink neon-text'
                  : 'text-gray-500 hover:text-neon-pink'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-2 ml-4 border-l border-gray-700/50 pl-4">
            <button
              onClick={() => changeLanguage('en')}
              className={`text-xs tracking-wider transition-all ${
                i18n.language === 'en' ? 'text-neon-pink' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              EN
            </button>
            <span className="text-gray-700">/</span>
            <button
              onClick={() => changeLanguage('es')}
              className={`text-xs tracking-wider transition-all ${
                i18n.language === 'es' ? 'text-neon-pink' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 hover:text-neon-pink transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden relative overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-dark-900/95 backdrop-blur-md border-t border-neon-pink/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className={`text-xs tracking-[0.3em] uppercase transition-all ${
                isActive(to)
                  ? 'text-neon-pink neon-text'
                  : 'text-gray-500 hover:text-neon-pink'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2 border-t border-gray-800">
            <button
              onClick={() => changeLanguage('en')}
              className={`text-xs tracking-wider ${i18n.language === 'en' ? 'text-neon-pink' : 'text-gray-600'}`}
            >
              EN
            </button>
            <span className="text-gray-700">/</span>
            <button
              onClick={() => changeLanguage('es')}
              className={`text-xs tracking-wider ${i18n.language === 'es' ? 'text-neon-pink' : 'text-gray-600'}`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

