import React from 'react';      
import { Link } from 'react-router-dom';
import '../styles/Sidebar.module.css';
import myImage from '../assets/web-logo.png';

const Sidebar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/">
                <img src={myImage} alt="something here" className="logo"/>
            </Link>
            <header>
                <h2>My Personal Website</h2>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>
                Hi! I'm Stephen this is a quick about section that I'm working on!
            </p>
        </section>

        <section id='footer'>
            <p>
                This site was last updated on: 12/27/2024
            </p>

        </section>

    </section>
);

export default Sidebar;