import { useEffect, useState } from 'react';
import Main from '../components/Main';
import { birthday, countries, restaurants } from '../data/stats';

function getTimeLived(birthday) {
  const now = new Date();
  const birth = new Date(birthday);
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  const diff = now - birth;
  return { years, months, days, diff };
}

const Stats = ({ onThemeClick }) => {
  const [time, setTime] = useState(getTimeLived(birthday));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLived(birthday));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Main title="Fun Stats" description="Some fun stats about me!" onThemeClick={onThemeClick}>
      <article>
        <h1>Fun Stats</h1>
        <section>
          <h2>Time Lived</h2>
          <p>
            {time.years} years, {time.months} months, {time.days} days
            <br />
            (Live: {Math.floor(time.diff / 1000)} seconds)
          </p>
        </section>
        <section>
          <h2>Countries Visited ({countries.length})</h2>
          <ul>
            {countries.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </section>
        <section>
          <h2>Restaurants Tried ({restaurants.length})</h2>
          <ul>
            {restaurants.map((r, i) => (
              <li key={i}>
                {r.name} {r.location && `- ${r.location}`} {r.cuisine && `(${r.cuisine})`}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Main>
  );
};

export default Stats; 