import styles from './Contact.module.css';

const CONTACTS = [
  { label: 'Email', value: 'b.emiromar@gmail.com', href: 'mailto:b.emiromar@gmail.com' },
  { label: 'LinkedIn', value: 'omar-emir-bindwemba', href: 'https://www.linkedin.com/in/omar-emir-bindwemba-3808b3350', target: '_blank' },
  { label: 'Téléphone', value: '+33 7 45 06 04 16', href: 'tel:+33745060416' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="section-tag">// Contact</div>
      <h2 className="section-title">Me contacter</h2>
      <p className="section-body">
        Une opportunité, une question, un projet ? N&apos;hésitez pas à me contacter directement.
      </p>
      <div className={styles.grid}>
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className={styles.card}
            target={c.target}
            rel={c.target ? 'noopener noreferrer' : undefined}
          >
            <div className={styles.label}>{c.label}</div>
            <div className={styles.value}>{c.value}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
