import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const videos = [
  { id: 'djx--zux3lM', title: 'Video 1' },
  { id: 'jVIRP6DsL7Y', title: 'Video 2' },
  { id: 'CDIp1mrntOM', title: 'Video 3' },
  { id: 'noUZZ6DTvaE', title: 'Video 4' },
];

const images = [
  { src: '/foto1.jpg', alt: 'Live performance', description: '04>08>18 // blipblop>party>zombie>edition — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto2.jpg', alt: 'Live set', description: '01>04>2017 // blipblop>vs>nave — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto3.jpg', alt: 'Stage', description: '01>04>2017 // blipblop>vs>nave — Espacio Cultural Mi Casa, CABA' },
  { src: '/foto4.jpg', alt: 'Festival', description: '16>06>2019 // blipblop>party>cyber>punk>fest — Complejo Hook, Paraná' },
];

const Gallery = () => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage !== null) {
      const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
      };
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen cyber-grid pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="section-title text-center mb-12">{t('Galería')}</h1>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden border border-gray-800 shadow-neon-cyan">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
              title={videos[activeVideo].title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveVideo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeVideo
                    ? 'bg-neon-cyan shadow-neon-cyan w-6'
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
              className="group relative aspect-square overflow-hidden rounded-lg border border-gray-800/50 hover:border-neon-cyan/30 cursor-pointer transition-all duration-500 hover:shadow-neon-cyan"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-[10px] text-neon-cyan tracking-wider leading-relaxed">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-dark-900/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center mt-4 text-xs text-neon-cyan tracking-widest">
              {images[selectedImage].description}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full border border-neon-cyan/30 bg-dark-900 text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
