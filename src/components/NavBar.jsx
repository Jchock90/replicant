// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';
import { useTranslation } from 'react-i18next';
import UKFlag from '../assets/uk-flag.png';
import SpainFlag from '../assets/spain-flag.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-darkGray bg-opacity-80 backdrop-blur-sm p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-300 text-2xl font-bold text-opacity-90">
          <Typewriter />
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-lightGray hover:text-violet transition">{t('Galería')}</Link>
          <Link to="/audio" className="text-lightGray hover:text-violet transition">{t('Audio')}</Link>
          <Link to="/soundtrack" className="text-lightGray hover:text-violet transition">{t('Soundtrack')}</Link>
          <Link to="/contact" className="text-lightGray hover:text-violet transition">{t('Contacto')}</Link>
          
          {/* Botones de selección de idioma */}
          <div className="flex space-x-4 items-center">
            <button onClick={() => changeLanguage('en')} className="focus:outline-none">
              <img src={UKFlag} alt="English" className="h-6 w-8" />
            </button>
            <button onClick={() => changeLanguage('es')} className="focus:outline-none">
              <img src={SpainFlag} alt="Español" className="h-6 w-8" />
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-lightGray focus:outline-none" aria-label="Toggle menu">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex justify-center items-center space-x-2 mt-2">
          <Link to="/" onClick={closeMenu} className="text-lightGray hover:text-violet transition text-sm">{t('Galería')}</Link>
          <Link to="/audio" onClick={closeMenu} className="text-lightGray hover:text-violet transition text-sm">{t('Audio')}</Link>
          <Link to="/soundtrack" onClick={closeMenu} className="text-lightGray hover:text-violet transition text-sm">{t('Soundtrack')}</Link>
          <Link to="/contact" onClick={closeMenu} className="text-lightGray hover:text-violet transition text-sm">{t('Contacto')}</Link>
          
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage('en')} className="focus:outline-none">
              <img src={UKFlag} alt="English" className="h-4 w-6" />
            </button>
            <button onClick={() => changeLanguage('es')} className="focus:outline-none">
              <img src={SpainFlag} alt="Español" className="h-4 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

