import React, { useState, useEffect, useCallback } from 'react';
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
  { src: '/foto1.jpg', alt: 'Live performance', description: '04>08>18 // blipblop>party>zombie>edition — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto2.jpg', alt: 'Live set', description: '01>04>2017 // blipblop>vs>nave — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto3.jpg', alt: 'Stage', description: '01>04>2017 // blipblop>vs>nave — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto4.jpg', alt: 'Festival', description: '16>06>2019 // blipblop>party>cyber>punk>fest — Complejo Hook, Paraná' },
];

const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="text-neon-pink hover:text-white transition-colors text-3xl md:text-4xl leading-none px-2"
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

  const prevImage = useCallback(() => {
    setSelectedImage((p) => (p - 1 + images.length) % images.length);
  }, []);
  const nextImage = useCallback(() => {
    setSelectedImage((p) => (p + 1) % images.length);
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      const handleKey = (e) => {
        if (e.key === 'Escape') setSelectedImage(null);
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      };
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
      };
    }
  }, [selectedImage, prevImage, nextImage]);

  return (
    <div className="min-h-screen cyber-grid pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

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
              className="group flex items-center justify-center bg-white/10 border border-gray-800/50 hover:border-neon-pink/30 overflow-hidden transition-all duration-500 hover:shadow-neon-pink aspect-square"
            >
              <img
                src="/bandcamp-logotype-color-32.png"
                alt="Bandcamp"
                className="w-2/3 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </section>

        {/* ── Galería ── */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">{t('Galería')}</h2>

          {/* Video Carousel */}
          <div className="mb-16">
            <div className="flex items-center gap-3 max-w-3xl mx-auto">
              <Arrow direction="prev" onClick={prevVideo} />
              <div className="flex-1 relative aspect-video overflow-hidden border border-gray-800 shadow-neon-pink">
                <iframe
                  className="absolute inset-0 w-full h-full"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-dark-900/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-neon-pink hover:text-white transition-colors text-3xl md:text-4xl leading-none px-2 z-10"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-center mt-4 text-xs text-neon-pink tracking-widest">
              {images[selectedImage].description}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center border border-neon-pink/30 bg-dark-900 text-neon-pink hover:bg-neon-pink hover:text-dark-900 transition-all text-sm"
            >
              ✕
            </button>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-neon-pink hover:text-white transition-colors text-3xl md:text-4xl leading-none px-2 z-10"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Inicio;
