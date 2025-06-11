import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import Main from '../components/Main';

const About = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        import('../data/about.md')
        .then((module) => module.default) 
        .then((url) => fetch(url)) 
        .then((response) => response.text()) 
        .then((text) => setContent(text)) 
        .catch((error) => console.error('Error loading Markdown:', error));
      }, []);
      
    return(
        <>
            <article id="about">
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({ href, children }) => (
                          <a href={href} target="_blank" rel="noopener noreferrer">
                            {children}
                          </a>
                        ),
                      }}
                      >{content}</ReactMarkdown>
            </article>
        </>
    )
}

export default About;