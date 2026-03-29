import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const customArrowStyles = `
    absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-xl p-2
  `;

  return (
    <div className="container mx-auto p-4 pt-20 text-center overflow-hidden relative">
      <h1 className="text-xl my-1 mt-20 text-gray-300">{t('Audio')}</h1>

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
        {/* Contenido original con iframes */}
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="Convergent evolution of life"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2709675676/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://jesusmansillapna.bandcamp.com/track/convergent-evolution-of-life">
                Convergent evolution of life by Jesús Mansilla
              </a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1489493561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=620347450/transparent=true/"
              seamless
              title="Ciberdelia - Volumen 1"
            >
              <a href="https://cphnkx.bandcamp.com/album/ciberdelia-volumen-1">
                Ciberdelia - Volumen 1 de replicant
              </a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="Take care of yourself"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1385229834/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://jesusmansillapna.bandcamp.com/album/take-care-of-yourself">Take care of yourself by Jesús Mansilla</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="voic3.of.natur3"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=4194806735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://r3plic4nt.bandcamp.com/track/voic3-of.natur3">voic3.of.natur3 by Replicant</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="deeper"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2707734680/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://r3plic4nt.bandcamp.com/track/deeper">deeper by Replicant</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="Tender Softly Hardware"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1018582991/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://r3plic4nt.bandcamp.com/album/tender-softly-hardware">Tender Softly Hardware by Replicant</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="Sleep destroy dreams"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2427300278/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://kewlsounds.bandcamp.com/track/sleep-destroy-dreams">Sleep destroy dreams by Kewl</a>
            </iframe>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-center">
            <iframe
              title="it's a bad name"
              style={{ border: 0, width: '245px', height: '329px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1298266587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://blipblop8bit.bandcamp.com/album/its-a-bad-name">it's a bad name by Replicant</a>
            </iframe>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
