import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Helper from './components/Contact/helper';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Highlights from './components/Highlights/Highlights';
import Services from './components/Services/Services';
import Footer from './components/Footer/footer'
import Page from './components/highlightsPage/page';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Helper />} />
          <Route path='/highlights' element={<Page/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
