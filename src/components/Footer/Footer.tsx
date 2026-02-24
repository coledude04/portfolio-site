import { PERSON, SOCIAL_LINKS } from '../../data/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socialLinks}>
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

        <p className={styles.copy}>
          <a href={PERSON.sourceRepo} target="_blank" rel="noopener noreferrer">
            View source code
          </a>
        </p>
      </div>
    </footer>
  );
}
