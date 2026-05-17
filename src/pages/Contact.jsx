import Main from '../components/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactData from '../data/contact';
import styles from '../styles/Contact.module.css';

const Contact = ({ onThemeClick }) => (
  <Main
    title="Contact"
    description="Get in touch with Stephen Yang"
    onThemeClick={onThemeClick}
  >
    <section className={styles.hero}>
      <h1 className={styles.heading}>Let's talk.</h1>
      <p className={styles.sub}>
        Whether it's research, a project, or something else - feel free to reach out!
      </p>

      <ul className={styles.links}>
        {contactData.map(({ label, link, icon }) => (
          <li key={label}>
            <a
              href={link}
              className={styles.link}
              target={link.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <span className={styles.iconWrap}>
                <FontAwesomeIcon icon={icon} />
              </span>
              <span className={styles.label}>{label}</span>
              <span className={styles.arrow}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </Main>
);

export default Contact;
