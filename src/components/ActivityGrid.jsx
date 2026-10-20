import { useState } from 'react';
import { Link } from 'react-router-dom';
import activity from '../data/activity';
import styles from '../styles/ActivityGrid.module.css';

const entries = new Map(activity.filter(({ value }) => value >= 1 && value <= 10).map(({ date, value }) => [date, value]));
const months = [...new Set([...entries.keys()].sort().map(date => date.slice(0, 7)))];
const monthLabel = month => new Date(`${month}-01T12:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

const ActivityGrid = () => {
  const [monthIndex, setMonthIndex] = useState(Math.max(0, months.length - 1));
  const [selected, setSelected] = useState(null);
  if (!months.length) return <p>No daily check-ins yet.</p>;
  const month = months[monthIndex];
  const [year, monthNumber] = month.split('-').map(Number);
  const dayCount = new Date(year, monthNumber, 0).getDate();
  const days = Array.from({ length: dayCount }, (_, i) => {
    const date = `${month}-${String(i + 1).padStart(2, '0')}`;
    return { date, day: i + 1, value: entries.get(date) };
  });
  const changeMonth = offset => { setMonthIndex(index => index + offset); setSelected(null); };
  return (
    <div className={styles.journal}>
      <div className={styles.scroll} role="region" aria-label="Daily ratings chart, scroll horizontally on small screens" tabIndex={0}>
        <div className={styles.plot}>
          <div className={styles.days} style={{ gridTemplateColumns: `repeat(${dayCount}, 1fr)` }}>
            {days.map(({ date, value }) => (
              <div key={date} className={styles.day}>
                <div className={styles.track}>
                  {value !== undefined ? <button
                    className={styles.mark}
                    style={{ bottom: `${((value - 1) / 9) * 100}%` }}
                    aria-label={`${date}:${value} out of 10`}
                    aria-pressed={selected?.date === date}
                    onClick={() => setSelected({ date, value })}
                    title={`${date}:${value}/10`}
                  >.</button> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={() => changeMonth(-1)} disabled={monthIndex === 0} aria-label="Previous month">{"<-"}</button>
        <span aria-live="polite">{monthLabel(month)}</span>
        <button onClick={() => changeMonth(1)} disabled={monthIndex === months.length - 1} aria-label="Next month">{"->"}</button>
      </div>
      <Link className={styles.more} to="/blog/fitbit-sleep">What I’m learning from these check-ins</Link>
    </div>
  );
};
export default ActivityGrid;