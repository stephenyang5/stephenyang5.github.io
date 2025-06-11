// Blog.jsx
import { Link } from 'react-router-dom';
import Main from '../components/Main';
import { useState, useEffect } from 'react';

// Import all markdown files
const postFiles = import.meta.glob('../data/posts/*.md', { 
  as: 'raw',
  eager: true 
});

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

const Blog = ({ onThemeClick }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Starting to load posts...');
      const posts = Object.entries(postFiles).map(([path, content]) => {
        try {
          console.log('Processing post:', path);
          const { data } = parseFrontmatter(content);
          console.log('Post data:', data);
          return {
            ...data,
            slug: path.split('/').pop().replace('.md', '')
          };
        } catch (err) {
          console.error(`Error processing post ${path}:`, err);
          return null;
        }
      }).filter(Boolean);

      console.log('Processed posts:', posts);
      setBlogPosts(posts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError('Failed to load blog posts');
    }
  }, []);

  if (error) {
    return (
      <Main 
        title="Error"
        description="Error loading blog posts"
        onThemeClick={onThemeClick}
      >
        <article>
          <h1>Error</h1>
          <p>{error}</p>
        </article>
      </Main>
    );
  }

  return (
    <Main 
      title="Loading Blog"
      description="Read my latest thoughts and updates"
      onThemeClick={onThemeClick}
    >
      <article>
        <h1>Sharing some thoughts and adventures!</h1>
        {blogPosts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          <ul>
            {blogPosts.map(post => (
              <li key={post.slug} style={{ marginBottom: '2em' }}>
                <Link to={`/blog/${post.slug}`} style={{ fontWeight: 'bold', fontSize: '1.2em', display: 'inline-block', marginRight: '1em' }}>{post.title}</Link>
                {post.date && (
                  <span className="blog-date" style={{ fontSize: '0.9em', verticalAlign: 'middle' }}>
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                )}
                {post.description && (
                  <div className="blog-preview">{post.description}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </article>
    </Main>
  );
};

export default Blog;
