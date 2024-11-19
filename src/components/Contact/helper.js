import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Highlights from '../Highlights/Highlights';
import Services from '../Services/Services';
import Footer from '../Footer/footer';

function Helper() {
  return <>
        <Home/>
        <About/>
        <Skills/>
        <Highlights/>
        <Services/>
  </>;
}

export default Helper;
