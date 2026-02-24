import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, PERSON } from '../../data/constants';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  const closeMobile = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} onClick={closeMobile}>
            {PERSON.handle.split("'")[0]}<span>'</span>{PERSON.handle.split("'")[1]}
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            ))}

          </nav>

          {/* Hamburger */}
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
            }
            onClick={closeMobile}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
