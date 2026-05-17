import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faLeaf, faFlask } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/About.module.css';

const listeningTo = [
  { title: 'Immanuel Wilkins Quartet: Live at the Village Vanguard Vol. 1', artist: 'Immanuel Wilkins', url: 'https://open.spotify.com/album/3hF2wgxqoKyx9MI3ZOkB91?si=IWlqh_4NRHGqnE10CPcpfg' },
  { title: 'Eddie Told Me So', artist: 'Bob Reynolds', url: 'https://open.spotify.com/album/2DoqgzzWEaATKJgMp5xUhm?si=8cjzve2pQwiDsvwJ3HDdew' },
  { title: 'Dying of Thirst', artist: 'New Jazz Underground', url: 'https://open.spotify.com/album/67nTCjwRIY6k9X78vhd6uC?si=cx8DP39jTO-6xNW_BDKftQ' },
  { title: 'untitled unmastered.', artist: 'Kendrick Lamar', url: 'https://open.spotify.com/album/0kL3TYRsSXnu0iJvFO3rud?si=P9Z05zbIRGaQNK_cAAy8Fw' },
];

const interests = [
  'Genomics', 'Computational Healthcare', 'AI Interpretability',
  'Neuroscience', 'Ice Hockey', 'Sports Analytics', 'Jazz', 'Cooking', 'Mental Health Advocacy',
];

const About = () => (
  <div className={styles.about}>

    <section className={styles.intro}>
      <p className={styles.greeting}>Hi, I'm Stephen.</p>
      <p className={styles.bio}>
        I'm a junior at Brown University studying computational biology and piecing
        together the{' '}
        <a href="https://www.brown.edu/academics/undergraduate/open-curriculum" target="_blank" rel="noopener noreferrer">
          Open Curriculum
        </a>
        . I'm particularly excited about how computational approaches can drive
        progress in healthcare and biotechnology.
      </p>
      <p className={styles.bio}>
        Outside of class I've been volunteering, doing research, and building side projects. In my free time I enjoy getting out
        into nature, playing ice hockey, and making music with friends!
      </p>
      <p className={styles.bio}>
        Always up for a good conversation - especially about, AI
        interpretability, med tech, or whatever odd problem you're working on.{' '}
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
        <FontAwesomeIcon icon={faFlask} className={styles.sectionIcon} />
        Interests
      </h2>
      <div className={styles.tags}>
        {interests.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </section>

  </div>
);

export default About;
