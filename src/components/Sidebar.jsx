import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css'; // Import as a module
// Fix: Use default import for SVGR
import WebLogo from '../assets/web-logo-updated.svg?react';
import ContactIcons from './Contact/ContactIcons.jsx';

const Sidebar = ({ onThemeClick }) => (
  <section id="sidebar" className={styles.sidebar}> {/* Apply module class */}
    <section id="logo_div" className={styles.intro}> {/* Apply module class */}

        <WebLogo
          id="logo" // Keep ID for potential specific targeting if needed
          alt="click to change theme"
          className={styles.logo} // Apply module class for styling
          onClick={onThemeClick}
        />
  
    </section>
    <section className={styles.blurb} id="nav_blurb"> {/* Apply module class */}
      <h2>About</h2>
      <p>
        Hi! I'm Stephen. I'm currently a junior at Brown University studying computational biology!
        I love genomics, computational healthcare, and sharing my experiences with others.
      </p>
    </section>

    <section className={styles.footer}> {/* Apply module class for ID */}
      <p>This site was last updated on: 6/10/2025</p>
    </section>

    <section id={styles.links}> {/* Apply module class for ID */}
      <p><ContactIcons /></p>
    </section>
  </section>
);

export default Sidebar;
