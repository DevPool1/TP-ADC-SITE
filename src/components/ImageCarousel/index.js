import React from 'react';
import styles from './styles.module.css';

export default function ImageCarousel() {
  // Carregar todas as 24 imagens
  const images = Array.from({ length: 24 }, (_, i) => ({
    src: require('@site/static/img/demo/demo-' + (i + 1) + '.png').default,
    alt: `NutriApp Screenshot ${i + 1}`
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
