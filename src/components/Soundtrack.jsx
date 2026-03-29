import React from 'react';
import { useTranslation } from 'react-i18next';

const Soundtrack = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen cyber-grid pt-28 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="section-title mb-4">{t('Colaboraciones')}</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-widest mb-8 neon-text">
          {t('CONSUME')}
        </h2>
        <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 shadow-neon-pink">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/krlgGyioDCE"
            title="CONSUME"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Soundtrack;
