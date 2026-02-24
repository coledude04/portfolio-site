import { type FormEvent, useState } from 'react';
import { PERSON, SOCIAL_LINKS } from '../../data/constants';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY, // ← paste your key here
        ...form,
      }),
    });

    const data = await res.json();
    setSubmitting(false);
    if (data.success) {
      setSubmitted(true);
      setForm(INITIAL_STATE);
    } else {
      alert('Something went wrong. Please try emailing me directly.');
    }
  };

  return (
    <main className={styles.page}>
      {/* ── Header ─────────────────────────────────── */}
      <header className={styles.header}>
        <span className={styles.label}>Say hello</span>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.subtitle}>
          Whether you have a project in mind, a question, or just want to chat — my
          inbox is always open.
        </p>
      </header>

      <div className={styles.layout}>
        {/* ── Info panel ───────────────────────────── */}
        <aside className={styles.infoPanel}>
          <div className={styles.infoCard}>
            <p className={styles.infoCardTitle}>Contact details</p>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>
                  <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Location</p>
                <p className={styles.contactValue}>{PERSON.location}</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Response time</p>
                <p className={styles.contactValue}>{PERSON.responseTime}</p>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <p className={styles.infoCardTitle}>Find me online</p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Form ─────────────────────────────────── */}
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
        >
          {submitted && (
            <div className={styles.successBanner} role="alert">
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}

          <div className={styles.formRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.label}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                className={styles.input}
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                className={styles.input}
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project inquiry"
              className={styles.input}
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project or question…"
              className={styles.textarea}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Send message →'}
          </button>
        </form>
      </div>
    </main>
  );
}
