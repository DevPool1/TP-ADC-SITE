import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestão de Utilizadores',
    imgSrc: require('@site/static/img/user_management.png').default,
    description: (
      <>
        Perfis seguros e personalizados para cada membro da equipa ou cliente.
      </>
    ),
  },
  {
    title: 'Base de Dados de Alimentos',
    imgSrc: require('@site/static/img/food_database.png').default,
    description: (
      <>
        CRUD completo de alimentos. Adicione, edite e remova alimentos facilmente.
      </>
    ),
  },
  {
    title: 'Diário Alimentar',
    imgSrc: require('@site/static/img/food_diary.png').default,
    description: (
      <>
        Registo diário e cálculo automático de calorias e macronutrientes.
      </>
    ),
  },
  {
    title: 'Cálculo de IMC',
    imgSrc: require('@site/static/img/bmi_calculator.png').default,
    description: (
      <>
        Monitorização de saúde com cálculo automático do Índice de Massa Corporal.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <Heading as="h2" className="text--center margin-bottom--md">📸 Galeria da Aplicação</Heading>
          <p className="text--center margin-bottom--lg" style={{color: '#666', fontSize: '1rem'}}>
            Principais funcionalidades do NutriApp
          </p>
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className={styles.galleryItem}>
                <img 
                  src={require(`@site/static/img/demo/demo-${num}.png`).default}
                  alt={`NutriApp Screenshot ${num}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
