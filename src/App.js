import Portfolio from './pages/portfolio';
import Contact from "./pages/contact";
import About from "./pages/about";
import Resume from "./pages/resume";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.js";

// look at rachelreact for darkmode reference

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/daniel-cohen-portfolio/" element={<About />} />
        <Route path="/daniel-cohen-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/daniel-cohen-portfolio/contact" element={<Contact />} />
        <Route path="/daniel-cohen-portfolio/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

