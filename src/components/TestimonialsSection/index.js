import React from 'react';
import styles from './styles.module.css';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Personal Trainer',
    avatar: '👩‍🏫',
    rating: 5,
    text: 'O NutriApp revolucionou a forma como acompanho a nutrição dos meus clientes. Interface intuitiva e dados precisos!'
  },
  {
    name: 'João Santos',
    role: 'Atleta Amador',
    avatar: '🏃‍♂️',
    rating: 5,
    text: 'Perdi 15kg em 6 meses com ajuda do NutriApp. O diário alimentar e cálculos automáticos são incríveis!'
  },
  {
    name: 'Ana Costa',
    role: 'Nutricionista',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'Recomendo a todos os meus pacientes. A base de dados é extensa e os relatórios ajudam muito nas consultas.'
  },
];

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
          ⭐
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className="text--center margin-bottom--md">
          O Que Dizem os Nossos Utilizadores
        </h2>
        <p className="text--center margin-bottom--lg" style={{color: '#666', fontSize: '1.1rem'}}>
          Milhares de pessoas já transformaram a sua saúde com o NutriApp
        </p>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.testimonialAvatar}>{testimonial.avatar}</div>
              <StarRating rating={testimonial.rating} />
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorName}>{testimonial.name}</div>
                <div className={styles.authorRole}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
