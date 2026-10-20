import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import ActivityGrid from '../components/ActivityGrid';

const roles = [
  'student researcher',
  'teaching assistant',
  'volunteer',
  'musician',
  'developer',
  'hockey fan',
  'problem solver',
];

const TypeWriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState('typing');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        const t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('pausing'), 1400);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 0);
      return () => clearTimeout(t);
    }

    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setPhase('typing');
        }, 350);
        return () => clearTimeout(t);
      }
    }
  }, [displayText, phase, roleIndex]);

  return <span className={styles.typed}>{displayText}</span>;
};

const listeningTo = [
  { title: 'FLy With the Wind', artist: 'McCoy Tyner', url: 'https://open.spotify.com/album/5azhVitYbm5tBqr79bzC02?si=wqme6uHmRdGg-_N-F0hVZQ' },
  { title: 'Esperanza', artist: 'Esperanza Spalding', url: 'https://open.spotify.com/album/4JY0pT22MDOxKnIlTCr75G?si=n3XotfYpQRWgcyyw-r3RdQ' },
  { title: 'Dying of Thirst', artist: 'New Jazz Underground', url: 'https://open.spotify.com/album/67nTCjwRIY6k9X78vhd6uC?si=cx8DP39jTO-6xNW_BDKftQ' },
  { title: 'untitled unmastered.', artist: 'Kendrick Lamar', url: 'https://open.spotify.com/album/0kL3TYRsSXnu0iJvFO3rud?si=P9Z05zbIRGaQNK_cAAy8Fw' },
];

const About = () => (
  <div className={styles.about}>

    <section className={styles.intro}>
      
      <h1 className={styles.greeting}>Hi, I'm Stephen!</h1>
      <p className={styles.roleLine}>
        I'm a <TypeWriter /><span className={styles.cursor}>|</span>
      </p>
      <p className={styles.bio}>
        Always up for an good conversation - especially about AI interpretability, clinical decision support systems, or whatever odd problem you're working on.{' '}
        <Link to="/contact">Say hi :)</Link>
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        Recent Listens!
      </h2>
      <ul className={styles.musicList}>
        {listeningTo.map((album) => (
          <li key={album.title} className={styles.musicItem}>
            <a href={album.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.albumTitle}>{album.title}</span>
              {album.artist && (
                <span className={styles.albumArtist}>{album.artist}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Vibe check</h2>
      <ActivityGrid />
    </section>

  </div>
);

export default About;
