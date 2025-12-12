import React from 'react';
import styles from './styles.module.css';

export default function ImageCarousel() {
  // Selecionar apenas 8 screenshots representativos
  const selectedImages = [1, 3, 5, 8, 12, 15, 18, 21];
  
  const images = selectedImages.map((num) => ({
    src: require('@site/static/img/demo/demo-' + num + '.png').default,
    alt: `NutriApp Screenshot ${num}`
  }));

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.galleryImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
