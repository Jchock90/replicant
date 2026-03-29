import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <a
          href="https://www.instagram.com/jesusemans"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-neon-pink transition-colors duration-300"
        >
          <FaInstagram size={18} />
        </a>
        <p className="text-[10px] text-gray-600 tracking-widest">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/Jchock90"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-pink transition-colors"
          >
            JESÚS MANSILLA
          </a>
        </p>
        <div className="w-[18px]" />
      </div>
    </footer>
  );
};

export default Footer;
