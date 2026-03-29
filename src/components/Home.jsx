import React from 'react';
import { useTranslation } from 'react-i18next';

const tracks = [
  {
    title: 'Ciberdelia - Volumen 1',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1489493561/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/track=620347450/transparent=true/',
    href: 'https://cphnkx.bandcamp.com/album/ciberdelia-volumen-1',
  },
  {
    title: 'Tender Softly Hardware',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1018582991/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/transparent=true/',
    href: 'https://r3plic4nt.bandcamp.com/album/tender-softly-hardware',
  },
  {
    title: 'deeper',
    src: 'https://bandcamp.com/EmbeddedPlayer/track=2707734680/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/transparent=true/',
    href: 'https://r3plic4nt.bandcamp.com/track/deeper',
  },
  {
    title: "it's a bad name",
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1298266587/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/transparent=true/',
    href: 'https://blipblop8bit.bandcamp.com/album/its-a-bad-name',
  },
  {
    title: 'voic3.of.natur3',
    src: 'https://bandcamp.com/EmbeddedPlayer/track=4194806735/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/transparent=true/',
    href: 'https://r3plic4nt.bandcamp.com/track/voic3-of-natur3',
  },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen cyber-grid pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-12">{t('Audio')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="group bg-dark-800/30 border border-gray-800/50 hover:border-neon-pink/30 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-neon-pink aspect-square"
            >
              <iframe
                title={track.title}
                style={{ border: 0, width: '100%', height: '100%' }}
                src={track.src}
                seamless
                loading="lazy"
              >
                <a href={track.href}>{track.title}</a>
              </iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
