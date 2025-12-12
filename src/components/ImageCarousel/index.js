import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Carregar todas as 24 imagens
  const images = Array.from({ length: 24 }, (_, i) => ({
    src: require('@site/static/img/demo/demo-' + (i + 1) + '.png').default,
    alt: `NutriApp Screenshot ${i + 1}`
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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            aria-label="Imagem anterior"
          >
            ‹
          </button>

          <div className={styles.imageContainer}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={styles.carouselImage}
              onClick={toggleFullscreen}
              style={{ cursor: 'pointer' }}
            />
            <div className={styles.imageCounter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="Próxima imagem"
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

        <div className={styles.thumbnailsContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className={styles.fullscreenModal} onClick={toggleFullscreen}>
          <button className={styles.closeButton} aria-label="Fechar">
            ✕
          </button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={styles.fullscreenImage}
          />
          <button 
            className={`${styles.fullscreenNav} ${styles.prevFullscreen}`}
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            ‹
          </button>
          <button 
            className={`${styles.fullscreenNav} ${styles.nextFullscreen}`}
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
