import Main from '../components/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = ({ onThemeClick }) => {
  return (
    <Main 
      title="Contact"
      description="Get in touch with Stephen Yang"
      onThemeClick={onThemeClick}
    >
      <article>
        <h1>Contact</h1>
        <p>I'd love to hear from you! Feel free to reach out through any of the platforms below:</p>
        <div style={{ margin: '2em 0' }}>
          <ContactIcons />
        </div>
        <p>Or email me directly at <a href="mailto:stephencyang5@gmail.com">stephencyang5@gmail.com</a></p>
      </article>
    </Main>
  );
};

export default Contact; 