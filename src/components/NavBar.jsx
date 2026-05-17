import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../data/routes';
import WebLogo from '../assets/web-logo-updated.svg?react';

const Navigation = ({ onThemeClick }) => (
  <header id="header">
    <WebLogo
      className="nav-logo"
      onClick={onThemeClick}
      title="Click to change theme"
      aria-label="Toggle theme"
    />
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
  </header>
);

export default Navigation;
