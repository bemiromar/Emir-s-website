import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'Solar PV System Design Proposal',
    meta: '2025-2026 · Bali, Indonésie',
    type: 'Projet scolaire · Mobilité internationale · UNDIKNAS University',
    desc: "Analyse de la consommation des bâtiments du campus, sélection du bâtiment optimal, dimensionnement complet du système PV, et calcul de rentabilité énergétique et financière sur le long terme.",
  },
  {
    title: "Étude et suivi énergétique d'un bâtiment",
    meta: '2025-2026 · France',
    type: 'Projet personnel · Initiative autonome',
    desc: "Analyse approfondie de la consommation énergétique d'un bâtiment — une démarche autonome pour aller plus loin que le cadre scolaire.",
  },
  {
    title: 'Faisabilité énergétique photovoltaïque',
    meta: '2024-2025 · Grenoble, France',
    type: 'Projet scolaire · Année universitaire complète',
    desc: "Étude de faisabilité d'un système solaire PV sur un site réel basé à Grenoble — analyse du site, dimensionnement, calcul du rendement global et évaluation des contraintes techniques.",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="section-wrapper">
      <div className="section-tag">// Projets</div>
      <h2 className="section-title">Réalisations</h2>
      <p className="section-body">
        Chaque projet est pour moi une occasion de mettre en pratique ce que j&apos;apprends —
        et d&apos;aller au-delà.
      </p>
      <div className={styles.list}>
        {PROJECTS.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.title}>{p.title}</span>
              <span className={styles.meta}>{p.meta}</span>
            </div>
            <div className={styles.type}>{p.type}</div>
            <p className={styles.desc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
