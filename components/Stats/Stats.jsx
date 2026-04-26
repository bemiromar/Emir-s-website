'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';

const STATS = [
  { target: 3, label: 'Stages effectués' },
  { target: 3, label: 'Projets réalisés' },
  { target: 3, label: 'Pays d\'expérience' },
  { target: 5, label: 'Outils techniques maîtrisés' },
];

function Counter({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { setVal(target); clearInterval(timer); }
          else setVal(Math.floor(current));
        }, 40);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className={styles.num}>{val === target ? `${target}+` : val}</span>;
}

export default function Stats() {
  return (
    <div className="section-wrapper" style={{ paddingBottom: 0 }}>
      <div className={styles.grid}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.card}>
            <Counter target={s.target} />
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
