import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Splash = ({ onEnter }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleEnter = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      onEnter();
    }, 800);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Dark blurred backdrop */}
      <div className="absolute inset-0 backdrop-blur-xl" style={{
        background: 'linear-gradient(rgba(10, 10, 15, 0.82), rgba(10, 10, 15, 0.86))'
      }} />

      {/* Scanlines on splash */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)'
      }} />

      {/* Cyber grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(232,122,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,122,204,0.04) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none splash-particles" />

      {/* Neon horizontal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="splash-line splash-line-1" />
        <div className="splash-line splash-line-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Replicant"
          className="splash-logo neon-logo w-[70vw] md:w-[45vw] lg:w-[35vw] max-w-[600px]"
        />

        {/* Enter button */}
        <button
          onClick={handleEnter}
          className="splash-btn px-10 py-3 text-xs tracking-[0.4em] uppercase border border-neon-pink/40 text-neon-pink hover:bg-neon-pink/10 transition-all duration-500"
        >
          {t('Entrar')}
        </button>
      </div>
    </div>
  );
};

export default Splash;
