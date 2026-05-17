import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faFaceGrinStars, faFire } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/About.module.css';
import ActivityGrid from '../components/ActivityGrid';

const roles = [
  'student researcher',
  'teaching assistant',
  'volunteer',
  'musician',
  'developer',
  'hockey fan',
  'informatician',
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
  { title: 'Immanuel Wilkins Quartet: Live at the Village Vanguard Vol. 1', artist: 'Immanuel Wilkins', url: 'https://open.spotify.com/album/3hF2wgxqoKyx9MI3ZOkB91?si=IWlqh_4NRHGqnE10CPcpfg' },
  { title: 'Eddie Told Me So', artist: 'Bob Reynolds', url: 'https://open.spotify.com/album/2DoqgzzWEaATKJgMp5xUhm?si=8cjzve2pQwiDsvwJ3HDdew' },
  { title: 'Dying of Thirst', artist: 'New Jazz Underground', url: 'https://open.spotify.com/album/67nTCjwRIY6k9X78vhd6uC?si=cx8DP39jTO-6xNW_BDKftQ' },
  { title: 'untitled unmastered.', artist: 'Kendrick Lamar', url: 'https://open.spotify.com/album/0kL3TYRsSXnu0iJvFO3rud?si=P9Z05zbIRGaQNK_cAAy8Fw' },
];

const interests = [
  'Computational Healthcare', 'AI Interpretability', 'Genomics', 
  'Neuroscience', 'Precision Medicine', 'Mental Health Advocacy', 'Ice Hockey', 'Jazz', 'Cooking', 
];

const About = () => (
  <div className={styles.about}>

    <section className={styles.intro}>
      <p className={styles.greeting}>Hi, I'm Stephen!</p>
      <p className={styles.roleLine}>
        I'm a <TypeWriter /><span className={styles.cursor}>|</span>
      </p>
      <p className={styles.bio}>
        Always up for a good conversation - especially about AI
        interpretability, clinical decision support systems, or whatever odd problem you're working on.{' '}
        <Link to="/contact">Say hi :)</Link>
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faMusic} className={styles.sectionIcon} />
        Here's what I'm currently listening to
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
      <h2 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faFaceGrinStars} className={styles.sectionIcon} />
        Interests
      </h2>
      <div className={styles.tags}>
        {interests.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faFire} className={styles.sectionIcon} />
        Activity
      </h2>
      <ActivityGrid />
    </section>

  </div>
);

export default About;
