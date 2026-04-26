import styles from './Experiences.module.css';

const EXPERIENCES = [
  {
    company: 'Krown',
    period: 'Nov 2025 — Jan 2026',
    location: 'Andrésy, Île-de-France, France',
    desc: "Dimensionnements électriques, chiffrage, déboursé, prospection et analyse de marchés — une expérience complète en bureau d'études alliant rigueur technique et sens commercial. Participation également à des visites de chantier, pour confronter les études au réel terrain.",
  },
  {
    company: 'African Smart Grid Power',
    period: 'Sept 2024 — Nov 2024',
    location: 'Ouagadougou, Burkina Faso',
    desc: "Assistance au suivi des ventes de transformateurs et au suivi d'installations HTA/HTB — une double exposition aux aspects commerciaux et techniques des équipements de distribution électrique.",
  },
  {
    company: 'SONABEL',
    period: 'Juil 2024 — Sept 2024',
    location: 'Ouagadougou, Burkina Faso',
    desc: "Contrôle électrique, contrôle de commande, maintenance de transformateurs de puissance et équipements de climatisation — une immersion directe dans l'exploitation de systèmes électriques industriels.",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="section-wrapper">
      <div className="section-tag">// Expérience terrain</div>
      <h2 className="section-title">Parcours professionnel</h2>
      <p className="section-body">
        Mes expériences m&apos;ont permis de toucher à la fois le terrain, le bureau d&apos;études
        et le développement commercial — trois dimensions essentielles d&apos;un projet énergétique.
      </p>
      <div className={styles.list}>
        {EXPERIENCES.map((e) => (
          <div key={e.company} className={styles.item}>
            <div className={styles.header}>
              <span className={styles.company}>{e.company}</span>
              <span className={styles.period}>{e.period}</span>
            </div>
            <div className={styles.location}>▸ {e.location}</div>
            <p className={styles.desc}>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
