import styles from './Blog.module.css';

const POSTS = [
  { num: '01', title: "Pourquoi l'énergie est l'affaire de tous" },
  { num: '02', title: "Ce que m'a appris mon premier stage dans un réseau électrique africain" },
  { num: '03', title: "La transition énergétique vue depuis l'Afrique — une réalité différente" },
  { num: '04', title: "Ingénieur énergie en mobilité internationale : ce que Bali m'a appris" },
];

export default function Blog() {
  return (
    <section id="blog" className="section-wrapper">
      <div className="section-tag">// Blog · Réflexions</div>
      <h2 className="section-title">Pensées &amp; analyses</h2>
      <p className="section-body">
        L&apos;énergie ne se résume pas à des chiffres et des formules. Ce blog est l&apos;espace
        où je partage ma façon de penser le secteur — entre vécu terrain, analyses et vision.
      </p>
      <div className={styles.list}>
        {POSTS.map((p) => (
          <div key={p.num} className={styles.item}>
            <span className={styles.num}>{p.num}</span>
            <span className={styles.title}>{p.title}</span>
            <span className={styles.tag}>À venir</span>
          </div>
        ))}
      </div>
    </section>
  );
}
