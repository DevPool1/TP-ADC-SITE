import React from 'react';
import styles from './styles.module.css';

const stats = [
  {
    number: '2000+',
    label: 'Alimentos',
    icon: '🍎',
    description: 'Base de dados nutricional completa'
  },
  {
    number: '500+',
    label: 'Utilizadores',
    icon: '👥',
    description: 'Comunidade ativa e crescente'
  },
  {
    number: '99.9%',
    label: 'Uptime',
    icon: '⚡',
    description: 'Disponibilidade garantida'
  },
  {
    number: '4.9/5',
    label: 'Avaliação',
    icon: '⭐',
    description: 'Classificação dos utilizadores'
  },
];

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">
          NutriApp em Números
        </h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDescription}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
