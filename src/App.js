import Portfolio from './pages/portfolio/portfolio';
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
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
   <Route path="/" element={<Home/>}/>
   <Route path="/portfolio" element={<Portfolio/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/about" element={<About/>}/>
   </Routes>
   <Footer/>
   {/* </Site> */}
   </BrowserRouter>
  );
}

export default App;
