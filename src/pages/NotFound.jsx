import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';

const NotFound = () => (
  <section className={styles.hero}>
    <p className={styles.code}>404</p>
    <h1 className={styles.heading}>Page not found.</h1>
    <p className={styles.sub}>Looks like this page doesn't exist.</p>
    <Link to="/" className={styles.link}>← Back home</Link>
  </section>
);

export default NotFound;
