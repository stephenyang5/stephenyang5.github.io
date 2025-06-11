import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import Main from '../components/Main';

// Simple frontmatter parser
const parseFrontmatter = (content) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return { data: {}, content };
  
  const frontmatter = match[1];
  const data = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      // Remove quotes if present
      data[key.trim()] = value.replace(/^["']|["']$/g, '');
    }
  });
  
  return {
    data,
    content: content.slice(match[0].length).trim()
  };
};

const BlogPost = ({ onThemeClick }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const module = await import(`../data/posts/${slug}.md`);
        const response = await fetch(module.default);
        const text = await response.text();
        const { data, content } = parseFrontmatter(text);
        setMetadata(data);
        setContent(content);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('Post not found');
      }
    };

    loadPost();
  }, [slug]);

  if (error) {
    return (
      <Main 
        title="Error"
        description="Blog post not found"
        onThemeClick={onThemeClick}
      >
        <article>
          <h1>Error</h1>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')}>Return to Blog</button>
        </article>
      </Main>
    );
  }

  if (!metadata) {
    return (
      <Main 
        title="Loading..."
        description="Loading blog post"
        onThemeClick={onThemeClick}
      >
        <article>
          <p>Loading...</p>
        </article>
      </Main>
    );
  }

  return (
    <Main 
      title={metadata.title}
      description={metadata.description || "Blog post"}
      onThemeClick={onThemeClick}
    >
      <article>
        <h1 style={{ display: 'inline-block', marginRight: '1em' }}>{metadata.title}</h1>
        {metadata.date && (
          <span className="blog-date" style={{ fontSize: '0.9em', verticalAlign: 'middle' }}>
            <time dateTime={metadata.date}>{metadata.date}</time>
          </span>
        )}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            img: ({ src, alt }) => (
              <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </Main>
  );
};

export default BlogPost;
