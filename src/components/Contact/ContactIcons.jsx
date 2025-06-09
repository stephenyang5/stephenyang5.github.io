import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact'; // adjust path if needed
import styles from './ContactIcons.module.css';



const ContactIcons = () => (
  <ul className={styles.icons}>
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;