import { useState } from 'react';
import artjardin from '../assets/images/artjardin.jpg';
import esserres1 from '../assets/images/esserres1.jpg';
import esserres2 from '../assets/images/esserres2.jpg';
import esserres3 from '../assets/images/esserres3.jpg';
import esserres4 from '../assets/images/esserres4.jpg';
import esserres5 from '../assets/images/esserres5.jpg';
import esserres6 from '../assets/images/esserres6.jpg';
import daimvert1 from '../assets/images/daimvert1.jpg';
import daimvert2 from '../assets/images/daimvert2.jpg';
import chmillesbriques1 from '../assets/images/chmillesbriques1.jpg';
import chmillesbriques2 from '../assets/images/chmillesbriques2.jpg';
import finalam1 from '../assets/images/finalam1.jpg';
import finalam2 from '../assets/images/finalam2.jpg';
import finalam3 from '../assets/images/finalam3.jpg';
import peuplie from '../assets/images/peuplie.jpg';
import rivery from '../assets/images/rivery.jpg';
import shooting from '../assets/images/shooting_alinda.jpg';
import arrow_back from '../assets/images/arrow_back.svg';
import arrow_forward from '../assets/images/arrow_forward.svg';

const images = [artjardin, esserres1, esserres2, esserres3, esserres4, esserres5, esserres6, daimvert1, daimvert2, chmillesbriques1, chmillesbriques2, finalam1, finalam2, finalam3, peuplie, rivery, shooting];

export function Galerie() {
    const [imageIndex, setImageIndex] = useState(0);

    const previousImage = () => {
        setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    };

    const nextImage = () => {
        setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    };

    return (
        <>
            <h2 id="galerie">Galerie</h2>
            <div className="slideshow">
                <img src={images[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
                <img
                    className="slideshow_arrow_back"
                    src={arrow_back}
                    alt="Show previous"
                    onClick={previousImage}
                />
                <img
                    className="slideshow_arrow_forward"
                    src={arrow_forward}
                    alt="Show next"
                    onClick={nextImage}
                />
            </div>
        </>
    );
}
