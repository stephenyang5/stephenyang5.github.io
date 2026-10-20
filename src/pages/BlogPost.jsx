import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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

const postFiles = import.meta.glob('../data/posts/*.md', {
  as: 'raw',
  eager: true
});

const BlogPost = ({ onThemeClick }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const path = Object.keys(postFiles).find((filePath) =>
      filePath.endsWith(`/${slug}.md`)
    );

    if (!path) {
      setError('Post not found');
      return;
    }

    const { data, content: body } = parseFrontmatter(postFiles[path]);
    setMetadata(data);
    setContent(body);
    setError(null);
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
          rehypePlugins={[rehypeRaw]}
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
