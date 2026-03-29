import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const images = [
    { src: '/foto1.jpg', alt: 'Foto 1', description: '04>08>18>blipblop>party>zombie>edition Espacio Cultural Mi Casa c.a.b.a' },
    { src: '/foto2.jpg', alt: 'Foto 2', description: '01>04>2017>blipblop>vs>nave Espacio Cultural Mi Casa c.a.b.a' },
    { src: '/foto3.jpg', alt: 'Foto 3', description: '01>04>2017>blipblop>vs>nave Espacio Cultural Mi Casa c.a.b.a' },
    { src: '/foto4.jpg', alt: 'Foto 4', description: '16>06>2019>blipblop>party>cyber>punk>fest Complejo Hook paraná' },
  ];

  const openModal = (image, description) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
    setSelectedDescription('');
  };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const customArrowStyles = `
    absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-xl bg-opacity-50 p-2
  `;

  return (
    <div className="container mx-auto p-4 pt-20 text-center">
      <h1 className="text-xl my-1 mt-20 mb-8 text-gray-300">{t('Galería')}</h1>
      <div className="my-8">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          swipeable
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} className={`${customArrowStyles} left-0`}>
                &#9664;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className={`${customArrowStyles} right-0`}>
                &#9654;
              </button>
            )
          }
        >
          <div className="flex justify-center items-center w-[350px] md:w-[500px] lg:w-[600px] mx-auto h-80">
            <iframe
              className="mx-auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/djx--zux3lM?si=92RWcbFtz1UeyZ8E"
              title="YouTube video player"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '100%' }}
            ></iframe>
          </div>
          <div className="flex justify-center items-center  w-[350px] md:w-[500px] lg:w-[600px] mx-auto h-80">
            <iframe
              className="mx-auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jVIRP6DsL7Y"
              title="YouTube video player"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '100%' }}
            ></iframe>
          </div>
          <div className="flex justify-center items-center  w-[350px] md:w-[500px] lg:w-[600px] mx-auto h-80">
            <iframe
              className="mx-auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CDIp1mrntOM"
              title="YouTube video player"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '100%' }}
            ></iframe>
          </div>
          <div className="flex justify-center items-center  w-[350px] md:w-[500px] lg:w-[600px] mx-auto h-80">
            <iframe
              className="mx-auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/noUZZ6DTvaE"
              title="YouTube video player"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '100%' }}
            ></iframe>
          </div>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(image.src, image.description)}
              className="cursor-pointer flex justify-center items-center w-[300px] md:w-[400px] lg:w-[600px] mx-auto h-80"
            >
              <img src={image.src} alt={image.alt} className="mx-auto max-h-full object-contain" />
            </div>
          ))}

          
        </Carousel>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full md:max-w-screen-sm md:max-h-screen-sm" />
            <p className="text-white text-center mt-4">{selectedDescription}</p>
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-3xl bg-black bg-opacity-75 p-2 rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
