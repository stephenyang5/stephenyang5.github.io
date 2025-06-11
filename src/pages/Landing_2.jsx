import React from 'react';
import Main from '../components/Main';
import { Link } from 'react-router-dom';
const Landing = ({ onThemeClick }) => {
    return (
        <Main
            title="Welcome to My Website"
            description="This is a personal website to share aspects of my life, projects, and interests."
            onThemeClick={onThemeClick}
            >
                <>
                    <article>
                        <h1>Welcome!</h1>
                        <p> This is a website that I built to document and share my life! </p>
                        <p>Conveniently, this site also serves as my first exercise in web development from scratch.</p>
                        <p> Feel free to look around and learn more <Link to="/about"> about me</Link>.
                        You can also take a look at  <Link to="/projects">projects</Link> I've been working on,
                        some fun <Link to="/stats">stats</Link>, or <Link to="/contact">contact</Link> me to see my resume and learn about anything else!
                        </p>
                    </article>
            </>
        </Main>
    );
};

export default Landing;
