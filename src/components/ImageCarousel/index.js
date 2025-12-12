import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Selecionar 8 screenshots representativos
  const selectedImages = [1, 3, 5, 8, 12, 15, 18, 21];
  
  const images = selectedImages.map((num) => ({
    src: require('@site/static/img/demo/demo-' + num + '.png').default,
    alt: `NutriApp Screenshot ${num}`
  }));

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <button 
          className={styles.navButton}
          onClick={goToPrevious}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className={styles.imageContainer}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={styles.carouselImage}
          />
          <span className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button 
          className={styles.navButton}
          onClick={goToNext}
          aria-label="Próximo"
        >
          ›
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
