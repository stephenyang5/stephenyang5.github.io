import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Landing_2 from "./pages/Landing_2";

import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Main from "./components/Main";
import './styles/global.css';
import { useEffect } from "react";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Stats from "./pages/Stats";


const themes = ['theme-default', 'theme-lavender', 'theme-dark', 'theme-blue',
  'theme-purple'];

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  useEffect(() => {
    document.body.className = themes[themeIndex];
  }, [themeIndex]);

  

  return (
    <div className={`app-container`}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing_2 onThemeClick={cycleTheme}/>} />

          <Route path="/" element={<Main title="About" description="Learn more about me" onThemeClick={cycleTheme}><Landing /></Main>} />
          <Route path="/about" element={<Main onThemeClick={cycleTheme}><About /></Main>} />
          <Route path="/blog" element={<Blog onThemeClick={cycleTheme} />} />
          <Route path="/blog/:slug" element={<BlogPost onThemeClick={cycleTheme} />} />
          <Route path="/contact" element={<Contact onThemeClick={cycleTheme} />} />
          <Route path="/projects" element={<Projects onThemeClick={cycleTheme} />} /> 
          <Route path="/stats" element={<Stats onThemeClick={cycleTheme} />} />
          <Route path="*" element={<Main fullPage={true}><NotFound /></Main>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
