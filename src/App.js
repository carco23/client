import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Highlights from './components/Highlights/Highlights';
import Services from './components/Services/Services';
import Footer from './components/Footer/footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About/>
        <Skills/>
        <Highlights/>
        <Services/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
