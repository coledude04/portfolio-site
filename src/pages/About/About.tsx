import {
  PERSON,
  VALUES,
  TIMELINE,
  type TimelineItem,
} from '../../data/constants';
import styles from './About.module.css';

// ── Gantt helpers ─────────────────────────────────────────────
/** Convert [year, month] to a fractional year value for math. */
function toFrac([year, month]: [number, number]): number {
  return year + (month - 1) / 12;
}

// Overall span: school start → school end
const GANTT_START = toFrac([2022, 8]);
const GANTT_END   = toFrac([2026, 5]);
const GANTT_SPAN  = GANTT_END - GANTT_START;

function barStyle(item: TimelineItem): React.CSSProperties {
  const left  = ((toFrac(item.start) - GANTT_START) / GANTT_SPAN) * 100;
  const width = ((toFrac(item.end)   - toFrac(item.start)) / GANTT_SPAN) * 100;
  return { left: `${left}%`, width: `${width}%` };
}

// Build a sorted list of unique year markers for the axis
const YEAR_MARKERS: { label: string; pct: number }[] = [];
for (let y = 2023; y <= 2026; y++) {
  YEAR_MARKERS.push({
    label: String(y),
    pct: ((toFrac([y, 1]) - GANTT_START) / GANTT_SPAN) * 100,
  });
}

export default function About() {
  const workItems = TIMELINE.filter(t => t.type === 'work');
  const eduItems  = TIMELINE.filter(t => t.type === 'education');

  return (
    <main className={styles.page}>
      {/* ── Header ─────────────────────────────────── */}
      <header className={styles.header}>
        <span className={styles.label}>Who I am</span>
        <h1 className={styles.title}>About me</h1>
      </header>

      {/* ── Bio ────────────────────────────────────── */}
      <section className={styles.bio} aria-label="Bio">
        <div className={styles.bioText}>
          {PERSON.bio.map((paragraph, i) => (
            // Bio paragraphs may contain <strong> tags — safe, no user input
            // eslint-disable-next-line react/no-danger
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
        <div className={styles.bioImage}>
          {/* Replace with <img src="..." alt="Cole" /> */}
          <div className={styles.avatar} aria-hidden="true">👤</div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────── */}
      <section className={styles.values} aria-labelledby="values-heading">
        <h2 id="values-heading" className={styles.valuesTitle}>
          What I value
        </h2>
        <div className={styles.valueGrid}>
          {VALUES.map(({ icon, name, desc }) => (
            <div key={name} className={styles.valueCard}>
              <span className={styles.valueIcon} aria-hidden="true">{icon}</span>
              <div className={styles.valueContent}>
                <p className={styles.valueName}>{name}</p>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────── */}
      <section className={styles.timeline} aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className={styles.timelineTitle}>
          Experience &amp; Education
        </h2>

        {/* Gantt chart */}
        <div className={styles.gantt}>

          {/* Axis row — ticks over the tracks */}
          <div className={styles.ganttAxisRow}>
            <div className={styles.ganttAxis}>
              {YEAR_MARKERS.map(({ label, pct }) => (
                <span
                  key={label}
                  className={styles.ganttTick}
                  style={{ left: `${pct}%` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Work lane — permanent callouts above each bar */}
          <div className={styles.ganttLane}>
            <div className={`${styles.ganttTrack} ${styles.ganttTrackWork}`}>
              {workItems.map(item => (
                <div
                  key={item.name}
                  className={styles.ganttBarWrap}
                  style={barStyle(item)}
                >
                  <div className={`${styles.ganttBar} ${styles.ganttBarWork}`} />
                  <div className={styles.ganttCalloutAbove}>
                    <span className={styles.ganttCalloutName}>
                      {item.icon} {item.name.split(' · ').pop()}
                    </span>
                    <span className={styles.ganttCalloutRole}>
                      {item.name.split(' · ')[0]}
                    </span>
                    <span className={styles.ganttCalloutDate}>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education lane — permanent callout below the bar */}
          <div className={styles.ganttLane}>
            <div className={`${styles.ganttTrack} ${styles.ganttTrackEdu}`}>
              {eduItems.map(item => (
                <div
                  key={item.name}
                  className={styles.ganttBarWrap}
                  style={barStyle(item)}
                >
                  <div className={`${styles.ganttBar} ${styles.ganttBarEdu}`} />
                  <div className={styles.ganttCalloutBelow}>
                    <span className={styles.ganttCalloutName}>
                      {item.icon} {item.name.split(' · ').pop()}
                    </span>
                    <span className={styles.ganttCalloutRole}>
                      {item.name.split(' · ')[0]}
                    </span>
                    <span className={styles.ganttCalloutDate}>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
