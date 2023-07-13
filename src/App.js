import Portfolio from './pages/portfolio';
import Contact from "./pages/contact";
import About from "./pages/about";
import Resume from "./pages/resume";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
// import Site from "./components/site.js"

function App() {
  return (
   <BrowserRouter>
   {/* <Site> */}
   <Navbar/>
   <Routes>
   <Route path="/" element={<About/>}/>
   <Route path="/portfolio" element={<Portfolio/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/resume" element={<Resume/>}/>
   </Routes>
   {/* </Site> */}
   </BrowserRouter>
  );
}

export default App;
