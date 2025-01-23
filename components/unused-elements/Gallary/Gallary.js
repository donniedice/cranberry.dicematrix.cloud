// src/components/Gallery/Gallery.js
import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

// Import images
import Slide1 from '../../assets/images/slide1.png';
import Slide2 from '../../assets/images/slide2.png';
import Slide3 from '../../assets/images/slide3.png';
import Slide4 from '../../assets/images/slide4.png';
import Slide5 from '../../assets/images/slide5.png';
import Slide6 from '../../assets/images/slide6.png';

function Gallery() {
  const slides = [
    { src: Slide1, alt: 'Slide 1' },
    { src: Slide2, alt: 'Slide 2' },
    { src: Slide3, alt: 'Slide 3' },
    { src: Slide4, alt: 'Slide 4' },
    { src: Slide5, alt: 'Slide 5' },
    { src: Slide6, alt: 'Slide 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const autoSlideRef = useRef(null);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoSlideRef.current);
  }, [slides.length]);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setTransition(false);
      setCurrentIndex(0);
    } else if (currentIndex === -1) {
      setTransition(false);
      setCurrentIndex(slides.length - 1);
    }
    setTimeout(() => setTransition(true), 0);
  };

  return (
    <div className="gallery">
      <button className="arrow-btn arrow-left" onClick={() => setCurrentIndex((prev) => prev - 1)}>
        &#10094;
      </button>
      <div className="slide-container">
        <div
          className="slide-wrapper"
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
            transition: transition ? 'transform 1.2s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <img src={slide.src} alt={slide.alt} className="slide-image" />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow-btn arrow-right" onClick={() => setCurrentIndex((prev) => prev + 1)}>
        &#10095;
      </button>
    </div>
  );
}

export default Gallery;
