// Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/iconOriginal.svg';
import { Link } from 'react-scroll';
import Hamburger from '../../assets/hamburger.svg'
import { useState, useEffect } from 'react';
import FAQ from '../../assets/FAQ.svg'

function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false)

  const [number, setNumber] = useState(1)

  const openMenu = () => {
    setIsOpen(true)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }

  const numberChange = (num) => {
    setNumber(num)
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
      <a href='/' className={styles.logoHref}><img src={Logo} alt="Logo" className={styles.logo} /></a>
      <div className={styles.menu} style={toggledStyle} >
        <div className={styles.menuItems}>
        <img src={require('../../assets/close.png')} onClick={closeMenu} />
        <Link onClick={closeMenu} to="home" smooth={true} duration={500} className={location.pathname === '/' ? styles.active : ''}>Home</Link>
        <Link onClick={closeMenu} to="aboutUs" smooth={true} duration={500} className={location.pathname === '/about' ? styles.active : ''}>Who we are</Link>
        <Link onClick={closeMenu} to="skills" smooth={true} duration={500} className={location.pathname === '/team' ? styles.active : ''}>Our Team</Link>
        <Link onClick={closeMenu} to="highlights" smooth={true} duration={500} className={location.pathname === '/highlights' ? styles.active : ''}>Our Success Stories</Link>
        <Link onClick={closeMenu} to="services" smooth={true} duration={500} className={location.pathname === '/services' ? styles.active : ''}>Our Services</Link>
        <Link onClick={closeMenu} to="contact" smooth={true} duration={500} className={location.pathname === '/contact' ? styles.active : ''}>Contact Us</Link>
        </div>
      </div>
      <Link to="contact" smooth={true} duration={1000} style={{width: '6%', marginRight: '7%'}}><img src={FAQ} className={styles.faq} /></Link>
      {isOpen && (
              <div className={styles.blur}></div>
      )}
      </>
    ) : (
      <>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navbarItems}>
        <Link onClick={() => numberChange(1)} style={number === 1 ? {borderBottom: '3px solid #BC87D6', height: '5vh', marginTop: '3.5%'} : ''} to="home" smooth={true} duration={500} className={styles.navbarLink}>Home</Link>
        <Link onClick={() => numberChange(2)} style={number === 2 ? {borderBottom: '3px solid #BC87D6', height: '5vh', marginTop: '3.5%'} : ''} to="aboutUs" smooth={true} duration={500} className={styles.navbarLink}>Who We Are</Link>
        <Link onClick={() => numberChange(3)} style={number === 3 ? {borderBottom: '3px solid #BC87D6', height: '5vh', marginTop: '3.5%'} : ''} to="skills" smooth={true} duration={500} className={styles.navbarLink}>Our Team</Link>
        <Link onClick={() => numberChange(4)} style={number === 4 ? {borderBottom: '3px solid #BC87D6', height: '5vh', marginTop: '3.5%'} : ''} to="highlights" smooth={true} duration={500} className={styles.navbarLink}>Our Success Stories</Link>
        <Link onClick={() => numberChange(5)} style={number === 5 ? {borderBottom: '3px solid #BC87D6', height: '5vh', marginTop: '3.5%'} : ''} to="services" smooth={true} duration={500} className={styles.navbarLink}>Our Services</Link>
        <Link onClick={() => numberChange(6)} style={number === 6 ? {borderBottom: '3px solid #BC87D6', height: '5vh', marginTop: '3.5%'} : ''} to="contact" smooth={true} duration={500} className={styles.navbarLink}>Contact Us</Link>
      </div>
      <Link to="contact" onClick={() => numberChange(6)} smooth={true} duration={1000} style={{width: '2%', marginRight: '3%', cursor: 'pointer'}}><img src={FAQ} className={styles.faq} /></Link>
      </>
    )}
    </div>
  );
}

export default Navbar;
