import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-darkGray bg-opacity-80 backdrop-blur-sm p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center text-lightGray">
        <a href="https://www.instagram.com/flow_my.tears" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-300 text-2xl" />
        </a>
        <div className="text-center text-gray-300">
        © {new Date().getFullYear()} <a className='hover:text-violet' href="https://github.com/Jchock90" target="_blank" rel="noopener noreferrer">Jesús Mansilla.</a>
        </div>
        <a href="https://linktr.ee/j3susm4nsill4" target="_blank" rel="noopener noreferrer">
          <img src="/linktree.png" alt="Linktree logo" className="h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
