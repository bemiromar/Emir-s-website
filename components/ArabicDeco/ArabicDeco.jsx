import styles from './ArabicDeco.module.css';

export default function ArabicDeco() {
  return (
    <div className={styles.wrap}>
      <div className={styles.arabic}>
        أمير &nbsp;&nbsp; طاقة &nbsp;&nbsp; مستقبل &nbsp;&nbsp; أمير &nbsp;&nbsp; طاقة &nbsp;&nbsp; مستقبل &nbsp;&nbsp; أمير &nbsp;&nbsp; طاقة &nbsp;&nbsp; مستقبل
      </div>
      <div className={styles.units}>
        220 kV &nbsp;&nbsp;&nbsp; 50 Hz &nbsp;&nbsp;&nbsp; ∞ kWh &nbsp;&nbsp;&nbsp; 1.5°C &nbsp;&nbsp;&nbsp; 2050 &nbsp;&nbsp;&nbsp; 100% RE
      </div>
    </div>
  );
}
