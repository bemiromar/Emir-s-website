'use client'

import ElectricBorder from "@/components/ElectricBorder";

export default function Home() {
  return (
      <>
        <div className="banner">
          <div className="banner-dot"></div>
          <p>
            En recherche active d&apos;un stage de fin d&apos;études pour 2026-2027 — ouvert à toute opportunité dans
            l&apos;énergie, les énergies renouvelables ou le développement de projets énergétiques.
          </p>
          <div className="banner-dot"></div>
        </div>

        <div className="hero">
            <div className="hero-sys">{"//"} EB_PORTFOLIO · PORTFOLIO_v1 · ONLINE &nbsp;&nbsp; FR / EN</div>
            <div className="hero-greeting">Bonjour, je suis — Hello, I&apos;m —</div>
            <h1 className="hero-name">
              <span className="bracket">[</span> Emir <span className="bracket">]</span>
            </h1>
            <div className="hero-title">Étudiant ingénieur · Énergie &amp; Villes du Futur</div>
            <p className="hero-desc">
              Étudiant ingénieur spécialisé en Énergie &amp; Villes du Futur, je me forme à la conception de systèmes
              énergétiques durables, à l&apos;analyse technico-économique de projets et au développement de solutions
              adaptées aux enjeux énergétiques de demain.
            </p>
            <div className="hero-cta">
              <a href="#projets" className="btn-primary">Voir mes projets</a>
              <a href="#" className="btn-outline">Télécharger mon CV</a>
            </div>
            <div className="hero-badges">
              <div className="badge"><span>▸</span>Énergie renouvelable</div>
              <div className="badge"><span>▸</span>Systèmes électriques</div>
              <div className="badge"><span>▸</span>Analyse technico-économique</div>
              <div className="badge"><span>▸</span>Gestion de projet</div>
              <div className="badge"><span>▸</span>Transition énergétique</div>
            </div>
            <div className="hero-units">
              <div><span className="unit-val">220</span> kV — HTA/HTB</div>
              <div><span className="unit-val">∞</span> kWh — Potentiel solaire</div>
              <div><span className="unit-val">1.5</span> °C — Objectif Paris</div>
              <div><span className="unit-val">2050</span> — Neutralité carbone</div>
              <div><span className="unit-val">100</span> % — Renouvelable</div>
            </div>
          </div>

        <div className="ticker">
        <span className="ticker-inner">
          EMIR BINDWEMBA <span className="sep">·</span>{" "}
          <span style={{ color: "#C8963C" }}>أمير</span>{" "}
          <span className="sep">·</span> INGÉNIEUR ÉNERGIE <span className="sep">·</span>{" "}
          <span style={{ color: "#3AAF6F" }}>طاقة</span>{" "}
          <span className="sep">·</span> VILLES DU FUTUR <span className="sep">·</span>{" "}
          <span style={{ color: "#C8963C" }}>220 kV</span>{" "}
          <span className="sep">·</span> TRANSITION ÉNERGÉTIQUE <span className="sep">·</span>{" "}
          <span style={{ color: "#3AAF6F" }}>1.5°C</span>{" "}
          <span className="sep">·</span> ECAM-EPMI <span className="sep">·</span>{" "}
          <span style={{ color: "#C8963C" }}>100% RE</span>{" "}
          <span className="sep">·</span> ÉNERGIE DURABLE <span className="sep">·</span>{" "}
          <span style={{ color: "#3AAF6F" }}>2050</span>{" "}
          <span className="sep">·</span> EMIR BINDWEMBA <span className="sep">·</span>{" "}
          <span style={{ color: "#C8963C" }}>أمير</span>{" "}
          <span className="sep">·</span> INGÉNIEUR ÉNERGIE <span className="sep">·</span>{" "}
          <span style={{ color: "#3AAF6F" }}>طاقة</span>{" "}
          <span className="sep">·</span> VILLES DU FUTUR <span className="sep">·</span>{" "}
          <span style={{ color: "#C8963C" }}>220 kV</span>{" "}
          <span className="sep">·</span> TRANSITION ÉNERGÉTIQUE <span className="sep">·</span>{" "}
          <span style={{ color: "#3AAF6F" }}>1.5°C</span>{" "}
          <span className="sep">·</span> ECAM-EPMI <span className="sep">·</span>{" "}
          <span style={{ color: "#C8963C" }}>100% RE</span>{" "}
          <span className="sep">·</span> ÉNERGIE DURABLE <span className="sep">·</span>{" "}
          <span style={{ color: "#3AAF6F" }}>2050</span>{" "}
          <span className="sep">·</span>
        </span>
        </div>

        {/* ARABIC DECO BLOCK */}
        <div
            style={{
              background: "var(--surface)",
              borderTop: "var(--border)",
              borderBottom: "var(--border)",
              padding: "3rem 2.5rem",
              overflow: "hidden",
              textAlign: "center",
            }}
        >
          <div
              style={{
                fontSize: "clamp(52px, 10vw, 96px)",
                fontWeight: 700,
                color: "rgba(30,92,58,0.18)",
                letterSpacing: "0.08em",
                lineHeight: 1.1,
                whiteSpace: "nowrap",
                overflow: "hidden",
                fontFamily: "'Syne', sans-serif",
                direction: "rtl",
              }}
          >
            أمير &nbsp;&nbsp; طاقة &nbsp;&nbsp; مستقبل &nbsp;&nbsp; أمير &nbsp;&nbsp; طاقة &nbsp;&nbsp; مستقبل
            &nbsp;&nbsp; أمير &nbsp;&nbsp; طاقة &nbsp;&nbsp; مستقبل
          </div>
          <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(13px, 2vw, 18px)",
                color: "rgba(200,150,60,0.25)",
                letterSpacing: "0.3em",
                marginTop: "0.75rem",
              }}
          >
            220 kV &nbsp;&nbsp;&nbsp; 50 Hz &nbsp;&nbsp;&nbsp; ∞ kWh &nbsp;&nbsp;&nbsp; 1.5°C &nbsp;&nbsp;&nbsp; 2050
            &nbsp;&nbsp;&nbsp; 100% RE
          </div>
        </div>

        {/* POURQUOI CE PORTFOLIO */}

        <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2.5rem 0",  }}>
          <div className="section-tag">{"//"} Pourquoi ce portfolio</div>
          <div className="why-block">
            Dans un secteur aussi vaste que l&apos;énergie, se démarquer ne se résume pas à une liste de compétences. Ce
            portfolio montre qui je suis en train de devenir — au-delà des cases et des intitulés. J&apos;ai voulu créer
            cet espace pour donner à voir ma façon de penser, mes projets concrets, ma progression et ma vision. Pas ce
            que je prétends savoir faire, mais ce que j&apos;ai réellement fait, appris et compris jusqu&apos;ici.
            L&apos;énergie — qu&apos;elle soit au cœur des territoires africains, des métropoles européennes ou des enjeux
            internationaux — est mon terrain. Et c&apos;est là où je veux contribuer.
          </div>
        </ElectricBorder>

        {/* À PROPOS */}
        <section id="apropos">
          <div className="section-tag">{"//"} À propos</div>
          <h2 className="section-title">Qui je suis</h2>
          <p className="section-body">
            L&apos;énergie est à la base de toute chose — et elle est l&apos;affaire de tous. Dans un monde où la
            consommation ne cesse de croître et où la transition énergétique s&apos;impose, je me forme pour être celui
            sur qui on peut compter : analyser, concevoir et développer des solutions énergétiques qui répondent aux vrais
            besoins des hommes et des territoires.
          </p>

          <div style={{ marginTop: "3rem" }}>
            <div className="section-tag">{"//"} Compétences techniques</div>
            <p className="section-body" style={{ marginBottom: "1.5rem" }}>
              Au fil de mes formations et expériences, j&apos;ai développé une approche globale des systèmes énergétiques
              — du technique au financier.
            </p>
            <div className="about-grid">
              <div className="skill-card">
                <div className="skill-card-title">▸ Systèmes électriques &amp; réseaux</div>
                <p>
                  Exposition terrain aux réseaux HTA/HTB et aux équipements de transformation, à travers des missions
                  d&apos;assistance et de suivi sur site.
                </p>
              </div>
              <div className="skill-card">
                <div className="skill-card-title">▸ Systèmes solaires photovoltaïques</div>
                <p>
                  Faisabilité, dimensionnement et analyse de sites PV sur plusieurs projets concrets, dont un
                  dimensionnement complet avec calcul de rentabilité énergétique et financière.
                </p>
              </div>
              <div className="skill-card">
                <div className="skill-card-title">▸ Analyse technico-économique</div>
                <p>
                  Chiffrage, déboursé, calcul de rentabilité dans le temps — une approche qui intègre à la fois les
                  contraintes techniques et les réalités économiques d&apos;un projet.
                </p>
              </div>
              <div className="skill-card">
                <div className="skill-card-title">▸ Analyse de consommation énergétique</div>
                <p>
                  Audit et comparaison de bâtiments, sélection du site optimal et recommandations d&apos;installation —
                  du diagnostic à la décision.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className="section-tag">{"//"} Outils &amp; logiciels</div>
            <div className="tools-grid">
              <div className="tool-group">
                <div className="tool-group-title">Outils techniques énergie &amp; BTP</div>
                <div className="tool-tags">
                  <span className="tool-tag">Helioscope</span>
                  <span className="tool-tag">OpenSolar</span>
                  <span className="tool-tag">RETScreen</span>
                  <span className="tool-tag">AutoCAD</span>
                  <span className="tool-tag">QuoterPlan</span>
                  <span className="tool-tag">XL Pro</span>
                  <span className="tool-tag">NFC 15-100</span>
                </div>
              </div>
              <div className="tool-group">
                <div className="tool-group-title">Bureautique</div>
                <div className="tool-tags">
                  <span className="tool-tag">Excel</span>
                  <span className="tool-tag">Word</span>
                  <span className="tool-tag">PowerPoint</span>
                </div>
              </div>
              <div className="tool-group">
                <div className="tool-group-title">Programmation</div>
                <div className="tool-tags">
                  <span className="tool-tag">Python</span>
                  <span className="tool-tag">SQL</span>
                  <span className="tool-tag">C</span>
                  <span className="tool-tag">C++</span>
                </div>
                <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--text-dim)",
                      marginTop: "8px",
                    }}
                >
                  *(bases)*
                </p>
              </div>
              <div className="tool-group">
                <div className="tool-group-title">Design &amp; autres</div>
                <div className="tool-tags">
                  <span className="tool-tag">Figma</span>
                  <span className="tool-tag">Prompt Engineering</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <div
                  className="tool-group-title"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    color: "var(--sahara)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
              >
                Langues
              </div>
              <div className="lang-row">
                <div className="lang-item">
                  <span className="lang-name">Français</span>
                  <span className="lang-level">Langue maternelle</span>
                </div>
                <div className="lang-item">
                  <span className="lang-name">Anglais</span>
                  <span className="lang-level">Niveau intermédiaire</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPÉRIENCES */}
        <section id="experiences">
          <div className="section-tag">{"//"} Expérience terrain</div>
          <h2 className="section-title">Parcours professionnel</h2>
          <p className="section-body">
            Mes expériences m&apos;ont permis de toucher à la fois le terrain, le bureau d&apos;études et le
            développement commercial — trois dimensions essentielles d&apos;un projet énergétique.
          </p>
          <div className="exp-list">
            <div className="exp-item">
              <div className="exp-header">
                <span className="exp-company">Krown</span>
                <span className="exp-period">Nov 2025 — Jan 2026</span>
              </div>
              <div className="exp-location">▸ Andrésy, Île-de-France, France</div>
              <p className="exp-desc">
                Dimensionnements électriques, chiffrage, déboursé, prospection et analyse de marchés — une expérience
                complète en bureau d&apos;études alliant rigueur technique et sens commercial. Participation également à
                des visites de chantier, pour confronter les études au réel terrain.
              </p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <span className="exp-company">African Smart Grid Power</span>
                <span className="exp-period">Sept 2024 — Nov 2024</span>
              </div>
              <div className="exp-location">▸ Ouagadougou, Burkina Faso</div>
              <p className="exp-desc">
                Assistance au suivi des ventes de transformateurs et au suivi d&apos;installations HTA/HTB — une double
                exposition aux aspects commerciaux et techniques des équipements de distribution électrique.
              </p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <span className="exp-company">SONABEL</span>
                <span className="exp-period">Juil 2024 — Sept 2024</span>
              </div>
              <div className="exp-location">▸ Ouagadougou, Burkina Faso</div>
              <p className="exp-desc">
                Contrôle électrique, contrôle de commande, maintenance de transformateurs de puissance et équipements de
                climatisation — une immersion directe dans l&apos;exploitation de systèmes électriques industriels.
              </p>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets">
          <div className="section-tag">{"//"} Projets</div>
          <h2 className="section-title">Réalisations</h2>
          <p className="section-body">
            Chaque projet est pour moi une occasion de mettre en pratique ce que j&apos;apprends — et d&apos;aller
            au-delà.
          </p>
          <div className="projects-list">
            <div className="project-card">
              <div className="project-header">
                <span className="project-title">Solar PV System Design Proposal</span>
                <span className="project-meta">2025-2026 · Bali, Indonésie</span>
              </div>
              <div className="project-type">Projet scolaire · Mobilité internationale · UNDIKNAS University</div>
              <p className="project-desc">
                Analyse de la consommation des bâtiments du campus, sélection du bâtiment optimal, dimensionnement
                complet du système PV, et calcul de rentabilité énergétique et financière sur le long terme.
              </p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <span className="project-title">Étude et suivi énergétique d&apos;un bâtiment</span>
                <span className="project-meta">2025-2026 · France</span>
              </div>
              <div className="project-type">Projet personnel · Initiative autonome</div>
              <p className="project-desc">
                Analyse approfondie de la consommation énergétique d&apos;un bâtiment — une démarche autonome pour aller
                plus loin que le cadre scolaire.
              </p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <span className="project-title">Faisabilité énergétique photovoltaïque</span>
                <span className="project-meta">2024-2025 · Grenoble, France</span>
              </div>
              <div className="project-type">Projet scolaire · Année universitaire complète</div>
              <p className="project-desc">
                Étude de faisabilité d&apos;un système solaire PV sur un site réel basé à Grenoble — analyse du site,
                dimensionnement, calcul du rendement global et évaluation des contraintes techniques.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog">
          <div className="section-tag">{"//"} Blog · Réflexions</div>
          <h2 className="section-title">Pensées &amp; analyses</h2>
          <p className="section-body">
            L&apos;énergie ne se résume pas à des chiffres et des formules. Ce blog est l&apos;espace où je partage ma
            façon de penser le secteur — entre vécu terrain, analyses et vision.
          </p>
          <div className="blog-list">
            <div className="blog-item">
              <span className="blog-num">01</span>
              <span className="blog-title">Pourquoi l&apos;énergie est l&apos;affaire de tous</span>
              <span className="blog-tag">À venir</span>
            </div>
            <div className="blog-item">
              <span className="blog-num">02</span>
              <span className="blog-title">
              Ce que m&apos;a appris mon premier stage dans un réseau électrique africain
            </span>
              <span className="blog-tag">À venir</span>
            </div>
            <div className="blog-item">
              <span className="blog-num">03</span>
              <span className="blog-title">
              La transition énergétique vue depuis l&apos;Afrique — une réalité différente
            </span>
              <span className="blog-tag">À venir</span>
            </div>
            <div className="blog-item">
              <span className="blog-num">04</span>
              <span className="blog-title">
              Ingénieur énergie en mobilité internationale : ce que Bali m&apos;a appris
            </span>
              <span className="blog-tag">À venir</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="section-tag">{"//"} Contact</div>
          <h2 className="section-title">Me contacter</h2>
          <p className="section-body">
            Une opportunité, une question, un projet ? N&apos;hésitez pas à me contacter directement.
          </p>
          <div className="contact-grid">
            <a href="mailto:b.emiromar@gmail.com" className="contact-card">
              <div className="contact-label">Email</div>
              <div className="contact-value">b.emiromar@gmail.com</div>
            </a>
            <a
                href="https://www.linkedin.com/in/omar-emir-bindwemba-3808b3350"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
            >
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">omar-emir-bindwemba</div>
            </a>
            <a href="tel:+33745060416" className="contact-card">
              <div className="contact-label">Téléphone</div>
              <div className="contact-value">+33 7 45 06 04 16</div>
            </a>
          </div>
        </section>
      </>
  );
}