import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.dot} />
      <p className={styles.text}>
        En recherche active d&apos;un stage de fin d&apos;études pour 2026-2027 — ouvert à toute
        opportunité dans l&apos;énergie, les énergies renouvelables ou le développement de projets
        énergétiques.
      </p>
      <div className={styles.dot} />
    </div>
  );
}
