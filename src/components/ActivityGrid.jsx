import activity from '../data/activity';
import styles from '../styles/ActivityGrid.module.css';

const WEEKS = 33;

const cellColor = (value) => {
  if (!value) return 'var(--surface)';
  // blend accent into surface: 15% at value=1, 100% at value=10
  const pct = Math.round(((value - 1) / 9) * 85) + 15;
  return `color-mix(in srgb, var(--accent) ${pct}%, var(--surface))`;
};

const buildGrid = () => {
  const lookup = {};
  activity.forEach(({ date, value }) => { lookup[date] = value; });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // align start to the Sunday of the week 26 weeks ago
  const startSunday = new Date(today);
  startSunday.setDate(today.getDate() - today.getDay() - (WEEKS - 1) * 7);

  const weeks = [];
  const cursor = new Date(startSunday);

  while (cursor <= today) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      if (cursor > today) break;
      const iso = cursor.toISOString().split('T')[0];
      week.push({ date: iso, value: lookup[iso] || 0 });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
};

// derive month labels from the grid weeks
const buildMonthLabels = (weeks) => {
  const labels = [];
  let lastMonth = null;
  weeks.forEach((week, i) => {
    const month = new Date(week[0].date).toLocaleString('default', { month: 'short' });
    if (month !== lastMonth) {
      labels.push({ label: month, col: i });
      lastMonth = month;
    }
  });
  return labels;
};

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ActivityGrid = () => {
  const weeks = buildGrid();
  const monthLabels = buildMonthLabels(weeks);

  return (
    <div className={styles.wrapper}>
      {/* month labels */}
      <div className={styles.months} style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}>
        {monthLabels.map(({ label, col }) => (
          <span key={`${label}-${col}`} className={styles.monthLabel} style={{ gridColumn: col + 1 }}>
            {label}
          </span>
        ))}
      </div>

      <div className={styles.body}>
        {/* day-of-week labels */}
        <div className={styles.dayLabels}>
          {DAY_LABELS.map((d, i) => (
            <span key={d} className={styles.dayLabel} style={{ visibility: i % 2 === 0 ? 'hidden' : 'visible' }}>
              {d}
            </span>
          ))}
        </div>

        {/* grid */}
        <div className={styles.grid}>
          {weeks.map((week, wi) => (
            <div key={wi} className={styles.week}>
              {week.map((day) => (
                <div
                  key={day.date}
                  className={styles.cell}
                  style={{ backgroundColor: cellColor(day.value) }}
                  title={day.value ? `${day.date} — ${day.value}/10` : day.date}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* legend */}
      <div className={styles.legend}>
        <span className={styles.legendLabel}>0</span>
        {[0, 2, 4, 6, 8, 10].map((v) => (
          <div
            key={v}
            className={styles.legendCell}
            style={{ backgroundColor: cellColor(v) }}
          />
        ))}
        <span className={styles.legendLabel}>10</span>
      </div>
    </div>
  );
};

export default ActivityGrid;
