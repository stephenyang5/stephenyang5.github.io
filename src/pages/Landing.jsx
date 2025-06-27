import React from 'react';
import Main from '../components/Main';
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <>
            
            <article>
                <h1>Welcome!</h1>
                <p> This is a website that I built to document an share aspects of my life! </p>
                <p>Convinently, this site also serves as an exercise in web development from scratch.</p>
                <p> Feel free to look around and learn more <Link to="/about"> about me</Link>.
                You can also take a look at my <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link> I've been working on,
                some fun <Link to="/stats">stats</Link>, or <Link to="/contact">contact</Link> me.
                </p>
            </article>
    </>
    );
};

export default Landing;
