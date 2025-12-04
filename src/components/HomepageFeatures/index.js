import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Git Push Vegetais',
    Svg: require('@site/static/img/undraw_eating-pasta_96tb.svg').default,
    description: (
      <>
        Adiciona saúde ao teu repositório corporal. A nossa app ajuda-te a fazer 
        o <i>commit</i> diário de vitaminas e nutrientes essenciais.
      </>
    ),
  },
  {
    title: 'Git Ignore Gorduras',
    Svg: require('@site/static/img/undraw_cancel_7zdh.svg').default,
    description: (
      <>
        Filtra o que não interessa. Define regras no teu ficheiro 
        <code>.dietignore</code> e mantém o foco numa alimentação limpa e eficiente.
      </>
    ),
  },
  {
    title: 'Pull Request de Receitas',
    Svg: require('@site/static/img/undraw_cooking_j2pu.svg').default,
    description: (
      <>
        Colabora com a comunidade! Partilha as tuas receitas, faz <i>fork</i> 
        de planos de nutrição e melhora a tua versão a cada dia.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
