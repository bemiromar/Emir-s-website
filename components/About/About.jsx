import styles from './About.module.css';

const SKILLS = [
  {
    title: '▸ Systèmes électriques & réseaux',
    text: "Exposition terrain aux réseaux HTA/HTB et aux équipements de transformation, à travers des missions d'assistance et de suivi sur site.",
  },
  {
    title: '▸ Systèmes solaires photovoltaïques',
    text: "Faisabilité, dimensionnement et analyse de sites PV sur plusieurs projets concrets, dont un dimensionnement complet avec calcul de rentabilité énergétique et financière.",
  },
  {
    title: '▸ Analyse technico-économique',
    text: "Chiffrage, déboursé, calcul de rentabilité dans le temps — une approche qui intègre les contraintes techniques et les réalités économiques d'un projet.",
  },
  {
    title: '▸ Analyse de consommation énergétique',
    text: "Audit et comparaison de bâtiments, sélection du site optimal et recommandations d'installation — du diagnostic à la décision.",
  },
];

const TOOLS = [
  {
    title: 'Outils techniques énergie & BTP',
    tags: ['Helioscope', 'OpenSolar', 'RETScreen', 'AutoCAD', 'QuoterPlan', 'XL Pro', 'NFC 15-100'],
  },
  {
    title: 'Bureautique',
    tags: ['Excel', 'Word', 'PowerPoint'],
  },
  {
    title: 'Programmation',
    tags: ['Python', 'SQL', 'C', 'C++'],
    note: '*(bases)*',
  },
  {
    title: 'Design & autres',
    tags: ['Figma', 'Prompt Engineering'],
  },
];

export default function About() {
  return (
    <section id="apropos" className="section-wrapper">
      <div className="section-tag">// À propos</div>
      <h2 className="section-title">Qui je suis</h2>
      <p className="section-body">
        L&apos;énergie est à la base de toute chose — et elle est l&apos;affaire de tous. Dans un
        monde où la consommation ne cesse de croître et où la transition énergétique s&apos;impose,
        je me forme pour être celui sur qui on peut compter : analyser, concevoir et développer des
        solutions énergétiques qui répondent aux vrais besoins des hommes et des territoires.
      </p>

      <div className={styles.subTag}>
        <div className="section-tag">// Compétences techniques</div>
        <p className="section-body" style={{ marginBottom: '1.5rem' }}>
          Au fil de mes formations et expériences, j&apos;ai développé une approche globale des
          systèmes énergétiques — du technique au financier.
        </p>
        <div className={styles.skillGrid}>
          {SKILLS.map((s) => (
            <div key={s.title} className={styles.skillCard}>
              <div className={styles.skillTitle}>{s.title}</div>
              <p className={styles.skillText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.subTag}>
        <div className="section-tag">// Outils & logiciels</div>
        <div className={styles.toolsGrid}>
          {TOOLS.map((g) => (
            <div key={g.title} className={styles.toolGroup}>
              <div className={styles.toolTitle}>{g.title}</div>
              <div className={styles.toolTags}>
                {g.tags.map((t) => <span key={t} className={styles.toolTag}>{t}</span>)}
              </div>
              {g.note && <p className={styles.toolNote}>{g.note}</p>}
            </div>
          ))}
        </div>
        <div className={styles.langBox}>
          <div className={styles.toolTitle}>Langues</div>
          <div className={styles.langRow}>
            <div className={styles.langItem}>
              <span className={styles.langName}>Français</span>
              <span className={styles.langLevel}>Langue maternelle</span>
            </div>
            <div className={styles.langItem}>
              <span className={styles.langName}>Anglais</span>
              <span className={styles.langLevel}>Niveau intermédiaire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
