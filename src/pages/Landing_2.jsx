import React from 'react';
import Main from '../components/Main';
import { Link } from 'react-router-dom';
import styles from '../styles/Landing.module.css';

const Landing = ({ onThemeClick }) => (
  <Main
    title="Stephen Yang"
    description="Personal website of Stephen Yang, computational biology student at Brown University"
    onThemeClick={onThemeClick}
  >
    <section className={styles.hero}>
      <h1 className={styles.name}>Stephen Yang</h1>
      <p className={styles.tagline}>Computational Biology @ Brown University</p>
      <p className={styles.bio}>
        I'm interested in genomics, AI applications in healthcare, and building innovative solutions. 
        This site is for sharing my projects, writing, and experiences.
      </p>
      <nav className={styles.ctas}>
        <Link to="/about" className={styles.ctaLink}>About</Link>
        <Link to="/projects" className={styles.ctaLink}>Projects</Link>
        <Link to="/blog" className={styles.ctaLink}>Blog</Link>
        <Link to="/contact" className={styles.ctaLink}>Contact</Link>
      </nav>
    </section>
  </Main>
);

export default Landing;
