import React from 'react';
import { useTranslation } from 'react-i18next';

const links = [
  {
    category: 'Prensa',
    items: [
      { label: 'prensa_1', url: 'https://170escalones.com/musica-reciclada/', source: '170 Escalones' },
      { label: 'prensa_2', url: 'https://170escalones.com/sonidos-desde-lo-profundo-de-la-urbe-digital/', source: '170 Escalones' },
      { label: 'IMDb', url: 'https://www.imdb.com/es/name/nm11611741/', source: 'IMDb' },
    ],
  },
  {
    category: 'Podcast',
    items: [
      { label: 'podcast_1', url: 'https://www.ivoox.com/anacrogames-tape-16-vgms-chiptune-local-audios-mp3_rf_55653419_1.html', source: 'iVoox' },
    ],
  },
  {
    category: 'Canal',
    items: [
      { label: 'canal_1', url: 'https://www.youtube.com/@r3plic4nt', source: 'YouTube' },
    ],
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen cyber-grid pt-12 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title text-center mb-12">{t('Sobre')}</h1>

        {/* Bio */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Replicant"
              className="h-16 md:h-20 neon-logo"
            />
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-300 text-center max-w-2xl mx-auto">
            {t('about_bio')}
          </p>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {links.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-neon-pink mb-3 neon-text">
                {t(category)}
              </h2>
              <div className="space-y-2">
                {items.map(({ label, url, source }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-dark-800/30 border border-gray-800/50 hover:border-neon-pink/30 px-4 py-3 transition-all duration-300 hover:shadow-neon-pink"
                  >
                    <span className="text-xs text-gray-300 group-hover:text-neon-pink transition-colors">
                      {t(label)}
                    </span>
                    <span className="text-[10px] text-gray-600 tracking-wider">
                      {source} ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
