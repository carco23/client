// Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/performatorLogo.svg';
import { Link } from 'react-scroll';
import Hamburger from '../../assets/hamburger.svg'
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggledStyle = isOpen
    ? {animationName: 'anim', animationDuration: '1s' }
    : {animationName: 'anim1', left: '-50%', animationDuration: '1s'};

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.navbar}>
    
    {isMobile ? (
      <>
      <img className={styles.hamburger} src={Hamburger} onClick={openMenu} />
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.menu} style={toggledStyle} >
        <div className={styles.menuItems}>
        <img src={require('../../assets/close.png')} onClick={closeMenu} />
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
        <Link to="aboutUs" smooth={true} duration={500} className={location.pathname === '/about' ? styles.active : ''}>About Us</Link>
        <Link to="skills" smooth={true} duration={500} className={location.pathname === '/team' ? styles.active : ''}>Our Team</Link>
        <Link to="/highlights" className={location.pathname === '/highlights' ? styles.active : ''}>Highlights</Link>
        <Link to="/services" className={location.pathname === '/services' ? styles.active : ''}>Services</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>Contact Us</Link>
        </div>
      </div>
      <input type="text" placeholder="    Search" />
      </>
    ) : (
      <>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navbarItems}>
        <Link to="/" className={styles.navbarLink}>Home</Link>
        <Link to="aboutUs" smooth={true} duration={500} className={styles.navbarLink}>About Us</Link>
        <Link to="skills" smooth={true} duration={500} className={styles.navbarLink}>Our Team</Link>
        <Link to="/highlights" className={styles.navbarLink}>Highlights</Link>
        <Link to="/services" className={styles.navbarLink}>Services</Link>
        <Link to="/contact" className={styles.navbarLink}>Contact Us</Link>
      </div>
      <input type="text" placeholder="    Search" />
      </>
    )}
    </div>
  );
}

export default Navbar;
