import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const tracks = [
  {
    title: 'voic3.of.natur3',
    src: 'https://bandcamp.com/EmbeddedPlayer/track=4194806735/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/transparent=true/',
    href: 'https://r3plic4nt.bandcamp.com/track/voic3-of-natur3',
  },
  {
    title: 'Ciberdelia - Volumen 1',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1489493561/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/track=620347450/transparent=true/',
    href: 'https://cphnkx.bandcamp.com/album/ciberdelia-volumen-1',
  },
  {
    title: 'deeper',
    src: 'https://bandcamp.com/EmbeddedPlayer/track=2707734680/size=large/bgcol=0a0a0f/linkcol=E87ACC/tracklist=false/transparent=true/',
    href: 'https://r3plic4nt.bandcamp.com/track/deeper',
  },
];

const videos = [
  { id: 'CDIp1mrntOM', title: 'Video 1' },
  { id: 'jVIRP6DsL7Y', title: 'Video 2' },
  { id: '295JSFEC5I8', title: 'Video 3' },
  { id: 'djx--zux3lM', title: 'Video 4' },
  { id: 'noUZZ6DTvaE', title: 'Video 5' },
];

const images = [
  { src: '/foto2.jpg', alt: 'Live set', description: '02>10>2022 // Flash>Party — El Maquinal, CABA' },
  { src: '/foto1.jpg', alt: 'Live performance', description: '04>08>18 // blipblop>party>zombie>edition — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto3.jpg', alt: 'Stage', description: '01>04>2017 // blipblop>vs>nave — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto4.jpg', alt: 'Festival', description: '16>06>2019 // blipblop>party>cyber>punk>fest — Complejo Hook, Paraná' },
];

const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex text-neon-pink hover:text-white transition-colors text-4xl md:text-5xl leading-none px-3 md:px-5 flex-shrink-0 items-center"
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
  >
    {direction === 'prev' ? '‹' : '›'}
  </button>
);

const Inicio = () => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevVideo = () => setActiveVideo((p) => (p - 1 + videos.length) % videos.length);
  const nextVideo = () => setActiveVideo((p) => (p + 1) % videos.length);

  const touchStart = useRef(null);
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) nextVideo();
    else if (diff < -50) prevVideo();
    touchStart.current = null;
  };

  useEffect(() => {
    if (selectedImage !== null) {
      const handleKey = (e) => {
        if (e.key === 'Escape') setSelectedImage(null);
      };
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
      };
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen cyber-grid pt-12 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── R3PLIC4NT ── */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="overflow-hidden border border-gray-800 shadow-neon-pink transition-all duration-500 hover:border-neon-pink/30">
              <img
                src="/R3PLIC4NT-3_solido2.png"
                alt="R3PLIC4NT"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-xs md:text-sm text-gray-400 leading-relaxed">R3PLIC4NT por <a href="https://www.instagram.com/vulpixl" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:underline">VULPIXL</a></p>
          </div>
        </section>

        {/* ── Audio ── */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">{t('Audio')}</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tracks.map((track, i) => (
              <div
                key={i}
                className="group bg-dark-800/30 border border-gray-800/50 hover:border-neon-pink/30 overflow-hidden transition-all duration-500 hover:shadow-neon-pink aspect-square"
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
            <a
              href="https://r3plic4nt.bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center border border-gray-800/50 hover:border-neon-pink/30 overflow-hidden transition-all duration-500 hover:shadow-neon-pink aspect-square"
              style={{ backgroundColor: 'rgba(10, 10, 15, 0.8)' }}
            >
              <img
                src="/bandcamp-logotype-light-512.png"
                alt="Bandcamp"
                className="w-2/3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </section>

        {/* ── Galería ── */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">{t('Galería')}</h2>

          {/* Video Carousel */}
          <div className="mb-16">
            <div className="flex items-center justify-center">
              <Arrow direction="prev" onClick={prevVideo} />
              <div
                className="max-w-3xl w-full relative aspect-video overflow-hidden border border-gray-800 shadow-neon-pink"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <iframe
                  className="absolute inset-0 w-full h-full pointer-events-none md:pointer-events-auto"
                  src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
                  title={videos[activeVideo].title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <Arrow direction="next" onClick={nextVideo} />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`h-1.5 transition-all duration-300 ${
                    i === activeVideo
                      ? 'bg-neon-pink shadow-neon-pink w-6'
                      : 'bg-gray-700 hover:bg-gray-500 w-1.5'
                  }`}
                  aria-label={`Video ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Photos Grid */}
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(i)}
                className="group relative aspect-square overflow-hidden border border-gray-800/50 hover:border-neon-pink/30 cursor-pointer transition-all duration-500 hover:shadow-neon-pink"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Colaboraciones ── */}
        <section>
          <h2 className="section-title text-center mb-4">{t('Colaboraciones')}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-widest mb-8 neon-text">
              {t('CONSUME')}
            </h3>
            <div className="relative aspect-video overflow-hidden border border-gray-800 shadow-neon-pink">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/krlgGyioDCE"
                title="CONSUME"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-6 text-xs md:text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
              {t('consume_desc')}
            </p>
          </div>
        </section>
      </div>

      {/* Lightbox — vertical scroll */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-dark-900/95 backdrop-blur-sm z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-neon-pink/30 bg-dark-900 text-neon-pink hover:bg-neon-pink hover:text-dark-900 transition-all text-sm z-10"
          >
            ✕
          </button>
          <div
            className="h-full overflow-y-auto snap-y snap-mandatory py-[10vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((image, i) => (
              <div
                key={i}
                className="snap-start flex flex-col items-center justify-center px-4 pb-[15vh]"
                ref={i === selectedImage ? (el) => el?.scrollIntoView({ block: 'start' }) : undefined}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full max-h-[75vh] object-contain"
                />
                <p className="text-center mt-4 text-xs text-neon-pink tracking-widest">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
