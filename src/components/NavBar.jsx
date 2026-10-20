import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../data/routes';
import WebLogo from '../assets/web-logo-updated.svg?react';

const Navigation = ({ onThemeClick }) => (
  <header id="header">
    <Link to="/" className="nav-home" aria-label="Home">
      <WebLogo className="nav-logo" /><span className="nav-name">Stephen Yang</span>
    </Link>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <button
      className="theme-btn"
      onClick={onThemeClick}
      title="Change theme"
      aria-label="Change theme"
    >◐</button>
  </header>
);

export default Navigation;
