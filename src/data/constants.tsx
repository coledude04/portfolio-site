/**
 * constants.tsx — single source of truth for all site content.
 *
 * Edit this file to update your personal info, projects, skills,
 * social links, experience, and nav links. Everything else picks
 * up the changes automatically.
 */

import type { Project } from '../components/ProjectCard/ProjectCard';

// ─────────────────────────────────────────────────────────────
// Personal info
// ─────────────────────────────────────────────────────────────

export const PERSON = {
  /** Display name used in headings, footer copy, etc. */
  name: 'Cole',
  /** Short handle shown in the navbar logo */
  handle: "cole's portfolio",
  /** Your email address */
  email: 'cole.alcala04@gmail.com',
  /** City / region shown on the Contact page */
  location: 'Pickerington, OH',
  /** One-liner under your name on the hero */
  tagline: 'Software Engineer & Computer Science + Math Student',
  /** Longer hero description */
  description:
    'I build AI-powered systems, scalable APIs, and polished web interfaces. From LLM pipelines to full-stack products, I love tackling hard problems end-to-end.',
  /** Bio paragraphs shown on the About page */
  bio: [
    "Hey! I'm <strong>Cole Alcala</strong> — a software engineer and Computer Science + Mathematics student at <strong>Frostburg State University</strong>, graduating May 2026.",
    "I've interned at <strong>LinkedIn</strong>, <strong>Augment Markets</strong>, and <strong>Bread Financial</strong>, working across AI systems, full-stack web development, and backend engineering.",
    "Outside of work and school I compete on the <strong>Frostburg Tennis Team</strong>, stay active exercising in the gym, do Jiu Jitsu, and spend too much time building side projects.",
  ],
  /** Expected contact response time */
  responseTime: 'Within 24 hours',
  /** Link to the portfolio source repo */
  sourceRepo: 'https://github.com/yourusername/portfolio',
};

// ─────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'About',    to: '/about'    },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact',  to: '/contact'  },
];

// ─────────────────────────────────────────────────────────────
// Social links  (icons are inline SVG so the file is .tsx)
// ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/coledude04',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/cole-alcala-140671299',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Daily Habit Journal',
    description:
      'An iOS app that uses LLMs to help users reflect on their day, track goals, and build healthy habits. Coming soon to the app store...',
    tags: ['React-Native', 'TypeScript', 'Python', 'FastAPI', 'GCP', 'OpenAI API', 'RAG', "Mobile Development"],
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Stock Value Sentiment Analysis Program',
    description:
      'A program that compares a stock\'s historical PE ratio to its current PE ratio to infer if it\'s under or overvalued.',
    tags: ['Python', 'Pandas', 'Numpy', 'Data Analysis'],
    githubUrl: 'https://github.com/coledude04/Scanner',
  },
  {
    id: '3',
    title: 'QR Code Creation API',
    description:
      'An API used to generate custom QR codes for web URLs.',
    tags: ['React', 'TypeScript', 'Go', 'Web Development'],
    githubUrl: 'https://github.com/coledude04/qr_code_api',
  },
  {
    id: '4',
    title: 'Stock Screener GUI',
    description:
      'A GUI application that allows users to filter stocks based on various financial metrics and visualize the results.',
    tags: ['Python', 'Tkinter', 'Yfinance API'],
    githubUrl: 'https://github.com/coledude04/GUIScreener',
  },
];

/**
 * IDs of projects to highlight on the Home page.
 * Order is preserved — first three shown by default.
 */
export const FEATURED_PROJECT_IDS = ['1', '2', '3'];

// ─────────────────────────────────────────────────────────────
// Hero stats
// ─────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: 'Constantly', label: 'solving problems' },
  { value: 'Always', label: 'curious and learning' },
];

// ─────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['Java', 'Go', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    title: 'Backend & Infra',
    skills: ['REST APIs', 'Docker', 'Kubernetes', 'PostgreSQL', 'NoSQL', 'Airflow', 'Spark', 'Kafka'],
  },
  {
    title: 'AI & Cloud',
    skills: ['LLMs', 'RAG', 'Embeddings', 'MCP', 'GCP', 'AWS', 'Azure'],
  },
];

// ─────────────────────────────────────────────────────────────
// About — values
// ─────────────────────────────────────────────────────────────

export const VALUES = [
  {
    icon: '🚀',
    name: 'Performance first',
    desc: 'I care deeply about fast load times, smooth interactions, and low-bandwidth experiences.',
  },
  {
    icon: '♿',
    name: 'Accessibility',
    desc: 'Building for everyone is not optional. Semantic HTML, ARIA, and keyboard navigation are non-negotiables.',
  },
  {
    icon: '🧪',
    name: 'Test-driven',
    desc: 'Good tests give you confidence to ship. I write unit, integration, and e2e tests as first-class citizens.',
  },
  {
    icon: '🌐',
    name: 'Open source',
    desc: 'I believe in giving back. I maintain several open-source projects and contribute to others.',
  },
];

// ─────────────────────────────────────────────────────────────
// About — timeline (experience + education, newest first)
// ─────────────────────────────────────────────────────────────

export interface TimelineItem {
  icon: string;
  /** Human-readable date range shown in the label */
  date: string;
  name: string;
  location: string;
  /** [year, month] — month is 1-indexed */
  start: [number, number];
  /** [year, month] — month is 1-indexed */
  end: [number, number];
  type: 'work' | 'education';
}

export const TIMELINE: TimelineItem[] = [
  {
    icon: '💼',
    date: 'Oct – Dec 2025',
    name: 'Software Engineer Intern · Augment Markets',
    location: 'Austin, TX',
    start: [2025, 10],
    end: [2025, 12],
    type: 'work',
  },
  {
    icon: '💼',
    date: 'May – Aug 2025',
    name: 'Software Engineering Intern · LinkedIn',
    location: 'Sunnyvale, CA',
    start: [2025, 5],
    end: [2025, 8],
    type: 'work',
  },
  {
    icon: '💼',
    date: 'May 2024 – May 2025',
    name: 'Software Engineering Intern · Bread Financial',
    location: 'Columbus, OH',
    start: [2024, 5],
    end: [2025, 5],
    type: 'work',
  },
  {
    icon: '🎓',
    date: 'Aug 2022 – May 2026',
    name: 'BS Computer Science & Mathematics · Frostburg State University',
    location: 'Frostburg, MD',
    start: [2022, 8],
    end: [2026, 5],
    type: 'education',
  },
];
