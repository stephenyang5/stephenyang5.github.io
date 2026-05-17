import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from './NavBar';
import ContactIcons from './Contact/ContactIcons';

const Main = ({ children = null, title = null, onThemeClick, description = "Stephen Yang's personal website" }) => (
  <HelmetProvider>
    <Helmet
      titleTemplate="%s | Stephen Yang"
      defaultTitle="Stephen Yang"
      defer={false}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Navigation onThemeClick={onThemeClick} />
      <div id="main">
        {children}
      </div>
      <footer id="site-footer">
        <ContactIcons />
        <p>Last updated 5/16/2026</p>
      </footer>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
  onThemeClick: PropTypes.func,
};

export default Main;
