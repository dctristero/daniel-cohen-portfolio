import Portfolio from './pages/portfolio';
import Contact from "./pages/contact";
import About from "./pages/about";
import Resume from "./pages/resume";
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.js";

// look at rachelreact for darkmode reference

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

