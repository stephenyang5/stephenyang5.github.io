import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Main from "./components/Main";
import './styles/global.css';

const themes = ['theme-default', 'theme-candy', 'theme-dark'];

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  

  return (
    <div className={`app-container ${themes[themeIndex]}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Main title="About" description="Learn more about me" onThemeClick={cycleTheme}><Landing /></Main>} />
          <Route path="/about" element={<Main onThemeClick={cycleTheme}><About /></Main>} />
          <Route path="*" element={<Main fullPage={true}><NotFound /></Main>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
