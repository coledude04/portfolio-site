import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import {
  PERSON,
  HERO_STATS,
  SKILL_GROUPS,
  PROJECTS,
  FEATURED_PROJECT_IDS,
} from '../../data/constants';
import styles from './Home.module.css';

const FEATURED_PROJECTS = PROJECTS.filter((p) =>
  FEATURED_PROJECT_IDS.includes(p.id),
);

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroContent}>
          <span className={styles.greeting}>👋 Hello, I&apos;m</span>

          <h1 id="hero-heading" className={styles.name}>
            <span className="text-gradient">{PERSON.name}</span>
          </h1>

          <p className={styles.tagline}>{PERSON.tagline}</p>

          <p className={styles.description}>{PERSON.description}</p>

          <div className={styles.actions}>
            <Link to="/projects" className="btn btn-primary">
              View my work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>

          <div className={styles.statsRow}>
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────── */}
      <section className={styles.skills} aria-labelledby="skills-heading">
        <div className={styles.skillsInner}>
          <span className={styles.skillsLabel}>Expertise</span>
          <h2 id="skills-heading" className={styles.skillsTitle}>
            What I work with
          </h2>
          <p className={styles.skillsSubtitle}>
            A curated set of technologies I reach for to build reliable, performant
            products.
          </p>

          <div className={styles.skillGroups}>
            {SKILL_GROUPS.map(({ title, skills }) => (
              <div key={title} className={styles.skillGroup}>
                <span className={styles.skillGroupTitle}>{title}</span>
                <div className={styles.skillTags}>
                  {skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ───────────────────────── */}
      <section className={styles.featured} aria-labelledby="featured-heading">
        <div className={styles.featuredInner}>
          <div className={styles.featuredHeader}>
            <div>
              <span className={styles.featuredLabel}>Portfolio</span>
              <h2 id="featured-heading" className={styles.featuredTitle}>
                Featured Projects
              </h2>
              <p className={styles.featuredSubtitle}>
                A selection of things I&apos;ve built recently.
              </p>
            </div>
            <Link to="/projects" className="btn btn-outline">
              View all →
            </Link>
          </div>

          <div className={styles.projectGrid}>
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
