// Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/performatorLogo.svg';
import { Link } from 'react-scroll';
import Hamburger from '../../assets/hamburger.svg'

function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <img className={styles.hamburger} src={Hamburger} />
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navbarItems}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
        <Link to="aboutUs" smooth={true} duration={500} className={location.pathname === '/about' ? styles.active : ''}>About Us</Link>
        <Link to="skills" smooth={true} duration={500} className={location.pathname === '/team' ? styles.active : ''}>Our Team</Link>
        <Link to="/highlights" className={location.pathname === '/highlights' ? styles.active : ''}>Highlights</Link>
        <Link to="/services" className={location.pathname === '/services' ? styles.active : ''}>Services</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contact Us</Link>
      </div>
      <input type="text" placeholder="    Search" />
    </div>
  );
}

export default Navbar;
