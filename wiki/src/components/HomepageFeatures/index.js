import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    emoji: '🎵',
    category: 'WAH',    
    count: '5 effects',
    description: (
      <>
        Wah-wah and dynamic modulations
      </>
    ),
    link: 'docs/effects/#-wah--wah-wah-effects'
  },
  {
    emoji: '🔧',
    category: 'CMP',    
    count: '3 effects',
    description: (
      <>
        Compression and dynamics
      </>
    ),
    link: 'docs/effects/#-cmp--compression-effects'
  },
  {
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    emoji: '🚪',
    category: 'GATE',
    count: '1 effect',
    description: (
      <>
        Noise gate and suppression
      </>
    ),
    link: 'docs/effects/#-gate--noise-gate'
  },
  {
    emoji: '🎸',
    count: '18 effects',
    category: 'EFX',    
    description: (
      <>
        Distortion, overdrive, and boost
      </>
    ),
    link: 'docs/effects/#-efx--distortion--boost-effects'
  },
  {
    emoji: '⚡',
    category: 'EQ',
    count: '4 effects',
    description: (
      <>
        Equalization and filtering
      </>
    ),
    link: 'docs/effects/#-eq--equalization-effects'
  },
  {
    emoji: '🔄',
    category: 'S/R',
    count: '1 function',
    description: (
      <>
        Send & Return loop
      </>
    ),
    link: 'docs/effects/#-sr--send--return-loop'
  },
  {
    emoji: '🌊',
    category: 'MOD',
    count: '14 effects',
    description: (
      <>
        Modulation and time effects
      </>
    ),
    link: 'docs/effects/#-mod--modulation-effects'
  },
  {
    emoji: '⏰',
    category: 'DLY',
    count: '8 effects',
    description: (
      <>
        Delay and echo effects
      </>
    ),
    link: 'docs/effects/#-dly--delay-effects'
  },
  {
    emoji: '🌌',
    category: 'RVB',
    count: '6 effects',
    description: (
      <>
        Reverb and spatial effects
      </>
    ),
    link: 'docs/effects/#-rvb--reverb-effects'
  },
  {
    emoji: '🎼',
    category: 'AMP',
    count: '40+ models',
    description: (
      <>
        Amplifier simulation
      </>
    ),
    link: 'docs/amplifiers'
  },
  {
    emoji: '📢',
    category: 'IR',
    count: '30+ IRs',
    description: (
      <>
        Speaker cabinet simulations
      </>
    ),
    link: 'docs/cabinets'
  },
];

function Feature({emoji, category, count, description, link}) {
  return (
    <div className={clsx('card', styles.cardSpacing)}>
      <div className="text--center card__header">
        <span role="img" style={{fontSize: '2rem'}}>{emoji}</span>
      </div>
      <div className="text--center card__body">
        <Link to={link}><Heading as="h3">{category}</Heading></Link>
        <p className='badge badge--info text--center'>{count}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.cardsGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
