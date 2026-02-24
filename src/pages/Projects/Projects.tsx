import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { PROJECTS } from '../../data/constants';
import styles from './Projects.module.css';

const ALL_TAGS = ['All', ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort()];

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <main className={styles.page}>
      {/* ── Header ─────────────────────────────────── */}
      <header className={styles.header}>
        <span className={styles.label}>My work</span>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Things I&apos;ve built including personal projects and live applications.
        </p>
      </header>

      {/* ── Filters ────────────────────────────────── */}
      <div className={styles.filters} role="group" aria-label="Filter projects by tag">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ''}`}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Grid ───────────────────────────────────── */}
      <div className={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className={styles.empty}>No projects match that filter.</p>
        )}
      </div>
    </main>
  );
}
