import Main from '../components/Main';
import projects from '../data/projects';
import styles from '../styles/Projects.module.css';
import HeartificialIntelligenceSvg from '../assets/heartificial_intelligence.svg?react';
import WebLogoSvg from '../assets/web-logo-updated.svg?react';

const Projects = ({ onThemeClick }) => (
  <Main
    title="Projects"
    description="A showcase of my work and side projects"
    onThemeClick={onThemeClick}
  >
    <article>
      <h1>Projects</h1>
      <ul className={styles.projectList}>
        {projects.map((project, idx) => (
          <li key={idx} className={styles.projectItem}>
            {project.image && (
              project.image === "heartificial_intelligence.svg" ? (
                <HeartificialIntelligenceSvg
                  alt={project.title + ' screenshot'}
                  className={styles.projectImage}
                />
              ) : project.image === "web-logo-updated.svg" ? (
                <WebLogoSvg
                  alt={project.title + ' screenshot'}
                  className={styles.projectImage}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title + ' screenshot'}
                  className={styles.projectImage}
                />
              )
            )}
            <h2 className={styles.projectTitle}>
              {project.title}
              {project.date && (
                <span className="blog-date" style={{ marginLeft: "1em", fontSize: "0.9em" }}>
                  <time dateTime={project.date}>{project.date}</time>
                </span>
              )}
            </h2>
            <p className={styles.projectDesc}>{project.description}</p>
            {project.tags && (
              <div className={styles.projectTags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.projectTag}>{tag}</span>
                ))}
              </div>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                Live Site
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                GitHub
              </a>
            )}
          </li>
        ))}
      </ul>
    </article>
  </Main>
);

export default Projects; 