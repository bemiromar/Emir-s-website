import styles from './Ticker.module.css';

const ITEMS = [
  { text: 'EMIR BINDWEMBA' },
  { text: 'أمير', cls: 'gold' },
  { text: 'INGÉNIEUR ÉNERGIE' },
  { text: 'طاقة', cls: 'green' },
  { text: 'VILLES DU FUTUR' },
  { text: '220 kV', cls: 'gold' },
  { text: 'TRANSITION ÉNERGÉTIQUE' },
  { text: '1.5°C', cls: 'green' },
  { text: 'ECAM-EPMI' },
  { text: '100% RE', cls: 'gold' },
  { text: 'ÉNERGIE DURABLE' },
  { text: '2050', cls: 'green' },
];

const Row = () => (
  <>
    {ITEMS.map((item, i) => (
      <span key={i}>
        <span className={item.cls ? styles[item.cls] : undefined}>{item.text}</span>
        <span className={styles.sep}>·</span>
      </span>
    ))}
  </>
);

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <span className={styles.inner}>
        <Row />
        <Row />
      </span>
    </div>
  );
}
