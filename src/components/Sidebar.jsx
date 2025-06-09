import React from 'react';      
import { Link } from 'react-router-dom';
import '../styles/Sidebar.module.css';
import myImage from '../assets/web-logo.png';
import ContactIcons from './Contact/ContactIcons.jsx';

const Sidebar = ({ onThemeClick }) => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/">
        <img
          src={myImage}
          alt="click to change theme"
          className="logo"
          onClick={onThemeClick}
          style={{
            cursor: "pointer",
            borderRadius: '50%',
            transition: 'filter 0.3s',
          }}
        />
      </Link>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi! I'm Stephen. I'm currently a sophomore at Brown University studying computational biology!
        I love genomics, programming, and sharing my experiences with others. 
      </p>
    </section>

    <section id='footer'>
      <p>This site was last updated on: 6/09/2025</p>
    </section>

    <section id="links">
      <p><ContactIcons /></p>
    </section>
  </section>
);

export default Sidebar;
