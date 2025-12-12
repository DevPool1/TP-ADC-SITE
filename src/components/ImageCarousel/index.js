import React, { useState } from 'react';
import styles from './styles.module.css';

// Importar todas as 24 imagens
const galleryImages = Array.from({ length: 24 }, (_, i) => ({
  src: require(`@site/static/img/demo/demo-${i + 1}.png`).default,
  alt: `NutriApp Screenshot ${i + 1}`,
  title: `Interface ${i + 1}`
}));

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
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
          {/* Imagem Principal */}
          <div className={styles.carouselImageWrapper}>
            <img 
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className={styles.carouselImage}
              onClick={toggleFullscreen}
            />
            
            {/* Botões de Navegação */}
            <button 
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              aria-label="Imagem anterior"
            >
              ‹
            </button>
            <button 
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={goToNext}
              aria-label="Próxima imagem"
            >
              ›
            </button>
            
            {/* Contador */}
            <div className={styles.imageCounter}>
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Indicadores (Dots) */}
          <div className={styles.dotsContainer}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Miniaturas */}
          <div className={styles.thumbnailsContainer}>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.thumbnailActive : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div className={styles.fullscreenModal} onClick={toggleFullscreen}>
          <button className={styles.closeButton}>✕</button>
          <img 
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            className={styles.fullscreenImage}
          />
          <button 
            className={`${styles.fullscreenNav} ${styles.fullscreenPrev}`}
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            ‹
          </button>
          <button 
            className={`${styles.fullscreenNav} ${styles.fullscreenNext}`}
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
