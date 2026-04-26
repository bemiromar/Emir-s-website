'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const PHOTO_SRC = '/images/emir.jpeg';

const BADGES = [
  'Énergie renouvelable',
  'Systèmes électriques',
  'Analyse technico-économique',
  'Gestion de projet',
  'Transition énergétique',
];

const NAMES = ['Bindwemba', 'أمير', 'Bindwemba'];

export default function Hero() {
  const canvasRef = useRef(null);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    let nameIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    function type() {
      const current = NAMES[nameIndex];
      if (!deleting) {
        setDisplayName(current.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setDisplayName(current.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          nameIndex = (nameIndex + 1) % NAMES.length;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 100);
    }

    timeout = setTimeout(type, 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
        const r = Math.random();
        this.color = r > 0.6 ? '#3AAF6F' : r > 0.3 ? '#C8963C' : '#FFFFFF';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 120);
      particles = Array.from({ length: count }, () => new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.strokeStyle = '#3AAF6F';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      particles.forEach(p => { p.update(); p.draw(); });
      raf = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={`${styles.aurora} ${styles.aurora1}`} />
      <div className={`${styles.aurora} ${styles.aurora2}`} />
      <div className={`${styles.aurora} ${styles.aurora3}`} />

      <div className={styles.left}>
        <div className={styles.sys}>// EB_PORTFOLIO · PORTFOLIO_v1 · ONLINE &nbsp;&nbsp; FR / EN</div>
        <div className={styles.greeting}>Bonjour, je suis — Hello, I&apos;m —</div>
        <h1 className={styles.name}>
          <span className={styles.nameFirst}>Emir</span>
          <span className={styles.nameLast}>{displayName}</span>
        </h1>
        <div className={styles.title}>
          Étudiant ingénieur en dernière année · Énergie &amp; Villes du Futur
        </div>
        <p className={styles.desc}>
          Étudiant ingénieur en dernière année, spécialisé en Énergie &amp; Villes du Futur,
          je me forme à la conception de systèmes énergétiques durables, à l&apos;analyse
          technico-économique de projets et au développement de solutions adaptées aux enjeux
          énergétiques de demain.
        </p>
        <div className={styles.cta}>
          <Link href="#projets" className="btn-primary">Voir mes projets</Link>
          <a href="/cv-emir-bindwemba.pdf" download className="btn-outline">Télécharger mon CV</a>
        </div>
        <div className={styles.badges}>
          {BADGES.map((b) => (
            <div key={b} className={styles.badge}>
              <span className={styles.badgeIcon}>▸</span>{b}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.photoWrap}>
        <div className={styles.photoFrame}>
          <div className={`${styles.corner} ${styles.tl}`} />
          <div className={`${styles.corner} ${styles.tr}`} />
          <div className={`${styles.corner} ${styles.bl}`} />
          <div className={`${styles.corner} ${styles.br}`} />
          <div className={styles.scan} />
          <img className={styles.photo} src={PHOTO_SRC} alt="Emir Bindwemba" />
          <div className={styles.overlay} />
          <div className={styles.photoData}>
            ID: EB_2026<br />
            SPEC: ENERGY<br />
            STATUS: AVAILABLE
          </div>
        </div>
      </div>
    </section>
  );
}
